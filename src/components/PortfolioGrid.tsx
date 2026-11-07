import React, { useState } from 'react';
import { Sparkles, Check, Eye, X, Lock, Unlock, KeyRound, ExternalLink, ShieldCheck } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface DemoProject {
  id: string;
  title: string;
  shortLabel: string;
  category: string;
  industry: string;
  turnaround: string;
  metric: string;
  metricLabel: string;
  previewUrl: string;
  image: string;
  description: string;
  tags: string[];
  features: string[];
  clientQuote: string;
}

interface PortfolioGridProps {
  onOpenDemoRequest: (projectName?: string) => void;
  onOpenLoginModal: (projectName?: string) => void;
  isUnlocked: boolean;
  unlockedPass?: string | null;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  onOpenDemoRequest,
  onOpenLoginModal,
  isUnlocked,
  unlockedPass
}) => {
  const [activePreview, setActivePreview] = useState<DemoProject | null>(null);

  const projects: DemoProject[] = [
    {
      id: 'plumbing-hvac',
      title: 'Apex 3D Emergency Plumbing & HVAC',
      shortLabel: 'Local Plumbing',
      category: 'Emergency Local Service',
      industry: 'Local Plumbing & HVAC',
      turnaround: 'Built in 42 Hours',
      metric: '+340%',
      metricLabel: 'Inbound Emergency Phone Calls',
      previewUrl: 'https://demo.vertex3d.studio/apex-plumbing-3d',
      image: '/src/assets/images/repaired_pipe_after_1793991978717.jpg',
      description: 'Single-page high-converting emergency prototype with interactive 3D shield badge, live 30-minute dispatch countdown, and interactive Before/After restoration slider.',
      tags: ['CSS 3D Perspective', 'Sticky Call Bar', 'Before/After Slider', 'Instant Dispatch'],
      features: [
        '1-Tap sticky mobile emergency call button',
        'Interactive before/after pipe burst comparison slider',
        'Real-time technician arrival calculation modal',
        '50/50 Payment protection with zero overtime surprises'
      ],
      clientQuote: '"We booked 18 emergency boiler and pipe jobs in our first weekend after Vertex launched this prototype."'
    },
    {
      id: 'dental-aesthetic',
      title: 'Aurora Dental Studio & Aesthetics',
      shortLabel: 'Dental Studio',
      category: 'Luxury Medical & Aesthetics',
      industry: 'Dental Studio & Healthcare',
      turnaround: 'Built in 48 Hours',
      metric: '4.8x',
      metricLabel: 'Consultation Booking Rate',
      previewUrl: 'https://demo.vertex3d.studio/aurora-dental-3d',
      image: '/src/assets/images/portfolio_dental_aesthetic_1793992921339.jpg',
      description: 'Ultra-luxurious bright aesthetic website with crisp indigo accents, interactive smile simulation preview, and automated VIP patient consultation calendar.',
      tags: ['Luxury Aesthetics', 'Smile Simulation', 'Patient Lead Form', 'VIP Scheduling'],
      features: [
        'Interactive smile transformation slider',
        'Direct consultation appointment picker',
        'Verified video patient testimonials carousel',
        'Direct WhatsApp concierge inquiry button'
      ],
      clientQuote: '"Patients tell us our website convinced them to choose us over clinics twice our size. Worth 10x what we paid."'
    },
    {
      id: 'solar-roofing',
      title: 'Lumina Solar & Precision Roofing',
      shortLabel: 'Solar / Roofing',
      category: 'Clean Energy & Contracting',
      industry: 'Solar / Roofing Contracting',
      turnaround: 'Built in 46 Hours',
      metric: '$2.4M',
      metricLabel: 'Solar Pipeline Generated',
      previewUrl: 'https://demo.vertex3d.studio/lumina-solar-roofing-3d',
      image: '/src/assets/images/portfolio_solar_roofing_1793992921524.jpg',
      description: 'Futuristic light glassmorphic platform featuring an interactive 3D roof solar calculator, battery storage selector, and high-ticket homeowner estimate funnel.',
      tags: ['3D Architectural Render', 'ROI Savings Engine', 'Multi-Step Lead Flow', 'Sub-Second Speed'],
      features: [
        '3D isometric home solar irradiation visualizer',
        'Dynamic monthly electric bill savings calculator',
        'Zip code utility rebate detection engine',
        'Calendar booking for on-site drone roof scans'
      ],
      clientQuote: '"Homeowners are blown away by the 3D visualizer. Our consultation booking rate tripled immediately."'
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs uppercase tracking-widest font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              Gated 3D Prototype Vault
            </span>
            {isUnlocked ? (
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-[11px] font-mono font-bold text-emerald-800 flex items-center gap-1">
                <Unlock className="w-3 h-3 text-emerald-600" />
                Unlocked Pass: {unlockedPass || 'ACTIVE'}
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold text-slate-700 flex items-center gap-1">
                <Lock className="w-3 h-3 text-indigo-600" />
                Client Registration Gated
              </span>
            )}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Live 3D Business Demo Showcases
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Explore our 3 flagship business demos (<strong>Local Plumbing</strong>, <strong>Dental Studio</strong>, <strong>Solar/Roofing</strong>). Hover or tap any locked demo to unlock direct live preview access.
          </p>
        </div>

        {/* 3 Showcase Cards Grid (Touch-Optimized) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <TiltCard key={proj.id} glowColor="indigo" className="h-full">
              <div className="h-full rounded-3xl bg-white/85 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between border border-slate-200/90 shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-indigo-400/80 transition-all group overflow-hidden">
                <div>
                  {/* Image Preview Container with Gated Hover/Tap Overlay */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-slate-200 bg-slate-100">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/15 to-transparent" />

                    {/* Gated Hover/Tap Lock Overlay when Locked */}
                    {!isUnlocked && (
                      <div className="absolute inset-0 bg-slate-900/55 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-4 text-center">
                        <div className="w-10 h-10 rounded-full bg-white/95 text-indigo-600 flex items-center justify-center shadow-md mb-2">
                          <Lock className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-white mb-2">
                          Gated 3D Live Preview
                        </span>
                        <button
                          onClick={() => onOpenLoginModal(proj.title)}
                          className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg cursor-pointer transition-all"
                        >
                          🔑 Login to Unlock Live 3D Interactive Demo
                        </button>
                      </div>
                    )}

                    {/* Turnaround Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[11px] font-mono font-bold text-slate-800 shadow-xs">
                      ⚡ {proj.turnaround}
                    </div>

                    {/* Lock / Unlocked Status Badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-mono font-bold shadow-xs flex items-center gap-1">
                      {isUnlocked ? (
                        <span className="text-emerald-700 flex items-center gap-1">
                          <Unlock className="w-3 h-3 text-emerald-600" />
                          UNLOCKED
                        </span>
                      ) : (
                        <span className="text-indigo-700 flex items-center gap-1">
                          <Lock className="w-3 h-3 text-indigo-600" />
                          GATED DEMO
                        </span>
                      )}
                    </div>

                    {/* Metric pill */}
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-right shadow-xs">
                      <div className="text-base font-bold font-mono text-indigo-600">{proj.metric}</div>
                      <div className="text-[9px] text-slate-500 uppercase tracking-tight font-semibold">{proj.metricLabel}</div>
                    </div>
                  </div>

                  {/* Industry & Title */}
                  <div className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-bold mb-1">
                    {proj.industry}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                    {proj.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  {/* Unlocked Direct Live Preview URL Bar */}
                  {isUnlocked && (
                    <div className="mb-4 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
                      <span className="font-mono text-emerald-800 truncate max-w-[200px]">{proj.previewUrl}</span>
                      <button
                        onClick={() => setActivePreview(proj)}
                        className="text-emerald-700 font-bold hover:underline flex items-center gap-1 shrink-0 cursor-pointer"
                      >
                        <span>Open URL</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  )}

                  {/* Feature Tags */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-500 mb-6 pb-4 border-b border-slate-100">
                    {proj.tags.map((tag, i) => (
                      <React.Fragment key={tag}>
                        <span className="text-indigo-600 font-mono font-semibold">#{tag}</span>
                        {i < proj.tags.length - 1 && <span className="text-slate-300">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="space-y-2.5">
                  {isUnlocked ? (
                    <button
                      onClick={() => setActivePreview(proj)}
                      className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Launch Live 3D Interactive Demo</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => onOpenLoginModal(proj.title)}
                      className="w-full py-3.5 px-3 rounded-xl font-bold text-xs sm:text-sm text-white glow-button-indigo shadow-md hover:opacity-95 flex items-center justify-center gap-1.5 transition-all cursor-pointer text-center"
                    >
                      <span>🔑 Login to Unlock Live 3D Interactive Demo</span>
                    </button>
                  )}

                  {/* Secondary Quick Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => (isUnlocked ? setActivePreview(proj) : onOpenLoginModal(proj.title))}
                      className="flex-1 py-2 rounded-xl font-semibold text-xs text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <KeyRound className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{isUnlocked ? 'Inspect Specs' : 'Unlock Preview Link'}</span>
                    </button>
                    <button
                      onClick={() => onOpenDemoRequest(proj.title)}
                      className="flex-1 py-2 rounded-xl font-semibold text-xs text-indigo-700 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Build Mine →</span>
                    </button>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Interactive In-App Demo Preview Modal */}
      {activePreview && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl rounded-3xl bg-white p-6 sm:p-8 border border-slate-200 shadow-2xl text-slate-900 my-8">
            <button
              onClick={() => setActivePreview(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-800 bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close demo preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-5 space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-bold">
                  Live 3D Interactive Sandbox
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                  DIRECT PREVIEW UNLOCKED
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{activePreview.title}</h3>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
                <span>{activePreview.industry}</span>
                <span>•</span>
                <span className="text-emerald-700 font-bold">⚡ {activePreview.turnaround}</span>
                <span>•</span>
                <span className="font-mono text-indigo-600">{activePreview.previewUrl}</span>
              </div>
            </div>

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 mb-6 bg-slate-100">
              <img
                src={activePreview.image}
                alt={activePreview.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent flex items-end p-5">
                <div className="text-xs italic text-white font-medium">{activePreview.clientQuote}</div>
              </div>
            </div>

            <div className="mb-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Engineered Conversion Features Built Into This Demo:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activePreview.features.map((feat, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2 text-xs text-slate-700"
                  >
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>
                  Verified Outcome: <strong className="text-indigo-600 font-mono font-bold">{activePreview.metric}</strong>{' '}
                  {activePreview.metricLabel}
                </span>
              </div>
              <button
                onClick={() => {
                  const title = activePreview.title;
                  setActivePreview(null);
                  onOpenDemoRequest(title);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white glow-button-indigo hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request Custom 48h Demo Like This</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
