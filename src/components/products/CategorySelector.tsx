import React, { useRef } from 'react';
import { LayoutGrid } from 'lucide-react';
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

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    categoryId: UnifiedProductCategory['id']
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelectCategory(categoryId);
    }
  };

  return (
    <div className="w-full">
      {/* Category selector strip */}
      <div
        ref={scrollContainerRef}
        role="tablist"
        aria-label="Spice categories and products explorer"
        className="flex items-center gap-3.5 md:gap-4 overflow-x-auto pb-4 pt-2 scrollbar-none snap-x focus:outline-none"
      >
        {UNIFIED_PRODUCT_CATEGORIES.map((category) => {
          const isSelected = selectedCategoryId === category.id;
          const isAllProducts = category.id === 'all';

          return (
            <button
              key={category.id}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${category.id}`}
              id={`tab-${category.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => onSelectCategory(category.id)}
              onKeyDown={(e) => handleKeyDown(e, category.id)}
              type="button"
              className={`group flex-shrink-0 snap-start flex flex-col items-center justify-between rounded-2xl transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] relative overflow-hidden select-none ${
                isAllProducts
                  ? 'w-28 md:w-32 h-28 md:h-32'
                  : 'w-28 md:w-32 h-28 md:h-32'
              } ${
                isSelected
                  ? 'bg-[#18181B] border-2 border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.28)] scale-[1.02]'
                  : 'bg-[#131315] border border-white/10 hover:border-[#D4AF37]/40 hover:bg-[#18181A]'
              }`}
            >
              {/* Subtle top ambient indicator for selected */}
              {isSelected && (
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              )}

              {/* Visual Thumbnail Area */}
              <div className="w-full flex-1 flex items-center justify-center p-2.5 pt-3 overflow-hidden">
                {isAllProducts ? (
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/40 shadow-inner'
                        : 'bg-white/5 text-neutral-400 group-hover:text-white border border-white/5'
                    }`}
                  >
                    <LayoutGrid className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>
                ) : (
                  <div className="relative w-16 h-16 md:w-18 md:h-18 rounded-xl overflow-hidden flex items-center justify-center">
                    <img
                      src={category.thumbnail}
                      alt={category.name}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                )}
              </div>

              {/* Category Name Label */}
              <div className="w-full pb-2.5 px-2 text-center">
                <span
                  className={`text-xs md:text-sm font-heading font-medium tracking-wide transition-colors line-clamp-1 ${
                    isSelected
                      ? 'text-[#F5F1E8] font-semibold'
                      : 'text-[#A5A19A] group-hover:text-white'
                  }`}
                >
                  {category.name}
                </span>
                {isAllProducts && (
                  <span className="text-[10px] font-mono text-[#D4AF37] tracking-wider block -mt-0.5">
                    View All →
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
