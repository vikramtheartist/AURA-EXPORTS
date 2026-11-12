import React, { useState, useEffect } from 'react';
import { 
  X, 
  FileText, 
  ArrowUpRight, 
  MapPin, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  Droplets, 
  FlaskConical, 
  Sprout, 
  Box, 
  Ship, 
  ChevronDown, 
  Printer, 
  CheckCircle2, 
  Clock, 
  Layers
} from 'lucide-react';
import { InstitutionalProduct } from '../../data/institutionalAgroCatalog';
import turmericShowcaseImg from '../../assets/images/agro_turmeric_fingers_showcase.jpg';

interface TechnicalSpecDrawerProps {
  product: InstitutionalProduct | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuotation: (product: InstitutionalProduct, initialNotes?: string) => void;
  onRequestSample?: (product: InstitutionalProduct, initialNotes?: string) => void;
}

// =============================================================================
// TAILORED PRODUCT SPECIFICATION OVERRIDES (MATCHING IMAGE 1 DESIGN DIRECTION)
// =============================================================================
interface FormItem {
  id: string;
  name: string;
  iconType: 'whole' | 'powder' | 'paste' | 'capsules' | 'face-pack' | 'seeds' | 'flakes' | 'grain' | 'leaf';
}

interface ProductSpecConfig {
  eyebrow: string;
  customImage?: string;
  badges: {
    origin: { label: string; sub: string };
    grade: { label: string; sub: string };
    packaging: { label: string; sub: string };
  };
  keySpecs: Array<{
    id: string;
    icon: 'flask' | 'droplet' | 'sparkle' | 'shield';
    label: string;
    value: string;
  }>;
  forms: FormItem[];
  packagingSummary: string;
  exportReadiness: string[];
}

