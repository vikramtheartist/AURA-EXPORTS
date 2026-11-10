import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Search, Sparkles, Filter, X } from 'lucide-react';

import turmericImg from '../../assets/images/product_turmeric_1780423510096.png';
import spicesImg from '../../assets/images/agro_spices.jpg';
import chilliesImg from '../../assets/images/agro_chillies.jpg';
import freshProduceImg from '../../assets/images/agro_fresh_produce.jpg';
import moringaImg from '../../assets/images/agro_moringa.jpg';
import grainsImg from '../../assets/images/agro_grains.jpg';
import agroHeroImg from '../../assets/images/agro_products_hero.jpg';

export interface AgroSubdivisionItem {
  id: string;
  title: string;
  badge: string;
  category: 'spices' | 'fresh' | 'botanicals-grains' | 'custom';
  image: string;
  shortDescription: string;
  highlights: string[];
  detailUrl: string;
  defaultOrigin: string;
  defaultForm: string;
}

export const subdivisionsData: AgroSubdivisionItem[] = [
  {
    id: 'spices',
    title: 'Spices & Seasonings',
    badge: '9+ SOURCED SPICES',
    category: 'spices',
    image: spicesImg,
    shortDescription: 'Whole and processed aromatic Indian spices sourced for global culinary, spice blend and food ingredient applications.',
    highlights: ['Malabar Black Pepper', 'Green Cardamom', 'Cloves & Cinnamon', 'Cumin & Coriander'],
    detailUrl: '/products/agro-products/black-pepper',
    defaultOrigin: 'Kerala & Tamil Nadu, India',
    defaultForm: 'Whole & Ground Spices',
  },
  {
    id: 'turmeric',
    title: 'Turmeric',
    badge: '5 PRODUCT VARIETIES',
    category: 'spices',
    image: turmericImg,
    shortDescription: 'High-curcumin whole fingers, cold-milled powders and extract-grade rhizomes from the Erode agricultural basin.',
    highlights: ['Whole Rhizome Fingers', 'Cold-Milled Powder', 'Polished & Unpolished', 'HPLC Curcumin Assay'],
    detailUrl: '/products/agro-products/turmeric',
    defaultOrigin: 'Erode & Salem, Tamil Nadu',
    defaultForm: 'Whole Rhizomes & Powder',
  },
  {
    id: 'chillies',
    title: 'Chillies & Chilli Products',
    badge: '4 EXPORT VARIETIES',
    category: 'spices',
    image: chilliesImg,
    shortDescription: 'Vibrant whole dried red chillies, crushed chilli flakes and pulverized powders calibrated for pungency and color.',
    highlights: ['Guntur & Byadgi Varieties', 'Stemless & With Stem', 'Crushed Flakes (Pizza & Retail)', 'ASTA Color Calibrated'],
    detailUrl: '/products/agro-products/dried-red-chillies',
    defaultOrigin: 'Guntur & Warangal, Andhra Pradesh',
    defaultForm: 'Dried Whole Chillies & Flakes',
  },
  {
    id: 'fresh-produce',
    title: 'Fresh Agricultural Produce',
    badge: '6 FRESH COMMODITIES',
    category: 'fresh',
    image: freshProduceImg,
    shortDescription: 'Export-grade fresh vegetables, onions, drumsticks and tomatoes handled under temperature-controlled logistics.',
    highlights: ['Fresh Drumsticks (Moringa)', 'Nashik & South Red Onions', 'Table Tomatoes', 'Reefer Container Freight'],
    detailUrl: '/products/agro-products/fresh-onions',
    defaultOrigin: 'Nashik & Tamil Nadu, India',
    defaultForm: 'Fresh Graded Export Pack',
  },
  {
    id: 'moringa',
    title: 'Moringa & Natural Ingredients',
    badge: '3 BOTANICAL STREAMS',
    category: 'botanicals-grains',
    image: moringaImg,
    shortDescription: 'Nutrient-dense moringa leaf powders, dried whole leaves and botanical wellness ingredients for nutraceutical formulations.',
    highlights: ['Cold-Dried Moringa Powder', 'Whole Dried Green Leaves', 'Certified Pesticide Screened', 'Nutraceutical Grade'],
    detailUrl: '/products/agro-products/moringa-leaf-powder',
    defaultOrigin: 'Dindigul & Theni, Tamil Nadu',
    defaultForm: 'Fine 100-Mesh Leaf Powder',
  },
  {
    id: 'rice-grains',
    title: 'Rice & Specialty Grains',
    badge: 'TOP UAE EXPORT',
    category: 'botanicals-grains',
    image: grainsImg,
    shortDescription: "India's #1 agricultural commodity export to UAE & Middle East: 1121 Steam, Pusa & Traditional Basmati alongside South Indian staples (Sona Masoori, Ponni, Matta).",
    highlights: ['1121 Steam Basmati (8.35mm+)', 'Sona Masoori & Ponni Rice', 'Kerala Palakkadan Matta', 'Ambient Bulk (25/50kg) & Branded 5kg'],
    detailUrl: '/products/agro-products/rice-basmati-non-basmati',
    defaultOrigin: 'Indo-Gangetic & Southern Basins, India',
    defaultForm: '100% Sortex Cleaned Double Silky Polished',
  },
  {
    id: 'cardamom',
    title: 'Green Cardamom',
    badge: '4 EXPORT GRADES',
    category: 'spices',
    image: spicesImg,
    shortDescription: 'Extra-bold 7.5mm to 8mm+ emerald pods from Western Ghats plantations with high volatile essential oils and pristine aroma.',
    highlights: ['Alleppey Green Bold (AGEB)', 'Decorticated Seeds', 'High Volatile Oil (6-8%)', 'Vacuum Foil Barrier Pack'],
    detailUrl: '/products/agro-products/green-cardamom',
    defaultOrigin: 'Idukki & Bodinayakanur, India',
    defaultForm: 'Extra Bold 8mm+ Green Pods',
  },
  {
    id: 'black-pepper',
    title: 'Malabar Black Pepper',
    badge: '3 EXPORT GRADES',
    category: 'spices',
    image: spicesImg,
    shortDescription: 'Hand-garbled Tellicherry extra-bold and high bulk density Malabar black peppercorns delivering bold pungency and high piperine.',
    highlights: ['Tellicherry Garbled (TGSEB)', '500GL & 550GL Bulk Density', 'Piperine 4.5%–6.5%', 'Steam Sterilized'],
    detailUrl: '/products/agro-products/black-pepper',
    defaultOrigin: 'Kerala & Karnataka, India',
    defaultForm: 'Tellicherry Garbled (TGSEB)',
  },
  {
    id: 'other-agro',
    title: 'Other Agricultural Products',
    badge: 'CUSTOM SOURCING',
    category: 'custom',
    image: agroHeroImg,
    shortDescription: 'Secondary agricultural commodities, processed coconut derivatives and bespoke agro commodities sourced to client specifications.',
    highlights: ['Desiccated Coconut', 'Copra & Coconut Oil', 'Dried Agro Commodities', 'Consolidated Shipments'],
    detailUrl: '/products',
    defaultOrigin: 'Pan-India Contract Sourcing',
    defaultForm: 'Custom Processing & Spec',
  },
];

