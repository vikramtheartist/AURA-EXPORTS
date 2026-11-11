import React from 'react';
import { Package, ArrowRight, FileText, MapPin, Layers } from 'lucide-react';
import { AgroCommodityItem } from '../../data/unifiedProductsCatalog';

interface AgroProductCardProps {
  key?: React.Key;
  commodity: AgroCommodityItem;
  onRequestQuote: (commodityName: string, origin: string, form: string) => void;
  onViewSpecs: (commodity: AgroCommodityItem) => void;
}

export default function AgroProductCard({
  commodity,
  onRequestQuote,
  onViewSpecs,
}: AgroProductCardProps) {
  return (
    <div className="group bg-[#131315] border border-white/[0.08] hover:border-[#D4AF37]/45 rounded-[1.75rem] p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.85)] relative h-full">
      
      {/* Top Image Showcase */}
      <div className="relative aspect-[16/11] w-full bg-[#0A0A0B] rounded-2xl overflow-hidden shrink-0">
        {/* Wholesale Export Pill Badge matching Image 2 */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="bg-black/75 backdrop-blur-md text-[#E2BC86] border border-[#E2BC86]/40 text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.18em] uppercase px-3.5 py-1 rounded-full shadow-sm">
            WHOLESALE EXPORT
          </span>
        </div>

        <img
          src={commodity.image}
          alt={commodity.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        
        {/* Subtle Dark Gradient for Location Visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

        {/* Origin Location Tag at Bottom-Left matching Image 2 */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 text-xs text-[#F5F1E8] font-mono drop-shadow-md">
          <MapPin className="w-3.5 h-3.5 text-[#E2BC86] shrink-0" />
          <span className="truncate">{commodity.origin}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-5 px-1 flex-1 flex flex-col justify-between min-h-[175px]">
        <div>
          {/* Commodity Name */}
          <h4 className="text-xl sm:text-2xl font-heading font-normal text-[#F5F1E8] group-hover:text-[#D4AF37] transition-colors leading-snug line-clamp-1">
            {commodity.name}
          </h4>

          {/* Form Tag */}
          <div className="text-[10px] sm:text-[11px] font-mono text-[#D4AF37] mt-1.5 tracking-[0.2em] uppercase font-medium">
            RAW AGRICULTURAL COMMODITY
          </div>

          {/* 2-Column Specs Section matching Image 2 */}
          <div className="mt-5 grid grid-cols-2 gap-4 items-start">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[#E2BC86]">
                <Layers className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-mono text-[#A5A19A] tracking-wider uppercase font-semibold">
                  GRADE & SPEC
                </span>
              </div>
              <p className="text-xs font-mono text-neutral-300 leading-relaxed line-clamp-2">
                {commodity.gradeSummary}
              </p>
            </div>

            <div className="space-y-1 border-l border-white/[0.08] pl-4">
              <div className="flex items-center gap-1.5 text-[#E2BC86]">
                <Package className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-mono text-[#A5A19A] tracking-wider uppercase font-semibold">
                  PACKAGING
                </span>
              </div>
              <p className="text-xs font-mono text-neutral-300 leading-relaxed line-clamp-2">
                {commodity.packagingSummary}
              </p>
            </div>
          </div>
        </div>

        {/* Action CTAs matching Image 2 */}
        <div className="pt-5 mt-auto">
          <div className="w-full border-t border-white/[0.08] mb-4" />
          
          <div className="grid grid-cols-2 gap-3 h-11 items-center">
            <button
              type="button"
              onClick={() => onViewSpecs(commodity)}
              className="h-11 px-3 sm:px-4 bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/40 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span className="truncate">VIEW SPECS</span>
            </button>

            <button
              type="button"
              onClick={() => onRequestQuote(commodity.name, commodity.origin, commodity.form)}
              className="h-11 px-3 sm:px-4 bg-gradient-to-r from-[#D4AF37] to-[#E5C07B] hover:from-[#c5a02e] hover:to-[#d6b068] text-black rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:scale-[1.01]"
            >
              <span className="truncate">BULK QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
