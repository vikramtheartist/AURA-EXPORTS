import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
import { UNIFIED_PRODUCT_CATEGORIES, UnifiedProductCategory } from '../../data/unifiedProductsCatalog';

interface CategorySelectorProps {
  selectedCategoryId: string;
  onSelectCategory: (categoryId: UnifiedProductCategory['id']) => void;
}

export default function CategorySelector({
  selectedCategoryId,
  onSelectCategory,
}: CategorySelectorProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Check scroll overflows for prev/next arrow controls
  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = direction === 'left' ? -260 : 260;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(checkScroll, 350);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    const total = UNIFIED_PRODUCT_CATEGORIES.length;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % total;
      onSelectCategory(UNIFIED_PRODUCT_CATEGORIES[nextIndex].id);
      const nextBtn = document.getElementById(`tab-${UNIFIED_PRODUCT_CATEGORIES[nextIndex].id}`);
      nextBtn?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + total) % total;
      onSelectCategory(UNIFIED_PRODUCT_CATEGORIES[prevIndex].id);
      const prevBtn = document.getElementById(`tab-${UNIFIED_PRODUCT_CATEGORIES[prevIndex].id}`);
      prevBtn?.focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelectCategory(UNIFIED_PRODUCT_CATEGORIES[index].id);
    }
  };

  return (
    <div className="w-full relative group/carousel" id="category-navigation">
      {/* Optional Left Scroll Control */}
      {canScrollLeft && (
        <button
          type="button"
          onClick={() => handleScroll('left')}
          className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#121212]/90 border border-[#292929] hover:border-[#D4AF78] text-[#F2E9D9] hover:text-[#D4AF78] flex items-center justify-center transition-all shadow-lg backdrop-blur-sm cursor-pointer"
          aria-label="Scroll categories left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      )}

      {/* Optional Right Scroll Control */}
      {canScrollRight && (
        <button
          type="button"
          onClick={() => handleScroll('right')}
          className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#121212]/90 border border-[#292929] hover:border-[#D4AF78] text-[#F2E9D9] hover:text-[#D4AF78] flex items-center justify-center transition-all shadow-lg backdrop-blur-sm cursor-pointer"
          aria-label="Scroll categories right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      )}

      {/* 7 Category Tiles Container */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        role="tablist"
        aria-label="Spice Categories Navigation"
        className="grid grid-flow-col auto-cols-[minmax(130px,1fr)] lg:grid-flow-row lg:grid-cols-7 gap-2.5 sm:gap-3 overflow-x-auto lg:overflow-visible pb-2 pt-1 scrollbar-none snap-x focus:outline-none"
      >
        {UNIFIED_PRODUCT_CATEGORIES.map((category, index) => {
          const isSelected = selectedCategoryId === category.id;
          const isAllProducts = category.id === 'all';
          const itemCount = category.packagedProducts.length;

          return (
            <button
              key={category.id}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${category.id}`}
              id={`tab-${category.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => onSelectCategory(category.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              type="button"
              className={`group relative flex flex-col items-center justify-between rounded-2xl p-2.5 sm:p-3 h-[112px] sm:h-[118px] transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF78] select-none text-left snap-start ${
                isSelected
                  ? 'bg-[#181818] border border-[#D4AF78] shadow-[0_0_24px_rgba(212,175,120,0.18)] scale-[1.01]'
                  : 'bg-[#121212] border border-[#292929] hover:border-[#D4AF78]/40 hover:bg-[#181818]'
              }`}
            >
              {/* Subtle Warm Amber Gradient Sheen on Selected State */}
              {isSelected && (
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF78]/10 via-transparent to-transparent pointer-events-none rounded-2xl" />
              )}

              {/* Top: Thumbnail Image or Icon */}
              <div className="w-full flex-1 flex items-center justify-center relative overflow-hidden pt-1">
                {isAllProducts ? (
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-[#D4AF78]/20 text-[#D4AF78] border border-[#D4AF78]/50'
                        : 'bg-white/[0.04] text-[#A29B91] group-hover:text-[#F2E9D9] border border-white/[0.06]'
                    }`}
                  >
                    <LayoutGrid className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-105" />
                  </div>
                ) : (
                  <div className="relative w-full h-11 sm:h-12 flex items-center justify-center">
                    <img
                      src={category.thumbnail}
                      alt={category.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>

              {/* Bottom: Category Name & Count */}
              <div className="w-full text-center pb-0.5 relative z-10">
                <span
                  className={`block text-xs sm:text-sm font-heading tracking-wide transition-colors truncate ${
                    isSelected
                      ? 'text-[#F2E9D9] font-medium'
                      : 'text-[#A29B91] group-hover:text-[#F2E9D9]'
                  }`}
                >
                  {category.name}
                </span>

                <span
                  className={`block text-[10px] sm:text-[11px] font-mono tracking-wider mt-0.5 transition-colors ${
                    isSelected
                      ? 'text-[#D4AF78] font-medium'
                      : 'text-[#77716A] group-hover:text-[#A29B91]'
                  }`}
                >
                  {isAllProducts ? 'View All →' : `${itemCount} items`}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
