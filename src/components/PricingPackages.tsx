import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Globe, CreditCard, Sparkles } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { DUAL_REGIONAL_PACKAGES, CurrencyType, RegionalPackage, formatPrice } from '../utils/pricingCalculator';

interface PricingPackagesProps {
  onSelectRegionalPackage: (pkg: RegionalPackage) => void;
  onOpenRazorpayModal: (type?: 'deposit' | 'balance', pkg?: RegionalPackage) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({
  onSelectRegionalPackage,
  onOpenRazorpayModal
}) => {
  const [currency, setCurrency] = useState<CurrencyType>('USD');

  const currentPackages = DUAL_REGIONAL_PACKAGES[currency];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs uppercase tracking-widest font-bold text-indigo-700">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Dual Regional Pricing • 50/50 Deposit Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Transparent Pricing With Price Anchoring
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Switch between International (USD) and Indian Local Business (INR) packages. Reserve your 48-hour build with a 50% upfront deposit and pay the 50% final balance only after reviewing your live site.
          </p>

          {/* Toggle Switch between USD (International) and INR (India) */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-white border border-slate-200 shadow-md gap-1">
              <button
                onClick={() => setCurrency('USD')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>INTERNATIONAL CLIENTS (USD $)</span>
              </button>

              <button
                onClick={() => setCurrency('INR')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  currency === 'INR'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span className="text-sm">🇮🇳</span>
                <span>INDIAN LOCAL BUSINESSES (INR ₹)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {currentPackages.map((pkg) => (
            <TiltCard key={pkg.id} glowColor="indigo" className="h-full">
              <div
                className={`h-full rounded-3xl p-8 sm:p-10 flex flex-col justify-between border transition-all relative overflow-hidden bg-white/85 backdrop-blur-md ${
                  pkg.popular
                    ? 'border-indigo-500/40 shadow-[0_20px_40px_rgba(0,0,0,0.05)] ring-1 ring-indigo-500/20'
                    : 'border-slate-200/90 shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-indigo-300'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute top-4 right-6 px-3.5 py-1 rounded-full text-[11px] font-extrabold tracking-wider text-white shadow-xs bg-gradient-to-r from-indigo-600 to-cyan-600">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-bold mb-1">
                    {currency === 'USD' ? 'TAB 1: INTERNATIONAL CLIENTS (USD)' : 'TAB 2: INDIAN LOCAL BUSINESSES (INR)'}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
                    {pkg.tagline}
                  </p>

                  {/* Price Anchoring Box */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="line-through text-slate-400 text-lg sm:text-xl font-mono font-medium">
                        ~{formatPrice(pkg.originalPrice, currency)}~
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 font-mono font-bold text-xs">
                        {pkg.discountPercent}% OFF {currency === 'USD' ? 'Limited Founder Offer' : 'Small Business Special'}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black font-mono text-slate-900 tracking-tight">
                        {formatPrice(pkg.offerPrice, currency)}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">
                        / Flat Turnkey Package
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-200 text-xs font-mono text-indigo-700 font-bold">
                      Terms: {pkg.termsSummary}
                    </div>
                  </div>

                  {/* 50/50 Payment Structure Breakdown */}
                  <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 mb-6 space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
                      <CreditCard className="w-3.5 h-3.5 text-indigo-600" />
                      <span>50/50 Payment Breakdown:</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2 text-slate-800">
                        <span className="px-1.5 py-0.5 rounded bg-indigo-600 text-white font-mono font-bold text-[10px] shrink-0 mt-0.5">
                          STEP 1
                        </span>
                        <span>{pkg.step1Description}</span>
                      </div>

                      <div className="flex items-start gap-2 text-slate-800">
                        <span className="px-1.5 py-0.5 rounded bg-emerald-600 text-white font-mono font-bold text-[10px] shrink-0 mt-0.5">
                          STEP 2
                        </span>
                        <span>{pkg.step2Description}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Included Turnkey Deliverables:
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={() => onOpenRazorpayModal('deposit', pkg)}
                    className="w-full py-3.5 px-3 rounded-xl font-bold text-xs sm:text-sm text-white glow-button-indigo flex items-center justify-center gap-2 shadow-md hover:opacity-95 transition-all cursor-pointer"
                  >
                    <CreditCard className="w-4 h-4 shrink-0" />
                    <span>Pay 50% Upfront Deposit ({formatPrice(pkg.step1Deposit, currency)})</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>

                  <button
                    onClick={() => onSelectRegionalPackage(pkg)}
                    className="w-full py-2.5 rounded-xl font-semibold text-xs text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Request Free Custom Preview First →
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Guarantee Banner below pricing */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-center flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600">
          <span className="flex items-center gap-1.5 text-indigo-700 font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Satisfaction Guarantee</span>
          </span>
          <span className="text-slate-300">•</span>
          <span>Pay Final 50% Only After Reviewing Live Website</span>
          <span className="text-slate-300">•</span>
          <span>Direct Support: +91 8084272027</span>
        </div>
      </div>
    </section>
  );
};
