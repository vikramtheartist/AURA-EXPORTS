import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Search, 
  ShoppingBag, 
  Star, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Truck, 
  Eye,
  SlidersHorizontal
} from 'lucide-react';
import { RETAIL_SPICES_CATALOG, RetailSpiceProduct } from '../../data/retailSpicesCatalog';
import { useRetailCart } from '../../context/RetailCartContext';

export default function RetailSpicePowdersSection() {
  const { addToCart, buyNow, currency, setCurrency } = useRetailCart();

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Single Origin' | 'Artisanal Blends'>('All');
  
  // Track selected variant per product { [productId]: variantId }
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    RETAIL_SPICES_CATALOG.forEach((p) => {
      initial[p.id] = p.variants[0].id;
    });
    return initial;
  });

  // Track added animation feedback { [productId]: boolean }
  const [addedAnimation, setAddedAnimation] = useState<Record<string, boolean>>({});

  const filteredProducts = useMemo(() => {
    return RETAIL_SPICES_CATALOG.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery = 
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.botanicalName.toLowerCase().includes(query) ||
        product.subtitle.toLowerCase().includes(query) ||
        product.origin.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const handleVariantChange = (productId: string, variantId: string) => {
    setSelectedVariants((prev) => ({ ...prev, [productId]: variantId }));
  };

  const handleQuickAdd = (product: RetailSpiceProduct) => {
    const variantId = selectedVariants[product.id] || product.variants[0].id;
    addToCart(product, variantId, 1);

    setAddedAnimation((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedAnimation((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  const handleInstantBuy = (product: RetailSpiceProduct) => {
    const variantId = selectedVariants[product.id] || product.variants[0].id;
    buyNow(product, variantId, 1);
  };

  const currencySymbol = currency === 'USD' ? '$' : 'AED ';

  return (
    <section 
      id="retail-spices-powders-collection" 
      className="py-24 bg-[#0a0a09] relative border-t border-[#dcb782]/20 overflow-hidden"
    >
      {/* Background radial gold glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#dcb782]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/30 rounded-full px-4 py-1.5 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#dcb782]" />
            <span className="text-[11px] font-mono text-[#dcb782] tracking-[0.2em] uppercase font-bold">
              CONSUMER PACKAGED & RETAIL PANTRY COLLECTION
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading text-white tracking-tight leading-[1.12]">
            Pure Gourmet Spice Powders.{' '}
            <span className="text-[#dcb782] italic font-normal block mt-1">
              Packed for Worldwide Pantry & Retail.
            </span>
          </h2>

          <p className="text-[#D5C8B7] font-body text-sm md:text-base leading-relaxed font-light">
            Crafted for discerning home chefs, boutique grocery buyers, and luxury pantries. Hand-harvested from India&apos;s heritage micro-estates, slow cryo-milled to preserve volatile essential oils, and sealed in airtight UV-protective matte metal tins.
          </p>
        </div>

        {/* Search & Filter Bar (Inspired by Krydderverket Search Experience) */}
        <div className="bg-[#141412] border border-white/10 rounded-2xl p-4 md:p-5 mb-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search turmeric, pepper, cardamom, chilli..."
                className="w-full bg-black/60 border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#dcb782] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills & Currency Switcher */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-mono text-neutral-400 hidden lg:inline mr-1 flex items-center gap-1">
                <SlidersHorizontal className="w-3 h-3 text-[#dcb782]" />
                Filter:
              </span>
              {(['All', 'Single Origin', 'Artisanal Blends'] as const).map((cat) => {
                const count = cat === 'All' 
                  ? RETAIL_SPICES_CATALOG.length 
                  : RETAIL_SPICES_CATALOG.filter((p) => p.category === cat).length;
                const isActive = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                      isActive 
                        ? 'bg-[#dcb782] text-black font-bold shadow-md shadow-[#dcb782]/20' 
                        : 'bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-[#dcb782]'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}

              {/* Currency Selector */}
              <div className="inline-flex items-center gap-1 bg-black/60 border border-white/15 p-1 rounded-xl ml-auto md:ml-2">
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer ${
                    currency === 'USD'
                      ? 'bg-[#dcb782] text-black shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Show prices in US Dollars"
                >
                  USD ($)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('AED')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer ${
                    currency === 'AED'
                      ? 'bg-[#dcb782] text-black shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Show prices in UAE Dirhams"
                >
                  AED (د.إ)
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-[#121211] border border-white/10 rounded-2xl p-12 text-center max-w-md mx-auto space-y-3">
            <p className="text-white font-heading text-lg">No spice powders matched &quot;{searchQuery}&quot;</p>
            <p className="text-xs text-neutral-400">
              Try searching for &quot;turmeric&quot;, &quot;pepper&quot;, &quot;cardamom&quot;, or reset your filters.
            </p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 px-5 py-2.5 bg-[#dcb782] text-black text-xs font-mono uppercase font-bold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const selectedVarId = selectedVariants[product.id] || product.variants[0].id;
              const currentVariant = product.variants.find((v) => v.id === selectedVarId) || product.variants[0];
              const price = currency === 'USD' ? currentVariant.priceUSD : currentVariant.priceAED;
              const compareAt = currency === 'USD' ? currentVariant.compareAtUSD : currentVariant.compareAtAED;
              const isAdded = !!addedAnimation[product.id];

              return (
                <div
                  key={product.id}
                  className="group bg-[#121211] border border-white/10 hover:border-[#dcb782]/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
                >
                  {/* Top Image Showcase */}
                  <div className="relative aspect-square w-full bg-[#0a0a09] overflow-hidden">
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3.5 left-3.5 z-10">
                        <span className="bg-black/80 backdrop-blur-md text-[#dcb782] border border-[#dcb782]/40 text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Stock Status Badge */}
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <span className="bg-emerald-500/20 backdrop-blur-md text-emerald-400 border border-emerald-500/30 text-[10px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        In Stock
                      </span>
                    </div>

                    {/* Image with link */}
                    <Link 
                      to={`/products/agro-products/retail/${product.slug}`}
                      className="block w-full h-full cursor-pointer"
                    >
                      <img
                        src={product.heroImage}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </Link>

                    {/* Hover Quick View Overlay */}
                    <Link
                      to={`/products/agro-products/retail/${product.slug}`}
                      className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-white bg-black/50"
                    >
                      <Eye className="w-4 h-4 text-[#dcb782]" />
                      <span>View Specs & Full Details</span>
                    </Link>
                  </div>

                  {/* Streamlined Clean Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    
                    {/* Rating & Title */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-amber-400">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="font-semibold text-white ml-0.5">{product.rating.score}</span>
                        <span className="text-neutral-500">({product.rating.reviewCount})</span>
                      </div>

                      <h3 className="text-lg font-heading font-medium text-white group-hover:text-[#dcb782] transition-colors leading-snug">
                        <Link to={`/products/agro-products/retail/${product.slug}`}>
                          {product.name}
                        </Link>
                      </h3>
                    </div>

                    {/* Variant / Pack Size Selector Pills (Compact) */}
                    <div className="flex items-center gap-2">
                      {product.variants.slice(0, 2).map((variant) => (
                        <button
                          key={variant.id}
                          type="button"
                          onClick={() => handleVariantChange(product.id, variant.id)}
                          className={`flex-1 py-1.5 px-2.5 rounded-lg text-[11px] font-mono transition-all text-center truncate cursor-pointer ${
                            variant.id === selectedVarId
                              ? 'bg-[#dcb782]/20 border border-[#dcb782] text-white font-medium'
                              : 'bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                          }`}
                        >
                          {variant.weightGrams}g Tin
                        </button>
                      ))}
                    </div>

                    {/* Price & Primary Purchase Actions */}
                    <div className="pt-3 border-t border-white/10 space-y-3">
                      <div className="flex items-baseline justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-heading font-bold text-white font-mono">
                            {currencySymbol}{price.toFixed(currency === 'USD' ? 2 : 0)}
                          </span>
                          {compareAt && (
                            <span className="text-xs font-mono text-neutral-500 line-through">
                              {currencySymbol}{compareAt.toFixed(currency === 'USD' ? 2 : 0)}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400 uppercase">
                          Tax Included
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => handleQuickAdd(product)}
                          className={`py-3 px-3 rounded-xl text-xs font-body font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            isAdded
                              ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                              : 'bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-white/30'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5 text-[#dcb782]" />
                              <span>Quick Add</span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => handleInstantBuy(product)}
                          className="py-3 px-3 bg-gradient-to-r from-[#dcb782] to-[#E2BC86] hover:from-[#c9a26d] hover:to-[#d4a86a] text-black rounded-xl text-xs font-body font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-all hover:scale-[1.01] cursor-pointer"
                        >
                          <span>Buy Now</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Trust & Guarantee Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#141412] via-[#1c1813] to-[#141412] border border-[#dcb782]/25 rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#dcb782]/10 border border-[#dcb782]/30 flex items-center justify-center text-[#dcb782] shrink-0 mx-auto md:mx-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-heading font-medium text-white uppercase tracking-wider">
                  Express Air Shipping
                </h4>
                <p className="text-[11px] text-neutral-400 mt-0.5 font-light">
                  Free over $75 / 275 AED. 2–3 days to UAE & GCC.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#dcb782]/10 border border-[#dcb782]/30 flex items-center justify-center text-[#dcb782] shrink-0 mx-auto md:mx-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-heading font-medium text-white uppercase tracking-wider">
                  Airtight UV Tins
                </h4>
                <p className="text-[11px] text-neutral-400 mt-0.5 font-light">
                  Double sealed metal canisters protect volatile terpenes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#dcb782]/10 border border-[#dcb782]/30 flex items-center justify-center text-[#dcb782] shrink-0 mx-auto md:mx-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-heading font-medium text-white uppercase tracking-wider">
                  100% Purity Certified
                </h4>
                <p className="text-[11px] text-neutral-400 mt-0.5 font-light">
                  Zero fillers, metanil yellow, or chemical anti-caking agents.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#dcb782]/10 border border-[#dcb782]/30 flex items-center justify-center text-[#dcb782] shrink-0 mx-auto md:mx-0">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-heading font-medium text-white uppercase tracking-wider">
                  Money-Back Guarantee
                </h4>
                <p className="text-[11px] text-neutral-400 mt-0.5 font-light">
                  30-day aroma & taste satisfaction or full refund.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
