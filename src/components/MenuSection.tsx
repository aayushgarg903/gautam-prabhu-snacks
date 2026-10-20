import React, { useState, useMemo } from 'react';
import { Search, MessageCircle, Filter, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG, buildItemWhatsAppLink } from '../config/business';
import type { MenuItem } from '../config/business';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'sweets' | 'namkeen' | 'snacks'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Items', count: BUSINESS_CONFIG.menu.length },
    { id: 'sweets', label: 'Sweets & Mithai', count: BUSINESS_CONFIG.menu.filter(m => m.category === 'sweets').length },
    { id: 'namkeen', label: 'Namkeen', count: BUSINESS_CONFIG.menu.filter(m => m.category === 'namkeen').length },
    { id: 'snacks', label: 'Fresh Snacks', count: BUSINESS_CONFIG.menu.filter(m => m.category === 'snacks').length },
  ];

  const filteredItems = useMemo(() => {
    return BUSINESS_CONFIG.menu.filter((item: MenuItem) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="scroll-mt-24 py-12 sm:py-16 bg-[#FDFBF7] border-b border-[#E8DDBF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-6 space-y-2.5">
          <p className="text-xs uppercase font-bold tracking-widest text-[#790F1C]">
            Official Rate List • {BUSINESS_CONFIG.rateList.effectiveDate}
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#073D29] tracking-tight">
            Our Menu & Rates
          </h2>
          <div className="w-16 h-0.5 bg-[#C99A32] mx-auto"></div>
          <p className="text-xs sm:text-sm text-[#71695C]">
            Authentic traditional sweets, crunchy namkeen, and artisanal mathri. All rates listed per kilogram (₹/kg).
          </p>
        </div>

        {/* Official Rate Notice Banner */}
        <div className="mb-8 p-3.5 bg-[#FFF8E7] rounded-xl border border-[#C99A32]/60 text-xs text-[#71695C] flex items-start gap-2.5 max-w-2xl mx-auto shadow-2xs">
          <CheckCircle2 className="w-4 h-4 text-[#073D29] mt-0.5 flex-shrink-0" />
          <div className="space-y-0.5">
            <p className="font-bold text-[#073D29]">
              Prepared Fresh Daily in Rohtak, Haryana
            </p>
            <p className="leading-relaxed">
              Official rates per kilogram as per our store rate card. Custom box packaging (250g, 500g, 1kg gift boxes) and fresh store pickups can be ordered directly via WhatsApp.
            </p>
          </div>
        </div>

        {/* Category Filters & Live Search */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3.5">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2" role="tablist" aria-label="Menu Categories">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer min-touch-target flex items-center gap-1.5 ${
                    activeCategory === cat.id
                      ? 'bg-[#073D29] text-[#FFF8E7] shadow-xs'
                      : 'bg-[#FFF8E7] text-[#27251F] hover:bg-[#E8DDBF]/40 border border-[#E8DDBF]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeCategory === cat.id ? 'bg-[#E5C56A] text-[#052B20]' : 'bg-[#E8DDBF] text-[#71695C]'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full sm:w-64">
              <label htmlFor="menu-search-input" className="sr-only">
                Search menu items
              </label>
              <input
                id="menu-search-input"
                name="menuSearchQuery"
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FFF8E7] border border-[#E8DDBF] rounded-xl pl-8 pr-4 py-1.5 text-xs sm:text-sm text-[#27251F] placeholder-[#71695C]/60 focus:outline-none focus:ring-1 focus:ring-[#073D29]"
                aria-label="Search menu items"
                autoComplete="off"
              />
              <Search className="w-3.5 h-3.5 text-[#71695C] absolute left-2.5 top-2.5 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1.5 text-xs text-[#71695C] hover:text-[#27251F]"
                  aria-label="Clear search"
                >
                  Clear
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Product Grid: 2 columns on mobile, 4 columns on wide screens */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-10 bg-[#FFF8E7] rounded-xl border border-[#E8DDBF] p-6">
            <Filter className="w-7 h-7 text-[#C99A32] mx-auto mb-2 opacity-60" />
            <h3 className="font-serif text-base font-bold text-[#073D29]">No matching items found</h3>
            <p className="text-xs text-[#71695C] mt-1">Try clearing your search query or selecting another category.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-3 px-3 py-1.5 text-xs font-semibold bg-[#073D29] text-[#FFF8E7] rounded-lg cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="bg-[#FFF8E7] rounded-xl overflow-hidden border border-[#E8DDBF] hover:border-[#C99A32]/80 shadow-xs hover:shadow transition-all duration-200 flex flex-col group"
              >
                {/* Image Container with consistent ratio */}
                <div className="relative aspect-[4/3] bg-[#052B20] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                    width="320"
                    height="240"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/images/besan-ladoo.jpg';
                    }}
                  />
                  
                  {/* Category Tag */}
                  <span className="absolute top-2 left-2 bg-[#052B20]/85 text-[#E5C56A] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border border-[#C99A32]/30">
                    {item.category}
                  </span>

                  {/* Special Highlight Badge (e.g. Made with Desi Ghee, Sugar Free) */}
                  {item.highlightBadge && (
                    <span className="absolute top-2 right-2 bg-[#790F1C]/95 text-[#FFF8E7] text-[8px] sm:text-[9px] font-bold tracking-wide px-1.5 py-0.5 rounded shadow-xs border border-[#E5C56A]/50 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-[#E5C56A]" />
                      <span className="truncate max-w-[120px]">{item.highlightBadge}</span>
                    </span>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between space-y-2.5">
                  <div>
                    <h3 className="font-serif text-sm sm:text-base font-bold text-[#073D29] group-hover:text-[#790F1C] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#71695C] mt-1 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Sizing & Rate Pricing */}
                  <div className="pt-2 border-t border-[#E8DDBF]/60 flex items-center justify-between text-[11px] sm:text-xs">
                    <span className="text-[#71695C] text-[10px] sm:text-[11px] font-medium">Rate / kg</span>
                    <span className="font-serif font-bold text-[#790F1C] text-xs sm:text-sm">
                      {item.estimatedPrice}
                    </span>
                  </div>

                  {/* WhatsApp Enquiry Button */}
                  <a
                    href={buildItemWhatsAppLink(item.name, item.estimatedPrice)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-[#073D29] hover:bg-[#052B20] text-[#FFF8E7] text-[11px] sm:text-xs font-semibold py-2 px-2 rounded-lg transition-all active:scale-[0.98] min-touch-target"
                    aria-label={`Order ${item.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current text-[#E5C56A]" />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
