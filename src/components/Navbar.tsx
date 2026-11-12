import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Menu, X, ChevronDown, Sparkles, ShoppingBag, LayoutGrid } from 'lucide-react';
import logoImg from '../assets/images/regenerated_image_1783707679777.png';
import portfolioAgroImg from '../assets/images/portfolio_agro_showcase.jpg';
import portfolioFashionImg from '../assets/images/portfolio_fashion_showcase.jpg';
import portfolioApparelImg from '../assets/images/portfolio_apparel_showcase.jpg';
import { useQuoteModal } from '../context/QuoteModalContext';
import { useRetailCart } from '../context/RetailCartContext';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
  activeView?: string;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [logoPath, setLogoPath] = useState(logoImg);
  const [useFallbackSvg, setUseFallbackSvg] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { openQuoteModal } = useQuoteModal();
  const { openCart, itemCount } = useRetailCart();

  const handleLogoError = () => {
    setUseFallbackSvg(true);
  };

  // Robust hover intent handlers to prevent menu flickering on diagonal mouse movements
  const handleDropdownEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsProductsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
      setHoveredCard(null);
    }, 180);
  };

  // Reset dropdown state whenever location changes
  useEffect(() => {
    setIsProductsDropdownOpen(false);
    setIsOpen(false);
    setHoveredCard(null);
  }, [location.pathname]);

  // Clean up any lingering close timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  // Keyboard navigation & body scroll lock for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setIsProductsDropdownOpen(false);
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const productVerticals = [
    {
      id: 'agro',
      title: ['Agro', 'Products'],
      subtitle: 'Agricultural commodities, spices, and natural ingredients.',
      path: '/products/agro-products',
      image: portfolioAgroImg,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6" />
        </svg>
      ),
    },
    {
      id: 'fashion',
      title: ['Fashion &', 'Lifestyle'],
      subtitle: 'Indian craftsmanship, wellness, beauty, and lifestyle products for global markets.',
      path: '/products/fashion-lifestyle',
      image: portfolioFashionImg,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M4 11h16a1 1 0 0 1 1 1c0 5-4.5 9-9 9s-9-4-9-9a1 1 0 0 1 1-1Z" />
          <path d="M15 4l-4 7" />
          <path d="M7 11c0-2 1-4 3-4" />
        </svg>
      ),
    },
    {
      id: 'apparel',
      title: ['Apparel &', 'Textiles'],
      subtitle: 'Indian textiles, fabrics and finished products for global markets.',
      path: '/products/apparel-textiles',
      image: portfolioApparelImg,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <line x1="4" y1="9" x2="20" y2="9" />
          <line x1="4" y1="15" x2="20" y2="15" />
          <line x1="10" y1="3" x2="8" y2="21" />
          <line x1="16" y1="3" x2="14" y2="21" />
        </svg>
      ),
    },
  ];

  const navLinks = [
    { label: 'Home', path: '/', id: 'home' },
    { label: 'About Us', path: '/about', id: 'about' },
    { label: 'Our Products', path: '/products', id: 'products', hasDropdown: true },
    { label: 'Buy Retail', path: '/buy-retail', id: 'buy-retail', isRetail: true },
    { label: 'Our Approach', path: '/export-process', id: 'approach' },
    { label: 'Quality', path: '/quality-compliance', id: 'quality' },
    { label: 'Contact', path: '/contact', id: 'contact' },
  ];

  const handleLinkClick = (path: string, id: string) => {
    setIsOpen(false);
    setIsProductsDropdownOpen(false);
    if (onNavigate) {
      onNavigate(id);
    }
  };

  const isCurrentActive = (link: typeof navLinks[0]) => {
    if (link.id === 'home') return location.pathname === '/';
    if (link.id === 'about') return location.pathname === '/about';
    if (link.id === 'products') return location.pathname.startsWith('/products');
    if (link.id === 'buy-retail') return location.pathname === '/buy-retail' || location.pathname === '/retail' || location.pathname.startsWith('/buy-retail/');
    if (link.id === 'approach') return location.pathname === '/export-process';
    if (link.id === 'quality') return location.pathname === '/quality-compliance';
    if (link.id === 'contact') return location.pathname === '/contact';
    return false;
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 py-2 max-w-7xl mx-auto" id="app-header">
      <nav
        className="w-full flex items-center justify-between"
        id="app-navbar"
        aria-label="Main Navigation"
      >
        {/* Left Side: Logo */}
        <Link
          to="/"
          onClick={() => handleLinkClick('/', 'home')}
          className="flex items-center cursor-pointer group shrink-0"
          id="nav-logo-container"
          aria-label="Aura Exports Home"
        >
          {!useFallbackSvg ? (
            <img
              src={logoPath}
              alt="Aura Exports - Indian Export Company & Wholesale Sourcing Partner"
              onError={handleLogoError}
              referrerPolicy="no-referrer"
              className="h-[44px] md:h-[48px] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              id="logo-image-element"
            />
          ) : (
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 100 100" className="h-11 w-11 text-[#dcb782] transition-transform duration-500 group-hover:scale-110" id="logo-icon-svg" referrerPolicy="no-referrer">
                <path d="M50 15 L25 75 H38 L50 42 L62 75 H75 Z" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinejoin="miter" />
                <path d="M50 42 L38 75 H62 Z" fill="currentColor" className="opacity-15" />
                <path d="M50 28 L35 68 H65 Z" fill="none" stroke="#ab8558" strokeWidth="2.5" strokeDasharray="3,3" />
              </svg>
              <span className="font-heading italic text-3xl tracking-[0.08em] font-bold text-[#fbfbeb] group-hover:text-white transition-colors leading-[1]">
                Λ U R Λ
              </span>
            </div>
          )}
        </Link>

        {/* Center: Navigation Links in Liquid Glass Pill Container */}
        <div
          className="hidden lg:flex items-center gap-1 ml-10 liquid-glass !overflow-visible rounded-2xl px-3 py-1.5 border border-white/10 shadow-xl"
          id="desktop-nav-pill"
        >
          {navLinks.map((link) => {
            const active = isCurrentActive(link);

            if (link.hasDropdown) {
              return (
                <div
                  key={link.id}
                  className="relative group/dropdown"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                  id={`nav-link-dropdown-wrapper-${link.id}`}
                >
                  <button
                    onClick={() => {
                      setIsProductsDropdownOpen(!isProductsDropdownOpen);
                      navigate('/products');
                    }}
                    onFocus={handleDropdownEnter}
                    aria-expanded={isProductsDropdownOpen}
                    aria-haspopup="true"
                    className={`px-3 py-2 font-semibold font-body hover:text-white rounded-xl transition-all cursor-pointer flex items-center gap-1 text-sm ${
                      active ? 'text-[#D5C8B7] bg-white/10' : 'text-[#dfd1b9]/80 hover:bg-white/5'
                    }`}
                    id={`nav-link-${link.id}`}
                  >
                    {link.label}
                    <ChevronDown className={`h-3.5 w-3.5 opacity-60 text-[#D4AF78] transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* World-Class 3-Vertical Luxury Mega Menu Dropdown */}
                  <div
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                    className={`absolute -left-64 sm:-left-72 md:-left-80 lg:-left-72 xl:-left-80 mt-2.5 w-[920px] max-w-[calc(100vw-32px)] rounded-[24px] border border-[#262629] bg-[#0c0c0e]/98 backdrop-blur-3xl p-4 sm:p-5 shadow-[0_30px_90px_rgba(0,0,0,0.95)] transition-all duration-300 origin-top z-50 ${
                      isProductsDropdownOpen
                        ? 'opacity-100 scale-100 translate-y-0 visible pointer-events-auto'
                        : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'
                    }`}
                    id="products-mega-dropdown"
                    role="menu"
                    aria-label="Our Products Menu"
                  >
                    {/* Invisible top hover bridge to eliminate gap hit-testing issues */}
                    <div className="absolute -top-3 left-0 right-0 h-3 bg-transparent pointer-events-auto" />

                    {/* 3 Interactive Category Showcase Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4" onMouseLeave={() => setHoveredCard(null)}>
                      {productVerticals.map((vertical) => {
                        const isHighlighted = hoveredCard
                          ? hoveredCard === vertical.id
                          : location.pathname.startsWith(vertical.path) ||
                            (vertical.id === 'fashion' && !location.pathname.startsWith('/products/'));

                        return (
                          <Link
                            key={vertical.id}
                            to={vertical.path}
                            onClick={() => {
                              setIsProductsDropdownOpen(false);
                              handleLinkClick(vertical.path, 'products');
                            }}
                            onMouseEnter={() => setHoveredCard(vertical.id)}
                            className={`group relative rounded-[20px] overflow-hidden h-[268px] bg-[#111113] transition-all duration-300 block select-none ${
                              isHighlighted
                                ? 'border border-[#D4AF78] shadow-[0_0_30px_rgba(212,175,120,0.22)] ring-1 ring-[#D4AF78]/40'
                                : 'border border-[#222225] hover:border-[#D4AF78]/60 hover:shadow-[0_0_20px_rgba(212,175,120,0.12)]'
                            }`}
                          >
                            {/* Visual Photography */}
                            <img
                              src={vertical.image}
                              alt={vertical.title.join(' ')}
                              className="absolute inset-0 w-full h-full object-cover object-right transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            {/* Cinema Grade Dark Gradient Scrim for Legibility & Contrast */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0E] via-[#0C0C0E]/85 via-45% to-transparent pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E]/90 via-transparent to-black/20 pointer-events-none" />

                            {/* Left Text & Editorial Details */}
                            <div className="relative z-10 flex flex-col justify-between h-full p-6 text-left max-w-[62%] pointer-events-none">
                              <div>
                                {/* Icon Badge */}
                                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-black/40 backdrop-blur-md border border-[#D4AF78]/30 text-[#D4AF78] transition-transform duration-300 group-hover:scale-105">
                                  {vertical.icon}
                                </div>

                                {/* Serif Heading */}
                                <h3 className="font-heading text-[26px] font-serif text-[#F5F2EC] leading-[1.12] mt-4 tracking-normal group-hover:text-white transition-colors font-medium">
                                  {vertical.title[0]}
                                  <br />
                                  {vertical.title[1]}
                                </h3>

                                {/* Gold Accent Line */}
                                <div
                                  className={`h-[2px] bg-[#D4AF78] mt-3.5 mb-2.5 rounded-full transition-all duration-300 ${
                                    isHighlighted ? 'w-10' : 'w-6 group-hover:w-10'
                                  }`}
                                />

                                {/* Subtitle Description */}
                                <p className="text-xs text-[#A29B91] leading-relaxed font-light line-clamp-3">
                                  {vertical.subtitle}
                                </p>
                              </div>
                            </div>

                            {/* Circular Action Indicator Button */}
                            <div
                              className={`absolute right-5 top-[38%] -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 z-20 ${
                                isHighlighted
                                  ? 'bg-[#E2BC86] text-[#0A0A0B] border border-[#E2BC86] shadow-md scale-105'
                                  : 'border border-[#D4AF78]/40 bg-black/50 text-[#D4AF78] group-hover:bg-[#E2BC86] group-hover:text-[#0A0A0B] group-hover:border-[#E2BC86] group-hover:scale-105'
                              }`}
                            >
                              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Bottom Action Strip */}
                    <div className="mt-3.5 pt-3.5 px-3 sm:px-4 pb-1 border-t border-[#1E1E22] flex flex-col sm:flex-row items-center justify-between gap-4">
                      {/* Left: Explore Full Catalog Link & Description */}
                      <div className="flex items-center gap-4">
                        <Link
                          to="/products"
                          onClick={() => {
                            setIsProductsDropdownOpen(false);
                            handleLinkClick('/products', 'products');
                          }}
                          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E2BC86] hover:text-white transition-colors group cursor-pointer"
                        >
                          <LayoutGrid className="w-4 h-4 text-[#E2BC86] group-hover:rotate-6 transition-transform" />
                          <span className="font-bold">EXPLORE FULL CATALOG</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        {/* Subtle Vertical Divider */}
                        <div className="hidden md:block h-3.5 w-[1px] bg-white/10" />

                        {/* Center Caption */}
                        <span className="text-xs text-[#8A857D] font-light hidden md:inline">
                          A curated range of Indian products for global sourcing.
                        </span>
                      </div>

                      {/* Right: REQUEST SOURCING RFQ CTA */}
                      <button
                        type="button"
                        onClick={() => {
                          setIsProductsDropdownOpen(false);
                          openQuoteModal();
                        }}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#E2BC86] hover:bg-[#d4a86a] text-[#0A0A0B] font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-[0_4px_16px_rgba(226,188,134,0.3)] cursor-pointer"
                      >
                        <span>REQUEST SOURCING RFQ</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.id}
                to={link.path}
                onClick={() => handleLinkClick(link.path, link.id)}
                className={`px-3 py-2 font-semibold font-body hover:text-white rounded-xl transition-all cursor-pointer text-sm ${
                  active ? 'text-[#D5C8B7] bg-white/10' : 'text-[#dfd1b9]/80 hover:bg-white/5'
                }`}
                id={`nav-link-${link.id}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Side: Cart & Primary B2B CTA */}
        <div className="hidden lg:flex items-center gap-3 ml-5">
          {/* Shopping Cart Trigger Button */}
          <button
            type="button"
            onClick={openCart}
            className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-[#dcb782]/50 text-white hover:text-[#dcb782] transition-all cursor-pointer shadow-sm hover:bg-white/10"
            aria-label={`Open Shopping Cart, ${itemCount} items`}
            id="nav-cart-trigger"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#dcb782] text-black text-[10px] font-mono font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-scale-in">
                {itemCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="flex items-center gap-2 bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black rounded-xl px-5 py-2.5 hover:from-[#fbf3db] hover:to-[#dcb782] transition-all shadow-md cursor-pointer hover:scale-[1.02] text-xs font-bold font-body tracking-wider uppercase"
            id="nav-request-quote"
          >
            <span>Request a Quote</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Mobile controls: Cart + Hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={openCart}
            className="relative flex items-center justify-center text-white bg-black/40 border border-[#dcb782]/20 hover:bg-white/5 h-11 w-11 rounded-full cursor-pointer transition-colors backdrop-blur-md"
            aria-label={`Open Cart, ${itemCount} items`}
            id="mobile-cart-toggle"
          >
            <ShoppingBag className="h-5 h-5 text-[#dcb782]" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#dcb782] text-black text-[10px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center text-white bg-black/40 border border-[#dcb782]/20 hover:bg-white/5 h-11 w-11 rounded-full cursor-pointer transition-colors backdrop-blur-md"
            id="mobile-nav-toggle"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/98 backdrop-blur-2xl flex flex-col justify-start items-center gap-6 lg:hidden px-6 pt-24 pb-12 overflow-y-auto"
          id="mobile-nav-menu"
        >
          <div className="flex flex-col items-center gap-4 w-full max-w-sm">
            <div className="flex flex-col items-center mb-2">
              <span className="font-heading italic text-4xl text-[#dcb782] tracking-widest font-bold">Λ U R Λ</span>
              <span className="font-body text-[10px] tracking-[0.3em] text-[#ab8558] uppercase font-bold mt-1">EXPORTS</span>
            </div>

            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div className="flex flex-col items-center gap-2 w-full" key={link.id}>
                    <button
                      onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                      className="font-heading italic text-3xl text-[#dfd1b9] hover:text-[#fbfbeb] transition-all flex items-center gap-2"
                    >
                      {link.label}
                      <ChevronDown className={`h-4 w-4 opacity-50 text-[#ab8558] transition-transform duration-300 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isMobileProductsOpen && (
                      <div className="flex flex-col gap-3 py-3 bg-[#111113] rounded-2xl p-3 border border-white/10 w-full text-left">
                        {productVerticals.map((vertical) => (
                          <Link
                            key={vertical.id}
                            to={vertical.path}
                            onClick={() => setIsOpen(false)}
                            className="group relative rounded-xl overflow-hidden h-28 bg-[#18181A] border border-[#262629] p-4 flex items-center justify-between transition-colors hover:border-[#D4AF78]"
                          >
                            <img
                              src={vertical.image}
                              alt={vertical.title.join(' ')}
                              className="absolute inset-0 w-full h-full object-cover object-right opacity-30 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none" />

                            <div className="relative z-10 max-w-[75%]">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="w-6 h-6 rounded-md bg-[#D4AF78]/20 text-[#D4AF78] flex items-center justify-center">
                                  {vertical.icon}
                                </div>
                                <span className="font-heading text-lg font-serif text-white font-medium">
                                  {vertical.title.join(' ')}
                                </span>
                              </div>
                              <p className="text-[11px] text-[#A29B91] line-clamp-2">
                                {vertical.subtitle}
                              </p>
                            </div>

                            <div className="relative z-10 w-8 h-8 rounded-full bg-black/60 border border-[#D4AF78]/40 text-[#D4AF78] flex items-center justify-center shrink-0 group-hover:bg-[#E2BC86] group-hover:text-black">
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </Link>
                        ))}

                        <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                          <Link
                            to="/products"
                            onClick={() => setIsOpen(false)}
                            className="text-center font-mono text-xs text-[#E2BC86] font-bold uppercase tracking-wider py-1.5 flex items-center justify-center gap-2"
                          >
                            <LayoutGrid className="w-3.5 h-3.5" />
                            <span>Explore Full Catalog →</span>
                          </Link>

                          <button
                            type="button"
                            onClick={() => {
                              setIsOpen(false);
                              openQuoteModal();
                            }}
                            className="w-full py-2.5 rounded-xl bg-[#E2BC86] hover:bg-[#d4a86a] text-[#0A0A0B] font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                          >
                            <span>Request Sourcing RFQ</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.id}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-heading italic text-2xl text-[#dfd1b9] hover:text-[#fbfbeb] transition-all flex items-center gap-2 ${
                    link.id === 'buy-retail' ? 'text-[#dcb782]' : ''
                  }`}
                >
                  <span>{link.label}</span>
                  {link.id === 'buy-retail' && (
                    <span className="text-[10px] font-mono uppercase bg-[#dcb782]/20 text-[#dcb782] px-2 py-0.5 rounded-full font-bold border border-[#dcb782]/30 not-italic">
                      Shop
                    </span>
                  )}
                </Link>
              );
            })}

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                openQuoteModal();
              }}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold rounded-xl py-3.5 text-xs tracking-wider uppercase shadow-lg cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
