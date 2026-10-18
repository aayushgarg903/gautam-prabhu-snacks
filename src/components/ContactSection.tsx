import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, buildWhatsAppLink } from '../config/business';
import { InstagramIcon } from './Icons';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-24 py-12 sm:py-16 bg-[#FFF8E7] border-b border-[#E8DDBF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <p className="text-xs uppercase font-bold tracking-widest text-[#790F1C]">
            Connect With Us
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#073D29] tracking-tight">
            Contact & Location
          </h2>
          <div className="w-16 h-0.5 bg-[#C99A32] mx-auto"></div>
          <p className="text-xs sm:text-sm text-[#71695C]">
            Reach out directly for orders, daily inquiries, or festival sweets pickup in Rohtak, Haryana.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Card 1: Location */}
          <div className="bg-[#FFFDF7] p-5 rounded-xl border border-[#E8DDBF] text-center flex flex-col justify-between space-y-3">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#073D29]/10 text-[#073D29] flex items-center justify-center mx-auto mb-2.5">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#073D29]">Location</h3>
              <p className="text-sm font-semibold text-[#27251F] mt-1">
                {BUSINESS_CONFIG.location.displayAddress}
              </p>
              <p className="text-xs text-[#71695C] mt-1">
                Rohtak city, Haryana, India
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Gautam+Prabhhu+Snacks+Rohtak+Haryana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#790F1C] hover:text-[#073D29] transition-colors py-1 inline-block"
            >
              Search on Google Maps &rarr;
            </a>
          </div>

          {/* Card 2: Phone Calling */}
          <div className="bg-[#FFFDF7] p-5 rounded-xl border border-[#E8DDBF] text-center flex flex-col justify-between space-y-3">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#790F1C]/10 text-[#790F1C] flex items-center justify-center mx-auto mb-2.5">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#073D29]">Direct Phone</h3>
              <p className="text-xs text-[#71695C] mt-1">
                Calling line printed on sticker:
              </p>
              <a
                href={`tel:${BUSINESS_CONFIG.contacts.phoneNumber}`}
                className="block font-semibold text-sm text-[#27251F] hover:text-[#790F1C] transition-colors mt-2"
              >
                {BUSINESS_CONFIG.contacts.phoneFormatted}
              </a>
            </div>
            <a
              href={`tel:${BUSINESS_CONFIG.contacts.phoneNumber}`}
              className="text-xs font-semibold text-[#073D29] hover:text-[#790F1C] transition-colors py-1 inline-block"
            >
              Tap to Call Store &rarr;
            </a>
          </div>

          {/* Card 3: WhatsApp Enquiry */}
          <div className="bg-[#FFFDF7] p-5 rounded-xl border border-[#E8DDBF] text-center flex flex-col justify-between space-y-3">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-600/10 text-emerald-700 flex items-center justify-center mx-auto mb-2.5">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#073D29]">WhatsApp Enquiry</h3>
              <p className="text-xs text-[#71695C] mt-1">
                Direct chat with our counter:
              </p>
              <p className="font-semibold text-sm text-emerald-800 mt-2">
                {BUSINESS_CONFIG.contacts.whatsappFormatted}
              </p>
            </div>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs py-2 px-3 rounded-lg transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Open WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Clean Instagram Profile Strip */}
        <div className="mt-8 pt-6 border-t border-[#E8DDBF] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#073D29]">Official Social Media:</span>
            <span className="text-[#71695C]">Follow us for seasonal announcements and festival selections.</span>
          </div>
          <a
            href={BUSINESS_CONFIG.social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-[#790F1C] hover:text-[#073D29] transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>{BUSINESS_CONFIG.social.instagramHandle}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
