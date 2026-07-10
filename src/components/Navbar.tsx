import { useState } from 'react';
import { ArrowUpRight, Menu, X, ChevronDown, Globe } from 'lucide-react';
import logoImg from '../assets/images/regenerated_image_1783707679777.png';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeView?: string;
}

export default function Navbar({ onNavigate, activeView = 'home' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const [logoPath, setLogoPath] = useState(logoImg);
  const [useFallbackSvg, setUseFallbackSvg] = useState(false);

  const handleLogoError = () => {
    if (logoPath === 'https://lh3.googleusercontent.com/d/1KeWs8aqOGigQkilHLBEVGV0Xt1heXmfh') {
      // Try the alternative thumbnail bypass format for Google Drive
      setLogoPath('https://drive.google.com/thumbnail?id=1KeWs8aqOGigQkilHLBEVGV0Xt1heXmfh&sz=w120');
    } else if (logoPath.includes('drive.google.com')) {
      // Try local asset path next
      setLogoPath('/src/assets/logo-icon.png');
    } else if (logoPath === '/src/assets/logo-icon.png') {
      // Try the main custom transparent filename next
      setLogoPath('/src/assets/Aura_Gold_Trans.png');
    } else if (logoPath === '/src/assets/Aura_Gold_Trans.png') {
      // Try local machine file url in case they are local
      setLogoPath('file:///Users/vikram/Documents/AURA/Website%20Design/AI%20Studio/IMG/Aura_Gold_Trans.png');
    } else {
      // Final safe high-fidelity SVG icon fallback
      setUseFallbackSvg(true);
    }
  };

  // New menu items matching the user's branding and 1st image
  const links = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Products', id: 'products', hasDropdown: true },
    { label: 'Faqs', id: 'faqs' },
  ];

  return (
    <>
      <nav
        className="fixed top-4 left-0 right-0 z-50 px-4 md:px-12 py-3 flex items-center justify-between mx-auto max-w-7xl"
        id="app-navbar"
      >
        {/* Left Side: Logo (AURA Gold Trans logo without container boundary or suffix text) */}
        <div
          onClick={() => onNavigate('home')}
          className="flex items-center cursor-pointer group"
          id="nav-logo-container"
        >
          {!useFallbackSvg ? (
            <img
              src={logoPath}
              alt="AURA Gold"
              onError={handleLogoError}
              referrerPolicy="no-referrer"
              className="h-[48px] md:h-[53px] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              id="logo-image-element"
            />
          ) : (
            <div className="flex items-center gap-2">
              {/* High fidelity modern SVG geometric Chevron Star */}
              <svg viewBox="0 0 100 100" className="h-9 w-9 text-[#dcb782] transition-transform duration-500 group-hover:scale-110" id="logo-icon-svg" referrerPolicy="no-referrer">
                <path d="M50 15 L25 75 H38 L50 42 L62 75 H75 Z" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinejoin="miter" />
                <path d="M50 42 L38 75 H62 Z" fill="currentColor" className="opacity-15" />
                <path d="M50 28 L35 68 H65 Z" fill="none" stroke="#ab8558" strokeWidth="2.5" strokeDasharray="3,3" />
              </svg>
              <span className="font-heading italic text-2xl tracking-[0.08em] font-bold text-[#fbfbeb] group-hover:text-white transition-colors leading-[1]">
                Λ U R Λ
              </span>
            </div>
          )}
        </div>

        {/* Center: Navigation Links & CTA in a single pill container (Desktop-only - scaled up by 10%) */}
        <div
          className="hidden lg:flex items-center gap-2 liquid-glass !overflow-visible rounded-2xl px-4.5 py-2 border border-white/10 shadow-xl"
          id="desktop-nav-pill"
        >
          {links.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.id}
                  className="relative group/dropdown"
                  onMouseEnter={() => setIsProductsDropdownOpen(true)}
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                  id={`nav-link-dropdown-wrapper-${link.id}`}
                >
                  <button
                    onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                    className={`px-4 py-2 font-bold font-body hover:text-white rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeView !== 'home' ? 'text-[#dfd1b9]/80' : 'text-[#dfd1b9]/80 hover:bg-white/10'
                    }`}
                    style={{ fontSize: '16px' }}
                    id={`nav-link-${link.id}`}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-60 text-[#ab8558] group-hover/dropdown:rotate-180 transition-transform duration-300" />
                  </button>

                  {/* Elegant gold translucent dropdown box with physical separator lines */}
                  <div
                    className={`absolute left-0 mt-1.5 w-64 rounded-xl border border-white/10 bg-black/95 backdrop-blur-xl p-2 shadow-2xl transition-all duration-300 origin-top z-50 ${
                      isProductsDropdownOpen
                        ? 'opacity-100 scale-100 translate-y-0 visible'
                        : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'
                    }`}
                    id="products-sub-dropdown"
                  >
                    <button
                      onClick={() => {
                        setIsProductsDropdownOpen(false);
                        onNavigate('turmeric');
                      }}
                      className="w-full text-left px-3.5 py-3 rounded-lg font-body text-xs font-bold text-[#dfd1b9]/90 hover:text-white hover:bg-white/5 transition-colors flex flex-col gap-0.5 cursor-pointer text-left"
                      id="dropdown-opt-turmeric"
                    >
                      <span className="text-white text-sm">Turmeric</span>
                      <span className="text-[10px] text-[#dfd1b9]/50 font-normal leading-normal">Premium Erode Turmeric</span>
                    </button>
                    <div className="h-[1px] bg-white/5 my-1" />
                    
                    <button
                      onClick={() => {
                        setIsProductsDropdownOpen(false);
                        onNavigate('jewelry');
                      }}
                      className="w-full text-left px-3.5 py-3 rounded-lg font-body text-xs font-bold text-[#dfd1b9]/90 hover:text-white hover:bg-white/5 transition-colors flex flex-col gap-0.5 cursor-pointer text-left"
                      id="dropdown-opt-jewelry"
                    >
                      <span className="text-white text-sm">Fashion jewelry</span>
                      <span className="text-[10px] text-[#dfd1b9]/50 font-normal leading-normal">Couture Artisanal Assemblies</span>
                    </button>
                    <div className="h-[1px] bg-white/5 my-1" />

                    <button
                      onClick={() => {
                        setIsProductsDropdownOpen(false);
                        onNavigate('textiles');
                      }}
                      className="w-full text-left px-3.5 py-3 rounded-lg font-body text-xs font-bold text-[#dfd1b9]/90 hover:text-white hover:bg-white/5 transition-colors flex flex-col gap-0.5 cursor-pointer text-left"
                      id="dropdown-opt-textiles"
                    >
                      <span className="text-white text-sm">Sustainable Textiles</span>
                      <span className="text-[10px] text-[#dfd1b9]/50 font-normal leading-normal">Organic Eco-Weaves</span>
                    </button>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="px-4 py-2 font-bold text-[#dfd1b9]/80 font-body hover:text-white rounded-xl transition-all hover:bg-white/10 cursor-pointer flex items-center gap-1.5"
                style={{
                  fontSize: '16px',
                  ...(link.id === 'home' && activeView === 'home' ? { color: '#D5C8B7' } : {}),
                }}
                id={`nav-link-${link.id}`}
              >
                {link.label}
              </button>
            );
          })}
          {/* Action solid button inside pill: "Contact us" */}
          <button
            onClick={() => onNavigate('contact')}
            className="flex items-center gap-2 bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black rounded-xl px-5 py-2 hover:from-[#fbf3db] hover:to-[#dcb782] transition-all shadow-md cursor-pointer hover:scale-[1.03]"
            style={{ fontSize: '16px', fontWeight: 'bold', fontFamily: 'Urbanist, sans-serif' }}
            id="nav-get-started"
          >
            <Globe className="h-3.5 w-3.5" />
            Contact us
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Right Side: Mobile Hamburger toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex items-center justify-center text-white bg-black/40 border border-[#dcb782]/20 hover:bg-white/5 h-10 w-10 rounded-full cursor-pointer transition-colors backdrop-blur-md"
          id="mobile-nav-toggle"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/98 backdrop-blur-2xl flex flex-col justify-center items-center gap-8 lg:hidden"
          id="mobile-nav-menu"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center mb-6">
              {!useFallbackSvg ? (
                <img
                  src={logoPath}
                  alt="AURA Gold"
                  onError={handleLogoError}
                  referrerPolicy="no-referrer"
                  className="h-14 w-auto object-contain"
                  id="mobile-logo-image"
                />
              ) : (
                <span className="font-heading italic text-5xl text-[#dcb782] tracking-widest font-bold">Λ U R Λ</span>
              )}
              <span className="font-body text-xs tracking-[0.3em] text-[#ab8558] uppercase font-bold mt-2">GLOBAL TRADE</span>
            </div>
            {links.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div className="flex flex-col items-center gap-2" key={link.id} id={`mobile-dropdown-wrapper-${link.id}`}>
                    <button
                      onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                      className="font-heading italic text-3xl text-[#dfd1b9] hover:text-[#fbfbeb] transition-all transform hover:scale-105 flex items-center gap-2"
                      id={`mobile-link-${link.id}`}
                    >
                      {link.label}
                      <ChevronDown className={`h-5 w-5 opacity-50 text-[#ab8558] transition-transform duration-300 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileProductsOpen && (
                      <div className="flex flex-col items-center gap-4 py-4 bg-white/5 rounded-xl px-6 border border-white/5 w-64 mt-2" id="mobile-products-sublist">
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            onNavigate('turmeric');
                          }}
                          className="font-body text-sm text-[#dcb782] font-bold hover:text-white transition-colors text-center flex flex-col items-center gap-1"
                          id="mobile-dropdown-opt-turmeric"
                        >
                          <span className="font-bold">Turmeric</span>
                          <span className="text-[10px] text-[#dfd1b9]/50 font-normal">Premium Erode Turmeric</span>
                        </button>
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            onNavigate('jewelry');
                          }}
                          className="font-body text-lg text-white/80 hover:text-white transition-colors"
                          id="mobile-dropdown-opt-jewelry"
                        >
                          Fashion jewelry
                        </button>
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            onNavigate('textiles');
                          }}
                          className="font-body text-lg text-white/80 hover:text-white transition-colors"
                          id="mobile-dropdown-opt-textiles"
                        >
                          Sustainable Textiles
                        </button>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setIsOpen(false);
                    onNavigate(link.id);
                  }}
                  className="font-heading italic text-3xl text-[#dfd1b9] hover:text-[#fbfbeb] transition-all transform hover:scale-105"
                  id={`mobile-link-${link.id}`}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => {
                setIsOpen(false);
                onNavigate('contact');
              }}
              className="mt-6 flex items-center gap-2 bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold rounded-full px-8 py-3.5 text-base hover:opacity-90 transition-all cursor-pointer"
              id="mobile-get-started"
            >
              <Globe className="h-4 w-4" />
              Contact us
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
