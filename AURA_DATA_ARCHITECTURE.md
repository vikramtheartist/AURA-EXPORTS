# AURA GLOBAL TRADE — DATA ARCHITECTURE & EXPOSURE MATRIX

**Document Purpose**: This document establishes the authoritative data architecture for **Aura Global Trade (OPC) Private Limited** (`auraexport.co`). It classifies every business data point, technical parameter, operational capability, and commercial policy across three strictly demarcated operational layers before proceeding to Phase 4.

---

## THE THREE DATA EXPOSURE LAYERS

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. PUBLIC WEBSITE LAYER                                                     │
│ Visible to all global visitors; optimized for discoverability, positioning, │
│ procurement clarity, brand authority, and frictionless RFQ initiation.     │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. BUYER VERIFICATION / AVAILABLE ON REQUEST LAYER                          │
│ Structured for serious procurement due diligence; accessible via the AURA   │
│ Verification Kit, downloadable upon inquiry, or shared under bilateral NDA. │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. INTERNAL / BUSINESS OPERATIONS LAYER                                     │
│ Confidential commercial, supplier, margin, and operational data that must   │
│ NEVER be publicly exposed or accessible to external parties.                │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## MASTER DATA CLASSIFICATION TABLE

| # | Data Point / Claim | Current Location | Classification | Public Display? | Buyer Verification? | Internal Only? | Business Owner Confirmation Required? | Strategic Rationale & Governance Notes |
| :- | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **01** | **Legal Entity Name** (*Aura Global Trade (OPC) Private Limited*) | Multiple (`/about`, `/quality-compliance`, footer, legal) | `PUBLIC` | **Yes** | **Yes** | No | No | Foundational corporate transparency; confirms formal incorporation under Indian law. |
| **02** | **Trade Brand Name** (*Aura Global Trade*) | Global UI, Header, Navigation | `PUBLIC` | **Yes** | No | No | No | Primary market trading identity. |
| **03** | **Operating Base City** (*Chennai, Tamil Nadu, India*) | Multiple (`/about`, `/contact`, `/export-process`, footer) | `PUBLIC` | **Yes** | **Yes** | No | No | Factual operating geographic base and commercial headquarters. |
| **04** | **Corporate ID (CIN)** | `/quality-compliance`, `/about`, legal pages | `BUYER VERIFICATION` | No | **Yes** | No | **Yes (for Phase 4 Dossier)** | Expose in Verification Kit as `AVAILABLE ON REQUEST` or within formal onboarding dossier. Avoid raw CIN in main marketing copy to prevent regulatory spam. |
| **05** | **Goods & Services Tax (GSTIN)** | `/quality-compliance`, `/about` | `BUYER VERIFICATION` | No | **Yes** | No | **Yes (for Phase 4 Dossier)** | Statutory tax ID; appropriate for proforma invoices, formal quotation dossiers, and buyer compliance kits. |
| **06** | **Import Export Code (IEC)** | `/quality-compliance`, `/about` | `BUYER VERIFICATION` | No | **Yes** | No | **Yes (for Phase 4 Dossier)** | Core DGFT trade credential; confirm status as `AVAILABLE ON REQUEST` in the Verification Kit. |
| **07** | **Registered Corporate Address** | Legal pages, Footer (placeholder) | `PUBLIC` | **Yes** | **Yes** | No | **Yes** | Statutory requirement on commercial websites and legal notices; city-level on marketing pages, full address in footer/legal. |
| **08** | **Operating Office / Trade Desk Coordinates** | `/contact`, `/about` | `PUBLIC` | **Yes** | **Yes** | No | **Yes** | Physical coordination base in Chennai for international client meetings and executive correspondence. |
| **09** | **Official Trade Desk Telephone / WhatsApp** | `/contact` | `PUBLIC` | **Yes** | **Yes** | No | **Yes** | Direct contactability for procurement officers; essential for commercial conversion. |
| **10** | **Trade Desk Email** (`trade@auraexport.co`) | `/contact`, `/about`, footer | `PUBLIC` | **Yes** | **Yes** | No | **Yes** | Primary commercial intake mailbox. |
| **11** | **Trade Desk Operating Hours** (`09:00 – 18:00 IST`) | `/contact`, `/about` | `PUBLIC` | **Yes** | No | No | **Yes** | Establishes expectation for commercial communication responsiveness. |
| **12** | **Primary Maritime Seaport** (*Chennai Port / INMAA*) | `/export-process`, `/products/spices/turmeric`, `/quality-compliance` | `PUBLIC` | **Yes** | **Yes** | No | No | Factual primary ocean freight corridor for containerized cargo exiting South India. |
| **13** | **Secondary Maritime Seaport** (*Tuticorin / INTUT*) | `/export-process`, `/quality-compliance` | `PUBLIC` | **Yes** | **Yes** | No | **Yes** | Alternative deepwater container port for southern regional sourcing; confirm active offering. |
| **14** | **Air Cargo Terminal** (*Chennai Cargo / MAA*) | `/export-process`, `/quality-compliance` | `PUBLIC` | **Yes** | **Yes** | No | **Yes** | Primary air freight exit point for express batch samples and high-value jewelry. |
| **15** | **Freight Forwarders & Shipping Line Contracts** | Internal Operations | `INTERNAL` | No | No | **Yes** | No | Specific carrier contract rates, forwarder agreements, and bunker surcharge terms are strictly internal trade secrets. |
| **16** | **Supported Incoterms: FOB** (*Free on Board — Chennai/Tuticorin*) | Multiple (`/`, `/export-process`, `/request-quote`) | `PUBLIC` | **Yes** | **Yes** | No | **Yes (Genuinely Offered?)** | Standard international maritime pricing term. Essential for B2B buyer pricing comparison. |
| **17** | **Supported Incoterms: CIF** (*Cost, Insurance & Freight to POD*) | Multiple (`/`, `/export-process`, `/request-quote`) | `PUBLIC` | **Yes** | **Yes** | No | **Yes (Genuinely Offered?)** | High-demand international trade term for destination port delivery; confirm ocean freight quoting capability. |
| **18** | **Supported Incoterms: CFR & EXW** | `/request-quote` (Dropdown option) | `PUBLIC` | **Yes** | No | No | **Yes** | Secondary terms available upon specific buyer contract request. |
| **19** | **Accepted Payment Instruments** (*Irrevocable L/C at sight, Bank Wire T/T*) | `/pricing`, `/export-process`, `/terms-of-trade` | `PUBLIC` | **Yes** | **Yes** | No | **Yes** | Standard institutional banking instruments; builds buyer financial confidence. |
| **20** | **Standard Payment Milestone Split** (*e.g. 30% advance + 70% against B/L*) | Commercial Terms | `BUYER VERIFICATION` | No | **Yes** | No | **Yes (for Phase 4 RFQ)** | Commercial policy; best disclosed in proforma invoices, formal quotes, and `/terms-of-trade` rather than home page. |
| **21** | **Bank Account & Beneficiary Coordinates** | Invoicing / Commercial Contract | `BUYER VERIFICATION` | No | **Yes** | No | No (Post-PO) | Strictly disclosed on signed proforma invoices and L/C advising instructions; never on public website. |
| **22** | **Internal Cost of Goods & Sourcing Margins** | Internal Financials | `INTERNAL` | No | No | **Yes** | No | Proprietary commercial data; never disclosed externally. |
| **23** | **Negotiation Flexibility & Price Floors** | Internal Sales Operations | `INTERNAL` | No | No | **Yes** | No | Internal margin thresholds and volume discount authority. |
| **24** | **Commercial Export Lead Times** (*Days from PO/LC to FOB dispatch*) | Product pages, RFQ | `PUBLIC` | **Yes** | **Yes** | No | **Yes (for Phase 4 Specs)** | Crucial procurement metric for supply chain managers planning production cycles. |
| **25** | **Container Payload Capacities** (*20ft / 40ft FCL net metric tons*) | Product pages, RFQ | `PUBLIC` | **Yes** | **Yes** | No | **Yes (for Phase 4 Specs)** | Helps procurement directors optimize container utilization and freight cost per unit. |
| **26** | **Sample Dispatch Commercial Policy** | `/export-process`, `/request-quote` | `PUBLIC` | **Yes** | **Yes** | No | **Yes** | Clear rules regarding free samples, express courier account requirements, or order credits prevent commercial friction. |
| **27** | **Third-Party Pre-Shipment Inspection (PSI) Policy** | `/quality-compliance`, `/export-process` | `PUBLIC` | **Yes** | **Yes** | No | **Yes** | Welcoming buyer-appointed inspection (SGS/Intertek/BV) at port is a powerful trust catalyst; confirm Aura supports this. |
| **28** | **Statutory Phytosanitary Clearance Protocol** | `/quality-compliance`, `/export-process` | `PUBLIC` | **Yes** | **Yes** | No | No | Established statutory requirement for agricultural exports; confirmed capability. |
| **29** | **Statutory Certificate of Origin (COO) Protocol** | `/quality-compliance`, `/export-process` | `PUBLIC` | **Yes** | **Yes** | No | No | Chamber of Commerce origin certification accompanying consignments. |
| **30** | **Spices Board Registration (CRES)** | `/quality-compliance` | `BUYER VERIFICATION` | No | **Yes** | No | **Yes** | Statutory export board credential; display in Verification Kit as `AVAILABLE ON REQUEST` or publish upon document availability. |
| **31** | **APEDA Registration (RCMC)** | `/quality-compliance` | `BUYER VERIFICATION` | No | **Yes** | No | **Yes** | Agricultural export registration; display in Verification Kit under controlled status. |
| **32** | **FSSAI Export Food License** | `/quality-compliance` | `BUYER VERIFICATION` | No | **Yes** | No | **Yes** | Food safety export license; display in Verification Kit under controlled status. |
| **33** | **ISO 9001 / ISO 22000 Certificates** | Quality Framework | `BUYER VERIFICATION` | No | **Yes** | No | **Yes (Do we hold them?)** | Only claim if active certificates are held; otherwise keep framed as accredited lab testing protocol. |
| **34** | **Independent Accredited Testing Laboratories** (*NABL / ISO 17025*) | `/quality-compliance`, Product pages | `PUBLIC` | **Yes** | **Yes** | No | **Yes** | Commit to testing via accredited agencies without falsely claiming exclusive corporate endorsement. |
| **35** | **Batch Certificate of Analysis (CoA) Sample** | `/quality-compliance`, `/products/spices/turmeric` | `BUYER VERIFICATION` | No | **Yes** | No | **Yes** | Redacted sample CoA available for prospective buyers to verify laboratory testing rigor. |
| **36** | **Direct Supplier / Farmer Collective Names** | Supply Chain Management | `INTERNAL` | No | No | **Yes** | No | Specific farmer names, drying yard owners, and foundry subcontractor identities must be protected under trade secrecy. |
| **37** | **Erode Regional Provenance** (*Curcuma Longa, Erode Salem*) | `/products/spices/turmeric`, `/about` | `PUBLIC` | **Yes** | **Yes** | No | No | Geographic indication and botanical provenance of regional cultivar; high buyer marketing value. |
| **38** | **Turmeric Active Curcumin Range** (*Min 4.5% – 5.2% HPLC*) | `/products/spices/turmeric`, `/products/spices` | `PUBLIC` | **Yes** | **Yes** | No | **Yes (for Phase 4 Specs)** | Primary commercial pricing and technical specification parameter for botanical buyers. |
| **39** | **Turmeric Moisture Content Limit** (*Max 8% Premium / Max 12% Standard*) | `/products/spices/turmeric` | `PUBLIC` | **Yes** | **Yes** | No | **Yes (for Phase 4 Specs)** | Critical technical specification affecting shelf life and microbial stability. |
| **40** | **Turmeric Total Ash & Acid Insoluble Ash Limits** | `/products/spices/turmeric` | `PUBLIC` | **Yes** | **Yes** | No | **Yes (for Phase 4 Specs)** | Standard pharmacopeia and culinary technical purity criteria. |
| **41** | **Turmeric Volatile Oil Yield** (*Min 3.5%*) | `/products/spices/turmeric` | `PUBLIC` | **Yes** | **Yes** | No | **Yes (for Phase 4 Specs)** | Key indicator of low-temperature processing and aromatic retention. |
| **42** | **Turmeric Physical Forms** (*Whole polished fingers, cold-milled powder*) | `/products/spices/turmeric`, `/products/spices` | `PUBLIC` | **Yes** | **Yes** | No | No | Commercial product formats available for procurement selection. |
| **43** | **Turmeric Export Packaging Specs** (*25kg/50kg kraft, liners, PP*) | `/products/spices/turmeric`, `/export-process` | `PUBLIC` | **Yes** | **Yes** | No | No | Essential packaging configurations for ocean logistics planning. |
| **44** | **Turmeric Minimum Order Quantity (MOQ)** (*e.g. 1 MT vs 20ft FCL*) | `/products/spices/turmeric`, `/request-quote` | `PUBLIC` | **Yes** | **Yes** | No | **Yes (for Phase 4 RFQ)** | Filters unqualified retail buyers; sets B2B commercial volume expectations. |
| **45** | **Turmeric Shelf Life** (*24 Months*) | `/products/spices/turmeric` | `PUBLIC` | **Yes** | **Yes** | No | No | Standard technical storage parameter. |
| **46** | **Fashion Jewelry Base Metallurgy** (*Brass, 316L Stainless Steel*) | `/products/jewelry`, `/` | `PUBLIC` | **Yes** | **Yes** | No | **Yes (for Phase 4 Specs)** | Essential technical composition for jewelry brand buyers. |
| **47** | **Fashion Jewelry Plating Specs** (*PVD gold tones, anti-tarnish*) | `/products/jewelry`, `/` | `PUBLIC` | **Yes** | **Yes** | No | **Yes (for Phase 4 Specs)** | Quality and durability indicator for fashion accessories. |
| **48** | **Fashion Jewelry Chemical Safety** (*Lead-free, Nickel-free, REACH*) | `/products/jewelry`, `/quality-compliance` | `PUBLIC` | **Yes** | **Yes** | No | **Yes (for Phase 4 Specs)** | Statutory compliance requirement for export into EU and North American retail markets. |
| **49** | **Fashion Jewelry Minimum Order Quantity (MOQ)** | `/products/jewelry`, `/request-quote` | `PUBLIC` | **Yes** | **Yes** | No | **Yes (for Phase 4 RFQ)** | Pieces per design or minimum order value threshold. |
| **50** | **Fashion Jewelry Casting Foundry Identities** | Internal Procurement | `INTERNAL` | No | No | **Yes** | No | Specific artisan foundry locations, master craftsman names, and casting agreements remain internal. |
| **51** | **Sustainable Textiles Fiber Compositions** (*Organic cotton, blends*) | `/products/textiles`, `/` | `PUBLIC` | **Yes** | **Yes** | No | **Yes (for Phase 4 Specs)** | Core material specifications for apparel and home furnishing buyers. |
| **52** | **Sustainable Textiles Standards** (*GOTS & OEKO-TEX guidelines*) | `/products/textiles`, `/quality-compliance` | `PUBLIC` | **Yes** | **Yes** | No | **Yes (for Phase 4 Specs)** | Environmental and social compliance credentials of partner weaving clusters. |
| **53** | **Sustainable Textiles Fabric Weights (GSM)** | `/products/textiles` | `PUBLIC` | **Yes** | **Yes** | No | **Yes (for Phase 4 Specs)** | Fundamental technical parameter required by garment manufacturing buyers. |
| **54** | **Sustainable Textiles Minimum Order Quantity (MOQ)** | `/products/textiles`, `/request-quote` | `PUBLIC` | **Yes** | **Yes** | No | **Yes (for Phase 4 RFQ)** | Minimum meters per shade or finished units per run. |
| **55** | **Textile Weaving Mill Identities & Dyehouse Locations** | Internal Procurement | `INTERNAL` | No | No | **Yes** | No | Mill supplier contacts, internal weaving rates, and contractor relationships remain internal. |
| **56** | **Private Labeling & Custom Packaging Capabilities** | Product pages, RFQ | `PUBLIC` | **Yes** | **Yes** | No | **Yes** | Informs brand directors regarding OEM stamping, custom boxes, and barcode carding. |
| **57** | **Commercial RFQ Response SLA** (*Within 1 business day*) | `/request-quote`, `/contact` | `PUBLIC` | **Yes** | No | No | **Yes** | Sets professional customer service expectation during Chennai business hours. |
| **58** | **Customer Identities, Volume Data & Proprietary Contracts** | Commercial Governance | `INTERNAL` | No | No | **Yes** | No | Protected under bilateral NDAs; never published as client lists, logos, or public reviews. |
| **59** | **Commercial Trade References** (*Verifiable peer references*) | Buyer Due Diligence | `BUYER VERIFICATION` | No | **Yes** | No | **Yes (Under NDA)** | Available exclusively to qualified procurement committees under bilateral NDA during formal vendor onboarding. |
| **60** | **Bilateral NDA Protection Policy** | `/` (Governance), `/request-quote` | `PUBLIC` | **Yes** | **Yes** | No | No | Reassures buyers that their proprietary formulas and branding will not be leaked or commercialized. |
| **61** | **Governing Jurisdiction & Dispute Resolution** (*Courts of Chennai*) | `/terms`, `/terms-of-trade` | `PUBLIC` | **Yes** | **Yes** | No | **Yes** | Clear legal clarity governing international sales contracts. |
| **62** | **Corporate Legal Counsel Placeholders** | Legal pages | `PUBLIC` | **Yes** | No | No | No | Maintains transparent disclosure that policies are undergoing final legal review. |

