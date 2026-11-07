import React, { useState } from 'react';
import { ShieldCheck, Zap, Activity, Clock, Award } from 'lucide-react';

interface ThreeDShieldBadgeProps {
  onOpenQuote?: () => void;
}

export const ThreeDShieldBadge: React.FC<ThreeDShieldBadgeProps> = ({ onOpenQuote }) => {
  const [manualTilt, setManualTilt] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);
  const [activeTab, setActiveTab] = useState<'status' | 'specs'>('status');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setManualTilt({
      x: -(y / (rect.height / 2)) * 18,
      y: (x / (rect.width / 2)) * 18,
    });
    setIsInteracting(true);
  };

  const handleMouseLeave = () => {
    setIsInteracting(false);
    setManualTilt({ x: 0, y: 0 });
  };

  return (
    <div className="relative w-full max-w-[420px] mx-auto aspect-square flex items-center justify-center perspective-1000 py-4">
      {/* Ambient background glows */}
      <div className="absolute w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl -top-6 -left-6 pointer-events-none animate-pulse-glow" />
      <div className="absolute w-72 h-72 rounded-full bg-violet-600/20 blur-3xl -bottom-6 -right-6 pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      {/* Interactive 3D Card / Badge Container */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative w-80 sm:w-96 h-96 cursor-grab active:cursor-grabbing transform-style-3d ${
          !isInteracting ? 'animate-float-3d' : 'transition-transform duration-150 ease-out'
        }`}
        style={{
          transform: isInteracting
            ? `perspective(1000px) rotateX(${manualTilt.x}deg) rotateY(${manualTilt.y}deg)`
            : undefined
        }}
      >
        {/* Layer 0: Shadow Plate */}
        <div 
          className="absolute inset-4 rounded-3xl bg-black/40 blur-xl pointer-events-none"
          style={{ transform: 'translateZ(-40px)' }}
        />

        {/* Layer 1: Outer Glass Shield Frame */}
        <div
          className="absolute inset-0 rounded-3xl p-6 glass-panel-highlight flex flex-col justify-between overflow-hidden shadow-2xl border border-cyan-400/30"
          style={{ transform: 'translateZ(0px)' }}
        >
          {/* Holographic grid lines background */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 242, 254, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 254, 0.4) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Top Status Strip */}
          <div className="relative flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping inline-block" />
              <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">
                3D Laser Ready
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400 tracking-tight">
              24/7 DISPATCH
            </span>
          </div>

          {/* Center 3D Floating Emblem */}
          <div 
            className="relative my-auto flex flex-col items-center justify-center transform-style-3d py-4"
            style={{ transform: 'translateZ(35px)' }}
          >
            {/* Hexagonal Shield Core */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              {/* Rotating outer ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/40 animate-spin" style={{ animationDuration: '20s' }} />
              
              {/* Center Glowing Crest */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500/80 via-blue-600/70 to-purple-600/80 p-0.5 shadow-lg shadow-cyan-500/30 flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform">
                <div className="w-full h-full rounded-2xl bg-[#0A0C10] flex items-center justify-center">
                  <ShieldCheck className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_12px_rgba(0,242,254,0.8)]" />
                </div>
              </div>

              {/* Orbiting Tech Badges */}
              <div 
                className="absolute -top-1 -right-2 px-2 py-0.5 rounded-full bg-violet-600/80 border border-violet-400/40 text-[10px] font-bold text-white shadow-md flex items-center gap-1"
                style={{ transform: 'translateZ(20px)' }}
              >
                <Zap className="w-2.5 h-2.5 text-yellow-300" />
                <span>30 MIN</span>
              </div>
            </div>

            <div className="text-center mt-3" style={{ transform: 'translateZ(25px)' }}>
              <div className="text-base font-bold text-white tracking-wide">
                APEX GUARANTEE
              </div>
              <div className="text-xs text-cyan-300/80">
                Triple-Certified Master Technicians
              </div>
            </div>
          </div>

          {/* Lower Telemetry Strip */}
          <div 
            className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs"
            style={{ transform: 'translateZ(15px)' }}
          >
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Avg. Arrival: <strong className="text-white font-mono">24m</strong></span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Award className="w-3.5 h-3.5 text-violet-400" />
              <span>Zero Overtime Fees</span>
            </div>
          </div>
        </div>

        {/* Orbiting Satellite Marker 1 */}
        <div
          className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-[#0D1117]/90 border border-cyan-500/40 shadow-xl backdrop-blur-md flex items-center gap-2"
          style={{ transform: 'translateZ(45px)' }}
        >
          <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <div className="text-[11px] leading-tight">
            <div className="text-slate-400 text-[9px] uppercase tracking-wider">Live On-Call</div>
            <div className="text-white font-semibold">12 Crews En Route</div>
          </div>
        </div>

        {/* Orbiting Satellite Marker 2 */}
        <div
          className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-[#0D1117]/90 border border-purple-500/40 shadow-xl backdrop-blur-md flex items-center gap-2"
          style={{ transform: 'translateZ(45px)' }}
        >
          <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
          <div className="text-[11px] leading-tight">
            <div className="text-slate-400 text-[9px] uppercase tracking-wider">Insured</div>
            <div className="text-white font-semibold">$2M Bonded</div>
          </div>
        </div>
      </div>
    </div>
  );
};
