import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sliders, Sparkles, AlertTriangle, ShieldCheck, Check } from 'lucide-react';

interface Scenario {
  id: string;
  name: string;
  subtitle: string;
  beforeImg: string;
  afterImg: string;
  beforeLabel: string;
  afterLabel: string;
  beforeStats: string;
  afterStats: string;
  repairTime: string;
}

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const scenarios: Scenario[] = [
    {
      id: 'pipe-burst',
      name: 'Catastrophic Pipe Rupture',
      subtitle: 'Corroded cast iron & copper line failure',
      beforeImg: '/src/assets/images/damaged_pipe_before_1793991977364.jpg',
      afterImg: '/src/assets/images/repaired_pipe_after_1793991978717.jpg',
      beforeLabel: 'Before (Burst & Flooding)',
      afterLabel: 'After (3D Laser-Aligned PEX & Copper)',
      beforeStats: 'Water Loss: 18 Gal/min • 0 PSI System Pressure',
      afterStats: 'Precision Manifold • Digital Flow 4.8 GPM • Stable 65 PSI',
      repairTime: 'Completed in 1h 14m'
    },
    {
      id: 'hvac-condenser',
      name: 'Burned HVAC Heat Pump',
      subtitle: 'Oxidized coils & failed electrical contactor',
      beforeImg: '/src/assets/images/damaged_hvac_before_1793991978946.jpg',
      afterImg: '/src/assets/images/repaired_hvac_after_1793991980556.jpg',
      beforeLabel: 'Before (Oxidized & Inoperative)',
      afterLabel: 'After (Precision Ultra-Inverter 22 SEER)',
      beforeStats: 'Compressor Seized • 94°F Indoor Temp • Fire Hazard',
      afterStats: 'Acoustic Whisper Pad • Digital Thermostat • 68°F Steady',
      repairTime: 'Completed in 3h 20m'
    }
  ];

  const [activeScenario, setActiveScenario] = useState<Scenario>(scenarios[0]);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(clampedPos);
  }, []);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <section id="comparison" className="py-20 relative overflow-hidden">
      {/* Background ambient beam */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-cyan-600/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="text-xs uppercase tracking-widest font-semibold text-cyan-400">
            Proven Physical Results
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Before & After 3D Restoration
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Slide horizontally to inspect our precision engineering. We replace fragile, failing hazards with laser-straight, digitally monitored systems.
          </p>

          {/* Interactive Scenario Switcher */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {scenarios.map((sc) => (
              <button
                key={sc.id}
                onClick={() => {
                  setActiveScenario(sc);
                  setSliderPos(50);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeScenario.id === sc.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-cyan-400/30'
                }`}
              >
                <span>{sc.name}</span>
                {activeScenario.id === sc.id && <Check className="w-3.5 h-3.5" />}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Slider Interactive Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 select-none cursor-ew-resize bg-[#0D1117]"
          >
            {/* AFTER Image (Full background) */}
            <img
              src={activeScenario.afterImg}
              alt={activeScenario.afterLabel}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
            />

            {/* AFTER Label Badge (Right side) */}
            <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-cyan-400/40 text-cyan-300 text-xs font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>{activeScenario.afterLabel}</span>
            </div>

            {/* BEFORE Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={activeScenario.beforeImg}
                alt={activeScenario.beforeLabel}
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
                  height: '100%'
                }}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* BEFORE Label Badge (Left side) */}
            <div 
              className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-red-500/40 text-red-300 text-xs font-semibold flex items-center gap-1.5"
              style={{ opacity: sliderPos > 20 ? 1 : 0.3, transition: 'opacity 0.2s' }}
            >
              <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
              <span>{activeScenario.beforeLabel}</span>
            </div>

            {/* Divider Line & Interactive Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none flex items-center justify-center"
              style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
            >
              {/* Vertical Laser Divider Line */}
              <div className="w-[3px] h-full bg-gradient-to-b from-cyan-400 via-white to-violet-500 shadow-[0_0_12px_rgba(0,242,254,0.9)]" />

              {/* Center Slider Knob */}
              <div className="absolute w-11 h-11 rounded-full bg-[#0A0C10] border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,242,254,0.7)] flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
                <div className="flex items-center gap-1 text-cyan-300 text-[11px] font-bold">
                  <span>◀</span>
                  <span>▶</span>
                </div>
              </div>
            </div>

            {/* Bottom telemetry overlay bar */}
            <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="text-red-300 font-mono">
                <span className="text-slate-400 uppercase text-[10px] block font-sans">Initial Threat State</span>
                {activeScenario.beforeStats}
              </div>
              <div className="text-right text-cyan-300 font-mono">
                <span className="text-slate-400 uppercase text-[10px] block font-sans">Certified Restored State</span>
                {activeScenario.afterStats}
              </div>
            </div>
          </div>

          {/* Slider controls footer */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 px-2">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-cyan-400" />
              <span>Drag slider or click presets:</span>
              <button
                onClick={() => setSliderPos(25)}
                className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-slate-300"
              >
                25%
              </button>
              <button
                onClick={() => setSliderPos(50)}
                className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-slate-300"
              >
                50%
              </button>
              <button
                onClick={() => setSliderPos(75)}
                className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-slate-300"
              >
                75%
              </button>
            </div>
            <div className="font-semibold text-emerald-400 flex items-center gap-1">
              <span>Verified Local Outcome:</span>
              <span className="text-slate-200">{activeScenario.repairTime}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