interface AgroSubdivisionsSectionProps {
  onOpenEnquiry: (
    productName: string,
    origin: string,
    form: string,
    inquiryType: 'quotation' | 'sample' | 'specifications' | 'packaging'
  ) => void;
}

export default function AgroSubdivisionsSection({ onOpenEnquiry }: AgroSubdivisionsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'all', label: 'All Subdivisions', count: subdivisionsData.length },
    { id: 'spices', label: 'Spices & Seasonings', count: subdivisionsData.filter((i) => i.category === 'spices').length },
    { id: 'fresh', label: 'Fresh Produce', count: subdivisionsData.filter((i) => i.category === 'fresh').length },
    { id: 'botanicals-grains', label: 'Botanicals & Staples', count: subdivisionsData.filter((i) => i.category === 'botanicals-grains').length },
    { id: 'custom', label: 'Custom Sourcing', count: subdivisionsData.filter((i) => i.category === 'custom').length },
  ];

  const filteredItems = useMemo(() => {
    return subdivisionsData.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        item.title.toLowerCase().includes(q) ||
        item.shortDescription.toLowerCase().includes(q) ||
        item.highlights.some((h) => h.toLowerCase().includes(q)) ||
        item.badge.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-28" id="explore-agricultural-products">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
        <span className="text-[11px] font-mono text-[#dcb782] tracking-[0.25em] uppercase font-bold mb-3">
          PRODUCT SUBDIVISIONS
        </span>

        <h2 className="text-4xl md:text-5xl lg:text-5xl font-heading text-white font-normal tracking-tight leading-tight">
          Explore Our Agricultural Portfolio
        </h2>

        <p className="text-sm md:text-base text-[#dfd1b9]/75 font-light leading-relaxed mt-4 max-w-2xl">
          Discover a diverse selection of agricultural commodities and ingredients sourced for international trade.
        </p>

        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#dcb782]/40 to-transparent mt-6" />
      </div>

      {/* UX Controls: Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#dcb782] text-black font-semibold shadow-md'
                    : 'bg-white/[0.04] text-[#dfd1b9]/70 hover:text-white hover:bg-white/[0.08] border border-white/5'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-white/60'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#dcb782]/70 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search commodities, forms..."
            className="w-full bg-[#121211] border border-white/10 hover:border-white/20 focus:border-[#dcb782] rounded-xl pl-9 pr-8 py-2 text-xs text-white placeholder-[#dfd1b9]/40 focus:outline-none transition-colors font-body"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* 3-Tile Wide Cards Grid */}
      {filteredItems.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-[#121211] p-12 text-center my-8">
          <Filter className="h-8 w-8 text-[#dcb782]/60 mx-auto mb-3" />
          <h4 className="text-lg font-heading text-white">No subdivisions match your filter</h4>
          <p className="text-xs text-[#dfd1b9]/60 font-light mt-1">
            Try adjusting your search query or selecting &quot;All Subdivisions&quot;.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-4 px-5 py-2 rounded-xl bg-[#dcb782] text-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-white transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="rounded-[2rem] bg-[#10100f] border border-white/10 hover:border-[#dcb782]/40 p-7 sm:p-8 flex flex-col justify-between group shadow-xl hover:shadow-[0_20px_50px_rgba(220,183,130,0.12)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Wide Aspect Visual Image */}
                <Link to={item.detailUrl} className="block group/img">
                  <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-6 relative border border-white/5 bg-black">
                    <img
                      src={item.image}
                      alt={`Aura Exports - ${item.title}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    {/* Top-Right Badge (exact pill style from reference image) */}
                    <div className="absolute top-3.5 right-3.5 bg-black/80 backdrop-blur-md border border-[#dcb782]/40 rounded-full px-3 py-1 shadow-md">
                      <span className="text-[10px] font-mono text-[#dcb782] font-bold tracking-wider uppercase">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Subdivision Title */}
                <Link to={item.detailUrl} className="block">
                  <h3 className="font-heading text-2xl md:text-3xl text-white font-medium group-hover:text-[#dcb782] transition-colors mb-3 leading-snug">
                    {item.title}
                  </h3>
                </Link>

                {/* Short Description */}
                <p className="text-sm text-[#dfd1b9]/75 font-light leading-relaxed mb-6 line-clamp-3">
                  {item.shortDescription}
                </p>

                {/* Tag Chips (exact wrapped styling from reference image) */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.highlights.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono bg-white/[0.04] text-[#dfd1b9]/85 px-3 py-1.5 rounded-lg border border-white/10 group-hover:border-[#dcb782]/25 group-hover:bg-white/[0.06] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                <Link
                  to={item.detailUrl}
                  className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-[#dcb782] group-hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>EXPLORE PRODUCTS</span>
                  <ArrowRight className="h-4 w-4 text-[#dcb782] group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300" />
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    onOpenEnquiry(
                      item.title,
                      item.defaultOrigin,
                      item.defaultForm,
                      'quotation'
                    )
                  }
                  title={`Request quotation for ${item.title}`}
                  className="text-[11px] font-mono tracking-wider uppercase text-white/70 hover:text-[#dcb782] bg-white/5 hover:bg-[#dcb782]/10 border border-white/10 hover:border-[#dcb782]/40 px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Quick Quote</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Bespoke Contract Sourcing Callout */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
        <div className="flex items-center gap-3.5 text-left">
          <div className="h-10 w-10 rounded-xl bg-[#dcb782]/10 border border-[#dcb782]/20 flex items-center justify-center text-[#dcb782] shrink-0">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">
              Looking for a specific agricultural commodity or custom grade?
            </h4>
            <p className="text-xs text-[#dfd1b9]/70 font-light mt-0.5">
              AURA arranges buyer-specified contract sourcing across India for spices, oilseeds, culinary pastes, and dehydrated commodities.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() =>
            onOpenEnquiry(
              'Custom Agro Commodity',
              'India',
              'Custom Specification',
              'specifications'
            )
          }
          className="px-6 py-2.5 rounded-xl border border-[#dcb782]/40 hover:bg-[#dcb782] hover:text-black text-[#dcb782] text-xs font-mono uppercase tracking-wider transition-all shrink-0 cursor-pointer shadow-sm"
        >
          Request Custom Sourcing →
        </button>
      </div>
    </section>
  );
}
