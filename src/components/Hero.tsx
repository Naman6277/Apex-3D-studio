import React, { useState } from 'react';
import { Sparkles, ArrowRight, Clock, Smartphone, ShieldCheck, Zap, Laptop, Layers, Globe, KeyRound, CreditCard } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface HeroProps {
  onOpenDemoRequest: () => void;
  onOpenLoginModal: () => void;
  onOpenRazorpayModal: (type?: 'deposit' | 'balance') => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDemoRequest,
  onOpenLoginModal,
  onOpenRazorpayModal
}) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <section className="relative pt-6 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Turnkey Value Badge */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-indigo-100 shadow-sm text-xs sm:text-sm text-indigo-900">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            <span className="font-bold text-indigo-950">Next-Gen Web Design:</span>
            <span className="text-slate-600 font-medium">Turn visitors into high-paying clients in 48 hours</span>
          </div>
        </div>

        {/* Hero Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition & High-Visibility CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] text-balance">
              Custom 3D & Mobile-Responsive Websites Delivered in{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                48 Hours
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We design high-converting, ultra-fast web experiences for local & international businesses. 100% turnkey setup, zero technical hassle.
            </p>

            {/* High-Visibility CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary CTA */}
              <button
                onClick={onOpenDemoRequest}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base sm:text-lg font-bold text-white glow-button-indigo hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>🚀 Request a Free Demo Preview</span>
                <ArrowRight className="w-5 h-5 text-white/90" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onOpenLoginModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:border-indigo-400 hover:text-indigo-600 transition-all shadow-sm hover:shadow-md cursor-pointer group"
              >
                <KeyRound className="w-4 h-4 text-indigo-600 group-hover:rotate-12 transition-transform" />
                <span>🔑 Login to Explore Live 3D Demos</span>
              </button>
            </div>

            {/* Trust Bar */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 text-indigo-700 font-semibold">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span>⚡ 48-Hour Launch</span>
              </span>
              <span className="text-slate-300 hidden sm:inline" aria-hidden="true">•</span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <Smartphone className="w-4 h-4 text-cyan-600" />
                <span>📱 Mobile-First Design</span>
              </span>
              <span className="text-slate-300 hidden sm:inline" aria-hidden="true">•</span>
              <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>🔒 Secure Razorpay Transfer</span>
              </span>
              <span className="text-slate-300 hidden sm:inline" aria-hidden="true">•</span>
              <span className="flex items-center gap-1.5 text-indigo-700 font-semibold">
                <CreditCard className="w-4 h-4 text-indigo-600" />
                <span>50/50 Payment Model</span>
              </span>
            </div>

            {/* Metrics highlight strip */}
            <div className="grid grid-cols-3 gap-3 pt-3 max-w-xl mx-auto lg:mx-0">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center">
                <div className="text-indigo-600 font-bold text-xl font-mono">48h</div>
                <div className="text-[11px] text-slate-500 font-medium">Concept to Launch</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center">
                <div className="text-cyan-600 font-bold text-xl font-mono">99/100</div>
                <div className="text-[11px] text-slate-500 font-medium">Mobile PageSpeed</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center">
                <div className="text-emerald-600 font-bold text-xl font-mono">3.8x</div>
                <div className="text-[11px] text-slate-500 font-medium">Average Lead Lift</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Device Simulator Showcase */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <TiltCard glowColor="indigo" className="w-full max-w-md">
              <div className="w-full rounded-3xl bg-white p-6 border border-slate-200/90 shadow-xl relative overflow-hidden">
                {/* Device Frame Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                    <span className="text-slate-500 font-mono text-[11px] ml-2">vertex3d.studio</span>
                  </div>

                  {/* Device toggle */}
                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
                    <button
                      onClick={() => setDeviceView('desktop')}
                      className={`p-1 rounded cursor-pointer ${deviceView === 'desktop' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                      aria-label="Desktop preview"
                    >
                      <Laptop className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setDeviceView('mobile')}
                      className={`p-1 rounded cursor-pointer ${deviceView === 'mobile' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                      aria-label="Mobile preview"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Simulated 3D Interactive Viewport */}
                <div className="relative aspect-[4/3] my-4 rounded-2xl bg-gradient-to-b from-slate-50 to-indigo-50/40 border border-indigo-100 overflow-hidden flex flex-col justify-between p-4 group">
                  {/* Subtle dots */}
                  <div 
                    className="absolute inset-0 opacity-40 pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(79, 70, 229, 0.25) 1px, transparent 1px)',
                      backgroundSize: '16px 16px'
                    }}
                  />

                  {/* Top simulation status */}
                  <div className="relative z-10 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1.5 text-indigo-700 font-mono font-semibold">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      <span>60 FPS WebGL / CSS 3D</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold">
                      LIVE PROTOTYPE
                    </span>
                  </div>

                  {/* 3D Floating Isometric Cube Mockup inside Canvas */}
                  <div className="relative z-10 my-auto flex flex-col items-center justify-center py-2">
                    <div className="w-24 h-24 relative perspective-1000 transform-style-3d animate-spin-3d" style={{ animationDuration: '22s' }}>
                      <div className="absolute inset-0 rounded-2xl border-2 border-indigo-500/40 bg-white/90 shadow-[0_15px_35px_rgba(79,70,229,0.2)] flex items-center justify-center backdrop-blur-sm">
                        <Layers className="w-10 h-10 text-indigo-600" />
                      </div>
                    </div>

                    <div className="text-center mt-3">
                      <div className="text-sm font-bold text-slate-900 tracking-tight">
                        High-Converting 3D Interactive Architecture
                      </div>
                      <div className="text-xs text-slate-500">
                        Engineered for your specific local service niche
                      </div>
                    </div>
                  </div>

                  {/* Bottom interactive action bar in preview */}
                  <div className="relative z-10 pt-2 border-t border-slate-200/70 flex items-center justify-between text-[11px]">
                    <span className="text-slate-600 flex items-center gap-1 font-medium">
                      <Globe className="w-3 h-3 text-indigo-600" />
                      Global CDN Ready
                    </span>
                    <button
                      onClick={() => onOpenRazorpayModal('deposit')}
                      className="px-2.5 py-1 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 font-semibold shadow-xs cursor-pointer"
                    >
                      Book Slot ($175) →
                    </button>
                  </div>
                </div>

                {/* Telemetry Footer */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                  <span>Standard Delivery: <strong className="text-slate-800">48h Turnaround</strong></span>
                  <span className="text-indigo-600 font-mono font-bold">100% Turnkey Setup</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};
