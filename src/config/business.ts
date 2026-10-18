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
  estimatedPrice?: string; // Clearly marked as reference placeholder
  image: string;
  isDemoPlaceholder?: boolean;
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
    /** Primary WhatsApp number confirmed from business packaging */
    whatsappNumber: string;
    whatsappFormatted: string;
    whatsappDefaultMessage: string;
    /** Primary calling phone number */
    phoneNumber: string;
    phoneFormatted: string;
    /** Both numbers as printed on packaging sticker */
    stickerNumbers: {
      number: string;
      formatted: string;
      label: string;
    }[];
  };
  social: {
    instagramHandle: string;
    instagramUrl: string;
    /** UNCONFIGURED — Direct Google review writing destination */
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
    // Verified from packaging sticker
    whatsappNumber: "919518033535",
    whatsappFormatted: "+91 95180 33535",
    whatsappDefaultMessage:
      "Hello Gautam Prabhhu Snacks, I scanned the QR code on your carry bag and would like to enquire about your menu.",

    phoneNumber: "9466291055",
    phoneFormatted: "+91 94662 91055",

    stickerNumbers: [
      {
        number: "9518033535",
        formatted: "+91 95180 33535",
        label: "WhatsApp / Enquiry",
      },
      {
        number: "9466291055",
        formatted: "+91 94662 91055",
        label: "Calling Phone",
      },
    ],
  },

  social: {
    instagramHandle: "@gautamprabhusnacks",
    instagramUrl: "https://www.instagram.com/gautamprabhusnacks/",
    // UNCONFIGURED: Direct Google Review link to be inserted here when verified
    googleReviewUrl: "",
    isGoogleReviewConfigured: false,
  },

  regulatory: {
    fssaiNumber: "20825018001015",
    fssaiDisplayNotice: "FSSAI Reg. No. 20825018001015",
  },

  // Structured menu items — authentic products photographed directly from Gautam Prabhu Snacks
  menu: [
    // --- SWEETS (MITHAI) ---
    {
      id: "sweet-besan-ladoo",
      name: "Besan Ladoo",
      category: "sweets",
      description: "Traditional golden roasted gram flour ladoos crafted with pure desi ghee and garnished with pistachios.",
      packSize: "500g / 1kg",
      estimatedPrice: "Fresh Daily (Enquire)",
      image: "/images/besan-ladoo.jpg",
      isDemoPlaceholder: false,
    },
    {
      id: "sweet-coconut-ladoo",
      name: "Coconut Ladoo",
      category: "sweets",
      description: "Delicate and juicy coconut mithai rolled generously in fine desiccated coconut flakes.",
      packSize: "500g / 1kg",
      estimatedPrice: "Fresh Daily (Enquire)",
      image: "/images/coconut-ladoo.jpg",
      isDemoPlaceholder: false,
    },

    // --- NAMKEEN ---
    {
      id: "namkeen-namak-pare",
      name: "Square Namak Pare",
      category: "namkeen",
      description: "Crispy, diamond-square savory bites seasoned with roasted cumin and subtle aromatic spices.",
      packSize: "250g / 500g",
      estimatedPrice: "Fresh Batch (Enquire)",
      image: "/images/namak-pare.jpg",
      isDemoPlaceholder: false,
    },

    // --- SNACKS (MATHRI & SAVORIES) ---
    {
      id: "snack-karela-mathri",
      name: "Layered Karela Mathri",
      category: "snacks",
      description: "Artisanal multi-layered spiral mathri crisped to golden perfection with kalonji and whole spices.",
      packSize: "250g / 500g",
      estimatedPrice: "Fresh Batch (Enquire)",
      image: "/images/karela-mathri.jpg",
      isDemoPlaceholder: false,
    },
    {
      id: "snack-gol-mathri",
      name: "Crispy Gol Mathri",
      category: "snacks",
      description: "Flaky, textured round crackers infused with freshly cracked black pepper and fragrant ajwain.",
      packSize: "250g / 500g",
      estimatedPrice: "Fresh Batch (Enquire)",
      image: "/images/gol-mathri.jpg",
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
export function buildItemWhatsAppLink(itemName: string): string {
  const customMessage = `Hello Gautam Prabhhu Snacks, I would like to enquire about "${itemName}".`;
  return buildWhatsAppLink(BUSINESS_CONFIG.contacts.whatsappNumber, customMessage);
}

/**
 * Check if an external link is active or placeholder
 */
export function isConfiguredUrl(url: string | undefined): boolean {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  return trimmed.length > 0 && !trimmed.toUpperCase().includes("UNCONFIGURED");
}
