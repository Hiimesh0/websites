import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/businessData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-[#F8F9F6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#145B58]/10 text-[#145B58]">
            <HelpCircle className="w-3.5 h-3.5" />
            Clear &amp; Verified Information
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#24312F] font-['Manrope']">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#64748B] max-w-lg mx-auto">
            Everything you need to know about our heating mattresses, therapy mats, and enquiry process.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8ECE7] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm sm:text-base text-[#24312F] font-['Manrope']">
                    {faq.question}
                  </span>
                  <span className={`p-1 rounded-full shrink-0 transition-transform ${isOpen ? 'text-[#145B58] bg-[#145B58]/10' : 'text-[#94A3B8]'}`}>
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-[#F1F4F1] animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Note on unconfirmed details */}
        <div className="mt-8 text-center text-xs text-[#94A3B8]">
          Have a question not listed here? Contact our team at <strong className="text-[#145B58]">+91 95124 28000</strong> for personal confirmation.
        </div>

      </div>
    </section>
  );
};
