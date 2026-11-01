import { Link } from 'react-router-dom';
import { PackageCheck, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/procurement/Breadcrumbs';
import HowToBuyModule from '../components/procurement/HowToBuyModule';
import { productCategories } from '../data/products';

export default function ProductsPage() {
  return (
    <div className="w-full pt-28 pb-20">
      <SEOHead pageKey="products" />

      {/* Semantic Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
        ]}
      />

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-16">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-4 py-1.5 mb-4">
          <PackageCheck className="h-3.5 w-3.5 text-[#dcb782]" />
          <span className="text-xs font-mono text-[#dcb782] tracking-wider uppercase font-semibold">
            B2B SOURCING GATEWAY
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[1.05] font-normal mb-6">
          Products
        </h1>
        <p className="text-xl md:text-2xl text-[#dcb782] font-heading italic font-light mb-4">
          Premium Indian sourcing, structured for global procurement.
        </p>
        <p className="text-[#D5C8B7] font-body text-base md:text-lg max-w-3xl font-light leading-relaxed">
          Explore AURA&apos;s sourcing categories across agricultural commodities, contemporary jewelry & lifestyle, and comprehensive apparel & textiles. Sourced through structured quality assurance, batch traceability, and verified export corridors.
        </p>
      </header>

      {/* 3 Primary Category Cards (Section 6) */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20" id="aura-category-cards">
          {productCategories.filter(c => c.slug !== 'spices' && c.slug !== 'textiles' && c.slug !== 'jewelry').map((category) => (
            <article
              key={category.slug}
              className="rounded-3xl border border-white/10 bg-[#121211] p-8 flex flex-col justify-between hover:border-[#dcb782]/30 transition-all duration-300 shadow-2xl relative overflow-hidden group"
            >
              {/* Top ambient glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#dcb782]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#dcb782]/10 transition-colors" />

              <div>
                {/* Visual Imagery */}
                <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-6 border border-white/5 relative">
                  <img
                    src={category.featuredImage}
                    alt={`AURA Global Trade - ${category.name}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md border border-[#dcb782]/30 rounded-full px-3 py-1">
                    <span className="text-[10px] font-mono text-[#dcb782] tracking-wider uppercase font-bold">
                      {category.badge}
                    </span>
                  </div>
                </div>

                {/* Category Header */}
                <h2 className="text-2xl font-heading text-white font-medium mb-3 group-hover:text-[#dcb782] transition-colors">
                  {category.name}
                </h2>
                <p className="text-xs text-[#dfd1b9]/75 font-light leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Sourcing Philosophy */}
                <div className="border-t border-white/5 pt-4 mb-6">
                  <span className="text-[10px] font-mono text-[#ab8558] uppercase tracking-wider block mb-1">
                    SOURCING PHILOSOPHY
                  </span>
                  <p className="text-[11px] text-[#dfd1b9]/65 font-light leading-relaxed">
                    {category.sourcingPhilosophy}
                  </p>
                </div>

                {/* Procurement Relevance */}
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 mb-6">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#dcb782] uppercase font-bold mb-2">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>PROCUREMENT RELEVANCE</span>
                  </div>
                  <ul className="flex flex-col gap-1.5 text-[11px] text-[#dfd1b9]/70 font-light">
                    {category.procurementLens.definableFields.slice(0, 3).map((field, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 text-[#dcb782] shrink-0 mt-0.5" />
                        <span>{field}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <Link
                  to={`/products/${category.slug}`}
                  className="w-full bg-[#dcb782] text-black hover:bg-white transition-all font-body font-bold text-xs tracking-wider uppercase py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Explore Category</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to={`/request-quote?category=${category.slug}`}
                  className="w-full border border-white/10 hover:border-[#dcb782]/40 text-white hover:bg-white/5 transition-all text-xs font-mono tracking-wider uppercase py-2.5 px-4 rounded-xl text-center"
                >
                  Request Category RFQ
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Reusable Sourcing Workflow */}
        <HowToBuyModule />

        {/* Category Footer CTA */}
        <div className="rounded-3xl bg-gradient-to-tr from-[#121211] to-[#1f1d1a] border border-[#dcb782]/20 p-8 md:p-12 text-center flex flex-col items-center gap-4">
          <span className="text-xs font-mono tracking-widest text-[#dcb782] uppercase font-bold">
            TAILORED PROCUREMENT SOLUTIONS
          </span>
          <h2 className="text-2xl md:text-3xl font-heading text-white font-medium">
            Have a Cross-Category or Custom Specification Requirement?
          </h2>
          <p className="text-sm text-[#dfd1b9]/75 font-light max-w-xl">
            Our trade desk works directly with institutional buyers, private labels, and distributors to evaluate container allocations and custom export documentation.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              to="/request-quote"
              className="bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold text-xs tracking-wider uppercase px-8 py-3.5 rounded-xl hover:from-white hover:to-[#dcb782] transition-all shadow-xl"
            >
              Submit Trade RFQ
            </Link>
            <Link
              to="/quality-compliance"
              className="border border-white/10 hover:border-white text-white text-xs font-body font-bold tracking-wider uppercase px-6 py-3.5 rounded-xl hover:bg-white/5 transition-all"
            >
              Verify Quality & Compliance
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
