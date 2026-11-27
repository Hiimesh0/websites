import React from 'react';
import { ShieldCheck, MapPin, Phone, MessageCircle, Layers, CheckCircle2, Building, Sparkles, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { buildWhatsAppLink, getPhoneCallLink } from '../utils/whatsapp';
import { PhotoGallerySection } from '../components/PhotoGallerySection';
import type { GalleryPhoto } from '../data/galleryData';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onPhotoClick: (photo: GalleryPhoto) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onPhotoClick }) => {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#145B58]/10 text-[#145B58]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C6A66B]" />
            <span>Surat, Gujarat • Heating Therapy Products</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#24312F] font-['Manrope'] tracking-tight">
            About Maa Health Care
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Supplying thoughtfully designed heating mattresses, natural jade stone thermal pads, and flexible therapy mats for personal home wellness and relaxation.
          </p>
        </div>
      </section>

      {/* Section 1 & 2: Business Introduction & Product-Focused Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8ECE7] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#24312F] font-['Manrope']">
                Business Introduction &amp; Core Positioning
              </h2>
              
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                Maa Health Care is a Surat-based enterprise associated with the supply and distribution of heating mattress and therapy mat products. Our product offerings include the popular <strong className="text-[#145B58]">Ceratonic Heating Mattress</strong> with Far Infrared Heating Technology, the <strong className="text-[#145B58]">Model 1092 Jade Stone Heating Mattress</strong>, and portable <strong className="text-[#145B58]">Full Body Heating Therapy Mats</strong>.
              </p>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                Our approach is entirely product-focused: we prioritize clear product specifications, transparent communication regarding temperature control capabilities, and flexible options for both direct purchase and short-term rental arrangements.
              </p>

              <div className="p-4 rounded-2xl bg-[#F8F9F6] border border-[#E8ECE7] space-y-2 text-xs text-[#334155]">
                <div className="font-bold text-[#145B58] text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C6A66B]" />
                  What We Offer
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {BUSINESS_INFO.positioning.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8BAF9B] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={buildWhatsAppLink({ message: 'Hello Maa Health Care, I would like to know more about your product range.' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold flex items-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Ask on WhatsApp
                </a>
                <a
                  href={getPhoneCallLink()}
                  className="px-6 py-3 rounded-xl border border-[#145B58] text-[#145B58] hover:bg-[#145B58]/5 text-xs font-semibold flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call: {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#D5DCD6] bg-[#F4F5F1] p-4">
                <img
                  src="./images/product-jade-1092.svg"
                  alt="Model 1092 Jade Stone Heating Mattress"
                  className="w-full h-auto object-contain rounded-xl"
                />
                <div className="p-3 bg-white rounded-xl mt-3 text-center text-xs text-[#64748B]">
                  Model 1092 Full Body Jade Stone Heating Mattress
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4: Our Product Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8BAF9B]">
            Product Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#24312F] font-['Manrope']">
            Our Heating Therapy Product Categories
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Engineered for soothing warmth and ergonomic comfort at home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Category 1 */}
          <div className="bg-white rounded-2xl p-6 border border-[#E8ECE7] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#145B58]/10 text-[#145B58] flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#24312F] font-['Manrope']">
              Ceratonic Heating Mattresses
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Featuring specialized Ceratonic ceramic discs and Far Infrared Heating Technology. Designed in Queen size formats with multi-level electric temperature settings for uniform warmth.
            </p>
            <div className="text-xs font-semibold text-[#145B58] pt-2">
              Featured: Ceratonic Queen Mattress
            </div>
          </div>

          {/* Category 2 */}
          <div className="bg-white rounded-2xl p-6 border border-[#E8ECE7] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#145B58]/10 text-[#145B58] flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#C6A66B]" />
            </div>
            <h3 className="text-lg font-bold text-[#24312F] font-['Manrope']">
              Jade Stone Heating Mattresses
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Built with hundreds of natural jade stone discs that retain and transmit heat gently. Model 1092 provides full-body coverage with adjustable thermostat control.
            </p>
            <div className="text-xs font-semibold text-[#145B58] pt-2">
              Featured: Model 1092 Jade Mattress
            </div>
          </div>

          {/* Category 3 */}
          <div className="bg-white rounded-2xl p-6 border border-[#E8ECE7] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#145B58]/10 text-[#145B58] flex items-center justify-center">
              <Building className="w-6 h-6 text-[#8BAF9B]" />
            </div>
            <h3 className="text-lg font-bold text-[#24312F] font-['Manrope']">
              Therapy Mats &amp; Rental Options
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Lightweight, flexible full-body therapy mats suitable for versatile placement. Popular for postpartum thermal care enquiries and seasonal relaxation rentals in Surat.
            </p>
            <div className="text-xs font-semibold text-[#145B58] pt-2">
              Featured: Full Body Pain Relief Mat
            </div>
          </div>

        </div>
      </section>

      {/* FULL GOOGLE MAPS LISTING & BUSINESS PHOTO GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PhotoGallerySection
          onPhotoClick={onPhotoClick}
          title="Maa Health Care — Business & Product Photo Gallery"
          subtitle="Explore authentic listing photographs from our Google Maps and supplier presence. Click any image to view full-size details and specifications."
          showFilters={true}
        />
      </section>

      {/* Section 5: Business Location & Verified Registry */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 border border-[#E8ECE7] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#145B58]/10 text-[#145B58]">
                <MapPin className="w-3.5 h-3.5 text-[#C6A66B]" />
                <span>Verified Business Presence</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#24312F] font-['Manrope']">
                Surat Office Location
              </h2>

              <p className="text-sm text-[#475569] leading-relaxed">
                Maa Health Care is established at Times Trade Center on BTRS Road in the Punagam–Magob area of Surat, Gujarat. Customers and prospective buyers are welcome to contact our team to inquire or arrange a product review.
              </p>

              <div className="space-y-2 text-xs text-[#334155] border-t border-[#E8ECE7] pt-4">
                <div><strong className="text-[#24312F]">Premises:</strong> 4th Floor, Office 415, Times Trade Center</div>
                <div><strong className="text-[#24312F]">Road &amp; Area:</strong> BTRS Road, Punagam–Magob</div>
                <div><strong className="text-[#24312F]">City &amp; Pincode:</strong> Surat, Gujarat 395011, India</div>
                <div><strong className="text-[#24312F]">GST Identification Number:</strong> {BUSINESS_INFO.gstin}</div>
                <div><strong className="text-[#24312F]">Contact Person:</strong> {BUSINESS_INFO.contactPerson}</div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 rounded-xl bg-[#145B58] hover:bg-[#0E4340] text-white text-xs font-semibold transition-all shadow-xs"
                >
                  View Map &amp; Contact Page
                </button>
              </div>
            </div>

            <div>
              <div className="rounded-2xl overflow-hidden border border-[#D5DCD6]">
                <img
                  src="./images/surat-office.svg"
                  alt="Times Trade Center Surat Office"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Health Disclaimer Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-[#FFFDF5] border border-[#FDE68A] flex items-start gap-3.5 text-xs text-[#78350F] leading-relaxed">
          <AlertCircle className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
          <div>
            <strong className="block text-sm font-bold text-[#92400E] mb-1 font-['Manrope']">
              Responsible Wellness Notice
            </strong>
            {BUSINESS_INFO.disclaimer}
          </div>
        </div>
      </section>

    </div>
  );
};
