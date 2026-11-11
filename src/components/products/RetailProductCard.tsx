import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Check, Eye } from 'lucide-react';
import { PackagedProductItem } from '../../data/unifiedProductsCatalog';
import { useRetailCart } from '../../context/RetailCartContext';

interface RetailProductCardProps {
  product: PackagedProductItem;
  onOpenEnquiry?: (productName: string) => void;
}

export default function RetailProductCard({
  product,
  onOpenEnquiry,
}: RetailProductCardProps) {
  const { currency, openCart } = useRetailCart();
  const [isAdded, setIsAdded] = useState(false);

  const price = currency === 'USD' ? product.priceUSD : product.priceAED;
  const currencySymbol = currency === 'USD' ? '$' : 'AED ';

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Trigger visual feedback and open cart drawer
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      openCart();
    }, 600);
  };

  const productUrl = product.productSlug
    ? `/products/agro-products/retail/${product.productSlug}`
    : `/products/agro-products/retail/salem-turmeric-powder`;

  return (
    <div className="group bg-[#151517] border border-[#29292D] hover:border-[#D4AF37]/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.85)] relative">
      
      {/* Top Image Showcase */}
      <div className="relative aspect-square w-full bg-[#0E0E10] overflow-hidden flex items-center justify-center p-4">
        {/* In Stock Badge */}
        {product.inStock && (
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-emerald-500/15 backdrop-blur-md text-emerald-400 border border-emerald-500/25 text-[9px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
              In Stock
            </span>
          </div>
        )}

        <Link to={productUrl} className="block w-full h-full cursor-pointer flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </Link>

        {/* Hover Quick View Overlay */}
        <Link
          to={productUrl}
          className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-white"
        >
          <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Product Details</span>
        </Link>
      </div>

      {/* Card Content */}
      <div className="p-4 md:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Product Name */}
          <h4 className="text-sm md:text-base font-heading font-medium text-[#F5F1E8] group-hover:text-[#D4AF37] transition-colors leading-snug line-clamp-1">
            <Link to={productUrl}>
              {product.name}
            </Link>
          </h4>

          {/* Sizes string */}
          <div className="text-[11px] font-mono text-[#A5A19A] mt-1 tracking-wide">
            {product.sizes.join(' · ')}
          </div>
        </div>

        {/* Bottom Row: Rating + Price + Quick Add Button */}
        <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-2">
          
          {/* Rating */}
          <div className="flex items-center gap-1 text-[11px] font-mono text-amber-400">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400 shrink-0" />
            <span className="font-semibold text-white">{product.rating.score}</span>
            <span className="text-neutral-500">({product.rating.reviewCount})</span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Price */}
            {price > 0 && (
              <span className="text-xs font-mono font-bold text-[#D4AF37]">
                {currencySymbol}{price.toFixed(currency === 'USD' ? 2 : 0)}
              </span>
            )}

            {/* Quick Add / Purchase Bag Button */}
            <button
              type="button"
              onClick={handleQuickAdd}
              aria-label={`Add ${product.name} to cart`}
              className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                isAdded
                  ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/30'
                  : 'bg-[#D4AF37]/15 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#0A0A0B] border border-[#D4AF37]/30 hover:border-[#D4AF37]'
              }`}
            >
              {isAdded ? (
                <Check className="w-3.5 h-3.5" />
              ) : (
                <ShoppingBag className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
