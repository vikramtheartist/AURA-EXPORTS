import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ShieldCheck, ArrowRight, FileText, MapPin } from 'lucide-react';
import { AgroCommodityItem } from '../../data/unifiedProductsCatalog';

interface AgroProductCardProps {
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
    <div className="group bg-[#151517] border border-[#29292D] hover:border-[#D4AF37]/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.85)] relative">
      
      {/* Top Image Showcase */}
      <div className="relative aspect-[16/10] w-full bg-[#0E0E10] overflow-hidden">
        {/* Bulk Wholesale Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/35 text-[9px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full">
            WHOLESALE EXPORT
          </span>
        </div>

        <img
          src={commodity.image}
          alt={commodity.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

        <div className="absolute bottom-2.5 left-3 right-3 flex items-center gap-1.5 text-xs text-neutral-300 font-mono">
          <MapPin className="w-3 h-3 text-[#D4AF37] shrink-0" />
          <span className="truncate text-[11px]">{commodity.origin}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 flex-1 flex flex-col justify-between space-y-3.5">
        <div>
          {/* Commodity Name */}
          <h4 className="text-base font-heading font-medium text-[#F5F1E8] group-hover:text-[#D4AF37] transition-colors leading-snug">
            {commodity.name}
          </h4>

          {/* Form Tag */}
          <div className="text-[11px] font-mono text-[#D4AF37] mt-0.5 tracking-wide">
            {commodity.form}
          </div>

          {/* Specification Summary */}
          <div className="mt-2.5 bg-black/40 border border-white/5 rounded-xl p-2.5 space-y-1.5 text-[11px] font-mono">
            <div className="text-neutral-300">
              <span className="text-neutral-500 uppercase text-[10px] block">Grade & Spec:</span>
              <span className="line-clamp-2">{commodity.gradeSummary}</span>
            </div>
            <div className="text-neutral-400 pt-1 border-t border-white/5">
              <span className="text-neutral-500 uppercase text-[10px] block">Packaging:</span>
              <span className="line-clamp-1">{commodity.packagingSummary}</span>
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onViewSpecs(commodity)}
            className="py-2.5 px-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl text-[11px] font-body font-semibold uppercase tracking-wider flex items-center justify-center gap-1 transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="truncate">View Specs</span>
          </button>

          <button
            type="button"
            onClick={() => onRequestQuote(commodity.name, commodity.origin, commodity.form)}
            className="py-2.5 px-2 bg-[#D4AF37] hover:bg-[#c5a02e] text-[#0A0A0B] rounded-xl text-[11px] font-body font-bold uppercase tracking-wider flex items-center justify-center gap-1 transition-all cursor-pointer shadow-sm hover:scale-[1.01]"
          >
            <span className="truncate">Bulk Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
}
