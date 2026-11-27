import React, { useState } from 'react';
import { Camera, MapPin, ExternalLink, Maximize2, ShieldCheck, Sparkles } from 'lucide-react';
import { GALLERY_PHOTOS, GOOGLE_MAPS_LISTING, type GalleryPhoto } from '../data/galleryData';

interface PhotoGallerySectionProps {
  onPhotoClick: (photo: GalleryPhoto) => void;
  title?: string;
  subtitle?: string;
  limit?: number;
  showFilters?: boolean;
}

export const PhotoGallerySection: React.FC<PhotoGallerySectionProps> = ({
  onPhotoClick,
  title = "Google Maps Listing & Business Photo Gallery",
  subtitle = "Authentic photographs and demonstrations associated with Maa Health Care Therapy's verified business location at Times Trade Center, Surat.",
  limit,
  showFilters = true
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Products', 'Office & Exterior', 'Demonstrations'];

  const filteredPhotos = GALLERY_PHOTOS.filter(photo => {
    if (activeCategory === 'All') return true;
    return photo.category === activeCategory;
  });

  const displayedPhotos = limit ? filteredPhotos.slice(0, limit) : filteredPhotos;

  return (
    <section className="space-y-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#145B58]/10 text-[#145B58]">
            <Camera className="w-3.5 h-3.5 text-[#C6A66B]" />
            <span>Verified Google Maps Listing Photographs</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#24312F] font-['Manrope']">
            {title}
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Google Maps External Link Button */}
        <a
          href={GOOGLE_MAPS_LISTING.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#145B58]/30 hover:border-[#145B58] bg-white text-[#145B58] text-xs font-semibold shadow-xs hover:bg-[#145B58]/5 transition-all self-start md:self-auto shrink-0"
        >
          <MapPin className="w-3.5 h-3.5 text-[#C6A66B]" />
          View Listing on Google Maps
          <ExternalLink className="w-3 h-3 text-[#64748B]" />
        </a>
      </div>

      {/* Category Filter Tabs */}
      {showFilters && (
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#145B58] text-white shadow-xs'
                  : 'bg-white text-[#475569] hover:bg-[#F1F4F1] border border-[#E8ECE7]'
              }`}
            >
              {cat === 'All' ? 'All Photographs' : cat}
            </button>
          ))}
        </div>
      )}

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => onPhotoClick(photo)}
            className="group relative bg-white rounded-2xl border border-[#E8ECE7] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
          >
            {/* Image Preview Box */}
            <div className="relative bg-[#F4F5F1] p-4 flex items-center justify-center overflow-hidden h-52 border-b border-[#E8ECE7]">
              <img
                src={photo.src}
                alt={photo.alt}
                className="max-h-44 w-auto object-contain transition-transform duration-500 group-hover:scale-108"
                loading="lazy"
              />

              {/* Category Pill */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#145B58] text-white shadow-xs">
                  {photo.category}
                </span>
              </div>

              {/* Hover Overlay Icon */}
              <div className="absolute inset-0 bg-[#145B58]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-xs">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 text-xs font-semibold text-white">
                  <Maximize2 className="w-3.5 h-3.5" />
                  Click to View Full Size
                </div>
              </div>
            </div>

            {/* Photo Card Details */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
              <div>
                <h3 className="font-bold text-sm text-[#24312F] font-['Manrope'] group-hover:text-[#145B58] transition-colors line-clamp-1">
                  {photo.title}
                </h3>
                <p className="text-xs text-[#64748B] line-clamp-2 mt-1 leading-relaxed">
                  {photo.caption}
                </p>
              </div>

              <div className="pt-2 border-t border-[#F1F4F1] flex items-center justify-between text-[11px] text-[#8BAF9B]">
                <span className="flex items-center gap-1 text-[#145B58] font-medium">
                  <ShieldCheck className="w-3 h-3 text-[#C6A66B]" />
                  Verified Listing
                </span>
                <span className="text-[#94A3B8] font-medium flex items-center gap-0.5 group-hover:text-[#145B58] transition-colors">
                  Inspect &rarr;
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Attribution & Legal Compliance Note */}
      <div className="p-4 rounded-2xl bg-[#F8F9F6] border border-[#E8ECE7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#64748B]">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#C6A66B] shrink-0" />
          <span>
            Photographs displayed are attributed to the official <strong>Maa Health Care Therapy</strong> business presence in Surat.
          </span>
        </div>
        <a
          href={GOOGLE_MAPS_LISTING.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#145B58] font-semibold hover:underline shrink-0 flex items-center gap-1"
        >
          Verify on Google Maps
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

    </section>
  );
};
