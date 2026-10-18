import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="scroll-mt-24 py-12 sm:py-16 bg-[#FFF8E7] border-b border-[#E8DDBF]/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#073D29] tracking-tight">
              {BUSINESS_CONFIG.story.heading}
            </h2>
            <div className="w-16 h-0.5 bg-[#C99A32] mx-auto lg:mx-0"></div>
            <p className="text-sm sm:text-base text-[#27251F]/80 leading-relaxed">
              {BUSINESS_CONFIG.story.paragraph}
            </p>
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs uppercase font-semibold tracking-wider text-[#790F1C] bg-[#790F1C]/5 border border-[#790F1C]/20 px-3 py-1 rounded-full">
                Rohtak, Haryana
              </span>
              <span className="text-xs uppercase font-semibold tracking-wider text-[#073D29] bg-[#073D29]/5 border border-[#073D29]/20 px-3 py-1 rounded-full">
                Sweets & Namkeen
              </span>
            </div>
          </div>

          {/* Carefully Arranged 2-Image Showcase */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
            <div className="rounded-xl overflow-hidden border border-[#E8DDBF] shadow-sm">
              <img
                src="/images/sweets-platter.jpg"
                alt="Indian sweets assortment"
                className="w-full h-36 sm:h-44 object-cover"
                loading="lazy"
                width="300"
                height="220"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-[#E8DDBF] shadow-sm">
              <img
                src="/images/namkeen-platter.jpg"
                alt="Indian crispy namkeen varieties"
                className="w-full h-36 sm:h-44 object-cover"
                loading="lazy"
                width="300"
                height="220"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
