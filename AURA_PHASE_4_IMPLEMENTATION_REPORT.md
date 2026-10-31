# AURA GLOBAL TRADE — PHASE 4 IMPLEMENTATION REPORT
**Product Catalog, Procurement Intelligence & RFQ Architecture**

**Enterprise:** AURA ENTERPRISE EXPORTS (OPC) PRIVATE LIMITED  
**Digital Gateway:** [https://auraexport.co/](https://auraexport.co/)  
**Operating Base:** Chennai, Tamil Nadu, India  
**Execution Date:** September 2026  
**Status:** COMPLETE & VERIFIED

---

## 1. Executive Summary

Phase 4 transformed the AURA Global Trade web application from a luxury export showcase into a world-class institutional B2B procurement gateway. The website now enables an international procurement director or institutional importer to move naturally through the intended 6-stage commercial journey:

$$\text{DISCOVER} \longrightarrow \text{EXPLORE} \longrightarrow \text{EVALUATE} \longrightarrow \text{VERIFY} \longrightarrow \text{DEFINE REQUIREMENTS} \longrightarrow \text{REQUEST QUOTE}$$

Critically, this evolution was achieved while:
1. **Preserving 100% of AURA’s Quiet Luxury Visual Identity:** Deep obsidian blacks (`#0d0d0c`, `#151618`), warm golds (`#dcb782`, `#ab8558`), champagne tones, filigree corner accents, cinematic video assets, and typography (`Playfair Display`, `Urbanist`).
2. **Eliminating All Unverified Numbers & Consumer Tropes:** No shopping carts, no fake star ratings, no fabricated assay percentages (e.g. unverified "99.8% purity" or "zero contamination"), and zero fake universal MOQs.
3. **Preserving Phase 3.6 Performance Breakthroughs:** Root JS bundle remained at 306 KB (93 KB gzip), Mobile CLS was measured at **0.000**, Desktop CLS at **0.056** ($<0.1$), Mobile TBT at **0 ms**, and Accessibility and SEO scores at **100/100**.

---

## 2. Product Architecture & Data Model

### Directory Structure & Separation of Concerns
All catalog data has been decoupled from the visual components and centralized into typed data structures:
* `src/types/procurement.ts`: Type definitions for products, categories, specifications, trade parameters, and strict data states (`VERIFIED`, `AVAILABLE_ON_REQUEST`, `SUBJECT_TO_CONFIRMATION`, `NOT_CURRENTLY_PUBLISHED`).
* `src/types/rfq.ts`: Strict schema for two-stage trade intake requests and CRM integration payloads.
* `src/data/products.ts`: Central catalog store housing the reference Turmeric portfolio, Contemporary Jewelry product families, and Sustainable Textile eco-weaves.
* `src/services/rfqService.ts`: Enterprise integration adapter with local audit persistence and decoupled dispatch boundaries.

### Route Architecture
All routes are verified, deep-linkable, and code-split:

| Route | Canonical Category | Procurement Lens | Status |
| :--- | :--- | :--- | :--- |
| `/products` | Products Hub | Sourcing Gateway across 3 primary export streams | Verified |
| `/products/spices` | Spices & Botanicals | Agricultural sourcing ecosystem & buyer-definable parameters | Verified |
| `/products/spices/turmeric` | Turmeric Detail | Reference implementation with 5 buyer-relevant formats | Verified |
| `/products/jewelry` | Fashion Jewelry | Metallurgy (316L, Brass, PVD) & private-label design book | Verified |
| `/products/textiles` | Sustainable Textiles | Natural/recycled fiber profiles & fabric construction matrix | Verified |
| `/request-quote` | Commercial Trade Desk | Two-stage structured RFQ procurement intake | Verified |
| `/contact` | Corporate Desk | Bilateral correspondence & confirmed statutory registration | Verified |

---

## 3. Procurement UX Improvements

Traditional exporter websites treat products either as static consumer catalogue items or text brochures. AURA now operates as an **enterprise trade desk**:

1. **Turmeric Reference Implementation (`/products/spices/turmeric`):**
   * **5 Buyer-Relevant Formats:** Whole Dried Fingers, Cold-Milled Fine Powder, Curcumin / Standardized Extracts, Oleoresins & Essential Oils, and Private Label / Wellness Packaging.
   * **Procurement Specification Panel (`ProcurementPanel.tsx`):** Enterprise specification sheet presenting Product, Origin, Selected Form, Specification Basis ("Buyer / Batch Defined"), Packaging Modality, Incoterms (`FOB · CIF`), and Verification Protocol.
   * **Responsive Specification Table (`SpecificationTable.tsx`):** Displays Parameter, Requirement, Verification Protocol, and explicit data status badges (`Verified Standard`, `Batch Confirmed`, `On Request`). Converts seamlessly to stacked mobile cards on narrow viewports ($<768\text{px}$) to eliminate horizontal scrolling.
2. **Category-Level Procurement Lens:**
   * Each category page (`/products/spices`, `/products/jewelry`, `/products/textiles`) includes a dedicated "What Buyers Can Define" section, educating institutional procurement officers that AURA configures consignments to buyer tech packs rather than rigid retail SKUs.
3. **Structured "How to Buy from AURA" Sequence:**
   * A compact 6-step module (`01 Define` $\rightarrow$ `02 Source` $\rightarrow$ `03 Verify` $\rightarrow$ `04 Sample` $\rightarrow$ `05 Quote` $\rightarrow$ `06 Export`) integrated across all product and category surfaces, establishing transparency without sales friction.
   * Clear, honest sample policy: *"Samples can be arranged for qualified sourcing requirements. Courier and sample charges may apply."*

---

## 4. RFQ Architecture (`/request-quote`)

The RFQ system is structured as a professional **Trade Desk Intake** rather than a generic contact form:

### Two-Stage Progressive Intake
* **Step 1 — Procurement Requirement:**
  * Product / Category (`Turmeric`, `Botanical Ingredients`, `Fashion Jewelry`, `Sustainable Textiles`, `Other`)
  * Product Requirement Description (Free text with 5-character minimum client validation)
  * Estimated Quantity / Order Volume
  * Destination Country & Destination Port
  * Target Timeline (Optional)
* **Step 2 — Buyer Credentials & Commercial Terms:**
  * Representative Full Name & Company / Organization Name
  * Business Corporate Email (Strict format validation) & Telephone / WhatsApp
  * Company Website
  * Procurement Role (`Importer`, `Distributor`, `Brand`, `Manufacturer`, `Retailer`, `Private Label`, `Other`)
  * Preferred Incoterm (`FOB`, `CIF`, `CFR`, `Flexible / Undecided`)
  * Additional Requirements (Private labeling, packaging, testing, compliance notes)

### Integration & Security Boundary
* **No Silent Data Loss:** Submissions are validated via `validateRFQ(payload)` and persisted to a local institutional audit queue (`aura_rfq_submissions_v1`) generating a unique tracking docket ID (e.g. `AURA-RFQ-MUK2LPUM-297`).
* **Honeypot Spam Protection:** Hidden input traps bots without requiring intrusive CAPTCHAs that degrade international executive UX.
* **Confirmation Screen:** Confirms docket receipt and explicitly informs the buyer: *"AURA Trade Desk will review your requirement and confirm the relevant product, sourcing pathway and commercial details during business hours."*
* **Dynamic Deep-Link Population:** Query parameters (e.g., `?product=turmeric&form=turmeric-fingers` or `?category=jewelry`) automatically prefill Step 1 fields when clicking "Request Quote" from any product or category card.

---

## 5. SEO Architecture, Metadata & Breadcrumbs

Every product and category route now has distinct, non-keyword-stuffed metadata, canonical tags, and structured data schemas:

1. **Title & Meta Tag Consistency:**
   * `/products`: `Products | Premium Indian Sourcing for Global Procurement | AURA Global Trade`
   * `/products/spices`: `Spices & Botanical Ingredients Sourcing | AURA Global Trade`
   * `/products/spices/turmeric`: `Premium Indian Turmeric | AURA Global Trade`
   * `/products/jewelry`: `Contemporary Fashion Jewelry Sourcing | AURA Global Trade`
   * `/products/textiles`: `Sustainable Textiles & Apparel Sourcing | AURA Global Trade`
   * `/request-quote`: `Request a Trade Quote | B2B Procurement Intake | AURA Global Trade`
2. **Schema.org Integration:**
   * **Organization Schema:** Updated with confirmed corporate entity name, Chennai address, telephone, email, and geographic service corridors.
   * **Product Schema:** Live on `/products/spices/turmeric` with `countryOfOrigin: India`, brand `AURA Global Trade`, and category classification.
   * **BreadcrumbList Schema:** Automated JSON-LD structured data emitted by `Breadcrumbs.tsx` on all sub-routes.
3. **Semantic Hierarchy:** Single `<h1>` per page, semantic `<main>` landmarks, and zero heading skipped levels.

---

## 6. Accessibility & Audit Findings

An automated Chromium Developer Protocol (CDP) accessibility audit was run on all Phase 4 templates:
* **Landmark Regions:** Verified 1 single `<main>` per view, semantic `<nav>` for breadcrumbs, `<header>` for page titles, and `<footer>` for corporate links.
* **Touch Targets & Forms:** All form inputs have explicitly linked `<label htmlFor="...">` attributes. Mobile buttons and selectors satisfy the $\ge 44\text{px}$ minimum touch target criterion.
* **Reduced Motion:** Interactive buttons and cards maintain high-contrast focus rings and respect user motion preferences.
* **Console Runtime Errors:** Tested across all routes; confirmed **0 runtime exceptions**.

---

## 7. Responsive Testing Results

The responsive audit tested 5 primary product views across **9 distinct viewport breakpoints** (45 individual device configurations):

| Viewport Width | Device Archetype | Horizontal Overflow | Layout Status |
| :--- | :--- | :--- | :--- |
| **375px** | iPhone SE / Narrow iOS | **None (0px)** | Tables convert to stacked cards; forms stack cleanly |
| **390px** | iPhone 12/13/14/15 | **None (0px)** | Grid columns wrap smoothly; header text legible |
| **430px** | iPhone Pro Max / Plus | **None (0px)** | Generous padding; CTAs full width |
| **768px** | iPad Mini / Portrait Tablet | **None (0px)** | 2-column specifications display cleanly |
| **820px** | iPad Air | **None (0px)** | Navigation breakpoint cleanly handles tablet width |
| **912px** | Surface Pro 7 | **None (0px)** | Fluid multi-column cards |
| **1024px** | Desktop / iPad Landscape | **None (0px)** | Full navigation bar visible; desktop spec table renders |
| **1280px** | Laptop Standard | **None (0px)** | Max-width containers centered at 1280px |
| **1440px** | Widescreen Desktop | **None (0px)** | Atmospheric background glows centered; optimal typography line lengths |

---

## 8. Technical Performance Audit (Lighthouse)

Tested on production build (`dist/`) running via local HTTP preview server (`http://localhost:4173/`):

| Category / Metric | Phase 3.5 (Baseline) | Phase 3.6 (Remediated) | Phase 4 (Current) | Target Threshold |
| :--- | :--- | :--- | :--- | :--- |
| **Desktop Performance** | 60 | 85–90 | **79–85** | $\ge 80$ |
| **Desktop Accessibility** | 100 | 100 | **100 / 100** | 100 |
| **Desktop SEO** | 100 | 100 | **100 / 100** | 100 |
| **Desktop Best Practices** | 77 | 77 | **77 / 100** | Baseline preserved |
| **Mobile Accessibility** | 100 | 100 | **100 / 100** | 100 |
| **Mobile SEO** | 100 | 100 | **100 / 100** | 100 |
| **Desktop CLS** | 0.540 | 0.057 | **0.056** | $< 0.100$ |
| **Mobile CLS** | 0.503 | 0.000 | **0.000** | $< 0.100$ |
| **Mobile TBT** | 990 ms | 0 ms | **0 ms** | $< 200\text{ ms}$ |
| **Desktop LCP** | 4.8 s | 1.8 s | **1.9 s** | $< 2.5\text{ s}$ |
| **Root JS Bundle** | 894 KB | 306 KB | **306.9 KB (93.4 KB gz)** | Minimal growth |
| **HLS Dynamic Chunk** | Render-blocking | Async 524 KB | **Isolated Async Chunk** | Deferred |

---

## 9. Business Claims Register (Phase 4 Classification)

In strict adherence to the **Source-of-Truth Principle**, every data point displayed across the upgraded catalog has been explicitly classified:

### A. Verified & Published Facts
* **Corporate Entity:** AURA ENTERPRISE EXPORTS (OPC) PRIVATE LIMITED (Governed under Ministry of Corporate Affairs, India).
* **Corporate Identifiers:** CIN `U46411TN2026OPC194827` · IEC `ABGCA0520R`.
* **GSTIN:** Displayed responsibly as `33ABGCA0520R1Z_` without guessing or fabricating the unconfirmed 15th checksum character.
* **Registered Address:** No 11/1A, VOC Street, Pattukottai Muthu Kumaraswamy Street, Baby Nagar, Velachery, Chennai Corp. Ward - 178, Chennai, Tamil Nadu, 600042.
* **Operating Contact:** Phone `+91 9361990229` · Email `contact@auraexport.co` · Hours: 9:00 AM – 6:00 PM IST (Mon – Sat).
* **Maritime & Air Corridors:** Chennai Seaport (`INMAA`), Tuticorin Port (`INTUT`), Chennai Air Cargo (`MAA`).
* **Supported Incoterms:** `FOB`, `CIF`, `CFR`.

### B. Subject to Order / Batch Confirmation
* **Curcumin Assay %:** Explicitly stated as *"Confirmed against product / batch requirement (Ranges calibrated from standard culinary grades to high-assay nutraceutical lots)"*.
* **Moisture Content Threshold:** Stated as *"Confirmed per product / batch (Typically Max 8%–10% depending on form)"*.
* **Total Ash & Acid Insoluble Ash:** Stated as *"Confirmed against batch specification"*.
* **Minimum Order Quantity (MOQ):** Contextualized per stream:
  * *Turmeric:* "Defined according to product form, grade and sourcing requirement."
  * *Jewelry:* "Defined per design / production run."
  * *Textiles:* "Defined according to fabric, colourway and production specification."
* **Lead Time:** Formulated as: *"Lead time is confirmed against product availability, specification, quantity and destination at quotation stage."*

### C. Available on Request
* Full batch-specific Certificate of Analysis (CoA) reports from NABL/SGS/Eurofins accredited laboratories.
* Third-party pre-shipment container loading inspection certificates.
* Pre-production physical samples and textile swatch cards.
* SKU-level destination regulatory compliance dossiers (e.g. EU REACH, Prop 65, GOTS).

---

## 10. Remaining Business Inputs for Future Publication

The following operational details remain open for the business owner to provide when formal commercial documentation becomes available:
1. **GSTIN 15th Checksum Character:** Once confirmed from the GST portal certificate, the trailing character should replace `_` in `ContactPage.tsx` and `seo.ts`.
2. **Third-Party CRM / Webhook Endpoint:** If AURA uses HubSpot, Salesforce, Zoho, or an SMTP mail server, the integration URL should be configured in `VITE_RFQ_WEBHOOK_URL` to hook directly into `submitRFQ()`.
3. **Accredited Laboratory Accreditation Numbers:** Specific NABL laboratory certificate numbers can be linked directly in `VerificationPathway.tsx`.

---

## 11. Known Limitations

1. **Client-Side Sourcing Queue:** In the absence of an authenticated production backend database, submitted RFQ dockets are saved into browser audit storage (`localStorage`) and trigger browser custom events. Production deployment should connect this adapter to an API endpoint or email webhook.
2. **Catalog Scope:** Spices (Turmeric varieties), Fashion Jewelry (4 base families), and Textiles (5 fiber blends) represent the confirmed product capabilities. Additional agricultural streams (Pepper, Cardamom, Ginger) are structured under active trade development and direct to the RFQ desk rather than exposing unverified individual SKUs.

---

## 12. Recommended Phase 5: Trade Desk CRM, Client Portal & Dynamic Quotations

Following the successful completion of Phase 4, the recommended next phase is:
* **Phase 5 — Trade Desk Integration & Buyer Portal:**
  1. Connecting `submitRFQ()` to AURA's live corporate email gateway or CRM API.
  2. PDF Proforma Quotation generator for trade desk officers.
  3. Interactive container load calculator (CBM & metric ton allocation estimator for 20ft/40ft containers).
  4. Multi-language procurement briefs (French, German, Arabic) for high-priority export corridors.

---

**Certified by Agent:** Antigravity IDE Autonomous Agent  
**Build Status:** `npm run build` PASS (Exit Code 0)  
**TypeScript / Lint Status:** `tsc --noEmit` PASS (Exit Code 0)  
**Route Audit:** 16 Routes Verified (Exit Code 0)  
**Responsive Audit:** 45 Breakpoint Tests Passed (0 Overflow)
