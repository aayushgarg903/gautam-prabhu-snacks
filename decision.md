# Architectural Decision Records (ADR) — Gautam Prabhhu Snacks

## ADR 001: Mobile-First Single Page Application Architecture for QR Code Scanning

- **Date:** 2026-10-18
- **Context/Problem:**
  Gautam Prabhhu Snacks is an Indian snacks and sweets business in Rohtak, Haryana, India. The website is primarily accessed by retail customers scanning a QR code printed on physical paper carry bags using mobile devices. The physical connection demands near-instant load times (< 1 second) on cellular 4G/5G connections, zero server cold starts, mobile touch ergonomics, direct action triggers (Menu, WhatsApp enquiry, Google Reviews, Instagram), and a luxurious, traditional Indian aesthetic matching their emerald, maroon, and antique gold packaging.
- **Decision:**
  We selected **React 19 with Vite 8 and TypeScript**, styled with **Tailwind CSS v4** and customized with dedicated Indian traditional brand design tokens. All business details, category listings, and review configurations are strictly centralized in a typed single source of truth (`src/config/business.ts`).
- **Reasoning (The 'Why'):**
  1. **Instant First-Contentful Paint (FCP):** Unlike complex server-rendered frameworks with cold starts or edge timeouts on low mobile data connections, a pre-bundled static Single Page Application (SPA) downloads instantaneously and responds instantly to tab switches and touch gestures.
  2. **Predictable Offline & CDN Reliability:** A static bundle can be hosted across global edge networks (Vercel, Netlify, Cloudflare Pages, GitHub Pages) with 100% uptime and zero server maintenance cost.
  3. **Maintainability for the Business:** Storing all business metadata (phone numbers, FSSAI, Instagram, Google reviews, menu items, prices, and availability flags) in one typed configuration file (`business.ts`) empowers non-technical staff or developers to update menu items and prices in seconds without touching markup or logic.
  4. **Strict Security Posture:** No client-side secrets, zero database connection strings exposed to the browser, safe URL sanitizers for WhatsApp click-to-chat (`https://wa.me/91...`), sanitized external links (`rel="noopener noreferrer"`), and safe fallback handling for unconfigured external services.

---

## ADR 002: Graceful Degradation & Modal Fallback for Google Reviews & Social Destinations

- **Date:** 2026-10-18
- **Context/Problem:**
  The business has confirmed its Instagram handle (`@gautamprabhusnacks`), Rohtak city location, and two phone numbers from the packaging sticker (`9518033535`, `9466291055`), but the verified direct Google Review destination link and exact Google Maps pin are currently pending confirmation. Pointing customers to a broken URL or generic blank page degrades trust and hurts customer sentiment.
- **Decision:**
  We implemented an active URL validator (`isConfiguredUrl`) in `src/config/business.ts`. When a destination URL is configured with a verified link, the CTA acts as a direct native link with `rel="noopener noreferrer"`. When the link is unconfigured, the button gracefully opens an interactive modal (`ReviewModal.tsx`) that explains direct setup is in progress, offers a 1-tap "Copy Business Name" feature, and links to Google Search/Maps for Rohtak, preventing dead clicks.
- **Reasoning (The 'Why'):**
  In retail and food & beverage, user friction leads to abandonment. Providing an active fallback ensures customers never encounter an error or confusing dead end, while making it trivial for the store owner to activate the 1-click review link in the future by updating a single configuration string.

---

## ADR 003: Sticky Mobile Bottom Action Bar Pattern for QR Scan Conversions

- **Date:** 2026-10-18
- **Context/Problem:**
  Customers scanning carry bags are holding a phone in one hand while carrying snack boxes or standing in the shop. Reaching for navigation bars at the top of tall mobile screens (viewport height > 800px) causes ergonomic thumb strain and drops engagement.
- **Decision:**
  We introduced a persistent bottom quick-action bar for mobile viewports (`sm:hidden fixed bottom-0`), placing the 4 highest-value actions—**Menu, WhatsApp, Call, and Rate Us**—directly within the thumb comfort zone, styled in deep emerald (`#052B20`) with gold accents.
- **Reasoning (The 'Why'):**
  Adheres to Fitts's Law and mobile touch ergonomics. Instant thumb access to WhatsApp enquiry and call links dramatically accelerates customer conversions for daily store pickups and bulk party orders.

---

## ADR 004: Visual De-cluttering, Two-Column Mobile Grid, and Zero-Unverified-Claims Policy

- **Date:** 2026-10-18
- **Context/Problem:**
  Initial UI iterations included high-frequency decorative background patterns and placeholder badges (e.g. "100% Pure Vegetarian") that risked distracting retail customers or overpromising on unverified claims. Additionally, single-column product cards on mobile caused excessive vertical scrolling.
