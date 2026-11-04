import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck,
  Loader2,
  User,
  Package,
  Search,
  PenLine,
  FileText,
  Zap,
  Tag
} from 'lucide-react';
import { InstitutionalProduct } from '../../data/institutionalAgroCatalog';
import { submitRFQ } from '../../services/rfqService';
import { COMPANY_CONTACT } from '../../config/companyContact';
import { trackContactEvent } from '../../utils/analytics';

// Crisp WhatsApp SVG Icon
function WhatsAppIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

export interface InstitutionalRFQModalProps {
  product: InstitutionalProduct | null;
  isOpen: boolean;
  onClose: () => void;
  initialForm?: string;
  customTitle?: string;
  customOrigin?: string;
  customGrade?: string;
  customCategory?: string;
}

export default function InstitutionalRFQModal({
  product,
  isOpen,
  onClose,
  initialForm,
  customTitle,
  customOrigin,
  customGrade,
  customCategory,
}: InstitutionalRFQModalProps) {
  // Determine vertical based on product or title
  const productName = product?.cardTitle || customTitle || 'Indian Agro Commodities';
  const productOrigin = product?.origin?.displayOrigin || customOrigin || 'South India, India';
  const productGrade = product?.grade || customGrade || initialForm || '';
  const categoryStr = (product?.category || customCategory || customTitle || '').toLowerCase();

  const isJewellery = categoryStr.includes('jewel') || categoryStr.includes('kundan') || categoryStr.includes('temple') || categoryStr.includes('fashion');
  const isTextile = categoryStr.includes('textile') || categoryStr.includes('fabric') || categoryStr.includes('silk') || categoryStr.includes('saree') || categoryStr.includes('cotton') || categoryStr.includes('linen') || categoryStr.includes('handloom');
  const vertical = isJewellery ? 'jewellery' : isTextile ? 'textiles' : 'agro';

  // Default quantity units per vertical
  const defaultUnit = vertical === 'agro' ? 'Metric Tons' : vertical === 'textiles' ? 'Metres' : 'Pieces';

  // Form State: Primary Fields
  const [fullName, setFullName] = useState('');
  const [contactIdentifier, setContactIdentifier] = useState(''); // Email OR WhatsApp
  const [quantityAmount, setQuantityAmount] = useState('');
  const [quantityUnit, setQuantityUnit] = useState<string>(defaultUnit);
  const [destinationCountry, setDestinationCountry] = useState('');
  const [additionalRequirements, setAdditionalRequirements] = useState('');

  // Progressive Disclosure for Advanced Procurement Details
  const [showAdvancedDetails, setShowAdvancedDetails] = useState(false);

  // Advanced Optional Fields
  const [targetSpecification, setTargetSpecification] = useState('');
  const [preferredFinishingOrPackaging, setPreferredFinishingOrPackaging] = useState('');
  const [destinationPort, setDestinationPort] = useState('');
  const [preferredIncoterm, setPreferredIncoterm] = useState('FOB');

  // Submission Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const hasTriggeredFormStart = useRef(false);

  // Sync state on modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmittedRef(null);
      setErrorMessage(null);
      hasTriggeredFormStart.current = false;
      setQuantityUnit(vertical === 'agro' ? 'Metric Tons' : vertical === 'textiles' ? 'Metres' : 'Pieces');
      trackContactEvent('rfq_modal_opened', {
        productName,
        origin: productOrigin,
        vertical,
      });
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, productName, productOrigin, vertical]);

  // Track form interaction when buyer starts typing or focusing
  const handleFormInteraction = () => {
    if (!hasTriggeredFormStart.current) {
      hasTriggeredFormStart.current = true;
      trackContactEvent('enquiry_form_started', { productName, vertical });
    }
  };

  // Keyboard navigation: Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Format Quantity String
  const formattedQuantity =
    quantityUnit === 'Not Decided'
      ? 'Not yet decided'
      : quantityAmount.trim()
      ? `${quantityAmount.trim()} ${quantityUnit}`
      : 'Not yet decided';

  // Available units based on vertical (defaults to Metric Tons, Kilograms, Not Decided as in screenshot)
  const availableUnits =
    vertical === 'agro'
      ? ['Metric Tons', 'Kilograms', 'Not Decided']
      : vertical === 'textiles'
      ? ['Metres', 'Pieces', 'Not Decided']
      : ['Pieces', 'Sets', 'Not Decided'];

  // Handle Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const contactVal = contactIdentifier.trim();
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!contactVal) {
      setErrorMessage('Please enter your business email or WhatsApp number.');
      return;
    }

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactVal);
    const isPhone = contactVal.replace(/\D/g, '').length >= 6;

    if (!isEmail && !isPhone) {
      setErrorMessage('Please provide a valid email address or WhatsApp/phone number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const advancedNotes = [
        targetSpecification ? `Target Spec/Grade: ${targetSpecification}` : null,
        preferredFinishingOrPackaging ? `Packaging/Finish: ${preferredFinishingOrPackaging}` : null,
        destinationCountry ? `Destination Country: ${destinationCountry}` : null,
        destinationPort ? `Port: ${destinationPort} (${preferredIncoterm})` : null,
      ].filter(Boolean).join(' | ');

      const combinedRequirements = [
        additionalRequirements.trim() || 'General wholesale procurement and export quotation inquiry.',
        advancedNotes ? `[Advanced Details: ${advancedNotes}]` : null,
      ].filter(Boolean).join('\n\n');

      const payload = {
        productCategory: product?.category || (vertical === 'jewellery' ? 'Fashion & Jewellery' : vertical === 'textiles' ? 'Apparel & Textiles' : 'Agro Products'),
        productRequirement: `Product: ${productName} (Origin: ${productOrigin})${productGrade ? ` [Grade: ${productGrade}]` : ''}\n\n${combinedRequirements}`,
        quantity: formattedQuantity,
        buyerName: fullName.trim(),
        companyName: 'B2B Trade Buyer',
        businessEmail: isEmail ? contactVal : `trade-enquiry-${Date.now()}@auraexport.co`,
        phone: isPhone ? contactVal : '',
        destinationPort: destinationPort ? `${destinationPort} (${preferredIncoterm})` : destinationCountry || 'Unspecified',
        procurementType: 'Commercial Export Quotation',
      };

      const result = await submitRFQ(payload);
      if (result && result.success) {
        const generatedRef = result.referenceId || `AURA-RFQ-${Date.now().toString(36).toUpperCase()}`;
        setSubmittedRef(generatedRef);
        trackContactEvent('enquiry_submitted', {
          productName,
          referenceId: generatedRef,
          vertical,
          mode: 'quotation',
        });
      } else {
        setErrorMessage(result?.message || 'Submission could not be completed.');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Submission failed. Please verify your details or contact the Trade Desk directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl lg:max-w-5xl bg-[#0D0D10] border border-[#26262B] rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden my-auto text-white flex flex-col md:flex-row max-h-[96vh] md:max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Soft Golden Ambient Glow in Top-Left Corner */}
        <div 
          className="absolute -top-24 -left-24 w-96 h-96 bg-[radial-gradient(circle,_rgba(216,171,100,0.22)_0%,_rgba(180,115,30,0.08)_40%,_transparent_70%)] pointer-events-none blur-2xl z-0" 
          aria-hidden="true"
        />

        {/* =========================================================================
            LEFT COLUMN: BRAND, HEADLINE, INSTANT CONTACT & DIRECT DETAILS
            ========================================================================= */}
        <div className="relative w-full md:w-[38%] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#26262B] bg-[#0D0D10]/50 shrink-0 z-10 overflow-y-auto">
          <div>
            {/* Eyebrow */}
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#D8AB64] uppercase font-bold block mb-3">
              AURA GLOBAL TRADE
            </span>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-heading text-[#F5F2EC] font-normal leading-[1.15] mb-3">
              Export Enquiry
            </h2>

            {/* Product context chip if user clicked from a specific product */}
            {productName && productName !== 'Indian Agro Commodities' && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-[#D8AB64] mb-3 max-w-full">
                <Tag className="w-3 h-3 shrink-0" />
                <span className="truncate">{productName}</span>
                {productGrade && <span className="text-white/40 truncate">• {productGrade}</span>}
              </div>
            )}

            {/* Subheading */}
            <h3 className="text-base sm:text-lg text-white font-medium mb-3 leading-snug">
              Let&apos;s talk about your sourcing requirements.
            </h3>

            {/* Description */}
            <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
              Tell us what you&apos;re looking for. Our export team will help you explore suitable products, specifications and sourcing options.
            </p>

            {/* Prefer Instant Contact Card */}
            <div className="rounded-2xl bg-[#141417]/90 border border-[#26262B] p-4 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-[#D8AB64] fill-[#D8AB64]" />
                <span className="text-xs font-semibold text-white tracking-wide">
                  Prefer instant contact?
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {/* WhatsApp */}
                <a
                  href={COMPANY_CONTACT.getWhatsAppUrl(productName, productOrigin, formattedQuantity)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackContactEvent('whatsapp_clicked', { productName, vertical })}
                  className="py-2 px-1.5 sm:px-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 flex items-center justify-center gap-1.5 text-xs text-white transition-colors cursor-pointer group"
                >
                  <span className="text-[#25D366] shrink-0">
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-medium">WhatsApp</span>
                </a>

                {/* Call */}
                <a
                  href={`tel:${COMPANY_CONTACT.phoneTel}`}
                  onClick={() => trackContactEvent('phone_call_clicked', { productName, vertical })}
                  className="py-2 px-1.5 sm:px-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 flex items-center justify-center gap-1.5 text-xs text-white transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D8AB64] shrink-0" />
                  <span className="text-xs font-medium">Call</span>
                </a>

                {/* Email */}
                <a
                  href={COMPANY_CONTACT.getMailtoUrl(productName, productOrigin, formattedQuantity)}
                  onClick={() => trackContactEvent('email_clicked', { productName, vertical })}
                  className="py-2 px-1.5 sm:px-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 flex items-center justify-center gap-1.5 text-xs text-white transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D8AB64] shrink-0" />
                  <span className="text-xs font-medium">Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Or contact us directly */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-semibold text-white">
              Or contact us directly
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <a
                href={`mailto:${COMPANY_CONTACT.corporateEmail}`}
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#D8AB64] shrink-0" />
                <span className="group-hover:underline truncate">{COMPANY_CONTACT.corporateEmail}</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <MessageSquare className="w-4 h-4 text-[#D8AB64] shrink-0" />
                <span className="font-mono group-hover:underline">{COMPANY_CONTACT.phoneDisplay}</span>
              </a>
              <div className="flex items-center gap-3 text-neutral-400">
                <MapPin className="w-4 h-4 text-[#D8AB64] shrink-0" />
                <span className="truncate">{COMPANY_CONTACT.operatingLocation}</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            RIGHT COLUMN: ENQUIRY FORM & PROGRESSIVE DISCLOSURE
            ========================================================================= */}
        <div className="relative w-full md:w-[62%] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto z-10">
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close export enquiry modal"
            className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer z-20"
          >
            <X className="w-4 h-4" />
          </button>

          {submittedRef ? (
            /* =====================================================================
               SUCCESS CONFIRMATION STATE
               ===================================================================== */
            <div className="py-8 my-auto text-center flex flex-col items-center animate-fadeIn">
              <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading text-[#F5F2EC] font-normal mb-2">
                Thank you for contacting AURA.
              </h3>

              <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-md mb-6 leading-relaxed">
                Your enquiry has been received. Our export trade desk will review your specifications and connect through your preferred contact channel within 24 hours.
              </p>

              <div className="rounded-2xl bg-[#141417] border border-[#26262B] p-4 text-left w-full max-w-md mb-6 text-xs text-neutral-400 space-y-2">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-neutral-500">Reference ID:</span>
                  <span className="font-mono text-[#D8AB64] font-semibold">{submittedRef}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-neutral-500">Product / Category:</span>
                  <span className="text-white font-medium truncate max-w-[220px]">{productName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Estimated Volume:</span>
                  <span className="text-white font-mono">{formattedQuantity}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full max-w-md py-3.5 rounded-xl bg-gradient-to-r from-[#F5D59F] via-[#E2BC86] to-[#CF9B55] hover:brightness-105 active:scale-[0.99] text-black font-bold uppercase tracking-wider text-xs transition-all cursor-pointer shadow-lg"
              >
                Done
              </button>
            </div>
          ) : (
            /* =====================================================================
               FORM STATE (PIXEL-BY-PIXEL IMPLEMENTATION)
               ===================================================================== */
            <form onSubmit={handleSubmit} onFocus={handleFormInteraction} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                  <X className="h-4 w-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* 1. Contact Details Section */}
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-3">
                  Contact Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-medium text-white mb-1.5">
                      Full Name <span className="text-[#D8AB64]">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <User className="w-4 h-4 text-[#D8AB64] absolute left-3.5 pointer-events-none" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. David Richardson"
                        className="w-full bg-[#141417] border border-[#26262B] focus:border-[#D8AB64] rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Business Email or WhatsApp */}
                  <div>
                    <label className="block text-xs font-medium text-white mb-1.5">
                      Business Email or WhatsApp <span className="text-[#D8AB64]">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Mail className="w-4 h-4 text-[#D8AB64] absolute left-3.5 pointer-events-none" />
                      <input
                        type="text"
                        required
                        value={contactIdentifier}
                        onChange={(e) => setContactIdentifier(e.target.value)}
                        placeholder="e.g. procurement@company.com"
                        className="w-full bg-[#141417] border border-[#26262B] focus:border-[#D8AB64] rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Enquiry Details Section */}
              <div className="pt-1">
                <h3 className="text-sm sm:text-base font-bold text-white mb-3">
                  Enquiry Details
                </h3>

                {/* Estimated Quantity + Unit */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
                  <div className="sm:col-span-6">
                    <label className="block text-xs font-medium text-white mb-1.5">
                      Estimated Quantity
                    </label>
                    <div className="relative flex items-center">
                      <Package className="w-4 h-4 text-[#D8AB64] absolute left-3.5 pointer-events-none" />
                      <input
                        type="text"
                        disabled={quantityUnit === 'Not Decided'}
                        value={quantityAmount}
                        onChange={(e) => setQuantityAmount(e.target.value)}
                        placeholder={quantityUnit === 'Not Decided' ? 'To be discussed' : 'e.g. 25'}
                        className="w-full bg-[#141417] border border-[#26262B] focus:border-[#D8AB64] disabled:opacity-50 rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Unit Segmented Control */}
                  <div className="sm:col-span-6">
                    <label className="block text-xs font-medium text-white mb-1.5">
                      Unit
                    </label>
                    <div className="flex items-center bg-[#141417] border border-[#26262B] rounded-xl p-1 h-[39px]">
                      {availableUnits.map((u) => {
                        const isSelected = quantityUnit === u;
                        return (
                          <button
                            key={u}
                            type="button"
                            onClick={() => {
                              setQuantityUnit(u);
                              if (u === 'Not Decided') setQuantityAmount('');
                            }}
                            className={`flex-1 py-1 px-1.5 text-center text-xs font-medium transition-all cursor-pointer truncate rounded-lg ${
                              isSelected
                                ? 'border border-[#D8AB64] text-[#D8AB64] bg-[#D8AB64]/10 font-semibold'
                                : 'text-neutral-400 hover:text-white border border-transparent'
                            }`}
                          >
                            {u}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Destination Country (Optional) */}
                <div className="mt-3.5">
                  <label className="block text-xs font-medium text-white mb-1.5">
                    Destination Country <span className="text-neutral-400 font-normal ml-1">(Optional)</span>
                  </label>
                  <div className="relative flex items-center">
                    <Search className="w-4 h-4 text-[#D8AB64] absolute left-3.5 pointer-events-none" />
                    <input
                      type="text"
                      value={destinationCountry}
                      onChange={(e) => setDestinationCountry(e.target.value)}
                      placeholder="e.g. UAE, EU, USA"
                      className="w-full bg-[#141417] border border-[#26262B] focus:border-[#D8AB64] rounded-xl pl-10 pr-9 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                    <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3 pointer-events-none" />
                  </div>
                </div>

                {/* Additional Requirements (Optional) */}
                <div className="mt-3.5">
                  <label className="block text-xs font-medium text-white mb-1.5">
                    Additional Requirements <span className="text-neutral-400 font-normal ml-1">(Optional)</span>
                  </label>
                  <div className="relative">
                    <PenLine className="w-4 h-4 text-[#D8AB64] absolute left-3.5 top-3 pointer-events-none" />
                    <textarea
                      rows={2}
                      value={additionalRequirements}
                      onChange={(e) => setAdditionalRequirements(e.target.value)}
                      placeholder="Tell us about your preferred specifications, certifications, packaging, or timeline."
                      className="w-full bg-[#141417] border border-[#26262B] focus:border-[#D8AB64] rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors resize-none leading-relaxed"
                    />
                  </div>
                </div>

                {/* Advanced Procurement Details (Optional) - Collapsible Accordion */}
                <div className="mt-3.5">
                  <button
                    type="button"
                    onClick={() => {
                      const next = !showAdvancedDetails;
                      setShowAdvancedDetails(next);
                      if (next) trackContactEvent('advanced_requirements_expanded', { productName, vertical });
                    }}
                    className="w-full bg-[#141417] border border-[#26262B] hover:border-neutral-600 rounded-xl px-4 py-3 flex items-center justify-between text-left transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-[#D8AB64] shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                          <span>Advanced Procurement Details</span>
                          <span className="text-neutral-400 font-normal text-xs">(Optional)</span>
                        </div>
                        <div className="text-[11px] text-neutral-400 mt-0.5">
                          Grade, packaging, port, incoterm and other specifications
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
                        showAdvancedDetails ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </button>

                  {/* Expanded Advanced Inputs */}
                  {showAdvancedDetails && (
                    <div className="mt-2.5 p-3.5 rounded-xl bg-[#141417] border border-[#26262B] space-y-3 animate-fadeIn text-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-mono text-neutral-400 uppercase mb-1">
                            {vertical === 'jewellery' ? 'Target Metal / Finish Preference' : vertical === 'textiles' ? 'Target Fibre / Weave' : 'Target Grade or Mesh'}
                          </label>
                          <input
                            type="text"
                            value={targetSpecification}
                            onChange={(e) => setTargetSpecification(e.target.value)}
                            placeholder={vertical === 'jewellery' ? 'e.g. 22K Antique Matte or 925 Silver' : vertical === 'textiles' ? 'e.g. Pure Silk Korvai or 40s Cotton' : 'e.g. Salem Double-Polished or 80 Mesh'}
                            className="w-full bg-[#0D0D10] border border-[#26262B] rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D8AB64]"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono text-neutral-400 uppercase mb-1">
                            {vertical === 'jewellery' ? 'Packaging / Presentation' : vertical === 'textiles' ? 'Fabric Width / Finishing' : 'Bulk / Retail Packaging'}
                          </label>
                          <input
                            type="text"
                            value={preferredFinishingOrPackaging}
                            onChange={(e) => setPreferredFinishingOrPackaging(e.target.value)}
                            placeholder={vertical === 'jewellery' ? 'e.g. Velvet Gift Boxes or Barcode-Ready' : vertical === 'textiles' ? 'e.g. 48-inch Width / Pre-Shrunk' : 'e.g. 25kg PP Sacks or Stand-up Pouches'}
                            className="w-full bg-[#0D0D10] border border-[#26262B] rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D8AB64]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-mono text-neutral-400 uppercase mb-1">
                            Port of Discharge
                          </label>
                          <input
                            type="text"
                            value={destinationPort}
                            onChange={(e) => setDestinationPort(e.target.value)}
                            placeholder="e.g. Jebel Ali, Felixstowe, Newark"
                            className="w-full bg-[#0D0D10] border border-[#26262B] rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D8AB64]"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono text-neutral-400 uppercase mb-1">
                            Preferred Incoterm
                          </label>
                          <select
                            value={preferredIncoterm}
                            onChange={(e) => setPreferredIncoterm(e.target.value)}
                            className="w-full bg-[#0D0D10] border border-[#26262B] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D8AB64]"
                          >
                            <option value="FOB">FOB (Indian Port)</option>
                            <option value="CIF">CIF (Destination Port)</option>
                            <option value="CFR">CFR (Cost & Freight)</option>
                            <option value="EXW">EXW (Ex Works)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-5 py-3.5 rounded-xl bg-gradient-to-r from-[#F5D59F] via-[#E2BC86] to-[#CF9B55] hover:brightness-105 active:scale-[0.99] text-black font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-black" />
                      <span>SENDING ENQUIRY...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND ENQUIRY</span>
                      <Send className="h-4 w-4 text-black" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-neutral-400 font-mono mt-2.5">
                  <ShieldCheck className="h-3 w-3 text-[#D8AB64]" />
                  <span>Direct trade desk response within 24 hours. Confidential procurement.</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

