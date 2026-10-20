/**
 * Gautam Prabhhu Snacks - Central Business Configuration
 * 
 * Single Source of Truth for:
 * - Brand identity & regulatory details
 * - Verified social media & review links
 * - Phone & WhatsApp contact configurations
 * - Categorized Menu items & pricing placeholders
 * 
 * IMPORTANT: Details marked as UNCONFIGURED or demo data must be updated with
 * verified business credentials prior to public commercial launch.
 */

export interface MenuItem {
  id: string;
  name: string;
  category: 'sweets' | 'namkeen' | 'snacks';
  description: string;
  packSize?: string;
  estimatedPrice: string; // Rate per kg from official rate list
  image: string;
  isDemoPlaceholder?: boolean;
  highlightBadge?: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  eyebrow: string;
  shortDescription: string;
  story: {
    heading: string;
    paragraph: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
    displayAddress: string;
    /** Verified Google Maps store location link */
    googleMapsUrl: string;
    isMapsConfigured: boolean;
  };
  contacts: {
    /** Primary WhatsApp order number from official rate list */
    whatsappNumber: string;
    whatsappFormatted: string;
    whatsappDefaultMessage: string;
    /** Primary calling phone number */
    phoneNumber: string;
    phoneFormatted: string;
    /** Verified numbers from physical packaging & official rate list */
    stickerNumbers: {
      number: string;
      formatted: string;
      label: string;
    }[];
  };
  rateList: {
    effectiveDate: string;
    unit: string;
    notice: string;
  };
  social: {
    instagramHandle: string;
    instagramUrl: string;
    /** Verified direct Google review writing destination */
    googleReviewUrl: string;
    isGoogleReviewConfigured: boolean;
  };
  regulatory: {
    fssaiNumber: string;
    fssaiDisplayNotice: string;
  };
  menu: MenuItem[];
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "Gautam Prabhhu Snacks",
  tagline: "Tradition in Every Bite.",
  eyebrow: "A TASTE OF TRADITION",
  shortDescription:
    "Discover the flavours of Gautam Prabhhu Snacks, bringing together the joy of Indian snacks and sweets in Rohtak, Haryana.",
  
  story: {
    heading: "Made for Your Everyday Cravings",
    paragraph:
      "Bringing together familiar flavours and the simple joy of traditional Indian snacks and sweets. Whether enjoying an evening cup of tea or selecting delicious treats for family and friends, Gautam Prabhhu Snacks offers a delightful selection of mithai, namkeen, and savory snacks in Rohtak, Haryana.",
  },

  location: {
    city: "Rohtak",
    state: "Haryana",
    country: "India",
    displayAddress: "Rohtak, Haryana, India",
    // Verified Google Maps store location link
    googleMapsUrl: "https://share.google/oKcd9nWPFFkfrJRAv",
    isMapsConfigured: true,
  },

  contacts: {
    // Verified from official Rate List card & packaging
    whatsappNumber: "918168199589",
    whatsappFormatted: "+91 81681 99589",
    whatsappDefaultMessage:
      "Hello Gautam Prabhhu Snacks, I would like to enquire about your menu and place an order.",

    phoneNumber: "9466291055",
    phoneFormatted: "+91 94662 91055",

    stickerNumbers: [
      {
        number: "8168199589",
        formatted: "+91 81681 99589",
        label: "WhatsApp Order Line",
      },
      {
        number: "9466291055",
        formatted: "+91 94662 91055",
        label: "Calling Phone",
      },
      {
        number: "9518033535",
        formatted: "+91 95180 33535",
        label: "Secondary Order Line",
      },
    ],
  },

  rateList: {
    effectiveDate: "w.e.f. Sept. 15, 2026",
    unit: "₹/kg",
    notice: "Official Rate List • w.e.f. Sept 15, 2026 • Rates per kg",
  },

  social: {
    instagramHandle: "@gautamprabhusnacks",
    instagramUrl: "https://www.instagram.com/gautamprabhusnacks/",
    // Verified direct Google Review link (confirmed by business owner 2026-10-20)
    googleReviewUrl: "https://g.page/r/CeLlcyT-82kkEBI/review",
    isGoogleReviewConfigured: true,
  },