- **Decision:**
  1. Replaced the high-contrast repeating hero pattern with clean warm ivory (`#FFF8E7`), allowing culinary photography and brand typography to breathe.
  2. Streamlined the product catalogue to a **2-column grid on mobile screens** and a **4-column grid on wide desktop screens**, significantly improving catalog scannability.
  3. Relocated developer/testing tools (Paper Bag QR Code modal) from the primary customer header to the footer.
  4. Enforced strict business claim hygiene: purged all unverified heritage, purity, and certification statements, confining copy to verified packaging sticker data (Rohtak location, FSSAI registration number `20825018001015`, Instagram `@gautamprabhusnacks`, WhatsApp `+91 95180 33535`, Phone `+91 94662 91055`).
  5. Implemented `scroll-mt-24` on all anchor sections to prevent headings from clipping behind the sticky header.
- **Reasoning (The 'Why'):**
  Elevates the brand from feeling like a cluttered template to an authentic, understated luxury Indian culinary destination. Protects the business from regulatory or truth-in-advertising concerns while optimizing for retail conversion speed.

---

## ADR 005: Verified Google Maps Location Integration

- **Date:** 2026-10-18
- **Context/Problem:**
  The business provided the verified Google Maps store link: `https://share.google/oKcd9nWPFFkfrJRAv`. The application needed to integrate this link cleanly while preserving the uninvented address policy (displaying `Rohtak, Haryana, India` without fabricating an unconfirmed street number).
- **Decision:**
  1. Configured `BUSINESS_CONFIG.location.googleMapsUrl` with the verified link `https://share.google/oKcd9nWPFFkfrJRAv` and set `isMapsConfigured: true`.
  2. Bound the Location Card action in `ContactSection.tsx` directly to this verified destination with `target="_blank" rel="noopener noreferrer"`.
  3. Preserved strict display address hygiene (`Rohtak, Haryana, India`).
  4. Updated automated unit tests in `src/test/businessConfig.test.ts` to assert that the Google Maps destination is active.
- **Reasoning (The 'Why'):**
  Retail customers scanning the bag QR code can now navigate directly to the physical shop with a single tap, while keeping all business metadata centrally managed in `business.ts`.

---

## ADR 006: Transition from Synthetic Imagery to Authentic Physical Product Photography

- **Date:** 2026-10-18
- **Context/Problem:**
  Initial prototypes featured AI-generated confectionery and namkeen platters. While visually attractive as placeholders, AI imagery risks misrepresenting real artisanal snack textures, shapes, and garnishes, leading to mismatched customer expectations upon store pickup or delivery. The store owner provided 5 high-resolution authentic photographs of real products: Besan Ladoo, Coconut Ladoo, Square Namak Pare, Layered Karela Mathri, and Crispy Gol Mathri.
- **Decision:**
  1. Purged all AI-generated stock imagery (`hero-banner.jpg`, `sweets-platter.jpg`, `namkeen-platter.jpg`, `snacks-platter.jpg`).
  2. Adopted the 5 authentic product photographs directly in `/public/images/`:
     - `besan-ladoo.jpg` (Hero primary showcase & meta OpenGraph image)
     - `coconut-ladoo.jpg` (Brand story sweets showcase & Mithai catalogue)
     - `gol-mathri.jpg` (Brand story namkeen showcase & Snacks catalogue)
     - `karela-mathri.jpg` (Snacks catalogue)
     - `namak-pare.jpg` (Namkeen catalogue)
  3. Streamlined `BUSINESS_CONFIG.menu` to feature these 5 authentic offerings with truthful daily batch enquiry CTAs while awaiting final retail price confirmation.
  4. Updated automated unit tests and production build to validate the new asset architecture.
- **Reasoning (The 'Why'):**
  In retail confectionery, authentic food photography fosters immediate trust and appetite appeal. Real images communicate genuine craftsmanship and allow customers scanning paper carry bags to see exactly what is on the shelves at Gautam Prabhu Snacks in Rohtak.

---

## ADR 007: Official Physical Rate List & Dynamic WhatsApp Order Integration

- **Date:** 2026-10-18
- **Context/Problem:**
  The business provided its official printed Rate List card (`w.e.f. Sept. 15, 2026`), containing 15 authentic offerings across Namkeen & Snacks and Sweets & Mithai with verified rates per kilogram (₹/kg) and key promotional claims ("Made with Desi Ghee", "Without Sugar • Without Honey • Premium Quality"). Additionally, the card confirmed the dedicated WhatsApp order line `8168199589` alongside calling phone `9466291055`.
