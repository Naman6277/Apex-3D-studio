import React from 'react';
import { GraduationCap, Globe2, ShieldCheck, Zap, Sparkles, Code2, Award, CheckCircle2 } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const AboutUsSection: React.FC = () => {
  const coreValues = [
    {
      title: '100% Transparency',
      description: 'Clear flat-rate pricing in USD & INR with zero hidden retainers, surprise add-ons, or agency bureaucracy.',
      icon: ShieldCheck,
      accent: 'text-indigo-600 bg-indigo-50 border-indigo-200'
    },
    {
      title: '48-Hour Rapid Delivery',
      description: 'Streamlined engineering sprints that take your custom 3D prototype from concept to live domain in under 2 days.',
      icon: Zap,
      accent: 'text-cyan-600 bg-cyan-50 border-cyan-200'
    },
    {
      title: 'Zero-Risk Deposit Models',
      description: 'Protected 50/50 payment structure—reserve your slot with a 50% deposit and pay the rest only after approving the live site.',
      icon: Award,
      accent: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    }
  ];

  const targetRegions = ['United States 🇺🇸', 'United Kingdom 🇬🇧', 'Canada 🇨🇦', 'Australia 🇦🇺', 'India 🇮🇳'];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs uppercase tracking-widest font-bold text-indigo-700">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Personal Connection & Engineering Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            About Vertex 3D Web Studio
          </h2>
          <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            Modern Web Engineering Driven by Passion & Speed
          </p>
        </div>

        {/* Main Story & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Founder Story Card */}
          <div className="lg:col-span-7">
            <TiltCard glowColor="indigo" className="h-full">
              <div className="h-full rounded-3xl bg-white/85 backdrop-blur-md p-8 sm:p-10 border border-slate-200/90 shadow-[0_20px_40px_rgba(0,0,0,0.05)] flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider font-bold text-indigo-600">
                        Founder Story & Architecture
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        BCA Engineering Meets WebGL 3D Design
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Introduced by a passionate <strong>Computer Applications (BCA)</strong> developer combining high-performance WebGL 3D design with conversion-focused UI/UX. We saw thousands of hardworking local businesses losing high-paying customers because traditional agencies charged $5,000+ for slow, outdated websites that took months to launch.
                  </p>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    At Vertex 3D Web Studio, every website is hand-engineered with interactive 3D visual depth, sub-second mobile page speeds, and instant click-to-call architecture—giving independent business owners the same digital firepower as industry giants.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <Code2 className="w-4 h-4 text-indigo-600" />
                    <span>BCA Full-Stack & WebGL Specialist</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Direct Founder Communication</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Global Mission Card */}
          <div className="lg:col-span-5">
            <TiltCard glowColor="cyan" className="h-full">
              <div className="h-full rounded-3xl bg-gradient-to-br from-white via-indigo-50/40 to-cyan-50/40 backdrop-blur-md p-8 sm:p-10 border border-indigo-200/80 shadow-[0_20px_40px_rgba(0,0,0,0.05)] flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shadow-md shadow-cyan-500/20">
                      <Globe2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-700">
                        Our Global Mission
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        Empowering Local & Global Brands
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Our mission is to help small & medium businesses in the <strong>US, UK, Canada, Australia, and India</strong> compete with big brands by giving them high-converting 3D mobile websites at budget-friendly rates.
                  </p>

                  {/* Supported Regions Pills */}
                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Serving Service Businesses Across:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {targetRegions.map((region) => (
                        <span
                          key={region}
                          className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs"
                        >
                          {region}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-indigo-100/80 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium">Direct WhatsApp & Call:</span>
                  <a
                    href="https://wa.me/918084272027"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-bold text-indigo-700 hover:underline"
                  >
                    +91 8084272027
                  </a>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* 3 Core Values Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreValues.map((val) => {
            const IconComponent = val.icon;
            return (
              <TiltCard key={val.title} glowColor="indigo" className="h-full">
                <div className="h-full rounded-2xl bg-white/85 backdrop-blur-md p-6 border border-slate-200/90 shadow-[0_20px_40px_rgba(0,0,0,0.05)] flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${val.accent}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-400 mb-0.5">
                      Core Value
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">
                      {val.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
