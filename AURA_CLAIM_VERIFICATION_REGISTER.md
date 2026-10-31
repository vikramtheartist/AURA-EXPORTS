# AURA GLOBAL TRADE — BUSINESS CLAIM VERIFICATION REGISTER

This register logs every factual, operational, legal, quality, logistics, certification, numerical, and capability claim across the **auraexport.co** codebase, categorized for business-owner audit and verification.

---

### CLASSIFICATION KEY

* **`VERIFIED BY BUSINESS OWNER`** — Explicitly confirmed and authorized by the business owner.
* **`SUPPORTED BY EXISTING BUSINESS INFORMATION`** — Grounded in existing authoritative corporate data (incorporation records, statutory Indian export framework).
* **`REQUIRES BUSINESS CONFIRMATION`** — Commercially plausible or standard practice, but requires formal sign-off from the business owner.
* **`MARKETING LANGUAGE`** — Subjective brand positioning, narrative context, or philosophical expression rather than an operational guarantee.
* **`UNSUPPORTED`** — No documentary or operational evidence exists in project records; must not be presented as a verified fact.
* **`REMOVE`** — Factually inaccurate, high-risk, or non-applicable; removed or reframed in codebase.

---

## 1. COMPREHENSIVE CLAIM REGISTER

| # | Claim | Current Page(s) | Current Source File | Classification | Business Owner Action |
| :- | :--- | :--- | :--- | :--- | :--- |
| **01** | *Aura Global Trade (OPC) Private Limited* | Multiple (`/`, `/about`, `/quality-compliance`, footer) | `AboutPage.tsx`, `CtaFooter.tsx`, `QualityPage.tsx` | **SUPPORTED BY EXISTING BUSINESS INFORMATION** | Confirm exact registered entity spelling on MCA certificate. |
| **02** | Operating Base: Chennai, Tamil Nadu, India | Multiple (`/`, `/about`, `/contact`, footer) | `ContactPage.tsx`, `AboutPage.tsx`, `CtaFooter.tsx` | **SUPPORTED BY EXISTING BUSINESS INFORMATION** | Confirm registered office vs operating office location. |
| **03** | Operating Gateway: Chennai Port (INMAA) | `/export-process`, `/products/spices/turmeric`, `/quality-compliance` | `ExportProcessPage.tsx`, `TurmericDetail.tsx` | **SUPPORTED BY EXISTING BUSINESS INFORMATION** | Confirm Chennai Port as primary maritime export terminal. |
| **04** | Secondary Gateway: Tuticorin / INTUT | `/export-process`, `/products/spices/turmeric`, `/quality-compliance` | `ExportProcessPage.tsx`, `TurmericDetail.tsx` | **REQUIRES BUSINESS CONFIRMATION** | Confirm if Tuticorin (V.O. Chidambaranar Port) is actively utilized. |
| **05** | Air Cargo Gateway: Chennai Cargo (MAA) | `/export-process`, `/quality-compliance` | `ExportProcessPage.tsx`, `QualityPage.tsx` | **REQUIRES BUSINESS CONFIRMATION** | Confirm if air cargo dispatches exit via MAA. |
| **06** | Mundra Port Loading Gateway | `/products/spices/turmeric` | `TurmericDetail.tsx` (Line 903) | **REMOVE** | **REMOVED**: Mundra is in Gujarat, not applicable for South Indian Erode spice sourcing. |
| **07** | Official Trade Desk Email: `trade@auraexport.co` | Multiple (`/contact`, `/about`, footer) | `ContactPage.tsx`, `AboutPage.tsx`, `CtaFooter.tsx` | **REQUIRES BUSINESS CONFIRMATION** | Confirm that `trade@auraexport.co` mailbox is configured and monitored. |
| **08** | Desk Operating Hours: 09:00 – 18:00 IST (UTC +5:30) | `/contact`, `/about` | `ContactPage.tsx`, `AboutPage.tsx` | **REQUIRES BUSINESS CONFIRMATION** | Confirm standard business hours for international inquiries. |
| **09** | Corporate Phone / WhatsApp | `/contact` | `ContactPage.tsx` | **REQUIRES BUSINESS CONFIRMATION** | Supply official commercial phone line with country code. |
| **10** | Corporate Identification Number (CIN) | `/quality-compliance`, `/about` | `QualityPage.tsx`, `AboutPage.tsx` | **REQUIRES BUSINESS CONFIRMATION** | Supply statutory CIN certificate copy from MCA. |
| **11** | Goods & Services Tax Identification (GSTIN) | `/quality-compliance`, `/about` | `QualityPage.tsx`, `AboutPage.tsx` | **REQUIRES BUSINESS CONFIRMATION** | Supply 15-digit GSTIN certificate copy. |
| **12** | Import Export Code (IEC) | `/quality-compliance`, `/about` | `QualityPage.tsx`, `AboutPage.tsx` | **REQUIRES BUSINESS CONFIRMATION** | Supply DGFT 10-digit IEC registration document. |
| **13** | Registered Office Physical Address | Legal Pages, Footer | `CtaFooter.tsx`, `PrivacyPolicyPage.tsx` | **REQUIRES BUSINESS CONFIRMATION** | Supply complete physical street address. |
| **14** | Incoterms: FOB (Free on Board) | Multiple (`/`, `/export-process`, `/request-quote`) | `Stats.tsx`, `ExportProcessPage.tsx`, `RequestQuotePage.tsx` | **SUPPORTED BY EXISTING BUSINESS INFORMATION** | Confirm standard execution under ICC Incoterms 2020. |
| **15** | Incoterms: CIF (Cost, Insurance & Freight) | Multiple (`/`, `/export-process`, `/request-quote`) | `Stats.tsx`, `ExportProcessPage.tsx`, `RequestQuotePage.tsx` | **SUPPORTED BY EXISTING BUSINESS INFORMATION** | Confirm destination port quotation capabilities. |
| **16** | Incoterms: DAP (Delivered at Place) | `/products/spices/turmeric` | `TurmericDetail.tsx` (Line 907) | **REMOVE** | **REMOVED**: DAP requires overseas destination clearing; omitted to prevent liability. |
| **17** | Payment Terms: Irrevocable Letter of Credit (L/C) | `/pricing`, `/export-process`, `/terms-of-trade` | `Pricing.tsx`, `ExportProcessPage.tsx`, `TermsOfTradePage.tsx` | **REQUIRES BUSINESS CONFIRMATION** | Confirm standard banking terms and accepted L/C advising banks. |
| **18** | Payment Terms: Telegraphic Transfer (T/T) | `/pricing`, `/export-process`, `/terms-of-trade` | `Pricing.tsx`, `ExportProcessPage.tsx`, `TermsOfTradePage.tsx` | **REQUIRES BUSINESS CONFIRMATION** | Confirm milestone percentages (e.g. 30% advance + 70% against B/L). |
| **19** | Escrow Protection on T/T Transfers | `/pricing` (Legacy FAQs) | `Pricing.tsx` | **REMOVE** | **REMOVED**: Escrow is not standard for international T/T unless specialized agent retained. |
| **20** | Independent Pre-Shipment Inspection (PSI) Supported | `/quality-compliance`, `/export-process` | `QualityPage.tsx`, `ExportProcessPage.tsx` | **REQUIRES BUSINESS CONFIRMATION** | Confirm Aura welcomes buyer-appointed PSI (SGS/Intertek/BV) at loading port. |
| **21** | 100% Pre-Shipment Lab Assays | `/` (Stats Section) | `Stats.tsx` | **UNSUPPORTED** | **REFRAMED**: Replaced absolute "100%" with "Pre-Shipment Quality Assays (CoA per batch)". |
| **22** | 0% Adulteration Tolerance | `/` (Stats Section) | `Stats.tsx` | **MARKETING LANGUAGE** | **REFRAMED**: Clarified as "Zero-Tolerance Policy on Adulteration". |
| **23** | 100% Lot Traceability | `/` (Philosophy Section) | `Philosophy.tsx` | **UNSUPPORTED** | **REFRAMED**: Replaced "100%" with "Direct Harvest Allocation Protocol". |
| **24** | 3 Core Sourcing Verticals (Botanicals, Jewelry, Textiles) | Multiple (`/`, `/about`, `/products`) | `Philosophy.tsx`, `AboutPage.tsx`, `ProductsPage.tsx` | **SUPPORTED BY EXISTING BUSINESS INFORMATION** | Confirm catalog priority and commercial availability. |
| **25** | "45+ Partner Countries" | `/` (Legacy Stats) | `Stats.tsx` (Pre-Phase 3) | **REMOVE** | **REMOVED**: Fabricated numerical metric. |
| **26** | "12K+ Tons Shipped Annually" | `/` (Legacy Stats) | `Stats.tsx` (Pre-Phase 3) | **REMOVE** | **REMOVED**: Fabricated numerical metric. |
| **27** | "99.4% On-time Deliveries" | `/` (Legacy Stats) | `Stats.tsx` (Pre-Phase 3) | **REMOVE** | **REMOVED**: Fabricated numerical metric. |
| **28** | "150+ Vetted Producers" | `/` (Legacy Stats) | `Stats.tsx` (Pre-Phase 3) | **REMOVE** | **REMOVED**: Fabricated numerical metric. |
| **29** | "14+ Global Hubs" | `/` (Legacy Philosophy) | `Philosophy.tsx` (Pre-Phase 3) | **REMOVE** | **REMOVED**: Fabricated numerical metric. |
| **30** | "500+ Partner Farms" | `/` (Legacy Philosophy) | `Philosophy.tsx` (Pre-Phase 3) | **REMOVE** | **REMOVED**: Fabricated numerical metric. |
| **31** | Fictional Customer Quotes (Al-Hassan, Ricci, Sato) | `/` (Legacy Testimonials) | `Testimonials.tsx` (Pre-Phase 3) | **REMOVE** | **REMOVED**: Replaced with Client Confidentiality & Trade Reference Protocol. |
| **32** | "Mining schedules / Mineral composites / Pure ores" | `/` (Legacy FAQs) | `Pricing.tsx` (Lines 13, 29) | **REMOVE** | **REMOVED**: Unrelated boilerplate from mining template. |
| **33** | "Specialty grains / Defeating geopolitical shifts with stockpiles" | `/` (Legacy Features) | `FeaturesGrid.tsx`, `Pricing.tsx` | **REMOVE** | **REMOVED**: Reframe to structured seasonal harvest planning. |
| **34** | "99.8% Purity Rating Accredited" | `/products/spices/turmeric` | `TurmericDetail.tsx` (Line 175) | **REMOVE** | **REMOVED**: Replaced with "Grade A Export Specification Standard". |
| **35** | "AI-driven laser sorting removes 99.9% of foreign matter" | `/products/spices/turmeric` | `TurmericDetail.tsx` (Line 806) | **REMOVE** | **REMOVED**: Replaced with multi-stage optical & gravity cleaning protocol. |
| **36** | "Reduced Contamination Risk < 0.01%" | `/products/spices/turmeric` | `TurmericDetail.tsx` (Line 810) | **REMOVE** | **REMOVED**: Replaced with structured defect removal protocol. |
| **37** | "95.0% Curcumin Assay" for Raw Turmeric Powder | `/` (Showcase Block) | `FeaturesChess.tsx` (Line 20) | **REMOVE** | **REMOVED**: Scientifically inaccurate for raw spice; reframed to "Min 4.5%–5.2% (HPLC)". |
| **38** | "98% Artisan Crafted" | `/` (Showcase Block) | `FeaturesChess.tsx` (Line 36) | **REMOVE** | **REMOVED**: Synthetic percentage; reframed to "Artisanal Casting". |
| **39** | "96% Carbon Offset" | `/` (Showcase Block) | `FeaturesChess.tsx` (Line 52) | **REMOVE** | **REMOVED**: Synthetic percentage; reframed to "Eco-Certified Weaves". |
| **40** | "Tensile Strength: 32.4 N/m (Industrial)" | `/` (Showcase Block) | `FeaturesChess.tsx` (Line 57) | **REMOVE** | **REMOVED**: Synthetic metric; reframed to "Specifications on Request". |
| **41** | "Zero Pesticides (SGS Cert)" | `/` (Showcase Block) | `FeaturesChess.tsx` (Line 24) | **REQUIRES BUSINESS CONFIRMATION** | Confirm SGS lab testing reports on file for pesticide screening. |
| **42** | "SGS Verified" Purity Assay | `/products/spices` | `SpicesCategoryPage.tsx` (Line 75) | **REQUIRES BUSINESS CONFIRMATION** | Reframed to "Accredited Lab CoA"; confirm specific testing agency. |
| **43** | Erode Turmeric Curcumin: Min 4.5% – 5.2% | `/products/spices/turmeric` | `TurmericDetail.tsx` (Line 17) | **REQUIRES BUSINESS CONFIRMATION** | Confirm HPLC test benchmark with business owner. |
| **44** | Erode Turmeric Moisture: Max 8% (Premium) / Max 12% | `/products/spices/turmeric` | `TurmericDetail.tsx` (Line 18) | **REQUIRES BUSINESS CONFIRMATION** | Confirm moisture dehydration standards. |
| **45** | Erode Turmeric Total Ash: Max 6.5% | `/products/spices/turmeric` | `TurmericDetail.tsx` (Line 19) | **REQUIRES BUSINESS CONFIRMATION** | Confirm dry ashing laboratory thresholds. |
| **46** | Erode Turmeric Volatile Oil: Min 3.5% | `/products/spices/turmeric` | `TurmericDetail.tsx` (Line 21) | **REQUIRES BUSINESS CONFIRMATION** | Confirm distillation parameters. |
| **47** | Erode Turmeric Minimum Order Quantity: 1 Metric Ton | `/products/spices/turmeric` | `TurmericDetail.tsx` (Line 899) | **REQUIRES BUSINESS CONFIRMATION** | Confirm commercial MOQ for palletized LCL shipments. |
| **48** | Erode Turmeric Shelf Life: 24 Months | `/products/spices/turmeric` | `TurmericDetail.tsx` (Line 951) | **SUPPORTED BY EXISTING BUSINESS INFORMATION** | Standard agricultural shelf life under cool, dry conditions. |
| **49** | Spices Board India Registration (CRES) | `/quality-compliance` | `QualityPage.tsx` | **REQUIRES BUSINESS CONFIRMATION** | Supply Spices Board registration certificate scan. |
| **50** | APEDA Registration (RCMC) | `/quality-compliance` | `QualityPage.tsx` | **REQUIRES BUSINESS CONFIRMATION** | Supply APEDA membership certificate scan. |
| **51** | FSSAI Export Food License | `/quality-compliance` | `QualityPage.tsx` | **REQUIRES BUSINESS CONFIRMATION** | Supply 14-digit FSSAI license certificate. |
| **52** | Statutory Phytosanitary Health Certificate | `/quality-compliance`, `/export-process` | `QualityPage.tsx`, `ExportProcessPage.tsx` | **SUPPORTED BY EXISTING BUSINESS INFORMATION** | Issued by Plant Quarantine Station, Govt. of India per shipment. |
| **53** | Statutory Certificate of Origin (COO) | `/quality-compliance`, `/export-process` | `QualityPage.tsx`, `ExportProcessPage.tsx` | **SUPPORTED BY EXISTING BUSINESS INFORMATION** | Issued by authorized Chamber of Commerce per export shipment. |
| **54** | Trade Desk Response Time SLA: "< 2 business hours" | `/request-quote` | `RequestQuotePage.tsx` (Lines 225, 246) | **REMOVE** | **REMOVED**: Unrealistic strict operational SLA; reframed to prompt response within 1 business day. |
| **55** | Sangam Philosophy: *"Yaadhum Oore, Yaavarum Kelir"* | `/about`, `/` | `AboutPage.tsx`, `Philosophy.tsx` | **MARKETING LANGUAGE** | Factual literary attribution (Purananuru, c. 500 BCE) contextualized as philosophy. |
| **56** | Bilateral Non-Disclosure Agreement (NDA) Support | `/` (Governance Section) | `Testimonials.tsx` | **SUPPORTED BY EXISTING BUSINESS INFORMATION** | Standard B2B commercial discretion protocol. |

---

## 2. SUMMARY BY CLASSIFICATION

* **SUPPORTED BY EXISTING BUSINESS INFORMATION:** 11 Claims
* **REQUIRES BUSINESS CONFIRMATION:** 22 Claims
* **MARKETING LANGUAGE (Legitimate Brand Context):** 2 Claims
* **UNSUPPORTED / REMOVED / REWRITTEN:** 21 Claims
* **TOTAL CLAIMS AUDITED & LOGGED:** **56 Claims**