const PRODUCT_SPEC_CONFIGS: Record<string, ProductSpecConfig> = {
  'salem-turmeric': {
    eyebrow: 'EXPORT PRODUCT',
    customImage: turmericShowcaseImg,
    badges: {
      origin: { label: 'Single Origin', sub: 'Tamil Nadu' },
      grade: { label: 'Export Grade', sub: 'Quality' },
      packaging: { label: 'Custom', sub: 'Packaging' },
    },
    keySpecs: [
      { id: 'curcuminoids', icon: 'flask', label: 'Curcuminoids', value: '3.5% – 4.5%' },
      { id: 'moisture', icon: 'droplet', label: 'Moisture', value: '≤ 10%' },
      { id: 'polishing', icon: 'sparkle', label: 'Polishing', value: 'Double-Polished' },
      { id: 'foreign-matter', icon: 'shield', label: 'Foreign Matter', value: '≤ 0.5%' },
    ],
    forms: [
      { id: 'whole-fingers', name: 'Whole Fingers', iconType: 'whole' },
      { id: 'powder', name: 'Powder', iconType: 'powder' },
      { id: 'paste', name: 'Paste', iconType: 'paste' },
      { id: 'capsules', name: 'Capsules', iconType: 'capsules' },
      { id: 'face-pack', name: 'Face Pack', iconType: 'face-pack' },
    ],
    packagingSummary: '25 kg / 50 kg bags, or custom buyer-specific packaging (retail, bulk, or private label).',
    exportReadiness: [
      'Export documentation & compliance',
      'HSN 09103020',
      'Custom specifications available',
    ],
  },

  'malabar-black-pepper': {
    eyebrow: 'EXPORT PRODUCT',
    badges: {
      origin: { label: 'Single Origin', sub: 'Kerala' },
      grade: { label: 'Export Grade', sub: 'TGSEB / MG-1' },
      packaging: { label: 'Custom', sub: 'Packaging' },
    },
    keySpecs: [
      { id: 'piperine', icon: 'flask', label: 'Piperine Content', value: '≥ 4.5%' },
      { id: 'moisture', icon: 'droplet', label: 'Moisture', value: '≤ 11%' },
      { id: 'grading', icon: 'sparkle', label: 'Grading', value: 'Tellicherry Bold' },
      { id: 'foreign-matter', icon: 'shield', label: 'Foreign Matter', value: '≤ 0.5%' },
    ],
    forms: [
      { id: 'whole-garbled', name: 'Whole Garbled', iconType: 'seeds' },
      { id: 'whole-ungarbled', name: 'Ungarbled Whole', iconType: 'seeds' },
      { id: 'coarse-cracked', name: 'Coarse Ground', iconType: 'powder' },
      { id: 'fine-powder', name: 'Fine Powder', iconType: 'powder' },
      { id: 'steam-sterilized', name: 'Steam Sterilized', iconType: 'whole' },
    ],
    packagingSummary: '25 kg / 50 kg multi-wall paper bags, poly-woven sacks, or vacuum pouches with nitrogen flush.',
    exportReadiness: [
      'Export documentation & compliance',
      'HSN 09041110',
      'Custom specifications available',
    ],
  },

  'alleppey-green-cardamom': {
    eyebrow: 'EXPORT PRODUCT',
    badges: {
      origin: { label: 'Single Origin', sub: 'Kerala' },
      grade: { label: 'Export Grade', sub: 'Extra Bold (AGEB)' },
      packaging: { label: 'Custom', sub: 'Packaging' },
    },
    keySpecs: [
      { id: 'volatile-oil', icon: 'flask', label: 'Volatile Oil', value: '6.5% – 8.5%' },
      { id: 'moisture', icon: 'droplet', label: 'Moisture', value: '≤ 10.5%' },
      { id: 'pod-diameter', icon: 'sparkle', label: 'Pod Diameter', value: '≥ 8.0 mm (AGEB)' },
      { id: 'empty-pods', icon: 'shield', label: 'Empty / Immature', value: '≤ 1.0%' },
    ],
    forms: [
      { id: 'extra-bold-pods', name: 'Extra Bold Pods', iconType: 'whole' },
      { id: 'bold-pods', name: 'Bold Pods', iconType: 'whole' },
      { id: 'decorticated-seeds', name: 'Decorticated Seeds', iconType: 'seeds' },
      { id: 'cardamom-powder', name: 'Cardamom Powder', iconType: 'powder' },
      { id: 'graded-lots', name: 'Graded Lots', iconType: 'grain' },
    ],
    packagingSummary: '10 kg / 25 kg master cartons with sealed inner food-grade poly-liners preserving volatile aroma.',
    exportReadiness: [
      'Export documentation & compliance',
      'HSN 09083110',
      'Custom specifications available',
    ],
  },

  'sortex-cumin': {
    eyebrow: 'EXPORT PRODUCT',
    badges: {
      origin: { label: 'Single Origin', sub: 'Gujarat' },
      grade: { label: 'Export Grade', sub: '99.5% Sortex' },
      packaging: { label: 'Custom', sub: 'Packaging' },
    },
    keySpecs: [
      { id: 'sortex-purity', icon: 'sparkle', label: 'Sortex Purity', value: '99.5% Machine Clean' },
      { id: 'volatile-oil', icon: 'flask', label: 'Volatile Oil', value: '≥ 2.5%' },
      { id: 'moisture', icon: 'droplet', label: 'Moisture', value: '≤ 9.0%' },
      { id: 'foreign-matter', icon: 'shield', label: 'Foreign Matter', value: '≤ 0.5%' },
    ],
    forms: [
      { id: 'sortex-seeds', name: 'Sortex 99.5%', iconType: 'seeds' },
      { id: 'machine-cleaned', name: 'Machine Cleaned', iconType: 'seeds' },
      { id: 'cumin-powder', name: 'Cumin Powder', iconType: 'powder' },
      { id: 'steam-sterilized', name: 'Steam Sterilized', iconType: 'whole' },
    ],
    packagingSummary: '25 kg / 50 kg PP bags or multi-wall paper bags with inner moisture barrier liner.',
    exportReadiness: [
      'Export documentation & compliance',
      'HSN 09093129',
      'Custom specifications available',
    ],
  },

  'red-chillies': {
    eyebrow: 'EXPORT PRODUCT',
    badges: {
      origin: { label: 'Single Origin', sub: 'Andhra Pradesh' },
      grade: { label: 'Export Grade', sub: 'Guntur S4 / Teja' },
      packaging: { label: 'Custom', sub: 'Packaging' },
    },
    keySpecs: [
      { id: 'pungency', icon: 'flask', label: 'Pungency (SHU)', value: '25,000 – 45,000' },
      { id: 'color-value', icon: 'sparkle', label: 'Color Value', value: '≥ 100 ASTA' },
      { id: 'moisture', icon: 'droplet', label: 'Moisture', value: '≤ 10.0%' },
      { id: 'damaged-pods', icon: 'shield', label: 'Damaged Pods', value: '≤ 1.5%' },
    ],
    forms: [
      { id: 'whole-stem', name: 'Whole with Stem', iconType: 'whole' },
      { id: 'stemless', name: 'Stemless Whole', iconType: 'whole' },
      { id: 'crushed-flakes', name: 'Chilli Flakes', iconType: 'flakes' },
      { id: 'chilli-powder', name: 'Chilli Powder', iconType: 'powder' },
      { id: 'crushed-seeds', name: 'Crushed Seeds', iconType: 'seeds' },
    ],
    packagingSummary: '25 kg / 50 kg jute bales, corrugated export cartons, or poly-woven sacks.',
    exportReadiness: [
      'Export documentation & compliance',
      'HSN 09042110',
      'Custom specifications available',
    ],
  },

  'moringa-leaf-powder': {
    eyebrow: 'EXPORT PRODUCT',
    badges: {
      origin: { label: 'Single Origin', sub: 'Tamil Nadu' },
      grade: { label: 'Export Grade', sub: 'Micro-Pulverized' },
      packaging: { label: 'Custom', sub: 'Packaging' },
    },
    keySpecs: [
      { id: 'protein', icon: 'flask', label: 'Protein Content', value: '≥ 25.0%' },
      { id: 'mesh-size', icon: 'sparkle', label: 'Mesh Fineness', value: '80 – 100 Mesh' },
      { id: 'moisture', icon: 'droplet', label: 'Moisture', value: '≤ 7.5%' },
      { id: 'plate-count', icon: 'shield', label: 'Total Plate Count', value: '< 10⁴ CFU/g' },
    ],
    forms: [
      { id: 'pure-powder', name: 'Pure Leaf Powder', iconType: 'powder' },
      { id: 'extract-grade', name: 'Extract Grade', iconType: 'capsules' },
      { id: 'dried-leaves', name: 'Dried Leaves', iconType: 'leaf' },
      { id: 'cut-leaves', name: 'Coarse Cut', iconType: 'leaf' },
    ],
    packagingSummary: '20 kg / 25 kg fiber drums with double food-grade poly-liners or nitrogen-flushed pouches.',
    exportReadiness: [
      'Export documentation & compliance',
      'HSN 12119029',
      'Custom specifications available',
    ],
  },

  'rice-specialty-grains': {
    eyebrow: 'EXPORT PRODUCT',
    badges: {
      origin: { label: 'Single Origin', sub: 'Indo-Gangetic' },
      grade: { label: 'Export Grade', sub: '1121 Extra Long' },
      packaging: { label: 'Custom', sub: 'Packaging' },
    },
    keySpecs: [
      { id: 'grain-length', icon: 'sparkle', label: 'Average Length', value: '≥ 8.35 mm (1121)' },
      { id: 'moisture', icon: 'droplet', label: 'Moisture', value: '≤ 12.0%' },
      { id: 'broken-grains', icon: 'shield', label: 'Broken Grains', value: '≤ 1.0%' },
      { id: 'aroma-purity', icon: 'flask', label: 'Purity / Aroma', value: '95%+ Authentic' },
    ],
    forms: [
      { id: 'steam-basmati', name: 'Steam Basmati', iconType: 'grain' },
      { id: 'golden-sella', name: 'Golden Sella', iconType: 'grain' },
      { id: 'raw-basmati', name: 'Traditional Raw', iconType: 'grain' },
      { id: 'sona-masoori', name: 'Sona Masoori', iconType: 'grain' },
      { id: 'parboiled-matta', name: 'Parboiled Matta', iconType: 'grain' },
    ],
    packagingSummary: '25 kg / 50 kg BOPP / PP woven export sacks, or custom retail handle pouches (1 kg, 5 kg, 10 kg).',
    exportReadiness: [
      'Export documentation & compliance',
      'HSN 10063020',
      'Custom specifications available',
    ],
  },
};

