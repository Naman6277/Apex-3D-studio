import React, { useEffect, useState } from 'react';

export const InteractiveGeometric3D: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to range -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Soft Ambient Light Gradient Halos */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-indigo-500/[0.07] blur-[130px] -top-32 -left-32 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePos.x * 35}px, ${mousePos.y * 35}px)` }}
      />
      <div 
        className="absolute w-[650px] h-[650px] rounded-full bg-cyan-400/[0.08] blur-[140px] top-1/4 -right-32 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${-mousePos.x * 35}px, ${-mousePos.y * 35}px)` }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-blue-400/[0.06] blur-[120px] bottom-10 left-1/3 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePos.y * 30}px, ${mousePos.x * 30}px)` }}
      />

      {/* Floating 3D Geometric Prism 1 (Top Right) */}
      <div
        className="absolute top-28 right-[10%] w-36 h-36 perspective-1000 hidden md:block opacity-65"
        style={{
          transform: `translate3d(${mousePos.x * -20}px, ${mousePos.y * -20}px, 0)`
        }}
      >
        <div className="w-full h-full relative transform-style-3d animate-spin-3d">
          {/* Light-mode frosted 3D cube faces */}
          <div className="absolute inset-0 border border-indigo-500/30 bg-white/60 backdrop-blur-sm shadow-[0_10px_25px_rgba(79,70,229,0.12)]" style={{ transform: 'rotateY(0deg) translateZ(72px)' }} />
          <div className="absolute inset-0 border border-indigo-500/30 bg-white/60 backdrop-blur-sm shadow-[0_10px_25px_rgba(79,70,229,0.12)]" style={{ transform: 'rotateY(180deg) translateZ(72px)' }} />
          <div className="absolute inset-0 border border-cyan-500/30 bg-cyan-50/50 backdrop-blur-sm shadow-[0_10px_25px_rgba(6,182,212,0.12)]" style={{ transform: 'rotateY(90deg) translateZ(72px)' }} />
          <div className="absolute inset-0 border border-cyan-500/30 bg-cyan-50/50 backdrop-blur-sm shadow-[0_10px_25px_rgba(6,182,212,0.12)]" style={{ transform: 'rotateY(-90deg) translateZ(72px)' }} />
          <div className="absolute inset-0 border border-indigo-400/25 bg-indigo-50/40" style={{ transform: 'rotateX(90deg) translateZ(72px)' }} />
          <div className="absolute inset-0 border border-cyan-400/25 bg-cyan-50/40" style={{ transform: 'rotateX(-90deg) translateZ(72px)' }} />
        </div>
      </div>

      {/* Floating 3D Geometric Cube 2 (Mid Left) */}
      <div
        className="absolute top-[45%] left-[5%] w-24 h-24 perspective-1000 hidden lg:block opacity-60"
        style={{
          transform: `translate3d(${mousePos.x * 22}px, ${mousePos.y * 22}px, 0)`
        }}
      >
        <div className="w-full h-full relative transform-style-3d animate-float-geometric">
          <div className="absolute inset-0 border border-cyan-500/30 bg-white/70 backdrop-blur-sm shadow-[0_8px_20px_rgba(6,182,212,0.15)]" style={{ transform: 'rotateY(0deg) translateZ(48px)' }} />
          <div className="absolute inset-0 border border-cyan-500/30 bg-white/70 backdrop-blur-sm" style={{ transform: 'rotateY(180deg) translateZ(48px)' }} />
          <div className="absolute inset-0 border border-indigo-500/30 bg-indigo-50/50" style={{ transform: 'rotateY(90deg) translateZ(48px)' }} />
          <div className="absolute inset-0 border border-indigo-500/30 bg-indigo-50/50" style={{ transform: 'rotateY(-90deg) translateZ(48px)' }} />
          <div className="absolute inset-0 border border-cyan-400/20" style={{ transform: 'rotateX(90deg) translateZ(48px)' }} />
          <div className="absolute inset-0 border border-indigo-400/20" style={{ transform: 'rotateX(-90deg) translateZ(48px)' }} />
        </div>
      </div>

      {/* Floating 3D Octahedron / Diamond (Bottom Right) */}
      <div
        className="absolute bottom-40 right-[7%] w-28 h-28 perspective-1000 hidden md:block opacity-55"
        style={{
          transform: `translate3d(${mousePos.x * -16}px, ${mousePos.y * -16}px, 0)`
        }}
      >
        <div className="w-full h-full relative transform-style-3d animate-spin-3d" style={{ animationDuration: '32s' }}>
          <div className="absolute inset-0 border border-indigo-400/35 rotate-45 bg-gradient-to-tr from-white via-indigo-50/60 to-cyan-50/40 shadow-[0_10px_25px_rgba(79,70,229,0.1)] backdrop-blur-sm" />
          <div className="absolute inset-0 border border-cyan-400/35 -rotate-45 bg-gradient-to-tr from-white via-cyan-50/50 to-indigo-50/30" />
        </div>
      </div>

      {/* Crisp Light Micro-Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #CBD5E1 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
};
