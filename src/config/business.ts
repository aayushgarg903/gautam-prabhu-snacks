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

  // Structured menu items — clearly marked as reference demonstration data
  menu: [
    // --- SWEETS (MITHAI) ---
    {
      id: "sweet-kaju-katli",
      name: "Kaju Katli",
      category: "sweets",
      description: "Traditional diamond-cut cashew fudge with silver leaf finish.",
      packSize: "250g / 500g / 1kg",
      estimatedPrice: "₹280 / 250g (Ref.)",
      image: "/images/sweets-platter.jpg",
      isDemoPlaceholder: true,
    },
    {
      id: "sweet-motichoor-ladoo",
      name: "Motichoor Ladoo",
      category: "sweets",
      description: "Fine gram flour pearls prepared with cardamom and saffron essence.",
      packSize: "500g / 1kg",
      estimatedPrice: "₹220 / 500g (Ref.)",
      image: "/images/hero-banner.jpg",
      isDemoPlaceholder: true,
    },
    {
      id: "sweet-gulab-jamun",
      name: "Gulab Jamun",
      category: "sweets",
      description: "Classic soft milk-solid dumplings soaked in rose-cardamom syrup.",
      packSize: "500g Box",
      estimatedPrice: "₹180 / 500g (Ref.)",
      image: "/images/hero-banner.jpg",
      isDemoPlaceholder: true,
    },
    {
      id: "sweet-besan-burfi",
      name: "Besan Burfi",
      category: "sweets",
      description: "Traditional roasted gram flour sweet garnished with sliced nuts.",
      packSize: "500g Box",
      estimatedPrice: "₹200 / 500g (Ref.)",
      image: "/images/sweets-platter.jpg",
      isDemoPlaceholder: true,
    },

    // --- NAMKEEN ---
    {
      id: "namkeen-aloo-bhujia",
      name: "Aloo Bhujia",
      category: "namkeen",
      description: "Crispy spiced potato and gram flour savoury noodles.",
      packSize: "200g / 400g",
      estimatedPrice: "₹80 / 200g (Ref.)",
      image: "/images/namkeen-platter.jpg",
      isDemoPlaceholder: true,
    },
    {
      id: "namkeen-ratlami-sev",
      name: "Ratlami Sev",
      category: "namkeen",
      description: "Spiced thick sev flavored with black pepper and ajwain.",
      packSize: "250g / 500g",
      estimatedPrice: "₹95 / 250g (Ref.)",
      image: "/images/namkeen-platter.jpg",
      isDemoPlaceholder: true,
    },
    {
      id: "namkeen-kaju-mixture",
      name: "Kaju Mixture",
      category: "namkeen",
      description: "Crunchy mixture with roasted cashews, sev, and spices.",
      packSize: "250g / 500g",
      estimatedPrice: "₹190 / 250g (Ref.)",
      image: "/images/namkeen-platter.jpg",
      isDemoPlaceholder: true,
    },
    {
      id: "namkeen-moong-dal",
      name: "Salted Moong Dal",
      category: "namkeen",
      description: "Lightly salted golden fried moong lentils for tea time.",
      packSize: "200g / 400g",
      estimatedPrice: "₹75 / 200g (Ref.)",
      image: "/images/namkeen-platter.jpg",
      isDemoPlaceholder: true,
    },

    // --- SNACKS (FRESH SAVORIES) ---
    {
      id: "snack-punjabi-samosa",
      name: "Samosa",
      category: "snacks",
      description: "Golden flaky pastry stuffed with seasoned potatoes and green peas.",
      packSize: "Per Piece",
      estimatedPrice: "₹20 / pc (Ref.)",
      image: "/images/snacks-platter.jpg",
      isDemoPlaceholder: true,
    },
    {
      id: "snack-khasta-kachori",
      name: "Khasta Kachori",
      category: "snacks",
      description: "Crispy fried snack filled with spiced lentil stuffing.",
      packSize: "Per Piece",
      estimatedPrice: "₹25 / pc (Ref.)",
      image: "/images/snacks-platter.jpg",
      isDemoPlaceholder: true,
    },
    {
      id: "snack-masala-mathri",
      name: "Masala Mathri",
      category: "snacks",
      description: "Crisp flaky savory crackers infused with traditional spices.",
      packSize: "500g Pack",
      estimatedPrice: "₹140 / 500g (Ref.)",
      image: "/images/snacks-platter.jpg",
      isDemoPlaceholder: true,
    },
    {
      id: "snack-dhokla",
      name: "Dhokla",
      category: "snacks",
      description: "Steamed savory gram flour delicacy tempered with mustard seeds.",
      packSize: "250g / 500g",
      estimatedPrice: "₹70 / 250g (Ref.)",
      image: "/images/snacks-platter.jpg",
      isDemoPlaceholder: true,
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
