import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Star } from 'lucide-react';
import { BUSINESS_CONFIG, buildWhatsAppLink } from '../config/business';

interface SiteHeaderProps {
  onOpenReviewModal: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ onOpenReviewModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Menu', href: '#menu' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#073D29] text-[#FFF8E7] shadow-md border-b border-[#C99A32]/30 backdrop-blur-md">
      {/* Top micro-bar for verified location & phone */}
      <div className="bg-[#052B20] text-[#E5C56A] text-xs py-1 px-4 border-b border-[#C99A32]/20">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-1.5 font-medium tracking-wide">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E5C56A]"></span>
            <span>Rohtak, Haryana • Traditional Snacks & Sweets</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs">
            <a
              href={`tel:${BUSINESS_CONFIG.contacts.phoneNumber}`}
              className="hover:text-white transition-colors flex items-center gap-1"
              aria-label="Call store"
            >
              <Phone className="w-3 h-3 text-[#C99A32]" />
              <span>{BUSINESS_CONFIG.contacts.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 py-2.5 sm:py-3 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a 
          href="#home" 
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A32] rounded-lg p-0.5"
          aria-label="Gautam Prabhhu Snacks Home"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0">
            <img
              src="/images/gp-emblem.svg"
              alt="Gautam Prabhhu Snacks Monogram Seal"
              className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform duration-200"
              width="44"
              height="44"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#FFF8E7] leading-none group-hover:text-[#E5C56A] transition-colors">
              Gautam Prabhhu
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-semibold text-[#C99A32] mt-0.5">
              Snacks & Sweets
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Desktop Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wide text-[#FFF8E7]/90 hover:text-[#E5C56A] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C99A32] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={onOpenReviewModal}
            className="text-xs font-semibold text-[#E5C56A] hover:text-white transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#C99A32]/40 hover:border-[#E5C56A] cursor-pointer"
          >
            <Star className="w-3.5 h-3.5 fill-[#C99A32]" />
            <span>Rate Us on Google</span>
          </button>
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2">
          {/* Direct WhatsApp CTA Button */}
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#C99A32] hover:bg-[#E5C56A] text-[#052B20] text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl transition-all shadow-xs active:scale-95"
            aria-label="Enquire on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#FFF8E7] hover:text-[#E5C56A] hover:bg-[#052B20] rounded-lg transition-colors md:hidden min-touch-target flex items-center justify-center cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#052B20] border-t border-[#C99A32]/30 px-4 py-3 space-y-2 animate-fadeIn">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#FFF8E7] hover:text-[#E5C56A] py-2 px-3 rounded-md hover:bg-[#073D29] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReviewModal();
              }}
              className="w-full text-left text-sm font-medium text-[#E5C56A] hover:text-white py-2 px-3 rounded-md hover:bg-[#073D29] transition-colors flex items-center justify-between cursor-pointer"
            >
              <span>Rate Us on Google</span>
              <Star className="w-4 h-4 fill-[#C99A32]" />
            </button>
            <div className="pt-2 border-t border-[#C99A32]/20 flex flex-col gap-1.5">
              <a
                href={`tel:${BUSINESS_CONFIG.contacts.phoneNumber}`}
                className="flex items-center gap-2 text-xs text-[#FFF8E7]/90 py-1.5 px-3 rounded-md bg-[#073D29]/60"
              >
                <Phone className="w-3.5 h-3.5 text-[#C99A32]" />
                <span>Call: {BUSINESS_CONFIG.contacts.phoneFormatted}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
