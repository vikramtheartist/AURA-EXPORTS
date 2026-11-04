import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  ArrowRight, 
  Globe2, 
  Compass, 
  ChevronRight,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface ConfirmedOriginRegion {
  id: string;
  region: string;
  state: string;
  coordinates: { x: number; y: number };
  terroir: string;
  products: {
    id: string;
    name: string;
    category: string;
    forms: string;
    link: string;
  }[];
}

const confirmedRegions: ConfirmedOriginRegion[] = [
  {
    id: 'erode-salem',
    region: 'Erode & Salem',
    state: 'Tamil Nadu',
    coordinates: { x: 38, y: 80 },
    terroir: 'Alluvial river basin with historical curing traditions and high natural curcumin retention.',
    products: [
      {
        id: 'salem-turmeric',
        name: 'Salem Turmeric',
        category: 'Spices & Derivatives',
        forms: 'Whole Fingers · Powder · Paste · + More',
        link: '/products/agro-products/turmeric',
      },
    ],
  },
  {
    id: 'kerala',
    region: 'Kerala',
    state: 'Kerala',
    coordinates: { x: 34, y: 84 },
    terroir: 'Western Ghats rainforest mist and high-elevation plantations with elevated essential oil profiles.',
    products: [
      {
        id: 'alleppey-green-cardamom',
        name: 'Alleppey Green Cardamom',
        category: 'Spices & Seasonings',
        forms: 'Whole Pods · Extra Bold · Seeds · Powder',
        link: '/products/agro-products/green-cardamom',
      },
      {
        id: 'malabar-black-pepper',
        name: 'Malabar Black Pepper',
        category: 'Spices & Seasonings',
        forms: 'MG-1 · TGSEB · Powder',
        link: '/products/agro-products/black-pepper',
      },
    ],
  },
  {
    id: 'gujarat-rajasthan',
    region: 'Gujarat & Rajasthan',
    state: 'Gujarat & Rajasthan',
    coordinates: { x: 26, y: 44 },
    terroir: 'Arid western agricultural belt yielding high-purity umbelliferous seeds cleaned via optical sorters.',
    products: [
      {
        id: 'optical-sortex-cumin',
        name: 'Optical Sortex Cumin',
        category: 'Spices & Seeds',
        forms: 'Whole Seeds · Sortex Cleaned · Custom Grades',
        link: '/products/agro-products/cumin-seeds',
      },
    ],
  },
  {
    id: 'guntur',
    region: 'Guntur',
    state: 'Andhra Pradesh',
    coordinates: { x: 46, y: 65 },
    terroir: "Asia's largest chilli corridor, known for high Scoville heat units and robust sun-drying practices.",
    products: [
      {
        id: 'guntur-red-chillies',
        name: 'Guntur Red Chillies',
        category: 'Spices & Seasonings',
        forms: 'Guntur S17 · Stemless · Flakes · Powder',
        link: '/products/agro-products/dried-red-chillies',
      },
    ],
  },
  {
    id: 'byadgi',
    region: 'Byadgi',
    state: 'Karnataka',
    coordinates: { x: 32, y: 70 },
    terroir: 'Specialised regional corridor famous for deep natural ASTA red color and gentle sweetness.',
    products: [
      {
        id: 'byadgi-red-chillies',
        name: 'Byadgi Red Chillies',
        category: 'Spices & Seasonings',
        forms: 'Byadgi Whole · High ASTA Powder · Stemless',
        link: '/products/agro-products/dried-red-chillies',
      },
    ],
  },
  {
    id: 'dindigul-theni',
    region: 'Dindigul & Theni',
    state: 'Tamil Nadu',
    coordinates: { x: 40, y: 86 },
    terroir: 'Dry-zone horticultural basin managed under zero-residue shade-drying for optimal chlorophyll.',
    products: [
      {
        id: 'moringa-leaf-powder',
        name: 'Pure Moringa Leaf Powder',
        category: 'Botanical Ingredients',
        forms: 'Dried Leaves · Fine Powder · Custom Mesh',
        link: '/products/agro-products/moringa-leaf-powder',
      },
    ],
  },
];

interface OriginSourcingSectionProps {
  onOpenEnquiry?: (productName: string, origin: string, form: string) => void;
}