  regulatory: {
    fssaiNumber: "20825018001015",
    fssaiDisplayNotice: "FSSAI Reg. No. 20825018001015",
  },

  // Official Menu — 15 Items directly from Gautam Prabhu Snacks Rate List (w.e.f. Sept 15, 2026)
  menu: [
    // --- NAMKEEN & SNACKS (ITEMS 1 to 8) ---
    {
      id: "snack-kachori",
      name: "Kachori",
      category: "snacks",
      description: "Crispy, golden-crusted savory kachoris stuffed with traditional spiced lentil filling.",
      packSize: "Per kg / Custom pack",
      estimatedPrice: "₹400 / kg",
      image: "/images/kachori.jpg",
      isDemoPlaceholder: false,
    },
    {
      id: "namkeen-signature",
      name: "Namkeen",
      category: "namkeen",
      description: "Classic crunchy signature savory namkeen mix prepared with premium aromatic spices.",
      packSize: "Per kg / Custom pack",
      estimatedPrice: "₹400 / kg",
      image: "/images/namkeen.jpg",
      isDemoPlaceholder: false,
    },
    {
      id: "snack-masala-mathri",
      name: "Masala Mathri",
      category: "snacks",
      description: "Crispy, flaky savory mathri disks seasoned with crushed black pepper and fragrant ajwain.",
      packSize: "Per kg / Custom pack",
      estimatedPrice: "₹400 / kg",
      image: "/images/masala-mathri.jpg",
      isDemoPlaceholder: false,
    },
    {
      id: "namkeen-plain-papdi",
      name: "Plain Papdi",
      category: "namkeen",
      description: "Delicate, wafer-crisp round golden papdis lightly seasoned for everyday tea time.",
      packSize: "Per kg / Custom pack",
      estimatedPrice: "₹360 / kg",
      image: "/images/plain-papdi.jpg",
      isDemoPlaceholder: false,
    },
    {
      id: "snack-methi-papdi-mathri",
      name: "Methi Papdi Mathri",
      category: "snacks",
      description: "Crisp layered mathri delicately infused with hand-rubbed aromatic kasuri methi.",
      packSize: "Per kg / Custom pack",
      estimatedPrice: "₹400 / kg",
      image: "/images/methi-papdi-mathri.jpg",
      isDemoPlaceholder: false,
    },
    {
      id: "namkeen-mitthe-shakarpare",
      name: "Mitthe Shakarpare",
      category: "namkeen",
      description: "Traditional sweet crispy diamond bites coated with a delicate golden sugar crust.",
      packSize: "Per kg / Custom pack",
      estimatedPrice: "₹400 / kg",
      image: "/images/mitthe-shakarpare.jpg",
      isDemoPlaceholder: false,
    },
    {
      id: "namkeen-masala-shakarpare",
      name: "Namkeen & Masala Shakarpare",
      category: "namkeen",
      description: "Crispy savory square-cut bites seasoned with roasted cumin, carom seeds, and subtle spices.",
      packSize: "Per kg / Custom pack",
      estimatedPrice: "₹360 / kg",
      image: "/images/namkeen-masala-shakarpare.jpg",
      isDemoPlaceholder: false,
    },
    {
      id: "snack-achari-mathri",
      name: "Achari Mathri",
      category: "snacks",
      description: "Multi-layered artisanal spiral mathri seasoned with tangy pickling spices and aromatic kalonji.",
      packSize: "Per kg / Custom pack",
      estimatedPrice: "₹400 / kg",
      image: "/images/achari-mathri.jpg",
      isDemoPlaceholder: false,
    },

    // --- SWEETS & MITHAI (ITEMS 9 to 15) ---
    {
      id: "sweet-mawa-modak",
      name: "Mawa Modak",
      category: "sweets",
      description: "Melt-in-the-mouth festive modaks handcrafted with slow-cooked reduced mawa and cardamom.",
      packSize: "Per kg / Gift box",
      estimatedPrice: "₹640 / kg",
      image: "/images/mawa-modak.jpg",
      isDemoPlaceholder: false,
    },
    {
      id: "sweet-coconut-modak",
      name: "Coconut Modak",
      category: "sweets",
      description: "Rich, tender modaks crafted from juicy coconut and sweet condensed milk solids.",
      packSize: "Per kg / Gift box",
      estimatedPrice: "₹640 / kg",
      image: "/images/coconut-modak.jpg",
      isDemoPlaceholder: false,
    },
    {
      id: "sweet-coconut-laddu",
      name: "Coconut Laddu",
      category: "sweets",
      description: "Soft, luscious coconut laddus rolled generously in freshly grated desiccated coconut flakes.",
      packSize: "Per kg / Gift box",
      estimatedPrice: "₹640 / kg",
      image: "/images/coconut-laddu.jpg",
      isDemoPlaceholder: false,
    },
    {
      id: "sweet-chocolate-modak",
      name: "Chocolate Modak",
      category: "sweets",
      description: "Contemporary confectionery delight blending fine cocoa with traditional rich mawa.",
      packSize: "Per kg / Gift box",
      estimatedPrice: "₹550 / kg",
      image: "/images/chocolate-modak.jpg",
      isDemoPlaceholder: false,
    },
    {
      id: "sweet-besan-laddu-dry-fruits",
      name: "Besan Laddu with Dry Fruits",
      category: "sweets",
      description: "Golden roasted gram flour laddus slow-cooked in pure desi ghee and loaded with sliced pistachios and almonds.",
      packSize: "Per kg / Gift box",
      estimatedPrice: "₹640 / kg",
      highlightBadge: "Made with Desi Ghee",
      image: "/images/besan-laddu.jpg",
      isDemoPlaceholder: false,
    },
    {
      id: "sweet-dry-fruit-laddu",
      name: "Dry Fruit Laddu",
      category: "sweets",
      description: "Exquisite guilt-free luxury laddus made without sugar and without honey, loaded with premium cashews, almonds, and pistachios.",
      packSize: "Per kg / Gift box",
      estimatedPrice: "₹1,400 / kg",
      highlightBadge: "Without Sugar • Without Honey",
      image: "/images/dry-fruit-laddu.jpg",
      isDemoPlaceholder: false,
    },
    {
      id: "sweet-chana-laddu",
      name: "Chana Laddu",
      category: "sweets",
      description: "Wholesome, high-protein roasted chana laddus handcrafted with traditional desi ghee and cardamom.",
      packSize: "Per kg / Gift box",
      estimatedPrice: "₹1,000 / kg",
      highlightBadge: "Pure Desi Ghee & High Protein",
      image: "/images/chana-laddu.jpg",
      isDemoPlaceholder: false,
    },
  ],
};

/**
 * Security-vetted helper functions
 */

/**
 * Generates a validated WhatsApp Click-to-Chat URL
 * Sanitizes against XSS and URL manipulation
 */
export function buildWhatsAppLink(
  phoneNumber = BUSINESS_CONFIG.contacts.whatsappNumber,
  message = BUSINESS_CONFIG.contacts.whatsappDefaultMessage
): string {
  const sanitizedNumber = phoneNumber.replace(/\D/g, "");
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${sanitizedNumber}?text=${encodedText}`;
}

/**
 * Generates item-specific WhatsApp enquiry message
 */
export function buildItemWhatsAppLink(
  itemName: string,
  price?: string,
  phoneNumber = BUSINESS_CONFIG.contacts.whatsappNumber
): string {
  const priceSnippet = price ? ` (${price})` : "";
  const customMessage = `Hello Gautam Prabhhu Snacks, I would like to order / enquire about ${itemName}${priceSnippet}. Please confirm availability and packaging.`;
  return buildWhatsAppLink(phoneNumber, customMessage);
}

/**
 * Check if an external link is active or placeholder
 */
export function isConfiguredUrl(url: string | undefined): boolean {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  return trimmed.length > 0 && !trimmed.toUpperCase().includes("UNCONFIGURED");
}
