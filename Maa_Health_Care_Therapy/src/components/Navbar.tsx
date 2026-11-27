import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { buildWhatsAppLink, getPhoneCallLink } from '../utils/whatsapp';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Our Products' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E8ECE7] shadow-xs transition-all">
      {/* Top micro-bar for verified trust info */}
      <div className="bg-[#145B58] text-[#FFFFFF] text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C6A66B]" />
              Surat-Based Heating Mattress &amp; Therapy Mat Supplier
            </span>
            <span className="text-[#8BAF9B]">|</span>
            <span>GSTIN: {BUSINESS_INFO.gstin}</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={getPhoneCallLink()} 
              className="hover:text-[#C6A66B] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-hidden"
          >
            {/* Elegant original wellness logo mark */}
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#145B58] to-[#0D403E] flex items-center justify-center shadow-sm text-white group-hover:shadow-md transition-shadow">
              <svg className="w-6 h-6 text-[#C6A66B]" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.9" />
                <path d="M12 2C12 2 15 7 15 10C15 11.66 13.66 13 12 13C10.34 13 9 11.66 9 10C9 7 12 2 12 2Z" fill="#FFFFFF" />
                <path d="M5 12C5 12 10 11 12 12C11 14 8 16 6 15C5 14.5 4.5 13.5 5 12Z" fill="#8BAF9B" />
                <path d="M19 12C19 12 14 11 12 12C13 14 16 16 18 15C19 14.5 19.5 13.5 19 12Z" fill="#8BAF9B" />
              </svg>
            </div>
            <div>
              <span className="block text-xl font-bold tracking-tight text-[#145B58] font-['Manrope'] leading-tight">
                Maa Health Care
              </span>
              <span className="block text-xs font-medium text-[#64748B] tracking-wider uppercase">
                Therapy Products • Surat
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-[#145B58] bg-[#145B58]/8 font-semibold'
                      : 'text-[#334155] hover:text-[#145B58] hover:bg-[#F1F4F1]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getPhoneCallLink()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-[#145B58] border border-[#145B58]/30 hover:bg-[#145B58]/5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#145B58]" />
              Call Now
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BD5A] transition-all shadow-xs hover:shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              WhatsApp Enquiry
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Enquiry"
              className="p-2 rounded-lg bg-[#25D366] text-white shadow-xs"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#24312F] hover:bg-[#F1F4F1] focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8ECE7] bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                currentPage === item.id
                  ? 'bg-[#145B58] text-white font-semibold'
                  : 'text-[#24312F] hover:bg-[#F8F9F6]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-[#E8ECE7] grid grid-cols-2 gap-2">
            <a
              href={getPhoneCallLink()}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#145B58] text-[#145B58] font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] text-white font-semibold text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
