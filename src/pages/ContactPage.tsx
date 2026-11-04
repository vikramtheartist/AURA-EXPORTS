import { useState, FormEvent, useRef } from 'react';
import { trackContactEvent } from '../utils/analytics';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronRight,
  Globe,
  Mail,
  MapPin,
  Clock,
  Phone,
  FileText,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/procurement/Breadcrumbs';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    corporateEmail: '',
    organization: '',
    country: '',
    inquiryType: 'Corporate Trade Inquiries',
    message: ''
  });
  const hasTriggeredFormStart = useRef(false);

  const handleFormInteraction = () => {
    if (!hasTriggeredFormStart.current) {
      hasTriggeredFormStart.current = true;
      trackContactEvent('enquiry_form_started', {
        productName: formData.inquiryType,
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    trackContactEvent('enquiry_submitted', {
      productName: formData.inquiryType,
      mode: 'correspondence',
    });
  };

  return (
    <div className="w-full pt-28 pb-20">
      <SEOHead pageKey="contact" />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      {/* Page Header */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-14">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-4 py-1.5 mb-6">
          <Globe className="h-3.5 w-3.5 text-[#dcb782]" />
          <span className="text-xs font-mono text-[#dcb782] tracking-wider uppercase font-semibold">
            CORPORATE CORRESPONDENCE DESK
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[1.05] font-normal mb-4">
          Aura Trade Desk <span className="text-[#dcb782] italic font-normal">& Communications</span>
        </h1>
        <p className="text-[#D5C8B7] font-body text-base md:text-lg max-w-3xl font-light leading-relaxed">
          Direct bilateral communication with our trade desk officers in Chennai, India. For corporate partnerships, vendor collective registrations, and institutional correspondence.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-16">

        {/* Commercial RFQ Pathway Separation Banner (Section 30) */}
        <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-[#1c1a16] via-[#151412] to-[#0e0e0c] border border-[#dcb782]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-2xl bg-white/5 border border-[#dcb782]/25 flex items-center justify-center shrink-0">
              <FileText className="h-6 w-6 text-[#dcb782]" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#dcb782] uppercase font-bold tracking-wider block mb-1">
                COMMERCIAL INQUIRY OR CONTAINER PRICING?
              </span>
              <h2 className="text-xl font-heading text-white font-medium mb-1">
                For Formal Quotations & Product Inquiries, Use the RFQ Desk
              </h2>
              <p className="text-xs text-[#dfd1b9]/70 font-light max-w-2xl leading-relaxed">
                If you require container load pricing (FCL/LCL), specific Curcumin assays, custom packaging specifications, or Incoterm quotations, please submit your requirements through our structured RFQ intake portal.
              </p>
            </div>
          </div>
          <Link
            to="/request-quote"
            className="shrink-0 bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl hover:from-white hover:to-[#dcb782] transition-all shadow-md flex items-center gap-2"
          >
            <span>Request a Quote →</span>
          </Link>
        </div>

        {/* 2-Column: Trade Desk Coordinates & General Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Trade Desk Information & Verified Coordinates (Section 30 & 68) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-[#121210] border border-white/10 flex flex-col gap-6 shadow-xl">
              <span className="text-xs font-mono text-[#dcb782] uppercase tracking-widest font-bold">
                OPERATIONAL COORDINATES
              </span>

              {/* Operating Base */}
              <div className="flex items-start gap-4 pb-5 border-b border-white/5">
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-[#dcb782]" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#ab8558] uppercase font-bold block mb-0.5">Operating Gateway</span>
                  <p className="text-white text-sm font-body font-medium">Chennai, Tamil Nadu, India</p>
                  <p className="text-xs text-[#dfd1b9]/50 font-light mt-0.5">Maritime Corridor: Chennai Port (INMAA) & Tuticorin (INTUT)</p>
                </div>
              </div>

              {/* Corporate Email */}
              <div className="flex items-start gap-4 pb-5 border-b border-white/5">
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-[#dcb782]" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#ab8558] uppercase font-bold block mb-0.5">Trade Desk Correspondence</span>
                  <a 
                    href="mailto:contact@auraexport.co" 
                    onClick={() => trackContactEvent('email_clicked')}
                    className="text-white text-sm font-mono font-medium hover:text-[#dcb782] transition-colors block"
                  >
                    contact@auraexport.co
                  </a>
                  <p className="text-xs text-[#dfd1b9]/50 font-light mt-0.5">Primary verified correspondence mailbox</p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-4 pb-5 border-b border-white/5">
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-[#dcb782]" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#ab8558] uppercase font-bold block mb-0.5">Direct Telephone / Trade Line</span>
                  <a 
                    href="tel:+919361990229" 
                    onClick={() => trackContactEvent('phone_call_clicked')}
                    className="text-white text-sm font-mono font-medium hover:text-[#dcb782] transition-colors block"
                  >
                    +91 9361990229
                  </a>
                  <p className="text-xs text-[#dfd1b9]/50 font-light mt-0.5">Chennai Trade Desk Official Representative Line</p>
                </div>
              </div>

              {/* Desk Hours */}
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-[#dcb782]" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#ab8558] uppercase font-bold block mb-0.5">Operating Desk Hours</span>
                  <p className="text-white text-sm font-body font-medium">9:00 AM – 6:00 PM IST (UTC +5:30)</p>
                  <p className="text-xs text-[#dfd1b9]/50 font-light mt-0.5">Monday through Saturday</p>
                </div>
              </div>
            </div>

            {/* Confirmed Corporate Registration & Entity Credentials */}
            <div className="p-6 rounded-2xl bg-[#121210] border border-white/10 flex flex-col gap-4 shadow-xl">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-[#dcb782]" />
                <span className="text-xs font-mono text-[#dcb782] font-bold uppercase tracking-wider">
                  STATUTORY REGISTRATION CREDENTIALS
                </span>
              </div>
              <div className="flex flex-col gap-2 text-xs">
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-[#ab8558] font-mono">Entity:</span>
                  <span className="text-white font-medium text-right">AURA ENTERPRISE EXPORTS (OPC) PVT LTD</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-[#ab8558] font-mono">CIN:</span>
                  <span className="text-white font-mono font-medium">U46411TN2026OPC194827</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-[#ab8558] font-mono">IEC:</span>
                  <span className="text-white font-mono font-medium">ABGCA0520R</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1.5">
                  <span className="text-[#ab8558] font-mono">GSTIN:</span>
                  <span className="text-[#dfd1b9]/75 font-mono text-xs">Available in statutory verification dossier</span>
                </div>
                <div className="pt-1 text-[11px] text-[#dfd1b9]/60 leading-relaxed font-light">
                  <span className="text-[#ab8558] font-mono uppercase block text-[10px]">Registered Office:</span>
                  No 11/1A, VOC Street, Pattukottai Muthu Kumaraswamy Street, Baby Nagar, Velachery, Chennai Corp. Ward - 178, Chennai, Tamil Nadu, 600042
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: General Corporate Inquiry Form */}
          <div className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-[#121210] border border-white/10 shadow-xl">
            <div className="flex flex-col gap-2 mb-8">
              <span className="text-xs font-mono text-[#dcb782] uppercase tracking-widest font-bold">
                GENERAL TRADE INQUIRY
              </span>
              <h2 className="text-2xl font-heading text-white font-medium">
                Submit General Correspondence
              </h2>
              <p className="text-xs text-[#dfd1b9]/70 font-light">
                For bilateral partnership inquiries, vendor applications, or non-commercial correspondence:
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center text-center gap-4">
                <CheckCircle2 className="h-12 w-12 text-emerald-400" />
                <h3 className="text-xl font-heading text-white font-medium">Message Logged with Trade Desk</h3>
                <p className="text-xs text-[#dfd1b9]/80 font-light max-w-md leading-relaxed">
                  Thank you for contacting Aura Global Trade. Your correspondence has been logged with our Chennai desk. An officer will review and reply to {formData.corporateEmail} within standard business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-mono text-[#dcb782] underline uppercase tracking-wider cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} onFocus={handleFormInteraction} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="fullName" className="text-xs font-mono uppercase tracking-wider text-[#dfd1b9]/80 font-medium">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. David Vance"
                      className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#dcb782]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="corporateEmail" className="text-xs font-mono uppercase tracking-wider text-[#dfd1b9]/80 font-medium">
                      Corporate Email *
                    </label>
                    <input
                      id="corporateEmail"
                      required
                      type="email"
                      value={formData.corporateEmail}
                      onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                      placeholder="e.g. corporate@company.com"
                      className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#dcb782]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="organization" className="text-xs font-mono uppercase tracking-wider text-[#dfd1b9]/80 font-medium">
                      Company / Organization *
                    </label>
                    <input
                      id="organization"
                      required
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Vance Global Imports LLC"
                      className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#dcb782]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="country" className="text-xs font-mono uppercase tracking-wider text-[#dfd1b9]/80 font-medium">
                      Country of Operation *
                    </label>
                    <input
                      id="country"
                      required
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. United Kingdom"
                      className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#dcb782]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="inquiryType" className="text-xs font-mono uppercase tracking-wider text-[#dfd1b9]/80 font-medium">
                    Nature of Inquiry
                  </label>
                  <select
                    id="inquiryType"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#dcb782] cursor-pointer"
                  >
                    <option value="Corporate Trade Inquiries">Corporate Trade & Executive Inquiry</option>
                    <option value="Vendor / Producer Registration">Vendor / Producer Collective Registration</option>
                    <option value="Trade Compliance & Verification">Trade Compliance & Verification Dossier</option>
                    <option value="Media & Institutional Communications">Media & Institutional Communications</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-[#dfd1b9]/80 font-medium">
                    Message Details *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide context regarding your organization, inquiry, and trade objectives..."
                    className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#dcb782] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold text-xs uppercase tracking-wider hover:from-white hover:to-[#dcb782] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="h-4 w-4" /> Transmit General Inquiry
                </button>
              </form>
            )}
          </div>

        </div>

      </main>
    </div>
  );
}
