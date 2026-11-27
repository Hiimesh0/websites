import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import type { GalleryPhoto } from '../data/galleryData';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface PhotoGalleryLightboxProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  onClose: () => void;
  onNavigate: (photo: GalleryPhoto) => void;
}

export const PhotoGalleryLightbox: React.FC<PhotoGalleryLightboxProps> = ({
  photo,
  photos,
  onClose,
  onNavigate
}) => {
  if (!photo) return null;

  const currentIndex = photos.findIndex(p => p.id === photo.id);
  const prevPhoto = currentIndex > 0 ? photos[currentIndex - 1] : photos[photos.length - 1];
  const nextPhoto = currentIndex < photos.length - 1 ? photos[currentIndex + 1] : photos[0];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(prevPhoto);
      if (e.key === 'ArrowRight') onNavigate(nextPhoto);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, photos, onClose, onNavigate, prevPhoto, nextPhoto]);

  const whatsappUrl = buildWhatsAppLink({
    productName: photo.title,
    enquiryType: 'Gallery Photo Enquiry',
    message: `Hello Maa Health Care, I am inquiring about the ${photo.title} seen on your business listing gallery.`
  });

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 my-6 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F8F9F6] border-b border-[#E8ECE7]">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#145B58] text-white">
              {photo.category}
            </span>
            <span className="text-xs text-[#64748B] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C6A66B]" />
              Verified Listing Image ({currentIndex + 1} of {photos.length})
            </span>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#64748B] hover:text-[#24312F] hover:bg-[#E8ECE7] transition-colors"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Image Display Area with Prev/Next Controls */}
        <div className="relative bg-[#0F172A] min-h-[340px] sm:min-h-[420px] flex items-center justify-center p-4 sm:p-8">
          <img
            src={photo.src}
            alt={photo.alt}
            className="max-h-[55vh] w-auto max-w-full object-contain rounded-xl shadow-lg transition-transform duration-300"
          />

          {/* Navigation Controls */}
          <button
            onClick={() => onNavigate(prevPhoto)}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => onNavigate(nextPhoto)}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-xs transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Image Information & Attribution */}
        <div className="p-6 bg-white space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F1F4F1] pb-3">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#24312F] font-['Manrope']">
                {photo.title}
              </h3>
              {photo.specsPreview && (
                <span className="text-xs font-semibold text-[#145B58]">
                  {photo.specsPreview}
                </span>
              )}
            </div>

            {/* Google Maps link badge */}
            <a
              href={photo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8F9F6] border border-[#E8ECE7] hover:border-[#145B58] text-xs font-semibold text-[#145B58] transition-colors self-start sm:self-auto"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C6A66B]" />
              View on Google Maps Listing
              <ExternalLink className="w-3 h-3 text-[#64748B]" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            {photo.caption}
          </p>

          {/* Author Attribution Policy Note */}
          <div className="flex items-center gap-2 text-[11px] text-[#64748B] bg-[#F8F9F6] p-2.5 rounded-xl border border-[#E8ECE7]">
            <span className="font-semibold text-[#24312F]">Attribution:</span>
            <span>{photo.attribution}</span>
          </div>

          {/* Footer CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <span className="text-xs text-[#64748B]">
              Times Trade Center, Punagam–Magob, Surat
            </span>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Ask About This on WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
