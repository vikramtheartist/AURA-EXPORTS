import React from 'react';
import CornerGuilloche from './CornerGuilloche';

interface BusinessCardFrontProps {
  className?: string;
  isInteractive?: boolean;
}

/**
 * AURA ENTERPRISE EXPORTS — Official Executive Business Card (Front Side)
 * Recreating the exact luxury matte black and embossed gold foil design.
 */
export const BusinessCardFront: React.FC<BusinessCardFrontProps> = ({
  className = '',
  isInteractive = true,
}) => {
  return (
    <div
      className={`relative w-full aspect-[1.66/1] rounded-[22px] sm:rounded-[26px] overflow-hidden bg-gradient-to-b from-[#141412] via-[#0d0d0c] to-[#070706] text-white border border-[#dcb782]/40 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_0_1px_rgba(220,183,130,0.18)_inset] select-none flex flex-col justify-center items-center px-6 sm:px-10 py-6 ${className}`}
      style={{
        boxShadow:
          '0 25px 60px -12px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(220, 183, 130, 0.35), inset 0 1px 1px rgba(255, 235, 185, 0.25)',
      }}
    >
      {/* Matte Tactile Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '4px 4px',
        }}
      />

      {/* Subtle Metallic Specular Lighting Sheen */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#dcb782]/[0.035] to-[#fbf4db]/[0.07] pointer-events-none" />

      {/* Top-Right Flowing Gold Wave Guilloche */}
      <div className="absolute top-0 right-0 w-[42%] max-w-[200px] aspect-square pointer-events-none overflow-hidden">
        <CornerGuilloche position="top-right" className="w-full h-full opacity-90" />
      </div>

      {/* Bottom-Left Flowing Gold Wave Guilloche */}
      <div className="absolute bottom-0 left-0 w-[42%] max-w-[200px] aspect-square pointer-events-none overflow-hidden">
        <CornerGuilloche position="bottom-left" className="w-full h-full opacity-90" />
      </div>

      {/* Center Branding Content */}
      <div className="relative z-10 flex flex-col items-center text-center my-auto w-full max-w-md">
        {/* Stylized AURA Logotype */}
        <div className="relative mb-1 sm:mb-2 flex items-center justify-center">
          <h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal tracking-[0.28em] pl-[0.28em] select-none text-transparent bg-clip-text bg-gradient-to-b from-[#fff6dd] via-[#dcb782] to-[#a3793f] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            style={{
              fontFamily: "'Cinzel', 'Playfair Display', 'Cormorant Garamond', Georgia, serif",
              filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.9))',
            }}
          >
            AURA
          </h1>
        </div>

        {/* Sub-brand Title: AURA ENTERPRISE EXPORTS */}
        <h2
          className="text-[10px] sm:text-[12px] md:text-[13.5px] uppercase font-serif font-normal tracking-[0.32em] pl-[0.32em] text-[#eedec2] mb-3 sm:mb-4 select-none opacity-95"
          style={{
            fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif",
          }}
        >
          Aura Enterprise Exports
        </h2>

        {/* Divider with Center 3-Petal Lotus Emblem */}
        <div className="flex items-center justify-center gap-3 w-full max-w-[280px] sm:max-w-[340px] mb-2 sm:mb-3">
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#dcb782]/70 to-[#dcb782]" />

          {/* 3-Petal Lotus Ornament */}
          <div className="shrink-0 flex items-center justify-center text-[#dcb782] px-1">
            <svg
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-3 sm:w-5 sm:h-3.5 text-[#dcb782]"
            >
              <defs>
                <linearGradient id="lotus-gold-front" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff2cf" />
                  <stop offset="50%" stopColor="#dcb782" />
                  <stop offset="100%" stopColor="#9a7135" />
                </linearGradient>
              </defs>
              {/* Center upright petal */}
              <path
                d="M12 1 C10.8 5 10.5 9 12 14 C13.5 9 13.2 5 12 1 Z"
                fill="url(#lotus-gold-front)"
              />
              {/* Left wing petal */}
              <path
                d="M11 13.5 C8 12.5 3.5 10 3 6 C4.5 7 8.5 9.5 11 13.5 Z"
                fill="url(#lotus-gold-front)"
                fillOpacity="0.85"
              />
              {/* Right wing petal */}
              <path
                d="M13 13.5 C16 12.5 20.5 10 21 6 C19.5 7 15.5 9.5 13 13.5 Z"
                fill="url(#lotus-gold-front)"
                fillOpacity="0.85"
              />
              {/* Small bottom pedestal */}
              <circle cx="12" cy="14.8" r="0.9" fill="url(#lotus-gold-front)" />
            </svg>
          </div>

          <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent via-[#dcb782]/70 to-[#dcb782]" />
        </div>

        {/* Global Tagline */}
        <p
          className="text-[8.5px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.24em] pl-[0.24em] text-[#c5a575] font-light select-none whitespace-nowrap"
          style={{
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          Export &nbsp;|&nbsp; Import &nbsp;|&nbsp; Global Sourcing
        </p>
      </div>

      {/* Delicate Perimeter Corner Notch Guides */}
      <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#dcb782]/20 rounded-tl-sm pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#dcb782]/20 rounded-br-sm pointer-events-none" />
    </div>
  );
};

export default BusinessCardFront;