// =============================================================================
// MINIMALIST LINE ART SVG ICONS MATCHING IMAGE 1 FOR AVAILABLE FORMS
// =============================================================================
function FormIcon({ type, className = 'w-6 h-6' }: { type: FormItem['iconType']; className?: string }) {
  switch (type) {
    case 'whole':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15c2-3 5-4 8-3 2 .7 4 3 6 3 2 0 3-1 3-3s-2-4-5-4c-3 0-6 2-8 5" />
          <path d="M7 11c1-2 3-3 5-2" />
          <path d="M12 16c1.5-1 3.5-.8 5 .5" />
        </svg>
      );
    case 'powder':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4 L3 19 H21 Z" />
          <path d="M7.5 19c1-2 2.5-3 4.5-3s3.5 1 4.5 3" />
        </svg>
      );
    case 'paste':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 11 C4 18, 20 18, 20 11 Z" />
          <path d="M11 5 L16 11" />
          <line x1="3" y1="11" x2="21" y2="11" />
        </svg>
      );
    case 'capsules':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="10" width="12" height="6" rx="3" transform="rotate(-30 8 13)" />
          <line x1="6.5" y1="8" x2="9.5" y2="14" />
          <rect x="10" y="8" width="12" height="6" rx="3" transform="rotate(45 16 11)" />
        </svg>
      );
    case 'face-pack':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="12" rx="7" ry="9" />
          <circle cx="9.5" cy="10" r="1" fill="currentColor" />
          <circle cx="14.5" cy="10" r="1" fill="currentColor" />
          <path d="M9.5 15 Q12 17 14.5 15" />
        </svg>
      );
    case 'seeds':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="9" r="3" />
          <circle cx="16" cy="8" r="2.5" />
          <circle cx="13" cy="15" r="3" />
          <circle cx="7" cy="16" r="2" />
        </svg>
      );
    case 'flakes':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 8l3-3 4 2-1 4-4 1z" />
          <path d="M14 10l3-1 2 2-1 3-3-1z" />
          <path d="M9 16l3-2 3 2-2 3-3-1z" />
        </svg>
      );
    case 'grain':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18 C6 10, 18 6, 18 6 C18 14, 6 18, 6 18 Z" />
          <line x1="6" y1="18" x2="18" y2="6" strokeDasharray="2 2" />
        </svg>
      );
    case 'leaf':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 4 13C4 8 8 4 13 4c5 0 7 3 7 7 0 5-4 9-9 9Z" />
          <path d="M4 21c3-3 7-5 16-8" />
        </svg>
      );
    default:
      return <Box className={className} />;
  }
}

