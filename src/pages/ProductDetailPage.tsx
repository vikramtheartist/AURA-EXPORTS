import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight,
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  Package, 
  Globe, 
  Snowflake, 
  Calendar, 
  Thermometer, 
  FileText, 
  HelpCircle,
  Truck
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/procurement/Breadcrumbs';
import HowToBuyModule from '../components/procurement/HowToBuyModule';
import { getProductBySlug, masterCatalogProducts } from '../data/agroCatalog';
import { getTextileProductBySlug, masterTextileProducts } from '../data/textilesCatalog';
import { getFashionProductBySlug, masterFashionProducts } from '../data/fashionCatalog';

export default function ProductDetailPage() {
  const { productSlug } = useParams<{ productSlug: string }>();
  const navigate = useNavigate();

  // Look up product by slug across agro, textile and fashion catalogs
  const allProducts = [...masterCatalogProducts, ...masterTextileProducts, ...masterFashionProducts];
  const product = 
    getFashionProductBySlug(productSlug || '') ||
    getTextileProductBySlug(productSlug || '') || 
    getProductBySlug(productSlug || '') || 
    allProducts[0];

  // Related products in same subcategory or category
  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id && (p.subcategoryId === product.subcategoryId || p.categorySlug === product.categorySlug))
    .slice(0, 3);

  const quoteUrl = `/request-quote?product=${encodeURIComponent(product.id)}&category=${encodeURIComponent(product.categorySlug)}&requirement=${encodeURIComponent(`Quotation request for ${product.name} (${product.subcategory})`)}`;

  return (
    <div className="w-full pt-28 pb-24" id="product-detail-view">
      <SEOHead 
        title={`${product.name} Export from India | Specifications & Sourcing | AURA Global Trade`}
        description={product.description}
        canonical={`https://auraexport.co/products/${product.categorySlug}/${product.slug}`}
      />

      {/* Semantic Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: product.category, href: `/products/${product.categorySlug}` },
          { label: product.name, href: `/products/${product.categorySlug}/${product.slug}` },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Back Link */}
        <Link
          to={`/products/${product.categorySlug}`}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#dcb782] hover:text-white transition-colors uppercase tracking-wider mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to {product.category}</span>
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative w-full">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#dcb782]/20 via-transparent to-transparent rounded-[2.5rem] blur-2xl opacity-60 pointer-events-none" />
            <div className="relative rounded-[2.2rem] overflow-hidden border border-white/10 bg-[#121211] shadow-[0_30px_70px_rgba(0,0,0,0.9)] aspect-[4/3] w-full">
              <img
                src={product.image}
                alt={`AURA Global Trade - ${product.name}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
              
              <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md border border-white/10 rounded-full px-3 py-1">
                <span className="text-[10px] font-mono text-[#dcb782] tracking-wider uppercase font-bold">
                  {product.subcategory}
                </span>
              </div>

              {product.availability === 'available' && (
                <div className="absolute top-4 right-4 bg-emerald-950/80 border border-emerald-500/30 rounded-full px-3 py-1 backdrop-blur-md">
                  <span className="text-[10px] font-mono text-emerald-400 tracking-wider uppercase font-bold">
                    Active Sourcing
                  </span>
                </div>
              )}
            </div>

            {/* Verification Tag */}
            <div className="mt-5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-[#dcb782] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-white block mb-0.5">
                  Specification-Led Procurement
                </span>
                <span className="text-[11px] text-[#dfd1b9]/70 font-light leading-relaxed block">
                  Consignments are verified against buyer-specified technical parameters, pesticide residue clearance, and destination import regulations.
                </span>
              </div>
            </div>
          </div>

          {/* Core Information Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-xs font-mono text-[#ab8558] tracking-widest uppercase font-bold block mb-1">
                {product.category} · {product.subcategory}
              </span>
              <h1 className="text-3xl md:text-5xl font-heading text-white font-normal leading-tight">
                {product.name}
              </h1>
              {product.botanicalOrMaterialName && (
                <span className="text-sm font-mono text-[#dcb782] italic block mt-1">
                  Botanical: {product.botanicalOrMaterialName}
                </span>
              )}
            </div>

            <p className="text-base text-[#D5C8B7] font-body font-light leading-relaxed">
              {product.tagline}
            </p>

            <div className="text-sm text-[#dfd1b9]/80 font-light leading-relaxed p-5 rounded-2xl bg-[#121210] border border-white/5">
              {product.detailedOverview}
            </div>

            {/* Origin & Gateways */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <Globe className="h-4 w-4 text-[#dcb782] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono text-[#ab8558] uppercase font-bold block">
                    SOURCING BASIN / ORIGIN
                  </span>
                  <span className="text-xs font-medium text-white block mt-0.5">
                    {product.origin}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <Truck className="h-4 w-4 text-[#dcb782] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono text-[#ab8558] uppercase font-bold block">
                    EXPORT GATEWAYS
                  </span>
                  <span className="text-xs font-medium text-white block mt-0.5">
                    {product.exportGateways.join(' · ')}
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
              <Link
                to={quoteUrl}
                className="flex-1 bg-[#dcb782] text-black hover:bg-white transition-all font-body font-bold text-xs tracking-wider uppercase py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-xl cursor-pointer"
              >
                <span>Request a Quotation</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                to="/quality-compliance"
                className="flex-1 border border-white/15 text-white hover:border-[#dcb782] hover:bg-white/5 transition-all font-body font-bold text-xs tracking-wider uppercase py-4 px-6 rounded-xl flex items-center justify-center gap-2"
              >
                <span>Verify Quality Standards</span>
              </Link>
            </div>

          </div>
        </div>

        {/* SECTION: AVAILABLE VARIETIES & FORMS */}
        <section className="mb-20">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#ab8558] uppercase font-bold block">
                CATALOGUE STRUCTURE
              </span>
              <h2 className="text-2xl md:text-3xl font-heading text-white font-medium">
                Product Varieties & Formats
              </h2>
            </div>
            <Package className="h-5 w-5 text-[#dcb782]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.formats.map((format, idx) => (
              <div 
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#121211] p-6 flex flex-col justify-between hover:border-[#dcb782]/40 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="h-7 w-7 rounded-lg bg-[#dcb782]/10 border border-[#dcb782]/20 flex items-center justify-center text-[#dcb782] font-mono text-xs font-bold shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">
                      {format}
                    </h3>
                    <span className="text-xs text-[#dfd1b9]/65 font-light">
                      Calibrated for global bulk, food manufacturing or private-label packaging.
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#dcb782]">
                  <span>Specification Customizable</span>
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: TECHNICAL SPECIFICATIONS */}
        <section className="mb-20">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#ab8558] uppercase font-bold block">
                QUALITY BENCHMARKS
              </span>
              <h2 className="text-2xl md:text-3xl font-heading text-white font-medium">
                Technical Specifications & Testing Parameters
              </h2>
            </div>
            <FileText className="h-5 w-5 text-[#dcb782]" />
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#121211] overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 font-mono text-[#dcb782] uppercase tracking-wider text-[11px]">
                    <th className="py-4 px-6 font-semibold">Parameter</th>
                    <th className="py-4 px-6 font-semibold">Specification Requirement</th>
                    <th className="py-4 px-6 font-semibold">Verification State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {Object.entries(product.specifications).map(([key, value], sIdx) => (
                    <tr key={sIdx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-semibold text-white">{key}</td>
                      <td className="py-4 px-6 text-[#dfd1b9]/80 font-light">{value}</td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold bg-[#dcb782]/10 text-[#dcb782] border border-[#dcb782]/20">
                          <CheckCircle2 className="h-3 w-3" />
                          <span>Batch Confirmed</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-white/[0.02] border-t border-white/5 text-[11px] text-[#dfd1b9]/60 font-light flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-[#dcb782] shrink-0" />
              <span>
                Note: Physical and chemical parameters are calibrated against batch-level Certificate of Analysis (CoA) issued by accredited testing laboratories (NABL / SGS / Eurofins on request).
              </span>
            </div>
          </div>
        </section>

        {/* SECTION: FRESH PRODUCE LOGISTICS & COLD-CHAIN MODULE (CONDITIONAL) */}
        {product.freshProduceDetails && (
          <section className="mb-20">
            <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#dcb782]/20">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#dcb782]/10 border border-[#dcb782]/25 rounded-full px-3 py-1 mb-2">
                  <Snowflake className="h-3 w-3 text-[#dcb782]" />
                  <span className="text-[10px] font-mono text-[#dcb782] uppercase font-bold">
                    COLD CHAIN & POST-HARVEST LOGISTICS
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-heading text-white font-medium">
                  Fresh Produce Export Protocols
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-[#141412] border border-white/10 flex flex-col gap-2">
                <Calendar className="h-5 w-5 text-[#dcb782]" />
                <h3 className="text-sm font-semibold text-white">Seasonality & Harvest Cycle</h3>
                <p className="text-xs text-[#dfd1b9]/75 font-light leading-relaxed">
                  {product.freshProduceDetails.seasonality}
                </p>
                <div className="mt-3 pt-3 border-t border-white/5 text-[11px] font-mono text-[#ab8558]">
                  Harvest: {product.freshProduceDetails.harvestCycle}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[#141412] border border-white/10 flex flex-col gap-2">
                <Thermometer className="h-5 w-5 text-[#dcb782]" />
                <h3 className="text-sm font-semibold text-white">Temperature & Humidity Control</h3>
                <p className="text-xs text-[#dfd1b9]/75 font-light leading-relaxed">
                  {product.freshProduceDetails.temperatureRequirements}
                </p>
                <div className="mt-3 pt-3 border-t border-white/5 text-[11px] font-mono text-[#ab8558]">
                  Shelf Life: {product.freshProduceDetails.shelfLife}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[#141412] border border-white/10 flex flex-col gap-2">
                <Truck className="h-5 w-5 text-[#dcb782]" />
                <h3 className="text-sm font-semibold text-white">Reefer Container & Freight</h3>
                <p className="text-xs text-[#dfd1b9]/75 font-light leading-relaxed">
                  {product.freshProduceDetails.coldChainNotes}
                </p>
                <div className="mt-3 pt-3 border-t border-white/5 text-[11px] font-mono text-[#ab8558]">
                  Air Cargo & Sea Reefer Supported
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION: PACKAGING & CONTAINER ALLOCATIONS */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Packaging Options */}
            <div className="p-8 rounded-3xl bg-[#121211] border border-white/10">
              <h3 className="text-xl font-heading text-white font-medium mb-4 flex items-center gap-2">
                <Package className="h-5 w-5 text-[#dcb782]" />
                <span>Export Packaging Options</span>
              </h3>
              <p className="text-xs text-[#dfd1b9]/75 font-light mb-6">
                All packaging formats feature food-grade moisture barriers, tamper-evident seals, and export markings:
              </p>
              <ul className="flex flex-col gap-3 text-xs text-[#dfd1b9]/90 font-light">
                {product.packaging.map((pack, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                    <CheckCircle2 className="h-4 w-4 text-[#dcb782] shrink-0 mt-0.5" />
                    <span>{pack}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications & Industry Scope */}
            <div className="p-8 rounded-3xl bg-[#121211] border border-white/10">
              <h3 className="text-xl font-heading text-white font-medium mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#dcb782]" />
                <span>Target Industry Applications</span>
              </h3>
              <p className="text-xs text-[#dfd1b9]/75 font-light mb-6">
                Structured for commercial procurement across international business sectors:
              </p>
              <ul className="flex flex-col gap-3 text-xs text-[#dfd1b9]/90 font-light">
                {product.primaryApplications.map((app, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2.5 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                    <CheckCircle2 className="h-4 w-4 text-[#dcb782] shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* SECTION: RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <section className="mb-24">
            <div className="flex items-center justify-between pb-4 mb-8 border-b border-white/10">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#ab8558] uppercase font-bold block">
                  EXPLORE ALTERNATIVES
                </span>
                <h2 className="text-2xl md:text-3xl font-heading text-white font-medium">
                  Related Products in {product.category}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  className="rounded-3xl border border-white/10 bg-[#121211] p-5 flex flex-col justify-between hover:border-[#dcb782]/40 transition-colors group"
                >
                  <div>
                    <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-4 border border-white/5">
                      <img
                        src={rel.image}
                        alt={rel.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-[#dcb782] uppercase font-semibold block mb-1">
                      {rel.subcategory}
                    </span>
                    <h3 className="text-lg font-heading text-white font-medium mb-2">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-[#dfd1b9]/70 font-light line-clamp-2">
                      {rel.description}
                    </p>
                  </div>

                  <Link
                    to={`/products/agro-products/${rel.slug}`}
                    className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#dcb782] group-hover:text-white transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Final RFQ CTA Card */}
        <section>
          <div className="rounded-3xl bg-gradient-to-tr from-[#121211] to-[#1d1b18] border border-[#dcb782]/20 p-8 md:p-12 text-center flex flex-col items-center gap-4">
            <span className="text-xs font-mono tracking-widest text-[#dcb782] uppercase font-bold">
              COMMERCIAL INTAKE
            </span>
            <h2 className="text-2xl md:text-3xl font-heading text-white font-medium">
              Ready to Discuss Sourcing Terms for {product.name}?
            </h2>
            <p className="text-sm text-[#dfd1b9]/75 font-light max-w-xl">
              Specify your destination port, required volume, and grade parameters. Our trade officers will prepare a comprehensive proforma quotation.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                to={quoteUrl}
                className="bg-[#dcb782] text-black hover:bg-white transition-all font-body font-bold text-xs tracking-wider uppercase px-8 py-3.5 rounded-xl shadow-lg"
              >
                Request a Quotation for {product.name}
              </Link>
              <Link
                to="/contact"
                className="border border-white/15 hover:border-white text-white text-xs font-body font-bold tracking-wider uppercase px-6 py-3.5 rounded-xl hover:bg-white/5 transition-all"
              >
                Contact Trade Desk
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
