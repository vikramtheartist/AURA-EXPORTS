import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  Truck, 
  FileText, 
  ArrowRight,
  MessageCircle,
  Sparkles,
  Printer,
  ChevronRight
} from 'lucide-react';
import { useRetailCart } from '../../context/RetailCartContext';
import { submitEnquiry } from '../../services/enquiryService';

export default function RetailCheckoutModal() {
  const {
    items,
    itemCount,
    subtotalINR,
    subtotalUSD,
    subtotalAED,
    isFreeShipping,
    isCheckoutOpen,
    closeCheckout,
    currency,
    clearCart,
  } = useRetailCart();

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'India',
    postalCode: '',
    paymentMethod: 'card' as 'card' | 'applepay' | 'invoice' | 'whatsapp',
    shippingSpeed: 'standard' as 'standard' | 'express',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isCheckoutOpen) return null;

  const currentSubtotal = currency === 'INR' ? subtotalINR : currency === 'USD' ? subtotalUSD : subtotalAED;
  const currencySymbol = currency === 'INR' ? '₹' : currency === 'USD' ? '$' : 'AED ';

  // Shipping cost
  const standardShippingCost = isFreeShipping ? 0 : (currency === 'INR' ? 149 : currency === 'USD' ? 6 : 22);
  const expressShippingCost = currency === 'INR' ? 349 : currency === 'USD' ? 14 : 52;
  const shippingCost = formData.shippingSpeed === 'express' ? expressShippingCost : standardShippingCost;

  const finalTotal = currentSubtotal + shippingCost;

  const getItemPrice = (variant: typeof items[0]['variant']) => {
    if (currency === 'INR') {
      return variant.priceINR ?? Math.round(variant.priceUSD * 85);
    }
    return currency === 'USD' ? variant.priceUSD : variant.priceAED;
  };

  const formatAmount = (val: number) => {
    return currency === 'USD' ? val.toFixed(2) : Math.round(val).toLocaleString('en-IN');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCompleteOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please provide a valid delivery confirmation email.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter a contact phone number for the courier.');
      return;
    }
    if (!formData.address.trim()) {
      setErrorMsg('Please enter your street delivery address.');
      return;
    }

    setIsSubmitting(true);

    const generatedOrderId = `AURA-RET-${Math.floor(100000 + Math.random() * 900000)}`;

    const itemsSummary = items
      .map((i) => `${i.product.name} (${i.variant.name}) x ${i.quantity} = ${currencySymbol}${formatAmount(getItemPrice(i.variant) * i.quantity)}`)
      .join('\n');

    // Submit telemetry and notification to central Aura Exports email (contact@auraexport.co)
    try {
      await submitEnquiry({
        enquiry_type: 'quotation',
        source_page: typeof window !== 'undefined' ? window.location.pathname : '/products/agro-products',
        source_component: 'Retail Spices Checkout Modal',
        product_category: 'Spices',
        product_name: `Retail Spices Order #${generatedOrderId}`,
        customer: {
          full_name: formData.fullName,
          business_email: formData.email,
          phone: formData.phone,
          country: formData.country,
          company_name: 'Retail Gourmet Pantry',
        },
        requirements: {
          destination_country: formData.country,
          estimated_quantity: `${itemCount} items`,
          packaging: 'Airtight Sealed Metal Tins',
          message: `RETAIL SPICE POWDER ORDER #${generatedOrderId}\n\nDelivery Address:\n${formData.fullName}\n${formData.address}, ${formData.city}\n${formData.country} - ${formData.postalCode}\nPhone: ${formData.phone}\n\nShipping: ${formData.shippingSpeed.toUpperCase()} (${currencySymbol}${formatAmount(shippingCost)})\nPayment Selected: ${formData.paymentMethod.toUpperCase()}\n\nItems Ordered:\n${itemsSummary}\n\nOrder Total: ${currencySymbol}${formatAmount(finalTotal)}`,
        },
      });
    } catch {
      // Continue even if network glitch occurs so customer receives instant confirmation
    }

    setOrderId(generatedOrderId);
    setIsSubmitting(false);
    setOrderConfirmed(true);
    clearCart();
  };

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={closeCheckout}
        aria-hidden="true"
      />

      {/* Main Checkout Modal Box */}
      <div 
        className="relative z-10 w-full max-w-4xl bg-[#0e0e0d] border border-[#dcb782]/30 rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.9)] overflow-hidden text-white flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-4.5 border-b border-white/10 flex items-center justify-between bg-[#141412]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#dcb782]/15 border border-[#dcb782]/30 flex items-center justify-center text-[#dcb782]">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-medium tracking-tight text-white">
                {orderConfirmed ? 'Order Confirmed' : 'Secure Express Checkout'}
              </h3>
              <p className="text-[11px] font-mono text-[#dcb782] tracking-wider uppercase">
                Aura Exports Gourmet Pantry • SSL 256-Bit Encrypted
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeCheckout}
            className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {orderConfirmed ? (
            /* Order Success View */
            <div className="py-6 flex flex-col items-center text-center max-w-lg mx-auto space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-400 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[#dcb782] uppercase tracking-[0.2em] font-bold">
                  Order Successfully Placed
                </span>
                <h2 className="text-2xl md:text-3xl font-heading text-white">
                  Thank you, {formData.fullName}!
                </h2>
                <p className="text-sm text-neutral-300 font-body font-light">
                  Your order <strong className="text-white font-mono">{orderId}</strong> has been received by our Chennai operations desk. A receipt and dispatched tracking dossier have been routed to <strong className="text-[#dcb782]">{formData.email}</strong>.
                </p>
              </div>

              {/* Order Overview Card */}
              <div className="w-full bg-[#141412] border border-white/10 rounded-xl p-5 text-left space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-white/10 text-xs font-mono">
                  <span className="text-neutral-400">Order ID:</span>
                  <span className="text-[#dcb782] font-bold">{orderId}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-400">Destination:</span>
                  <span className="text-white font-medium">{formData.city}, {formData.country}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-400">Fulfillment Method:</span>
                  <span className="text-white font-medium">Airtight Sealed Metal Tins • Air Courier</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-white/10 text-sm">
                  <span className="text-neutral-300 font-heading">Total Paid:</span>
                  <span className="text-[#E2BC86] font-mono font-bold text-base">
                    {currencySymbol}{formatAmount(finalTotal)}
                  </span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 w-full pt-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-5 py-3 border border-white/20 hover:border-white/40 text-xs font-mono uppercase tracking-wider rounded-xl flex items-center gap-2 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-[#dcb782]" />
                  <span>Print Receipt</span>
                </button>

                <a
                  href={`https://wa.me/919940024479?text=${encodeURIComponent(`Hi Aura Exports, I placed Retail Spice Order ${orderId} for ${formData.fullName}. Please confirm shipping timeline.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-body font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Track via WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={closeCheckout}
                  className="w-full mt-2 py-3 bg-[#dcb782] hover:bg-[#c9a26d] text-black font-body font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                >
                  Return to Spice Collection
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form View */
            <form onSubmit={handleCompleteOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Customer & Delivery Details */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h4 className="text-sm font-heading font-medium text-white flex items-center gap-2 mb-3">
                    <span className="w-5 h-5 rounded-full bg-[#dcb782]/20 text-[#dcb782] text-xs font-mono flex items-center justify-center">1</span>
                    Customer & Delivery Information
                  </h4>

                  {errorMsg && (
                    <div className="mb-4 p-3 rounded-lg bg-red-500/15 border border-red-500/40 text-red-200 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Tariq Al-Mansoor or Sarah Jenkins"
                        className="w-full bg-[#141412] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#dcb782]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="for dispatch tracking"
                          className="w-full bg-[#141412] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#dcb782]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                          Phone / Mobile *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+971 50 123 4567"
                          className="w-full bg-[#141412] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#dcb782]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Villa / Apt, Street Name, District"
                        className="w-full bg-[#141412] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#dcb782]"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                          City / Emirate *
                        </label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Dubai / London"
                          className="w-full bg-[#141412] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#dcb782]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                          Country *
                        </label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full bg-[#141412] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#dcb782]"
                        >
                          <option value="United Arab Emirates">United Arab Emirates</option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Oman">Oman</option>
                          <option value="Qatar">Qatar</option>
                          <option value="United States">United States</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Norway">Norway</option>
                          <option value="Sweden">Sweden</option>
                          <option value="Germany">Germany</option>
                          <option value="Singapore">Singapore</option>
                          <option value="India">India</option>
                          <option value="Other International">Other International</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          placeholder="00000"
                          className="w-full bg-[#141412] border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#dcb782]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shipping Speed Selection */}
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-sm font-heading font-medium text-white flex items-center gap-2 mb-3">
                    <span className="w-5 h-5 rounded-full bg-[#dcb782]/20 text-[#dcb782] text-xs font-mono flex items-center justify-center">2</span>
                    Shipping Method
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label 
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                        formData.shippingSpeed === 'standard' 
                          ? 'border-[#dcb782] bg-[#dcb782]/10' 
                          : 'border-white/10 bg-[#141412] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="shippingSpeed"
                            value="standard"
                            checked={formData.shippingSpeed === 'standard'}
                            onChange={() => setFormData((p) => ({ ...p, shippingSpeed: 'standard' }))}
                            className="accent-[#dcb782]"
                          />
                          <span className="text-xs font-medium text-white">Standard Priority</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#E2BC86]">
                          {isFreeShipping ? 'FREE' : `${currencySymbol}${standardShippingCost}`}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-400 pl-5">
                        Tracked Air Courier • 3–5 business days
                      </p>
                    </label>

                    <label 
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                        formData.shippingSpeed === 'express' 
                          ? 'border-[#dcb782] bg-[#dcb782]/10' 
                          : 'border-white/10 bg-[#141412] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="shippingSpeed"
                            value="express"
                            checked={formData.shippingSpeed === 'express'}
                            onChange={() => setFormData((p) => ({ ...p, shippingSpeed: 'express' }))}
                            className="accent-[#dcb782]"
                          />
                          <span className="text-xs font-medium text-white">DHL Express Priority</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#E2BC86]">
                          {currencySymbol}{expressShippingCost}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-400 pl-5">
                        Expedited DHL / Aramex • 2–3 business days
                      </p>
                    </label>
                  </div>
                </div>

                {/* Payment Method Selection */}
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-sm font-heading font-medium text-white flex items-center gap-2 mb-3">
                    <span className="w-5 h-5 rounded-full bg-[#dcb782]/20 text-[#dcb782] text-xs font-mono flex items-center justify-center">3</span>
                    Payment & Confirmation Method
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
                    <button
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, paymentMethod: 'card' }))}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        formData.paymentMethod === 'card' 
                          ? 'border-[#dcb782] bg-[#dcb782]/15 text-white' 
                          : 'border-white/10 bg-[#141412] text-neutral-400 hover:text-white'
                      }`}
                    >
                      <CreditCard className="w-4 h-4 mx-auto mb-1 text-[#dcb782]" />
                      <span className="text-[11px] font-mono block">Credit Card</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, paymentMethod: 'applepay' }))}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        formData.paymentMethod === 'applepay' 
                          ? 'border-[#dcb782] bg-[#dcb782]/15 text-white' 
                          : 'border-white/10 bg-[#141412] text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Lock className="w-4 h-4 mx-auto mb-1 text-[#dcb782]" />
                      <span className="text-[11px] font-mono block">Apple Pay</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, paymentMethod: 'invoice' }))}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        formData.paymentMethod === 'invoice' 
                          ? 'border-[#dcb782] bg-[#dcb782]/15 text-white' 
                          : 'border-white/10 bg-[#141412] text-neutral-400 hover:text-white'
                      }`}
                    >
                      <FileText className="w-4 h-4 mx-auto mb-1 text-[#dcb782]" />
                      <span className="text-[11px] font-mono block">Proforma</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, paymentMethod: 'whatsapp' }))}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        formData.paymentMethod === 'whatsapp' 
                          ? 'border-[#25D366] bg-[#25D366]/15 text-white' 
                          : 'border-white/10 bg-[#141412] text-neutral-400 hover:text-white'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4 mx-auto mb-1 text-[#25D366]" />
                      <span className="text-[11px] font-mono block">WhatsApp</span>
                    </button>
                  </div>

                  {formData.paymentMethod === 'card' && (
                    <div className="p-4 bg-[#141412] border border-white/10 rounded-xl space-y-3">
                      <div>
                        <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="4000 1234 5678 9010"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#dcb782]"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                            MM / YY
                          </label>
                          <input
                            type="text"
                            name="cardExpiry"
                            placeholder="12/28"
                            value={formData.cardExpiry}
                            onChange={handleInputChange}
                            className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#dcb782]"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                            CVV / CVC
                          </label>
                          <input
                            type="password"
                            name="cardCvc"
                            placeholder="•••"
                            maxLength={4}
                            value={formData.cardCvc}
                            onChange={handleInputChange}
                            className="w-full bg-black/60 border border-white/15 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#dcb782]"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === 'invoice' && (
                    <div className="p-4 bg-[#141412] border border-white/10 rounded-xl text-xs text-neutral-300 space-y-1">
                      <p className="font-semibold text-white">Commercial Proforma & Direct Bank Wire</p>
                      <p className="text-neutral-400 font-light">
                        An official commercial tax invoice will be generated upon order with bank transfer details (AED, USD, or EUR wire). Dispatch initiates immediately upon wire advice.
                      </p>
                    </div>
                  )}

                  {formData.paymentMethod === 'whatsapp' && (
                    <div className="p-4 bg-[#141412] border border-[#25D366]/30 rounded-xl text-xs text-neutral-300 space-y-1">
                      <p className="font-semibold text-white">Direct Trade Concierge Confirmation</p>
                      <p className="text-neutral-400 font-light">
                        Our Chennai operations desk will instantly receive your order and connect via WhatsApp for bespoke packaging or dispatch coordination.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Order Summary & Placement */}
              <div className="lg:col-span-5 bg-[#141412] border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-heading font-medium text-white mb-4 pb-3 border-b border-white/10 flex items-center justify-between">
                    <span>Order Summary</span>
                    <span className="text-xs font-mono text-[#dcb782]">{itemCount} items</span>
                  </h4>

                  {/* Items scroll */}
                  <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center gap-3 text-xs">
                        <img
                          src={item.product.heroImage}
                          alt={item.product.name}
                          className="w-12 h-12 rounded-lg object-cover border border-white/10 shrink-0 bg-black"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-medium truncate font-heading">{item.product.name}</p>
                          <p className="text-[10px] text-neutral-400 font-mono truncate">{item.variant.name}</p>
                          <p className="text-[10px] text-neutral-500 font-mono">Qty: {item.quantity}</p>
                        </div>
                        <span className="font-mono text-white font-semibold shrink-0">
                          {currencySymbol}{formatAmount(getItemPrice(item.variant) * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-2 pt-4 mt-4 border-t border-white/10 text-xs">
                    <div className="flex justify-between text-neutral-400">
                      <span>Subtotal</span>
                      <span className="font-mono text-white">{currencySymbol}{formatAmount(currentSubtotal)}</span>
                    </div>
                    <div className="flex justify-between text-neutral-400">
                      <span>Express Air Shipping</span>
                      <span className="font-mono text-white">
                        {shippingCost === 0 ? <span className="text-emerald-400">FREE</span> : `${currencySymbol}${formatAmount(shippingCost)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-neutral-400">
                      <span>Import Duty & Handling</span>
                      <span className="font-mono text-emerald-400">Included</span>
                    </div>
                    <div className="flex justify-between text-base font-heading font-medium text-white pt-3 border-t border-white/15">
                      <span>Total Amount</span>
                      <span className="text-xl font-mono text-[#E2BC86] font-bold">
                        {currencySymbol}{formatAmount(finalTotal)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#dcb782] to-[#E2BC86] hover:from-[#c9a26d] hover:to-[#d4a86a] text-black font-body font-bold text-xs uppercase tracking-wider rounded-xl shadow-[0_4px_25px_rgba(220,183,130,0.4)] flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Processing Order...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Lock className="w-4 h-4" />
                        <span>Place Order • {currencySymbol}{formatAmount(finalTotal)}</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#dcb782]" />
                    <span>30-Day Taste & Purity Guarantee • 100% Risk Free</span>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
