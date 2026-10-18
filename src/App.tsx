import { useState } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { BrandHero } from './components/BrandHero';
import { PrimaryActions } from './components/PrimaryActions';
import { BrandStory } from './components/BrandStory';
import { MenuSection } from './components/MenuSection';
import { ContactSection } from './components/ContactSection';
import { SiteFooter } from './components/SiteFooter';
import { ReviewModal } from './components/ReviewModal';
import { QrCodeModal } from './components/QrCodeModal';
import { Utensils, MessageCircle, Phone, Star } from 'lucide-react';
import { BUSINESS_CONFIG, buildWhatsAppLink } from './config/business';

export function App() {
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8E7] text-[#27251F] selection:bg-[#073D29] selection:text-[#FFF8E7]">
      {/* Site Header */}
      <SiteHeader
        onOpenReviewModal={() => setReviewModalOpen(true)}
      />

      {/* Main Content Area with generous bottom padding for mobile sticky bar */}
      <main className="flex-1 pb-20 sm:pb-0">
        {/* Brand Hero Section */}
        <BrandHero />

        {/* 3 Core Bag-Scan Primary Actions */}
        <PrimaryActions onOpenReviewModal={() => setReviewModalOpen(true)} />

        {/* Simplified Brand Story */}
        <BrandStory />

        {/* 2-Column Mobile, 4-Column Desktop Menu */}
        <MenuSection />

        {/* Verified Rohtak Contact Section */}
        <ContactSection />
      </main>

      {/* Site Footer with QR tool link */}
      <SiteFooter
        onOpenReviewModal={() => setReviewModalOpen(true)}
        onOpenQrModal={() => setQrModalOpen(true)}
      />

      {/* Modals */}
      <ReviewModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
      />

      <QrCodeModal
        isOpen={qrModalOpen}
        onClose={() => setQrModalOpen(false)}
      />

      {/* Mobile Bottom Quick-Action Bar with safe-area spacing */}
      <aside 
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#052B20]/95 backdrop-blur-md border-t border-[#C99A32]/30 px-4 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] flex items-center justify-around text-[#FFF8E7] shadow-lg"
        aria-label="Mobile Quick Access"
      >
        <a
          href="#menu"
          className="flex flex-col items-center gap-1 text-[10px] font-semibold text-[#E5C56A] hover:text-white"
        >
          <Utensils className="w-4 h-4" />
          <span>Menu</span>
        </a>

        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-[10px] font-semibold text-emerald-400 hover:text-white"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:${BUSINESS_CONFIG.contacts.phoneNumber}`}
          className="flex flex-col items-center gap-1 text-[10px] font-semibold text-[#FFF8E7] hover:text-[#E5C56A]"
        >
          <Phone className="w-4 h-4" />
          <span>Call</span>
        </a>

        <button
          onClick={() => setReviewModalOpen(true)}
          className="flex flex-col items-center gap-1 text-[10px] font-semibold text-[#E5C56A] hover:text-white cursor-pointer"
        >
          <Star className="w-4 h-4 fill-current" />
          <span>Rate Us</span>
        </button>
      </aside>
    </div>
  );
}

export default App;
