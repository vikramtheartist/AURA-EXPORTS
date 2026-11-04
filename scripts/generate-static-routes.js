/**
 * AURA Global Trade - Static Route Generator for GitHub Pages SPA
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
    title: 'About AURA Global Trade | Chennai-Based Indian Export Company & Sourcing Mission',
    description: 'Learn about AURA Global Trade, an international sourcing and export enterprise operating from Chennai, Tamil Nadu. Connecting international buyers with Indian agricultural, jewellery, and textile products.',
    canonical: 'https://auraexport.co/about',
  },
  {
    path: '/products',
    title: 'Indian Products Catalogue | Agriculture, Jewellery & Textiles Wholesale Export | AURA',
    description: 'Explore AURA Global Trade\'s three export verticals: Indian agricultural commodities and spices, handcrafted artisanal jewellery, and regional handloom textiles for global B2B procurement.',
    canonical: 'https://auraexport.co/products',
  },
  {
    path: '/products/agro-products',
    title: 'Indian Agricultural Exporters & Spices Wholesale | Tamil Nadu & Kerala Origins | AURA Global Trade',
    description: 'South India agricultural export and sourcing partner based in Chennai. Direct wholesale sourcing of Salem turmeric fingers, Alleppey green cardamom, Malabar black pepper, cumin seeds, chillies and moringa powder.',
    canonical: 'https://auraexport.co/products/agro-products',
  },
  {
    path: '/products/agro-products/turmeric',
    title: 'Salem Turmeric Exporter India | Erode Turmeric Powder & Fingers Wholesale | AURA Global Trade',
    description: 'Indian turmeric exporter sourcing Salem double-polished fingers, unpolished fingers, and cold-milled powder from Erode and Salem, Tamil Nadu growing regions. Product specifications and quotations available upon enquiry.',
    canonical: 'https://auraexport.co/products/agro-products/turmeric',
  },
  {
    path: '/products/fashion-lifestyle',
    title: 'Indian Fashion Jewellery Exporter | South Indian Temple & Kundan Jewellery Wholesale | AURA Global Trade',
    description: 'Indian fashion jewellery exporter based in Chennai. Wholesale sourcing of handcrafted South Indian temple jewellery, Jaipur Jadau Kundan and Meenakari bridal suites, and contemporary CZ fashion jewellery.',
    canonical: 'https://auraexport.co/products/fashion-lifestyle',
  },
  {
    path: '/products/apparel-textiles',
    title: 'Indian Textile Exporter | Kanchipuram Silk, Handloom Fabrics & Cotton | AURA Global Trade',
    description: 'Indian textile export company connecting global buyers with Kanchipuram silk sarees, regional handloom fabrics, cotton and linen yardage sourced from established Indian weaving clusters.',
    canonical: 'https://auraexport.co/products/apparel-textiles',
  },
  {
    path: '/products/apparel-textiles/kanjivaram-silk-saree',
    title: 'Kanchipuram Silk Saree Exporter | Handloom Pure Silk Sarees India | AURA Global Trade',
    description: 'Direct exporter of traditional Kanchipuram silk sarees with three-ply Murukku Pattu yarn, Korvai contrast borders, and heritage motifs sourced from Kanchipuram, Tamil Nadu.',
    canonical: 'https://auraexport.co/products/apparel-textiles/kanjivaram-silk-saree',
  },
  {
    path: '/request-quote',
    title: 'Request B2B Export Quotation | Wholesale Sourcing Intake | AURA Global Trade',
    description: 'Submit an initial B2B export Request for Quote (RFQ) for Indian agricultural commodities, handcrafted jewellery, or handloom fabrics. Receive an itemised commercial quotation based on your target specifications.',
    canonical: 'https://auraexport.co/request-quote',
  },
  {
    path: '/quality-compliance',
    title: 'Export Quality Assurance & Inspection | AURA Global Trade',
    description: 'Overview of AURA Global Trade\'s export quality assurance and pre-shipment inspection processes for agricultural commodities, fashion jewellery, and textiles.',
    canonical: 'https://auraexport.co/quality-compliance',
  },
  {
    path: '/export-process',
    title: 'Indian Export Execution & Logistics Process | Incoterms FOB & CIF | AURA Global Trade',
    description: 'Understand AURA Global Trade\'s 5-step international B2B export process: enquiry review, specification confirmation, commercial terms, dispatch coordination, and shipping documentation.',
    canonical: 'https://auraexport.co/export-process',
  },
  {
    path: '/contact',
    title: 'Contact AURA Global Trade Desk | Chennai Export Office & RFQ Support',
    description: 'Connect directly with AURA Global Trade officers in Chennai, Tamil Nadu, India. WhatsApp support (+91 9361990229), direct phone calls, corporate email, or commercial quotation requests.',
    canonical: 'https://auraexport.co/contact',
  },
  {
    path: '/faqs',
    title: 'B2B Procurement FAQs | Indian Export Trade Desk | AURA Global Trade',
    description: 'Frequently asked questions for international importers: minimum order quantities (MOQ), sample dispatch policies, export documentation, payment terms, and logistics coordination.',
    canonical: 'https://auraexport.co/faqs',
  },
  {
    path: '/terms-of-trade',
    title: 'Terms of Trade & Commercial Export Policy | AURA Global Trade',
    description: 'Commercial trading terms, Incoterms 2020 definitions (FOB, CIF, CFR), payment structures, quality inspection parameters, and shipment fulfillment policies for international buyers.',
    canonical: 'https://auraexport.co/terms-of-trade',
  },
  {
    path: '/terms',
    title: 'Terms of Service & Website Usage | AURA Global Trade',
    description: 'Legal terms of service and website usage conditions governing the AURA Global Trade B2B export portal.',
    canonical: 'https://auraexport.co/terms',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy & Data Protection | AURA Global Trade',
    description: 'Privacy policy detailing how AURA Global Trade processes and protects corporate enquiry information and user data in accordance with international data protection standards.',
    canonical: 'https://auraexport.co/privacy',
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

  fs.writeFileSync(path.join(targetDir, 'index.html'), pageHtml);
  console.log(`✓ Generated static route: ${route.path}/index.html`);
}

console.log(`\nSuccessfully generated ${routes.length} static route entry points for GitHub Pages.`);