---

## LAYER BREAKDOWN & SUMMARY METRICS

### Layer Distribution:
1. **Total Data Points / Claims Audited**: **62**
2. **Layer 1: PUBLIC WEBSITE**: **38 data points** (61.3%)
   - *Purpose*: Position Aura as a credible, capable, and contactable Indian export partner across search engines and buyer visits.
3. **Layer 2: BUYER VERIFICATION / AVAILABLE ON REQUEST**: **15 data points** (24.2%)
   - *Purpose*: Deliver concrete documentary proof during serious procurement due diligence via the Verification Kit, quotation dossiers, or bilateral NDA.
4. **Layer 3: INTERNAL / BUSINESS OPERATIONS**: **9 data points** (14.5%)
   - *Purpose*: Protect confidential sourcing origins, sub-tier mill identities, margin structures, cost sheets, and private client relationships under strict commercial trade secrecy.

---

## BUSINESS OWNER CONFIRMATION STATUS

* **Total Data Points Requiring Business Owner Confirmation**: **33 data points**
* **Total Data Points Formally Confirmed / Factual by Statutory Design**: **29 data points**

---

## CRITICAL PATH: GENUINELY REQUIRED BUSINESS-OWNER INPUTS BEFORE PHASE 4

Phase 4 focuses on **Product Catalog, Technical Specifications & RFQ Intake Architecture**. We do NOT need all 33 pending confirmations to begin Phase 4. We only need the following **7 core commercial parameters**:

