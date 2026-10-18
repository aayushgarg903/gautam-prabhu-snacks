/**
 * TDD Unit Tests for Business Logic, Sanitization, and URL Security
 * 
 * Verifies:
 * 1. Safe WhatsApp link construction (strip non-digits, safe encoding, prevent XSS/injection)
 * 2. Unconfigured external URL detection (prevent dead links / generic 404s)
 * 3. Menu data validation (non-empty IDs, categories, and image paths)
 */

import { BUSINESS_CONFIG, buildWhatsAppLink, buildItemWhatsAppLink, isConfiguredUrl } from '../config/business';

export function runTests() {
  const results: { test: string; passed: boolean; error?: string }[] = [];

  function assert(condition: boolean, testName: string, errorMsg?: string) {
    if (condition) {
      results.push({ test: testName, passed: true });
    } else {
      results.push({ test: testName, passed: false, error: errorMsg || 'Assertion failed' });
    }
  }

  // Test 1: WhatsApp Link Sanitization & Country Code
  const cleanPhone = "919518033535";
  const rawPhoneWithDashes = "+91 (95180) 335-35";
  const sampleMsg = "Hello! <script>alert(1)</script> I want Kaju Katli.";
  const generatedUrl = buildWhatsAppLink(rawPhoneWithDashes, sampleMsg);

  assert(
    generatedUrl.startsWith(`https://wa.me/${cleanPhone}`),
    "WhatsApp URL correctly strips non-numeric characters and retains valid dial string"
  );
  assert(
    !generatedUrl.includes("<script>"),
    "WhatsApp URL URI-encodes potential script tags to prevent XSS",
    `URL contains unencoded tags: ${generatedUrl}`
  );
  assert(
    generatedUrl.includes(encodeURIComponent(sampleMsg)),
    "WhatsApp URL contains correctly encoded message query parameter"
  );

  // Test 2: Item Specific WhatsApp Message
  const itemUrl = buildItemWhatsAppLink("Kaju Katli");
  assert(
    itemUrl.includes("Kaju%20Katli") || itemUrl.includes("Kaju+Katli"),
    "Item WhatsApp enquiry pre-fills exact product name safely"
  );

  // Test 3: Unconfigured URL Validation
  assert(
    !isConfiguredUrl(""),
    "isConfiguredUrl correctly rejects empty string"
  );
  assert(
    !isConfiguredUrl("UNCONFIGURED — insert the verified direct review link."),
    "isConfiguredUrl correctly flags UNCONFIGURED marker as unconfigured"
  );
  assert(
    !isConfiguredUrl(BUSINESS_CONFIG.location.googleMapsUrl),
    "Location Google Maps correctly identified as unconfigured placeholder"
  );
  assert(
    isConfiguredUrl(BUSINESS_CONFIG.social.instagramUrl),
    "Instagram URL correctly identified as valid configured link"
  );

  // Test 4: Menu Structure Integrity
  assert(
    BUSINESS_CONFIG.menu.length >= 10,
    "Menu contains rich selection of authentic Sweets, Namkeen, and Snacks"
  );
  const invalidItems = BUSINESS_CONFIG.menu.filter(
    (item) => !item.id || !item.name || !item.category || !item.image
  );
  assert(
    invalidItems.length === 0,
    "All menu items possess required structural fields (id, name, category, image)"
  );

  // Test 5: Verified Business Data Presence
  assert(
    BUSINESS_CONFIG.contacts.stickerNumbers.length === 2,
    "Both phone numbers from physical packaging sticker are preserved centrally"
  );
  assert(
    BUSINESS_CONFIG.regulatory.fssaiNumber === "20825018001015",
    "FSSAI registration number correctly configured as 20825018001015"
  );

  return results;
}
