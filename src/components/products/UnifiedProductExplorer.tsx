import React, { useState, useMemo, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, SlidersHorizontal } from 'lucide-react';
import { 
  UNIFIED_PRODUCT_CATEGORIES, 
  UnifiedProductCategory, 
  PackagedProductItem, 
  AgroCommodityItem 
} from '../../data/unifiedProductsCatalog';
import CategorySelector from './CategorySelector';
import OriginShowcase from './OriginShowcase';
import ProductModeSwitcher, { ProductFormatMode } from './ProductModeSwitcher';
import RetailProductCard from './RetailProductCard';
import AgroProductCard from './AgroProductCard';
import TrustQualityStrip from './TrustQualityStrip';
import ExportConversionBanner from './ExportConversionBanner';
import { institutionalAgroProducts, InstitutionalProduct } from '../../data/institutionalAgroCatalog';

interface UnifiedProductExplorerProps {
  onOpenAgroEnquiry: (
    productName: string,
    origin: string,
    form: string,
    inquiryType?: 'quotation' | 'sample' | 'specifications' | 'packaging'
  ) => void;
  onOpenSpecDrawer?: (product: InstitutionalProduct) => void;
}

export default function UnifiedProductExplorer({
  onOpenAgroEnquiry,
  onOpenSpecDrawer,
}: UnifiedProductExplorerProps) {
  // Category State
  const [selectedCategoryId, setSelectedCategoryId] = useState<UnifiedProductCategory['id']>('turmeric');

  // Format Switcher Mode ('packaged' vs 'agro')
  const [formatMode, setFormatMode] = useState<ProductFormatMode>('packaged');

  // Horizontal Carousel scroll ref for product cards
  const productCardsScrollRef = useRef<HTMLDivElement>(null);

  // Active Category Data
  const currentCategory = useMemo(() => {
    return (
      UNIFIED_PRODUCT_CATEGORIES.find((c) => c.id === selectedCategoryId) ||
      UNIFIED_PRODUCT_CATEGORIES[0]
    );
  }, [selectedCategoryId]);

  const handleScrollLeft = () => {
    if (productCardsScrollRef.current) {
      productCardsScrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (productCardsScrollRef.current) {
      productCardsScrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const handleViewSpecs = (commodity: AgroCommodityItem) => {
    if (commodity.institutionalId && onOpenSpecDrawer) {
      const match = institutionalAgroProducts.find((p) => p.id === commodity.institutionalId);
      if (match) {
        onOpenSpecDrawer(match);
        return;
      }
    }

    // Fallback: navigate or scroll to specifications link
    if (commodity.specificationsSlug) {
      if (commodity.specificationsSlug.startsWith('#')) {
        const el = document.querySelector(commodity.specificationsSlug);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = commodity.specificationsSlug;
      }
    }
  };

  return (
    <section
      id="unified-product-explorer"
      className="w-full bg-[#0A0A0B] text-white pt-6 pb-20 relative"
      aria-label="Unified Agricultural Commodities & Gourmet Products Explorer"
    >
      {/* Anchor compatibility IDs for existing links and bookmarks */}
      <div id="retail-spices-powders-collection" className="relative -top-24 pointer-events-none" />
      <div id="explore-agricultural-products" className="relative -top-24 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* =========================================================================
            SECTION C: SECTION HEADING & VISUAL CATEGORY SELECTOR
            ========================================================================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#151517] border border-[#D4AF37]/30 rounded-full px-4 py-1.5 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.2em] uppercase font-bold">
              UNIFIED COMMODITIES & GOURMET EXPLORER
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading text-[#F5F1E8] tracking-tight font-normal">
            Explore Our Origins & Products
          </h2>

          <p className="text-[#A5A19A] font-body text-sm md:text-base font-light max-w-2xl">
            Select a product category to explore its sourcing origins, bulk commodities and finished products.
          </p>
        </div>

        {/* Category Horizontal Selector */}
        <div className="mb-10">
          <CategorySelector
            selectedCategoryId={selectedCategoryId}
            onSelectCategory={(catId) => setSelectedCategoryId(catId)}
          />
        </div>

        {/* =========================================================================
            SECTION D: DYNAMIC AGRICULTURAL ORIGIN SHOWCASE
            ========================================================================= */}
        <div className="mb-10">
          <OriginShowcase
            categoryName={currentCategory.name}
            origin={currentCategory.origin}
            onRequestQuote={() =>
              onOpenAgroEnquiry(
                currentCategory.origin.title,
                currentCategory.origin.location,
                'Bulk Export Specifications',
                'quotation'
              )
            }
            onExploreSpecs={() => {
              if (currentCategory.origin.bulkSpecsLink.startsWith('#')) {
                setFormatMode('agro');
              } else {
                window.location.href = currentCategory.origin.bulkSpecsLink;
              }
            }}
          />
        </div>

        {/* =========================================================================
            SECTION E: PRODUCT FORMAT SWITCHER (Packaged vs Agro)
            ========================================================================= */}
        <div className="mb-8">
          <ProductModeSwitcher
            currentMode={formatMode}
            onModeChange={(mode) => setFormatMode(mode)}
            packagedCount={currentCategory.packagedProducts.length}
            agroCount={currentCategory.agriculturalProducts.length}
          />

          {/* Section Sub-header & Carousel Controls */}
          <div className="flex items-center justify-between mt-6 mb-4">
            <div>
              <h3 className="text-xl md:text-2xl font-heading font-medium text-[#F5F1E8]">
                {formatMode === 'packaged'
                  ? `${currentCategory.name} Finished Products`
                  : `${currentCategory.name} Agricultural Commodities`}
              </h3>
              <p className="text-xs font-mono text-[#A5A19A] mt-0.5">
                {formatMode === 'packaged'
                  ? 'Airtight consumer tins, pouches and value-added retail formulations'
                  : 'Direct estate harvest lots, raw commodities, and custom export grades'}
              </p>
            </div>

            {/* Desktop Carousel Navigation Arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={handleScrollLeft}
                aria-label="Scroll products left"
                className="w-9 h-9 rounded-xl bg-[#151517] hover:bg-[#1F1F24] border border-[#29292D] hover:border-white/20 text-[#A5A19A] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleScrollRight}
                aria-label="Scroll products right"
                className="w-9 h-9 rounded-xl bg-[#151517] hover:bg-[#1F1F24] border border-[#29292D] hover:border-white/20 text-[#A5A19A] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PRODUCTS CONTAINER: Packaged vs Agro Grid / Carousel
            ========================================================================= */}
        <div
          ref={productCardsScrollRef}
          className="w-full flex items-stretch gap-4 md:gap-5 overflow-x-auto pb-4 pt-1 scrollbar-none snap-x"
        >
          {formatMode === 'packaged' ? (
            currentCategory.packagedProducts.map((pkgProduct) => (
              <div
                key={pkgProduct.id}
                className="w-[260px] md:w-[280px] lg:w-[285px] flex-shrink-0 snap-start flex flex-col"
              >
                <RetailProductCard
                  product={pkgProduct}
                  onOpenEnquiry={(pName) =>
                    onOpenAgroEnquiry(
                      pName,
                      currentCategory.origin.location,
                      'Retail Consumer Packaging',
                      'quotation'
                    )
                  }
                />
              </div>
            ))
          ) : (
            currentCategory.agriculturalProducts.map((agroCommodity) => (
              <div
                key={agroCommodity.id}
                className="w-[280px] md:w-[300px] lg:w-[320px] flex-shrink-0 snap-start flex flex-col"
              >
                <AgroProductCard
                  commodity={agroCommodity}
                  onRequestQuote={(name, origin, form) =>
                    onOpenAgroEnquiry(name, origin, form, 'quotation')
                  }
                  onViewSpecs={handleViewSpecs}
                />
              </div>
            ))
          )}
        </div>

        {/* =========================================================================
            SECTION F: TRUST & QUALITY STRIP
            ========================================================================= */}
        <TrustQualityStrip />

        {/* =========================================================================
            SECTION G: EXPORT CONVERSION BANNER
            ========================================================================= */}
        <ExportConversionBanner
          onOpenQuote={() =>
            onOpenAgroEnquiry(
              `${currentCategory.name} Export Commodity`,
              currentCategory.origin.location,
              'Commercial Export Order',
              'quotation'
            )
          }
        />

      </div>
    </section>
  );
}
