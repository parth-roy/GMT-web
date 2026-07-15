import React, { useEffect } from 'react';
import SEOHead from '../seo/SEOHead';
import FAQ from '../components/FAQ';
import { Mail, PhoneCall, LifeBuoy, Clock } from 'lucide-react';

export default function SupportPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const supportChannels = [
    {
      icon: PhoneCall,
      title: 'Call Us',
      detail: '+91 93314 88999',
      sub: 'Mon-Sat, 8am to 8pm',
      color: 'bg-brand-50 text-brand-600',
      action: 'tel:+919331488999'
    },
    {
      icon: Mail,
      title: 'Email Support',
      detail: 'hello@parthertech.com',
      sub: 'Response time varies with enquiry volume',
      color: 'bg-emerald-50 text-emerald-600',
      action: 'mailto:hello@parthertech.com'
    },
    {
      icon: LifeBuoy,
      title: 'WhatsApp',
      detail: '+91 93314 88999',
      sub: 'Send the booking reference and issue',
      color: 'bg-blue-50 text-blue-600',
      action: 'https://wa.me/919331488999?text=Hi%20GoMyTruck%2C%20I%20need%20help%20with%20a%20booking'
    }
  ];

  return (
    <>
      <SEOHead
        title="Support & Help Center | GoMyTruck"
        description="Need help with your truck booking or driver account? Contact GoMyTruck support via phone or email, or browse our FAQs."
        canonical="/support"
        keywords="gomytruck support, gomytruck customer care number, truck booking help"
      />

      <main className="min-h-screen font-sans bg-slate-50">
        
        {/* Support Hero */}
        <section className="pt-32 pb-20 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <LifeBuoy size={32} />
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 mb-6">
              How can we help you today?
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Whether you're a business tracking a shipment or a driver partner with payout questions, our support team is ready to assist.
            </p>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            {supportChannels.map((channel, idx) => {
              const Icon = channel.icon;
              return (
                <a 
                  key={idx} 
                  href={channel.action}
                  className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-1 hover:border-brand-300 transition-all block text-center group"
                >
                  <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${channel.color}`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{channel.title}</h3>
                  <p className="text-lg font-black text-slate-700 mb-1">{channel.detail}</p>
                  <p className="text-sm font-medium text-slate-500 flex items-center justify-center gap-1.5">
                    <Clock size={14} /> {channel.sub}
                  </p>
                </a>
              );
            })}
          </div>
        </section>

        {/* General FAQs */}
        <FAQ />
      </main>
    </>
  );
}
