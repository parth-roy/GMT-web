import React, { useState } from "react"
import { AlertTriangle, X } from "lucide-react"

const GOODS_TYPES = [
  "General Goods", "Electronics / Consumer Durables", "Building Materials",
  "Machines / Equipment / Spare Parts", "Textiles / Garments",
  "Furniture / Home Furnishings", "House Shifting", "Paper / Plywood / Timber",
]

const initialForm = {
  goodsType: "General Goods", goodsDescription: "", goodsWeightKg: "", goodsQuantity: "1",
  containsRestrictedGoods: false, declarationConfirmed: false,
  laborRequired: false, laborersCount: "1", laborType: "BOTH", handlingInstructions: "",
}

export default function GoodsTypeModal({ isOpen, onClose, onSelect }) {
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState("")
  if (!isOpen) return null

  const update = (event) => {
    const { name, type, checked, value } = event.target
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }))
    setError("")
  }
  const submit = (event) => {
    event.preventDefault()
    if (form.goodsDescription.trim().length < 2) return setError("Describe the goods being transported.")
    if (!(Number(form.goodsWeightKg) > 0)) return setError("Enter the total approximate weight in kilograms.")
    if (!(Number(form.goodsQuantity) >= 1)) return setError("Enter a valid quantity.")
    if (!form.declarationConfirmed) return setError("Confirm that the goods declaration is accurate.")
    onSelect({
      goodsType: form.goodsType,
      goodsDescription: form.goodsDescription.trim(),
      goodsWeightKg: Number(form.goodsWeightKg),
      goodsQuantity: Number(form.goodsQuantity),
      containsRestrictedGoods: form.containsRestrictedGoods,
      handlingInstructions: form.handlingInstructions.trim() || undefined,
      laborRequired: form.laborRequired,
      ...(form.laborRequired ? { laborersCount: Number(form.laborersCount), laborType: form.laborType } : {}),
    })
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="goods-dialog-title">
      <button type="button" className="fixed inset-0 bg-slate-950/50" onClick={onClose} aria-label="Close goods details" />
      <form onSubmit={submit} className="relative bg-white rounded-2xl w-full max-w-xl shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white z-10 p-5 border-b border-slate-200 flex items-center justify-between">
          <div><h2 id="goods-dialog-title" className="text-2xl font-black text-slate-900">Declare your goods</h2><p className="text-sm text-slate-500 mt-1">Accurate load details prevent vehicle mismatches.</p></div>
          <button type="button" onClick={onClose} className="min-w-11 min-h-11 grid place-items-center text-slate-500" aria-label="Close"><X /></button>
        </div>
        <div className="p-5 space-y-5">
          {error && <div role="alert" className="rounded-xl border border-rose-200 bg-rose-50 text-rose-800 p-3 text-sm">{error}</div>}
          <label className="block text-sm font-bold text-slate-700">Goods category
            <select name="goodsType" value={form.goodsType} onChange={update} className="mt-2 w-full min-h-12 rounded-xl border border-slate-300 px-3 bg-white">
              {GOODS_TYPES.map((type) => <option key={type}>{type}</option>)}
            </select>
          </label>
          <label className="block text-sm font-bold text-slate-700">Description
            <textarea name="goodsDescription" value={form.goodsDescription} onChange={update} required maxLength={500} rows={3} placeholder="For example: 12 sealed cartons of garments" className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-3 font-normal" />
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="text-sm font-bold text-slate-700">Total weight (kg)
              <input name="goodsWeightKg" type="number" min="0.1" step="0.1" value={form.goodsWeightKg} onChange={update} required inputMode="decimal" className="mt-2 w-full min-h-12 rounded-xl border border-slate-300 px-3 font-normal" />
            </label>
            <label className="text-sm font-bold text-slate-700">Quantity
              <input name="goodsQuantity" type="number" min="1" step="1" value={form.goodsQuantity} onChange={update} required inputMode="numeric" className="mt-2 w-full min-h-12 rounded-xl border border-slate-300 px-3 font-normal" />
            </label>
          </div>
          <label className="block text-sm font-bold text-slate-700">Handling instructions (optional)
            <textarea name="handlingInstructions" value={form.handlingInstructions} onChange={update} maxLength={1000} rows={2} placeholder="Fragile items, stairs, access restrictions…" className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-3 font-normal" />
          </label>
          <div className="rounded-xl border border-slate-200 p-4 space-y-4">
            <label className="flex items-start gap-3"><input name="laborRequired" type="checkbox" checked={form.laborRequired} onChange={update} className="mt-1 h-5 w-5" /><span><strong>Request loading/unloading workforce</strong><span className="block text-xs text-slate-500">Assigned separately and subject to worker availability.</span></span></label>
            {form.laborRequired && <div className="grid grid-cols-2 gap-4">
              <label className="text-sm font-bold">Workers<select name="laborersCount" value={form.laborersCount} onChange={update} className="mt-2 w-full min-h-11 border rounded-lg px-2">{[1,2,3,4,5,6,7,8,9,10].map((n) => <option key={n}>{n}</option>)}</select></label>
              <label className="text-sm font-bold">Task<select name="laborType" value={form.laborType} onChange={update} className="mt-2 w-full min-h-11 border rounded-lg px-2"><option value="LOADING">Loading</option><option value="UNLOADING">Unloading</option><option value="BOTH">Both</option></select></label>
            </div>}
          </div>
          <label className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4"><input name="containsRestrictedGoods" type="checkbox" checked={form.containsRestrictedGoods} onChange={update} className="mt-1 h-5 w-5" /><span className="text-sm"><strong className="flex gap-2"><AlertTriangle size={18} />This load may contain restricted or regulated goods</strong><span className="block mt-1 text-amber-900">Declare this now. The booking may require review or may not be accepted.</span></span></label>
          <label className="flex items-start gap-3 text-sm"><input name="declarationConfirmed" type="checkbox" checked={form.declarationConfirmed} onChange={update} className="mt-1 h-5 w-5" required /><span>I confirm the category, description, weight and quantity are accurate and I have read the prohibited-goods rules in the <a href="/legal/terms" className="font-bold text-brand-700 underline">Terms</a>.</span></label>
        </div>
        <div className="sticky bottom-0 bg-white border-t border-slate-200 p-5"><button type="submit" className="w-full min-h-12 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold">Save goods details</button></div>
      </form>
    </div>
  )
}
