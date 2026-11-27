import React, { useState, useMemo } from 'react';
import { Sparkles, MessageCircle, Phone, ShieldAlert, Camera, Search, GitCompare, X } from 'lucide-react';
import { PRODUCTS, type Product, BUSINESS_INFO, FEATURES } from '../data/businessData';
import { GALLERY_PHOTOS, type GalleryPhoto } from '../data/galleryData';
import { buildWhatsAppLink, getPhoneCallLink } from '../utils/whatsapp';
import { ProductCard } from '../components/ProductCard';
import { ProductComparison } from '../components/ProductComparison';

interface ProductsPageProps {
  onViewProduct: (product: Product) => void;
  onPhotoClick?: (photo: GalleryPhoto) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onViewProduct, onPhotoClick }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const filterOptions = [
    { id: 'All', label: 'All Products' },
    { id: 'Heating Mattress', label: 'Heating Mattresses' },
    { id: 'Jade Stone', label: 'Jade Stone Models' },
    { id: 'Therapy Mat', label: 'Therapy Mats' },
    { id: 'Rental Options', label: 'Rental Available' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory =
        selectedFilter === 'All' ||
        (selectedFilter === 'Rental Options' ? p.rentalAvailable : p.category === selectedFilter);
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.overview.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  const compareProducts = useMemo(
    () => PRODUCTS.filter((p) => compareIds.includes(p.id)),
    [compareIds]
  );

  const toggleCompare = (productId: string) => {
    setCompareIds((prev) => {
      if (prev.includes(productId)) return prev.filter((id) => id !== productId);
      if (prev.length >= 3) return prev; // max 3
      return [...prev, productId];
    });
  };

  const removeFromCompare = (productId: string) => {
    setCompareIds((prev) => prev.filter((id) => id !== productId));
  };

  return (
    <div className="py-12 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#145B58]/10 text-[#145B58]">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A66B]" />
          <span>Product Catalogue • Surat Supplier</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#24312F] font-['Manrope'] tracking-tight">
          Heating Mattresses &amp; Therapy Mats
        </h1>

        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
          Browse verified heating mattress and therapy mat options from Maa Health Care. All models feature adjustable temperature settings and are available for purchase or rental enquiries in Surat.
        </p>

        {/* Pricing notice */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="inline-block px-4 py-2 rounded-xl bg-white border border-[#E8ECE7] text-xs text-[#145B58] font-semibold shadow-xs">
            Pricing Note: All items are currently <strong>Price on Request</strong>. Contact our team directly for confirmed prices.
          </div>
          {onPhotoClick && (
            <button
              onClick={() => onPhotoClick(GALLERY_PHOTOS[0])}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#145B58]/10 hover:bg-[#145B58]/20 text-xs font-semibold text-[#145B58] transition-colors"
            >
              <Camera className="w-3.5 h-3.5 text-[#C6A66B]" />
              View Demonstration Photos ({GALLERY_PHOTOS.length})
            </button>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products by name, material, or feature…"
          className="w-full pl-10 pr-10 py-3 rounded-2xl border border-[#E8ECE7] bg-white text-sm text-[#334155] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#145B58]/30 focus:border-[#145B58]/40 shadow-xs"
          aria-label="Search products"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg hover:bg-[#F1F4F1] text-[#94A3B8] hover:text-[#475569]"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        {filterOptions.map((f) => (
          <button
            key={f.id}
            onClick={() => setSelectedFilter(f.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedFilter === f.id
                ? 'bg-[#145B58] text-white shadow-xs'
                : 'bg-white text-[#475569] hover:bg-[#F1F4F1] border border-[#E8ECE7]'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Product Count */}
      {(searchQuery || selectedFilter !== 'All') && (
        <p className="text-center text-xs text-[#64748B]">
          {filteredProducts.length === 0
            ? 'No products found matching your search.'
            : `Showing ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''}`}
        </p>
      )}

      {/* Compare Banner */}
      {FEATURES.enableProductComparison && compareIds.length > 0 && (
        <div className="sticky top-24 z-30 mx-auto max-w-2xl">
          <div className="flex items-center justify-between gap-4 px-5 py-3 rounded-2xl bg-[#145B58] text-white shadow-xl border border-[#0E4340]">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <GitCompare className="w-4 h-4 text-[#C6A66B]" />
              <span>{compareIds.length} product{compareIds.length !== 1 ? 's' : ''} selected for comparison</span>
              {compareIds.length < 2 && (
                <span className="text-[11px] text-[#8BAF9B] font-normal ml-1">
                  (select {2 - compareIds.length} more)
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {compareIds.length >= 2 && (
                <button
                  onClick={() => setShowComparison(true)}
                  className="px-4 py-1.5 rounded-xl bg-white text-[#145B58] text-xs font-bold hover:bg-[#F1F4F1] transition-colors"
                >
                  Compare Now
                </button>
              )}
              <button
                onClick={() => setCompareIds([])}
                className="p-1.5 rounded-xl hover:bg-[#0E4340] transition-colors"
                aria-label="Clear comparison selection"
              >
                <X className="w-4 h-4 text-[#8BAF9B]" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="relative">
              <ProductCard
                product={product}
                onViewDetails={onViewProduct}
              />
              {/* Compare Checkbox */}
              {FEATURES.enableProductComparison && (
                <div className="mt-2 flex items-center justify-center">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-[#64748B] hover:text-[#145B58] transition-colors select-none">
                    <input
                      type="checkbox"
                      checked={compareIds.includes(product.id)}
                      onChange={() => toggleCompare(product.id)}
                      disabled={!compareIds.includes(product.id) && compareIds.length >= 3}
                      className="w-3.5 h-3.5 accent-[#145B58] cursor-pointer"
                    />
                    <span className="font-semibold">Add to Compare</span>
                    {!compareIds.includes(product.id) && compareIds.length >= 3 && (
                      <span className="text-[10px] text-[#94A3B8]">(max 3)</span>
                    )}
                  </label>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-[#64748B]">
          <Search className="w-10 h-10 mx-auto mb-3 text-[#CBD5E1]" />
          <p className="font-semibold text-[#334155]">No products found</p>
          <p className="text-sm mt-1">Try adjusting your search or filter.</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedFilter('All'); }}
            className="mt-4 px-5 py-2 rounded-xl border border-[#145B58] text-[#145B58] text-xs font-semibold hover:bg-[#145B58]/5 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Rental Enquiries Highlight Box */}
      {FEATURES.enableRental && (
        <div className="bg-gradient-to-r from-[#F4F7F4] to-[#EAEFEA] rounded-3xl p-8 border border-[#D5DCD6] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#145B58]">
              Flexible Arrangements
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#24312F] font-['Manrope']">
              Need a Heating Mattress on Rental in Surat?
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              We accommodate rental enquiries for our heating therapy mats and mattresses, especially for postpartum care and seasonal wellness needs. Contact us to check current rental availability and terms.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={buildWhatsAppLink({
                productName: 'Rental Enquiry',
                enquiryType: 'Rental',
                message: 'Hello Maa Health Care, I would like to inquire about rental availability and charges.'
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold flex items-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Ask About Rental
            </a>

            <a
              href={getPhoneCallLink()}
              className="px-6 py-3 rounded-xl border border-[#145B58] text-[#145B58] hover:bg-[#145B58]/5 text-xs font-semibold flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      )}

      {/* Health Note */}
      <div className="p-4 rounded-xl bg-[#FFFDF5] border border-[#FDE68A] flex items-start gap-3 text-xs text-[#78350F] leading-relaxed">
        <ShieldAlert className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
        <p>
          <strong className="text-[#92400E]">Important:</strong> {BUSINESS_INFO.disclaimer}
        </p>
      </div>

      {/* Product Comparison Modal */}
      {showComparison && compareProducts.length >= 2 && (
        <ProductComparison
          products={compareProducts}
          onRemove={(id) => { removeFromCompare(id); if (compareProducts.length <= 2) setShowComparison(false); }}
          onClose={() => setShowComparison(false)}
        />
      )}
    </div>
  );
};
