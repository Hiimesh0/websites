import React from 'react';
import { Phone, MapPin, MessageCircle, FileText, ArrowRight, ShieldAlert } from 'lucide-react';
import { BUSINESS_INFO, PRODUCTS } from '../data/businessData';
import { buildWhatsAppLink, getPhoneCallLink } from '../utils/whatsapp';

interface FooterProps {
  onNavigate: (page: string) => void;
  onSelectProduct: (productId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectProduct }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (productId: string) => {
    onNavigate('products');
    onSelectProduct(productId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A2624] text-[#E2E8F0] pt-16 pb-12 border-t border-[#2B3B38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2B3B38]">
          
          {/* Column 1: Brand & Verified Positioning */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#145B58] flex items-center justify-center text-[#C6A66B]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.9" />
                  <path d="M12 2C12 2 15 7 15 10C15 11.66 13.66 13 12 13C10.34 13 9 11.66 9 10C9 7 12 2 12 2Z" fill="#FFFFFF" />
                </svg>
              </div>
              <div>
                <span className="block text-lg font-bold text-white font-['Manrope']">
                  {BUSINESS_INFO.name}
                </span>
                <span className="block text-xs text-[#8BAF9B]">
                  Surat, Gujarat
                </span>
              </div>
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Surat-based business associated with heating mattress and therapy mat products. Explore Ceratonic, Jade Stone, and full-body thermal therapy mats with purchase and rental enquiry options.
            </p>
            <div className="pt-2 text-xs text-[#CBD5E1] space-y-1">
              <div><strong className="text-white">Contact Person:</strong> {BUSINESS_INFO.contactPerson}</div>
              <div><strong className="text-white">GSTIN:</strong> {BUSINESS_INFO.gstin}</div>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-['Manrope']">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="text-[#94A3B8] hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C6A66B]" /> Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="text-[#94A3B8] hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C6A66B]" /> About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="text-[#94A3B8] hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C6A66B]" /> Our Products
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('how-it-works')} className="text-[#94A3B8] hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C6A66B]" /> How It Works &amp; FAQs
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="text-[#94A3B8] hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C6A66B]" /> Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Products */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-['Manrope']">
              Featured Products
            </h4>
            <ul className="space-y-3 text-sm">
              {PRODUCTS.map(product => (
                <li key={product.id}>
                  <button
                    onClick={() => handleProductClick(product.id)}
                    className="text-left text-[#94A3B8] hover:text-white transition-colors group"
                  >
                    <span className="block font-medium text-[#CBD5E1] group-hover:text-[#C6A66B] transition-colors">
                      {product.name}
                    </span>
                    <span className="block text-xs text-[#64748B]">
                      {product.featuredFeature}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3 text-sm">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-['Manrope']">
              Surat Office
            </h4>
            <div className="flex items-start gap-2.5 text-[#CBD5E1]">
              <MapPin className="w-4 h-4 text-[#C6A66B] shrink-0 mt-1" />
              <p className="leading-relaxed text-xs">
                {BUSINESS_INFO.location.fullAddress}
              </p>
            </div>
            <div className="flex items-center gap-2.5 text-[#CBD5E1]">
              <Phone className="w-4 h-4 text-[#8BAF9B] shrink-0" />
              <a href={getPhoneCallLink()} className="hover:text-white transition-colors text-xs font-semibold">
                {BUSINESS_INFO.phone}
              </a>
            </div>
            <div className="pt-2">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20BD5A] transition-colors shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                Message on WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Health Caution Note - Discreet and Accurate */}
        <div className="my-8 p-4 rounded-xl bg-[#24312F] border border-[#3A4A47] flex items-start gap-3 text-xs text-[#94A3B8] leading-relaxed">
          <ShieldAlert className="w-5 h-5 text-[#C6A66B] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#E2E8F0]">Please Note:</strong> {BUSINESS_INFO.disclaimer}
          </p>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-[#64748B] pt-4 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Registered GSTIN: {BUSINESS_INFO.gstin}.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[#8BAF9B]">Surat, Gujarat, India</span>
            <span>•</span>
            <a 
              href={BUSINESS_INFO.listingRating.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#CBD5E1] transition-colors inline-flex items-center gap-1"
            >
              <FileText className="w-3 h-3" />
              Verified Supplier Listing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
