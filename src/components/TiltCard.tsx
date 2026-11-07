import React, { useState, useRef, useCallback } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'indigo' | 'cyan' | 'violet';
  maxTilt?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  glowColor = 'indigo',
  maxTilt = 10
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const updateTiltFromPoint = useCallback(
    (clientX: number, clientY: number) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = Math.max(-maxTilt, Math.min(maxTilt, ((y - centerY) / centerY) * -maxTilt));
      const rotateY = Math.max(-maxTilt, Math.min(maxTilt, ((x - centerX) / centerX) * maxTilt));

      setTilt({ x: rotateX, y: rotateY });
      setGlarePos({
        x: Math.max(0, Math.min(100, (x / rect.width) * 100)),
        y: Math.max(0, Math.min(100, (y / rect.height) * 100))
      });
    },
    [maxTilt]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      updateTiltFromPoint(e.clientX, e.clientY);
    },
    [updateTiltFromPoint]
  );

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  // Touch-optimized 3D tilt gestures for mobile devices
  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (e.touches.length === 1) {
        setIsHovered(true);
        updateTiltFromPoint(e.touches[0].clientX, e.touches[0].clientY);
      }
    },
    [updateTiltFromPoint]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (e.touches.length === 1) {
        updateTiltFromPoint(e.touches[0].clientX, e.touches[0].clientY);
      }
    },
    [updateTiltFromPoint]
  );

  const handleTouchEnd = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const glowShadow = isHovered
    ? glowColor === 'indigo'
      ? '0 20px 40px -10px rgba(79, 70, 229, 0.2), 0 0 18px rgba(6, 182, 212, 0.14)'
      : glowColor === 'cyan'
      ? '0 20px 40px -10px rgba(6, 182, 212, 0.22), 0 0 18px rgba(79, 70, 229, 0.12)'
      : '0 20px 40px -10px rgba(124, 58, 237, 0.2), 0 0 18px rgba(6, 182, 212, 0.14)'
    : '0 20px 40px rgba(0, 0, 0, 0.05)';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative perspective-1000 transition-all duration-200 ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${
          isHovered ? 'scale3d(1.015, 1.015, 1.015)' : 'scale3d(1, 1, 1)'
        }`,
        transformStyle: 'preserve-3d',
        boxShadow: glowShadow,
        transition: isHovered
          ? 'transform 0.1s ease-out, box-shadow 0.2s ease-out'
          : 'transform 0.4s ease-out, box-shadow 0.4s ease-out'
      }}
    >
      {/* Soft glare reflection overlay */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 240px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.5), transparent 70%)`
          }}
        />
      )}
      <div className="transform-style-3d h-full">{children}</div>
    </div>
  );
};
