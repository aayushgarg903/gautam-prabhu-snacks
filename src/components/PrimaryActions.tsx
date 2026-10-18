import React from 'react';
import { UtensilsCrossed, Star, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, buildWhatsAppLink, isConfiguredUrl } from '../config/business';
import { InstagramIcon } from './Icons';

interface PrimaryActionsProps {
  onOpenReviewModal: () => void;
}

export const PrimaryActions: React.FC<PrimaryActionsProps> = ({ onOpenReviewModal }) => {
  const handleGoogleReviewClick = (e: React.MouseEvent) => {
    if (!isConfiguredUrl(BUSINESS_CONFIG.social.googleReviewUrl)) {
      e.preventDefault();
      onOpenReviewModal();
    }
  };

  return (
    <section className="relative z-20 -mt-6 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-[#FFFDF7] rounded-2xl p-5 sm:p-6 shadow-md border border-[#E8DDBF]">
        
        {/* 3 Core Primary Actions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
          
          {/* ACTION 1: EXPLORE OUR MENU (Emerald Background) */}
          <a
            href="#menu"
            className="flex items-center gap-3.5 p-4 rounded-xl bg-[#073D29] text-[#FFF8E7] hover:bg-[#052B20] transition-all duration-200 shadow-sm hover:shadow active:scale-[0.99] group min-touch-target border border-[#073D29]"
            id="action-menu-btn"
          >
            <div className="w-11 h-11 rounded-lg bg-[#052B20] border border-[#C99A32]/40 flex items-center justify-center flex-shrink-0 text-[#E5C56A] group-hover:scale-105 transition-transform">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="block text-base sm:text-lg font-bold text-[#FFF8E7] truncate font-serif">
                Explore Our Menu
              </span>
              <span className="block text-xs text-[#FFF8E7]/80 truncate">
                Mithai, Namkeen & Snacks
              </span>
            </div>
          </a>

          {/* ACTION 2: RATE US ON GOOGLE (Maroon Background) */}
          <a
            href={isConfiguredUrl(BUSINESS_CONFIG.social.googleReviewUrl) ? BUSINESS_CONFIG.social.googleReviewUrl : '#review'}
            onClick={handleGoogleReviewClick}
            target={isConfiguredUrl(BUSINESS_CONFIG.social.googleReviewUrl) ? "_blank" : undefined}
            rel={isConfiguredUrl(BUSINESS_CONFIG.social.googleReviewUrl) ? "noopener noreferrer" : undefined}
            className="flex items-center gap-3.5 p-4 rounded-xl bg-[#790F1C] text-[#FFF8E7] hover:bg-[#5D0A14] transition-all duration-200 shadow-sm hover:shadow active:scale-[0.99] group min-touch-target border border-[#790F1C]"
            id="action-review-btn"
          >
            <div className="w-11 h-11 rounded-lg bg-[#550A13] border border-[#C99A32]/40 flex items-center justify-center flex-shrink-0 text-[#E5C56A] group-hover:scale-105 transition-transform">
              <Star className="w-5 h-5 fill-[#E5C56A]" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="block text-base sm:text-lg font-bold text-[#FFF8E7] truncate font-serif">
                Rate Us on Google
              </span>
              <span className="block text-xs text-[#FFF8E7]/80 truncate">
                Share your feedback
              </span>
            </div>
          </a>

          {/* ACTION 3: FOLLOW US ON INSTAGRAM (Ivory Background + Gold Border + Emerald Heading) */}
          <a
            href={BUSINESS_CONFIG.social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-4 rounded-xl bg-[#FFF8E7] text-[#27251F] hover:bg-[#FDFBF7] border border-[#C99A32]/60 transition-all duration-200 shadow-xs hover:shadow active:scale-[0.99] group min-touch-target"
            id="action-instagram-btn"
          >
            <div className="w-11 h-11 rounded-lg bg-[#073D29] border border-[#C99A32]/40 flex items-center justify-center flex-shrink-0 text-[#E5C56A] group-hover:scale-105 transition-transform">
              <InstagramIcon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="block text-base sm:text-lg font-bold text-[#073D29] truncate font-serif">
                Follow on Instagram
              </span>
              <span className="block text-xs text-[#71695C] truncate">
                {BUSINESS_CONFIG.social.instagramHandle}
              </span>
            </div>
          </a>

        </div>

        {/* WhatsApp Secondary Enquiry Strip */}
        <div className="mt-4 pt-3.5 border-t border-[#E8DDBF]/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#71695C] text-center sm:text-left">
            <span className="font-semibold text-[#073D29]">Need quick assistance or placing a bulk order?</span>
            <span className="hidden md:inline">• Message our team directly</span>
          </div>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300/60 px-3.5 py-1.5 rounded-lg transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Chat on WhatsApp (+91 95180 33535)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
