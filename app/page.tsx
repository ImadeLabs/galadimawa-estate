'use client';

import { useState } from 'react';

// Live conversion rates
const RATES = { USD: 1450, GBP: 1810, EUR: 1560 };

export default function GaladimawaApp() {
  const [currency, setCurrency] = useState<'USD' | 'GBP' | 'EUR'>('USD');

  // --- MATHEMATICAL DATA ---
  const price = 450000000;
  const facilitatorFee = price * 0.05; // ₦22,500,000
  const totalInvest = price + facilitatorFee; // ₦472,500,000
  const estResale = totalInvest * 1.25; // 25% Growth projection
  const profit = estResale - totalInvest;

  const formatN = (num: number) => "₦" + (num || 0).toLocaleString();
  
  const formatConv = (num: number) => {
    const symbol = currency === 'GBP' ? '£' : currency === 'EUR' ? '€' : '$';
    const rate = RATES[currency] || 1450;
    return symbol + (num / rate).toLocaleString(undefined, { maximumFractionDigits: 0 });
  };

  // Specifications based on your requirements (Luxe removed)
  const specs = [
    { size: "5 Bed", type: "Detached Duplex", val: formatN(price) },
    { size: "BQ", type: "Attached Servant Quarter", val: "1 Room" },
    { size: "Solar", type: "Inverter System Installed", val: "Ready" },
    { size: "Security", type: "Turkish Security Doors", val: "Fitted" },
    { size: "Access", type: "Tarred Road In & Out", val: "Done" },
    { size: "Design", type: "Modern Fittings & Furniture", val: "Premium" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-20 font-sans text-gray-900">
      <div className="max-w-md mx-auto bg-white shadow-2xl overflow-hidden rounded-b-[40px]">
        
        {/* Small Header Video Area */}
        <div className="relative h-64 bg-slate-200">
          <video 
            src="/new5bed.mp4" 
            className="w-full h-full object-cover" 
            autoPlay loop muted playsInline controls
          />
          <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider pointer-events-none">
            Live Tour • Galadimawa
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight uppercase">5 Bed Duplex</h1>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Galadimawa District, Abuja</p>
          </div>

          {/* Currency Switcher */}
          <div className="flex justify-center bg-gray-100 p-1 rounded-xl gap-1">
            {(['USD', 'GBP', 'EUR'] as const).map((cur) => (
              <button 
                key={cur} 
                onClick={() => setCurrency(cur)}
                className={`flex-1 py-2 rounded-lg text-xs font-black transition-all ${currency === cur ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'}`}
              >
                {cur}
              </button>
            ))}
          </div>

          {/* Feature Cards (Luxe Removed) */}
          <div className="space-y-2">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Specifications</p>
            <div className="grid grid-cols-1 gap-2">
              {specs.map((item, i) => (
                <div key={i} className="p-4 rounded-2xl border-2 border-gray-50 bg-gray-50/50 flex justify-between items-center">
                  <div className="text-left">
                    <p className="font-bold text-sm text-gray-800">{item.size}</p>
                    <p className="text-[10px] text-gray-500 font-medium uppercase">{item.type}</p>
                  </div>
                  <p className="font-black text-gray-900 text-sm">{item.val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Summary (Fixing the $0 bug) */}
          <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm">
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Net Price</label>
            <div className="flex justify-between items-center">
               <span className="text-2xl font-black text-slate-900">{formatN(price)}</span>
               <span className="text-sm font-bold text-blue-600">≈ {formatConv(price)} {currency}</span>
            </div>
          </div>

          {/* ROI Section (Includes 5% Facilitator Fee) */}
          <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6 text-center">Investment Potential</p>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm text-slate-400">
                <span>Facilitator Fee (5%):</span>
                <span className="font-bold text-white">{formatN(facilitatorFee)}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-400">
                <span>Total Invest:</span>
                <span className="font-bold text-white">{formatN(totalInvest)}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-400">
                <span>Est. Resale:</span>
                <span className="font-black text-emerald-400">{formatN(estResale)}</span>
              </div>
            </div>
            <hr className="border-slate-800 mb-6" />
            <div className="text-center">
              <p className="text-slate-400 text-xs mb-1 uppercase font-bold tracking-tighter">Projected Profit</p>
              <p className="text-4xl font-black text-emerald-400">{formatN(profit)}</p>
              <p className="text-lg font-bold text-blue-400 mt-1 uppercase">≈ {formatConv(profit)} {currency}</p>
            </div>
          </div>

          <button 
            onClick={() => window.open(`https://wa.me/2348105105757?text=I'm interested in the 5 Bed Duplex in Galadimawa`, '_blank')}
            className="w-full bg-[#25D366] text-white font-black py-5 rounded-2xl shadow-xl uppercase active:scale-95 transition-all shadow-green-100"
          >
            DM for more info
          </button>
        </div>
      </div>
    </main>
  );
}