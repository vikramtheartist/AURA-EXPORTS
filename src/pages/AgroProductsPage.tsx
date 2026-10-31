import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Search, 
  SlidersHorizontal,
  PackageCheck,
  Snowflake,
  FileText
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/procurement/Breadcrumbs';
import HowToBuyModule from '../components/procurement/HowToBuyModule';
import { agroCategories, masterCatalogProducts } from '../data/agroCatalog';
import agroHeroImg from '../assets/images/agro_products_hero.jpg';

export default function AgroProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return masterCatalogProducts.filter((product) => {
      const matchesCategory = 
        selectedCategory === 'all' || product.subcategoryId === selectedCategory;
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.formats.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const element = document.getElementById('featured-products-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full pt-28 pb-24" id="agro-products-landing">
      <SEOHead 
        title="Indian Agro Products Exporter | Spices, Chillies, Turmeric & Fresh Produce | AURA Global Trade"
        description="India's agricultural richness connected to global markets. Sourcing wholesale Indian spices, turmeric rhizomes, dried chillies, fresh drumsticks, moringa and basmati rice."
        canonical="https://auraexport.co/products/agro-products"
      />

      {/* Semantic Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Agro Products', href: '/products/agro-products' },
        ]}
      />

      {/* SECTION 1 — HERO */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/25 rounded-full px-4 py-1.5 w-fit shadow-sm">
              <Sprout className="h-3.5 w-3.5 text-[#dcb782]" />
              <span className="text-[11px] font-mono text-[#dcb782] tracking-[0.2em] uppercase font-bold">
                AURA GLOBAL TRADE / AGRO PRODUCTS
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[1.08] font-normal">
              India&apos;s Agricultural Richness.{' '}
              <span className="text-[#dcb782] italic font-normal">Connected to Global Markets.</span>
            </h1>

            <p className="text-[#D5C8B7] font-body text-base md:text-lg leading-relaxed font-light max-w-2xl">
              From aromatic Indian spices and agricultural commodities to fresh produce and natural ingredients, AURA Global Trade brings together diverse agricultural sourcing opportunities for international buyers.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#featured-products-section"
                className="bg-[#dcb782] text-black hover:bg-white transition-all font-body font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-xl shadow-xl flex items-center gap-2.5 cursor-pointer"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                to="/request-quote?category=agro-products"
                className="border border-white/15 hover:border-[#dcb782] text-white hover:bg-white/5 transition-all font-body font-bold text-xs tracking-wider uppercase px-7 py-4 rounded-xl flex items-center gap-2"
              >
                <span>Request an Export Enquiry</span>
                <ArrowUpRight className="h-4 w-4 text-[#dcb782]" />
              </Link>
            </div>

            {/* Quick Sourcing Credentials */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 mt-2">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#ab8558] uppercase font-bold">Active Assays</span>
                <span className="text-sm font-semibold text-white mt-0.5">HPLC / ASTA Verified</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#ab8558] uppercase font-bold">Logistics Corridors</span>
                <span className="text-sm font-semibold text-white mt-0.5">Dry Bulk & Cold-Chain</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#ab8558] uppercase font-bold">Export Corridors</span>
                <span className="text-sm font-semibold text-white mt-0.5">Chennai & Tuticorin</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Column */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#dcb782]/20 via-transparent to-transparent rounded-[2.5rem] blur-2xl opacity-50 pointer-events-none" />
            <div className="relative rounded-[2.2rem] overflow-hidden border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.9)] aspect-[4/3] w-full bg-[#121211]">
              <img
                src={agroHeroImg}
                alt="AURA Global Trade - Indian Agricultural Products Export Assortment"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 backdrop-blur-md bg-black/60 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#dcb782] tracking-wider uppercase font-bold block">
                    COMMODITY SHOWCASE
                  </span>
                  <span className="text-xs text-white font-medium">
                    Spices · Turmeric · Chillies · Fresh Produce · Moringa
                  </span>
                </div>
                <ShieldCheck className="h-5 w-5 text-[#dcb782] shrink-0" />
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* SECTION 2 — PRODUCT CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-28" id="agricultural-portfolio">
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <span className="text-xs font-mono tracking-[0.25em] text-[#dcb782] uppercase font-bold">
            PRODUCT SUBDIVISIONS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white font-normal">
            Explore Our Agricultural Portfolio
          </h2>
          <p className="text-sm md:text-base text-[#D5C8B7] font-light max-w-2xl leading-relaxed">
            Discover a diverse selection of agricultural commodities and ingredients sourced for international trade.
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#dcb782]/30 to-transparent mt-2" />
        </div>

        {/* 7 Interactive Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {agroCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`rounded-3xl border transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer group relative overflow-hidden ${
                selectedCategory === category.id 
                  ? 'border-[#dcb782] bg-[#161513] shadow-[0_15px_35px_rgba(220,183,130,0.15)]' 
                  : 'border-white/10 bg-[#10100f] hover:border-[#dcb782]/40 hover:bg-[#141412]'
              }`}
            >
              {/* Image Preview */}
              <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-5 relative border border-white/5">
                <img
                  src={category.image}
                  alt={`AURA Global Trade - ${category.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md border border-[#dcb782]/30 rounded-full px-2.5 py-1">
                  <span className="text-[9px] font-mono text-[#dcb782] tracking-wider uppercase font-bold">
                    {category.productCountText}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-2 mb-4">
                <h3 className="text-xl font-heading text-white font-medium group-hover:text-[#dcb782] transition-colors">
                  {category.title}
                </h3>
                <p className="text-xs text-[#dfd1b9]/75 font-light leading-relaxed">
                  {category.shortDescription}
                </p>
              </div>

              {/* Highlight Product Chips */}
              <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/5">
                {category.highlights.map((h, i) => (
                  <span 
                    key={i}
                    className="text-[10px] font-mono bg-white/[0.04] text-[#dfd1b9]/70 px-2 py-0.5 rounded-md border border-white/5"
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Explore Category Trigger */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-body font-semibold text-[#dcb782] group-hover:text-white transition-colors">
                <span className="tracking-wider uppercase text-[11px]">Explore Products</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — FEATURED AGRICULTURAL PRODUCTS & SEARCHABLE GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-24" id="featured-products-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <PackageCheck className="h-4 w-4 text-[#dcb782]" />
              <span className="text-xs font-mono tracking-widest text-[#ab8558] uppercase font-bold">
                COMMODITY CATALOGUE
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading text-white font-medium">
              Featured Agricultural Products
            </h2>
            <p className="text-xs md:text-sm text-[#dfd1b9]/70 font-light mt-1">
              Showing {filteredProducts.length} verified agricultural products and sourcing specifications.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input
              type="text"
              placeholder="Search spices, chillies, rice..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#141412] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#dcb782]"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none" id="category-filter-pills">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase font-semibold shrink-0 transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#dcb782] text-black shadow-md'
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5'
            }`}
          >
            All Products ({masterCatalogProducts.length})
          </button>
          {agroCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase font-semibold shrink-0 transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#dcb782] text-black shadow-md'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-[#121211] p-12 text-center flex flex-col items-center gap-3">
            <SlidersHorizontal className="h-8 w-8 text-white/30 mb-2" />
            <h3 className="text-xl font-heading text-white">No products matched your search.</h3>
            <p className="text-xs text-white/50 max-w-md">
              Try adjusting your search terms or browse all products across our agricultural streams.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-2 text-xs font-mono text-[#dcb782] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="rounded-3xl border border-white/10 bg-[#111110] p-6 flex flex-col justify-between hover:border-[#dcb782]/40 transition-all duration-300 shadow-xl group relative overflow-hidden"
              >
                <div>
                  {/* Image Element */}
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-5 relative border border-white/5">
                    <img
                      src={product.image}
                      alt={`AURA - ${product.name}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                    
                    {/* Category Tag */}
                    <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md border border-white/10 rounded-full px-3 py-1">
                      <span className="text-[9px] font-mono text-[#dfd1b9] tracking-wider uppercase font-semibold">
                        {product.subcategory}
                      </span>
                    </div>

                    {/* Fresh Produce Badge */}
                    {product.freshProduceDetails && (
                      <div className="absolute top-3 right-3 bg-[#dcb782]/20 backdrop-blur-md border border-[#dcb782]/40 rounded-full px-2.5 py-1 flex items-center gap-1">
                        <Snowflake className="h-3 w-3 text-[#dcb782]" />
                        <span className="text-[9px] font-mono text-[#dcb782] tracking-wider uppercase font-bold">
                          Cold Chain
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-heading text-white font-medium group-hover:text-[#dcb782] transition-colors">
                      {product.name}
                    </h3>
                    {product.botanicalOrMaterialName && (
                      <span className="text-[11px] font-mono text-[#dcb782]/80 italic block mt-0.5">
                        {product.botanicalOrMaterialName}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#dfd1b9]/75 font-light leading-relaxed mb-5">
                    {product.description}
                  </p>

                  {/* Available Formats */}
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-3.5 mb-6">
                    <span className="text-[9px] font-mono text-[#ab8558] uppercase font-bold block mb-2">
                      AVAILABLE FORMATS
                    </span>
                    <ul className="flex flex-col gap-1 text-[11px] text-[#dfd1b9]/80 font-light">
                      {product.formats.slice(0, 3).map((format, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="h-3 w-3 text-[#dcb782] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{format}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                  <Link
                    to={`/products/agro-products/${product.slug}`}
                    className="w-full bg-[#dcb782] text-black hover:bg-white transition-all font-body font-bold text-xs tracking-wider uppercase py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>Product Details</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                  <Link
                    to={`/request-quote?product=${encodeURIComponent(product.id)}&category=agro-products&requirement=${encodeURIComponent(`Enquiry for ${product.name} (${product.subcategory})`)}`}
                    className="w-full border border-white/10 hover:border-[#dcb782]/40 text-white hover:bg-white/5 transition-all text-xs font-mono tracking-wider uppercase py-2 px-3 rounded-xl text-center"
                  >
                    Enquire Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Sourcing Methodology & Process */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-24">
        <HowToBuyModule />
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="rounded-3xl bg-gradient-to-tr from-[#121211] to-[#1f1d1a] border border-[#dcb782]/20 p-8 md:p-12 text-center flex flex-col items-center gap-4 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#dcb782]" />
            <span className="text-xs font-mono tracking-widest text-[#dcb782] uppercase font-bold">
              COMMERCIAL INTAKE DESK
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-white font-medium max-w-2xl">
            Looking for Custom Agricultural Sourcing or Container Allocations?
          </h2>

          <p className="text-sm text-[#dfd1b9]/75 font-light max-w-xl leading-relaxed">
            Our trade desk works directly with institutional importers, ingredient blenders, and supermarket buyers to formulate customized harvest allocations, private labeling, and port-to-port export logistics.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              to="/request-quote?category=agro-products"
              className="bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold text-xs tracking-wider uppercase px-8 py-3.5 rounded-xl hover:from-white hover:to-[#dcb782] transition-all shadow-xl"
            >
              Request an Agro Quotation
            </Link>

            <Link
              to="/quality-compliance"
              className="border border-white/10 hover:border-white text-white text-xs font-body font-bold tracking-wider uppercase px-6 py-3.5 rounded-xl hover:bg-white/5 transition-all"
            >
              Review Quality & Compliance
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