- **Decision:**
  1. Configured all 15 authentic items in `BUSINESS_CONFIG.menu` with their confirmed per-kg pricing, descriptions, and custom highlight badges (`highlightBadge`).
  2. Promoted the catalogue notice in `MenuSection.tsx` from an "illustrative preview" to a verified official store rate card notice (`w.e.f. Sept. 15, 2026`).
  3. Integrated dedicated WhatsApp order line `8168199589` as primary WhatsApp order destination, while retaining `9466291055` and `9518033535` as verified business phone records.
  4. Enhanced `buildItemWhatsAppLink()` to automatically inject product name and exact per-kg rate into the customer's WhatsApp chat pre-fill, minimizing friction for retail conversions.
  5. Expanded automated TDD unit tests to 16 assertions, validating full 15-item schema, currency formatting, category distribution, and contact consistency.
- **Reasoning (The 'Why'):**
  Retail customers scanning paper carry bags want immediate, transparent price information and frictionless 1-tap ordering. Surfacing verified per-kg rates with exact WhatsApp pre-fills eliminates back-and-forth price inquiries, increasing store pickup and gift box conversions.

---

## ADR 008: Pre-Launch Audit, Google Review Verification, and Production Distribution Packaging

- **Date:** 2026-10-20
- **Context/Problem:**
  A comprehensive technical, UX, and business audit prior to production launch identified several inconsistencies:
  1. Primary WhatsApp CTA display text was hardcoded to `+91 95180 33535`, while the underlying click-to-chat action routed to `+91 81681 99589` (the official Rate List WhatsApp line).
  2. The Google Review direct link had not been connected, showing an informational configuration fallback modal to customers.
  3. Obsolete Vite starter boilerplate assets (`src/App.css`, `src/assets/hero.png`, `src/assets/react.svg`, `src/assets/vite.svg`) remained in the project tree.
  4. Unit testing lacked an explicit npm script in `package.json`, requiring ad-hoc `npx tsx` invocations.
  5. The existing project zip archive (`gautam-prabhu-snacks.zip`) was outdated, containing deleted boilerplate files and missing the 15 authentic product photo assets.
- **Decision:**
  1. Synchronized WhatsApp UI display to dynamically pull `BUSINESS_CONFIG.contacts.whatsappFormatted` (`+91 81681 99589`), eliminating customer confusion.
  2. Integrated the verified direct Google Review link (`https://g.page/r/CeLlcyT-82kkEBI/review`), enabling 1-click review submissions directly on Google Business Profile.
  3. Purged all dead starter assets and CSS files, achieving zero dead weight and zero linter warnings.
  4. Added `tsx` to devDependencies and wired `"test": "tsx test-runner.js"` into `package.json`.
  5. Generated a clean, updated production zip archive (`gautam-prabhu-snacks.zip`) containing all current source files, configs, documentation, and product imagery while strictly excluding `node_modules/`, `dist/`, `.git/`, and previous zip files.
- **Reasoning (The 'Why'):**
  Ensures absolute parity between UI copy and actual communication channels, unlocks zero-friction social proof collection via Google Reviews, enforces clean repository hygiene, and provides an instantly deployable archive for handoff and cloud edge publishing.

---

## ADR 009: Strict QR Print-Safety Guardrails, Separation of Validation Logic, and Domain Neutrality

- **Date:** 2026-10-20
- **Context/Problem:**
  Physical paper carry bags printed with QR codes cannot be modified post-printing. Generating a QR code pointing to `localhost`, internal private LAN IPs, or temporary preview deployment hosts (`*.vercel.app`) risks breaking retail customer journeys permanently once the local dev session or preview deployment expires. Furthermore, `gautamprabhusnacks.com` has not yet been registered or confirmed in DNS, so hardcoding or implying that domain is live in the UI could mislead the store owner into printing unresolvable codes.
- **Decision:**
  1. Extracted a dedicated `qrValidation.ts` module with multi-stage destination URL evaluation (detecting loopback addresses, private RFC 1918 IPs, preview subdomains, and protocol requirements).
  2. Implemented mandatory browser interception (`handleSaveQr`) preventing accidental download of non-print-safe QR codes without explicit user confirmation.
  3. Purged assumptions regarding domain registration status; ensured the QR generator strictly encodes the exact text displayed in the user interface.
  4. Updated ReviewModal CTA wording to "Write a Google Review" across all review entrypoints.
- **Reasoning (The 'Why'):**
  Protects physical manufacturing capital, guarantees 1-to-1 fidelity between previewed and encoded QR payloads, and prevents customer dead-ends.




