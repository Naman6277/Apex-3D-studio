import React from 'react';
import { Zap, Palette, Smartphone, ShieldCheck, MessageCircle, Sparkles } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      number: '01',
      emojiTitle: '⚡ 48-Hour Rapid Delivery',
      description: 'Complete design, domain, and server setup in under two days.',
      detail: 'No 8-week agency delays. We architect, build, and deploy your live 3D website within 48 hours flat.',
      icon: Zap,
      glow: 'indigo' as const
    },
    {
      number: '02',
      emojiTitle: '🎨 Next-Gen 3D & Glassmorphic Visuals',
      description: 'Make your business stand out from boring, flat templates.',
      detail: 'Interactive 3D perspective cards, floating geometric elements, and luminous glassmorphism that command instant authority.',
      icon: Palette,
      glow: 'cyan' as const
    },
    {
      number: '03',
      emojiTitle: '📱 Mobile-First Conversion Engine',
      description: 'Click-to-call buttons and instant lead forms designed to get phone inquiries.',
      detail: 'Touch-optimized layouts, sticky mobile call/WhatsApp bars, and zero horizontal scrolling on every smartphone.',
      icon: Smartphone,
      glow: 'indigo' as const
    },
    {
      number: '04',
      emojiTitle: '🛡️ Zero-Risk 50/50 Payment Model',
      description: 'Pay 50% deposit to start; pay final balance ONLY after reviewing and approving the live site.',
      detail: 'Your investment is 100% protected. Review and test your live website on our staging link before paying the remaining 50%.',
      icon: ShieldCheck,
      glow: 'cyan' as const
    },
    {
      number: '05',
      emojiTitle: '💬 24/7 Direct Support',
      description: 'Instant communication via WhatsApp and Email—no hidden agency call queues.',
      detail: 'Speak directly with your lead developer any time via WhatsApp (+91 8084272027) or Gmail (websiteseller6277@gmail.com).',
      icon: MessageCircle,
      glow: 'indigo' as const
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs uppercase tracking-widest font-bold text-indigo-700">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Zero Technical Stress • Maximum ROI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Business Owners Choose Us
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We eliminate every traditional agency frustration—combining 48-hour speed, interactive 3D aesthetics, and a risk-free 50/50 payment structure.
          </p>
        </div>

        {/* 5 Grid Feature Cards with 3D Tilt Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.number}
                className={idx >= 3 ? 'lg:col-span-1 md:col-span-1' : ''}
              >
                <TiltCard glowColor={item.glow} className="h-full">
                  <div className="h-full rounded-3xl bg-white/85 backdrop-blur-md p-7 sm:p-8 border border-slate-200/90 shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-indigo-400/80 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shadow-2xs">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xs font-extrabold text-indigo-600 bg-indigo-50/80 px-2.5 py-1 rounded-full border border-indigo-200/60">
                          ADVANTAGE {item.number}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-slate-900 mb-2.5 leading-snug">
                        {item.emojiTitle}
                      </h3>

                      <p className="text-slate-800 font-semibold text-sm mb-2 leading-relaxed">
                        {item.description}
                      </p>

                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        {item.detail}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-indigo-600 font-bold">
                      <span>✓ Guaranteed Turnkey Standard</span>
                      <span>100% Verified</span>
                    </div>
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
