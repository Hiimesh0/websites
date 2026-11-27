import React from 'react';
import { CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/businessData';
import { buildWhatsAppLink } from '../utils/whatsapp';
import { FAQSection } from '../components/FAQSection';

interface HowItWorksPageProps {
  onNavigate?: (page: string) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = () => {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#145B58]/10 text-[#145B58]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C6A66B]" />
            <span>Customer Guide &amp; Enquiries</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#24312F] font-['Manrope'] tracking-tight">
            How It Works: Enquire, Purchase &amp; Rental
          </h1>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            A simple, customer-friendly guide explaining how you can enquire about our heating mattresses and therapy mats from our Surat office.
          </p>
        </div>
      </section>

      {/* Detailed 4 Steps Flow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#E8ECE7] shadow-xs hover:border-[#145B58] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-black text-[#C6A66B] font-['Manrope'] block mb-4">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold text-[#24312F] font-['Manrope'] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#F1F4F1] mt-6">
                <span className="text-xs font-bold text-[#145B58] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8BAF9B]" />
                  Transparent Process
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Purchase vs Rental Explanation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8ECE7] shadow-sm">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8BAF9B]">
                Enquiry Options
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#24312F] font-['Manrope']">
                Purchase vs. Rental Enquiries
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B]">
                We cater to both permanent wellness setups and temporary heat-therapy needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Purchase Card */}
              <div className="p-6 rounded-2xl bg-[#F8F9F6] border border-[#E8ECE7] space-y-3">
                <h3 className="text-lg font-bold text-[#145B58] font-['Manrope']">
                  Direct Purchase
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Ideal for households looking for long-term daily thermal therapy, winter warmth, or consistent stone-based comfort.
                </p>
                <ul className="text-xs text-[#334155] space-y-1.5 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8BAF9B]" />
                    Queen size Ceratonic &amp; Model 1092 Jade stone models
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8BAF9B]" />
                    Complete with temperature remote controller
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8BAF9B]" />
                    Pricing confirmed upon enquiry
                  </li>
                </ul>
              </div>

              {/* Rental Card */}
              <div className="p-6 rounded-2xl bg-[#F8F9F6] border border-[#E8ECE7] space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#145B58] font-['Manrope']">
                    Rental Enquiries
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#C6A66B]/20 text-[#24312F]">
                    Surat &amp; Environs
                  </span>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Frequently inquired for postpartum thermal recovery comfort and short-term wellness therapy requirements.
                </p>
                <ul className="text-xs text-[#334155] space-y-1.5 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8BAF9B]" />
                    Flexible rental periods (weekly/monthly subject to stock)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8BAF9B]" />
                    Sanitized and inspected prior to dispatch
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8BAF9B]" />
                    Availability to be confirmed with our team
                  </li>
                </ul>
              </div>

            </div>

            {/* Direct Enquiry Prompt */}
            <div className="p-6 rounded-2xl bg-[#145B58] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-base font-['Manrope']">Ready to discuss your requirement?</h4>
                <p className="text-xs text-[#D1DCD6]">Contact our team on WhatsApp for prompt responses.</p>
              </div>
              <a
                href={buildWhatsAppLink({ message: 'Hello, I would like to discuss purchase and rental options for your heating mattresses.' })}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold flex items-center gap-2 shrink-0 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Message WhatsApp
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQSection />

    </div>
  );
};
