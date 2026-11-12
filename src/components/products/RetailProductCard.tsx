import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Check, Heart } from 'lucide-react';
import { PackagedProductItem } from '../../data/unifiedProductsCatalog';
import { useRetailCart } from '../../context/RetailCartContext';
import { useWishlist } from '../../context/WishlistContext';
import { currencyService } from '../../services/currencyService';
import { RetailSpiceProduct } from '../../data/retailSpicesCatalog';

interface RetailProductCardProps {
  key?: React.Key;
  product: PackagedProductItem;
  isListView?: boolean;
  onOpenEnquiry?: (productName: string) => void;
}

export default function RetailProductCard({
  product,
  isListView = false,
  onOpenEnquiry: _onOpenEnquiry,
}: RetailProductCardProps) {
  const { currency, openCart, addToCart } = useRetailCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const [isAdded, setIsAdded] = useState(false);

  const wishlisted = isWishlisted(product.id);

  // Ratings
  const ratingScore = product.rating?.score ?? 4.98;
  const reviewCount = product.rating?.reviewCount ?? 184;

  // Formatted price with active currency
  const getFormattedPrice = () => {
    return '₹ Coming Soon';
  };

  // Formatted sizes string
  const formattedSizes =
    product.sizes && product.sizes.length > 0
      ? product.sizes
          .map((s) => s.replace(/(\d+)\s*g/i, '$1 g').replace(/(\d+)\s*caps/i, '$1 caps'))
          .join(' · ')
      : 'Standard Pack';

  // Format descriptor or category
  const formatLabel = product.productType
    ? product.productType === 'powder'
      ? 'Cold-Ground Powder'
      : product.productType === 'whole'
      ? 'Sun-Cured Whole'
      : product.productType === 'paste'
      ? 'Cold-Emulsified Paste'
      : product.productType === 'seasoning'
      ? 'Artisan Seasoning'
      : 'Wellness & Care'
    : 'Single-Origin';

  // Quick Add to Bag handler
  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const cartProductPayload: RetailSpiceProduct = {
      id: product.id,
      slug: product.productSlug || product.id,
      name: product.name,
      botanicalName: '',
      subtitle: product.sizes?.join(' · ') || 'Single-Origin',
      category: 'Single Origin' as const,
      rating: {
        score: ratingScore,
        reviewCount: reviewCount,
      },
      shortDescription: product.descriptor || product.name,
      story: product.description || '',
      heroImage: product.image,
      galleryImages: [product.image],
      basePriceUSD: currencyService.convertFromINR(product.priceINR, 'USD'),
      basePriceAED: currencyService.convertFromINR(product.priceINR, 'AED'),
      activeCompound: '',
      origin: product.origin,
      harvestSeason: '',
      processingMethod: 'Cryogenic Milled / Natural Cure',
      meshSize: '',
      shelfLife: '24 Months',
      variants:
        product.variants && product.variants.length > 0
          ? product.variants.map((v) => ({
              id: v.id,
              name: `${product.name} (${v.weightLabel})`,
              weightGrams: v.weightGrams || 100,
              priceINR: v.priceINR,
              mrpINR: v.mrpINR,
              sku: v.sku,
              priceUSD: currencyService.convertFromINR(v.priceINR, 'USD'),
              priceAED: currencyService.convertFromINR(v.priceINR, 'AED'),
              inStock: v.inStock,
              packageType: 'Airtight Black & Gold Metal Tin' as const,
            }))
          : [
              {
                id: `${product.id}-default`,
                name: `${product.name} (${product.sizes[0] || 'Standard'})`,
                weightGrams: 100,
                priceINR: product.priceINR,
                priceUSD: currencyService.convertFromINR(product.priceINR, 'USD'),
                priceAED: currencyService.convertFromINR(product.priceINR, 'AED'),
                inStock: product.inStock,
                packageType: 'Airtight Black & Gold Metal Tin' as const,
              },
            ],
      tabs: {
        culinaryUses: {
          headline: 'Culinary Excellence',
          description: product.description || '',
          pairingPoints: [],
          chefTip: '',
        },
        ingredientsAndSpecs: {
          ingredients: `100% Pure ${product.name}`,
          netWeight: product.sizes[0] || 'Standard Pack',
          originCountry: 'India',
          activeConstituents: 'Natural volatile spice oils',
          moisture: '< 10%',
          ashContent: '< 6.5%',
          aflatoxins: 'Not Detected (EU/FDA Compliant)',
          allergens: 'None',
          fillersAndColors: 'Zero Fillers, Zero Added Colors',
        },
        shippingAndGuarantees: {
          dispatchTime: 'Dispatched within 24 hours',
          shippingMethods: [
            { name: 'Standard Pan-India', priceUSD: 0, priceAED: 0, estDays: '2-4 Days' },
          ],
          freeShippingThresholdUSD: 75,
          freeShippingThresholdAED: 275,
          guaranteeHeadline: 'Purity & Freshness Guaranteed',
          guaranteeText: 'If you are unsatisfied with the aromatic potency, return within 30 days.',
        },
        qualityAndPurity: {
          purityHeadline: 'Laboratory Verified Purity',
          purityPoints: ['Zero synthetic coloring', 'HPLC tested', 'FSSAI compliant'],
          testingDetails: 'Batch lab tested for micro-contaminants and heavy metals.',
          packagingDescription: 'Airtight metal canister with protective aroma seal.',
        },
        faq: [],
      },
    };

    addToCart(cartProductPayload, cartProductPayload.variants[0].id, 1);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      openCart();
    }, 450);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const productUrl = product.productSlug
    ? `/buy-retail/${product.productSlug}`
    : `/buy-retail`;

  // =========================================================================
  // LIST VIEW VARIANT
  // =========================================================================
  if (isListView) {
    return (
      <div className="group bg-[#121212] hover:bg-[#181818] border border-[#292929] hover:border-[#D4AF78]/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 transition-all duration-300">
        {/* Left: Thumbnail & Details */}
        <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
          <Link
            to={productUrl}
            className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-[#090909] overflow-hidden shrink-0 block"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {product.inStock && (
              <span className="absolute bottom-1.5 left-1.5 w-2 h-2 rounded-full bg-[#22c55e]" />
            )}
          </Link>

          <div className="space-y-1.5 min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#D4AF78] uppercase tracking-wider">
                {product.origin}
              </span>
              <span className="text-[#77716A] text-xs">•</span>
              <span className="text-[10px] font-mono text-[#77716A]">
                {formatLabel}
              </span>
            </div>

            <h4 className="text-lg sm:text-xl font-heading text-[#F2E9D9] group-hover:text-[#D4AF78] transition-colors truncate">
              <Link to={productUrl}>{product.name}</Link>
            </h4>

            <p className="text-xs text-[#A29B91] font-light line-clamp-1">
              {product.descriptor}
            </p>

            <div className="text-[11px] font-mono text-[#77716A]">
              Available sizes: {formattedSizes}
            </div>
          </div>
        </div>

        {/* Right: Price, Wishlist & Add to Cart */}
        <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-[#292929] shrink-0">
          <div className="text-left sm:text-right">
            <span className="text-base sm:text-lg font-heading font-medium text-[#D4AF78]">
              {getFormattedPrice()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleWishlistClick}
              aria-label={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all cursor-pointer ${
                wishlisted
                  ? 'border-[#D4AF78] bg-[#D4AF78]/10 text-[#D4AF78]'
                  : 'border-[#292929] hover:border-[#D4AF78] text-[#77716A] hover:text-[#F2E9D9]'
              }`}
            >
              <Heart className={`w-4 h-4 ${wishlisted ? 'fill-[#D4AF78]' : ''}`} />
            </button>

            <button
              type="button"
              onClick={handleQuickAdd}
              aria-label={`Add ${product.name} to shopping bag`}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isAdded
                  ? 'bg-[#22c55e] text-[#090909]'
                  : 'bg-[#D4AF78] hover:bg-[#E5C07B] text-[#090909]'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // GRID VIEW VARIANT (Default 3-Column Luxury Card)
  // =========================================================================
  return (
    <div className="group bg-[#121212] hover:bg-[#181818] border border-[#292929] hover:border-[#D4AF78]/40 rounded-3xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative h-full">
      {/* Top Image Showcase */}
      <div className="relative aspect-[16/11] w-full bg-[#090909] rounded-2xl overflow-hidden shrink-0">
        {/* Availability Badge */}
        {product.inStock && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-[#0e271a]/95 backdrop-blur-md text-[#22c55e] border border-[#22c55e]/30 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
              In Stock
            </span>
          </div>
        )}

        {/* Wishlist Heart Button */}
        <button
          type="button"
          onClick={handleWishlistClick}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-sm ${
            wishlisted
              ? 'bg-[#181818]/90 border border-[#D4AF78] text-[#D4AF78]'
              : 'bg-[#121212]/70 border border-white/10 text-white/70 hover:text-white hover:border-[#D4AF78]/50 hover:bg-[#181818]'
          }`}
        >
          <Heart
            className={`w-4 h-4 transition-transform active:scale-125 ${
              wishlisted ? 'fill-[#D4AF78] text-[#D4AF78]' : ''
            }`}
          />
        </button>

        <Link to={productUrl} className="block w-full h-full cursor-pointer focus:outline-none">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        </Link>
      </div>

      {/* Card Content */}
      <div className="pt-5 px-1 flex-1 flex flex-col justify-between">
        <div>
          {/* Origin & Format Eyebrow */}
          <div className="flex items-center justify-between text-[11px] font-mono text-[#77716A] mb-1.5">
            <span className="text-[#D4AF78] truncate max-w-[65%]">{product.origin}</span>
            <span>{formatLabel}</span>
          </div>

          {/* Product Name (Editorial Serif) */}
          <h4 className="text-xl sm:text-2xl font-heading font-normal text-[#F2E9D9] group-hover:text-[#D4AF78] transition-colors leading-snug line-clamp-1">
            <Link to={productUrl} className="hover:underline focus:outline-none">
              {product.name}
            </Link>
          </h4>

          {/* Sizes String */}
          <div className="text-xs font-mono text-[#A29B91] tracking-wider mt-1.5 font-light">
            {formattedSizes}
          </div>
        </div>

        {/* Bottom Row: Rating, Price, Add to Bag Button */}
        <div className="pt-4 mt-auto">
          <div className="w-full border-t border-[#292929] mb-4" />

          <div className="flex items-center justify-between gap-2 h-11">
            {/* Left: Star Rating */}
            <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm text-[#A29B91]">
              <Star className="w-3.5 h-3.5 fill-[#D4AF78] text-[#D4AF78] shrink-0" />
              <span className="font-semibold text-[#F2E9D9]">
                {ratingScore}
              </span>
              <span className="text-[#77716A] text-[11px]">
                ({reviewCount})
              </span>
            </div>

            {/* Subtle Divider */}
            <div className="h-4 w-px bg-[#292929] mx-1 sm:mx-2" />

            {/* Middle: Price */}
            <div className="font-heading font-medium text-sm sm:text-base text-[#D4AF78] tracking-tight whitespace-nowrap">
              {getFormattedPrice()}
            </div>

            {/* Right: Circular Gold Bag CTA Button */}
            <button
              type="button"
              onClick={handleQuickAdd}
              aria-label={`Add ${product.name} to shopping bag`}
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 active:scale-95 shrink-0 ml-auto ${
                isAdded
                  ? 'bg-[#22c55e] border-[#22c55e] text-[#090909] shadow-[0_0_15px_rgba(34,197,94,0.35)]'
                  : 'border-[#D4AF78] hover:border-[#D4AF78] bg-transparent hover:bg-[#D4AF78] text-[#D4AF78] hover:text-[#090909]'
              }`}
            >
              {isAdded ? (
                <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              ) : (
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
