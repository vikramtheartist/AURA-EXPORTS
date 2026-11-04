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
  Scroll,
  Scissors
} from 'lucide-react';
import { TextileProductSpec } from '../../data/institutionalTextilesCatalog';

interface TextileSpecDrawerProps {
  product: TextileProductSpec | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuotation: (product: TextileProductSpec, mode?: 'quotation' | 'sample') => void;
}

export default function TextileSpecDrawer({
  product,
  isOpen,
  onClose,
  onRequestQuotation,
}: TextileSpecDrawerProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'weave' | 'specs' | 'compliance' | 'packaging'>('overview');

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
    { id: 'overview', label: '1. Fabric Overview & Origin' },
    { id: 'weave', label: '2. Fibre, Yarn & Weave' },
    { id: 'specs', label: '3. Width, GSM & Physical' },
    { id: 'compliance', label: '4. Testing & Certifications' },
    { id: 'packaging', label: '5. Packaging & Orders' },
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
                  Indian Handloom & Heritage
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
                <span>{product.fibreComposition}</span>
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
          {/* TAB 01: Fabric Overview & Origin */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Prominent Image */}
              <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-black border border-white/10 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-[10px] font-mono text-[#E2BC86] uppercase tracking-wider font-semibold">
                    {product.weaveAndConstruction}
                  </span>
                </div>
              </div>

              {/* Overview Narrative */}
              <div className="p-5 rounded-2xl bg-[#141416] border border-[#252527] space-y-2">
                <span className="text-[10px] font-mono text-[#E2BC86] uppercase tracking-wider block font-bold">
                  Textile Overview
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

              {/* Sourcing Clusters & Origin Details */}
              <div className="p-5 rounded-2xl bg-[#141416] border border-[#252527] space-y-2">
                <span className="text-[10px] font-mono text-[#E2BC86] uppercase tracking-wider block font-bold">
                  Sourcing Clusters & Provenance
                </span>
                <p className="text-xs text-[#A5A19A] leading-relaxed">
                  Sourced directly through verified weaver societies and artisan clusters in {product.origin.displayOrigin}.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono text-[#77736C]">Clusters:</span>
                  {product.origin.clusters.map((cl, cIdx) => (
                    <span key={cIdx} className="text-xs font-mono text-[#F5F2EC] bg-white/5 px-2.5 py-0.5 rounded border border-white/5">
                      {cl}
                    </span>
                  ))}
                </div>
              </div>

              {/* Commercial Parameters */}
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

          {/* TAB 02: Fibre, Yarn & Weave (Grouped Information) */}
          {activeTab === 'weave' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Group 1: Fibre Composition */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#E2BC86] font-bold mb-3 flex items-center gap-2">
                  <Layers className="h-3.5 w-3.5" />
                  <span>Fibre Composition</span>
                </h4>
                <div className="p-4 rounded-xl bg-[#141416] border border-[#252527] space-y-1.5 text-xs">
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span className="text-[#A5A19A]">Verified Material:</span>
                    <span className="text-[#F5F2EC] font-medium text-right">{product.fibreComposition}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[#A5A19A]">Tariff Classification:</span>
                    <span className="text-[#E2BC86] text-right font-mono">{product.hsn}</span>
                  </div>
                </div>
              </div>

              {/* Group 2: Yarn & Weave Architecture */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#E2BC86] font-bold mb-3 flex items-center gap-2">
                  <Scroll className="h-3.5 w-3.5" />
                  <span>Yarn Specifications & Weave Construction</span>
                </h4>
                <div className="p-4 rounded-xl bg-[#141416] border border-[#252527] space-y-2 text-xs">
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span className="text-[#A5A19A]">Weave Architecture:</span>
                    <span className="text-[#F5F2EC] font-medium text-right">{product.weaveAndConstruction}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[#A5A19A]">Yarn Counts / Ply:</span>
                    <span className="text-[#E2BC86] text-right font-mono">{product.yarnSpecs}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 03: Width, GSM & Physical Specifications */}
          {activeTab === 'specs' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Group 1: Fabric Weight & Width */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#E2BC86] font-bold mb-3 flex items-center gap-2">
                  <Scissors className="h-3.5 w-3.5" />
                  <span>Dimensions & Fabric Weight</span>
                </h4>
                <div className="p-4 rounded-xl bg-[#141416] border border-[#252527] space-y-2 text-xs">
                  {product.dimensionsAndWeight.gsm && (
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-[#A5A19A]">Target GSM:</span>
                      <span className="text-[#E2BC86] font-mono font-semibold text-right">{product.dimensionsAndWeight.gsm}</span>
                    </div>
                  )}
                  {product.dimensionsAndWeight.width && (
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-[#A5A19A]">Usable Width:</span>
                      <span className="text-[#F5F2EC] font-mono text-right">{product.dimensionsAndWeight.width}</span>
                    </div>
                  )}
                  {product.dimensionsAndWeight.length && (
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-[#A5A19A]">Total Piece Length:</span>
                      <span className="text-[#F5F2EC] font-mono text-right">{product.dimensionsAndWeight.length}</span>
                    </div>
                  )}
                  {product.dimensionsAndWeight.weightPerPiece && (
                    <div className="flex justify-between pt-1">
                      <span className="text-[#A5A19A]">Weight per Unit:</span>
                      <span className="text-[#F5F2EC] font-mono text-right">{product.dimensionsAndWeight.weightPerPiece}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Group 2: Dye, Colourfastness & Finishing */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#E2BC86] font-bold mb-3 flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Dyes & Finishing Standards</span>
                </h4>
                <div className="p-4 rounded-xl bg-[#141416] border border-[#252527] space-y-2 text-xs">
                  <div className="flex justify-between pt-1">
                    <span className="text-[#A5A19A]">Dye Chemistry & Finish:</span>
                    <span className="text-[#F5F2EC] text-right max-w-xs">{product.dyesAndFinishing}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 04: Testing & Certifications */}
          {activeTab === 'compliance' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-5 rounded-2xl bg-[#141416] border border-[#252527] space-y-3 text-xs">
                <span className="text-[10px] font-mono text-[#E2BC86] uppercase tracking-wider block font-bold">
                  Quality & Certifications Framework
                </span>

                <div className="space-y-2">
                  {product.qualityAndCertifications.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#0E0E10] border border-white/5 space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-[#F5F2EC]">{item.standard}</span>
                        <span className="text-[10px] font-mono text-[#E2BC86] bg-[#E2BC86]/10 px-2 py-0.5 rounded">
                          {item.status}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#A5A19A] leading-relaxed">
                        {item.note}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span className="text-[#A5A19A]">Tariff Classification (HS Code):</span>
                    <span className="font-mono text-[#E2BC86] text-right">{product.hsn}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span className="text-[#A5A19A]">Origin Provenance:</span>
                    <span className="text-[#F5F2EC] text-right">{product.tradeCompliance.originStatus}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[#A5A19A]">CEPA Duty Eligibility:</span>
                    <span className="text-[#A5A19A] text-right max-w-xs">{product.tradeCompliance.cepaNote}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[#E2BC86] uppercase tracking-wider block font-bold">
                  Standard Documentation Provided
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

          {/* TAB 05: Packaging & Order Requirements */}
          {activeTab === 'packaging' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-5 rounded-2xl bg-[#141416] border border-[#252527] space-y-3 text-xs">
                <span className="text-[10px] font-mono text-[#E2BC86] uppercase tracking-wider block font-bold">
                  Packaging & Commercial Order Options
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
                    <span className="text-[#A5A19A]">Bulk Packing Format:</span>
                    <span className="text-[#F5F2EC] text-right max-w-xs">{product.packaging.bulkPacking}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[#A5A19A]">Master Carton or Bale:</span>
                    <span className="text-[#F5F2EC] text-right max-w-xs">{product.packaging.masterCartonOrBale}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-[#252527] text-xs text-[#A5A19A]">
                <span className="text-[#E2BC86] font-semibold block mb-1">
                  Swatch Books & Lab Dips:
                </span>
                Sampling swatch folders, lab dips for custom pantone matching, and sample cuts available prior to volume production.
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
            <span>REQUEST FABRIC SWATCHES</span>
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
