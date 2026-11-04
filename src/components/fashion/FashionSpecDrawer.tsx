import React, { useState, useEffect } from 'react';
import { 
  X, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Package, 
  Layers, 
  Sparkles, 
  ArrowUpRight,
  Gem,
  Crown
} from 'lucide-react';
import { FashionProductSpec } from '../../data/institutionalFashionCatalog';

interface FashionSpecDrawerProps {
  product: FashionProductSpec | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuotation: (product: FashionProductSpec, mode?: 'quotation' | 'sample') => void;
}

export default function FashionSpecDrawer({
  product,
  isOpen,
  onClose,
  onRequestQuotation,
}: FashionSpecDrawerProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'materials' | 'collection' | 'packaging' | 'compliance'>('overview');

  // Prevent background body scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Keyboard navigation: Escape key closes drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const tabs = [
    { id: 'overview', label: '1. Collection Overview & Craft' },
    { id: 'materials', label: '2. Materials, Plating & Stones' },
    { id: 'collection', label: '3. Design Range & Variants' },
    { id: 'packaging', label: '4. Packaging & Orders' },
    { id: 'compliance', label: '5. Trade & Export' },
  ] as const;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <aside 
        role="dialog"
        aria-modal="true"
        aria-label={`${product.name} Technical Specifications`}
        className="absolute inset-y-0 right-0 max-w-2xl w-full bg-[#111113] border-l border-[#252527] text-white shadow-[0_0_80px_rgba(0,0,0,0.9)] flex flex-col z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* =========================================================================
            CLEAN STICKY DRAWER HEADER
            ========================================================================= */}
        <div className="p-6 md:p-7 border-b border-[#252527] bg-[#111113]/95 backdrop-blur-md sticky top-0 z-20 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#E2BC86] uppercase font-bold">
                  {product.category}
                </span>
                <span className="text-[#252527]">·</span>
                <span className="text-[9px] font-mono bg-white/5 text-[#A5A19A] px-2 py-0.5 rounded border border-white/5">
                  Artisanal Craft
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading text-[#F5F2EC] font-medium leading-tight">
                {product.name}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#A5A19A] mt-1.5">
                <div className="flex items-center gap-1.5 text-[#E2BC86]">
                  <MapPin className="h-3.5 w-3.5 text-[#E2BC86]" />
                  <span>{product.origin.displayOrigin}</span>
                </div>
                <span className="text-[#252527]">·</span>
                <span>{product.baseMetal}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close specification drawer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#A5A19A] hover:text-white transition-colors cursor-pointer shrink-0"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* 5-Tab Navigation Bar */}
          <div className="flex items-center gap-1 mt-5 border-b border-[#252527] -mb-px overflow-x-auto scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2.5 px-3 text-[11px] font-mono tracking-wider uppercase whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-[#E2BC86] text-[#E2BC86] font-bold'
                    : 'border-transparent text-[#A5A19A] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================================
            SCROLLABLE DRAWER CONTENT AREA
            ========================================================================= */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-grow">
          {/* TAB 01: Collection Overview & Craftsmanship */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Prominent Product Image */}
              <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-black border border-white/10 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-[10px] font-mono text-[#E2BC86] uppercase tracking-wider font-semibold">
                    {product.craftTechniques}
                  </span>
                </div>
              </div>

              {/* Overview Narrative */}
              <div className="p-5 rounded-2xl bg-[#141416] border border-[#252527] space-y-2">
                <span className="text-[10px] font-mono text-[#E2BC86] uppercase tracking-wider block font-bold">
                  Collection Overview
                </span>
                <p className="text-xs text-[#F5F2EC]/90 leading-relaxed font-light">
                  {product.cardDescription}
                </p>
                {product.overviewParagraphs && product.overviewParagraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-xs text-[#A5A19A] leading-relaxed pt-1">
                    {para}
                  </p>
                ))}
              </div>

              {/* Craft Heritage & Lineage */}
              <div className="p-5 rounded-2xl bg-[#141416] border border-[#252527] space-y-2">
                <span className="text-[10px] font-mono text-[#E2BC86] uppercase tracking-wider block font-bold">
                  Artisanal Craft Techniques
                </span>
                <p className="text-xs text-[#A5A19A] leading-relaxed">
                  {product.craftTechniques}
                </p>
              </div>

              {/* Quick Commercial Specs */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono bg-[#141416] border border-[#252527] rounded-2xl p-4">
                <div>
                  <span className="text-[#77736C] block">Indicative MOQ:</span>
                  <span className="text-[#F5F2EC] font-semibold">{product.moq}</span>
                </div>
                <div>
                  <span className="text-[#77736C] block">Production Lead Time:</span>
                  <span className="text-[#E2BC86]">{product.leadTime}</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 02: Materials, Plating & Stones (Grouped Information) */}
          {activeTab === 'materials' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Group 1: Base Materials */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#E2BC86] font-bold mb-3 flex items-center gap-2">
                  <Crown className="h-3.5 w-3.5" />
                  <span>Base Metallurgy</span>
                </h4>
                <div className="p-4 rounded-xl bg-[#141416] border border-[#252527] space-y-1.5 text-xs">
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span className="text-[#A5A19A]">Alloy Composition:</span>
                    <span className="text-[#F5F2EC] font-medium text-right">{product.baseMetal}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[#A5A19A]">Alternative Metal Options:</span>
                    <span className="text-[#A5A19A] text-right font-mono">925 Sterling Silver (Subject to requirement)</span>
                  </div>
                </div>
              </div>

              {/* Group 2: Plating & Finish */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#E2BC86] font-bold mb-3 flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Plating & Surface Finishing</span>
                </h4>
                <div className="p-4 rounded-xl bg-[#141416] border border-[#252527] space-y-2 text-xs">
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span className="text-[#A5A19A]">Standard Electroplating:</span>
                    <span className="text-[#E2BC86] font-semibold text-right">{product.platingAndFinish}</span>
                  </div>
                  <p className="text-xs text-[#A5A19A] leading-relaxed pt-1">
                    Finished with protective electro-lacquer barrier to retard tarnishing under typical ambient storage conditions.
                  </p>
                </div>
              </div>

              {/* Group 3: Stone Specifications */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#E2BC86] font-bold mb-3 flex items-center gap-2">
                  <Gem className="h-3.5 w-3.5" />
                  <span>Stone & Inlay Specifications</span>
                </h4>
                <div className="p-4 rounded-xl bg-[#141416] border border-[#252527] space-y-2 text-xs">
                  <span className="text-[#F5F2EC] font-medium block">
                    {product.stoneSpecifications}
                  </span>
                  <div className="pt-2 border-t border-white/5 flex items-center gap-2 text-[11px] text-[#A5A19A] font-mono">
                    <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
                    <span>Traditional settings applied by master artisans</span>
                  </div>
                </div>
              </div>

              {/* Group 4: Safety & Compliance Testing */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#E2BC86] font-bold mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Material Safety Testing</span>
                </h4>
                <div className="p-4 rounded-xl bg-[#141416] border border-[#252527] text-xs text-[#A5A19A] leading-relaxed">
                  <p className="mb-2">
                    {product.safetyCompliance}
                  </p>
                  <span className="text-[10px] font-mono text-[#77736C]">
                    Batch testing reports (RoHS, REACH compliance for Lead, Cadmium and Nickel release) provided prior to shipment upon buyer specification.
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 03: Design Range & Variants */}
          {activeTab === 'collection' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <span className="text-[10px] font-mono text-[#E2BC86] uppercase tracking-wider block font-bold mb-3">
                  Available Product Lines in this Collection
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.availableLines.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#141416] border border-[#252527] flex items-center gap-2.5 text-xs text-[#F5F2EC]"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-[#E2BC86] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#141416] border border-[#252527] text-xs space-y-2">
                <span className="text-[10px] font-mono text-[#E2BC86] uppercase tracking-wider block font-bold">
                  Customization & Curation
                </span>
                <p className="text-[#A5A19A] leading-relaxed">
                  Wholesale orders support curated mix-and-match assortments across neckwear, earrings, and bangles within the same regional design aesthetic.
                </p>
              </div>
            </div>
          )}

          {/* TAB 04: Packaging & Order Requirements */}
          {activeTab === 'packaging' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-5 rounded-2xl bg-[#141416] border border-[#252527] space-y-3 text-xs">
                <span className="text-[10px] font-mono text-[#E2BC86] uppercase tracking-wider block font-bold">
                  Order & Packaging Specifications
                </span>
                <div className="space-y-2">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-[#A5A19A]">Minimum Order Quantity (MOQ):</span>
                    <span className="font-mono text-[#F5F2EC] font-semibold">{product.moq}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-[#A5A19A]">Individual Unit Packaging:</span>
                    <span className="text-[#F5F2EC] text-right max-w-xs">{product.packaging.individual}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-[#A5A19A]">Inner Box Presentation:</span>
                    <span className="text-[#F5F2EC] text-right max-w-xs">{product.packaging.innerBox}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[#A5A19A]">Master Export Packaging:</span>
                    <span className="text-[#F5F2EC] text-right max-w-xs">{product.packaging.masterCarton}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-[#252527] text-xs text-[#A5A19A]">
                <span className="text-[#E2BC86] font-semibold block mb-1">
                  Retail Presentation & Barcode Ready:
                </span>
                Private-label branded rigid boxes, velvet pouches, and international barcode labeling available upon request for retail chains.
              </div>
            </div>
          )}

          {/* TAB 05: Trade & Export Information */}
          {activeTab === 'compliance' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-5 rounded-2xl bg-[#141416] border border-[#252527] space-y-2 text-xs">
                <span className="text-[10px] font-mono text-[#E2BC86] uppercase tracking-wider block font-bold mb-2">
                  Tariff & Trade Compliance
                </span>
                
                <div className="space-y-2">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-[#A5A19A]">Tariff Classification (HS Code):</span>
                    <span className="font-mono text-[#E2BC86] text-right">{product.hsn}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-[#A5A19A]">Origin Provenance:</span>
                    <span className="text-[#F5F2EC] text-right">{product.tradeCompliance.originStatus}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[#A5A19A]">CEPA / Trade Pacts:</span>
                    <span className="text-[#A5A19A] text-right max-w-xs">{product.tradeCompliance.cepaNote}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[#E2BC86] uppercase tracking-wider block font-bold">
                  Standard Export Documentation
                </span>
                {product.tradeCompliance.documentsAvailable.map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#A5A19A]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#E2BC86] shrink-0" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* =========================================================================
            STICKY DRAWER FOOTER (VERTICALLY STACKED OR DUAL ON DESKTOP)
            ========================================================================= */}
        <div className="p-5 md:p-6 border-t border-[#252527] bg-[#111113]/95 backdrop-blur-md sticky bottom-0 z-20 flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onRequestQuotation(product, 'sample')}
            className="w-full sm:w-1/2 border border-[#252527] hover:border-white/30 hover:bg-white/[0.03] text-[#F5F2EC] py-3.5 px-4 rounded-xl text-xs font-body font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>REQUEST A SAMPLE</span>
          </button>

          <button
            type="button"
            onClick={() => onRequestQuotation(product, 'quotation')}
            className="w-full sm:w-1/2 bg-[#E2BC86] hover:bg-[#d4a86a] text-[#0A0A0B] py-3.5 px-4 rounded-xl font-body font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer hover:shadow-[0_8px_20px_rgba(226,188,134,0.25)]"
          >
            <span>REQUEST A QUOTATION</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </aside>
    </div>
  );
}
