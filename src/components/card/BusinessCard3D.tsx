import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { RotateCw, Sparkles, Layers } from 'lucide-react';
import BusinessCardFront from './BusinessCardFront';
import BusinessCardBack from './BusinessCardBack';

interface BusinessCard3DProps {
  className?: string;
  initialSide?: 'front' | 'back';
  allowBothSidesToggle?: boolean;
}

/**
 * World-Class Interactive 3D Business Card
 * Features realistic 3D perspective flip, interactive gyro tilt physics,
 * metallic reflection sheen, and side-by-side showcase mode.
 */
export const BusinessCard3D: React.FC<BusinessCard3DProps> = ({
  className = '',
  initialSide = 'front',
  allowBothSidesToggle = true,
}) => {
  const [isFlipped, setIsFlipped] = useState(initialSide === 'back');
  const [viewMode, setViewMode] = useState<'3d' | 'both'>('3d');
  const [tilt, setTilt] = useState({ x: 0, y: 0, sheenX: 50, sheenY: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Desktop subtle 3D parallax tilt & dynamic metallic sheen calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || viewMode !== '3d') return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -9; // max 9 deg tilt
    const rotateY = ((x - centerX) / centerX) * 9;
    const sheenX = (x / rect.width) * 100;
    const sheenY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, sheenX, sheenY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, sheenX: 50, sheenY: 50 });
  };

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className={`flex flex-col items-center w-full ${className}`}>
      {/* Top View Mode Switcher */}
      {allowBothSidesToggle && (
        <div className="flex items-center gap-2 mb-4 p-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setViewMode('3d')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
              viewMode === '3d'
                ? 'bg-[#dcb782] text-black font-semibold shadow-md'
                : 'text-[#dfd1b9]/70 hover:text-white'
            }`}
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>Interactive 3D Card</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('both')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'both'
                ? 'bg-[#dcb782] text-black font-semibold shadow-md'
                : 'text-[#dfd1b9]/70 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Show Both Sides</span>
          </button>
        </div>
      )}

      {/* Mode A: Interactive 3D Card with Flip & Tilt */}
      {viewMode === '3d' ? (
        <div className="w-full flex flex-col items-center">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={toggleFlip}
            className="relative w-full max-w-[480px] sm:max-w-[520px] md:max-w-[560px] cursor-pointer group"
            style={{
              perspective: '1400px',
            }}
          >
            {/* Dynamic Card Container with 3D Flip & Parallax Tilt */}
            <motion.div
              animate={{
                rotateY: isFlipped ? 180 : 0,
                rotateX: tilt.x,
              }}
              transition={{
                rotateY: { duration: 0.65, ease: [0.23, 1, 0.32, 1] },
                rotateX: { duration: 0.15, ease: 'easeOut' },
              }}
              style={{
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full aspect-[1.66/1]"
            >
              {/* Dynamic Specular Metallic Light Glare */}
              <div
                className="absolute inset-0 rounded-[22px] sm:rounded-[26px] pointer-events-none z-30 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at ${tilt.sheenX}% ${tilt.sheenY}%, rgba(255, 240, 200, 0.14) 0%, rgba(220, 183, 130, 0.04) 40%, transparent 70%)`,
                }}
              />

              {/* FRONT SIDE */}
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <BusinessCardFront />
              </div>

              {/* BACK SIDE */}
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <BusinessCardBack />
              </div>
            </motion.div>

            {/* Floating Quick Action Badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 border border-[#dcb782]/40 text-[#dcb782] text-[10px] sm:text-[11px] font-mono tracking-wider uppercase shadow-xl backdrop-blur-md">
                <RotateCw className="w-3 h-3 animate-spin-slow" />
                <span>Tap or Click to Flip ({isFlipped ? 'Showing Back' : 'Showing Front'})</span>
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* Mode B: Both Sides Showcase (Like the Reference Photo on Slate) */
        <div className="w-full flex flex-col gap-6 items-center max-w-5xl">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Front Card */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#dcb782] uppercase mb-2">
                Card Front · Brand Identity
              </span>
              <div className="w-full max-w-[460px] transform hover:scale-[1.02] transition-transform duration-300">
                <BusinessCardFront />
              </div>
            </div>

            {/* Back Card */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#dcb782] uppercase mb-2">
                Card Back · Executive Contact
              </span>
              <div className="w-full max-w-[460px] transform hover:scale-[1.02] transition-transform duration-300">
                <BusinessCardBack />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessCard3D;