export default function OriginSourcingSection({ onOpenEnquiry }: OriginSourcingSectionProps) {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('erode-salem');

  const selectedRegion = confirmedRegions.find(r => r.id === selectedRegionId) || confirmedRegions[0];

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative bg-[#0A0A0B] border-t border-[#1E1E22]" id="origin-sourcing-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#141416] border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <Compass className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="text-[11px] font-mono text-[#D4AF37] tracking-[0.2em] uppercase font-bold">
              SECTION 04 · REGIONAL SOURCING
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading text-[#F5F2EC] font-normal leading-tight">
            Rooted in India&apos;s Agricultural Origins.
          </h2>

          <p className="text-sm md:text-base text-[#A5A19A] font-light leading-relaxed mt-4">
            A verified procurement footprint connecting international buyers directly to India&apos;s established agricultural basins.
          </p>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mt-6" />
        </div>

        {/* 2-Column Layout: Sourcing Map & Region Selector (Left) + Focused Region & Products (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Sourcing Map + Interactive Region Tabs (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Interactive Sourcing Map Container */}
            <div className="rounded-3xl border border-[#1E1E22] bg-[#141416] p-5 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-[#1E1E22]">
                <div className="flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-[#D4AF37]" />
                  <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
                    India Sourcing Basins
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#A5A19A]">
                  Click Marker or Region Below
                </span>
              </div>

              {/* Vector Graphic Map of India */}
              <div className="relative aspect-[4/4.2] w-full bg-[#0A0A0B] rounded-2xl border border-white/5 p-3 flex items-center justify-center overflow-hidden">
                <svg
                  viewBox="0 0 400 450"
                  className="w-full h-full text-white/10 opacity-70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  {/* Stylized Accurate Landmass Contour of India */}
                  <path
                    d="M 170 30 
                       L 190 25 L 210 38 L 225 65 L 215 90 L 250 95 L 285 105 L 305 125 L 330 135 L 345 155 L 330 175 L 305 180 L 290 195 L 275 220 
                       L 270 250 L 245 285 L 225 325 L 205 375 L 195 415 L 185 415 L 175 380 L 160 335 L 150 280 L 135 240 L 115 225 L 90 220 
                       L 75 195 L 95 180 L 120 160 L 135 120 L 155 75 Z"
                    fill="#151518"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                  />
                  <path
                    d="M 150 280 Q 170 340 185 410"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    strokeDasharray="3,3"
                    strokeOpacity="0.4"
                  />
                  <text x="65" y="320" fill="#ffffff" fillOpacity="0.12" fontSize="10" fontFamily="monospace">
                    ARABIAN SEA
                  </text>
                  <text x="245" y="320" fill="#ffffff" fillOpacity="0.12" fontSize="10" fontFamily="monospace">
                    BAY OF BENGAL
                  </text>
                </svg>

                {/* Regional Interactive Markers */}
                {confirmedRegions.map((reg) => {
                  const isSelected = reg.id === selectedRegionId;
                  const left = `${reg.coordinates.x}%`;
                  const top = `${reg.coordinates.y}%`;

                  return (
                    <button
                      key={reg.id}
                      onClick={() => setSelectedRegionId(reg.id)}
                      style={{ left, top }}
                      aria-label={`Select ${reg.region}`}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all z-20 cursor-pointer ${
                        isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                      }`}
                    >
                      <span className="relative flex h-5 w-5 items-center justify-center">
                        {isSelected && (
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
                        )}
                        <span
                          className={`relative inline-flex rounded-full h-3.5 w-3.5 border-2 ${
                            isSelected
                              ? 'bg-[#D4AF37] border-white shadow-[0_0_12px_#D4AF37]'
                              : 'bg-black/90 border-[#D4AF37]/80 group-hover:bg-[#D4AF37]'
                          }`}
                        />
                      </span>

                      {/* Tooltip */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 whitespace-nowrap px-2 py-0.5 rounded text-[9px] font-mono tracking-wider pointer-events-none transition-all ${
                          isSelected
                            ? 'bg-[#D4AF37] text-black font-bold opacity-100 shadow-md'
                            : 'bg-black/90 text-white/90 opacity-0 group-hover:opacity-100 border border-white/10'
                        }`}
                      >
                        {reg.region}
                      </div>
                    </button>
                  );
                })}

                <div className="absolute bottom-3 left-3 bg-[#141416]/90 backdrop-blur-md border border-[#1E1E22] rounded-xl px-3 py-1 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-mono text-[#F5F2EC]">
                    6 Confirmed Sourcing Basins
                  </span>
                </div>
              </div>
            </div>

            {/* Confirmed Region Selector List */}
            <div className="flex flex-col gap-2">
              {confirmedRegions.map((reg) => {
                const isSelected = reg.id === selectedRegionId;
                return (
                  <button
                    key={reg.id}
                    onClick={() => setSelectedRegionId(reg.id)}
                    type="button"
                    className={`p-3.5 rounded-2xl border transition-all text-left flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[#18181B] border-[#D4AF37] shadow-lg'
                        : 'bg-[#141416] border-[#1E1E22] hover:border-white/20 hover:bg-[#18181A]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl shrink-0 ${isSelected ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-white/5 text-[#A5A19A]'}`}>
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-[#F5F2EC]">
                            {reg.region}
                          </span>
                          <span className="text-[10px] font-mono text-[#D4AF37]">
                            · {reg.state}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#A5A19A] block mt-0.5">
                          {reg.products.map(p => p.name).join(' & ')}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className={`h-4 w-4 shrink-0 ${isSelected ? 'text-[#D4AF37]' : 'text-white/20'}`} />
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right Column: Highlighted Region Detail & Relevant Product Cards (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#1E1E22] bg-[#141416] p-7 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />

              {/* Region Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-[#1E1E22]">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
                      {selectedRegion.state.toUpperCase()} · INDIA
                    </span>
                    <span className="text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      Verified Sourcing Basin
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading text-[#F5F2EC] font-medium">
                    {selectedRegion.region}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (onOpenEnquiry) {
                      onOpenEnquiry(selectedRegion.products[0].name, `${selectedRegion.region}, ${selectedRegion.state}`, selectedRegion.products[0].forms.split('·')[0].trim());
                    }
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#D4AF37] text-[#0A0A0B] font-semibold text-xs tracking-wider uppercase hover:bg-[#E5C07B] transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Sourcing Enquiry</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Terroir / Agro Climate Snapshot (Concise) */}
              <div className="p-4 rounded-2xl bg-[#0A0A0B] border border-[#1E1E22] mb-6">
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block font-bold mb-1">
                  Agro-Climatic & Terroir Profile
                </span>
                <p className="text-xs text-[#A5A19A] font-light leading-relaxed">
                  {selectedRegion.terroir}
                </p>
              </div>

              {/* Relevant Products Originating from this Region */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono tracking-wider text-[#F5F2EC] uppercase font-bold">
                    Relevant Export Products ({selectedRegion.products.length})
                  </span>
                  <span className="text-[11px] font-mono text-[#A5A19A]">
                    Click product to view full specifications
                  </span>
                </div>

                <div className="space-y-3">
                  {selectedRegion.products.map((p) => (
                    <div
                      key={p.id}
                      className="p-4 rounded-2xl bg-[#111113] border border-[#1E1E22] hover:border-[#D4AF37]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                    >
                      <div>
                        <span className="text-[10px] font-mono uppercase text-[#A5A19A] tracking-wider block mb-1">
                          {p.category}
                        </span>
                        <h4 className="font-heading text-lg text-[#F5F2EC] font-medium group-hover:text-[#E5C07B] transition-colors">
                          {p.name}
                        </h4>
                        <span className="text-xs font-mono text-[#D4AF37]/90 mt-1 block">
                          Available: {p.forms}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <Link
                          to={p.link}
                          className="px-4 py-2 rounded-xl bg-white/5 hover:bg-[#D4AF37] hover:text-black text-[#F5F2EC] text-xs font-mono uppercase tracking-wider border border-white/10 hover:border-[#D4AF37] transition-all flex items-center gap-1.5"
                        >
                          <span>Product Details</span>
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Origin Guarantee Footer */}
              <div className="mt-8 pt-5 border-t border-[#1E1E22] flex items-center gap-3 text-xs text-[#A5A19A]">
                <ShieldCheck className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <p className="font-light">
                  AURA provides batch traceability to origin clusters across all commercial export consignments.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
