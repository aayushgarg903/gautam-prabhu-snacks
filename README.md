# Gautam Prabhhu Snacks — Official Web Application

A refined, mobile-first web application designed for retail customers scanning a QR code printed on physical paper carry bags. Built for **Gautam Prabhhu Snacks**, an Indian snacks and sweets business in Rohtak, Haryana, India.

---

## 🎨 Brand Identity & Visual Language

The design is a digital extension of the physical circular packaging sticker:
- **Primary Emerald:** `#073D29` (Brand headers, primary menu actions, visual anchors)
- **Deep Emerald:** `#052B20` (Footer, micro-bars, accents)
- **Royal Maroon:** `#790F1C` (Headings, review action, highlights)
- **Antique Gold:** `#C99A32` / `#E5C56A` (Fine borders, icons, ornamental accents)
- **Warm Ivory Background:** `#FFF8E7` / `#FDFBF7` (Clean dominant background)
- **Typography:** *Cormorant Garamond* & *Playfair Display* (Serif Headings), *Plus Jakarta Sans* (Body)
- **Visual Character:** Traditional, welcoming, established, and recognizably Indian with restrained ornamentation.

---

## ⚡ Tech Stack & Architecture

- **Frontend Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 8](https://vitejs.dev/) (Sub-second HMR & instant 81 kB gzipped static bundle)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with native CSS variables and heritage design tokens
- **Icons:** [Lucide React](https://lucide.dev/) + bespoke Indian traditional SVG vectors
- **Single Source of Truth:** `src/config/business.ts` (centralized store metadata, verified contacts, social links, and demo menu catalogue)

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js `v20+` or `v22+`
- npm `v10+` or `v11+`

### 2. Installation
```bash
# Clone the repository and navigate into the workspace
git clone <repo-url>
cd "Gautam Prabhu Snacks"

# Install dependencies
npm install
```

### 3. Local Development
```bash
# Start local development server with hot-module reloading
npm run dev
```
The site runs locally at: `http://localhost:5173/`

### 4. Running Unit Tests
```bash
# Execute TDD security, URL sanitization, and data integrity tests
npm test
```

### 5. Production Build
```bash
# Compile TypeScript and generate minified, edge-ready static assets
npm run build
```
Compiled output is saved in the `/dist` directory.

---

## 📁 Project Structure

```
d:/Gautam Prabhu Snacks/
├── public/
│   ├── favicon.svg               # Emerald & antique gold GP lotus favicon
│   ├── icons.svg                 # Shared SVG icon sprites
│   ├── images/
│   │   ├── gp-emblem.svg         # High-resolution royal seal vector
│   │   ├── achari-mathri.jpg     # Achari Mathri
│   │   ├── besan-laddu.jpg       # Besan Laddu with Dry Fruits
│   │   ├── besan-ladoo.jpg       # Authentic Besan Ladoo (Hero & OpenGraph)
│   │   ├── chana-laddu.jpg       # Chana Laddu
│   │   ├── chocolate-modak.jpg   # Chocolate Modak
│   │   ├── coconut-laddu.jpg     # Coconut Laddu
│   │   ├── coconut-ladoo.jpg     # Coconut Ladoo (Brand Story)
│   │   ├── coconut-modak.jpg     # Coconut Modak
│   │   ├── dry-fruit-laddu.jpg   # Dry Fruit Laddu (Sugar-free)
│   │   ├── gol-mathri.jpg        # Gol Mathri (Brand Story)
│   │   ├── kachori.jpg           # Khasta Kachori
│   │   ├── masala-mathri.jpg     # Masala Mathri
│   │   ├── mawa-modak.jpg        # Mawa Modak
│   │   ├── methi-papdi-mathri.jpg# Methi Papdi Mathri
│   │   ├── mitthe-shakarpare.jpg # Mitthe Shakarpare
│   │   ├── namkeen.jpg           # Signature Namkeen
│   │   ├── namkeen-masala-shakarpare.jpg # Namkeen & Masala Shakarpare
│   │   └── plain-papdi.jpg       # Plain Papdi
├── src/
│   ├── components/
│   │   ├── SiteHeader.tsx        # Streamlined header with customer navigation & call link
│   │   ├── BrandHero.tsx         # Clean warm-ivory hero with "Tradition in Every Bite"
│   │   ├── PrimaryActions.tsx    # 3 core bag-scan actions (Menu, Reviews, Instagram)
│   │   ├── BrandStory.tsx        # Concise, authentic "Made for Your Everyday Cravings"
│   │   ├── MenuSection.tsx       # 2-col mobile & 4-col desktop grid with WhatsApp enquiry
│   │   ├── ContactSection.tsx    # Rohtak store details, calling line, & WhatsApp link
│   │   ├── SiteFooter.tsx        # FSSAI compliance notice, navigation, & QR utility
│   │   ├── ReviewModal.tsx       # Direct Google reviews launcher & guidance fallback
│   │   ├── QrCodeModal.tsx       # Live QR code tester & bag print guidelines
│   │   └── Icons.tsx             # Shared SVGs (Instagram, etc.)
│   ├── config/
│   │   └── business.ts           # Central business data & link sanitizers
│   ├── test/
│   │   └── businessConfig.test.ts# Automated unit tests for URL safety & schema
│   ├── utils/
│   │   └── qrValidation.ts       # Destination URL evaluation & bag print-safety guardrails
│   ├── App.tsx                   # Main layout container & sticky mobile bar
│   ├── index.css                 # Design tokens, color system, and luxury utilities
│   └── main.tsx                  # Application entry point
├── test-runner.js                # Test execution script
├── decision.md                   # Architectural Decision Records (ADR)
├── .env.example                  # Environment configuration template
└── package.json                  # Scripts and dependencies
```

---

## ⚙️ Business Configuration (`src/config/business.ts`)

To update store information, phone numbers, or menu offerings, edit `src/config/business.ts`:

- **Store Contact Numbers:**
  - `contacts.whatsappNumber`: WhatsApp Order line from official Rate List (`918168199589` / `+91 81681 99589`)
  - `contacts.phoneNumber`: Direct store calling line (`9466291055` / `+91 94662 91055`)
- **Instagram Handle & Profile:**
  - `social.instagramHandle`: `@gautamprabhusnacks`
  - `social.instagramUrl`: `https://www.instagram.com/gautamprabhusnacks/`
- **Google Reviews Link:**
  - Configured with verified direct Google Review link: `https://g.page/r/CeLlcyT-82kkEBI/review`. Direct 1-click review action is enabled across all CTAs and footer buttons.
- **Google Maps Location:**
  - Configured with verified store location: `https://share.google/oKcd9nWPFFkfrJRAv`. Location button in Contact section directly navigates customers to the shop.
- **Official Rate List:**
  - Effective Date: `w.e.f. Sept. 15, 2026`
  - 15 Authentic Items: Namkeen & Snacks (1-8) and Sweets & Mithai (9-15) priced per kilogram.
- **FSSAI Registration:**
  - Haryana Jurisdiction License: `20825018001015` (displayed gracefully in regulatory section).
- **Adding / Updating Menu Items:**
  ```typescript
  {
    id: "sweet-besan-laddu-dry-fruits",
    name: "Besan Laddu with Dry Fruits",
    category: "sweets", // 'sweets' | 'namkeen' | 'snacks'
    description: "Golden roasted gram flour laddus slow-cooked in pure desi ghee and loaded with sliced pistachios and almonds.",
    packSize: "Per kg / Gift box",
    estimatedPrice: "₹640 / kg",
    highlightBadge: "Made with Desi Ghee",
    image: "/images/besan-ladoo.jpg",
    isDemoPlaceholder: false,
  }
  ```

---

## 📦 Deployment Instructions

The project produces a 100% static client bundle (`/dist`) that can be deployed to any modern cloud edge provider in 60 seconds:

### Option A: Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root directory.
3. Keep default settings (`Framework: Vite`, `Build Command: npm run build`, `Output Directory: dist`).
4. Instant production URL with free SSL: `https://gautam-prabhu-snacks.vercel.app` (bind your custom domain once purchased and configured, e.g. `gautamprabhusnacks.com`).

### Option B: Netlify
1. Run `npx netlify deploy --build`
2. Follow CLI prompts and select `dist` as publish directory.

---

## 🏷️ Paper Carry Bag QR Code Best Practices

When printing the QR code on paper carry bags for the Rohtak store:
1. **Target URL:** Use your confirmed, registered HTTPS custom domain (once purchased and connected in DNS). Never print localhost, private LAN IPs, or temporary preview links (`*.vercel.app`), as QR codes printed on physical bags cannot be changed after production.
2. **Minimum Dimensions:** Print at minimum **25 mm × 25 mm (1.0 × 1.0 inch)** to ensure quick camera focus on all smartphone lenses.
3. **Quiet Zone:** Ensure at least 4 modules of clear white/light ivory background border around the QR matrix.
4. **Test Before Print:** Test scan sample kraft bags under dim store lighting and direct sunlight with both Android and iOS devices before authorizing a print run of thousands of bags.
