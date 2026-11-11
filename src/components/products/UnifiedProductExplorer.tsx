import React, { useState, useMemo } from 'react';
import { Sparkles } from 'lucide-react';
import { 
  UNIFIED_PRODUCT_CATEGORIES, 
  UnifiedProductCategory, 
  AgroCommodityItem 
} from '../../data/unifiedProductsCatalog';
import CategorySelector from './CategorySelector';
import ProductModeSwitcher, { ProductFormatMode } from './ProductModeSwitcher';
import RetailProductCard from './RetailProductCard';
import AgroProductCard from './AgroProductCard';
import TrustQualityStrip from './TrustQualityStrip';
import ExportConversionBanner from './ExportConversionBanner';
import { institutionalAgroProducts, InstitutionalProduct } from '../../data/institutionalAgroCatalog';
import { useRetailCart } from '../../context/RetailCartContext';

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

  const { currency, setCurrency } = useRetailCart();

  // Active Category Data
  const currentCategory = useMemo(() => {
    return (
      UNIFIED_PRODUCT_CATEGORIES.find((c) => c.id === selectedCategoryId) ||
      UNIFIED_PRODUCT_CATEGORIES[0]
    );
  }, [selectedCategoryId]);

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
        <div className="mb-8">
          <CategorySelector
            selectedCategoryId={selectedCategoryId}
            onSelectCategory={(catId) => setSelectedCategoryId(catId)}
          />
        </div>

        {/* =========================================================================
            SECTION E: PRODUCT FORMAT SWITCHER (Packaged vs Agro)
            ========================================================================= */}
        <div className="mb-6">
          <ProductModeSwitcher
            currentMode={formatMode}
            onModeChange={(mode) => setFormatMode(mode)}
            packagedCount={currentCategory.packagedProducts.length}
            agroCount={currentCategory.agriculturalProducts.length}
          />

          {/* Section Sub-header & Currency Switcher Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8 mb-6 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-xl md:text-2xl font-heading font-medium text-[#F5F1E8]">
                {formatMode === 'packaged'
                  ? `${currentCategory.name} Finished Products`
                  : `${currentCategory.name} Agricultural Commodities`}
              </h3>
              <p className="text-xs font-mono text-[#A5A19A] mt-1">
                {formatMode === 'packaged'
                  ? 'Airtight consumer tins, pouches and value-added retail formulations'
                  : 'Direct estate harvest lots, raw commodities, and custom export grades'}
              </p>
            </div>

            {/* Currency Selector (INR ₹ / USD $ / AED د.إ) */}
            {formatMode === 'packaged' && (
              <div className="inline-flex items-center gap-1 bg-[#141416] border border-[#29292D] p-1 rounded-xl self-start sm:self-auto shadow-sm">
                <span className="text-[10px] font-mono text-neutral-400 px-2 uppercase font-medium">Currency:</span>
                <button
                  type="button"
                  onClick={() => setCurrency('INR')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    currency === 'INR'
                      ? 'bg-[#D4AF37] text-black shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Display prices in Indian Rupees (₹)"
                >
                  INR (₹)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    currency === 'USD'
                      ? 'bg-[#D4AF37] text-black shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Display prices in US Dollars ($)"
                >
                  USD ($)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('AED')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    currency === 'AED'
                      ? 'bg-[#D4AF37] text-black shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Display prices in UAE Dirhams (د.إ)"
                >
                  AED (د.إ)
                </button>
              </div>
            )}
          </div>
        </div>

        {/* =========================================================================
            VERTICAL MULTI-COLUMN PRODUCT LISTING GRID
            Cards wrap into the next row vertically instead of hiding in a horizontal scroll
            ========================================================================= */}
        <div className="w-full">
          {formatMode === 'packaged' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {currentCategory.packagedProducts.map((pkgProduct) => (
                <RetailProductCard
                  key={pkgProduct.id}
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
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentCategory.agriculturalProducts.map((agroCommodity) => (
                <AgroProductCard
                  key={agroCommodity.id}
                  commodity={agroCommodity}
                  onRequestQuote={(name, origin, form) =>
                    onOpenAgroEnquiry(name, origin, form, 'quotation')
                  }
                  onViewSpecs={handleViewSpecs}
                />
              ))}
            </div>
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
