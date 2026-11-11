import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';
import exportPortSunsetImg from '../../assets/images/explorer/export_port_sunset.jpg';

interface ExportConversionBannerProps {
  onOpenQuote: () => void;
}

export default function ExportConversionBanner({
  onOpenQuote,
}: ExportConversionBannerProps) {
  return (
    <div className="w-full my-12 relative rounded-3xl overflow-hidden border border-[#D4AF37]/35 shadow-2xl group">
      {/* Background Cinematic Cargo Port Image */}
      <img
        src={exportPortSunsetImg}
        alt="Aura Exports - International Maritime Export Logistics"
        className="w-full h-56 md:h-64 lg:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
      />

      {/* Dark luxury gradient overlay with gold amber warmth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60 pointer-events-none" />

      {/* Content Layer */}
      <div className="absolute inset-0 z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-16 py-8 gap-6 text-center md:text-left">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/30 rounded-full px-3 py-1 shadow-sm">
            <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.2em] uppercase font-bold">
              GLOBAL EXPORT CORRIDORS
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading text-[#F5F1E8] tracking-tight leading-tight">
            Source from India.{' '}
            <span className="text-[#D4AF37] italic font-normal block sm:inline">
              Export to the World.
            </span>
          </h3>

          <p className="text-xs md:text-sm font-mono text-[#A5A19A] tracking-[0.18em] uppercase">
            RETAIL · WHOLESALE · PRIVATE LABEL · BULK EXPORT
          </p>
        </div>

        {/* Action Button */}
        <div className="shrink-0">
          <button
            type="button"
            onClick={onOpenQuote}
            className="bg-gradient-to-r from-[#D4AF37] to-[#E5C07B] hover:from-[#c5a02e] hover:to-[#d6b068] text-[#0A0A0B] font-body font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl flex items-center gap-2.5 shadow-xl transition-all hover:scale-105 cursor-pointer"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
