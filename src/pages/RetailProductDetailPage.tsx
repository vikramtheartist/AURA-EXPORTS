import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  Check, 
  ShoppingBag, 
  ArrowRight, 
  Minus, 
  Plus, 
  ChevronDown, 
  HelpCircle,
  FileText,
  Share2,
  Lock,
  ArrowLeft
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/procurement/Breadcrumbs';
import { RETAIL_SPICES_CATALOG, getRetailProductBySlug } from '../data/retailSpicesCatalog';
import { useRetailCart } from '../context/RetailCartContext';

export default function RetailProductDetailPage() {
  const { productSlug } = useParams<{ productSlug: string }>();
  const navigate = useNavigate();
  const { addToCart, buyNow, currency } = useRetailCart();

  const product = getRetailProductBySlug(productSlug || '');

  // Redirect if not found
  useEffect(() => {
    if (!product && productSlug) {
      navigate('/products/agro-products', { replace: true });
    }
  }, [product, productSlug, navigate]);

  // Selected variant state
  const [selectedVariantId, setSelectedVariantId] = useState<string>(() => {
    return product ? product.variants[0].id : '';
  });

  // Quantity state
  const [quantity, setQuantity] = useState(1);

  // Active accordion tabs state
  const [openTabs, setOpenTabs] = useState<Record<string, boolean>>({
    uses: true,
    specs: true,
    shipping: false,
    quality: false,
    faq: false,
  });

  const toggleTab = (tabKey: string) => {
    setOpenTabs((prev) => ({ ...prev, [tabKey]: !prev[tabKey] }));
  };

  // Sticky bottom bar visibility
  const buyButtonRef = useRef<HTMLDivElement>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!buyButtonRef.current) return;
      const rect = buyButtonRef.current.getBoundingClientRect();
      // Show sticky bar when the main buy button scrolls above viewport
      setShowStickyBar(rect.bottom < 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update selected variant when slug changes
  useEffect(() => {
    if (product) {
      setSelectedVariantId(product.variants[0].id);
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) return null;

  const currentVariant = product.variants.find((v) => v.id === selectedVariantId) || product.variants[0];
  const price = currency === 'INR' 
    ? (('priceINR' in currentVariant && (currentVariant as { priceINR?: number }).priceINR) || Math.round(currentVariant.priceUSD * 85))
    : currency === 'USD' 
      ? currentVariant.priceUSD 
      : currentVariant.priceAED;
  const compareAt = currency === 'INR'
    ? (currentVariant.compareAtUSD ? Math.round(currentVariant.compareAtUSD * 85) : undefined)
    : currency === 'USD' 
      ? currentVariant.compareAtUSD 
      : currentVariant.compareAtAED;
  const currencySymbol = currency === 'INR' ? '₹' : currency === 'USD' ? '$' : 'AED ';

  const handleAddToCart = () => {
    addToCart(product, selectedVariantId, quantity);
  };

  const handleBuyNow = () => {
    buyNow(product, selectedVariantId, quantity);
  };

  // Complementary recommendations
  const relatedProducts = RETAIL_SPICES_CATALOG.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="w-full pt-28 pb-24 bg-[#0a0a09] text-white" id="retail-product-pdp">
      <SEOHead 
        title={`${product.name} | Aura Exports Gourmet Spices`}
        description={product.shortDescription}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Semantic Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Agro Products', href: '/products/agro-products' },
            { label: 'Retail Spices', href: '/products/agro-products#retail-spices-powders-collection' },
            { label: product.name, href: `/products/agro-products/retail/${product.slug}` },
          ]}
        />

        {/* Back link */}
        <div className="mb-6">
          <Link
            to="/products/agro-products#retail-spices-powders-collection"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#dcb782] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Pure Spices Collection</span>
          </Link>
        </div>

        {/* =========================================================================
            PRIMARY 2-COLUMN PDP HERO (Krydderverket Signature Layout)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Product Imagery */}
          <div className="lg:col-span-6 space-y-4 lg:sticky lg:top-28">
            {/* Main Stage Image */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-white/10 bg-[#121211] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black/80 backdrop-blur-md text-[#dcb782] border border-[#dcb782]/40 text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-md">
                    {product.badge}
                  </span>
                </div>
              )}

              <div className="absolute top-4 right-4 z-10">
                <span className="bg-emerald-500/20 backdrop-blur-md text-emerald-400 border border-emerald-500/30 text-xs font-mono px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  In Stock • Fresh Batch
                </span>
              </div>

              <img
                src={product.heroImage}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Packaging Guarantee Strip */}
            <div className="bg-[#141412] border border-white/10 rounded-xl p-4 flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-400">Packaging Format:</span>
              <span className="text-[#dcb782] font-semibold">{currentVariant.packageType}</span>
            </div>
          </div>

          {/* Right Column: Buying Box & Product Info */}
          <div className="lg:col-span-6 space-y-7">
            
            {/* Title & Metadata */}
            <div className="space-y-2 border-b border-white/10 pb-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#dcb782] uppercase tracking-[0.2em] font-bold">
                  {product.origin}
                </span>
                <span className="text-neutral-500">•</span>
                <span className="text-xs font-mono text-neutral-400">
                  Harvest: {product.harvestSeason}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white tracking-tight leading-[1.08]">
                {product.name}
              </h1>

              <p className="text-sm md:text-base text-[#dcb782] font-serif italic">
                {product.botanicalName}
              </p>

              {/* Rating stars */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-mono text-white font-bold">
                  {product.rating.score} / 5.0
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  ({product.rating.reviewCount} verified culinary reviews)
                </span>
              </div>
            </div>

            {/* Price Box */}
            <div className="space-y-1.5">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl md:text-4xl font-heading font-bold text-white font-mono">
                  {currencySymbol}{currency === 'USD' ? price.toFixed(2) : Math.round(price).toLocaleString('en-IN')}
                </span>
                {compareAt && (
                  <span className="text-lg font-mono text-neutral-500 line-through">
                    {currencySymbol}{currency === 'USD' ? compareAt.toFixed(2) : Math.round(compareAt).toLocaleString('en-IN')}
                  </span>
                )}
                {compareAt && (
                  <span className="text-xs font-mono bg-emerald-500/15 text-emerald-400 px-2.5 py-1 rounded-md font-bold">
                    Save {currencySymbol}{currency === 'USD' ? (compareAt - price).toFixed(2) : Math.round(compareAt - price).toLocaleString('en-IN')}
                  </span>
                )}
              </div>
              <p className="text-xs text-neutral-400 font-light">
                Taxes included. Express Courier shipping from $6 / 22 AED.{' '}
                <strong className="text-[#E2BC86]">Free shipping on orders over $75 / 275 AED.</strong>
              </p>
            </div>

            {/* Key Active Assay Chip */}
            <div className="bg-[#141412] border border-[#dcb782]/25 rounded-xl p-3.5 flex items-center justify-between">
              <span className="text-xs font-mono text-[#ab8558]">Active Compound Concentration:</span>
              <span className="text-xs font-mono font-bold text-white bg-black/60 px-3 py-1 rounded-lg border border-white/10">
                {product.activeCompound}
              </span>
            </div>

            {/* Packaging / Variant Selection */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-neutral-300 font-semibold uppercase tracking-wider">
                  Select Size & Packaging:
                </span>
                <span className="text-[#dcb782]">
                  {currentVariant.name}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.variants.map((variant) => {
                  const isSelected = variant.id === selectedVariantId;
                  const vPrice = currency === 'INR'
                    ? (('priceINR' in variant && (variant as { priceINR?: number }).priceINR) || Math.round(variant.priceUSD * 85))
                    : currency === 'USD'
                      ? variant.priceUSD
                      : variant.priceAED;

                  return (
                    <button
                      key={variant.id}
                      type="button"
                      onClick={() => setSelectedVariantId(variant.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#dcb782] bg-[#dcb782]/10 shadow-[0_0_20px_rgba(220,183,130,0.15)]'
                          : 'border-white/10 bg-[#141412] hover:border-white/20'
                      }`}
                    >
                      <span className="text-xs font-medium text-white block">
                        {variant.name}
                      </span>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                        <span className="text-[11px] font-mono text-neutral-400">
                          {variant.weightGrams}g Net
                        </span>
                        <span className="text-xs font-mono font-bold text-[#E2BC86]">
                          {currencySymbol}{currency === 'USD' ? vPrice.toFixed(2) : Math.round(vPrice).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Selector & Buy Actions */}
            <div className="space-y-3 pt-2" ref={buyButtonRef}>
              <div className="flex items-center gap-4">
                {/* Stepper */}
                <div className="flex items-center border border-white/20 rounded-xl bg-[#141412] px-2 py-1 text-sm font-mono">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-bold text-white min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 py-4 px-6 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/40 rounded-xl font-body font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:scale-[1.01]"
                >
                  <ShoppingBag className="w-4 h-4 text-[#dcb782]" />
                  <span>Add to Gourmet Cart</span>
                </button>
              </div>

              {/* Instant Buy Now Button */}
              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full py-4 px-6 bg-gradient-to-r from-[#dcb782] to-[#E2BC86] hover:from-[#c9a26d] hover:to-[#d4a86a] text-black font-body font-bold text-xs uppercase tracking-wider rounded-xl shadow-[0_6px_25px_rgba(220,183,130,0.35)] flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
              >
                <Lock className="w-4 h-4" />
                <span>Instant Checkout • {currencySymbol}{currency === 'USD' ? (price * quantity).toFixed(2) : Math.round(price * quantity).toLocaleString('en-IN')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Krydderverket-Style Trust Triad */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-center">
              <div className="bg-[#141412] border border-white/5 rounded-xl p-3 flex flex-col items-center">
                <Sparkles className="w-4 h-4 text-[#dcb782] mb-1" />
                <span className="text-[11px] font-mono text-white font-semibold">100% Naturlig</span>
                <span className="text-[10px] text-neutral-400 font-light">Zero Additives</span>
              </div>
              <div className="bg-[#141412] border border-white/5 rounded-xl p-3 flex flex-col items-center">
                <ShieldCheck className="w-4 h-4 text-[#dcb782] mb-1" />
                <span className="text-[11px] font-mono text-white font-semibold">Airtight Tin</span>
                <span className="text-[10px] text-neutral-400 font-light">Aroma Sealed</span>
              </div>
              <div className="bg-[#141412] border border-white/5 rounded-xl p-3 flex flex-col items-center">
                <Check className="w-4 h-4 text-[#dcb782] mb-1" />
                <span className="text-[11px] font-mono text-white font-semibold">Fornøyd-garanti</span>
                <span className="text-[10px] text-neutral-400 font-light">Money-Back Risk Free</span>
              </div>
            </div>

            {/* Short Narrative & Info Sheet Mention (Matching Krydderverket) */}
            <div className="bg-[#121211] border border-white/10 rounded-xl p-5 space-y-3 text-xs text-neutral-300 font-body leading-relaxed font-light">
              <p>{product.shortDescription}</p>
              <p>{product.story}</p>
              <p className="pt-2 border-t border-white/5 text-[#E2BC86] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#dcb782] shrink-0" />
                <span>
                  Every order includes a <strong>printed culinary & brewing guide card</strong> with chef pairing techniques and spice facts.
                </span>
              </p>
            </div>

          </div>

        </div>

        {/* =========================================================================
            5 DEEP COLLAPSIBLE ACCORDION TABS (Krydderverket Signature Layout)
            ========================================================================= */}
        <div className="max-w-4xl mx-auto mb-24 space-y-4">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-[#dcb782] uppercase tracking-[0.2em] font-bold block mb-1">
              SPECIFICATIONS & DOCUMENTATION
            </span>
            <h2 className="text-2xl md:text-3xl font-heading text-white">
              Comprehensive Product Dossier
            </h2>
          </div>

          {/* TAB 1: BRUK / CULINARY USES */}
          <div className="bg-[#121211] border border-white/10 rounded-2xl overflow-hidden transition-all">
            <button
              type="button"
              onClick={() => toggleTab('uses')}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#dcb782]/10 border border-[#dcb782]/30 flex items-center justify-center text-[#dcb782] font-mono text-xs font-bold">
                  01
                </div>
                <div>
                  <h3 className="font-heading text-base md:text-lg font-medium text-white">
                    Bruk & Kulinarisk Anvendelse (Culinary Uses & Pairings)
                  </h3>
                  <p className="text-xs text-neutral-400 font-light">
                    Recommended dishes, lipid activation, and chef techniques
                  </p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-[#dcb782] transition-transform duration-300 ${openTabs.uses ? 'rotate-180' : ''}`} />
            </button>

            {openTabs.uses && (
              <div className="px-6 pb-6 pt-2 border-t border-white/5 space-y-4 text-xs md:text-sm text-neutral-300 font-body leading-relaxed">
                <p className="font-medium text-white">{product.tabs.culinaryUses.headline}</p>
                <p className="font-light">{product.tabs.culinaryUses.description}</p>
                
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono text-[#dcb782] uppercase tracking-wider font-semibold">
                    Signature Culinary Pairings:
                  </h4>
                  <ul className="space-y-2">
                    {product.tabs.culinaryUses.pairingPoints.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#dcb782] font-bold">✔</span>
                        <span className="font-light">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-black/50 border border-[#dcb782]/30 rounded-xl p-4 text-xs font-mono text-[#E2BC86]">
                  {product.tabs.culinaryUses.chefTip}
                </div>
              </div>
            )}
          </div>

          {/* TAB 2: INNHOLD & SPESIFIKASJONER / SPECS */}
          <div className="bg-[#121211] border border-white/10 rounded-2xl overflow-hidden transition-all">
            <button
              type="button"
              onClick={() => toggleTab('specs')}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#dcb782]/10 border border-[#dcb782]/30 flex items-center justify-center text-[#dcb782] font-mono text-xs font-bold">
                  02
                </div>
                <div>
                  <h3 className="font-heading text-base md:text-lg font-medium text-white">
                    Innhold & Laboratoriespesifikasjoner (Ingredients & Lab Assays)
                  </h3>
                  <p className="text-xs text-neutral-400 font-light">
                    Active chemicals, moisture, mesh size, ash, and allergen certification
                  </p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-[#dcb782] transition-transform duration-300 ${openTabs.specs ? 'rotate-180' : ''}`} />
            </button>

            {openTabs.specs && (
              <div className="px-6 pb-6 pt-2 border-t border-white/5 space-y-3 text-xs font-mono">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-black/40 border border-white/5 p-3 rounded-xl">
                    <span className="text-[#ab8558] block mb-1">Ingredients:</span>
                    <span className="text-white font-sans">{product.tabs.ingredientsAndSpecs.ingredients}</span>
                  </div>
                  <div className="bg-black/40 border border-white/5 p-3 rounded-xl">
                    <span className="text-[#ab8558] block mb-1">Active Constituents:</span>
                    <span className="text-white font-sans">{product.tabs.ingredientsAndSpecs.activeConstituents}</span>
                  </div>
                  <div className="bg-black/40 border border-white/5 p-3 rounded-xl">
                    <span className="text-[#ab8558] block mb-1">Moisture & Ash:</span>
                    <span className="text-white font-sans">{product.tabs.ingredientsAndSpecs.moisture} | {product.tabs.ingredientsAndSpecs.ashContent}</span>
                  </div>
                  <div className="bg-black/40 border border-white/5 p-3 rounded-xl">
                    <span className="text-[#ab8558] block mb-1">Milling Grade:</span>
                    <span className="text-white font-sans">{product.meshSize}</span>
                  </div>
                  <div className="bg-black/40 border border-white/5 p-3 rounded-xl">
                    <span className="text-[#ab8558] block mb-1">Aflatoxin & Safety:</span>
                    <span className="text-white font-sans">{product.tabs.ingredientsAndSpecs.aflatoxins}</span>
                  </div>
                  <div className="bg-black/40 border border-white/5 p-3 rounded-xl">
                    <span className="text-[#ab8558] block mb-1">Allergens & Adulterants:</span>
                    <span className="text-white font-sans">{product.tabs.ingredientsAndSpecs.allergens}</span>
                  </div>
                </div>
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-300 text-[11px]">
                  {product.tabs.ingredientsAndSpecs.fillersAndColors}
                </div>
              </div>
            )}
          </div>

          {/* TAB 3: FRAKT & GARANTIER / SHIPPING & GUARANTEES */}
          <div className="bg-[#121211] border border-white/10 rounded-2xl overflow-hidden transition-all">
            <button
              type="button"
              onClick={() => toggleTab('shipping')}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#dcb782]/10 border border-[#dcb782]/30 flex items-center justify-center text-[#dcb782] font-mono text-xs font-bold">
                  03
                </div>
                <div>
                  <h3 className="font-heading text-base md:text-lg font-medium text-white">
                    Frakt, Levering & Garantier (Shipping & Guarantees)
                  </h3>
                  <p className="text-xs text-neutral-400 font-light">
                    Transit times to UAE, GCC, Europe & North America, zero-risk return policy
                  </p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-[#dcb782] transition-transform duration-300 ${openTabs.shipping ? 'rotate-180' : ''}`} />
            </button>

            {openTabs.shipping && (
              <div className="px-6 pb-6 pt-2 border-t border-white/5 space-y-4 text-xs md:text-sm text-neutral-300 font-body leading-relaxed font-light">
                <p className="text-white font-medium">{product.tabs.shippingAndGuarantees.dispatchTime}</p>
                
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-[#dcb782] uppercase tracking-wider font-semibold">
                    Courier Delivery Options:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {product.tabs.shippingAndGuarantees.shippingMethods.map((m, i) => (
                      <div key={i} className="bg-black/40 border border-white/5 p-3 rounded-xl flex flex-col justify-between">
                        <div>
                          <span className="text-white font-medium block">{m.name}</span>
                          <span className="text-[11px] text-neutral-400 font-mono mt-0.5 block">{m.estDays}</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#E2BC86] mt-2">
                          {currencySymbol}{currency === 'INR' ? Math.round(m.priceUSD * 85).toLocaleString('en-IN') : currency === 'USD' ? m.priceUSD : m.priceAED}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#141412] border border-[#dcb782]/25 p-4 rounded-xl space-y-1">
                  <h4 className="font-heading font-medium text-white text-sm">
                    {product.tabs.shippingAndGuarantees.guaranteeHeadline}
                  </h4>
                  <p className="text-neutral-400 text-xs">
                    {product.tabs.shippingAndGuarantees.guaranteeText}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* TAB 4: KVALITET / QUALITY & TESTING */}
          <div className="bg-[#121211] border border-white/10 rounded-2xl overflow-hidden transition-all">
            <button
              type="button"
              onClick={() => toggleTab('quality')}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#dcb782]/10 border border-[#dcb782]/30 flex items-center justify-center text-[#dcb782] font-mono text-xs font-bold">
                  04
                </div>
                <div>
                  <h3 className="font-heading text-base md:text-lg font-medium text-white">
                    Kvalitet & Renhet (Purity Standards & Cryogenic Milling)
                  </h3>
                  <p className="text-xs text-neutral-400 font-light">
                    Thermal protection, pesticide screens, and tamper-evident metal canisters
                  </p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-[#dcb782] transition-transform duration-300 ${openTabs.quality ? 'rotate-180' : ''}`} />
            </button>

            {openTabs.quality && (
              <div className="px-6 pb-6 pt-2 border-t border-white/5 space-y-4 text-xs md:text-sm text-neutral-300 font-body leading-relaxed font-light">
                <p className="text-white font-medium">{product.tabs.qualityAndPurity.purityHeadline}</p>
                <ul className="space-y-2">
                  {product.tabs.qualityAndPurity.purityPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#dcb782] font-bold">★</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-black/40 border border-white/5 p-4 rounded-xl text-xs font-mono text-neutral-300">
                  {product.tabs.qualityAndPurity.testingDetails}
                </div>
              </div>
            )}
          </div>

          {/* TAB 5: FAQ */}
          <div className="bg-[#121211] border border-white/10 rounded-2xl overflow-hidden transition-all">
            <button
              type="button"
              onClick={() => toggleTab('faq')}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#dcb782]/10 border border-[#dcb782]/30 flex items-center justify-center text-[#dcb782] font-mono text-xs font-bold">
                  05
                </div>
                <div>
                  <h3 className="font-heading text-base md:text-lg font-medium text-white">
                    FAQ & Ofte Stilte Spørsmål (Frequently Asked Questions)
                  </h3>
                  <p className="text-xs text-neutral-400 font-light">
                    Storage advice, freshness retention, and commercial wholesale options
                  </p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-[#dcb782] transition-transform duration-300 ${openTabs.faq ? 'rotate-180' : ''}`} />
            </button>

            {openTabs.faq && (
              <div className="px-6 pb-6 pt-2 border-t border-white/5 space-y-4 text-xs md:text-sm">
                {product.tabs.faq.map((item, i) => (
                  <div key={i} className="bg-black/40 border border-white/5 p-4 rounded-xl space-y-1.5">
                    <h4 className="font-heading font-medium text-white text-sm flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-[#dcb782] shrink-0" />
                      {item.question}
                    </h4>
                    <p className="text-neutral-400 font-light leading-relaxed pl-6">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* =========================================================================
            RELATED / COMPLEMENTARY GOURMET SPICES (Krydderverket Style)
            ========================================================================= */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono text-[#dcb782] uppercase tracking-[0.2em] font-bold block mb-1">
                CURATED PAIRINGS
              </span>
              <h3 className="text-2xl font-heading text-white">
                Frequently Paired Gourmet Spices
              </h3>
            </div>
            <Link
              to="/products/agro-products#retail-spices-powders-collection"
              className="text-xs font-mono text-[#dcb782] hover:underline flex items-center gap-1.5"
            >
              <span>View All 6 Spices</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                className="bg-[#121211] border border-white/10 hover:border-[#dcb782]/40 rounded-2xl overflow-hidden flex flex-col justify-between p-4 transition-all group"
              >
                <Link to={`/products/agro-products/retail/${rel.slug}`} className="block aspect-square rounded-xl overflow-hidden mb-3 bg-[#0a0a09]">
                  <img
                    src={rel.heroImage}
                    alt={rel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div className="space-y-1 mb-3">
                  <span className="text-[10px] font-mono text-[#dcb782] uppercase">{rel.origin}</span>
                  <h4 className="text-sm font-heading font-medium text-white group-hover:text-[#dcb782] transition-colors truncate">
                    <Link to={`/products/agro-products/retail/${rel.slug}`}>{rel.name}</Link>
                  </h4>
                  <p className="text-xs font-mono text-white font-bold">
                    {currencySymbol}{currency === 'INR' ? (('priceINR' in rel.variants[0] && (rel.variants[0] as { priceINR?: number }).priceINR) || Math.round(rel.variants[0].priceUSD * 85)).toLocaleString('en-IN') : currency === 'USD' ? rel.variants[0].priceUSD : rel.variants[0].priceAED}
                  </p>
                </div>
                <Link
                  to={`/products/agro-products/retail/${rel.slug}`}
                  className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/15 rounded-xl text-xs font-mono uppercase tracking-wider text-center block transition-colors"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* =========================================================================
          STICKY BOTTOM PURCHASE BAR (Matching Krydderverket #vis-handlekurv-knapp)
          ========================================================================= */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#121211]/95 backdrop-blur-md border-t border-[#dcb782]/30 py-3 px-6 md:px-12 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom duration-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            
            {/* Left: Product preview */}
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={product.heroImage}
                alt={product.name}
                className="w-12 h-12 rounded-lg object-cover border border-white/15 shrink-0 hidden sm:block"
              />
              <div className="min-w-0">
                <h4 className="text-xs md:text-sm font-heading font-medium text-white truncate">
                  {product.name}
                </h4>
                <p className="text-[11px] font-mono text-[#dcb782] truncate">
                  {currentVariant.name} • {currencySymbol}{currency === 'USD' ? (price * quantity).toFixed(2) : Math.round(price * quantity).toLocaleString('en-IN')}
                </p>
              </div>
            </div>

            {/* Right: Quantity & Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center border border-white/20 rounded-lg bg-black/60 text-xs font-mono hidden md:flex">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-2 py-1.5 text-neutral-400 hover:text-white"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="px-2.5 py-1.5 font-bold text-white">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-2 py-1.5 text-neutral-400 hover:text-white"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="py-2.5 px-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-xl text-xs font-body font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#dcb782]" />
                <span className="hidden sm:inline">Add to Cart</span>
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                className="py-2.5 px-5 bg-gradient-to-r from-[#dcb782] to-[#E2BC86] hover:from-[#c9a26d] hover:to-[#d4a86a] text-black font-body font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <span>Checkout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
