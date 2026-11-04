import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  Package, 
  FileText, 
  Sparkles,
  Award,
  Layers,
  ChevronRight,
  Info
} from 'lucide-react';
import SEOHead from '../../src/components/SEOHead';
import Breadcrumbs from '../../src/components/procurement/Breadcrumbs';
import HowToBuyModule from '../../src/components/procurement/HowToBuyModule';
import InstitutionalRFQModal from '../components/agro/InstitutionalRFQModal';
import FloatingQuickContact from '../components/agro/FloatingQuickContact';
import { getTextileProductBySlug } from '../data/textilesCatalog';

// Gallery assets
import heroImg from '../assets/images/saree_kanjivaram_hero.jpg';
import drapeImg from '../assets/images/saree_kanjivaram_drape.jpg';
import zariImg from '../assets/images/saree_kanjivaram_zari.jpg';
import palluImg from '../assets/images/saree_kanjivaram_pallu.jpg';
import foldedImg from '../assets/images/saree_kanjivaram_folded.jpg';
import fabricImg from '../assets/images/saree_kanjivaram_fabric.jpg';

// Related saree assets
import silkSareesImg from '../assets/images/textile_silk_sarees.jpg';
import handloomRegionalImg from '../assets/images/textile_handloom_regional.jpg';

export default function KanjivaramSareePage() {
  const [activeImage, setActiveImage] = useState<string>(heroImg);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryImages = [
    { src: heroImg, label: 'Full Saree Display', detail: 'Ceremonial bridal drape with gold zari pallu' },
    { src: drapeImg, label: 'Draped Lifestyle', detail: 'Rich contrasting border with temple gopuram motifs' },
    { src: zariImg, label: 'Zari Border Detail', detail: 'High-density metallic zari interlocking korvai weave' },
    { src: palluImg, label: 'Pallu & Traditional Motifs', detail: 'Intricate peacock (mayil) and rudraksham motifs' },
    { src: foldedImg, label: 'Folded Presentation', detail: 'Export presentation packaging format' },
    { src: fabricImg, label: 'Silk Texture Close-Up', detail: '3-ply twisted mulberry silk thread density' },
  ];

  const specifications = [
    { param: 'Silk Composition', spec: '100% Pure Mulberry Silk (Silk Mark verifiable upon request) or Premium Art Silk option', note: 'Batch tested' },
    { param: 'Zari Composition', spec: 'Tested metallic zari wire (copper core with silver/gold electroplate) or traditional zari', note: 'Assay verified' },
    { param: 'Total Saree Length', spec: '6.2 Meters total length (inclusive of 80 cm unstitched matching blouse fabric)', note: 'Standard export' },
    { param: 'Fabric Width', spec: '48 inches (122 cm)', note: 'Tolerance ± 0.5"' },
    { param: 'Saree Weight', spec: '750g to 950g per unit (reflecting heavy, authentic 3-ply silk construction)', note: 'Heavyweight class' },
    { param: 'Weaving Technique', spec: 'Three-shuttle Korvai interlock weaving with Petni pallu join', note: 'Handloom artisan' },
    { param: 'Border Style', spec: 'Broad contrast border (6 to 12 inches) with architectural temple gopuram spikes', note: 'Korvai lock' },
    { param: 'Traditional Motifs', spec: 'Mayil (Peacock), Kuthirai (Winged Horse), Rudraksham, Thazhampoo, Floral Vanki', note: 'Authentic heritage' },
    { param: 'Available Formats', spec: 'Pure Silk Bridal, Silk-Cotton Handloom, Art Silk Commercial Line', note: 'Customizable' },
    { param: 'Care Instructions', spec: 'Professional dry clean only; store folded in breathable cotton muslin', note: 'Handling guide' },
  ];

  const relatedSarees = [
    {
      title: 'Banarasi Brocade Silk Saree',
      origin: 'Varanasi, Uttar Pradesh',
      desc: 'Fine katan silk featuring intricate gold floral jaal and kalga paisley brocades.',
      image: silkSareesImg,
      link: '/products/apparel-textiles/banarasi-silk-saree',
    },
    {
      title: 'Mysore Pure Silk Crepe Saree',
      origin: 'Mysore, Karnataka',
      desc: 'Minimalist fluid silk crepe with understated elegance and rich gold zari border.',
      image: silkSareesImg,
      link: '/products/apparel-textiles/mysore-silk-saree',
    },
    {
      title: 'Pochampally Ikat Handloom Saree',
      origin: 'Pochampally, Telangana',
      desc: 'Heritage double-ikat tie-dyed geometric silk weaves with sharp motif precision.',
      image: handloomRegionalImg,
      link: '/products/apparel-textiles/pochampally-ikat-fabric',
    },
  ];

  const quoteUrl = `/request-quote?product=kanjivaram-silk-saree&category=apparel-textiles&requirement=${encodeURIComponent('Wholesale sourcing quotation for Kanjivaram Silk Sarees (Traditional South Indian Weaves)')}`;

  return (
    <div className="w-full pt-28 pb-24" id="kanjivaram-product-page">
      <SEOHead 
        title="Kanjivaram Silk Saree Exporter | Authentic Kanchipuram Sarees | AURA Global Trade"
        description="Source authentic Kanjivaram silk sarees from Kanchipuram, Tamil Nadu. Traditional South Indian Korvai contrast borders, tested metallic zari, and verified weaver provenance."
        canonical="https://auraexport.co/products/apparel-textiles/kanjivaram-silk-saree"
      />

      {/* Semantic Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Apparel & Textiles', href: '/products/apparel-textiles' },
          { label: 'Kanjivaram Silk Saree', href: '/products/apparel-textiles/kanjivaram-silk-saree' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Back navigation */}
        <Link
          to="/products/apparel-textiles"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#dcb782] hover:text-white transition-colors uppercase tracking-wider mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Apparel & Textiles Vertical</span>
        </Link>

        {/* SECTION A — HERO & GALLERY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Gallery Col (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Active Image with Zoom effect */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#121211] aspect-[4/5] shadow-2xl group">
              <img
                src={activeImage}
                alt="Kanjivaram Silk Saree - AURA Global Trade"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#dcb782] border border-white/10">
                  SOUTH INDIAN TEXTILE ICON
                </span>
              </div>

              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-mono tracking-wider uppercase font-bold px-2.5 py-1 rounded-full bg-[#dcb782]/10 text-[#dcb782] border border-[#dcb782]/20">
                  Weaver Society Sourced
                </span>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-mono text-[#dfd1b9]/80">
                  {galleryImages.find(g => g.src === activeImage)?.detail}
                </p>
              </div>
            </div>

            {/* 6 Thumbnail Triggers */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(img.src)}
                  className={`rounded-xl overflow-hidden border aspect-square relative transition-all cursor-pointer ${
                    activeImage === img.src
                      ? 'border-[#dcb782] ring-2 ring-[#dcb782]/30 scale-95'
                      : 'border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Overview Col (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-[#dcb782]/20 rounded-full px-4 py-1.5 w-fit">
              <Sparkles className="h-3.5 w-3.5 text-[#dcb782]" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#dcb782] font-bold">
                HERITAGE SILK SAREE
              </span>
            </div>

            <div>
              <span className="text-xs font-mono text-[#ab8558] uppercase tracking-wider block mb-1">
                Kanchipuram, Tamil Nadu, India
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white font-medium leading-tight">
                Kanjivaram Silk Saree
              </h1>
            </div>

            <p className="text-lg md:text-xl text-[#dcb782] font-heading italic font-light leading-snug">
              An Icon of South Indian Textile Heritage.
            </p>

            <p className="text-sm md:text-base text-[#D5C8B7] font-light leading-relaxed">
              Originating from the renowned weaving tradition of Kanchipuram, Tamil Nadu, Kanjivaram silk sarees are celebrated for their rich textures, elaborate borders, traditional motifs and distinctive craftsmanship.
            </p>

            {/* Highlight Badges */}
            <div className="grid grid-cols-2 gap-3 py-4 border-y border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#dcb782] shrink-0" />
                <span className="text-white/80 font-light">Three-Ply Twisted Silk</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#dcb782] shrink-0" />
                <span className="text-white/80 font-light">Korvai Interlocked Borders</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#dcb782] shrink-0" />
                <span className="text-white/80 font-light">6.2m with Blouse Piece</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#dcb782] shrink-0" />
                <span className="text-white/80 font-light">Silk Mark Verifiable</span>
              </div>
            </div>

            {/* Commercial Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="bg-[#E2BC86] hover:bg-[#d4a86a] text-[#0A0A0B] font-body font-bold text-xs tracking-wider uppercase px-6 py-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer hover:shadow-[0_8px_20px_rgba(226,188,134,0.25)]"
              >
                <span>Enquire About Kanjivaram Silk Sarees</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <a
                href="#kanjivaram-specs"
                className="border border-white/20 hover:border-white text-white font-body font-bold text-xs tracking-wider uppercase px-5 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
              >
                <span>View Specifications</span>
              </a>
            </div>

            {/* Credibility Box */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-[#dfd1b9]/70 flex items-start gap-3">
              <Info className="h-4 w-4 text-[#dcb782] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-white font-semibold">Authenticity Note: </strong>
                We source directly from certified master weaver societies. We distinguish pure mulberry silk with tested zari from art silk and blended options to guarantee complete commercial transparency.
              </p>
            </div>
          </div>

        </div>

        {/* SECTION B — DETAILED WEAVING HERITAGE & OVERVIEW */}
        <div className="rounded-3xl border border-white/10 bg-[#121211] p-8 md:p-14 mb-24">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono tracking-widest text-[#dcb782] uppercase font-bold block mb-2">
              ORIGIN & CRAFTSMANSHIP
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-white font-normal mb-4">
              The Architecture of Kanchipuram Weaving
            </h2>
            <p className="text-sm md:text-base text-[#D5C8B7] font-light leading-relaxed">
              For over four centuries, the town of Kanchipuram has stood at the epicenter of South Indian ceremonial dressing. Every Kanjivaram saree represents the synchronized coordination of two master weavers operating a manual throw-shuttle pit loom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="text-lg font-heading text-white font-medium mb-2">
                The Korvai Technique
              </h3>
              <p className="text-xs text-[#dfd1b9]/70 font-light leading-relaxed">
                Unlike mass-manufactured jacquard sarees, authentic Kanjivaram utilizes the labor-intensive "Korvai" technique where the body and contrast border are woven simultaneously using three shuttles and interlocked with zig-zag temple teeth.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="text-lg font-heading text-white font-medium mb-2">
                Sacred Motifs & Pallu
              </h3>
              <p className="text-xs text-[#dfd1b9]/70 font-light leading-relaxed">
                The designs draw deep symbolism from temple stone carvings: Mayil (peacock representing royalty), Yanai (elephant for prosperity), Rudraksham beads, and the Thazhampoo (screw pine temple flower).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="text-lg font-heading text-white font-medium mb-2">
                Heavyweight Durability
              </h3>
              <p className="text-xs text-[#dfd1b9]/70 font-light leading-relaxed">
                Woven with twisted mulberry silk yarns (murukku pattu), these sarees possess remarkable tensile strength and natural luster that softens with age, often passed down across generations as heirloom treasures.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION C — STRUCTURED TECHNICAL SPECIFICATIONS */}
        <section className="mb-24" id="kanjivaram-specs">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#ab8558] uppercase font-bold block">
                TECHNICAL VERIFICATION
              </span>
              <h2 className="text-2xl md:text-3xl font-heading text-white font-medium">
                Product Specifications & Testing Parameters
              </h2>
            </div>
            <FileText className="h-5 w-5 text-[#dcb782]" />
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#121211] overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 font-mono text-[#dcb782] uppercase tracking-wider text-[11px]">
                    <th className="py-4 px-6 font-semibold">Parameter</th>
                    <th className="py-4 px-6 font-semibold">Specification Standard</th>
                    <th className="py-4 px-6 font-semibold">Verification Docket</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {specifications.map((item, sIdx) => (
                    <tr key={sIdx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-semibold text-white">{item.param}</td>
                      <td className="py-4 px-6 text-[#dfd1b9]/85 font-light">{item.spec}</td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold bg-[#dcb782]/10 text-[#dcb782] border border-[#dcb782]/20">
                          <CheckCircle2 className="h-3 w-3" />
                          <span>{item.note}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION D — BUYER & PROCUREMENT INFORMATION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <div className="p-8 rounded-3xl border border-white/10 bg-[#121211] flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-[#dcb782]/10 border border-[#dcb782]/20 flex items-center justify-center text-[#dcb782] mb-4">
                <Package className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-heading text-white font-medium mb-2">
                Wholesale Order Allocations
              </h3>
              <p className="text-xs text-[#dfd1b9]/70 font-light leading-relaxed mb-4">
                We coordinate wholesale consignments starting from boutique assortments (15–25 pieces) up to volume department store bridal allotments (100+ units) across verified weaver clusters.
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#dcb782]">Air Cargo & Sea Freight Ready</span>
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-[#121211] flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-[#dcb782]/10 border border-[#dcb782]/20 flex items-center justify-center text-[#dcb782] mb-4">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-heading text-white font-medium mb-2">
                Custom Colorways & Weaves
              </h3>
              <p className="text-xs text-[#dfd1b9]/70 font-light leading-relaxed mb-4">
                Buyers can commission bespoke warp-weft combinations, custom border widths, and private label packaging with brand ribbons and anti-tarnish tissue wrapping.
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#dcb782]">Sample Swatches Dispatched</span>
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-[#121211] flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-[#dcb782]/10 border border-[#dcb782]/20 flex items-center justify-center text-[#dcb782] mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-heading text-white font-medium mb-2">
                Documented Authenticity
              </h3>
              <p className="text-xs text-[#dfd1b9]/70 font-light leading-relaxed mb-4">
                Each consignment is accompanied by Certificate of Origin, Silk Mark fiber verification dockets, and packing lists calibrated for customs clearance.
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#dcb782]">Transparent Commercial Terms</span>
          </div>
        </div>

        {/* SECTION E — HOW TO BUY PROCUREMENT SEQUENCE */}
        <section className="mb-24">
          <HowToBuyModule categorySlug="apparel-textiles" productSlug="kanjivaram-silk-saree" />
        </section>

        {/* SECTION F — RELATED REGIONAL SILK SAREES */}
        <section className="mb-12">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#ab8558] uppercase font-bold block">
                COMPLEMENTARY COLLECTIONS
              </span>
              <h2 className="text-2xl md:text-3xl font-heading text-white font-medium">
                Related Indian Silk Saree Traditions
              </h2>
            </div>
            <Link
              to="/products/apparel-textiles"
              className="text-xs font-mono text-[#dcb782] hover:text-white uppercase tracking-wider flex items-center gap-1"
            >
              <span>View All Textiles</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedSarees.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/10 bg-[#121211] overflow-hidden flex flex-col justify-between hover:border-[#dcb782]/40 transition-colors group"
              >
                <div>
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121211] via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[#dcb782] border border-white/10">
                        {item.origin}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-2">
                    <h3 className="text-xl font-heading text-white font-medium group-hover:text-[#dcb782] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#dfd1b9]/70 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between mt-auto">
                  <Link
                    to="/products/apparel-textiles"
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[#dcb782] hover:text-white transition-colors"
                  >
                    Explore Category →
                  </Link>

                  <Link
                    to={`/request-quote?product=${encodeURIComponent(item.title)}&category=apparel-textiles`}
                    className="text-[11px] font-mono text-white/50 hover:text-white transition-colors underline"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RFQ Modal */}
        <InstitutionalRFQModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={null}
          customTitle="Authentic Kanchipuram Silk Sarees"
          customOrigin="Kanchipuram, Tamil Nadu, India"
          customGrade="Pure Mulberry Silk / Heritage Korvai"
        />

        {/* Global Multi-Channel Contact & Sticky Mobile Actions */}
        <FloatingQuickContact
          productContext={{
            name: 'Authentic Kanchipuram Silk Sarees',
            origin: 'Kanchipuram, Tamil Nadu, India'
          }}
          onOpenRFQ={() => setIsModalOpen(true)}
          isModalOpen={isModalOpen}
        />
      </div>
    </div>
  );
}
