import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  X, 
  RotateCcw,
  LayoutGrid,
  List,
  SlidersHorizontal
} from 'lucide-react';
import { 
  UNIFIED_PRODUCT_CATEGORIES, 
  UnifiedProductCategory, 
  ALL_RETAIL_PRODUCTS,
  PackagedProductItem
} from '../../data/unifiedProductsCatalog';
import CategorySelector from './CategorySelector';
import RetailProductCard from './RetailProductCard';
import TrustQualityStrip from './TrustQualityStrip';
import ExportConversionBanner from './ExportConversionBanner';
import { useRetailCart } from '../../context/RetailCartContext';

interface UnifiedProductExplorerProps {
  onOpenAgroEnquiry?: (
    productName: string,
    origin: string,
    form: string,
    inquiryType?: 'quotation' | 'sample' | 'specifications' | 'packaging'
  ) => void;
  onOpenSpecDrawer?: (product: any) => void;
}

type ProductFormFilter = 'all' | 'powder' | 'whole' | 'paste' | 'seasoning' | 'wellness';
type PriceRangeFilter = 'all' | 'under150' | '150-300' | 'above300';
type SortOption = 'popularity' | 'price-asc' | 'price-desc' | 'name-asc' | 'new-arrivals';
type ViewMode = 'grid' | 'list';

