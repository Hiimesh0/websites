import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  MessageCircle, 
  ArrowRight, 
  Phone,
  Layers, 
  Sparkles, 
  RotateCcw, 
  ExternalLink,
  Clock
} from 'lucide-react';
import { BUSINESS_INFO, PRODUCTS, HOW_IT_WORKS_STEPS, type Product } from '../data/businessData';
import { GALLERY_PHOTOS, type GalleryPhoto } from '../data/galleryData';
import { buildWhatsAppLink, getPhoneCallLink } from '../utils/whatsapp';
import { ProductCard } from '../components/ProductCard';
import { EnquiryCTA } from '../components/EnquiryCTA';
import { PhotoGallerySection } from '../components/PhotoGallerySection';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onViewProduct: (product: Product) => void;
  onPhotoClick: (photo: GalleryPhoto) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onViewProduct, onPhotoClick }) => {
  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* HERO SECTION */}
      <section className="relative pt-6 sm:pt-12 pb-16 bg-gradient-to-b from-[#F2F5F2] to-[#F8F9F6] border-b border-[#E8ECE7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145B58]/10 text-[#145B58] text-xs font-semibold tracking-wide">
                <ShieldCheck className="w-4 h-4 text-[#C6A66B]" />
                <span>Maa Health Care • Heating Therapy Supplier, Surat</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#24312F] font-['Manrope'] tracking-tight leading-[1.15]">
                Comfort-Focused Heating Therapy Products for <span className="text-[#145B58]">Everyday Wellness</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
                Explore thoughtfully presented heating mattress and therapy mat options from Maa Health Care. Contact our team to understand product specifications, availability and rental options.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  onClick={() => onNavigate('products')}
                  className="px-7 py-4 rounded-xl bg-[#145B58] hover:bg-[#0E4340] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  Explore Our Products
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={buildWhatsAppLink({ message: 'Hello Maa Health Care, I would like to inquire about your heating therapy products.' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Enquire on WhatsApp
                </a>
              </div>

              {/* Trust-Information Row (Strictly Verified Details Only) */}
              <div className="pt-6 border-t border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2.5 text-xs text-[#334155]">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#145B58] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-[#24312F]">Based in Surat</span>
                    <span className="text-[#64748B]">Times Trade Center</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-[#334155]">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#145B58] shrink-0">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="block font-bold text-[#24312F]">Product Enquiries</span>
                    <span className="text-[#64748B]">Direct WhatsApp support</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-[#334155]">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#145B58] shrink-0">
                    <RotateCcw className="w-4 h-4 text-[#C6A66B]" />
                  </div>
                  <div>
                    <span className="block font-bold text-[#24312F]">Purchase &amp; Rental</span>
                    <span className="text-[#64748B]">Subject to confirmation</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Visual Column: Realistic Therapy Mattress in Calm Bedroom Setting */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#D5DCD6] shadow-xl bg-white group">
                <img
                  src="./images/hero-therapy-lifestyle.svg"
                  alt="Maa Health Care Heating Therapy Mattress in lifestyle setting"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-102"
                />

                {/* Overlaid verified badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#E2E8F0] shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#145B58]/10 text-[#145B58] flex items-center justify-center">
                      <Layers className="w-5 h-5 text-[#145B58]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#24312F]">Ceratonic &amp; Jade Stone</h4>
                      <p className="text-[11px] text-[#64748B]">Temperature Controlled Mattresses</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#145B58] bg-[#145B58]/10 px-2.5 py-1 rounded-full">
                    Surat, GJ
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ABOUT MAA HEALTH CARE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8ECE7] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#8BAF9B]/20 text-[#145B58]">
                <span>Our Business</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-[#24312F] font-['Manrope']">
                About Maa Health Care
              </h2>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                Maa Health Care is a Surat-based business associated with heating mattress and therapy mat products. The business offers product options including Ceratonic Heating Mattress and Full Body Jade Stone Heating Mattress. Customers can contact the team for product details, availability and enquiry support.
              </p>

              {/* Location pill */}
              <div className="p-4 rounded-xl bg-[#F8F9F6] border border-[#E8ECE7] flex items-start gap-3 text-xs text-[#334155]">
                <MapPin className="w-4 h-4 text-[#145B58] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#24312F]">Location: </strong>
                  {BUSINESS_INFO.location.fullAddress}
                  <span className="block text-[#64748B] pt-0.5">GSTIN: {BUSINESS_INFO.gstin}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={buildWhatsAppLink({ message: 'Hello Maa Health Care, I would like to know more about your business and products.' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold flex items-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  WhatsApp Enquiry
                </a>

                <button
                  onClick={() => onNavigate('about')}
                  className="px-5 py-2.5 rounded-xl border border-[#145B58]/30 hover:bg-[#145B58]/5 text-[#145B58] text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  Read More About Us
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Product illustration */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] bg-[#F4F5F1] p-4 text-center">
                <img
                  src="./images/product-ceratonic.svg"
                  alt="Maa Health Care Ceratonic Heating Mattress"
                  className="max-h-60 mx-auto object-contain"
                />
                <p className="text-xs font-medium text-[#64748B] mt-2">
                  Ceratonic Heating Mattress with Far Infrared Heating Technology
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#145B58]/10 text-[#145B58] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A66B]" />
              <span>Verified Product Range</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#24312F] font-['Manrope']">
              Featured Heating Therapy Mattresses &amp; Mats
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Carefully engineered heating mattresses for thermal comfort, muscle relaxation, and wellness routines.
            </p>
          </div>

          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#145B58] hover:text-[#0E4340] group self-start md:self-auto"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3 Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewProduct}
            />
          ))}
        </div>
      </section>

      {/* GOOGLE MAPS LISTING & AUTHENTIC PHOTO SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PhotoGallerySection
          onPhotoClick={onPhotoClick}
          title="Google Maps Listing & Business Photos"
          subtitle="Explore authentic product demonstrations, Ceratonic disc arrays, natural jade stones, and our Times Trade Center location in Surat."
          limit={4}
          showFilters={false}
        />
        <div className="mt-6 text-center">
          <button
            onClick={() => onNavigate('about')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#145B58] text-[#145B58] hover:bg-[#145B58]/5 font-semibold text-xs transition-colors"
          >
            <span>Explore All {GALLERY_PHOTOS.length} Business Listing Photographs in About Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* WHY CHOOSE MAA HEALTH CARE? */}
      <section className="bg-[#FFFFFF] py-16 border-y border-[#E8ECE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8BAF9B]">
              Customer Experience &amp; Service
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#24312F] font-['Manrope']">
              Why Choose Maa Health Care?
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              A trusted local presence in Surat dedicated to providing transparent product details, specifications, and reliable enquiry support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#F8F9F6] border border-[#E8ECE7] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#145B58]/10 text-[#145B58] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-base font-bold text-[#24312F] font-['Manrope']">
                Multiple Heating Mattress Options
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Choose between Ceratonic disc models, 1092 natural Jade Stone mattresses, and flexible full-body therapy mats to match your comfort preference.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F9F6] border border-[#E8ECE7] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#145B58]/10 text-[#145B58] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-base font-bold text-[#24312F] font-['Manrope']">
                Product Information &amp; Enquiry Support
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Receive complete details on voltage, dimensions, Far Infrared features, and temperature controllers before making any decision.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F9F6] border border-[#E8ECE7] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#145B58]/10 text-[#145B58] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-base font-bold text-[#24312F] font-['Manrope']">
                Purchase &amp; Rental Enquiries
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                We accommodate both direct purchase and short-term rental inquiries for postpartum heat therapy and recovery needs, subject to availability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F9F6] border border-[#E8ECE7] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#145B58]/10 text-[#145B58] flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="text-base font-bold text-[#24312F] font-['Manrope']">
                Surat-Based Local Business
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Conveniently located at Times Trade Center, Punagam–Magob, Surat. Feel free to inspect products directly at our 4th-floor office.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F9F6] border border-[#E8ECE7] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#145B58]/10 text-[#145B58] flex items-center justify-center font-bold">
                05
              </div>
              <h3 className="text-base font-bold text-[#24312F] font-['Manrope']">
                Direct Communication With Team
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                No automated bot maze. Talk directly to our team member Dhrumil J. Vaghela via WhatsApp or call for immediate, courteous responses.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F9F6] border border-[#E8ECE7] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#145B58]/10 text-[#145B58] flex items-center justify-center font-bold">
                06
              </div>
              <h3 className="text-base font-bold text-[#24312F] font-['Manrope']">
                Responsible Wellness Positioning
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                We believe in truthful information. We clearly communicate that heating mattresses are thermal wellness aids, prioritizing customer well-being.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* HOW IT WORKS (01 - 04) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#145B58]">
            Simple 4-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#24312F] font-['Manrope']">
            How It Works
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            From exploring products to receiving your heating mattress, our enquiry flow is straightforward and transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS_STEPS.map((stepItem, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#E8ECE7] shadow-xs hover:border-[#145B58]/40 transition-colors relative"
            >
              <div className="text-2xl font-black text-[#C6A66B] font-['Manrope'] mb-3">
                {stepItem.step}
              </div>
              <h3 className="text-base font-bold text-[#24312F] font-['Manrope'] mb-2">
                {stepItem.title}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {stepItem.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT ENQUIRY CTA SECTION */}
      <EnquiryCTA />

      {/* CONTACT & LOCATION PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-3xl border border-[#E8ECE7] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8BAF9B]">
                  Visit or Contact Us
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#24312F] font-['Manrope'] mt-1">
                  Surat Office &amp; Contact Information
                </h2>
              </div>

              <div className="space-y-4 text-sm text-[#334155]">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#145B58] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-[#24312F]">Phone / Mobile:</span>
                    <a href={getPhoneCallLink()} className="text-[#145B58] font-bold text-base hover:underline">
                      {BUSINESS_INFO.phone}
                    </a>
                    <span className="block text-xs text-[#64748B]">Contact Person: {BUSINESS_INFO.contactPerson}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C6A66B] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-[#24312F]">Address:</span>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {BUSINESS_INFO.location.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#8BAF9B]" />
                  </div>
                  <div className="text-xs text-[#64748B]">
                    <span>GSTIN Registered: <strong>{BUSINESS_INFO.gstin}</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={buildWhatsAppLink({ message: 'Hello, I would like to enquire about your heating mattresses.' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold flex items-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  WhatsApp Enquiry
                </a>

                <a
                  href={BUSINESS_INFO.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl border border-[#145B58] text-[#145B58] hover:bg-[#145B58]/5 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Google Maps Directions
                </a>
              </div>
            </div>

            {/* Office Visual representation */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-[#D5DCD6] shadow-md bg-[#F4F5F1]">
                <img
                  src="./images/surat-office.svg"
                  alt="Maa Health Care Times Trade Center Surat"
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 bg-white text-center text-xs text-[#64748B]">
                  Times Trade Center, BTRS Road, Punagam–Magob, Surat
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
