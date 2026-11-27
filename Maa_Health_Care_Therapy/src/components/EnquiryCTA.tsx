import React from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { buildWhatsAppLink, getPhoneCallLink } from '../utils/whatsapp';

export const EnquiryCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#145B58] via-[#104A47] to-[#0D3B39] text-white relative overflow-hidden">
      {/* Decorative subtle ambient rings */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#8BAF9B]/10 blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#C6A66B]/10 blur-2xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#C6A66B] text-xs font-semibold tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          Direct Surat Supplier Support
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Manrope'] tracking-tight max-w-2xl mx-auto leading-tight">
          Looking for More Information About Our Heating Products?
        </h2>

        <p className="text-sm sm:text-base text-[#D1DCD6] max-w-xl mx-auto leading-relaxed">
          Our team can help you understand the available product options, technical specifications, and answer your purchase or rental enquiries.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
          <a
            href={buildWhatsAppLink({ message: 'Hello Maa Health Care, I would like to inquire about your heating therapy products.' })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            WhatsApp Now
          </a>

          <a
            href={getPhoneCallLink()}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all"
          >
            <Phone className="w-4 h-4 text-[#C6A66B]" />
            Call Now: {BUSINESS_INFO.phone}
          </a>
        </div>

        <p className="text-xs text-[#9BB4AA] pt-2">
          Office 415, Times Trade Center, BTRS Road, Punagam–Magob, Surat, Gujarat 395011
        </p>
      </div>
    </section>
  );
};