export default function UnifiedProductExplorer({
  onOpenAgroEnquiry,
}: UnifiedProductExplorerProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { currency, setCurrency } = useRetailCart();

  // Initialize state from URL query parameters
  const categoryParam = (searchParams.get('category') as UnifiedProductCategory['id']) || 'all';
  const formatParam = (searchParams.get('format') as ProductFormFilter) || 'all';
  const searchParam = searchParams.get('search') || '';
  const sortParam = (searchParams.get('sort') as SortOption) || 'popularity';
  const priceParam = (searchParams.get('price') as PriceRangeFilter) || 'all';
  const inStockParam = searchParams.get('inStock') === 'true';
  const viewParam = (searchParams.get('view') as ViewMode) || 'grid';

  // Category State
  const [selectedCategoryId, setSelectedCategoryId] = useState<UnifiedProductCategory['id']>(categoryParam);

  // Search, Filter, Sort & View States
  const [searchQuery, setSearchQuery] = useState(searchParam);
  const [selectedForm, setSelectedForm] = useState<ProductFormFilter>(formatParam);
  const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRangeFilter>(priceParam);
  const [inStockOnly, setInStockOnly] = useState(inStockParam);
  const [sortBy, setSortBy] = useState<SortOption>(sortParam);
  const [viewMode, setViewMode] = useState<ViewMode>(viewParam);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Synchronize state with URL parameters
  const updateUrlParams = (updates: Record<string, string | null>) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      Object.entries(updates).forEach(([key, value]) => {
        if (!value || value === 'all' || value === '' || value === 'popularity' || value === 'grid' || value === 'false') {
          next.delete(key);
        } else {
          next.set(key, value);
        }
      });
      return next;
    }, { replace: true });
  };

  // Category change handler
  const handleSelectCategory = (catId: UnifiedProductCategory['id']) => {
    setSelectedCategoryId(catId);
    updateUrlParams({ category: catId === 'all' ? null : catId });
  };

  // Search input handler
  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    updateUrlParams({ search: val.trim() ? val.trim() : null });
  };

  // Format pill handler
  const handleFormatChange = (form: ProductFormFilter) => {
    setSelectedForm(form);
    updateUrlParams({ format: form === 'all' ? null : form });
  };

  // Sort handler
  const handleSortChange = (sort: SortOption) => {
    setSortBy(sort);
    updateUrlParams({ sort: sort === 'popularity' ? null : sort });
  };

  // Price handler
  const handlePriceChange = (price: PriceRangeFilter) => {
    setSelectedPriceRange(price);
    updateUrlParams({ price: price === 'all' ? null : price });
  };

  // In stock handler
  const handleInStockChange = (checked: boolean) => {
    setInStockOnly(checked);
    updateUrlParams({ inStock: checked ? 'true' : null });
  };

  // View mode handler
  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
    updateUrlParams({ view: mode === 'grid' ? null : mode });
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedForm('all');
    setSelectedPriceRange('all');
    setInStockOnly(false);
    setSortBy('popularity');
    setSelectedCategoryId('all');
    setSearchParams({}, { replace: true });
  };

  // Active Category Data
  const currentCategory = useMemo(() => {
    return (
      UNIFIED_PRODUCT_CATEGORIES.find((c) => c.id === selectedCategoryId) ||
      UNIFIED_PRODUCT_CATEGORIES[0]
    );
  }, [selectedCategoryId]);

  // Base list of products depending on selected category
  const baseCategoryProducts = useMemo(() => {
    if (selectedCategoryId === 'all') {
      return ALL_RETAIL_PRODUCTS;
    }
    return currentCategory.packagedProducts;
  }, [selectedCategoryId, currentCategory]);

  // Filtered & Sorted Products
  const displayedProducts = useMemo(() => {
    let result = [...baseCategoryProducts];

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.origin.toLowerCase().includes(q) ||
          p.descriptor.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Form/Format filter
    if (selectedForm !== 'all') {
      if (selectedForm === 'wellness') {
        result = result.filter(
          (p) => p.productType === 'capsules' || p.productType === 'personal-care'
        );
      } else {
        result = result.filter((p) => p.productType === selectedForm);
      }
    }

    // Price range filter
    if (selectedPriceRange !== 'all') {
      if (selectedPriceRange === 'under150') {
        result = result.filter((p) => p.priceINR < 150);
      } else if (selectedPriceRange === '150-300') {
        result = result.filter((p) => p.priceINR >= 150 && p.priceINR <= 300);
      } else if (selectedPriceRange === 'above300') {
        result = result.filter((p) => p.priceINR > 300);
      }
    }

    // In Stock Only
    if (inStockOnly) {
      result = result.filter((p) => p.inStock);
    }

    // Sort order
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.priceINR - b.priceINR);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.priceINR - a.priceINR);
    } else if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'new-arrivals') {
      result.reverse();
    }

    return result;
  }, [baseCategoryProducts, searchQuery, selectedForm, selectedPriceRange, inStockOnly, sortBy]);

  // Check if any filter is active
  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedForm !== 'all' ||
    selectedPriceRange !== 'all' ||
    inStockOnly ||
    selectedCategoryId !== 'all';

  return (
    <section
      id="unified-product-explorer"
      className="w-full text-white pt-2 pb-16 relative"
      aria-label="AURA Gourmet Retail Storefront"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 space-y-6">

        {/* =========================================================================
            1. CATEGORY SELECTOR STRIP
            ========================================================================= */}
        <CategorySelector
          selectedCategoryId={selectedCategoryId}
          onSelectCategory={handleSelectCategory}
        />

        {/* =========================================================================
            2. SEARCH AND PRODUCT DISCOVERY TOOLBAR
            ========================================================================= */}
        <div className="pt-2 space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            
            {/* Left: Large Search Input */}
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#77716A]" />
              <input
                id="retail-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search spices by name or origin..."
                className="w-full bg-[#121212] border border-[#292929] focus:border-[#D4AF78] text-[#F2E9D9] placeholder-[#77716A] text-xs sm:text-sm rounded-xl pl-10 pr-9 py-2.5 outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => handleSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#77716A] hover:text-[#F2E9D9] cursor-pointer"
                  title="Clear search"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Right: Currency Selector & Mobile Filter Toggle */}
            <div className="flex flex-wrap items-center gap-2.5">
              
              {/* Currency Selector */}
              <div className="inline-flex items-center gap-1 bg-[#121212] border border-[#292929] p-1 rounded-xl">
                <span className="text-[10px] font-mono text-[#77716A] px-2 uppercase font-medium">Currency</span>
                <button
                  type="button"
                  onClick={() => setCurrency('INR')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    currency === 'INR'
                      ? 'bg-[#D4AF78] text-[#090909]'
                      : 'text-[#A29B91] hover:text-[#F2E9D9]'
                  }`}
                  title="Indian Rupees (₹)"
                >
                  INR (₹)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    currency === 'USD'
                      ? 'bg-[#D4AF78] text-[#090909]'
                      : 'text-[#A29B91] hover:text-[#F2E9D9]'
                  }`}
                  title="US Dollars ($)"
                >
                  USD ($)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('AED')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    currency === 'AED'
                      ? 'bg-[#D4AF78] text-[#090909]'
                      : 'text-[#A29B91] hover:text-[#F2E9D9]'
                  }`}
                  title="UAE Dirhams (د.إ)"
                >
                  AED (د.إ)
                </button>
              </div>

              {/* Mobile Filter Toggle */}
              <button
                type="button"
                onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                className="lg:hidden inline-flex items-center gap-1.5 px-3 py-2 bg-[#121212] border border-[#292929] text-xs font-mono text-[#F2E9D9] rounded-xl cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#D4AF78]" />
                <span>Filters {hasActiveFilters && '•'}</span>
              </button>
            </div>
          </div>

          {/* =========================================================================
              3. PRODUCT FORMAT FILTERS ROW
              ========================================================================= */}
          <div className={`pt-1 ${isMobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              
              {/* Form Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { id: 'all', label: 'All Formats' },
                  { id: 'powder', label: 'Powders' },
                  { id: 'whole', label: 'Whole Spices' },
                  { id: 'seasoning', label: 'Seasonings' },
                  { id: 'paste', label: 'Pastes' },
                  { id: 'wellness', label: 'Wellness & Care' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleFormatChange(tab.id as ProductFormFilter)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                      selectedForm === tab.id
                        ? 'bg-[#D4AF78] text-[#090909] font-bold'
                        : 'bg-[#181818] border border-[#292929] text-[#A29B91] hover:text-[#F2E9D9] hover:border-[#D4AF78]/30'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Price Range Filter & In-stock Checkbox */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#A29B91]">
                  <span>Price:</span>
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => handlePriceChange(e.target.value as PriceRangeFilter)}
                    className="bg-[#121212] border border-[#292929] text-[#F2E9D9] text-xs font-mono py-1 px-2.5 rounded-lg outline-none focus:border-[#D4AF78]/50 cursor-pointer"
                  >
                    <option value="all" className="bg-[#121212]">All Prices</option>
                    <option value="under150" className="bg-[#121212]">Under ₹150</option>
                    <option value="150-300" className="bg-[#121212]">₹150 – ₹300</option>
                    <option value="above300" className="bg-[#121212]">Above ₹300</option>
                  </select>
                </div>

                <label className="flex items-center gap-1.5 text-xs font-mono text-[#A29B91] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => handleInStockChange(e.target.checked)}
                    className="rounded bg-[#121212] border-[#292929] text-[#D4AF78] focus:ring-0 cursor-pointer"
                  />
                  <span>In Stock Only</span>
                </label>

                {/* Reset Filters CTA */}
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#D4AF78] hover:underline cursor-pointer ml-auto md:ml-0"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            4. PRODUCT CATALOGUE SECTION HEADER & VIEW SWITCHER
            ========================================================================= */}
        <div id="product-catalogue" className="pt-6">
          <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-[#292929]">
            <div className="flex items-baseline gap-3">
              <h2 className="text-xl sm:text-2xl font-heading font-normal text-[#F2E9D9]">
                {selectedCategoryId === 'all'
                  ? 'All Gourmet Retail Products'
                  : `${currentCategory.name} Collection`}
              </h2>
              <span className="text-xs font-mono text-[#77716A]">
                Showing {displayedProducts.length} {displayedProducts.length === 1 ? 'item' : 'items'}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Grid / List View Toggle */}
              <div className="inline-flex items-center bg-[#121212] border border-[#292929] rounded-xl p-0.5">
                <button
                  type="button"
                  onClick={() => handleViewModeChange('grid')}
                  className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-[#D4AF78] text-[#090909]'
                      : 'text-[#77716A] hover:text-[#F2E9D9]'
                  }`}
                  aria-label="Grid view"
                  title="Grid view"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleViewModeChange('list')}
                  className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                    viewMode === 'list'
                      ? 'bg-[#D4AF78] text-[#090909]'
                      : 'text-[#77716A] hover:text-[#F2E9D9]'
                  }`}
                  aria-label="List view"
                  title="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {selectedCategoryId !== 'all' && (
                <button
                  type="button"
                  onClick={() => handleSelectCategory('all')}
                  className="text-xs font-mono text-[#D4AF78] hover:underline cursor-pointer hidden sm:inline-block"
                >
                  ← View All
                </button>
              )}
            </div>
          </div>

          {/* =========================================================================
              5. PRODUCT CATALOGUE: 3-COLUMN LUXURY GRID OR LIST VIEW
              ========================================================================= */}
          {displayedProducts.length > 0 ? (
            viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-300">
                {displayedProducts.map((pkgProduct) => (
                  <RetailProductCard
                    key={pkgProduct.id}
                    product={pkgProduct}
                    isListView={false}
                    onOpenEnquiry={(pName) =>
                      onOpenAgroEnquiry?.(
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
              <div className="space-y-4 transition-all duration-300">
                {displayedProducts.map((pkgProduct) => (
                  <RetailProductCard
                    key={pkgProduct.id}
                    product={pkgProduct}
                    isListView={true}
                    onOpenEnquiry={(pName) =>
                      onOpenAgroEnquiry?.(
                        pName,
                        currentCategory.origin.location,
                        'Retail Consumer Packaging',
                        'quotation'
                      )
                    }
                  />
                ))}
              </div>
            )
          ) : (
            <div className="w-full bg-[#121212] border border-[#292929] rounded-2xl p-12 text-center my-8">
              <p className="text-[#F2E9D9] font-heading text-xl mb-2 font-normal">
                No Products Match Your Criteria
              </p>
              <p className="text-xs sm:text-sm font-sans text-[#A29B91] max-w-md mx-auto mb-6 font-light">
                Try adjusting your search query, clearing price or format filters, or switching back to All Products.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-5 py-2.5 rounded-xl bg-[#D4AF78] text-[#090909] font-mono text-xs font-bold hover:bg-[#E5C07B] transition-colors cursor-pointer"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        {/* =========================================================================
            6. TRUST & QUALITY STRIP
            ========================================================================= */}
        <TrustQualityStrip />

        {/* =========================================================================
            7. EXPORT CONVERSION BANNER (B2B WHOLESALE CROSS-LINK)
            ========================================================================= */}
        <ExportConversionBanner
          onOpenQuote={() =>
            onOpenAgroEnquiry?.(
              `${selectedCategoryId === 'all' ? 'Indian Spices' : currentCategory.name} Export Commodity`,
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
