import React from 'react';
import CornerGuilloche from './CornerGuilloche';

interface BusinessCardBackProps {
  className?: string;
  isInteractive?: boolean;
}

/**
 * AURA ENTERPRISE EXPORTS — Official Executive Business Card (Back Side)
 * Recreating the exact layout: Vikram / Managing Director + Vertical Gold Divider + 3 Contact Rows.
 */
export const BusinessCardBack: React.FC<BusinessCardBackProps> = ({
  className = '',
  isInteractive = true,
}) => {
  return (
    <div
      className={`relative w-full aspect-[1.66/1] rounded-[22px] sm:rounded-[26px] overflow-hidden bg-gradient-to-b from-[#141412] via-[#0d0d0c] to-[#070706] text-white border border-[#dcb782]/40 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_0_1px_rgba(220,183,130,0.18)_inset] select-none flex items-center px-6 sm:px-10 md:px-12 py-6 ${className}`}
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

      {/* Bottom-Left Flowing Gold Wave Guilloche */}
      <div className="absolute bottom-0 left-0 w-[42%] max-w-[200px] aspect-square pointer-events-none overflow-hidden">
        <CornerGuilloche position="bottom-left" className="w-full h-full opacity-90" />
      </div>

      {/* Main 2-Column Content Grid */}
      <div className="relative z-10 w-full grid grid-cols-12 items-center">
        {/* Left Column: Name & Title (Cols 1-5) */}
        <div className="col-span-5 flex flex-col justify-center pr-2 sm:pr-4 pl-1 sm:pl-2">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl text-white font-normal tracking-tight drop-shadow-md select-none"
            style={{
              fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
            }}
          >
            Vikram
          </h2>

          <p
            className="text-xs sm:text-sm md:text-base italic text-[#dcb782] font-serif mt-1 sm:mt-1.5 tracking-wide select-none drop-shadow-sm font-light"
            style={{
              fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
            }}
          >
            Managing Director
          </p>
        </div>

        {/* Center Vertical Gold Divider Line (Col 6) */}
        <div className="col-span-1 flex justify-center items-center h-full">
          <div className="w-[1px] h-20 sm:h-24 md:h-28 bg-gradient-to-b from-transparent via-[#dcb782]/80 to-transparent" />
        </div>

        {/* Right Column: 3 Contact Rows (Cols 7-12) */}
        <div className="col-span-6 flex flex-col justify-center gap-3 sm:gap-4 md:gap-4.5 pl-2 sm:pl-4">
          {/* Row 1: Phone */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 group">
            {/* Outline Gold Phone Icon */}
            <div className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-[#dcb782] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            {isInteractive ? (
              <a
                href="tel:+919361990229"
                className="text-[11px] sm:text-xs md:text-[13.5px] text-[#f2ebe0] hover:text-[#dcb782] transition-colors font-sans tracking-wide whitespace-nowrap"
              >
                +91 93619 90229
              </a>
            ) : (
              <span className="text-[11px] sm:text-xs md:text-[13.5px] text-[#f2ebe0] font-sans tracking-wide whitespace-nowrap">
                +91 93619 90229
              </span>
            )}
          </div>

          {/* Row 2: Corporate Email */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 group">
            {/* Outline Gold Envelope Icon */}
            <div className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-[#dcb782] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            {isInteractive ? (
              <a
                href="mailto:contact@auraexport.co"
                className="text-[11px] sm:text-xs md:text-[13.5px] text-[#f2ebe0] hover:text-[#dcb782] transition-colors font-sans tracking-tight sm:tracking-normal whitespace-nowrap truncate"
              >
                contact@auraexport.co
              </a>
            ) : (
              <span className="text-[11px] sm:text-xs md:text-[13.5px] text-[#f2ebe0] font-sans tracking-tight sm:tracking-normal whitespace-nowrap truncate">
                contact@auraexport.co
              </span>
            )}
          </div>

          {/* Row 3: Website */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 group">
            {/* Outline Gold Globe Wireframe Icon */}
            <div className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-[#dcb782] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            {isInteractive ? (
              <a
                href="https://auraexport.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] sm:text-xs md:text-[13.5px] text-[#f2ebe0] hover:text-[#dcb782] transition-colors font-sans tracking-wide whitespace-nowrap"
              >
                www.auraexport.com
              </a>
            ) : (
              <span className="text-[11px] sm:text-xs md:text-[13.5px] text-[#f2ebe0] font-sans tracking-wide whitespace-nowrap">
                www.auraexport.com
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Delicate Perimeter Corner Notch Guides */}
      <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#dcb782]/20 rounded-tl-sm pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#dcb782]/20 rounded-br-sm pointer-events-none" />
    </div>
  );
};

export default BusinessCardBack;
