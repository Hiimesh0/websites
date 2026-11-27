import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductDetailModal } from './components/ProductDetailModal';
import { PhotoGalleryLightbox } from './components/PhotoGalleryLightbox';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ContactPage } from './pages/ContactPage';
import { type Product, PRODUCTS } from './data/businessData';
import { GALLERY_PHOTOS, type GalleryPhoto } from './data/galleryData';
import { useNavigation, type PageId } from './hooks/useNavigation';

export function App() {
  const { currentPage, navigateTo } = useNavigation('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedGalleryPhoto, setSelectedGalleryPhoto] = useState<GalleryPhoto | null>(null);

  const handleSelectProductById = (productId: string) => {
    const prod = PRODUCTS.find((p) => p.id === productId);
    if (prod) {
      setSelectedProduct(prod);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9F6] text-[#24312F]">
      {/* Sticky Header */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={(p) => navigateTo(p as PageId)} 
      />

      {/* Main Dynamic View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={(p) => navigateTo(p as PageId)} 
            onViewProduct={(product) => setSelectedProduct(product)} 
            onPhotoClick={(photo) => setSelectedGalleryPhoto(photo)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage 
            onNavigate={(p) => navigateTo(p as PageId)} 
            onPhotoClick={(photo) => setSelectedGalleryPhoto(photo)}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage 
            onViewProduct={(product) => setSelectedProduct(product)} 
            onPhotoClick={(photo) => setSelectedGalleryPhoto(photo)}
          />
        )}

        {currentPage === 'how-it-works' && (
          <HowItWorksPage 
            onNavigate={(p) => navigateTo(p as PageId)} 
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage 
            onPhotoClick={(photo) => setSelectedGalleryPhoto(photo)}
          />
        )}
      </main>

      {/* Global Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Global Photo Gallery Lightbox */}
      <PhotoGalleryLightbox
        photo={selectedGalleryPhoto}
        photos={GALLERY_PHOTOS}
        onClose={() => setSelectedGalleryPhoto(null)}
        onNavigate={(photo) => setSelectedGalleryPhoto(photo)}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer 
        onNavigate={(p) => navigateTo(p as PageId)} 
        onSelectProduct={handleSelectProductById}
      />
    </div>
  );
}

export default App;
