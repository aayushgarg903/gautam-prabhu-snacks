import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const BrandHero: React.FC = () => {
  return (
    <section id="home" className="scroll-mt-24 bg-[#FFF8E7] pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-[#E8DDBF]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Copy & Direct Value */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4 sm:space-y-6">
            
            {/* Clean Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#073D29]/5 border border-[#C99A32]/30 text-[#790F1C]">
              <Sparkles className="w-3 h-3 text-[#C99A32]" />
              <span className="text-xs font-semibold tracking-wider uppercase">
                {BUSINESS_CONFIG.eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#790F1C] tracking-tight leading-[1.15]">
              Tradition in <span className="text-[#073D29] italic">Every Bite.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-[#27251F]/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {BUSINESS_CONFIG.shortDescription}
            </p>

            {/* Primary Action Button (Visually Dominant) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#073D29] hover:bg-[#052B20] text-[#FFF8E7] font-semibold text-base px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 group"
                id="hero-explore-menu-btn"
              >
                <span>Explore Our Menu</span>
                <ArrowDown className="w-4 h-4 text-[#E5C56A] group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#C99A32]/60 text-[#073D29] hover:bg-[#073D29]/5 font-medium text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                <span>Rohtak, Haryana</span>
              </a>
            </div>

            {/* Subtle Brand Tagline */}
            <p className="text-xs text-[#71695C] italic pt-1">
              &ldquo;Good food. Familiar flavours. Moments worth sharing.&rdquo;
            </p>

          </div>

          {/* Right Column: Clean Culinary Presentation Imagery */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-2xl overflow-hidden border border-[#C99A32]/50 shadow-lg bg-[#052B20]">
                <img
                  src="/images/hero-banner.jpg"
                  alt="Traditional Indian snacks and sweets presentation"
                  className="w-full h-auto aspect-[4/3] object-cover"
                  width="600"
                  height="450"
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Subtle Caption Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#052B20]/95 via-[#052B20]/70 to-transparent p-3 text-[#FFF8E7] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#FFF8E7]">
                    Authentic Sweets & Namkeen
                  </span>
                  <span className="text-[11px] font-medium text-[#E5C56A]">
                    Rohtak, Haryana
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
