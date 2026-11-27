import React from 'react';
import { Check, X, ShieldCheck, Flame, Zap } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const ComparisonSection: React.FC = () => {
  const comparisonItems = [
    {
      feature: "Temperature Control",
      traditional: "Inconsistent; drops rapidly as water or cloth cools down",
      modern: "Digital thermostat maintains consistent, steady warmth at your selected temperature"
    },
    {
      feature: "Full-Body Coverage",
      traditional: "Limited to small targeted spots (e.g. single hot water pouch or heated compress)",
      modern: "Full-body Queen mattress or full-length therapy mat warms spine and legs uniformly"
    },
    {
      feature: "Thermal Technology",
      traditional: "Surface moisture or conductive heat only without deep mineral retention",
      modern: "Ceratonic Far-Infrared and 1092 natural Jade stone discs radiate gentle, enduring warmth"
    },
    {
      feature: "Safety & Handling",
      traditional: "Risk of hot water spills, boiling water handling, or scalding cloth bricks",
      modern: "Electric thermal protection circuit, insulated heating grid, and no boiling water required"
    },
    {
      feature: "Convenience & Effort",
      traditional: "Requires repeated boiling, refilling, and constant manual reheating",
      modern: "Plug in, set temperature on digital remote, and relax without interruptions"
    },
    {
      feature: "Postpartum & Elderly Care",
      traditional: "Cumbersome for resting mothers or seniors needing prolonged gentle warmth",
      modern: "Comfortable continuous support tailored for postpartum recovery and senior relaxation"
    }
  ];

  return (
    <section className="py-16 bg-[#F8F9F6] border-b border-[#E8ECE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#145B58]/10 text-[#145B58]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C6A66B]" />
            <span>Modern Heating Technology</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#24312F] font-['Manrope']">
            Explore a More Convenient Heating Therapy Experience
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            See how Maa Health Care's temperature-controlled heating mattresses and mats compare to traditional manual heating methods.
          </p>
        </div>

        {/* Comparison Table / Card Container */}
        <div className="bg-white rounded-3xl border border-[#E8ECE7] shadow-xl overflow-hidden">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#E8ECE7] bg-[#F8F9F6]">
            <div className="md:col-span-4 p-5 font-bold text-xs uppercase tracking-wider text-[#64748B]">
              Comparison Dimension
            </div>
            <div className="md:col-span-4 p-5 font-bold text-xs uppercase tracking-wider text-[#991B1B] bg-red-50/40 border-t md:border-t-0 md:border-l border-[#E8ECE7] flex items-center gap-2">
              <Flame className="w-4 h-4 text-red-500" />
              Traditional Heating Arrangements
            </div>
            <div className="md:col-span-4 p-5 font-bold text-xs uppercase tracking-wider text-[#145B58] bg-[#145B58]/10 border-t md:border-t-0 md:border-l border-[#E8ECE7] flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#C6A66B]" />
              Maa Health Care Modern Mattresses
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[#F1F4F1]">
            {comparisonItems.map((item, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 text-xs transition-colors hover:bg-[#F8F9F6]/50"
              >
                {/* Feature Name */}
                <div className="md:col-span-4 p-4 sm:p-5 font-bold text-[#24312F] font-['Manrope'] flex items-center">
                  {item.feature}
                </div>

                {/* Traditional Method */}
                <div className="md:col-span-4 p-4 sm:p-5 text-[#64748B] bg-red-50/15 md:border-l border-[#E8ECE7] flex items-start gap-2.5">
                  <span className="p-1 rounded-full bg-red-100 text-red-600 shrink-0 mt-0.5">
                    <X className="w-3 h-3" />
                  </span>
                  <span className="leading-relaxed">{item.traditional}</span>
                </div>

                {/* Modern Mattress */}
                <div className="md:col-span-4 p-4 sm:p-5 text-[#145B58] font-medium bg-[#145B58]/5 md:border-l border-[#E8ECE7] flex items-start gap-2.5">
                  <span className="p-1 rounded-full bg-[#145B58] text-white shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="leading-relaxed">{item.modern}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="p-6 bg-[#F8F9F6] border-t border-[#E8ECE7] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#64748B]">
              Ready to experience modern heating comfort at home or on rental in Surat?
            </div>
            <a
              href={buildWhatsAppLink({
                message: "Hello Maa Health Care, I would like to enquire about your modern heating therapy mattresses."
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold shadow-xs"
            >
              Enquire on WhatsApp (+91 95124 28000)
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
