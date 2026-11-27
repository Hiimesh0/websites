import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductDetailModal } from './components/ProductDetailModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ContactPage } from './pages/ContactPage';
import { type Product, PRODUCTS } from './data/businessData';
import { useNavigation, type PageId } from './hooks/useNavigation';

export function App() {
  const { currentPage, navigateTo } = useNavigation('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
          />
        )}

        {currentPage === 'about' && (
          <AboutPage 
            onNavigate={(p) => navigateTo(p as PageId)} 
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage 
            onViewProduct={(product) => setSelectedProduct(product)} 
          />
        )}

        {currentPage === 'how-it-works' && (
          <HowItWorksPage 
            onNavigate={(p) => navigateTo(p as PageId)} 
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
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
