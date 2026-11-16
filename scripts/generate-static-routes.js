/**
 * Aura Exports - Static Route Generator for GitHub Pages SPA
 * 
 * Generates physical HTML entry points for all 16 canonical sitemap routes
 * so direct HTTP requests and search engine crawlers (Googlebot) receive
 * HTTP 200 OK responses with prerendered metadata, rather than a GitHub Pages 404.
 * Also creates dist/404.html for universal client-side routing fallback.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

const baseHtmlPath = path.join(distDir, 'index.html');
const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');

// Copy index.html to 404.html for GitHub Pages fallback
fs.writeFileSync(path.join(distDir, '404.html'), baseHtml);
console.log('✓ Created dist/404.html for SPA fallback');

// Canonical route metadata definitions matching src/config/seo.ts
const routes = [
  {
    path: '/about',
    title: 'About AURA Enterprise Exports | Pure & Ethical Indian Sourcing',
    description: 'Discover AURA Enterprise Exports (OPC) Private Limited: our mission, ethical sourcing governance, export corridors, and commitment to global B2B trade excellence.',
    canonical: 'https://auraexport.co/about',
  },
  {
    path: '/products',
    title: 'Export Products Catalogue | Agro Commodities, Textiles & Jewellery | AURA',
    description: 'Explore AURA Enterprise Exports\' institutional procurement portfolio: Indian agricultural commodities, South Indian spices, artisanal fashion jewellery, and regional handlooms.',
    canonical: 'https://auraexport.co/products',
  },
  {
    path: '/buy-retail',
    title: 'Buy Retail Gourmet Spices Online | AURA Enterprise Exports',
    description: 'Shop pure single-origin Indian spices online. Direct Salem turmeric powder, Alleppey green cardamom, Guntur chillies, and gourmet tins. Pan-India and global doorstep delivery.',
    canonical: 'https://auraexport.co/buy-retail',
  },
  {
    path: '/products/agro-products',
    title: 'Indian Agro Products Exporter | Spices, Grains & Commodities | AURA',
    description: 'Direct-from-origin Indian agricultural commodities exporter. Bulk sourcing for Salem turmeric, Alleppey cardamom, Tellicherry pepper, Guntur chillies, and grains.',
    canonical: 'https://auraexport.co/products/agro-products',
  },
  {
    path: '/products/agro-products/turmeric',
    title: 'Salem Turmeric Fingers Exporter India | High Curcumin Bulk Export | AURA',
    description: 'Export-grade Salem double-polished turmeric fingers with 3.5%–4.5% curcumin content. Direct origin sourcing from Tamil Nadu with certified lab parameters.',
    canonical: 'https://auraexport.co/products/agro-products/turmeric',
    image: 'https://auraexport.co/images/agro_turmeric_fingers_showcase.jpg',
  },
  {
    path: '/products/agro-products/rice-basmati-non-basmati',
    title: 'Rice & Specialty Grains Exporter India | Basmati & South Indian Rice Wholesale | AURA',
    description: 'Indian rice exporter based in Chennai. Sourcing premium 1121 Steam, Pusa & Traditional Basmati rice, and South Indian staples (Sona Masoori, Ponni & Matta) for UAE & GCC wholesale and retail distribution.',
    canonical: 'https://auraexport.co/products/agro-products/rice-basmati-non-basmati',
  },
  {
    path: '/products/fashion-lifestyle',
    title: 'Indian Fashion & Lifestyle Exporter | Artisanal Jewellery & Wellness | AURA',
    description: 'B2B export of Indian artisanal jewellery, temple jewelry, Kundan, contemporary CZ, and wellness products crafted for global luxury markets.',
    canonical: 'https://auraexport.co/products/fashion-lifestyle',
  },
  {
    path: '/products/apparel-textiles',
    title: 'Indian Textile Exporter & Apparel Sourcing | Cotton, Silk & Handloom | AURA',
    description: 'Verified Indian textile exporter and apparel manufacturer sourcing partner. Organic cotton, heritage silk, regional handlooms, and custom private-label garment export.',
    canonical: 'https://auraexport.co/products/apparel-textiles',
  },
  {
    path: '/products/apparel-textiles/kanjivaram-silk-saree',
    title: 'Kanchipuram Silk Saree Exporter | Handloom Pure Silk Sarees India | AURA',
    description: 'Direct exporter of traditional Kanchipuram silk sarees with three-ply Murukku Pattu yarn, Korvai contrast borders, and heritage motifs sourced from Kanchipuram, Tamil Nadu.',
    canonical: 'https://auraexport.co/products/apparel-textiles/kanjivaram-silk-saree',
    image: 'https://auraexport.co/images/saree_kanjivaram_hero.jpg',
  },
  {
    path: '/request-quote',
    title: 'Request B2B Export Quotation | Wholesale Sourcing Intake | AURA Enterprise Exports',
    description: 'Submit an initial B2B export Request for Quote (RFQ) for Indian agricultural commodities, handcrafted jewellery, or handloom fabrics. Receive an itemised commercial quotation based on your target specifications.',
    canonical: 'https://auraexport.co/request-quote',
  },
  {
    path: '/quality-compliance',
    title: 'Export Quality Assurance & Laboratory Testing | AURA Enterprise Exports',
    description: 'Stringent export quality verification: NABL-accredited laboratory testing, phytosanitary compliance, multi-tier lot sampling, and container stuffing inspections.',
    canonical: 'https://auraexport.co/quality-compliance',
  },
  {
    path: '/export-process',
    title: 'Export Process & Procurement Workflow | AURA Enterprise Exports',
    description: 'Structured international export procedure: from RFQ and sample analysis to LC terms, freight forwarding, customs clearance, and port-to-port logistics.',
    canonical: 'https://auraexport.co/export-process',
  },
  {
    path: '/contact',
    title: 'Contact AURA Enterprise Exports Desk | Chennai Export Office & RFQ Support',
    description: 'Connect directly with AURA Enterprise Exports trade desk in Chennai, Tamil Nadu, India. WhatsApp support (+91 9361990229), direct phone calls, corporate email, or commercial quotation requests.',
    canonical: 'https://auraexport.co/contact',
  },
  {
    path: '/faqs',
    title: 'B2B Procurement FAQs | Indian Export Trade Desk | AURA Enterprise Exports',
    description: 'Frequently asked questions for international importers: minimum order quantities (MOQ), sample dispatch policies, export documentation, payment terms, and logistics coordination.',
    canonical: 'https://auraexport.co/faqs',
  },
  {
    path: '/terms-of-trade',
    title: 'Terms of Trade & Commercial Export Policy | AURA Enterprise Exports',
    description: 'Commercial trading terms, Incoterms 2020 definitions (FOB, CIF, CFR), payment structures, quality inspection parameters, and shipment fulfillment policies for international buyers.',
    canonical: 'https://auraexport.co/terms-of-trade',
  },
  {
    path: '/terms',
    title: 'Terms of Service & Website Usage | AURA Enterprise Exports',
    description: 'Legal terms of service and website usage conditions governing the AURA Enterprise Exports B2B export portal.',
    canonical: 'https://auraexport.co/terms',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy & Data Protection | AURA Enterprise Exports',
    description: 'Privacy policy detailing how AURA Enterprise Exports processes and protects corporate enquiry information and user data in accordance with international data protection standards.',
    canonical: 'https://auraexport.co/privacy',
  },
  {
    path: '/card',
    title: 'Vikram — Managing Director | AURA Enterprise Exports Digital Business Card',
    description: 'Official executive digital business card for Vikram, Managing Director at AURA Enterprise Exports. Save contact details directly to your mobile phone or call our trade desk.',
    canonical: 'https://auraexport.co/card',
  },
  {
    path: '/business-card',
    title: 'Vikram — Managing Director | AURA Enterprise Exports Digital Business Card',
    description: 'Official executive digital business card for Vikram, Managing Director at AURA Enterprise Exports. Save contact details directly to your mobile phone or call our trade desk.',
    canonical: 'https://auraexport.co/business-card',
  },
];

for (const route of routes) {
  const targetDir = path.join(distDir, route.path.replace(/^\//, ''));
  fs.mkdirSync(targetDir, { recursive: true });

  let pageHtml = baseHtml;
  // Replace title
  pageHtml = pageHtml.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);
  
  // Replace meta description
  pageHtml = pageHtml.replace(
    /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="description" content="${route.description}" />`
  );

  // Replace canonical
  pageHtml = pageHtml.replace(
    /<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i,
    `<link rel="canonical" href="${route.canonical}" />`
  );

  // Replace og:title & og:description & og:url
  pageHtml = pageHtml.replace(
    /<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:title" content="${route.title}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:description" content="${route.description}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:url" content="${route.canonical}" />`
  );

  // Replace twitter tags
  pageHtml = pageHtml.replace(
    /<meta\s+name=["']twitter:title["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta\s+name=["']twitter:description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="twitter:description" content="${route.description}" />`
  );

  // Replace og:image & twitter:image if route-specific image provided
  if (route.image) {
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:image["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:image" content="${route.image}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']twitter:image["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="twitter:image" content="${route.image}" />`
    );
  }

  // 1. Directory entrypoint: /route/index.html (serves https://auraexport.co/route/ with HTTP 200)
  fs.writeFileSync(path.join(targetDir, 'index.html'), pageHtml);

  // 2. Clean URL flat entrypoint: /route.html (serves https://auraexport.co/route directly with HTTP 200 on GitHub Pages, preventing 301 trailing slash redirects and canonical loops)
  const cleanPath = route.path.replace(/^\//, '');
  const flatFilePath = path.join(distDir, `${cleanPath}.html`);
  const flatFileDir = path.dirname(flatFilePath);
  if (!fs.existsSync(flatFileDir)) {
    fs.mkdirSync(flatFileDir, { recursive: true });
  }
  fs.writeFileSync(flatFilePath, pageHtml);

  console.log(`✓ Generated static route: ${route.path}/index.html & ${cleanPath}.html`);
}

console.log(`\nSuccessfully generated ${routes.length} static route entry points for GitHub Pages.`);
