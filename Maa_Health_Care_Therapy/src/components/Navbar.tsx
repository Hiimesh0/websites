import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles } from 'lucide-react';
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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8ECE7] shadow-xs transition-all">
      {/* Top Coolma-Style Announcement Micro-Bar */}
      <div className="bg-[#145B58] text-white text-[11px] sm:text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A66B]" />
              Surat's Trusted Heating Therapy Products • Purchase &amp; Rental Enquiries
            </span>
            <span className="hidden md:inline text-[#8BAF9B]">|</span>
            <span className="hidden md:inline text-[#D1DCD6]">
              Office 415, Times Trade Center • GSTIN: {BUSINESS_INFO.gstin}
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <a 
              href={getPhoneCallLink()} 
              className="hover:text-[#C6A66B] transition-colors flex items-center gap-1.5 font-semibold"
            >
              <Phone className="w-3 h-3 text-[#C6A66B]" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name Inspired by Coolma Simplicity */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-hidden"
          >
            {/* Elegant Emblem */}
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#145B58] to-[#0E4340] flex items-center justify-center shadow-sm text-white group-hover:shadow-md transition-shadow">
              <svg className="w-6 h-6 text-[#C6A66B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12" />
                <path d="M12 6C9 6 7 8.5 7 11.5C7 14.5 9.5 17 12 17C14.5 17 17 14.5 17 11.5" stroke="#8BAF9B" />
                <circle cx="12" cy="11.5" r="2.5" fill="#C6A66B" stroke="none" />
              </svg>
            </div>
            
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#145B58] font-['Manrope']">
                  Maa
                </span>
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#24312F] font-['Manrope']">
                  Health Care
                </span>
              </div>
              <span className="block text-[10px] font-semibold text-[#8BAF9B] tracking-widest uppercase">
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
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-[#145B58] bg-[#145B58]/10 font-bold'
                      : 'text-[#475569] hover:text-[#145B58] hover:bg-[#F8F9F6]'
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
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-[#145B58] border border-[#145B58]/30 hover:border-[#145B58] hover:bg-[#145B58]/5 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#145B58]" />
              Call Now
            </a>
            <a
              href={buildWhatsAppLink({ message: 'Hello Maa Health Care, I would like to inquire about your heating therapy products.' })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20BD5A] transition-all shadow-sm hover:shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              WhatsApp Enquiry
            </a>
          </div>

          {/* Mobile Header Icons */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={buildWhatsAppLink({ message: 'Hello Maa Health Care, I would like to inquire about your heating therapy products.' })}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Enquiry"
              className="p-2.5 rounded-xl bg-[#25D366] text-white shadow-xs"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#24312F] hover:bg-[#F1F4F1] focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8ECE7] bg-white px-4 pt-4 pb-6 space-y-2.5 shadow-xl animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                currentPage === item.id
                  ? 'bg-[#145B58] text-white'
                  : 'text-[#24312F] hover:bg-[#F8F9F6]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-[#E8ECE7] grid grid-cols-2 gap-2.5">
            <a
              href={getPhoneCallLink()}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#145B58] text-[#145B58] font-bold text-xs"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
            <a
              href={buildWhatsAppLink({ message: 'Hello Maa Health Care, I would like to inquire about your heating therapy products.' })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-xs"
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
