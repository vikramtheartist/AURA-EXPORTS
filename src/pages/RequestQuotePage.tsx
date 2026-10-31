import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft, ArrowRight, ShieldCheck, Check, Globe, HelpCircle, FileText, Send, AlertCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/procurement/Breadcrumbs';
import { submitRFQ, validateRFQ } from '../services/rfqService';
import { RFQRequest, RFQSubmissionResult } from '../types/rfq';

export default function RequestQuotePage() {
  const [searchParams] = useSearchParams();
  const preselectedProduct = searchParams.get('product') || '';
  const preselectedCategory = searchParams.get('category') || '';
  const preselectedForm = searchParams.get('form') || '';
  const preselectedRequirement = searchParams.get('requirement') || '';

  const [step, setStep] = useState<1 | 2>(1);

  // Initializing state with intelligent defaults from URL query parameters
  const [formData, setFormData] = useState<RFQRequest>({
    productCategory: 'turmeric',
    productRequirement: '',
    quantity: '',
    destinationCountry: '',
    destinationPort: '',
    timeline: '',
    buyerName: '',
    companyName: '',
    businessEmail: '',
    phone: '',
    website: '',
    procurementType: 'Importer',
    incoterm: 'FOB',
    additionalRequirements: '',
  });

  // Honeypot for spam prevention
  const [honeypot, setHoneypot] = useState('');

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedResult, setSubmittedResult] = useState<RFQSubmissionResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    let cat = 'agro-products';
    let req = '';

    if (preselectedCategory === 'agro-products' || preselectedCategory === 'spices' || preselectedProduct.includes('turmeric') || preselectedProduct.includes('pepper') || preselectedProduct.includes('chilli') || preselectedProduct.includes('moringa') || preselectedProduct.includes('drumstick') || preselectedProduct.includes('rice')) {
      cat = 'agro-products';
      req = preselectedRequirement || (preselectedProduct 
        ? `Sourcing quotation and specification request for ${preselectedProduct.replace(/-/g, ' ')}.` 
        : 'Agro products bulk sourcing requirement (Spices, commodities or fresh produce).');
    } else if (preselectedProduct === 'turmeric') {
      cat = 'turmeric';
      req = preselectedForm
        ? `Turmeric (${preselectedForm}) specification for global procurement.`
        : 'Turmeric whole fingers / fine powder sourcing requirement.';
    } else if (preselectedProduct === 'jewelry' || preselectedCategory === 'jewelry') {
      cat = 'jewelry';
      req = preselectedForm
        ? `Fashion jewelry collection (${preselectedForm}) design & manufacturing inquiry.`
        : 'Contemporary fashion jewelry production run.';
    } else if (preselectedProduct === 'textiles' || preselectedCategory === 'textiles') {
      cat = 'textiles';
      req = preselectedForm
        ? `Sustainable textile sourcing (${preselectedForm}) fabric order.`
        : 'Natural / organic woven fabric yardage requirement.';
    }

    if (preselectedRequirement) {
      req = preselectedRequirement;
    }

    setFormData((prev) => ({
      ...prev,
      productCategory: cat,
      productRequirement: req || prev.productRequirement,
    }));
  }, [preselectedProduct, preselectedCategory, preselectedForm, preselectedRequirement]);

  const handleStep1Continue = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.productCategory) {
      setErrorMsg('Please select a product category.');
      return;
    }
    if (!formData.productRequirement || formData.productRequirement.trim().length < 5) {
      setErrorMsg('Please describe your product requirement (minimum 5 characters).');
      return;
    }
    if (!formData.destinationCountry) {
      setErrorMsg('Please specify the destination country.');
      return;
    }

    setStep(2);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) {
      // Silently discard spam
      return;
    }

    setErrorMsg(null);
    const validation = validateRFQ(formData);
    if (!validation.valid) {
      setErrorMsg(validation.errors[0] || 'Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await submitRFQ(formData);
      setSubmittedResult(res);
      setIsSubmitting(false);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    } catch (err: any) {
      setIsSubmitting(false);
      setErrorMsg(
        err.message || 'We could not submit the request right now. Please try again or contact the AURA Trade Desk directly.'
      );
    }
  };

  return (
    <div className="w-full pt-28 pb-20" id="aura-rfq-gateway">
      <SEOHead pageKey="requestQuote" />

      {/* Semantic Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Request a Quote', href: '/request-quote' },
        ]}
      />

      {/* Header (Section 24) */}
      <header className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-4 mb-12">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-4 py-1.5">
          <Globe className="h-3.5 w-3.5 text-[#dcb782]" />
          <span className="text-xs font-mono text-[#dcb782] tracking-wider uppercase font-semibold">
            INSTITUTIONAL B2B TRADE DESK
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white font-medium tracking-tight">
          Request a Trade Quote
        </h1>
        <p className="text-xl text-[#dcb782] font-heading italic font-light">
          Tell us what you are sourcing.
        </p>
        <p className="text-[#D5C8B7] font-body text-sm md:text-base max-w-2xl font-light leading-relaxed">
          We&apos;ll structure the requirement around product, quantity, destination and commercial terms. Sourcing contracts are customized to your technical specification and compliance needs.
        </p>
        <div className="flex items-center gap-2 text-xs text-[#dfd1b9]/50 font-light mt-1">
          <span>Looking for non-commercial corporate or legal inquiries?</span>
          <Link to="/contact" className="text-[#dcb782] hover:underline font-normal">
            General Contact Desk →
          </Link>
        </div>
      </header>

      {/* Main RFQ Form Experience */}
      <main className="max-w-3xl mx-auto px-6">
        {submittedResult ? (
          /* Confirmation Screen (Section 22 & 23 Transparent Delivery Architecture) */
          <div className="rounded-3xl border border-[#dcb782]/30 bg-[#121211] p-8 md:p-12 text-center flex flex-col items-center gap-6 shadow-2xl">
            <div className="h-16 w-16 rounded-full bg-[#dcb782]/10 border border-[#dcb782]/40 flex items-center justify-center">
              <Check className="h-8 w-8 text-[#dcb782]" />
            </div>

            {submittedResult.isLiveDelivery ? (
              <>
                <span className="text-xs font-mono tracking-widest text-[#dcb782] uppercase font-bold">
                  COMMERCIAL INTAKE TRANSMITTED
                </span>
                <h2 className="text-3xl md:text-4xl font-heading text-white font-medium">
                  Your requirement has been received.
                </h2>
                <p className="text-sm md:text-base text-[#D5C8B7] font-light max-w-xl leading-relaxed">
                  AURA Trade Desk will review your requirement and confirm the relevant product, sourcing pathway and commercial details.
                </p>
              </>
            ) : (
              <>
                <span className="text-xs font-mono tracking-widest text-[#dcb782] uppercase font-bold">
                  REQUIREMENT CAPTURED LOCALLY · PREVIEW MODE
                </span>
                <h2 className="text-3xl md:text-4xl font-heading text-white font-medium">
                  Requirement Captured Locally
                </h2>
                <p className="text-sm md:text-base text-[#D5C8B7] font-light max-w-xl leading-relaxed">
                  This preview environment does not yet deliver RFQs to the AURA Trade Desk server. Your requirement has been validated and recorded to the local audit docket.
                </p>
              </>
            )}

            {submittedResult.referenceId && (
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-[#dfd1b9] flex flex-col sm:flex-row items-center gap-2">
                <span className="text-[#ab8558]">Docket Reference ID:</span>
                <span className="text-white font-bold">{submittedResult.referenceId}</span>
              </div>
            )}

            {!submittedResult.isLiveDelivery && (
              <div className="p-4 rounded-2xl bg-[#dcb782]/5 border border-[#dcb782]/20 text-xs text-[#dfd1b9] max-w-lg leading-relaxed text-left flex items-start gap-3">
                <HelpCircle className="h-5 w-5 text-[#dcb782] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-semibold block mb-1">Direct Trade Desk Dispatch:</strong>
                  To immediately initiate this sourcing inquiry with our trade desk officers, email this requirement with Docket Reference{' '}
                  <code className="text-[#dcb782] font-mono">{submittedResult.referenceId}</code> directly to{' '}
                  <a href={`mailto:contact@auraexport.co?subject=Trade%20Desk%20Requirement%20${submittedResult.referenceId}&body=Docket%20Reference:%20${submittedResult.referenceId}%0AProduct:%20${encodeURIComponent(formData.productCategory)}%0ARequirement:%20${encodeURIComponent(formData.productRequirement)}%0ADestination:%20${encodeURIComponent(formData.destinationCountry || '')}`} className="text-[#dcb782] underline font-medium">
                    contact@auraexport.co
                  </a>{' '}
                  or contact our desk at <span className="text-white font-medium">+91 9361990229</span>.
                </div>
              </div>
            )}

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-[#dfd1b9]/70 max-w-lg leading-relaxed text-left flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-[#dcb782] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold">Verification & Sourcing Review: </strong>
                A designated trade officer in Chennai verifies raw material availability, applicable testing documentation, and container loading schedules before issuing formal proforma commercial terms.
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                to="/products"
                className="bg-[#dcb782] text-black hover:bg-white transition-all font-body font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-xl shadow-lg"
              >
                Return to Product Catalog
              </Link>
              <Link
                to="/quality-compliance"
                className="border border-white/10 hover:border-white text-white text-xs font-body font-bold tracking-wider uppercase px-6 py-3.5 rounded-xl hover:bg-white/5 transition-all"
              >
                Explore Quality Architecture
              </Link>
            </div>
          </div>
        ) : (
          /* Multi-Step RFQ Intake Container */
          <div className="rounded-3xl border border-white/10 bg-[#121211] p-8 md:p-12 shadow-2xl relative">
            {/* Step Progress Indicator (Section 57) */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                    step === 1
                      ? 'bg-[#dcb782] text-black'
                      : 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                  }`}
                >
                  {step === 1 ? '1' : <Check className="h-4 w-4" />}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#ab8558] block">STEP 01</span>
                  <span className={`text-xs font-bold ${step === 1 ? 'text-white' : 'text-white/60'}`}>
                    Procurement Requirement
                  </span>
                </div>
              </div>

              <div className="h-[1px] flex-1 max-w-[80px] bg-white/10 mx-4 hidden sm:block" />

              <div className="flex items-center gap-3">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                    step === 2
                      ? 'bg-[#dcb782] text-black'
                      : 'bg-white/5 text-white/40 border border-white/10'
                  }`}
                >
                  2
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#ab8558] block">STEP 02</span>
                  <span className={`text-xs font-bold ${step === 2 ? 'text-white' : 'text-white/40'}`}>
                    Buyer Credentials & Commercials
                  </span>
                </div>
              </div>
            </div>

            {/* Error Notification */}
            {errorMsg && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-200 flex items-start gap-2.5">
                <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Honeypot Field (Invisible to users, traps bots) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="rfq-company-fax">Company Fax</label>
              <input
                id="rfq-company-fax"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {/* STEP 1: REQUIREMENT (Section 25) */}
            {step === 1 && (
              <form onSubmit={handleStep1Continue} className="flex flex-col gap-6" id="rfq-step-1">
                <div>
                  <label htmlFor="rfq-category" className="block text-xs font-mono text-[#dfd1b9]/80 mb-2 font-bold uppercase">
                    Product / Category *
                  </label>
                  <select
                    id="rfq-category"
                    required
                    value={formData.productCategory}
                    onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                    className="w-full bg-[#181816] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#dcb782] cursor-pointer"
                  >
                    <option value="agro-products">Agro Products (Comprehensive Agricultural Portfolio)</option>
                    <option value="spices">Spices & Seasonings (Black Pepper, Cardamom, Cloves, Cinnamon)</option>
                    <option value="turmeric">Turmeric (Whole Fingers / Cold-Milled Powder / Extracts)</option>
                    <option value="chillies">Chillies & Chilli Products (Dried Whole / Powder / Flakes)</option>
                    <option value="fresh-produce">Fresh Agricultural Produce (Drumsticks, Onions, Tomatoes)</option>
                    <option value="moringa">Moringa & Botanical Ingredients (Powder / Leaves)</option>
                    <option value="grains-pulses">Grains & Pulses (Basmati & Non-Basmati Rice, Millets)</option>
                    <option value="jewelry">Fashion & Lifestyle (Contemporary Fashion Jewelry, Brass, Steel)</option>
                    <option value="textiles">Sustainable Textiles (Organic Cotton, Linen, Hemp, Eco-Weaves)</option>
                    <option value="other">Other Indian Sourcing Requirement</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="rfq-requirement" className="block text-xs font-mono text-[#dfd1b9]/80 mb-2 font-bold uppercase">
                    Product Requirement Description *
                  </label>
                  <textarea
                    id="rfq-requirement"
                    required
                    rows={3}
                    placeholder="e.g. Turmeric fingers, premium grade for food ingredient application with certified curcumin assay."
                    value={formData.productRequirement}
                    onChange={(e) => setFormData({ ...formData, productRequirement: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#dcb782] resize-none"
                  />
                  <span className="text-[11px] text-[#dfd1b9]/50 font-light mt-1 block">
                    Describe your required form, grade, target compound percentage, or processing application.
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="rfq-quantity" className="block text-xs font-mono text-[#dfd1b9]/80 mb-2 font-bold uppercase">
                      Estimated Order Volume / Quantity
                    </label>
                    <input
                      id="rfq-quantity"
                      type="text"
                      placeholder="e.g. 5 MT / 1x20ft FCL / 2,000 units"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#dcb782]"
                    />
                  </div>

                  <div>
                    <label htmlFor="rfq-timeline" className="block text-xs font-mono text-[#dfd1b9]/80 mb-2 font-bold uppercase">
                      Target Timeline (Optional)
                    </label>
                    <input
                      id="rfq-timeline"
                      type="text"
                      placeholder="e.g. Q3 shipment / immediate trial"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#dcb782]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="rfq-dest-country" className="block text-xs font-mono text-[#dfd1b9]/80 mb-2 font-bold uppercase">
                      Destination Country *
                    </label>
                    <input
                      id="rfq-dest-country"
                      type="text"
                      required
                      placeholder="e.g. Germany, United States, Japan, UAE"
                      value={formData.destinationCountry}
                      onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#dcb782]"
                    />
                  </div>

                  <div>
                    <label htmlFor="rfq-dest-port" className="block text-xs font-mono text-[#dfd1b9]/80 mb-2 font-bold uppercase">
                      Destination Port (Where applicable)
                    </label>
                    <input
                      id="rfq-dest-port"
                      type="text"
                      placeholder="e.g. Port of Rotterdam, Hamburg, Long Beach"
                      value={formData.destinationPort}
                      onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#dcb782]"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold text-xs tracking-wider uppercase px-8 py-3.5 rounded-xl hover:from-white hover:to-[#dcb782] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <span>Continue to Buyer Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2: BUYER DETAILS & COMMERCIALS (Section 26) */}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" id="rfq-step-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="rfq-name" className="block text-xs font-mono text-[#dfd1b9]/80 mb-2 font-bold uppercase">
                      Representative Name *
                    </label>
                    <input
                      id="rfq-name"
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={formData.buyerName}
                      onChange={(e) => setFormData({ ...formData, buyerName: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#dcb782]"
                    />
                  </div>

                  <div>
                    <label htmlFor="rfq-company" className="block text-xs font-mono text-[#dfd1b9]/80 mb-2 font-bold uppercase">
                      Company / Organization Name *
                    </label>
                    <input
                      id="rfq-company"
                      type="text"
                      required
                      placeholder="e.g. Apex Global Ingredients LLC"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#dcb782]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="rfq-email" className="block text-xs font-mono text-[#dfd1b9]/80 mb-2 font-bold uppercase">
                      Business Email Address *
                    </label>
                    <input
                      id="rfq-email"
                      type="email"
                      required
                      placeholder="marcus@apexingredients.com"
                      value={formData.businessEmail}
                      onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#dcb782]"
                    />
                  </div>

                  <div>
                    <label htmlFor="rfq-phone" className="block text-xs font-mono text-[#dfd1b9]/80 mb-2 font-bold uppercase">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      id="rfq-phone"
                      type="tel"
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#dcb782]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="rfq-website" className="block text-xs font-mono text-[#dfd1b9]/80 mb-2 font-bold uppercase">
                      Company Website (Optional)
                    </label>
                    <input
                      id="rfq-website"
                      type="url"
                      placeholder="https://apexingredients.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#dcb782]"
                    />
                  </div>

                  <div>
                    <label htmlFor="rfq-procurement-type" className="block text-xs font-mono text-[#dfd1b9]/80 mb-2 font-bold uppercase">
                      Procurement Role / Entity Type
                    </label>
                    <select
                      id="rfq-procurement-type"
                      value={formData.procurementType}
                      onChange={(e) => setFormData({ ...formData, procurementType: e.target.value })}
                      className="w-full bg-[#181816] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#dcb782] cursor-pointer"
                    >
                      <option value="Importer">Importer</option>
                      <option value="Distributor">Distributor</option>
                      <option value="Brand">Brand</option>
                      <option value="Manufacturer">Manufacturer</option>
                      <option value="Retailer">Retailer</option>
                      <option value="Private Label">Private Label</option>
                      <option value="Other">Other Institutional Buyer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="rfq-incoterm" className="block text-xs font-mono text-[#dfd1b9]/80 mb-2 font-bold uppercase">
                    Commercial Incoterm Preference
                  </label>
                  <select
                    id="rfq-incoterm"
                    value={formData.incoterm}
                    onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                    className="w-full bg-[#181816] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#dcb782] cursor-pointer"
                  >
                    <option value="FOB">FOB (Free on Board — Chennai / Tuticorin)</option>
                    <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                    <option value="CFR">CFR (Cost & Freight)</option>
                    <option value="Not sure">Not sure / Flexible</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="rfq-additional" className="block text-xs font-mono text-[#dfd1b9]/80 mb-2 font-bold uppercase">
                    Additional Specifications & Compliance Notes
                  </label>
                  <textarea
                    id="rfq-additional"
                    rows={3}
                    placeholder="Provide details on required private labeling, custom packaging, laboratory assays, sample requirements, or destination market regulations..."
                    value={formData.additionalRequirements}
                    onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#dcb782] resize-none"
                  />
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex items-center gap-1.5 text-xs font-mono uppercase text-[#dfd1b9]/70 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Back to Requirement</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold text-xs tracking-wider uppercase px-8 py-3.5 rounded-xl hover:from-white hover:to-[#dcb782] transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="h-4 w-4 border-2 border-black border-t-transparent animate-spin rounded-full" />
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5" />
                        <span>Submit RFQ to Trade Desk</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
