import React from 'react';
import { Clock, Zap, Check, X, ArrowRight, ShieldCheck, Flame, CreditCard } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const SpeedGuarantee: React.FC = () => {
  const steps = [
    {
      hours: '0h – 12h',
      title: 'Phase 1: Architecture & Trade Discovery',
      desc: 'We analyze your service niche, competitor gaps, and top-converting local keywords to craft a laser-focused conversion outline.'
    },
    {
      hours: '12h – 30h',
      title: 'Phase 2: 3D Design & Interactive Engineering',
      desc: 'Our WebGL developers build custom 3D floating badges, mobile click-to-call bars, and glassmorphic UI components.'
    },
    {
      hours: '30h – 48h',
      title: 'Phase 3: Turnkey DNS Migration & Live Handover',
      desc: 'Zero-downtime DNS propagation, SSL deployment, speed auditing (95+ Google score), and full client transfer.'
    }
  ];

  return (
    <section id="speed" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs uppercase tracking-widest font-bold text-indigo-700">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>Speed Is The Ultimate Competitive Moat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How We Deliver in 48 Hours Flat
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Traditional web agencies drag projects out for 8 to 14 weeks while charging thousands in bloated hourly fees. We cut out the meetings and ship high-converting code immediately.
          </p>
        </div>

        {/* 3 Step Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((st, i) => (
            <TiltCard key={i} glowColor="indigo">
              <div className="h-full rounded-2xl bg-white p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-mono font-bold text-indigo-700 inline-block mb-4">
                    ⚡ {st.hours}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {st.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Comparison Table: Vertex 3D vs Legacy Agencies */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-white p-6 sm:p-10 border border-slate-200/90 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-8">
              Why Service Business Owners Choose Vertex 3D
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Left: Vertex 3D */}
              <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-200/80 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-indigo-200/60">
                  <span className="font-extrabold text-indigo-900 text-base">Vertex 3D Web Studio</span>
                  <span className="text-[11px] font-mono text-emerald-700 uppercase font-bold">The Standard</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>48-Hour delivery guarantee</strong> from kickoff</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>50/50 Razorpay Model:</strong> $175 deposit, $175 on approval</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Free live 3D demo preview</strong> before any payment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>100% Turnkey setup:</strong> DNS, SSL, and server included</span>
                  </li>
                </ul>
              </div>

              {/* Right: Traditional Legacy Agencies */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 opacity-80">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <span className="font-bold text-slate-500 text-base">Traditional Web Agencies</span>
                  <span className="text-[11px] font-mono text-rose-500 uppercase font-semibold">Legacy Path</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-500">
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>6 to 14 weeks of endless discovery calls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>$3,500 – $10,000+ with hourly scope creep</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Static flat templates that look identical to competitors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Client forced to configure complex hosting and DNS alone</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
