import React from 'react';
import { Layers, Sparkles, Building2, RotateCcw, Video, Sliders, ArrowRight } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface ServicesSectionProps {
  onNavigate: (page: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const services = [
    {
      icon: Layers,
      title: "Ceratonic Heating Mattresses",
      description: "Supply of premium Queen-size Ceratonic mattresses utilizing Far Infrared ceramic stone arrays for soothing full-body thermal relaxation.",
      tag: "Flagship Product",
      enquiryType: "Ceratonic Mattress"
    },
    {
      icon: Sparkles,
      title: "Jade Stone Heating Mattresses",
      description: "Distribution of Model 1092 natural jade stone mattresses with adjustable temperature thermostats for radiant mineral warmth.",
      tag: "Natural Mineral",
      enquiryType: "Model 1092 Jade Mattress"
    },
    {
      icon: RotateCcw,
      title: "Therapy Mat Rental (Postpartum & Seasonal)",
      description: "Convenient rental options for flexible full-body heating mats in Surat, widely inquired for new mother postpartum thermal comfort and recovery.",
      tag: "Rental Service",
      enquiryType: "Postpartum Therapy Mat Rental"
    },
    {
      icon: Video,
      title: "Product Demonstrations",
      description: "In-person physical product reviews at our 4th-floor Times Trade Center office in Surat, allowing customers to test operation and warmth.",
      tag: "Surat Office",
      enquiryType: "In-Person Demo"
    },
    {
      icon: Sliders,
      title: "Product Usage & Temperature Guidance",
      description: "Personalized walkthroughs on digital thermostat settings, session durations, proper surface positioning, and safe maintenance.",
      tag: "Customer Care",
      enquiryType: "Product Guidance"
    },
    {
      icon: Building2,
      title: "Healthcare & Wellness Supply",
      description: "Direct supplier communication for households, clinics, and wellness professionals seeking certified quality thermal therapy mattresses.",
      tag: "Direct Supplier",
      enquiryType: "Commercial / Home Supply"
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-[#E8ECE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#145B58]/10 text-[#145B58]">
              <Building2 className="w-3.5 h-3.5 text-[#C6A66B]" />
              <span>Comprehensive Offerings</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#24312F] font-['Manrope']">
              Our Products &amp; Enquiry Services
            </h2>

            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Explore the full spectrum of heating therapy mattresses, rental arrangements, and customer guidance provided by Maa Health Care in Surat.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#145B58] text-white text-xs font-semibold hover:bg-[#0E4340] transition-colors self-start md:self-auto shrink-0 shadow-xs"
          >
            <span>Discuss Your Requirement</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Services 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8F9F6] rounded-3xl p-7 border border-[#E8ECE7] shadow-xs hover:shadow-lg hover:border-[#145B58]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-12 h-12 rounded-2xl bg-[#145B58]/10 group-hover:bg-[#145B58] text-[#145B58] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white border border-[#E8ECE7] text-[#145B58]">
                      {srv.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#24312F] font-['Manrope'] mb-2 group-hover:text-[#145B58] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E8ECE7] mt-6">
                  <a
                    href={buildWhatsAppLink({
                      productName: srv.title,
                      enquiryType: srv.tag,
                      message: `Hello Maa Health Care, I am inquiring about your service: ${srv.title}.`
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#145B58] hover:text-[#0E4340] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Enquire on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C6A66B]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
