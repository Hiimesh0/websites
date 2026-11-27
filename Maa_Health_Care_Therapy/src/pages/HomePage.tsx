import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  MessageCircle, 
  ArrowRight, 
  Phone, 
  Layers, 
  Sparkles, 
  ExternalLink,
  Clock,
  Star,
  Quote
} from 'lucide-react';
import { BUSINESS_INFO, PRODUCTS, type Product } from '../data/businessData';
import { GALLERY_PHOTOS, type GalleryPhoto } from '../data/galleryData';
import { buildWhatsAppLink, getPhoneCallLink } from '../utils/whatsapp';
import { ProductCard } from '../components/ProductCard';
import { StatsHighlights } from '../components/StatsHighlights';
import { VideoSection } from '../components/VideoSection';
import { HowToUseSection } from '../components/HowToUseSection';
import { ComparisonSection } from '../components/ComparisonSection';
import { ServicesSection } from '../components/ServicesSection';
import { FAQSection } from '../components/FAQSection';
import { EnquiryCTA } from '../components/EnquiryCTA';
import { ContactForm } from '../components/ContactForm';
import { PhotoGallerySection } from '../components/PhotoGallerySection';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onViewProduct: (product: Product) => void;
  onPhotoClick: (photo: GalleryPhoto) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onViewProduct, onPhotoClick }) => {
  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* SECTION 1: HERO */}
      <section className="relative pt-8 sm:pt-14 pb-16 bg-gradient-to-b from-[#F2F5F2] via-[#F8F9F6] to-[#F8F9F6] border-b border-[#E8ECE7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#145B58]/10 text-[#145B58] text-xs font-semibold tracking-wide shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#C6A66B]" />
                <span>Maa Health Care • Heating Therapy &amp; Wellness Products, Surat</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#24312F] font-['Manrope'] tracking-tight leading-[1.14]">
                Discover Comfortable <span className="text-[#145B58]">Heating Therapy Solutions</span> for Your Wellness
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
                Explore heating mattress and therapy mat options from Maa Health Care. Discover product details and contact our team for purchase or rental enquiries in Surat.
              </p>

              {/* Action Buttons: 3 Prominent CTAs as requested */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  onClick={() => onNavigate('products')}
                  className="px-6 py-4 rounded-xl bg-[#145B58] hover:bg-[#0E4340] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={buildWhatsAppLink({ message: 'Hello Maa Health Care, I would like to inquire about your heating therapy products.' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Enquire on WhatsApp
                </a>

                <a
                  href={getPhoneCallLink()}
                  className="px-5 py-4 rounded-xl bg-white hover:bg-[#F1F4F1] border border-[#CBD5E1] text-[#24312F] font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#145B58]" />
                  Call Now
                </a>
              </div>

              {/* Quick Trust Meta Row */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-[#64748B]">
                <span className="flex items-center gap-1.5 font-medium text-[#24312F]">
                  <Star className="w-3.5 h-3.5 text-[#C6A66B] fill-current" />
                  5.0 / 5.0 Rating (437 Reviews)
                </span>
                <span>•</span>
                <span>Times Trade Center, Surat</span>
                <span>•</span>
                <span>Purchase &amp; Rental Options</span>
              </div>

            </div>

            {/* Right Visual Column: Genuine Product Photography in Comfortable Lifestyle Setting */}
            <div className="lg:col-span-5">
              <div 
                onClick={() => onPhotoClick(GALLERY_PHOTOS[7])}
                className="relative rounded-3xl overflow-hidden border border-[#D5DCD6] shadow-2xl bg-white group cursor-pointer"
              >
                <img
                  src="./images/hero-therapy-lifestyle.svg"
                  alt="Maa Health Care Heating Therapy Mattress in lifestyle setting"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-103"
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

      {/* SECTION 2: BUSINESS HIGHLIGHTS & STAT CARDS */}
      <StatsHighlights />

      {/* SECTION 3: PRODUCT SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#145B58]/10 text-[#145B58]">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A66B]" />
              <span>Verified Heating Mattress Range</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#24312F] font-['Manrope']">
              Featured Heating Therapy Mattresses &amp; Mats
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
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

      {/* SECTION 4: PRODUCT DEMONSTRATION VIDEOS */}
      <VideoSection />

      {/* SECTION 5: WHY CHOOSE MAA HEALTH CARE? */}
      <section className="bg-white py-16 border-y border-[#E8ECE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Authentic Product Photograph */}
            <div className="lg:col-span-5">
              <div 
                onClick={() => onPhotoClick(GALLERY_PHOTOS[1])}
                className="relative rounded-3xl overflow-hidden border border-[#D5DCD6] shadow-xl bg-[#F8F9F6] p-6 text-center cursor-pointer group"
              >
                <img
                  src="./images/product-jade-1092.svg"
                  alt="Model 1092 Jade Stone Heating Mattress"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="mt-4 p-3 bg-white rounded-2xl border border-[#E8ECE7] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#145B58]">Model 1092 Jade Stone Mattress</span>
                  <span className="text-[#C6A66B] font-semibold">Click to Inspect</span>
                </div>
              </div>
            </div>

            {/* Right: Verified Feature Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8BAF9B]">
                  Customer Experience &amp; Service
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#24312F] font-['Manrope'] mt-1">
                  Why Choose Maa Health Care?
                </h2>
                <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                  A trusted presence in Surat dedicated to providing transparent product specifications, genuine heating mattress models, and direct communication.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#F8F9F6] border border-[#E8ECE7] space-y-1.5">
                  <h4 className="font-bold text-sm text-[#145B58] font-['Manrope']">
                    Multiple Heating Mattress Options
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Choose between Ceratonic ceramic discs, 1092 natural jade stone mattresses, and portable therapy mats.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F8F9F6] border border-[#E8ECE7] space-y-1.5">
                  <h4 className="font-bold text-sm text-[#145B58] font-['Manrope']">
                    Product Information &amp; Guidance
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Clear guidance on voltage, Far Infrared ceramic discs, temperature controls, and dimensions.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F8F9F6] border border-[#E8ECE7] space-y-1.5">
                  <h4 className="font-bold text-sm text-[#145B58] font-['Manrope']">
                    Convenient Enquiry Process
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Direct one-click WhatsApp chat and phone lines without complicated forms or automated chatbot loops.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F8F9F6] border border-[#E8ECE7] space-y-1.5">
                  <h4 className="font-bold text-sm text-[#145B58] font-['Manrope']">
                    Purchase &amp; Rental Enquiries
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Flexible options for long-term home purchase as well as postpartum thermal care rentals in Surat.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#145B58]/5 border border-[#145B58]/20 flex items-center justify-between text-xs text-[#145B58]">
                <span>Contact Person: <strong>{BUSINESS_INFO.contactPerson}</strong> • Times Trade Center, Surat</span>
                <a href={getPhoneCallLink()} className="font-bold underline hover:text-[#0E4340]">
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: PRODUCT USAGE & CARE (HOW TO USE) */}
      <HowToUseSection />

      {/* SECTION 7: TRADITIONAL METHOD VS MODERN HEATING PRODUCT */}
      <ComparisonSection />

      {/* SECTION 8: CUSTOMER REVIEWS & EXPERIENCES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#C6A66B]/15 text-[#92400E]">
            <Star className="w-3.5 h-3.5 fill-[#C6A66B] text-[#C6A66B]" />
            <span>Public Listing Reputation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#24312F] font-['Manrope']">
            Customer Reviews &amp; Public Listing Experiences
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B]">
            Maa Health Care maintains a 5.0 out of 5.0 rating from 437 verified customer reviews on its public supplier listing.
          </p>
        </div>

        {/* Highlight Card */}
        <div className="bg-white rounded-3xl p-8 border border-[#E8ECE7] shadow-sm max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-1 text-[#C6A66B]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>

          <p className="text-2xl sm:text-3xl font-extrabold text-[#24312F] font-['Manrope']">
            5.0 / 5.0 Overall Rating
          </p>

          <p className="text-xs text-[#64748B]">
            Based on <strong>437 verified reviews</strong> on public Indian business directory listings for heating mattresses and wellness equipment supply.
          </p>

          <div className="p-4 rounded-2xl bg-[#F8F9F6] border border-[#E8ECE7] text-xs text-[#475569] max-w-lg mx-auto italic flex items-center justify-center gap-2">
            <Quote className="w-4 h-4 text-[#8BAF9B] shrink-0" />
            <span>"Known for courteous communication, transparent product specifications, and reliable temperature-controlled heating mattresses in Surat."</span>
          </div>

          <div className="pt-2">
            <a
              href={BUSINESS_INFO.listingRating.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#145B58] hover:underline"
            >
              <span>View Customer Reviews on Verified Listing</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 9: OUR SERVICES */}
      <ServicesSection onNavigate={onNavigate} />

      {/* SECTION 10: GOOGLE MAPS LISTING PHOTO GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PhotoGallerySection
          onPhotoClick={onPhotoClick}
          title="Google Maps Listing &amp; Business Photographs"
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

      {/* SECTION 11: FREQUENTLY ASKED QUESTIONS */}
      <FAQSection />

      {/* SECTION 12: STRONG ENQUIRY CTA */}
      <EnquiryCTA />

      {/* SECTION 13: CONTACT & BOOKING FORM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-3xl border border-[#E8ECE7] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Office & Directions */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8BAF9B]">
                  Direct Contact &amp; Visits
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#24312F] font-['Manrope'] mt-1">
                  Surat Office Information
                </h2>
                <p className="text-xs text-[#64748B] mt-1">
                  Visit us or call directly to inspect heating mattress models.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#334155]">
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

              {/* Office Image Box with Click to Enlarge */}
              <div 
                onClick={() => onPhotoClick(GALLERY_PHOTOS[2])}
                className="rounded-2xl overflow-hidden border border-[#D5DCD6] shadow-sm bg-[#F4F5F1] cursor-pointer group relative"
              >
                <img
                  src="./images/surat-office.svg"
                  alt="Times Trade Center Surat Office"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-3 bg-white text-center text-xs text-[#64748B] flex items-center justify-between px-4">
                  <span>Times Trade Center, Punagam–Magob, Surat</span>
                  <span className="text-[#145B58] font-bold text-[11px]">Click to Expand</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
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

            {/* Right Column: Contact & Booking Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
