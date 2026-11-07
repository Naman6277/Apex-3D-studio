import React, { useState } from 'react';
import { Eye, Activity, Radio, Cpu, Calendar, CheckCircle } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface DiagnosticShowcaseProps {
  onOpenQuote: () => void;
}

export const DiagnosticShowcase: React.FC<DiagnosticShowcaseProps> = ({ onOpenQuote }) => {
  const [activeMode, setActiveMode] = useState<'thermal' | 'acoustic' | 'endoscopic'>('thermal');

  const modes = [
    {
      id: 'thermal' as const,
      name: 'FLIR Thermal Heat Scan',
      desc: 'Detects micro-fissures, sub-slab hydronic leaks & insulation voids before drywall damage occurs.',
      readout: 'Surface Temp: 68.4°F • Void Delta: +14.2°F (Leak Detected)',
      status: 'Sub-Slab Hot Water Line Active'
    },
    {
      id: 'acoustic' as const,
      name: '3D Ultrasonic Pipe Sonar',
      desc: 'Listens through solid concrete and soil to detect microscopic high-pressure water pinholes.',
      readout: 'Peak Frequency: 41.8 kHz • Resonance: High • Depth: 1.4m',
      status: 'Pinhole Rupture Isolated'
    },
    {
      id: 'endoscopic' as const,
      name: '4K Micro-Camera Scope',
      desc: 'Flexible optical inspection through drain vents with instant digital recording for homeowners.',
      readout: 'Camera Depth: 24.5 ft • Obstruction Grade: Class 2 Root',
      status: 'Trenchless Hydro-Jet Target Identified'
    }
  ];

  const currentMode = modes.find((m) => m.id === activeMode) || modes[0];

  return (
    <section id="diagnostic" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-widest font-semibold text-cyan-400">
              Zero Destruction Guarantee
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Why Guess? We See Inside Walls in Full 3D
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Traditional plumbers sledgehammer through tile and sheetrock just to locate a drip. Apex deploys aerospace-grade 3D acoustic sonars and thermal imaging to pinpoint leaks to within half an inch.
            </p>

            {/* Mode selection buttons */}
            <div className="space-y-3 pt-2">
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                    activeMode === mode.id
                      ? 'bg-gradient-to-r from-cyan-950/60 to-violet-950/40 border-cyan-400/60 text-white shadow-lg shadow-cyan-500/10'
                      : 'glass-panel text-slate-300 hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className={`p-2 rounded-xl mt-0.5 ${activeMode === mode.id ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/5 text-slate-400'}`}>
                    {mode.id === 'thermal' && <Activity className="w-5 h-5" />}
                    {mode.id === 'acoustic' && <Radio className="w-5 h-5" />}
                    {mode.id === 'endoscopic' && <Eye className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base flex items-center gap-2">
                      <span>{mode.name}</span>
                      {activeMode === mode.id && <span className="text-xs text-cyan-400 font-mono">LIVE PREVIEW</span>}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      {mode.desc}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white glow-button hover:opacity-95 transition-all shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Book $99 Diagnostic Scan (Waived on Repair)</span>
              </button>
            </div>
          </div>

          {/* Right Interactive Simulator Column */}
          <div className="lg:col-span-6">
            <TiltCard glowColor="cyan">
              <div className="rounded-3xl glass-panel-highlight p-6 sm:p-8 border border-cyan-500/30 relative overflow-hidden shadow-2xl bg-[#090C12]">
                {/* HUD Top Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20 text-xs">
                  <div className="flex items-center gap-2 font-mono text-cyan-300">
                    <Cpu className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
                    <span>SENSOR ARRAY: 3D-MARK-IV</span>
                  </div>
                  <div className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
                    CALIBRATED 99.8%
                  </div>
                </div>

                {/* HUD Visual Display Area */}
                <div className="relative aspect-[4/3] my-6 rounded-2xl bg-[#06080D] border border-cyan-500/20 overflow-hidden flex items-center justify-center">
                  {/* Grid overlay */}
                  <div 
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(0, 242, 254, 0.4) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  />

                  {/* Crosshair & Radar Sweep */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-48 h-48 rounded-full border border-cyan-500/30 border-dashed animate-spin" style={{ animationDuration: '14s' }} />
                    <div className="w-32 h-32 rounded-full border border-cyan-400/40" />
                    <div className="absolute w-full h-[1px] bg-cyan-500/20" />
                    <div className="absolute h-full w-[1px] bg-cyan-500/20" />
                  </div>

                  {/* Mode Specific Dynamic Visual */}
                  {activeMode === 'thermal' && (
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-amber-500 via-red-500 to-purple-600 blur-md opacity-80 animate-pulse" />
                      <div className="absolute top-1/2 -translate-y-1/2 px-3 py-1 rounded bg-black/80 border border-red-500/50 text-red-300 font-mono text-xs">
                        HOT SPOT DETECTED (+14°F)
                      </div>
                    </div>
                  )}

                  {activeMode === 'acoustic' && (
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <div className="flex items-end gap-1 h-20">
                        {[40, 65, 85, 100, 70, 45, 90, 60, 30].map((h, i) => (
                          <div 
                            key={i} 
                            className="w-2.5 bg-gradient-to-t from-cyan-500 to-emerald-400 rounded-t"
                            style={{ height: `${h}%`, animation: `pulse 1.5s infinite ${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                      <div className="px-3 py-1 rounded bg-black/80 border border-cyan-400/50 text-cyan-300 font-mono text-xs">
                        HIGH-FREQUENCY CAVITATION
                      </div>
                    </div>
                  )}

                  {activeMode === 'endoscopic' && (
                    <div className="relative z-10 text-center space-y-2">
                      <div className="w-24 h-24 rounded-full border-4 border-cyan-400 flex items-center justify-center bg-cyan-950/40 mx-auto">
                        <Eye className="w-10 h-10 text-cyan-300 animate-pulse" />
                      </div>
                      <div className="px-3 py-1 rounded bg-black/80 border border-emerald-400/50 text-emerald-300 font-mono text-xs">
                        CLEAR 4K OPTICAL FEED
                      </div>
                    </div>
                  )}

                  {/* Corner Coordinates */}
                  <div className="absolute top-3 left-3 text-[10px] font-mono text-cyan-400/70">
                    LAT: 30.2672° N <br /> LNG: -97.7431° W
                  </div>
                  <div className="absolute bottom-3 right-3 text-[10px] font-mono text-cyan-400/70 text-right">
                    SCAN DEPTH: 1.4m <br /> PRECISION: ±0.15"
                  </div>
                </div>

                {/* HUD Live Telemetry Footer */}
                <div className="pt-3 border-t border-cyan-500/20 space-y-1.5 text-xs font-mono">
                  <div className="text-cyan-300 flex items-center justify-between">
                    <span className="text-slate-400 font-sans">Active Readout:</span>
                    <span>{currentMode.readout}</span>
                  </div>
                  <div className="text-emerald-300 flex items-center justify-between">
                    <span className="text-slate-400 font-sans">Diagnosis:</span>
                    <span>{currentMode.status}</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};
