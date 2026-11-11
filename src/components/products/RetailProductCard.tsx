import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Check } from 'lucide-react';
import { PackagedProductItem } from '../../data/unifiedProductsCatalog';
import { useRetailCart } from '../../context/RetailCartContext';

interface RetailProductCardProps {
  key?: React.Key;
  product: PackagedProductItem;
  onOpenEnquiry?: (productName: string) => void;
}

export default function RetailProductCard({
  product,
  onOpenEnquiry: _onOpenEnquiry,
}: RetailProductCardProps) {
  const { currency, openCart } = useRetailCart();
  const [isAdded, setIsAdded] = useState(false);

  const getFormattedPrice = () => {
    if (currency === 'USD') {
      return `$ ${product.priceUSD.toFixed(2)}`;
    }
    if (currency === 'AED') {
      return `AED ${product.priceAED.toFixed(0)}`;
    }
    // Default: INR with ₹ symbol
    const inrValue = product.priceINR || Math.round(product.priceUSD * 85);
    return `₹ ${inrValue.toLocaleString('en-IN')}`;
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Trigger visual feedback and open cart drawer
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      openCart();
    }, 500);
  };

  const productUrl = product.productSlug
    ? `/products/agro-products/retail/${product.productSlug}`
    : `/products/agro-products/retail/salem-turmeric-powder`;

  return (
    <div className="group bg-[#131315] border border-white/[0.08] hover:border-[#D4AF37]/45 rounded-[1.75rem] p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.85)] relative h-full">
      
      {/* Top Image Showcase */}
      <div className="relative aspect-[16/11] w-full bg-[#0A0A0B] rounded-2xl overflow-hidden shrink-0">
        {/* In Stock Pill Badge matching Image 1 */}
        {product.inStock && (
          <div className="absolute top-3.5 right-3.5 z-10">
            <span className="bg-[#0e271a]/90 backdrop-blur-md text-[#22c55e] border border-[#22c55e]/30 px-3 py-1 rounded-full text-xs font-mono font-medium flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
              In Stock
            </span>
          </div>
        )}

        <Link to={productUrl} className="block w-full h-full cursor-pointer">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        </Link>
      </div>

      {/* Card Content with Generous Breathing Room */}
      <div className="pt-5 px-1 flex-1 flex flex-col justify-between min-h-[175px]">
        <div>
          {/* Product Name */}
          <h4 className="text-xl sm:text-2xl font-heading font-normal text-[#F5F1E8] group-hover:text-[#D4AF37] transition-colors leading-snug line-clamp-1">
            <Link to={productUrl}>
              {product.name}
            </Link>
          </h4>

          {/* Sizes string */}
          <div className="text-xs sm:text-sm font-mono text-[#A5A19A] tracking-wider mt-2 font-light">
            {product.sizes.join('  ·  ')}
          </div>
        </div>

        {/* Empty space matching Image 1 simplicity & maintaining equal tile height */}
        <div className="flex-1 min-h-[36px]" />

        {/* Bottom Row: Rating | Price + Circular Bag Button */}
        <div className="pt-4 mt-auto">
          <div className="w-full border-t border-white/[0.08] mb-4" />
          
          <div className="flex items-center justify-between gap-2 h-11">
            
            {/* Left: Star Rating */}
            <div className="flex items-center gap-1.5 font-mono text-sm text-neutral-300">
              <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B] shrink-0" />
              <span className="font-bold text-white text-sm sm:text-base">
                {product.rating.score}
              </span>
              <span className="text-neutral-500 text-xs sm:text-sm">
                ({product.rating.reviewCount})
              </span>
            </div>

            {/* Subtle Vertical Divider */}
            <div className="h-4 w-px bg-white/20 mx-2 sm:mx-3" />

            {/* Middle: Price */}
            <div className="font-mono font-bold text-base sm:text-lg text-[#E2BC86] tracking-tight">
              {getFormattedPrice()}
            </div>

            {/* Right: Circular Bag Button */}
            <button
              type="button"
              onClick={handleQuickAdd}
              aria-label={`Add ${product.name} to cart`}
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer ml-auto shrink-0 shadow-sm ${
                isAdded
                  ? 'bg-emerald-500 text-black border border-emerald-400'
                  : 'border border-[#D4AF37]/50 hover:border-[#D4AF37] text-[#E2BC86] hover:bg-[#D4AF37] hover:text-black'
              }`}
            >
              {isAdded ? (
                <Check className="w-4 h-4" />
              ) : (
                <ShoppingBag className="w-4 h-4" />
              )}
            </button>

          </div>
        </div>

      </div>

    </div>
  );
}