// =============================================================================
// HELPER TO RENDER KEY SPEC ICONS
// =============================================================================
function KeySpecIcon({ type }: { type: 'flask' | 'droplet' | 'sparkle' | 'shield' }) {
  switch (type) {
    case 'flask':
      return <FlaskConical className="w-5 h-5 text-[#D4AF78]" strokeWidth={1.75} />;
    case 'droplet':
      return <Droplets className="w-5 h-5 text-[#D4AF78]" strokeWidth={1.75} />;
    case 'sparkle':
      return <Sparkles className="w-5 h-5 text-[#D4AF78]" strokeWidth={1.75} />;
    case 'shield':
      return <ShieldCheck className="w-5 h-5 text-[#D4AF78]" strokeWidth={1.75} />;
    default:
      return <Sparkles className="w-5 h-5 text-[#D4AF78]" />;
  }
}

export default function TechnicalSpecDrawer({
  product,
  isOpen,
  onClose,
  onRequestQuotation,
  onRequestSample,
}: TechnicalSpecDrawerProps) {
  // Config lookup with generic fallback for any product
  const config: ProductSpecConfig = (product && PRODUCT_SPEC_CONFIGS[product.id]) || {
    eyebrow: 'EXPORT PRODUCT',
    badges: {
      origin: { label: 'Single Origin', sub: product?.origin.state || 'India' },
      grade: { label: 'Export Grade', sub: 'Quality' },
      packaging: { label: 'Custom', sub: 'Packaging' },
    },
    keySpecs: [
      { id: 'spec-1', icon: 'flask', label: 'Primary Assay', value: product?.chemicalParameters[0]?.specification || 'Standard Grade' },
      { id: 'spec-2', icon: 'droplet', label: 'Moisture', value: product?.physicalParameters.find(p => p.parameter.toLowerCase().includes('moisture'))?.specification || '≤ 10%' },
      { id: 'spec-3', icon: 'sparkle', label: 'Processing', value: product?.grade || 'Export Quality' },
      { id: 'spec-4', icon: 'shield', label: 'Cleanliness', value: product?.physicalParameters.find(p => p.parameter.toLowerCase().includes('foreign') || p.parameter.toLowerCase().includes('extraneous'))?.specification || 'ASTA Grade' },
    ],
    forms: (product?.availableForms || ['Standard Export']).slice(0, 5).map((f, i) => ({
      id: `form-${i}`,
      name: f.replace(/turmeric|cardamom|cumin|chilli|pepper|moringa|basmati/gi, '').trim() || f,
      iconType: i === 0 ? 'whole' : i === 1 ? 'powder' : i === 2 ? 'paste' : i === 3 ? 'capsules' : 'seeds',
    })),
    packagingSummary: '25 kg / 50 kg export-compliant bags or buyer-specified retail and bulk packaging.',
    exportReadiness: [
      'Export documentation & compliance',
      `HSN ${product?.hsnCodes[0]?.code || 'Export Calibrated'}`,
      'Custom specifications available',
    ],
  };

  // Selected Form State (defaults to first available form)
  const [selectedFormId, setSelectedFormId] = useState<string>(() => config.forms[0]?.id || '');

  // Full Laboratory COA Modal / Expandable State
  const [isFullLabModalOpen, setIsFullLabModalOpen] = useState(false);

  // Sync selected form when product changes
  useEffect(() => {
    if (config.forms && config.forms.length > 0) {
      setSelectedFormId(config.forms[0].id);
    }
    setIsFullLabModalOpen(false);
  }, [product?.id]);

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

  // Keyboard navigation: Escape closes modal/drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        if (isFullLabModalOpen) {
          setIsFullLabModalOpen(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isFullLabModalOpen, onClose]);

  if (!isOpen || !product) return null;

  const currentSelectedForm = config.forms.find((f) => f.id === selectedFormId)?.name || config.forms[0]?.name || 'Standard Export';
  const displayImage = config.customImage || product.image;

  const handleSampleClick = () => {
    if (onRequestSample) {
      onRequestSample(product, `Sample Request: ${product.name} (Form: ${currentSelectedForm})`);
    } else {
      onRequestQuotation(product, `Sample Request: ${product.name} (Form: ${currentSelectedForm})`);
    }
  };

  const handleQuotationClick = () => {
    onRequestQuotation(product, `Quotation Request: ${product.name} (Form: ${currentSelectedForm})`);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-fadeIn">
      {/* Dark Overlay Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Slide-over Drawer Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={`${product.name} Product Details & Specifications`}
        className="relative z-10 w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl h-full bg-[#0C0C0E] border-l border-[#252528] text-[#F2E9D9] flex flex-col justify-between shadow-[0_0_80px_rgba(0,0,0,0.9)] transition-transform duration-300 ease-out overflow-hidden"
      >
        {/* Floating Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-4 sm:top-5 right-4 sm:right-6 z-30 w-9 h-9 rounded-full bg-black/60 hover:bg-[#D4AF78] text-[#F2E9D9] hover:text-[#090909] border border-white/10 hover:border-[#D4AF78] flex items-center justify-center transition-all cursor-pointer shadow-lg backdrop-blur-md"
        >
          <X className="w-4 h-4 stroke-[2.2]" />
        </button>

        {/* =========================================================================
            SCROLLABLE CONTENT AREA (SPLIT 2-COLUMN LUXURY EDITORIAL LAYOUT)
            ========================================================================= */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-8 lg:px-10 py-6 sm:py-8 space-y-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* =====================================================================
                LEFT COLUMN: PRODUCT PHOTOGRAPHY & 3 TRUST HIGHLIGHTS
                ===================================================================== */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              
              {/* Product Visual Container with Curved Silhouette */}
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#141416] border border-[#252528] shadow-2xl group">
                <img
                  src={displayImage}
                  alt={`${product.name} Indian Export Commodity`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Natural Dark Gradient for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0C0C0E] to-transparent pointer-events-none" />
              </div>

              {/* 3 Trust Badges beneath Photo (Matching Image 1) */}
              <div className="grid grid-cols-3 gap-2 p-3.5 bg-[#141416]/80 border border-[#252528] rounded-2xl">
                
                {/* Badge 1: Single Origin */}
                <div className="flex flex-col items-center text-center gap-1 p-1">
                  <Sprout className="w-4 h-4 text-[#D4AF78]" strokeWidth={1.8} />
                  <span className="text-[11px] font-mono font-medium text-[#F2E9D9] leading-tight">
                    {config.badges.origin.label}
                  </span>
                  <span className="text-[10px] font-mono text-[#D4AF78] tracking-wider leading-tight">
                    {config.badges.origin.sub}
                  </span>
                </div>

                {/* Badge 2: Export Grade */}
                <div className="flex flex-col items-center text-center gap-1 p-1 border-x border-[#252528]">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF78]" strokeWidth={1.8} />
                  <span className="text-[11px] font-mono font-medium text-[#F2E9D9] leading-tight">
                    {config.badges.grade.label}
                  </span>
                  <span className="text-[10px] font-mono text-[#A29B91] tracking-wider leading-tight">
                    {config.badges.grade.sub}
                  </span>
                </div>

                {/* Badge 3: Custom Packaging */}
                <div className="flex flex-col items-center text-center gap-1 p-1">
                  <Box className="w-4 h-4 text-[#D4AF78]" strokeWidth={1.8} />
                  <span className="text-[11px] font-mono font-medium text-[#F2E9D9] leading-tight">
                    {config.badges.packaging.label}
                  </span>
                  <span className="text-[10px] font-mono text-[#A29B91] tracking-wider leading-tight">
                    {config.badges.packaging.sub}
                  </span>
                </div>

              </div>

            </div>

            {/* =====================================================================
                RIGHT COLUMN: EDITORIAL METADATA, SPECS, FORMS & PACKAGING
                ===================================================================== */}
            <div className="lg:col-span-7 flex flex-col space-y-5">
              
              {/* Top Eyebrow Badge */}
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full border border-[#D4AF78]/40 bg-[#D4AF78]/10 text-[10px] font-mono font-bold tracking-[0.2em] text-[#D4AF78] uppercase">
                  {config.eyebrow}
                </span>
              </div>

              {/* Product Headline (Editorial Serif Typography) */}
              <div className="space-y-2">
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-[2.2rem] text-[#F2E9D9] font-normal leading-[1.15] tracking-tight">
                  {product.name}
                </h2>

                {/* Origin Location & Botanical Name */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#A29B91]">
                  <div className="flex items-center gap-1.5 text-[#D4AF78]">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF78] shrink-0" />
                    <span>{product.origin.displayOrigin.replace(/\.$/, '')}</span>
                  </div>
                  {product.botanicalName && (
                    <>
                      <span className="text-[#4E4E54]">|</span>
                      <span className="italic font-serif text-[#C4BDB3]">
                        {product.botanicalName}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Concise Editorial Description */}
              <p className="text-xs sm:text-sm text-[#A29B91] font-light leading-relaxed">
                {product.cardDescription || product.overviewDescription}
              </p>

              {/* Thin Divider */}
              <div className="w-full h-px bg-[#252528]" />

              {/* ===================================================================
                  SECTION 1: KEY SPECIFICATIONS (4 CARDS)
                  =================================================================== */}
              <div>
                <h3 className="text-[11px] font-mono tracking-[0.2em] uppercase font-bold text-[#D4AF78] mb-3">
                  KEY SPECIFICATIONS
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {config.keySpecs.map((spec) => (
                    <div
                      key={spec.id}
                      className="bg-[#141416] hover:bg-[#18181B] border border-[#26262A] hover:border-[#D4AF78]/40 rounded-2xl p-3 flex flex-col items-center justify-center text-center gap-1.5 min-h-[96px] transition-all duration-200"
                    >
                      <KeySpecIcon type={spec.icon} />
                      <span className="text-[11px] font-mono text-[#A29B91] tracking-wide line-clamp-1">
                        {spec.label}
                      </span>
                      <span className="text-xs sm:text-[13px] font-mono font-bold text-[#F2E9D9] leading-tight">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thin Divider */}
              <div className="w-full h-px bg-[#252528]" />

              {/* ===================================================================
                  SECTION 2: AVAILABLE FORMS (INTERACTIVE TILES WITH SVG ICONS)
                  =================================================================== */}
              <div>
                <h3 className="text-[11px] font-mono tracking-[0.2em] uppercase font-bold text-[#D4AF78] mb-3">
                  AVAILABLE FORMS
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                  {config.forms.map((form) => {
                    const isSelected = form.id === selectedFormId;
                    return (
                      <button
                        key={form.id}
                        type="button"
                        onClick={() => setSelectedFormId(form.id)}
                        className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-2 text-center transition-all cursor-pointer min-h-[88px] ${
                          isSelected
                            ? 'border-[#D4AF78] bg-[#D4AF78]/10 text-[#D4AF78] shadow-[0_0_20px_rgba(212,175,120,0.15)] ring-1 ring-[#D4AF78]/50'
                            : 'border-[#26262A] bg-[#141416] hover:border-[#D4AF78]/40 text-[#A29B91] hover:text-[#F2E9D9]'
                        }`}
                      >
                        <FormIcon type={form.iconType} className="w-6 h-6" />
                        <span className="text-[11px] font-mono font-medium leading-tight line-clamp-2">
                          {form.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Thin Divider */}
              <div className="w-full h-px bg-[#252528]" />

              {/* ===================================================================
                  SECTION 3: PACKAGING OPTIONS & EXPORT READINESS (2 COLUMNS)
                  =================================================================== */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                
                {/* Packaging Options */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#D4AF78]">
                    <Box className="w-4 h-4 text-[#D4AF78]" strokeWidth={1.8} />
                    <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.18em]">
                      PACKAGING OPTIONS
                    </h4>
                  </div>
                  <p className="text-xs text-[#A29B91] font-light leading-relaxed">
                    {config.packagingSummary}
                  </p>
                </div>

                {/* Export Readiness */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#D4AF78]">
                    <Ship className="w-4 h-4 text-[#D4AF78]" strokeWidth={1.8} />
                    <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.18em]">
                      EXPORT READINESS
                    </h4>
                  </div>
                  <ul className="space-y-1.5">
                    {config.exportReadiness.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#A29B91] font-light">
                        <Check className="w-3.5 h-3.5 text-[#D4AF78] shrink-0" strokeWidth={2.2} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =========================================================================
            STICKY BOTTOM ACTION BAR (FULL WIDTH)
            ========================================================================= */}
        <div className="border-t border-[#252528] bg-[#0E0E10]/95 backdrop-blur-md p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-20">
          
          {/* Left: Test Reports & Detailed Specifications Trigger */}
          <button
            type="button"
            onClick={() => setIsFullLabModalOpen(true)}
            className="flex items-center gap-2 text-xs font-mono text-[#A29B91] hover:text-[#D4AF78] transition-colors cursor-pointer group text-left"
          >
            <FileText className="w-4 h-4 text-[#D4AF78] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="underline decoration-[#D4AF78]/40 underline-offset-4 group-hover:decoration-[#D4AF78]">
              Need detailed specifications or test reports?
            </span>
          </button>

          {/* Right: Dual CTA Buttons */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            
            {/* Request a Sample */}
            <button
              type="button"
              onClick={handleSampleClick}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border border-[#2E2E32] hover:border-[#D4AF78] bg-[#141416] hover:bg-white/5 text-[#F2E9D9] font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center"
            >
              REQUEST A SAMPLE
            </button>

            {/* Request a Quotation */}
            <button
              type="button"
              onClick={handleQuotationClick}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-[#D4AF78] hover:bg-[#E5C07B] text-[#090909] font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(212,175,120,0.25)] hover:scale-[1.02] cursor-pointer"
            >
              <span>REQUEST A QUOTATION</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
            </button>

          </div>

        </div>

        {/* =========================================================================
            EXPANDED LABORATORY COA & REGULATORY MODAL (PROGRESSIVE DISCLOSURE)
            ========================================================================= */}
        {isFullLabModalOpen && (
          <div className="absolute inset-0 z-40 bg-[#0C0C0E]/98 backdrop-blur-xl flex flex-col justify-between animate-fadeIn overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-[#252528] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#D4AF78] uppercase font-bold">
                  LABORATORY COA & TECHNICAL SPECIFICATIONS
                </span>
                <h3 className="font-heading text-xl sm:text-2xl text-[#F2E9D9] font-normal mt-0.5">
                  {product.name}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#2E2E32] hover:border-[#D4AF78] text-[#F2E9D9] text-xs font-mono transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Spec</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsFullLabModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D4AF78] text-[#F2E9D9] hover:text-[#090909] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body: Complete Tabular Spec Parameters */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
              
              {/* Physical Parameters */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF78] flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Physical & Visual Parameters</span>
                </h4>
                <div className="border border-[#252528] rounded-2xl overflow-hidden bg-[#141416]/50">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-[#18181C] text-[#A29B91] border-b border-[#252528]">
                      <tr>
                        <th className="p-3 font-medium">Parameter</th>
                        <th className="p-3 font-medium">Specification</th>
                        <th className="p-3 font-medium hidden sm:table-cell">Standard / Method</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#252528]">
                      {product.physicalParameters.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-white/[0.02]">
                          <td className="p-3 text-[#F2E9D9] font-medium">{row.parameter}</td>
                          <td className="p-3 text-[#D4AF78]">{row.specification}</td>
                          <td className="p-3 text-[#A29B91] hidden sm:table-cell">{row.testMethodOrEvidence}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Chemical & Potency Assays */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF78] flex items-center gap-2">
                  <FlaskConical className="w-3.5 h-3.5" />
                  <span>Chemical Assays & Active Potency</span>
                </h4>
                <div className="border border-[#252528] rounded-2xl overflow-hidden bg-[#141416]/50">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-[#18181C] text-[#A29B91] border-b border-[#252528]">
                      <tr>
                        <th className="p-3 font-medium">Assay Parameter</th>
                        <th className="p-3 font-medium">Target Specification</th>
                        <th className="p-3 font-medium hidden sm:table-cell">Standard / Protocol</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#252528]">
                      {product.chemicalParameters.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-white/[0.02]">
                          <td className="p-3 text-[#F2E9D9] font-medium">{row.parameter}</td>
                          <td className="p-3 text-[#D4AF78]">{row.specification}</td>
                          <td className="p-3 text-[#A29B91] hidden sm:table-cell">{row.testMethodOrEvidence}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Microbiological Limits */}
              {product.microbiologicalParameters && product.microbiologicalParameters.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF78] flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Microbiological & Cleanliness Standards</span>
                  </h4>
                  <div className="border border-[#252528] rounded-2xl overflow-hidden bg-[#141416]/50">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-[#18181C] text-[#A29B91] border-b border-[#252528]">
                        <tr>
                          <th className="p-3 font-medium">Pathogen / Assay</th>
                          <th className="p-3 font-medium">Export Compliance Limit</th>
                          <th className="p-3 font-medium hidden sm:table-cell">Validation Method</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#252528]">
                        {product.microbiologicalParameters.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-white/[0.02]">
                            <td className="p-3 text-[#F2E9D9] font-medium">{row.parameter}</td>
                            <td className="p-3 text-[#D4AF78]">{row.specification}</td>
                            <td className="p-3 text-[#A29B91] hidden sm:table-cell">{row.testMethodOrEvidence}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Logistics & Container Loads */}
              <div className="p-4 rounded-2xl bg-[#141416] border border-[#252528] space-y-2">
                <span className="text-[11px] font-mono text-[#D4AF78] uppercase font-bold tracking-wider">
                  Container Capacity & Indicative Dispatch
                </span>
                <p className="text-xs text-[#A29B91] font-light leading-relaxed">
                  20ft FCL Container: <strong className="text-[#F2E9D9] font-normal">{product.logistics?.containerCapacity || '12–14 MT'}</strong> · 
                  Dispatch Turnaround: <strong className="text-[#F2E9D9] font-normal">{product.logistics?.indicativeDispatch || '10–14 Business Days'}</strong> · 
                  Loading Ports: <strong className="text-[#F2E9D9] font-normal">{product.logistics?.portsOfDispatch?.join(', ') || 'Chennai, Nhava Sheva (JNPT), Cochin'}</strong>.
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#252528] bg-[#0E0E10] flex items-center justify-between">
              <span className="text-xs font-mono text-[#A29B91]">
                Custom COA batch testing & optical Sortex grading available on request.
              </span>
              <button
                type="button"
                onClick={() => setIsFullLabModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-[#D4AF78] text-[#090909] font-mono text-xs font-bold uppercase cursor-pointer"
              >
                Close Spec Sheet
              </button>
            </div>

          </div>
        )}

      </aside>
    </div>
  );
}
