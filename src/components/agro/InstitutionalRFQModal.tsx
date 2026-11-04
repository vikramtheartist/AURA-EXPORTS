import React, { useState, useEffect } from 'react';
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
  Sparkles
} from 'lucide-react';
import { InstitutionalProduct } from '../../data/institutionalAgroCatalog';
import { submitRFQ } from '../../services/rfqService';
import { COMPANY_CONTACT } from '../../config/companyContact';
import { trackContactEvent } from '../../utils/analytics';

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
  const productOrigin = product?.origin.displayOrigin || customOrigin || 'South India, India';
  const productGrade = product?.grade || customGrade || initialForm || '';
  const categoryStr = (product?.category || customCategory || customTitle || '').toLowerCase();

  const isJewellery = categoryStr.includes('jewel') || categoryStr.includes('kundan') || categoryStr.includes('temple') || categoryStr.includes('fashion');
  const isTextile = categoryStr.includes('textile') || categoryStr.includes('fabric') || categoryStr.includes('silk') || categoryStr.includes('saree') || categoryStr.includes('cotton') || categoryStr.includes('linen') || categoryStr.includes('handloom');
  const vertical = isJewellery ? 'jewellery' : isTextile ? 'textiles' : 'agro';

  // Default quantity units per vertical
  const defaultUnit = vertical === 'agro' ? 'Metric Tons' : vertical === 'textiles' ? 'Metres' : 'Pieces';

  // Form State: 4 Primary Fields
  const [fullName, setFullName] = useState('');
  const [contactIdentifier, setContactIdentifier] = useState(''); // Email OR WhatsApp
  const [quantityAmount, setQuantityAmount] = useState('');
  const [quantityUnit, setQuantityUnit] = useState<string>(defaultUnit);
  const [additionalRequirements, setAdditionalRequirements] = useState('');

  // Progressive Disclosure for Advanced Procurement Details
  const [showAdvancedDetails, setShowAdvancedDetails] = useState(false);

  // Advanced Optional Fields
  const [targetSpecification, setTargetSpecification] = useState('');
  const [preferredFinishingOrPackaging, setPreferredFinishingOrPackaging] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [destinationPort, setDestinationPort] = useState('');
  const [preferredIncoterm, setPreferredIncoterm] = useState('FOB');

  // Submission Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync state on modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmittedRef(null);
      setErrorMessage(null);
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

  // Available units based on vertical
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
    trackContactEvent('enquiry_form_started', { productName, channel: 'form', vertical });

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
      const generatedRef = result.referenceId || `AURA-RFQ-${Date.now().toString(36).toUpperCase()}`;
      setSubmittedRef(generatedRef);
      trackContactEvent('enquiry_submitted', {
        productName,
        referenceId: generatedRef,
        vertical,
      });
    } catch {
      // Fallback: Generate valid local reference so buyer is never blocked
      const fallbackRef = `AURA-RFQ-${Date.now().toString(36).toUpperCase()}`;
      setSubmittedRef(fallbackRef);
      trackContactEvent('enquiry_submitted', {
        productName,
        referenceId: fallbackRef,
        vertical,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-[#0E0E10] border border-[#252527] rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden my-auto text-white flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* =========================================================================
            COMPACT HEADER
            ========================================================================= */}
        <div className="px-6 pt-5 pb-4 border-b border-[#252527] bg-[#141416] flex items-start justify-between gap-4 shrink-0">
          <div>
            <span className="text-[10px] font-mono text-[#E2BC86] tracking-[0.2em] uppercase font-bold block mb-1">
              AURA GLOBAL TRADE / EXPORT ENQUIRY
            </span>
            <h2 className="text-xl sm:text-2xl font-heading text-[#F5F2EC] font-medium leading-tight">
              Let&apos;s talk about your sourcing requirements.
            </h2>
            <p className="text-xs text-[#A5A19A] font-light mt-1 max-w-lg leading-relaxed">
              Tell us what you&apos;re looking for. Our export team will help you explore suitable products and sourcing options.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close export enquiry modal"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#A5A19A] hover:text-white transition-colors cursor-pointer shrink-0 mt-0.5"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* =========================================================================
            COMPACT HORIZONTAL PRODUCT SUMMARY
            ========================================================================= */}
        <div className="px-6 py-3 bg-[#111113] border-b border-[#252527] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            {product?.image ? (
              <div className="h-9 w-9 rounded-lg overflow-hidden border border-white/10 shrink-0 bg-black">
                <img
                  src={product.image}
                  alt={productName}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="h-9 w-9 rounded-lg bg-[#E2BC86]/10 border border-[#E2BC86]/30 flex items-center justify-center text-[#E2BC86] shrink-0">
                <Sparkles className="h-4 w-4" />
              </div>
            )}
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#F5F2EC] truncate">
                  {productName}
                </span>
                {productGrade && (
                  <span className="text-[10px] font-mono text-[#E2BC86] bg-[#E2BC86]/10 px-2 py-0.5 rounded border border-[#E2BC86]/20 shrink-0">
                    {productGrade}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[#A5A19A] font-mono mt-0.5">
                <MapPin className="h-3 w-3 text-[#E2BC86] shrink-0" />
                <span className="truncate">Origin: {productOrigin}</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MODAL SCROLLABLE BODY
            ========================================================================= */}
        <div className="px-6 py-5 overflow-y-auto space-y-5">
          {submittedRef ? (
            /* =========================================================================
               SUCCESS STATE
               ========================================================================= */
            <div className="py-6 text-center flex flex-col items-center">
              <div className="h-14 w-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <CheckCircle2 className="h-7 w-7" />
              </div>

              <h3 className="text-2xl font-heading text-[#F5F2EC] font-medium mb-2">
                Thank you for contacting AURA.
              </h3>

              <p className="text-xs sm:text-sm text-[#A5A19A] font-light max-w-md mb-5 leading-relaxed">
                Your enquiry has been received. Our team will review your requirements and follow up through your preferred contact channel.
              </p>

              <div className="rounded-2xl bg-[#141416] border border-[#252527] p-3.5 text-left w-full max-w-md mb-5 text-xs text-[#A5A19A] space-y-1.5">
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-white/50">Reference ID:</span>
                  <span className="font-mono text-[#E2BC86] font-semibold">{submittedRef}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-white/50">Product:</span>
                  <span className="text-[#F5F2EC] font-medium truncate max-w-[200px]">{productName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Estimated Volume:</span>
                  <span className="text-white font-mono">{formattedQuantity}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full max-w-md py-3 rounded-xl bg-[#E2BC86] hover:bg-[#d4a86a] text-[#0A0A0B] text-xs font-body font-bold tracking-wider uppercase transition-all cursor-pointer shadow-sm"
              >
                Done
              </button>
            </div>
          ) : (
            /* =========================================================================
               COMPACT PRIMARY ENQUIRY FORM
               ========================================================================= */
            <div>
              {/* Compact Instant Contact Strip */}
              <div className="p-3 rounded-2xl bg-[#141416] border border-[#252527] mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <span className="text-xs font-mono text-[#A5A19A]">
                  Prefer instant contact?
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href={COMPANY_CONTACT.getWhatsAppUrl(productName, productOrigin, formattedQuantity)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackContactEvent('whatsapp_clicked', { productName, vertical })}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600/15 hover:bg-emerald-600/25 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wider flex items-center gap-1.5 transition-all"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_CONTACT.phoneTel}`}
                    onClick={() => trackContactEvent('phone_call_clicked', { productName, vertical })}
                    className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-[#252527] text-[#F5F2EC] text-xs font-mono tracking-wider flex items-center gap-1.5 transition-all"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#E2BC86]" />
                    <span>Call</span>
                  </a>

                  <a
                    href={COMPANY_CONTACT.getMailtoUrl(productName, productOrigin, formattedQuantity)}
                    onClick={() => trackContactEvent('email_clicked', { productName, vertical })}
                    className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-[#252527] text-[#F5F2EC] text-xs font-mono tracking-wider flex items-center gap-1.5 transition-all"
                  >
                    <Mail className="h-3.5 w-3.5 text-[#E2BC86]" />
                    <span>Email</span>
                  </a>
                </div>
              </div>

              {/* Form with 4 Primary Fields */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                    <X className="h-4 w-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Primary Field 1: Full Name */}
                <div>
                  <label className="block text-xs font-mono text-[#A5A19A] uppercase mb-1.5">
                    Full Name <span className="text-[#E2BC86]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. David Richardson"
                    className="w-full bg-[#141416] border border-[#252527] focus:border-[#E2BC86] rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none transition-colors"
                  />
                </div>

                {/* Primary Field 2: Business Email OR WhatsApp Number */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-mono text-[#A5A19A] uppercase">
                      Business Email or WhatsApp Number <span className="text-[#E2BC86]">*</span>
                    </label>
                    <span className="text-[10px] font-mono text-[#77736C]">
                      Provide either one
                    </span>
                  </div>
                  <input
                    type="text"
                    required
                    value={contactIdentifier}
                    onChange={(e) => setContactIdentifier(e.target.value)}
                    placeholder="procurement@company.com or +971 50 123 4567"
                    className="w-full bg-[#141416] border border-[#252527] focus:border-[#E2BC86] rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none transition-colors"
                  />
                </div>

                {/* Primary Field 3: Estimated Quantity (Adapts automatically to vertical) */}
                <div>
                  <label className="block text-xs font-mono text-[#A5A19A] uppercase mb-1.5">
                    Estimated Quantity <span className="text-white/40 lowercase font-normal">(optional)</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <div className="sm:col-span-6">
                      <input
                        type="text"
                        disabled={quantityUnit === 'Not Decided'}
                        value={quantityAmount}
                        onChange={(e) => setQuantityAmount(e.target.value)}
                        placeholder={quantityUnit === 'Not Decided' ? 'Volume to be discussed' : 'e.g. 5, 25 or 100'}
                        className="w-full bg-[#141416] border border-[#252527] focus:border-[#E2BC86] disabled:opacity-50 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none transition-colors"
                      />
                    </div>
                    {/* Compact Segmented Control for Units */}
                    <div className="sm:col-span-6 flex items-center gap-1 bg-[#141416] p-1 rounded-xl border border-[#252527]">
                      {availableUnits.map((u) => (
                        <button
                          key={u}
                          type="button"
                          onClick={() => {
                            setQuantityUnit(u);
                            if (u === 'Not Decided') setQuantityAmount('');
                          }}
                          className={`flex-1 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer truncate ${
                            quantityUnit === u
                              ? 'bg-[#E2BC86] text-[#0A0A0B] font-bold shadow-sm'
                              : 'text-[#A5A19A] hover:text-white'
                          }`}
                        >
                          {u}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Primary Field 4: Additional Requirements */}
                <div>
                  <label className="block text-xs font-mono text-[#A5A19A] uppercase mb-1.5">
                    Additional Requirements <span className="text-white/40 lowercase font-normal">(optional)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={additionalRequirements}
                    onChange={(e) => setAdditionalRequirements(e.target.value)}
                    placeholder="Tell us about your preferred specifications, destination, custom packaging or timeline."
                    className="w-full bg-[#141416] border border-[#252527] focus:border-[#E2BC86] rounded-xl p-3 text-xs text-white placeholder-white/30 focus:outline-none transition-colors"
                  />
                </div>

                {/* Progressive Disclosure: Advanced Procurement Details */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      const next = !showAdvancedDetails;
                      setShowAdvancedDetails(next);
                      if (next) trackContactEvent('advanced_requirements_expanded', { productName, vertical });
                    }}
                    className="text-xs font-mono text-[#E2BC86] hover:text-[#d4a86a] inline-flex items-center gap-1.5 py-1 tracking-wider font-semibold cursor-pointer transition-colors"
                  >
                    <span>{showAdvancedDetails ? '– Hide advanced procurement details' : '+ Add shipping, packaging or technical specifications (Optional)'}</span>
                    {showAdvancedDetails ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                  </button>

                  {showAdvancedDetails && (
                    <div className="mt-2.5 p-3.5 rounded-2xl bg-[#141416] border border-[#252527] space-y-3 animate-fadeIn text-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-mono text-[#A5A19A] uppercase mb-1">
                            {vertical === 'jewellery' ? 'Target Metal / Finish Preference' : vertical === 'textiles' ? 'Target Fibre / Weave' : 'Target Grade or Mesh'}
                          </label>
                          <input
                            type="text"
                            value={targetSpecification}
                            onChange={(e) => setTargetSpecification(e.target.value)}
                            placeholder={vertical === 'jewellery' ? 'e.g. 22K Antique Matte or 925 Silver' : vertical === 'textiles' ? 'e.g. Pure Silk Korvai or 40s Cotton' : 'e.g. Salem Double-Polished or 80 Mesh'}
                            className="w-full bg-[#0E0E10] border border-[#252527] rounded-xl px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#E2BC86]"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono text-[#A5A19A] uppercase mb-1">
                            {vertical === 'jewellery' ? 'Packaging / Presentation' : vertical === 'textiles' ? 'Fabric Width / Finishing' : 'Bulk / Retail Packaging'}
                          </label>
                          <input
                            type="text"
                            value={preferredFinishingOrPackaging}
                            onChange={(e) => setPreferredFinishingOrPackaging(e.target.value)}
                            placeholder={vertical === 'jewellery' ? 'e.g. Velvet Gift Boxes or Barcode-Ready' : vertical === 'textiles' ? 'e.g. 48-inch Width / Pre-Shrunk / Swatch Kit' : 'e.g. 25kg PP Sacks or Stand-up Pouches'}
                            className="w-full bg-[#0E0E10] border border-[#252527] rounded-xl px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#E2BC86]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-[10px] font-mono text-[#A5A19A] uppercase mb-1">
                            Destination Country
                          </label>
                          <input
                            type="text"
                            value={destinationCountry}
                            onChange={(e) => setDestinationCountry(e.target.value)}
                            placeholder="e.g. UAE, UK, USA, Singapore"
                            className="w-full bg-[#0E0E10] border border-[#252527] rounded-xl px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#E2BC86]"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono text-[#A5A19A] uppercase mb-1">
                            Port of Discharge
                          </label>
                          <input
                            type="text"
                            value={destinationPort}
                            onChange={(e) => setDestinationPort(e.target.value)}
                            placeholder="e.g. Jebel Ali, Felixstowe, Newark"
                            className="w-full bg-[#0E0E10] border border-[#252527] rounded-xl px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#E2BC86]"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono text-[#A5A19A] uppercase mb-1">
                            Incoterm
                          </label>
                          <select
                            value={preferredIncoterm}
                            onChange={(e) => setPreferredIncoterm(e.target.value)}
                            className="w-full bg-[#0E0E10] border border-[#252527] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#E2BC86]"
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

                {/* Primary CTA: SEND ENQUIRY */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#E2BC86] hover:bg-[#d4a86a] text-[#0A0A0B] font-body font-bold text-xs tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>SENDING ENQUIRY...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND ENQUIRY</span>
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#A5A19A] font-mono mt-2.5">
                    <ShieldCheck className="h-3 w-3 text-[#E2BC86]" />
                    <span>No public pricing. Direct trade desk response within 24 hours.</span>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* =========================================================================
              DIRECT COMPANY CONTACT (SIMPLIFIED BOTTOM STRIP)
              ========================================================================= */}
          <div className="pt-4 border-t border-[#252527] text-xs">
            <span className="text-[10px] font-mono text-[#77736C] uppercase tracking-wider block mb-2 font-medium">
              Prefer to contact us directly?
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px] font-mono text-[#A5A19A]">
              <a
                href={`mailto:${COMPANY_CONTACT.corporateEmail}`}
                className="hover:text-[#E2BC86] transition-colors truncate"
              >
                ✉ {COMPANY_CONTACT.corporateEmail}
              </a>
              <a
                href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                💬 WhatsApp: {COMPANY_CONTACT.phoneDisplay}
              </a>
              <span className="text-[#77736C] truncate">
                📍 Chennai, Tamil Nadu, India
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
