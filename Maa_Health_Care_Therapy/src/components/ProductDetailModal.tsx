import React, { useState } from 'react';
import { X, MessageCircle, CheckCircle2, ShieldAlert, Sparkles, MapPin, Share2, FileDown, Check } from 'lucide-react';
import type { Product } from '../data/businessData';
import { BUSINESS_INFO, FEATURES } from '../data/businessData';
import { buildWhatsAppLink, getPhoneCallLink } from '../utils/whatsapp';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ 
  product, 
  onClose 
}) => {
  const [activeImage, setActiveImage] = useState<'primary' | 'secondary'>('primary');
  const [copied, setCopied] = useState(false);

  if (!product) return null;

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#products`;
    const shareData = {
      title: product.name,
      text: `${product.name} — ${product.tagline} | Maa Health Care Therapy, Surat`,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // User cancelled or share failed; fall back to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(`${shareData.text}\n${shareUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard unavailable
    }
  };

  const whatsappPurchaseLink = buildWhatsAppLink({
    productName: product.name,
    enquiryType: 'Purchase Enquiry',
    message: `I am interested in purchasing the ${product.name}. Please share current pricing and availability.`
  });

  const whatsappRentalLink = buildWhatsAppLink({
    productName: product.name,
    enquiryType: 'Rental Enquiry',
    message: `I am inquiring about rental availability for the ${product.name}. Please let me know rates and terms.`
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8ECE7] bg-[#F8F9F6]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#145B58] text-white">
              {product.category}
            </span>
            <span className="text-xs text-[#64748B]">Maa Health Care • Surat</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#E8ECE7] bg-white hover:bg-[#F1F4F1] text-xs font-semibold text-[#334155] transition-colors"
              aria-label={`Share ${product.name}`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#145B58]" />
                  <span>Share</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#64748B] hover:text-[#24312F] hover:bg-[#E8ECE7] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left: Product Imagery */}
            <div className="space-y-4">
              <div className="relative bg-[#F4F5F1] rounded-2xl p-6 border border-[#E8ECE7] flex items-center justify-center min-h-[300px]">
                <img
                  src={activeImage === 'primary' ? product.image : product.secondaryImage}
                  alt={product.name}
                  className="max-h-72 w-auto object-contain transition-all duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#C6A66B] text-[#24312F]">
                    {product.accentBadge}
                  </span>
                </div>
              </div>

              {/* View Switcher Thumbnails */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setActiveImage('primary')}
                  className={`p-2 rounded-xl border text-xs font-medium text-left flex items-center gap-2 transition-all ${
                    activeImage === 'primary'
                      ? 'border-[#145B58] bg-[#145B58]/5 text-[#145B58] font-bold'
                      : 'border-[#E8ECE7] hover:bg-[#F8F9F6] text-[#64748B]'
                  }`}
                >
                  <span className="w-3 h-3 rounded-full bg-[#145B58]"></span>
                  Full Product View
                </button>
                <button
                  onClick={() => setActiveImage('secondary')}
                  className={`p-2 rounded-xl border text-xs font-medium text-left flex items-center gap-2 transition-all ${
                    activeImage === 'secondary'
                      ? 'border-[#145B58] bg-[#145B58]/5 text-[#145B58] font-bold'
                      : 'border-[#E8ECE7] hover:bg-[#F8F9F6] text-[#64748B]'
                  }`}
                >
                  <span className="w-3 h-3 rounded-full bg-[#C6A66B]"></span>
                  Internal Core Detail
                </button>
              </div>

              {/* Verified Pricing & Inquiry Note */}
              <div className="p-4 rounded-xl bg-[#F8F9F6] border border-[#E8ECE7] text-xs space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[#64748B]">Pricing Status:</span>
                  <span className="font-bold text-[#145B58] text-sm">{product.priceNote}</span>
                </div>
                <p className="text-[#64748B] leading-relaxed">
                  Prices depend on delivery logistics, purchase volume, and current rental terms. Contact our team directly for confirmed rates.
                </p>
              </div>
            </div>

            {/* Right: Product Details & Specs */}
            <div className="space-y-5">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#24312F] font-['Manrope'] mb-1">
                  {product.name}
                </h2>
                <p className="text-sm font-medium text-[#8BAF9B]">
                  {product.tagline}
                </p>
              </div>

              <div className="space-y-2 text-sm text-[#334155] leading-relaxed">
                {product.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Verified Specifications Table */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#145B58] mb-2 font-['Manrope'] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C6A66B]" />
                  Verified Product Specifications
                </h4>
                <div className="rounded-xl border border-[#E8ECE7] overflow-hidden text-xs">
                  {product.verifiedSpecs.map((spec, i) => (
                    <div 
                      key={i} 
                      className={`flex py-2.5 px-3.5 justify-between ${
                        i % 2 === 0 ? 'bg-[#F8F9F6]' : 'bg-white'
                      }`}
                    >
                      <span className="text-[#64748B] font-medium">{spec.label}</span>
                      <span className="text-[#24312F] font-semibold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal For List */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#145B58] mb-2 font-['Manrope']">
                  Suitable Applications
                </h4>
                <div className="grid grid-cols-1 gap-1.5 text-xs text-[#334155]">
                  {product.idealFor.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8BAF9B] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Discreet Health Note */}
          <div className="p-4 rounded-xl bg-[#FFFDF5] border border-[#FDE68A] flex items-start gap-3 text-xs text-[#78350F] leading-relaxed">
            <ShieldAlert className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
            <p>
              <strong>Health &amp; Usage Note:</strong> {BUSINESS_INFO.disclaimer}
            </p>
          </div>

          {/* Location & Quick Contact row */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-[#F8F9F6] rounded-xl border border-[#E8ECE7] text-xs gap-3">
            <div className="flex items-center gap-2 text-[#334155]">
              <MapPin className="w-4 h-4 text-[#145B58] shrink-0" />
              <span>Available for demonstration / inspection at Times Trade Center, Surat.</span>
            </div>
            <a
              href={getPhoneCallLink()}
              className="text-[#145B58] font-bold hover:underline shrink-0"
            >
              Call {BUSINESS_INFO.phone}
            </a>
          </div>

        </div>

        {/* Modal Actions Footer */}
        <div className="px-6 py-4 border-t border-[#E8ECE7] bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#64748B]">
            Direct manufacturer &amp; supplier communication in Surat
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {FEATURES.enableBrochure && (
              <a
                href="./brochure.pdf"
                download
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-[#CBD5E1] text-[#334155] hover:bg-[#F8F9F6] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <FileDown className="w-3.5 h-3.5 text-[#145B58]" />
                Download Brochure
              </a>
            )}
            <a
              href={whatsappRentalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-[#145B58] text-[#145B58] hover:bg-[#145B58]/5 text-xs font-semibold text-center transition-colors"
            >
              Ask About Rental
            </a>
            
            <a
              href={whatsappPurchaseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Enquire on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
