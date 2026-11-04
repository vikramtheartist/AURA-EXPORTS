import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import logoImg from '../assets/images/regenerated_image_1783707679777.png';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
  activeView?: string;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const [logoPath, setLogoPath] = useState(logoImg);
  const [useFallbackSvg, setUseFallbackSvg] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoError = () => {
    setUseFallbackSvg(true);
  };

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

  const navLinks = [
    { label: 'Home', path: '/', id: 'home' },
    { label: 'About Us', path: '/about', id: 'about' },
    { label: 'Our Products', path: '/products', id: 'products', hasDropdown: true },
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
          aria-label="Aura Global Trade Home"
        >
          {!useFallbackSvg ? (
            <img
              src={logoPath}
              alt="Aura Global Trade - Indian Export Company & Wholesale Sourcing Partner"
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
                  onMouseEnter={() => setIsProductsDropdownOpen(true)}
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                  id={`nav-link-dropdown-wrapper-${link.id}`}
                >
                  <button
                    onClick={() => {
                      setIsProductsDropdownOpen(!isProductsDropdownOpen);
                      navigate('/products');
                    }}
                    className={`px-3 py-2 font-semibold font-body hover:text-white rounded-xl transition-all cursor-pointer flex items-center gap-1 text-sm ${
                      active ? 'text-[#D5C8B7] bg-white/10' : 'text-[#dfd1b9]/80 hover:bg-white/5'
                    }`}
                    id={`nav-link-${link.id}`}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-60 text-[#ab8558] group-hover/dropdown:rotate-180 transition-transform duration-300" />
                  </button>

                  {/* Comprehensive 3-Vertical Luxury Mega Menu */}
                  <div
                    className={`absolute -left-48 mt-2 w-[840px] rounded-3xl border border-white/10 bg-[#0d0d0c]/98 backdrop-blur-3xl p-7 shadow-[0_30px_90px_rgba(0,0,0,0.95)] transition-all duration-300 origin-top z-50 ${
                      isProductsDropdownOpen
                        ? 'opacity-100 scale-100 translate-y-0 visible'
                        : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'
                    }`}
                    id="products-mega-dropdown"
                  >
                    <div className="grid grid-cols-3 gap-6 pb-6 border-b border-white/10">
                      
                      {/* Vertical 1: Agro Products */}
                      <div className="flex flex-col gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#dcb782]/30 transition-colors group/col">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-[#dcb782] tracking-wider uppercase font-bold">
                            VERTICAL 01
                          </span>
                          <span className="text-[9px] font-mono bg-[#dcb782]/10 text-[#dcb782] px-2 py-0.5 rounded-full">
                            Primary
                          </span>
                        </div>

                        <Link
                          to="/products/agro-products"
                          onClick={() => setIsProductsDropdownOpen(false)}
                          className="font-heading text-lg text-white font-medium group-hover/col:text-[#dcb782] transition-colors flex items-center justify-between"
                        >
                          <span>Agro Products</span>
                          <ArrowUpRight className="h-4 w-4 text-[#dcb782] opacity-0 group-hover/col:opacity-100 transition-opacity" />
                        </Link>
                        
                        <p className="text-[11px] text-[#dfd1b9]/60 font-light leading-relaxed">
                          Spices, commodities, fresh produce and natural ingredients.
                        </p>

                        <div className="h-[1px] bg-white/5 my-1" />

                        <div className="flex flex-col gap-1.5 text-xs text-[#dfd1b9]/80 font-light">
                          <Link 
                            to="/products/agro-products#agricultural-portfolio"
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="hover:text-white transition-colors"
                          >
                            • Spices & Seasonings
                          </Link>
                          <Link 
                            to="/products/agro-products/turmeric"
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="text-[#dcb782] hover:text-white transition-colors font-medium"
                          >
                            • Turmeric (Fingers & Powder)
                          </Link>
                          <Link 
                            to="/products/agro-products/dried-red-chillies"
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="hover:text-white transition-colors"
                          >
                            • Chillies & Chilli Products
                          </Link>
                          <Link 
                            to="/products/agro-products/fresh-drumsticks"
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="hover:text-white transition-colors"
                          >
                            • Fresh Agricultural Produce
                          </Link>
                          <Link 
                            to="/products/agro-products/moringa-leaf-powder"
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="hover:text-white transition-colors"
                          >
                            • Moringa & Natural Ingredients
                          </Link>
                          <Link 
                            to="/products/agro-products/rice-basmati-non-basmati"
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="hover:text-white transition-colors"
                          >
                            • Grains & Pulses
                          </Link>
                        </div>

                        <Link
                          to="/products/agro-products"
                          onClick={() => setIsProductsDropdownOpen(false)}
                          className="text-[10px] font-mono text-[#dcb782] tracking-wider uppercase font-bold pt-2 mt-auto hover:underline"
                        >
                          Explore Agro Vertical →
                        </Link>
                      </div>

                      {/* Vertical 2: Fashion & Lifestyle */}
                      <div className="flex flex-col gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#dcb782]/30 transition-colors group/col">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-[#dcb782] tracking-wider uppercase font-bold">
                            VERTICAL 02
                          </span>
                          <span className="text-[9px] font-mono bg-white/10 text-white/70 px-2 py-0.5 rounded-full">
                            Artisanal Craft
                          </span>
                        </div>

                        <Link
                          to="/products/fashion-lifestyle"
                          onClick={() => setIsProductsDropdownOpen(false)}
                          className="font-heading text-lg text-white font-medium group-hover/col:text-[#dcb782] transition-colors flex items-center justify-between"
                        >
                          <span>Fashion & Lifestyle</span>
                          <ArrowUpRight className="h-4 w-4 text-[#dcb782] opacity-0 group-hover/col:opacity-100 transition-opacity" />
                        </Link>

                        <p className="text-[11px] text-[#dfd1b9]/60 font-light leading-relaxed">
                          Indian craftsmanship, temple jewelry, Kundan, tribal metallurgy and lifestyle accessories.
                        </p>

                        <div className="h-[1px] bg-white/5 my-1" />

                        <div className="flex flex-col gap-1.5 text-xs text-[#dfd1b9]/80 font-light">
                          <Link 
                            to="/products/fashion-lifestyle"
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="hover:text-white transition-colors"
                          >
                            • Temple & Traditional Jewelry
                          </Link>
                          <Link 
                            to="/products/fashion-lifestyle"
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="hover:text-white transition-colors"
                          >
                            • Kundan & Meenakari
                          </Link>
                          <Link 
                            to="/products/fashion-lifestyle"
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="hover:text-white transition-colors"
                          >
                            • Oxidized & Tribal Jewelry
                          </Link>
                          <Link 
                            to="/products/fashion-lifestyle"
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="hover:text-white transition-colors"
                          >
                            • Contemporary Fashion Jewelry
                          </Link>
                          <Link 
                            to="/products/fashion-lifestyle"
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="hover:text-white transition-colors"
                          >
                            • Handcrafted Accessories
                          </Link>
                          <Link 
                            to="/products/fashion-lifestyle"
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="hover:text-white transition-colors"
                          >
                            • Indian Lifestyle Products
                          </Link>
                        </div>

                        <Link
                          to="/products/fashion-lifestyle"
                          onClick={() => setIsProductsDropdownOpen(false)}
                          className="text-[10px] font-mono text-[#dcb782] tracking-wider uppercase font-bold pt-2 mt-auto hover:underline"
                        >
                          Explore Fashion & Lifestyle →
                        </Link>
                      </div>

                      {/* Vertical 3: Apparel & Textiles */}
                      <div className="flex flex-col gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#dcb782]/30 transition-colors group/col">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-[#dcb782] tracking-wider uppercase font-bold">
                            VERTICAL 03
                          </span>
                          <span className="text-[9px] font-mono bg-white/10 text-white/70 px-2 py-0.5 rounded-full">
                            Textile Heritage
                          </span>
                        </div>

                        <Link
                          to="/products/apparel-textiles"
                          onClick={() => setIsProductsDropdownOpen(false)}
                          className="font-heading text-lg text-white font-medium group-hover/col:text-[#dcb782] transition-colors flex items-center justify-between"
                        >
                          <span>Apparel & Textiles</span>
                          <ArrowUpRight className="h-4 w-4 text-[#dcb782] opacity-0 group-hover/col:opacity-100 transition-opacity" />
                        </Link>

                        <p className="text-[11px] text-[#dfd1b9]/60 font-light leading-relaxed">
                          Silk sarees, handlooms, cotton fabrics, block prints, apparel, home furnishings and yarns.
                        </p>

                        <div className="h-[1px] bg-white/5 my-1" />

                        <div className="flex flex-col gap-1.5 text-xs text-[#dfd1b9]/80 font-light">
                          <Link 
                            to="/products/apparel-textiles/kanjivaram-silk-saree"
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="text-[#dcb782] hover:text-white transition-colors font-medium"
                          >
                            • Silk Sarees & Traditional Silk (Kanjivaram)
                          </Link>
                          <Link 
                            to="/products/apparel-textiles"
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="hover:text-white transition-colors"
                          >
                            • Handloom & Regional Textiles
                          </Link>
                          <Link 
                            to="/products/apparel-textiles"
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="hover:text-white transition-colors"
                          >
                            • Cotton & Linen Fabrics
                          </Link>
                          <Link 
                            to="/products/apparel-textiles"
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="hover:text-white transition-colors"
                          >
                            • Hand Block Printed Textiles
                          </Link>
                          <Link 
                            to="/products/apparel-textiles"
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="hover:text-white transition-colors"
                          >
                            • Apparel & Garments
                          </Link>
                          <Link 
                            to="/products/apparel-textiles"
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="hover:text-white transition-colors"
                          >
                            • Home Textiles & Furnishings
                          </Link>
                          <Link 
                            to="/products/apparel-textiles"
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="hover:text-white transition-colors"
                          >
                            • Yarns & Textile Components
                          </Link>
                        </div>

                        <Link
                          to="/products/apparel-textiles"
                          onClick={() => setIsProductsDropdownOpen(false)}
                          className="text-[10px] font-mono text-[#dcb782] tracking-wider uppercase font-bold pt-2 mt-auto hover:underline"
                        >
                          Explore Apparel & Textiles →
                        </Link>
                      </div>

                    </div>

                    {/* Mega Menu Bottom Bar */}
                    <div className="pt-4 flex items-center justify-between text-xs">
                      <span className="text-[#dfd1b9]/50 font-light">
                        Vetted Indian sourcing ecosystems structured for international procurement.
                      </span>
                      <div className="flex items-center gap-4">
                        <Link
                          to="/products"
                          onClick={() => setIsProductsDropdownOpen(false)}
                          className="text-[#dcb782] hover:text-white font-mono uppercase tracking-wider transition-colors"
                        >
                          Explore Full Catalog →
                        </Link>
                        <Link
                          to="/request-quote"
                          onClick={() => setIsProductsDropdownOpen(false)}
                          className="bg-[#dcb782] text-black px-4 py-1.5 rounded-lg font-bold font-body uppercase text-[11px] hover:bg-white transition-colors"
                        >
                          Request Sourcing RFQ
                        </Link>
                      </div>
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

        {/* Right Side: Primary B2B CTA "Request a Quote" */}
        <div className="hidden lg:flex items-center gap-3 ml-5">
          <Link
            to="/request-quote"
            className="flex items-center gap-2 bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black rounded-xl px-5 py-2.5 hover:from-[#fbf3db] hover:to-[#dcb782] transition-all shadow-md cursor-pointer hover:scale-[1.02] text-xs font-bold font-body tracking-wider uppercase"
            id="nav-request-quote"
          >
            <span>Request a Quote</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex items-center justify-center text-white bg-black/40 border border-[#dcb782]/20 hover:bg-white/5 h-11 w-11 rounded-full cursor-pointer transition-colors backdrop-blur-md"
          id="mobile-nav-toggle"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
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
              <span className="font-body text-[10px] tracking-[0.3em] text-[#ab8558] uppercase font-bold mt-1">GLOBAL TRADE</span>
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
                      <div className="flex flex-col gap-4 py-4 bg-white/5 rounded-2xl px-5 border border-white/10 w-full text-left">
                        {/* Agro Products Group */}
                        <div>
                          <Link
                            to="/products/agro-products"
                            onClick={() => setIsOpen(false)}
                            className="font-body text-sm text-[#dcb782] font-bold block mb-1"
                          >
                            01. Agro Products →
                          </Link>
                          <div className="pl-3 flex flex-col gap-1 text-xs text-white/70">
                            <Link to="/products/agro-products" onClick={() => setIsOpen(false)}>• Spices & Seasonings</Link>
                            <Link to="/products/agro-products/turmeric" onClick={() => setIsOpen(false)}>• Turmeric (Fingers & Powder)</Link>
                            <Link to="/products/agro-products/dried-red-chillies" onClick={() => setIsOpen(false)}>• Chillies & Chilli Products</Link>
                            <Link to="/products/agro-products/fresh-drumsticks" onClick={() => setIsOpen(false)}>• Fresh Agricultural Produce</Link>
                            <Link to="/products/agro-products/moringa-leaf-powder" onClick={() => setIsOpen(false)}>• Moringa & Natural Botanicals</Link>
                            <Link to="/products/agro-products/rice-basmati-non-basmati" onClick={() => setIsOpen(false)}>• Grains & Pulses</Link>
                          </div>
                        </div>

                        {/* Fashion & Lifestyle */}
                        <div className="pt-2 border-t border-white/5">
                          <Link
                            to="/products/fashion-lifestyle"
                            onClick={() => setIsOpen(false)}
                            className="font-body text-sm text-white font-bold block mb-1"
                          >
                            02. Fashion & Lifestyle →
                          </Link>
                          <div className="pl-3 flex flex-col gap-1 text-xs text-white/70">
                            <Link to="/products/fashion-lifestyle" onClick={() => setIsOpen(false)}>• Temple & Traditional Jewelry</Link>
                            <Link to="/products/fashion-lifestyle" onClick={() => setIsOpen(false)}>• Kundan & Meenakari</Link>
                            <Link to="/products/fashion-lifestyle" onClick={() => setIsOpen(false)}>• Oxidized & Tribal Jewelry</Link>
                            <Link to="/products/fashion-lifestyle" onClick={() => setIsOpen(false)}>• Contemporary Fashion Jewelry</Link>
                            <Link to="/products/fashion-lifestyle" onClick={() => setIsOpen(false)}>• Handcrafted Accessories</Link>
                            <Link to="/products/fashion-lifestyle" onClick={() => setIsOpen(false)}>• Indian Lifestyle Products</Link>
                          </div>
                        </div>

                        {/* Apparel & Textiles */}
                        <div className="pt-2 border-t border-white/5">
                          <Link
                            to="/products/apparel-textiles"
                            onClick={() => setIsOpen(false)}
                            className="font-body text-sm text-white font-bold block mb-1"
                          >
                            03. Apparel & Textiles →
                          </Link>
                          <div className="pl-3 flex flex-col gap-1 text-xs text-white/70">
                            <Link to="/products/apparel-textiles/kanjivaram-silk-saree" onClick={() => setIsOpen(false)} className="text-[#dcb782] font-medium">• Silk Sarees & Traditional Silk (Kanjivaram)</Link>
                            <Link to="/products/apparel-textiles" onClick={() => setIsOpen(false)}>• Handloom & Regional Textiles</Link>
                            <Link to="/products/apparel-textiles" onClick={() => setIsOpen(false)}>• Cotton & Linen Fabrics</Link>
                            <Link to="/products/apparel-textiles" onClick={() => setIsOpen(false)}>• Hand Block Printed Textiles</Link>
                            <Link to="/products/apparel-textiles" onClick={() => setIsOpen(false)}>• Apparel & Garments</Link>
                            <Link to="/products/apparel-textiles" onClick={() => setIsOpen(false)}>• Home Textiles & Furnishings</Link>
                            <Link to="/products/apparel-textiles" onClick={() => setIsOpen(false)}>• Yarns & Textile Components</Link>
                          </div>
                        </div>

                        <Link
                          to="/products"
                          onClick={() => setIsOpen(false)}
                          className="font-mono text-[10px] text-[#dcb782] uppercase pt-2 border-t border-white/10 text-center font-bold"
                        >
                          View Full Sourcing Catalog →
                        </Link>
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
                  className="font-heading italic text-2xl text-[#dfd1b9] hover:text-[#fbfbeb] transition-all"
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              to="/request-quote"
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#dcb782] to-[#ab8558] text-black font-body font-bold rounded-xl py-3.5 text-xs tracking-wider uppercase shadow-lg"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
