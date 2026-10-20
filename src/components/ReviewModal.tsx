import React, { useState } from 'react';
import { X, Star, Copy, Check, ExternalLink, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG, isConfiguredUrl } from '../config/business';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const isConfigured = isConfiguredUrl(BUSINESS_CONFIG.social.googleReviewUrl);
  const searchName = "Gautam Prabhhu Snacks Rohtak Haryana";

  const handleCopy = () => {
    navigator.clipboard.writeText(searchName);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn" role="dialog" aria-modal="true" aria-labelledby="review-modal-title">
      <div className="bg-[#FFF8E7] border-2 border-[#C99A32] rounded-2xl max-w-md w-full p-6 shadow-2xl relative text-[#27251F] space-y-4">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#71695C] hover:text-[#790F1C] hover:bg-[#E8DDBF]/40 rounded-full transition-colors cursor-pointer"
          aria-label="Close review dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1.5 pt-2">
          <div className="w-12 h-12 rounded-full bg-[#790F1C]/10 border border-[#790F1C]/30 text-[#790F1C] flex items-center justify-center mx-auto">
            <Star className="w-6 h-6 fill-[#C99A32] text-[#C99A32]" />
          </div>
          <h3 id="review-modal-title" className="font-serif text-2xl font-bold text-[#073D29]">
            Rate Us on Google
          </h3>
          <p className="text-xs text-[#71695C]">
            Your review helps fellow food lovers in Rohtak discover authentic taste!
          </p>
        </div>

        {/* Modal Body */}
        {isConfigured ? (
          <div className="text-center py-4 space-y-4">
            <p className="text-sm text-[#27251F]">
              Click below to write your feedback directly on our verified Google listing.
            </p>
            <a
              href={BUSINESS_CONFIG.social.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-[#790F1C] hover:bg-[#5D0A14] text-white font-bold py-3 px-4 rounded-xl shadow transition-colors"
            >
              <span>Write a Google Review</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ) : (
          <div className="space-y-4 text-left bg-[#FDFBF7] p-4 rounded-xl border border-[#E8DDBF]">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#790F1C] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-[#073D29]">Direct Link Setup In Progress</p>
                <p className="text-xs text-[#71695C] mt-0.5">
                  Our direct 1-click review link will be live shortly. Meanwhile, you can review us directly on Google Search & Maps using our verified business name:
                </p>
              </div>
            </div>

            {/* Copyable Business Name Box */}
            <div className="flex items-center justify-between gap-2 p-2.5 bg-[#FFF8E7] rounded-lg border border-[#C99A32]/40">
              <span className="font-medium text-xs text-[#27251F] truncate">
                {searchName}
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-xs font-bold text-[#790F1C] hover:text-[#073D29] bg-white px-2.5 py-1 rounded border border-[#E8DDBF] shadow-2xs transition-colors flex-shrink-0 cursor-pointer"
                title="Copy name to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Search on Google Direct Button */}
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(searchName)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-[#073D29] hover:bg-[#052B20] text-white font-semibold text-xs py-2.5 px-4 rounded-xl shadow-xs transition-colors"
            >
              <span>Search on Google Maps & Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <p className="text-[11px] text-center text-[#71695C] italic">
              Your feedback helps us serve you better.
            </p>
          </div>
        )}

        {/* Modal Footer */}
        <div className="pt-2 text-center">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#71695C] hover:text-[#27251F] underline cursor-pointer"
          >
            Close & Return to Menu
          </button>
        </div>

      </div>
    </div>
  );
};
