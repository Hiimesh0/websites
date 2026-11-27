import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMsg, setQuickMsg] = useState('');

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppLink({
      message: quickMsg || 'Hello, I would like to enquire about your heating mattress products.'
    });
    window.open(url, '_blank');
    setIsOpen(false);
    setQuickMsg('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Chat Popup Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-90 bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-[#145B58] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#C6A66B]">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 className="font-semibold text-sm font-['Manrope']">Maa Health Care</h4>
                <p className="text-xs text-[#8BAF9B]">Product Enquiry on WhatsApp</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close chat window"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#F8F9F6] space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-[#E8ECE7] shadow-xs text-xs text-[#24312F] space-y-1">
              <p className="font-semibold text-[#145B58]">Namaste!</p>
              <p>Welcome to Maa Health Care. Ask us about our Ceratonic &amp; Jade Stone heating mattresses or rental options in Surat.</p>
              <p className="text-[10px] text-[#94A3B8] text-right pt-1">Surat • +91 95124 28000</p>
            </div>

            <form onSubmit={handleQuickSend} className="space-y-2 pt-1">
              <input
                type="text"
                value={quickMsg}
                onChange={(e) => setQuickMsg(e.target.value)}
                placeholder="Type your question here..."
                className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#CBD5E1] bg-white focus:outline-hidden focus:border-[#145B58] focus:ring-1 focus:ring-[#145B58]"
              />
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                Start Chat on WhatsApp
              </button>
            </form>
          </div>

          <div className="px-4 py-2 bg-white border-t border-[#E8ECE7] text-[10px] text-center text-[#64748B]">
            Typically responds during business hours • GSTIN: {BUSINESS_INFO.gstin}
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact Maa Health Care on WhatsApp"
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-hidden"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="text-sm font-semibold hidden sm:inline-block pr-1 font-['Manrope']">
          Enquire on WhatsApp
        </span>
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#145B58] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#145B58]"></span>
        </span>
      </button>
    </div>
  );
};
