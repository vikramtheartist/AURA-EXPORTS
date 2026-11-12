import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShoppingBag, 
  ArrowLeft,
  FileText
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import UnifiedProductExplorer from '../components/products/UnifiedProductExplorer';
import TechnicalSpecDrawer from '../components/agro/TechnicalSpecDrawer';
import AgroEnquiryModal from '../components/agro/AgroEnquiryModal';
import { InstitutionalProduct } from '../data/institutionalAgroCatalog';
import { useRetailCart } from '../context/RetailCartContext';
import heroTurmericCompositionImg from '../assets/images/retail/hero_turmeric_composition.jpg';

export default function BuyRetailPage() {
  const { openCart, itemCount } = useRetailCart();

  // Specification Drawer State (if customer explores agricultural commodity specifications)
  const [selectedProductForDrawer, setSelectedProductForDrawer] = useState<InstitutionalProduct | null>(null);

  // Agro Enquiry Modal State (for wholesale inquiries from the explorer)
  const [isAgroModalOpen, setIsAgroModalOpen] = useState(false);
  const [agroModalConfig, setAgroModalConfig] = useState<{
    product: string;
    origin: string;
    form: string;
    inquiryType: 'quotation' | 'sample' | 'specifications' | 'packaging';
  }>({
    product: 'Indian Spices Sourcing',
    origin: 'India',
    form: 'Standard Export Grade',
    inquiryType: 'quotation',
  });

  const handleOpenAgroEnquiry = (
    productName: string = 'Retail & Gourmet Sourcing',
    origin: string = 'India',
    form: string = 'Retail Consumer Packaging',
    inquiryType: 'quotation' | 'sample' | 'specifications' | 'packaging' = 'quotation'
  ) => {
    setAgroModalConfig({
      product: productName,
      origin,
      form,
      inquiryType,
    });
    setIsAgroModalOpen(true);
  };

  const handleScrollToCatalogue = () => {
    const el = document.getElementById('category-navigation') || document.getElementById('unified-product-explorer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEOHead
        title="Buy Retail Gourmet Spices Online | Aura Exports Luxury Storefront"
        description="Shop pure single-origin Indian spices online. Direct Salem turmeric powder, Alleppey green cardamom, Guntur chillies, and gourmet tins. Pan-India and global doorstep delivery."
        canonical="https://auraexport.co/buy-retail"
        ogType="website"
      />

      <main className="w-full min-h-screen bg-[#090909] text-[#F2E9D9] pt-28 sm:pt-32 pb-20 selection:bg-[#D4AF78] selection:text-[#090909] overflow-hidden">
        
        {/* Subtle Ambient Background Warmth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[520px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF78]/8 via-[#D4AF78]/2 to-transparent pointer-events-none" />

        {/* =========================================================================
            HEADER BREADCRUMB & EDITORIAL HERO (SPLIT LAYOUT 46% / 54%)
            ========================================================================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10 mb-8 sm:mb-12">
          
          {/* Breadcrumb Navigation: ← AURA EXPORTS / BUY RETAIL */}
          <nav aria-label="Breadcrumbs" className="mb-6">
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-[#A29B91]">
              <Link 
                to="/" 
                className="flex items-center gap-1.5 hover:text-[#F2E9D9] transition-colors"
              >
                <span>← AURA EXPORTS</span>
              </Link>
              <span className="text-[#77716A]">/</span>
              <span className="text-[#F2E9D9] font-semibold">BUY RETAIL</span>
            </div>
          </nav>

          {/* Split Hero Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-8 items-center min-h-[400px] lg:min-h-[430px]">
            
            {/* Left Column (46% width / 4.6 cols of 10) */}
            <div className="lg:col-span-5 xl:col-span-5 space-y-6">
              
              {/* Eyebrow with Champagne Line Accent */}
              <div className="inline-flex items-center gap-3">
                <span className="text-[11px] font-mono tracking-[0.22em] uppercase text-[#D4AF78] font-bold">
                  PURE & ETHICAL SOURCES
                </span>
                <span className="w-12 h-px bg-[#D4AF78]/70 inline-block align-middle" />
              </div>

              {/* Editorial Headline */}
              <div className="space-y-1">
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading text-[#F2E9D9] font-normal leading-[1.08] tracking-tight">
                  Gourmet Retail
                  <span className="block italic font-normal text-[#D4AF78]">
                    Collections
                  </span>
                </h1>
              </div>

              {/* Supporting Copy (Max 2 lines at desktop) */}
              <p className="text-sm sm:text-base text-[#A29B91] font-light leading-relaxed max-w-xl">
                Single-origin spices, cold-ground powders, and artisan seasonings from India's finest spice estates.
              </p>

              {/* Primary CTA */}
              <div className="flex flex-wrap items-center gap-5 pt-3">
                <button
                  type="button"
                  onClick={handleScrollToCatalogue}
                  className="px-7 py-3 rounded-full bg-[#D4AF78] hover:bg-[#E5C07B] text-[#090909] font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_4px_20px_rgba(212,175,120,0.25)] hover:scale-[1.02] cursor-pointer"
                >
                  <span>Shop All Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {itemCount > 0 && (
                  <button
                    type="button"
                    onClick={openCart}
                    className="ml-auto inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#181818] border border-[#D4AF78]/40 text-[#D4AF78] text-xs font-mono font-bold cursor-pointer hover:bg-[#D4AF78] hover:text-[#090909] transition-all"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Bag ({itemCount})</span>
                  </button>
                )}
              </div>

            </div>

            {/* Right Column Visual (54% width / 5 cols of 10) */}
            <div className="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center lg:justify-end">
              
              {/* Product Packaging Showcase Visual matching Image 2 */}
              <div className="relative w-full max-w-[580px] aspect-[16/10] overflow-hidden">
                <img
                  src={heroTurmericCompositionImg}
                  alt="AURA Pure Salem Turmeric Powder Packaging - Airtight Matte Black Tin with Gold Lid on Stone Pedestal"
                  className="w-full h-full object-cover object-center scale-[1.02] hover:scale-105 transition-transform duration-1000 ease-out"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Seamless edge blend into #090909 */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#090909] via-[#090909]/60 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#090909] to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#090909] to-transparent pointer-events-none" />
              </div>

            </div>

          </div>

        </div>

        {/* =========================================================================
            PRIMARY UI FLOW: UNIFIED PRODUCT EXPLORER
            (Category Carousel → Search & Discovery → Formats → 3-Column Catalogue)
            ========================================================================= */}
        <UnifiedProductExplorer
          onOpenAgroEnquiry={handleOpenAgroEnquiry}
          onOpenSpecDrawer={(product) => setSelectedProductForDrawer(product)}
        />

        {/* =========================================================================
            B2B WHOLESALE CROSS-LINK BANNER
            ========================================================================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 my-12">
          <div className="bg-[#121212] border border-[#292929] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#D4AF78]/10 border border-[#D4AF78]/25 rounded-full px-3.5 py-1">
                <span className="text-[10px] font-mono text-[#D4AF78] tracking-wider uppercase font-bold">
                  LOOKING FOR WHOLESALE / BULK EXPORT?
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-heading text-[#F2E9D9] font-normal">
                B2B Container-Load Commodities & Custom Export Grades
              </h3>
              <p className="text-sm text-[#A29B91] font-light leading-relaxed">
                If your organisation requires 20ft / 40ft FCL container-load agricultural commodity procurement, 
                private label packaging, or certificate of analysis lab testing, visit our institutional commodity desk.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                to="/products/agro-products"
                className="bg-[#D4AF78] hover:bg-[#E5C07B] text-[#090909] font-bold text-xs font-mono uppercase px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              >
                <span>Institutional Agro Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/request-quote"
                className="border border-[#292929] hover:border-[#D4AF78]/50 text-[#F2E9D9] font-bold text-xs font-mono uppercase px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#181818] transition-all cursor-pointer"
              >
                <span>Request B2B RFQ</span>
                <FileText className="w-4 h-4 text-[#D4AF78]" />
              </Link>
            </div>
          </div>
        </div>

      </main>

      {/* Specification Drawer */}
      {selectedProductForDrawer && (
        <TechnicalSpecDrawer
          product={selectedProductForDrawer}
          isOpen={!!selectedProductForDrawer}
          onClose={() => setSelectedProductForDrawer(null)}
          onRequestQuotation={(product, notes) => {
            const formMatch = notes?.match(/Form:\s*([^)]+)/);
            handleOpenAgroEnquiry(
              product.name,
              product.origin.displayOrigin,
              formMatch ? formMatch[1].trim() : 'Standard Export Grade',
              'quotation'
            );
          }}
          onRequestSample={(product, notes) => {
            const formMatch = notes?.match(/Form:\s*([^)]+)/);
            handleOpenAgroEnquiry(
              product.name,
              product.origin.displayOrigin,
              formMatch ? formMatch[1].trim() : 'Standard Export Grade',
              'sample'
            );
          }}
        />
      )}

      {/* Agro Enquiry Modal */}
      {isAgroModalOpen && (
        <AgroEnquiryModal
          isOpen={isAgroModalOpen}
          onClose={() => setIsAgroModalOpen(false)}
          initialProduct={agroModalConfig.product}
          initialOrigin={agroModalConfig.origin}
          initialForm={agroModalConfig.form}
          initialInquiryType={agroModalConfig.inquiryType}
        />
      )}
    </>
  );
}
