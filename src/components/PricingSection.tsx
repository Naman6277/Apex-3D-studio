import React from 'react';
import { Check, Shield, Zap, Clock, ArrowRight, HelpCircle } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface PricingSectionProps {
  onOpenQuote: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs uppercase tracking-widest font-semibold text-cyan-400">
            No Surprises. Zero Gimmicks.
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Transparent Upfront Pricing
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Every dollar is quoted and approved on a digital tablet before work starts. We do not charge night, weekend, or holiday dispatch penalties.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Tier 1: Emergency Diagnostic & Repair */}
          <TiltCard glowColor="cyan" className="h-full">
            <div className="h-full rounded-3xl glass-panel p-8 flex flex-col justify-between border border-white/10 hover:border-cyan-400/40 transition-colors">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-2">
                  Immediate Urgent Response
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Emergency Triage
                </h3>
                <p className="text-slate-400 text-xs mb-6">
                  For active bursts, severe heating losses, or flooding requiring emergency isolation.
                </p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold font-mono text-white">$180</span>
                    <span className="text-slate-400 text-xs">/ flat base fee</span>
                  </div>
                  <div className="text-[11px] text-cyan-400 mt-1">
                    ✓ Includes 30-min rapid arrival & full isolation
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-slate-300 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>30-Minute arrival dispatch priority</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Non-destructive acoustic leak isolation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Upfront repair estimate before work begins</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>1-Year emergency warranty on fittings</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full py-3.5 px-4 rounded-xl font-semibold text-xs text-white glass-panel hover:bg-white/10 hover:border-cyan-400/50 flex items-center justify-center gap-2 transition-all"
              >
                <span>Dispatch Emergency Tech</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </TiltCard>

          {/* Tier 2: 3D Diagnostic & Precision Overhaul (Featured) */}
          <TiltCard glowColor="violet" className="h-full">
            <div className="h-full rounded-3xl glass-panel-highlight p-8 flex flex-col justify-between border border-violet-500/40 hover:border-violet-400/70 transition-colors relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-[11px] font-bold text-white shadow-lg tracking-wider">
                RECOMMENDED PROTECTION
              </div>

              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-violet-300 mb-2">
                  Full Diagnostic + Solution
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  3D Laser Diagnostic
                </h3>
                <p className="text-slate-400 text-xs mb-6">
                  Complete FLIR thermal, acoustic, and endoscopic examination with 100% fee waiver.
                </p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold font-mono text-white">$99</span>
                    <span className="text-slate-400 text-xs">/ promo rate</span>
                  </div>
                  <div className="text-[11px] text-emerald-400 mt-1 font-semibold">
                    ★ 100% Fee waived if you proceed with repair
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-slate-300 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>Full 4K digital endoscopic video report</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>FLIR infrared thermal heat loss mapping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>$99 diagnostic credited directly toward repair</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>5-Year parts & labor guarantee</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs text-white glow-button hover:opacity-95 flex items-center justify-center gap-2 shadow-xl transition-all"
              >
                <span>Book 3D Diagnostic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </TiltCard>

          {/* Tier 3: Annual 3D Shield Membership */}
          <TiltCard glowColor="cyan" className="h-full">
            <div className="h-full rounded-3xl glass-panel p-8 flex flex-col justify-between border border-white/10 hover:border-cyan-400/40 transition-colors">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-2">
                  Total Home Care
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Apex 3D Shield Club
                </h3>
                <p className="text-slate-400 text-xs mb-6">
                  Year-round VIP priority, semi-annual tune-ups, and permanent 15% discount on all repairs.
                </p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold font-mono text-white">$19</span>
                    <span className="text-slate-400 text-xs">/ month</span>
                  </div>
                  <div className="text-[11px] text-cyan-400 mt-1">
                    ✓ 2 Free comprehensive seasonal scans yearly
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-slate-300 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Front-of-the-line VIP priority dispatch</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>15% Member discount on all parts & labor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Spring AC & Fall heating safety tune-ups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Lifetime warranty on all Apex installations</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full py-3.5 px-4 rounded-xl font-semibold text-xs text-white glass-panel hover:bg-white/10 hover:border-cyan-400/50 flex items-center justify-center gap-2 transition-all"
              >
                <span>Join Apex Shield Club</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};
