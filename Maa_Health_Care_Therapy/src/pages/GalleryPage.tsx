import React from 'react';
import { PhotoGallerySection } from '../components/PhotoGallerySection';
import { GALLERY_PHOTOS, type GalleryPhoto } from '../data/galleryData';

interface GalleryPageProps {
  onPhotoClick: (photo: GalleryPhoto) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onPhotoClick }) => {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="pt-12 pb-6 bg-gradient-to-b from-[#F2F5F2] to-[#F8F9F6] border-b border-[#E8ECE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#8BAF9B] mb-3">
            Business Photos
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#24312F] font-['Manrope']">
            Business <span className="text-[#145B58]">Gallery</span>
          </h1>
          <p className="mt-3 text-sm text-[#475569] max-w-xl mx-auto">
            Photographs associated with the Maa Health Care Therapy business listing in Surat.
            All photos are attributed to their respective sources.
          </p>
          <p className="mt-2 text-[11px] text-[#94A3B8] italic">
            Showing {GALLERY_PHOTOS.length} images — click any photo to expand.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PhotoGallerySection onPhotoClick={onPhotoClick} />
      </div>
    </div>
  );
};
