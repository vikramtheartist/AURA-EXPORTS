import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  FlaskConical, 
  ShieldCheck, 
  Package, 
  Sprout, 
  SlidersHorizontal,
  MapPin, 
  ArrowRight, 
  FileText 
} from 'lucide-react';
import { CategoryOriginData, OriginAttribute } from '../../data/unifiedProductsCatalog';
import GeographicOriginMap from './GeographicOriginMap';

interface OriginShowcaseProps {
  categoryName: string;
  origin: CategoryOriginData;
  onRequestQuote: () => void;
  onExploreSpecs?: () => void;
}

export default function OriginShowcase({
  categoryName,
  origin,
  onRequestQuote,
  onExploreSpecs,
}: OriginShowcaseProps) {
  const getAttributeIcon = (iconName: OriginAttribute['icon']) => {
    switch (iconName) {
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-[#D4AF37]" />;
      case 'flask':
        return <FlaskConical className="w-4 h-4 text-[#D4AF37]" />;
      case 'shield':
        return <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />;
      case 'package':
        return <Package className="w-4 h-4 text-[#D4AF37]" />;
      case 'sprout':
        return <Sprout className="w-4 h-4 text-[#D4AF37]" />;
      case 'sliders':
      default:
        return <SlidersHorizontal className="w-4 h-4 text-[#D4AF37]" />;
    }
  };

  return (
    <div className="w-full bg-[#111113] border border-[#29292D] rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl relative overflow-hidden transition-all duration-500">
      {/* Background soft ambient gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* =========================================================================
            LEFT COLUMN: Featured Origin Visual Card
            ========================================================================= */}
        <div className="lg:col-span-5 relative w-full">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] group">
            {/* Top-left Origin Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="bg-black/85 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 text-[10px] font-mono font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full shadow-md">
                FEATURED ORIGIN
              </span>
            </div>

            {/* Featured Image */}
            <img
              src={origin.heroImage}
              alt={`${origin.title} - ${origin.location}`}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Bottom Dark Gradient & Location Strip */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center gap-2 text-white">
              <div className="w-7 h-7 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#D4AF37] shrink-0">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-mono text-[#F5F1E8] font-medium tracking-wide drop-shadow-sm truncate">
                {origin.location}
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            RIGHT COLUMN: Origin Editorial & Specs & Map
            ========================================================================= */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          
          {/* Header Row: Titles + Mini State Silhouette Map */}
          <div className="flex items-start justify-between gap-6">
            <div className="space-y-1.5 flex-1">
              <span className="text-[11px] font-mono text-[#D4AF37] tracking-[0.25em] uppercase font-bold block">
                {categoryName.toUpperCase()}
              </span>

              <h3 className="text-3xl md:text-4xl font-heading text-[#F5F1E8] tracking-tight font-normal leading-tight">
                {origin.title}
              </h3>

              <p className="text-xs font-mono text-[#A5A19A] tracking-wider uppercase">
                {origin.subheading}
              </p>
            </div>

            {/* Vector Map Silhouette */}
            <div className="shrink-0 hidden sm:block">
              <GeographicOriginMap
                region={origin.mapRegion}
                stateLabel={origin.mapLabel.state}
                hubLabel={origin.mapLabel.hub}
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-[#A5A19A] font-body text-sm md:text-base leading-relaxed font-light">
            {origin.description}
          </p>

          {/* 4 Compact Attributes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {origin.attributes.map((attr, idx) => (
              <div
                key={idx}
                className="bg-[#151517] border border-[#29292D] rounded-xl p-3 flex flex-col justify-between transition-colors hover:border-[#D4AF37]/30"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-md bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                    {getAttributeIcon(attr.icon)}
                  </div>
                  <span className="text-[10px] font-mono text-[#A5A19A] tracking-wider uppercase line-clamp-1">
                    {attr.label}
                  </span>
                </div>
                <div className="text-xs md:text-sm font-semibold text-white font-mono mt-0.5 truncate">
                  {attr.value}
                </div>
                <div className="text-[10px] font-mono text-[#D4AF37]/80 truncate">
                  {attr.sublabel}
                </div>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-3">
            {origin.bulkSpecsLink.startsWith('#') || onExploreSpecs ? (
              <button
                type="button"
                onClick={() => {
                  if (onExploreSpecs) {
                    onExploreSpecs();
                  } else {
                    const el = document.querySelector(origin.bulkSpecsLink);
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-[#D4AF37] to-[#E5C07B] hover:from-[#c5a02e] hover:to-[#d6b068] text-[#0A0A0B] font-body font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl flex items-center gap-2 shadow-md transition-all hover:scale-[1.01] cursor-pointer"
              >
                <span>Explore Bulk Specifications</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                to={origin.bulkSpecsLink}
                className="bg-gradient-to-r from-[#D4AF37] to-[#E5C07B] hover:from-[#c5a02e] hover:to-[#d6b068] text-[#0A0A0B] font-body font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl flex items-center gap-2 shadow-md transition-all hover:scale-[1.01] cursor-pointer"
              >
                <span>Explore Bulk Specifications</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}

            <button
              type="button"
              onClick={onRequestQuote}
              className="bg-[#1A1A1D] hover:bg-[#222227] text-white border border-[#29292D] hover:border-white/30 font-body font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Request Export Quote</span>
              <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
