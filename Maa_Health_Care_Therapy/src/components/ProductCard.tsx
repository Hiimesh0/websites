import React from 'react';
import { MessageCircle, Info, CheckCircle2, ChevronRight, Zap, FileDown } from 'lucide-react';
import { FEATURES, type Product } from '../data/businessData';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const whatsappUrl = buildWhatsAppLink({
    productName: product.name,
    enquiryType: 'Product Enquiry'
  });

  return (
    <div className="bg-white rounded-2xl border border-[#E8ECE7] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group">
      
      {/* Product Image Area */}
      <div className="relative bg-[#F4F5F1] p-6 flex items-center justify-center overflow-hidden h-64 border-b border-[#E8ECE7]">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-52 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Feature Tag */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#145B58] text-white shadow-xs">
            <Zap className="w-3 h-3 text-[#C6A66B]" />
            {product.accentBadge}
          </span>
        </div>

        {/* Rental availability badge */}
        {product.rentalAvailable && (
          <div className="absolute top-4 right-4">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#8BAF9B]/20 text-[#145B58] border border-[#8BAF9B]/40">
              Rental Options
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Category */}
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8BAF9B] block mb-1">
            {product.category}
          </span>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-[#24312F] font-['Manrope'] mb-2 group-hover:text-[#145B58] transition-colors leading-snug">
            {product.name}
          </h3>

          {/* Short Tagline / Description */}
          <p className="text-xs sm:text-sm text-[#64748B] mb-4 leading-relaxed line-clamp-2">
            {product.overview}
          </p>

          {/* Verified Specifications Preview */}
          <div className="bg-[#F8F9F6] rounded-xl p-3 mb-5 border border-[#EFEFEA] space-y-2">
            {product.verifiedSpecs.slice(0, 3).map((spec, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs">
                <span className="text-[#64748B] font-medium">{spec.label}:</span>
                <span className="text-[#24312F] font-semibold text-right">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* Price status */}
          <div className="flex items-center justify-between text-xs text-[#64748B] mb-5 pb-4 border-b border-[#F1F4F1]">
            <span className="flex items-center gap-1 font-medium text-[#145B58]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#145B58]" />
              {product.priceNote}
            </span>
            <span className="text-[11px] text-[#94A3B8]">
              Direct from Surat
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <button
            onClick={() => onViewDetails(product)}
            className="w-full py-2.5 px-3 rounded-xl border border-[#145B58]/30 hover:border-[#145B58] text-[#145B58] hover:bg-[#145B58]/5 text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
          >
            <Info className="w-3.5 h-3.5" />
            View Details
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold flex items-center justify-center gap-1 transition-all shadow-xs hover:shadow-md"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            WhatsApp
            <ChevronRight className="w-3 h-3" />
          </a>
        </div>

        {FEATURES.enableBrochure && (
          <a
            href="./brochure.pdf"
            download
            className="mt-2 w-full py-2 px-3 rounded-xl border border-[#E8ECE7] hover:bg-[#F8F9F6] text-[#475569] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
          >
            <FileDown className="w-3.5 h-3.5 text-[#145B58]" />
            Download Brochure
          </a>
        )}

      </div>

    </div>
  );
};