```
┌────────────────────────────────────────────────────────────────────────┐
│         THE 7 GENUINE BUSINESS-OWNER INPUTS REQUIRED FOR PHASE 4       │
├────────────────────────────────────────────────────────────────────────┤
│ 1. TURMERIC TECHNICAL BENCHMARKS                                       │
│    - Confirm Curcumin % assay (e.g. Min 4.5%–5.2% vs Min 3.0%)         │
│    - Confirm Moisture % limit (e.g. Max 8% vs Max 12%)                 │
│                                                                        │
│ 2. COMMERCIAL MINIMUM ORDER QUANTITIES (MOQ)                           │
│    - Turmeric: Confirm baseline MOQ (e.g. 1 Metric Ton vs 20ft FCL)    │
│    - Jewelry: Confirm baseline MOQ (e.g. 50 pcs/design or $1,000 MOV)  │
│    - Textiles: Confirm baseline MOQ (e.g. 500 meters or 200 units)     │
│                                                                        │
│ 3. COMMERCIAL LEAD TIMES                                               │
│    - Confirm typical business days from PO/LC receipt to FOB carting   │
│                                                                        │
│ 4. CONFIRMED INCOTERMS                                                 │
│    - Confirm whether Aura genuinely quotes both FOB and CIF            │
│                                                                        │
│ 5. JEWELRY BASE ALLOY CONFIRMATION                                     │
│    - Confirm if Brass, 316L Stainless Steel, and PVD Gold are offered  │
│                                                                        │
│ 6. TEXTILE FABRIC SPECIFICATIONS                                       │
│    - Confirm standard fabric blends (Organic Cotton, Linen-Hemp) & GSM │
│                                                                        │
│ 7. SAMPLE COURIER POLICY                                               │
│    - Confirm if samples are free with buyer courier account, or fee-led│
└────────────────────────────────────────────────────────────────────────┘
```

*Note: Statutory registration scans (CIN, GSTIN, IEC, Spices Board, APEDA) belong to **Layer 2 (Buyer Verification / Available on Request)** and can remain in their current controlled states (`[AVAILABLE ON REQUEST]`) without delaying Phase 4 product catalog and RFQ implementation.*
