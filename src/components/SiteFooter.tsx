import React from 'react';
import { Star, MessageCircle, ArrowUp, QrCode } from 'lucide-react';
import { BUSINESS_CONFIG, buildWhatsAppLink } from '../config/business';
import { InstagramIcon } from './Icons';

interface SiteFooterProps {
  onOpenReviewModal: () => void;
  onOpenQrModal: () => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const SiteFooter: React.FC<SiteFooterProps> = ({ onOpenReviewModal, onOpenQrModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#052B20] text-[#FFF8E7] border-t border-[#C99A32]/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand & Monogram Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#073D29] border border-[#C99A32] flex items-center justify-center flex-shrink-0 shadow">
                <span className="font-serif font-bold text-base text-[#E5C56A]">GP</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#FFF8E7] tracking-tight">
                  {BUSINESS_CONFIG.name}
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-[#E5C56A] font-semibold">
                  Indian Snacks & Sweets • Rohtak
                </p>
              </div>
            </div>

            <p className="text-xs text-[#FFF8E7]/80 leading-relaxed max-w-sm">
              Discover authentic Indian sweets, namkeen, and traditional snacks in Rohtak, Haryana.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={BUSINESS_CONFIG.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#073D29] border border-[#C99A32]/30 text-[#E5C56A] hover:text-white hover:bg-[#790F1C] flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#073D29] border border-[#C99A32]/30 text-[#E5C56A] hover:text-white hover:bg-emerald-700 flex items-center justify-center transition-colors"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
              </a>

              <button
                onClick={onOpenReviewModal}
                className="w-8 h-8 rounded-full bg-[#073D29] border border-[#C99A32]/30 text-[#E5C56A] hover:text-white hover:bg-[#790F1C] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Rate Us on Google"
                title="Rate Us on Google"
              >
                <Star className="w-3.5 h-3.5 fill-current" />
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C99A32]">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs text-[#FFF8E7]/80">
              <li>
                <a href="#home" className="hover:text-[#E5C56A] transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#E5C56A] transition-colors">Our Menu</a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#E5C56A] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E5C56A] transition-colors">Contact Store</a>
              </li>
              <li>
                <button
                  onClick={onOpenQrModal}
                  className="hover:text-[#E5C56A] transition-colors cursor-pointer text-left flex items-center gap-1 text-[11px] text-[#E5C56A]"
                >
                  <QrCode className="w-3 h-3" />
                  <span>Paper Bag QR Tool</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C99A32]">
              Store Contacts
            </h4>
            <div className="space-y-1.5 text-xs text-[#FFF8E7]/80">
              <p>
                <span className="text-[#C99A32]">City:</span> {BUSINESS_CONFIG.location.displayAddress}
              </p>
              <p>
                <span className="text-[#C99A32]">WhatsApp:</span>{' '}
                <a href={buildWhatsAppLink()} className="hover:text-[#E5C56A]">
                  {BUSINESS_CONFIG.contacts.whatsappFormatted}
                </a>
              </p>
              <p>
                <span className="text-[#C99A32]">Phone:</span>{' '}
                <a href={`tel:${BUSINESS_CONFIG.contacts.phoneNumber}`} className="hover:text-[#E5C56A]">
                  {BUSINESS_CONFIG.contacts.phoneFormatted}
                </a>
              </p>
              <p className="text-[11px] text-[#FFF8E7]/60 pt-1">
                {BUSINESS_CONFIG.regulatory.fssaiDisplayNotice}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-8 pt-4 border-t border-[#C99A32]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#FFF8E7]/60">
          <p>
            © {CURRENT_YEAR} {BUSINESS_CONFIG.name}. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-xs text-[#E5C56A] hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
