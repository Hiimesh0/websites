import React from 'react';
import { MapPin, Phone, MessageCircle, Building2, ExternalLink, ShieldCheck, UserCheck, Maximize2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { GALLERY_PHOTOS, type GalleryPhoto } from '../data/galleryData';
import { buildWhatsAppLink, getPhoneCallLink } from '../utils/whatsapp';
import { ContactForm } from '../components/ContactForm';

interface ContactPageProps {
  onPhotoClick?: (photo: GalleryPhoto) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onPhotoClick }) => {
  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#145B58]/10 text-[#145B58]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C6A66B]" />
          <span>Surat, Gujarat • Direct Communication</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#24312F] font-['Manrope'] tracking-tight">
          Contact Maa Health Care
        </h1>

        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
          Reach out directly to discuss heating mattress specifications, pricing on request, purchase enquiries, or rental availability in Surat.
        </p>
      </div>

      {/* Main 2-Column Contact Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left: Contact Info & Location Preview */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8ECE7] shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-[#24312F] font-['Manrope']">
              Official Business Contact
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#334155]">
              {/* Contact Person */}
              <div className="flex items-start gap-3">
                <UserCheck className="w-5 h-5 text-[#145B58] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#24312F]">Contact Person:</strong>
                  <span className="text-sm font-semibold text-[#145B58]">{BUSINESS_INFO.contactPerson}</span>
                  <span className="block text-[11px] text-[#64748B]">Supplier / Business Representative</span>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#8BAF9B] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#24312F]">Phone / Call:</strong>
                  <a href={getPhoneCallLink()} className="text-sm font-bold text-[#145B58] hover:underline">
                    {BUSINESS_INFO.phone}
                  </a>
                  <span className="block text-[11px] text-[#64748B]">Available for enquiries</span>
                </div>
              </div>

              {/* WhatsApp Number */}
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#24312F]">WhatsApp Enquiries:</strong>
                  <a 
                    href={buildWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-bold text-[#25D366] hover:underline"
                  >
                    +91 95124 28000
                  </a>
                  <span className="block text-[11px] text-[#64748B]">Instant chat &amp; product photos</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C6A66B] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#24312F]">Office Address:</strong>
                  <p className="text-xs text-[#475569] leading-relaxed pt-0.5">
                    {BUSINESS_INFO.location.fullAddress}
                  </p>
                </div>
              </div>

              {/* GSTIN */}
              <div className="flex items-start gap-3 border-t border-[#F1F4F1] pt-3">
                <Building2 className="w-5 h-5 text-[#64748B] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#24312F]">GSTIN Registered:</strong>
                  <span className="font-mono text-xs font-semibold text-[#334155]">{BUSINESS_INFO.gstin}</span>
                </div>
              </div>
            </div>

            {/* Google Maps External Directions */}
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl border border-[#145B58] text-[#145B58] hover:bg-[#145B58]/5 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Open Directions in Google Maps
              </a>
            </div>
          </div>

          {/* Location Visual Box */}
          <div 
            onClick={() => onPhotoClick && onPhotoClick(GALLERY_PHOTOS[2])}
            className="rounded-3xl overflow-hidden border border-[#D5DCD6] shadow-sm bg-white cursor-pointer group relative"
          >
            <div className="relative overflow-hidden">
              <img
                src="./images/surat-office.svg"
                alt="Maa Health Care Times Trade Center Surat"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#145B58]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-xs">
                  <Maximize2 className="w-3.5 h-3.5" />
                  View Office Listing Photo
                </span>
              </div>
            </div>
            <div className="p-3 bg-[#F8F9F6] text-center text-xs text-[#64748B] border-t border-[#E8ECE7] flex items-center justify-between px-4">
              <span>Times Trade Center, Punagam–Magob, Surat</span>
              <span className="text-[#145B58] font-bold text-[11px]">Click to Expand</span>
            </div>
          </div>

        </div>

        {/* Right: Working Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </div>

    </div>
  );
};
