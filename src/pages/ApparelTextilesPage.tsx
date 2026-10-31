import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shirt, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  SlidersHorizontal,
  PackageCheck,
  Scissors,
  Layers,
  Sparkles,
  Building2,
  Globe,
  FileText
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/procurement/Breadcrumbs';
import HowToBuyModule from '../components/procurement/HowToBuyModule';
import { textileCategories, masterTextileProducts } from '../data/textilesCatalog';
import apparelHeroImg from '../assets/images/apparel_textiles_hero.jpg';

export default function ApparelTextilesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return masterTextileProducts.filter((product) => {
      const matchesCategory = 
        selectedCategory === 'all' || product.subcategoryId === selectedCategory;
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.formats.some(f => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (product.botanicalOrMaterialName && product.botanicalOrMaterialName.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const element = document.getElementById('textile-catalog-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full pt-28 pb-24" id="apparel-textiles-landing">
      <SEOHead 
        title="Apparel & Textiles Exporter | Fabrics, Garments, Home Textiles & Yarns | AURA Global Trade"
        description="AURA Global Trade connects international buyers with a diverse range of apparel, fabrics, textile materials, home furnishings, handlooms and spun yarns from India."
        canonical="https://auraexport.co/products/apparel-textiles"
      />

      {/* Semantic Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Apparel & Textiles', href: '/products/apparel-textiles' },
        ]}
      />

      {/* SECTION 1 — HERO */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/25 rounded-full px-4 py-1.5 w-fit shadow-sm">
              <Shirt className="h-3.5 w-3.5 text-[#dcb782]" />
              <span className="text-[11px] font-mono text-[#dcb782] tracking-[0.2em] uppercase font-bold">
                AURA GLOBAL TRADE / APPAREL & TEXTILES
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[1.08] font-normal">
              Connecting Textile Excellence{' '}
              <span className="text-[#dcb782] italic font-normal">with Global Markets.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#dcb782] font-heading italic font-light">
              From Fabrics to Finished Apparel. Sourcing Without Boundaries.
            </p>

            <p className="text-[#D5C8B7] font-body text-base md:text-lg leading-relaxed font-light max-w-2xl">
              AURA Global Trade connects international buyers with a diverse range of apparel, fabrics, textile materials and finished textile products. We support global sourcing and trading requirements across multiple textile categories.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#textile-catalog-section"
                className="bg-[#dcb782] text-black hover:bg-white transition-all font-body font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-xl shadow-xl flex items-center gap-2.5 cursor-pointer"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                to="/request-quote?category=apparel-textiles"
                className="border border-white/15 hover:border-[#dcb782] text-white hover:bg-white/5 transition-all font-body font-bold text-xs tracking-wider uppercase px-7 py-4 rounded-xl flex items-center gap-2"
              >
                <span>Discuss Your Sourcing Requirements</span>
                <ArrowUpRight className="h-4 w-4 text-[#dcb782]" />
              </Link>
            </div>

            {/* Quick Sourcing Credentials */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 mt-2">
              <div>
                <span className="text-xl md:text-2xl font-heading font-medium text-white block">6</span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#ab8558]">Major Verticals</span>
              </div>
              <div>
                <span className="text-xl md:text-2xl font-heading font-medium text-white block">AQL 1.5/2.5</span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#ab8558]">Quality Standard</span>
              </div>
              <div>
                <span className="text-xl md:text-2xl font-heading font-medium text-white block">100%</span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#ab8558]">Mill Direct Trade</span>
              </div>
              <div>
                <span className="text-xl md:text-2xl font-heading font-medium text-white block">Private Label</span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#ab8558]">Cut-To-Pack</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#dcb782]/25 via-transparent to-transparent rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-75 transition-opacity duration-1000 pointer-events-none" />
            
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#121211] shadow-2xl">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={apparelHeroImg}
                  alt="AURA Global Trade - Apparel and Textile Sourcing Showroom"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                
                {/* Visual Badges Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 w-fit">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#dcb782]" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/90">
                      End-to-End Textile Value Chain
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading text-white font-medium">
                    From Raw Fibers & Yarns to Finished Tailored Garments
                  </h3>
                  <p className="text-xs text-[#dfd1b9]/75 font-light">
                    Sourcing across India&apos;s primary textile corridors: Tirupur, Coimbatore, Karur, Surat & Bengaluru.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* SECTION 2 — 6 CATEGORY SHOWCASE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-28" id="category-showcase">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#ab8558] uppercase font-bold mb-2">
              <Layers className="h-3.5 w-3.5 text-[#dcb782]" />
              <span>EXPORT STRUCTURE</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white font-normal">
              Explore Our Apparel & Textile Portfolio
            </h2>
          </div>
          <p className="text-[#D5C8B7] font-body text-sm md:text-base font-light max-w-md leading-relaxed">
            Discover a diverse portfolio of fabrics, apparel, textile materials and finished products for international sourcing and trading.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {textileCategories.map((cat) => (
            <div
              key={cat.id}
              className="group rounded-3xl border border-white/10 bg-[#121211] overflow-hidden flex flex-col justify-between hover:border-[#dcb782]/40 transition-all duration-500 shadow-xl"
            >
              <div>
                {/* Image Aspect Box */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121211] via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono tracking-widest uppercase font-bold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#dcb782] border border-white/10">
                      {cat.categoryNumber}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-mono tracking-wider uppercase font-bold px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/90">
                      {cat.productCountText}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col gap-4">
                  <h3 className="text-2xl font-heading text-white font-medium group-hover:text-[#dcb782] transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-xs md:text-sm text-[#dfd1b9]/75 font-light leading-relaxed">
                    {cat.shortDescription}
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[#ab8558] block mb-2 font-bold">
                      Representative Products:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.productExamples.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono bg-white/[0.03] text-white/80 border border-white/5 rounded-md px-2 py-0.5"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 md:p-8 pt-0 border-t border-white/5 mt-auto flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleCategorySelect(cat.id)}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#dcb782] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Explore Category</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  to={`/request-quote?category=apparel-textiles&requirement=${encodeURIComponent(`Wholesale quotation request for ${cat.title}`)}`}
                  className="text-[11px] font-mono text-white/50 hover:text-white transition-colors underline"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — FILTERABLE PRODUCT CATALOG */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-28" id="textile-catalog-section">
        <div className="flex flex-col gap-4 mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#ab8558] uppercase font-bold">
            <SlidersHorizontal className="h-3.5 w-3.5 text-[#dcb782]" />
            <span>TRADE DESK SOURCING CATALOG</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading text-white font-normal">
            Product Specifications & Discovery
          </h2>
          <p className="text-sm md:text-base text-[#D5C8B7] font-light max-w-3xl leading-relaxed">
            Browse our core textile specifications across fabrics, apparel, home furnishings, handloom yardage, and industrial yarns. Custom compositions, weights, and private-label packaging configured to order.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between p-4 rounded-2xl bg-[#121211] border border-white/10 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#dcb782] text-black shadow-md'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              All Categories ({masterTextileProducts.length})
            </button>
            {textileCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
                  selectedCategory === c.id
                    ? 'bg-[#dcb782] text-black shadow-md'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#dfd1b9]/40" />
            <input
              type="text"
              placeholder="Search fabrics, yarns, apparel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-[#dfd1b9]/30 focus:outline-none focus:border-[#dcb782]"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-[#121211] p-12 text-center text-sm text-[#dfd1b9]/60">
            No textile products match your search criteria. Please select another category or contact our trade desk for custom sourcing.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const quoteUrl = `/request-quote?product=${encodeURIComponent(product.id)}&category=apparel-textiles&requirement=${encodeURIComponent(`Quotation request for ${product.name} (${product.subcategory})`)}`;

              return (
                <div
                  key={product.id}
                  className="rounded-3xl border border-white/10 bg-[#121211] overflow-hidden flex flex-col justify-between hover:border-[#dcb782]/40 transition-all duration-300 group shadow-lg"
                >
                  <div>
                    {/* Image Header */}
                    <div className="aspect-[16/10] relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121211] via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] font-mono tracking-wider uppercase font-bold px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#dcb782] border border-white/10">
                          {product.subcategory}
                        </span>
                      </div>

                      <div className="absolute top-4 right-4">
                        <span className="text-[10px] font-mono tracking-wider uppercase font-bold px-2.5 py-1 rounded-full bg-[#dcb782]/10 text-[#dcb782] border border-[#dcb782]/20">
                          {product.availability === 'available' ? 'Export Ready' : 'On Demand'}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 md:p-8 flex flex-col gap-4">
                      <div>
                        {product.botanicalOrMaterialName && (
                          <span className="text-[11px] font-mono text-[#ab8558] block mb-1">
                            {product.botanicalOrMaterialName}
                          </span>
                        )}
                        <h3 className="text-xl md:text-2xl font-heading text-white font-medium group-hover:text-[#dcb782] transition-colors leading-snug">
                          {product.name}
                        </h3>
                      </div>

                      <p className="text-xs text-[#dfd1b9]/75 font-light leading-relaxed">
                        {product.tagline}
                      </p>

                      {/* Key Technical Specifications Pill Grid */}
                      <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-4 flex flex-col gap-2">
                        <span className="text-[10px] font-mono tracking-wider uppercase text-[#dcb782] font-bold">
                          Key Specifications:
                        </span>
                        <div className="grid grid-cols-1 gap-1.5 text-[11px]">
                          {Object.entries(product.specifications).slice(0, 3).map(([k, v], sIdx) => (
                            <div key={sIdx} className="flex justify-between items-center text-white/80">
                              <span className="text-[#dfd1b9]/50 font-light truncate max-w-[130px]">{k}</span>
                              <span className="font-mono text-white text-right truncate max-w-[160px]">{v}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Available Formats / Lines */}
                      <div>
                        <span className="text-[10px] font-mono tracking-wider uppercase text-[#ab8558] block mb-1.5 font-bold">
                          Supplied Formats:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {product.formats.slice(0, 3).map((fmt, fIdx) => (
                            <span
                              key={fIdx}
                              className="text-[10px] font-mono bg-white/5 text-white/70 px-2 py-0.5 rounded border border-white/5"
                            >
                              {fmt}
                            </span>
                          ))}
                          {product.formats.length > 3 && (
                            <span className="text-[10px] font-mono text-[#dcb782] px-1 py-0.5">
                              +{product.formats.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="p-6 md:p-8 pt-0 border-t border-white/5 flex items-center justify-between gap-3 mt-auto">
                    <Link
                      to={`/products/apparel-textiles/${product.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-[#dcb782] transition-colors"
                    >
                      <span>Specifications</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>

                    <Link
                      to={quoteUrl}
                      className="bg-[#dcb782] text-black hover:bg-white transition-all text-xs font-mono font-bold uppercase tracking-wider px-4 py-2 rounded-xl flex items-center gap-1.5 shadow"
                    >
                      <span>Get Quote</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* SECTION 4 — INTERNATIONAL B2B POSITIONING & SOURCING CLUSTERS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-28">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#181816] to-[#0e0e0d] p-8 md:p-14 shadow-2xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono tracking-widest text-[#dcb782] uppercase font-bold block mb-2">
              GLOBAL TEXTILE SOURCING CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white font-normal mb-4">
              Your Global Partner for Apparel & Textile Sourcing.
            </h2>
            <p className="text-sm md:text-base text-[#D5C8B7] font-light leading-relaxed">
              AURA Global Trade operates as a diversified international trading and sourcing partner, connecting overseas buyers with vetted textile mills, automated garment factories, master handloom weavers, and spinning clusters across India.
            </p>
          </div>

          {/* Sourcing Corridors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="h-8 w-8 rounded-lg bg-[#dcb782]/10 border border-[#dcb782]/20 flex items-center justify-center text-[#dcb782] font-mono text-xs font-bold mb-3">
                01
              </div>
              <h3 className="text-lg font-heading text-white font-medium mb-1">
                Tirupur Knitwear Corridor
              </h3>
              <span className="text-[11px] font-mono text-[#ab8558] block mb-2">Hosiery & Apparel Hub</span>
              <p className="text-xs text-[#dfd1b9]/70 font-light leading-relaxed">
                Single jersey, interlock, pique polo shirts, activewear, and OEKO-TEX compliant infant wear with automated bio-polishing and digital printing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="h-8 w-8 rounded-lg bg-[#dcb782]/10 border border-[#dcb782]/20 flex items-center justify-center text-[#dcb782] font-mono text-xs font-bold mb-3">
                02
              </div>
              <h3 className="text-lg font-heading text-white font-medium mb-1">
                Coimbatore & Erode
              </h3>
              <span className="text-[11px] font-mono text-[#ab8558] block mb-2">Spinning & Woven Fabrics</span>
              <p className="text-xs text-[#dfd1b9]/70 font-light leading-relaxed">
                Precision spun yarns (Ne 10s to 100s), airjet woven poplins, twills, and shirting yardage supplied to garment manufacturers globally.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="h-8 w-8 rounded-lg bg-[#dcb782]/10 border border-[#dcb782]/20 flex items-center justify-center text-[#dcb782] font-mono text-xs font-bold mb-3">
                03
              </div>
              <h3 className="text-lg font-heading text-white font-medium mb-1">
                Karur Home Textile Cluster
              </h3>
              <span className="text-[11px] font-mono text-[#ab8558] block mb-2">Furnishings & Hospitality</span>
              <p className="text-xs text-[#dfd1b9]/70 font-light leading-relaxed">
                High-thread-count bed linen (200-800 TC), terry bath towels, table linen, and decorative cushion covers for international retail and hotel chains.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="h-8 w-8 rounded-lg bg-[#dcb782]/10 border border-[#dcb782]/20 flex items-center justify-center text-[#dcb782] font-mono text-xs font-bold mb-3">
                04
              </div>
              <h3 className="text-lg font-heading text-white font-medium mb-1">
                Surat Synthetic & Blends
              </h3>
              <span className="text-[11px] font-mono text-[#ab8558] block mb-2">Viscose, Poly & Jacquards</span>
              <p className="text-xs text-[#dfd1b9]/70 font-light leading-relaxed">
                Specialized fashion fabrics, georgettes, viscose crepes, polyester yarns, and industrial high-tenacity sewing threads.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="h-8 w-8 rounded-lg bg-[#dcb782]/10 border border-[#dcb782]/20 flex items-center justify-center text-[#dcb782] font-mono text-xs font-bold mb-3">
                05
              </div>
              <h3 className="text-lg font-heading text-white font-medium mb-1">
                Bengaluru Garment Assemblies
              </h3>
              <span className="text-[11px] font-mono text-[#ab8558] block mb-2">Woven Shirting & Tailoring</span>
              <p className="text-xs text-[#dfd1b9]/70 font-light leading-relaxed">
                Full-package formal dress shirts, casual button-downs, trousers, and workwear meeting strict AQL inspection benchmarks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="h-8 w-8 rounded-lg bg-[#dcb782]/10 border border-[#dcb782]/20 flex items-center justify-center text-[#dcb782] font-mono text-xs font-bold mb-3">
                06
              </div>
              <h3 className="text-lg font-heading text-white font-medium mb-1">
                Artisan Handloom Networks
              </h3>
              <span className="text-[11px] font-mono text-[#ab8558] block mb-2">Heritage Weaves & Sarees</span>
              <p className="text-xs text-[#dfd1b9]/70 font-light leading-relaxed">
                Certified pit-loom and frame-loom collectives producing hand-spun khadi, silk sarees, and cultural drapes with verifiable provenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW TO BUY & RFQ WORKFLOW */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <HowToBuyModule 
          categorySlug="apparel-textiles" 
        />
      </section>

      {/* SECTION 6 — CLOSING COMMERCIAL INVITATION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="rounded-3xl border border-[#dcb782]/30 bg-gradient-to-r from-[#181816] via-[#1f1e1a] to-[#181816] p-8 md:p-14 text-center flex flex-col items-center gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#dcb782]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-4 py-1.5 shadow-sm">
            <Globe className="h-3.5 w-3.5 text-[#dcb782]" />
            <span className="text-[11px] font-mono text-[#dcb782] tracking-[0.2em] uppercase font-bold">
              INTERNATIONAL TEXTILE TRADING
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white font-medium max-w-2xl">
            Sourcing Without Boundaries. Connected to Global Markets.
          </h2>

          <p className="text-sm md:text-base text-[#D5C8B7] font-light max-w-xl leading-relaxed">
            Whether you require bulk fabric yardage, customized private-label garment runs, institutional hospitality linen, or spun yarn containers, our trade desk provides direct manufacturer coordination and transparent commercial terms.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/request-quote?category=apparel-textiles"
              className="bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold rounded-xl px-8 py-4 text-xs tracking-wider uppercase shadow-xl hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <span>Request a Quotation</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              to="/contact"
              className="border border-white/20 hover:border-white text-white font-body font-bold rounded-xl px-7 py-4 text-xs tracking-wider uppercase hover:bg-white/5 transition-all"
            >
              Discuss Your Requirements
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
