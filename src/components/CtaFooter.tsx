import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, Sparkles, Globe } from 'lucide-react';
import HlsVideoBg from './HlsVideoBg';

export default function CtaFooter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleBookCallSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="relative w-full border-t border-[#dcb782]/10 bg-black py-32 px-6 md:px-16 select-none overflow-hidden"
    >
      {/* Background HLS Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <HlsVideoBg
          src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
          className="opacity-55"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Top and Bottom Fades (200px each) */}
      <div
        className="absolute top-0 left-0 right-0 w-full pointer-events-none z-1"
        style={{
          height: '200px',
          background: 'linear-gradient(to bottom, black, transparent)',
        }}
        id="cta-top-fade"
      />
      <div
        className="absolute bottom-0 left-0 right-0 w-full pointer-events-none z-1"
        style={{
          height: '200px',
          background: 'linear-gradient(to top, black, transparent)',
        }}
        id="cta-bottom-fade"
      />

      {/* Hero CTA Core */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-10 pt-16">
        {/* Animated Headline */}
        <div className="flex flex-col gap-5 items-center">
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-heading italic leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#dcb782] tracking-tight font-bold"
            id="cta-heading"
          >
            Initiate your trade evolution today.
          </h2>
          <p
            className="text-[#dfd1b9]/75 font-body font-light text-sm md:text-base leading-relaxed max-w-lg mx-auto"
            id="cta-desc"
          >
            Establish solid, recurring trade partnerships. Secure pristine assay grades, verified phytosanitary origin clearances, and dependable cargo freight schedules with our trade desk officers.
          </p>
        </div>

        {/* Subscription / Interactive booking form */}
        <form
          onSubmit={handleBookCallSubmit}
          className="w-full max-w-md flex flex-col sm:flex-row items-center gap-3 bg-black/60 border border-[#dcb782]/20 p-1.5 rounded-full backdrop-blur-md relative"
          id="cta-booking-form"
        >
          <input
            type="email"
            placeholder="Enter corporate email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading' || status === 'success'}
            className="flex-1 bg-transparent px-5 py-2.5 text-sm text-[#fbfbeb] placeholder-[#dfd1b9]/40 focus:outline-none font-body font-light w-full"
            id="cta-email-input"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="w-full sm:w-auto bg-gradient-to-r from-[#dcb782] to-[#ab8558] hover:from-[#fbf3db] hover:to-[#dcb782] text-black px-6 py-2.5 rounded-full text-sm font-bold font-body cursor-pointer flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-transform shrink-0"
            id="cta-book-submit"
          >
            {status === 'loading' ? (
              <span className="h-4 w-4 border-2 border-black border-t-transparent animate-spin rounded-full" />
            ) : status === 'success' ? (
              <span className="flex items-center gap-1">
                <Check className="h-4 w-4" /> Inquiry Received
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <Globe className="h-3.5 w-3.5" /> Book Consultation <ArrowUpRight className="h-4 w-4" />
              </span>
            )}
          </button>
        </form>

        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
              className="flex items-center gap-2 text-[#fbfbeb] bg-white/5 border border-[#dcb782]/20 rounded-full px-5 py-2.5 text-xs font-body backdrop-blur-lg mt-1 shadow-lg"
              id="cta-success-message"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#dcb782] animate-pulse" />
              <span>Inquiry locked. Our regional trade delegate will contact you within 2 business hours.</span>
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-300 bg-red-500/10 border border-red-500/20 rounded-full px-5 py-2 text-xs font-body backdrop-blur-lg mt-1"
              id="cta-error-message"
            >
              Please enter an authentic, valid corporate email.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer legal bar */}
        <div
          className="w-full mt-32 pt-8 border-t border-[#dcb782]/10 flex flex-col sm:flex-row justify-between items-center bg-transparent gap-4"
          id="footer-bar"
        >
          {/* Left copyright notice */}
          <span className="text-[#dfd1b9]/40 font-body font-light text-xs text-center sm:text-left select-text">
            © {currentYear} AURA Global Trade. All rights reserved. Sourcing partnerships refined globally.
          </span>

          {/* Right link directory (Removed alert and made smooth scroll back to top or section clicks) */}
          <div className="flex items-center gap-6" id="footer-links">
            {['Privacy Policy', 'Terms of Trade', 'Certificates'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                className="text-[#dfd1b9]/40 hover:text-[#dcb782] font-body font-light text-xs transition-colors"
                id={`footer-link-${link.toLowerCase().replace(/ /g, '-')}`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
