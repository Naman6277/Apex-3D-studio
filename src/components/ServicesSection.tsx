import React from 'react';
import { Box, Smartphone, RefreshCw, Server, ArrowRight, CheckCircle2, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface ServicesSectionProps {
  onOpenDemoRequest: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenDemoRequest }) => {
  const services = [
    {
      id: 'custom-3d',
      icon: Box,
      title: 'Custom 3D & Glassmorphic Design',
      tagline: 'Ultra-modern visuals tailored to client brand identity',
      description: 'We build immersive 3D floating badges, interactive product sliders, and futuristic glassmorphic UI components that make your business look like an industry-leading authority.',
      bullets: [
        'Custom WebGL & CSS 3D perspective elements',
        'Crisp light mode glassmorphism & soft drop-shadows',
        'Before/After interactive comparison sliders',
        'Built to hold attention and slash bounce rates'
      ],
      glow: 'indigo' as const
    },
    {
      id: 'mobile-first',
      icon: Smartphone,
      title: 'Mobile-First Optimization & Speed',
      tagline: 'Instant click-to-call buttons and 100% responsive layouts',
      description: 'Over 78% of local service customers browse on their phones during emergencies. We design touch-optimized conversion layouts with zero horizontal scroll and sticky bottom action bars.',
      bullets: [
        'Sticky 1-tap click-to-call emergency lines',
        'Sub-second load times on 4G/5G mobile networks',
        'Zero layout shifts (CLS < 0.05)',
        'Thumb-friendly interactive quote forms'
      ],
      glow: 'cyan' as const
    },
    {
      id: 'turnkey-setup',
      icon: RefreshCw,
      title: 'Turnkey Setup & Domain Transfer',
      tagline: 'Complete DNS, domain, and server migration',
      description: 'No technical headaches or IT jargon. We handle your entire domain registration or DNS switch, SSL certificates, business email routing, and cloud deployment in one seamless sweep.',
      bullets: [
        'Zero-downtime domain DNS propagation',
        'Free automated SSL encryption security',
        'Google Business Profile & Maps alignment',
        'Ready to accept real leads in 48 hours'
      ],
      glow: 'indigo' as const
    },
    {
      id: 'maintenance-hosting',
      icon: Server,
      title: 'Monthly Maintenance & Hosting',
      tagline: '24/7 uptime monitoring, security updates, and content edits',
      description: 'Never worry about broken plugins, expired certificates, or server crashes. We provide enterprise-grade hosting with continuous automated backups and on-demand content tweaks.',
      bullets: [
        '99.99% Guaranteed uptime on global edge CDN',
        'Continuous automated daily cloud backups',
        'Priority same-day content and pricing updates',
        'DDoS defense & security firewall monitoring'
      ],
      glow: 'cyan' as const
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineered For Immediate Business Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Specialized Services For Service Businesses
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Every element is engineered for one specific purpose: turning cold website visitors into high-value phone calls and qualified estimate requests.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <TiltCard key={srv.id} glowColor={srv.glow} className="h-full">
                <div className="h-full rounded-3xl bg-white p-8 sm:p-10 flex flex-col justify-between border border-slate-200/90 shadow-md hover:border-indigo-400/80 transition-all">
                  <div>
                    {/* Floating Icon Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div 
                        className={`w-14 h-14 rounded-2xl p-0.5 shadow-md transform-style-3d hover:rotate-12 transition-transform ${
                          srv.glow === 'indigo'
                            ? 'bg-gradient-to-tr from-indigo-500 to-cyan-500 shadow-indigo-500/20'
                            : 'bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-cyan-500/20'
                        }`}
                        style={{ transform: 'translateZ(20px)' }}
                      >
                        <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                          <Icon className={`w-7 h-7 ${srv.glow === 'indigo' ? 'text-indigo-600' : 'text-cyan-600'}`} />
                        </div>
                      </div>

                      <span className="text-[11px] font-mono text-indigo-700 font-bold uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
                        Turnkey In 48h
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2" style={{ transform: 'translateZ(15px)' }}>
                      {srv.title}
                    </h3>
                    <div className="text-xs font-semibold text-indigo-600 mb-4">
                      {srv.tagline}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {srv.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-slate-700">
                      {srv.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action button */}
                  <button
                    onClick={() => onOpenDemoRequest(srv.title)}
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-slate-700 hover:text-indigo-600 bg-slate-100 hover:bg-slate-200/80 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Request Demo For This Service</span>
                    <ArrowRight className="w-4 h-4 text-indigo-600" />
                  </button>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
