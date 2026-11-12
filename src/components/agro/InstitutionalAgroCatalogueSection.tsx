import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Filter, X, Sprout } from 'lucide-react';
import ProductCard from './ProductCard';
import TechnicalSpecDrawer from './TechnicalSpecDrawer';
import InstitutionalRFQModal from './InstitutionalRFQModal';
import { institutionalAgroProducts, InstitutionalProduct } from '../../data/institutionalAgroCatalog';

export default function InstitutionalAgroCatalogueSection() {
  // Drawer & Modal States
  const [selectedProductForDrawer, setSelectedProductForDrawer] = useState<InstitutionalProduct | null>(null);
  const [selectedProductForRFQ, setSelectedProductForRFQ] = useState<InstitutionalProduct | null>(null);
  const [rfqInitialForm, setRfqInitialForm] = useState<string | undefined>(undefined);

  // Filter & Search States
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'all', label: 'All Products', count: institutionalAgroProducts.length },
    { id: 'grains', label: 'Rice & Grains', count: institutionalAgroProducts.filter((p) => p.category.includes('GRAIN') || p.category.includes('COMMODIT')).length },
    { id: 'spices', label: 'Spices', count: institutionalAgroProducts.filter((p) => p.category.includes('SPICES') && !p.category.includes('SEEDS')).length },
    { id: 'seeds', label: 'Seeds', count: institutionalAgroProducts.filter((p) => p.category.includes('SEEDS')).length },
    { id: 'botanicals', label: 'Botanical Ingredients', count: institutionalAgroProducts.filter((p) => p.category.includes('BOTANICAL')).length },
    { id: 'fresh', label: 'Fresh Produce', count: 1 },
  ];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'fresh') {
      return [];
    }

    return institutionalAgroProducts.filter((product) => {
      let matchesCategory = true;
      if (selectedCategory === 'grains') {
        matchesCategory = product.category.includes('GRAIN') || product.category.includes('COMMODIT');
      } else if (selectedCategory === 'spices') {
        matchesCategory = product.category.includes('SPICES') && !product.category.includes('SEEDS');
      } else if (selectedCategory === 'seeds') {
        matchesCategory = product.category.includes('SEEDS');
      } else if (selectedCategory === 'botanicals') {
        matchesCategory = product.category.includes('BOTANICAL');
      }

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        product.cardTitle.toLowerCase().includes(q) ||
        product.name.toLowerCase().includes(q) ||
        product.botanicalName.toLowerCase().includes(q) ||
        product.grade.toLowerCase().includes(q) ||
        product.subcategory.toLowerCase().includes(q) ||
        product.origin.displayOrigin.toLowerCase().includes(q) ||
        product.availableForms.some((f) => f.toLowerCase().includes(q)) ||
        product.overviewDescription.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-28" id="explore-agricultural-products">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl md:text-5xl font-heading text-[#F5F2EC] font-normal leading-tight">
          Explore Our Agricultural Portfolio
        </h2>

        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#E2BC86]/40 to-transparent mt-6" />
      </div>

      {/* Filter Tabs & Real-Time Search Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#1E1E22]">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#E2BC86] text-[#0A0A0B] font-bold shadow-md'
                    : 'bg-[#141416] text-[#A5A19A] hover:text-[#F5F2EC] hover:bg-[#1E1E22] border border-[#1E1E22]'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-black/20 text-[#0A0A0B]' : 'bg-white/10 text-white/60'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Real-Time Live Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#D4AF37]/70 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search commodity, grade, origin..."
            className="w-full bg-[#141416] border border-[#1E1E22] hover:border-[#1E1E22]/80 focus:border-[#D4AF37] rounded-xl pl-9 pr-8 py-2.5 text-xs text-white placeholder-[#77736C] focus:outline-none transition-colors font-body"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#77736C] hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Fresh Produce Category Special Card */}
      {selectedCategory === 'fresh' ? (
        <div className="rounded-3xl border border-[#1E1E22] bg-[#111113] p-8 sm:p-10 my-8 shadow-xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-mono uppercase tracking-wider mb-2">
              <Sprout className="h-4 w-4" />
              <span>Temperature-Controlled Reefer Cargo</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading text-white font-medium mb-3">
              Fresh Produce Export Corridors
            </h3>
            <p className="text-xs sm:text-sm text-[#A5A19A] font-light leading-relaxed mb-6">
              AURA arranges dedicated cold-chain export logistics for Indian Red Onions (Nashik / South), Fresh Drumsticks (Moringa Pods), and Table Tomatoes handled in reefer containers via Chennai and Nhava Sheva to international wholesale terminals.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Nashik Red Onions (45mm–60mm+)', 'Fresh Moringa Drumsticks', 'Table Tomatoes', 'Reefer Container Freight (FCL)'].map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs font-mono bg-[#141416] text-[#F5F2EC] border border-[#1E1E22] px-3 py-1.5 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setSelectedProductForRFQ(institutionalAgroProducts[0])}
              className="bg-[#E2BC86] hover:bg-[#d4a86a] text-[#0A0A0B] text-xs font-mono font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-md cursor-pointer"
            >
              Request Fresh Produce Quotation →
            </button>
          </div>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="rounded-2xl border border-[#1E1E22] bg-[#111113] p-12 text-center my-8">
          <Filter className="h-8 w-8 text-[#E2BC86]/60 mx-auto mb-3" />
          <h4 className="text-lg font-heading text-[#F5F2EC]">No commodities match your criteria</h4>
          <p className="text-xs text-[#A5A19A] font-light mt-1">
            Try adjusting your search query or selecting &quot;All Products&quot;.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-4 px-5 py-2 rounded-xl bg-[#E2BC86] text-[#0A0A0B] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#d4a86a] transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewSpecifications={(p) => setSelectedProductForDrawer(p)}
              onRequestQuotation={(p) => setSelectedProductForRFQ(p)}
            />
          ))}
        </div>
      )}

      {/* Contract Sourcing & Custom Specifications Callout */}
      <div className="rounded-3xl border border-[#1E1E22] bg-[#111113] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-4 text-left">
          <div className="h-12 w-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-base font-semibold text-[#F5F2EC]">
              Looking for a custom agricultural specification or contract lot?
            </h4>
            <p className="text-xs text-[#A5A19A] font-light mt-1 max-w-2xl leading-relaxed">
              AURA arranges origin-direct contract sourcing, buyer-defined microbiological limits, optical sorting, private-label packaging, and multi-commodity consolidated container loading across India.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setSelectedProductForRFQ(institutionalAgroProducts[0])}
          className="px-6 py-3 rounded-xl border border-[#D4AF37]/40 hover:bg-[#D4AF37] hover:text-[#0A0A0B] text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer shadow-sm hover:shadow-[0_8px_20px_rgba(212,175,55,0.2)]"
        >
          Discuss Custom Specifications →
        </button>
      </div>

      {/* Slide-over Specification Drawer */}
      <TechnicalSpecDrawer
        product={selectedProductForDrawer}
        isOpen={Boolean(selectedProductForDrawer)}
        onClose={() => setSelectedProductForDrawer(null)}
        onRequestQuotation={(product, notes) => {
          setSelectedProductForDrawer(null);
          const formMatch = notes?.match(/Form:\s*([^)]+)/);
          setRfqInitialForm(formMatch ? formMatch[1].trim() : undefined);
          setSelectedProductForRFQ(product);
        }}
        onRequestSample={(product, notes) => {
          setSelectedProductForDrawer(null);
          const formMatch = notes?.match(/Form:\s*([^)]+)/);
          setRfqInitialForm(formMatch ? formMatch[1].trim() : undefined);
          setSelectedProductForRFQ(product);
        }}
      />

      {/* Product-Specific Institutional RFQ Modal */}
      <InstitutionalRFQModal
        product={selectedProductForRFQ}
        isOpen={Boolean(selectedProductForRFQ)}
        initialForm={rfqInitialForm}
        onClose={() => {
          setSelectedProductForRFQ(null);
          setRfqInitialForm(undefined);
        }}
      />
    </section>
  );
}
