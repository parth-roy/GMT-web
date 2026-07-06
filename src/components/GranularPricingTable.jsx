import React from 'react';
import { Truck } from 'lucide-react';

export default function GranularPricingTable({ routes = [], title = "Route-Specific Fares" }) {
  if (!routes || routes.length === 0) return null;

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden my-8">
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center gap-3">
        <Truck className="text-brand-600" size={24} />
        <h3 className="text-xl font-bold text-slate-900 m-0">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-700 text-sm uppercase tracking-wider">
              <th className="px-6 py-4 font-semibold border-b border-slate-200">Route</th>
              <th className="px-6 py-4 font-semibold border-b border-slate-200">Vehicle Type</th>
              <th className="px-6 py-4 font-semibold border-b border-slate-200">Capacity</th>
              <th className="px-6 py-4 font-semibold border-b border-slate-200 text-right">Estimated Fare</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {routes.map((route, index) => (
              <tr key={index} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 text-slate-900 font-medium whitespace-nowrap">
                  {route.origin} to {route.destination}
                </td>
                <td className="px-6 py-4 text-slate-600">
                  {route.vehicle}
                </td>
                <td className="px-6 py-4 text-slate-600">
                  {route.capacity}
                </td>
                <td className="px-6 py-4 text-brand-700 font-bold text-right whitespace-nowrap">
                  ₹{route.price.toLocaleString('en-IN')}*
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 text-xs text-slate-500">
        * Estimates shown are base fares and may vary based on exact distance, traffic, and toll taxes.
      </div>
    </div>
  );
}
