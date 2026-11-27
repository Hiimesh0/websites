import React, { useState } from 'react';
import { Sparkles, MessageCircle, Phone, ShieldAlert, Camera } from 'lucide-react';
import { PRODUCTS, type Product, BUSINESS_INFO } from '../data/businessData';
import { GALLERY_PHOTOS, type GalleryPhoto } from '../data/galleryData';
import { buildWhatsAppLink, getPhoneCallLink } from '../utils/whatsapp';
import { ProductCard } from '../components/ProductCard';

interface ProductsPageProps {
  onViewProduct: (product: Product) => void;
  onPhotoClick?: (photo: GalleryPhoto) => void;
  selectedCategory?: string;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onViewProduct, onPhotoClick }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterOptions = [
    { id: 'All', label: 'All Products' },
    { id: 'Heating Mattress', label: 'Heating Mattresses' },
    { id: 'Jade Stone', label: 'Jade Stone Models' },
    { id: 'Therapy Mat', label: 'Therapy Mats' },
    { id: 'Rental Options', label: 'Rental Available' },
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Rental Options') return p.rentalAvailable;
    return p.category === selectedFilter;
  });

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

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={onViewProduct}
          />
        ))}
      </div>

      {/* Rental Enquiries Highlight Box */}
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

      {/* Discreet Health Note */}
      <div className="p-4 rounded-xl bg-[#FFFDF5] border border-[#FDE68A] flex items-start gap-3 text-xs text-[#78350F] leading-relaxed">
        <ShieldAlert className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
        <p>
          <strong className="text-[#92400E]">Important:</strong> {BUSINESS_INFO.disclaimer}
        </p>
      </div>

    </div>
  );
};
