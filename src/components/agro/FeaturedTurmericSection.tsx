import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  FlaskConical, 
  ShieldCheck, 
  Package, 
  FileText,
  MapPin 
} from 'lucide-react';
import turmericImg from '../../assets/images/explorer/hero_turmeric_bowl.jpg';
import GeographicOriginMap from '../products/GeographicOriginMap';

interface FeaturedTurmericSectionProps {
  onOpenEnquiry?: () => void;
}

export default function FeaturedTurmericSection({ onOpenEnquiry }: FeaturedTurmericSectionProps) {
  const availableForms = [
    'Whole Cured Fingers',
    'Salem Double-Polished Fingers',
    'Cold-Milled Pure Powder',
    'Pure Culinary Paste',
    'Standardized Extract Capsules',
    'Kasturi Manjal Skincare Preparations',
  ];

  const qualityAttributes = [
    {
      label: 'HIGH CURCUMIN',
      value: '4.8%–5.4%',
      sublabel: 'HPLC Tested',
      icon: <Sparkles className="w-4 h-4 text-[#D4AF37]" />,
    },
    {
      label: 'TESTED FOR PURITY',
      value: '100% Pure',
      sublabel: 'Zero Chromate / Fillers',
      icon: <FlaskConical className="w-4 h-4 text-[#D4AF37]" />,
    },
    {
      label: 'EXPORT READY',
      value: 'Global Standard',
      sublabel: 'Phyto & Batch COA',
      icon: <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />,
    },
    {
      label: 'CUSTOM GRADES',
      value: 'Cryo-Milled',
      sublabel: 'Fingers / 80-100 Mesh',
      icon: <Package className="w-4 h-4 text-[#D4AF37]" />,
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 relative bg-[#0a0a09]" id="featured-turmeric-section">
      <div className="max-w-7xl mx-auto">
        {/* Comprehensive Editorial Feature Card */}
        <div className="rounded-3xl border border-[#D4AF37]/35 bg-gradient-to-b from-[#141416] via-[#111113] to-[#0E0E10] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
          
          {/* Subtle background ambient gold glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Visual Image Column */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] relative border border-white/10 bg-[#0A0A0B] shadow-2xl group">
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-black/85 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 text-[10px] font-mono font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full shadow-md">
                  FEATURED ORIGIN
                </span>
              </div>

              <img
                src={turmericImg}
                alt="Aura Exports - Erode & Salem Turmeric Sourcing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center gap-2 text-white">
                <div className="w-7 h-7 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-mono text-[#F5F1E8] font-medium tracking-wide drop-shadow-sm truncate">
                  Erode & Salem, Tamil Nadu, India
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              {/* Header Row: Title & Geographical Silhouette Map */}
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-1.5 flex-1">
                  <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-3.5 py-1 mb-1">
                    <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
                    <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.2em] uppercase font-bold">
                      FLAGSHIP AGRICULTURAL ORIGIN
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white font-normal leading-tight">
                    Turmeric from Erode & Salem.{' '}
                    <span className="text-[#E5C07B] italic font-normal block mt-1">
                      Sourced for Global Markets.
                    </span>
                  </h2>

                  <p className="text-xs font-mono text-[#A5A19A] tracking-wider uppercase">
                    AGRICULTURAL COMMODITIES · WHOLESALE · EXPORT
                  </p>
                </div>

                {/* State Map Outline Silhouette */}
                <div className="shrink-0 hidden sm:block">
                  <GeographicOriginMap
                    region="tamil-nadu"
                    stateLabel="TAMIL NADU"
                    hubLabel="Erode & Salem"
                  />
                </div>
              </div>

              <p className="text-sm md:text-base text-[#A5A19A] font-light leading-relaxed">
                High-curcumin turmeric from the farms of Erode & Salem, known for its rich colour, robust aroma and purity. Available in multiple forms for retail, food, wellness and industrial use.
              </p>

              {/* 4 Quality Parameter Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                {qualityAttributes.map((attr, idx) => (
                  <div
                    key={idx}
                    className="bg-[#151517] border border-[#29292D] rounded-xl p-3 flex flex-col justify-between transition-colors hover:border-[#D4AF37]/40 shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-6 h-6 rounded-md bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                        {attr.icon}
                      </div>
                      <span className="text-[9px] font-mono text-[#A5A19A] tracking-wider uppercase line-clamp-1 font-bold">
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

              {/* Concise List of Available Forms */}
              <div className="pt-2">
                <span className="text-[10px] font-mono text-[#77736C] uppercase tracking-wider block mb-2 font-semibold">
                  AVAILABLE PRODUCT FORMATS
                </span>
                <div className="flex flex-wrap gap-2">
                  {availableForms.map((form, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono bg-[#18181A] text-[#F5F2EC] border border-[#29292D] px-3 py-1 rounded-lg"
                    >
                      {form}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
                <Link
                  to="/products/agro-products/turmeric"
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5C07B] hover:from-[#c5a02e] hover:to-[#d6b068] text-[#0A0A0B] font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center gap-2 cursor-pointer hover:scale-[1.01]"
                >
                  <span>Explore Bulk Specifications</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                {onOpenEnquiry && (
                  <button
                    type="button"
                    onClick={onOpenEnquiry}
                    className="px-6 py-3.5 rounded-xl border border-[#29292D] hover:border-white/30 bg-[#1A1A1D] text-[#F5F2EC] hover:bg-white/5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Request Export Quote</span>
                    <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>
                )}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
