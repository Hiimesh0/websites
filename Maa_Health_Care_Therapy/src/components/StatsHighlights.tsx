import React from 'react';
import { Star, ShieldCheck, MapPin, RotateCcw } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const StatsHighlights: React.FC = () => {
  const stats = [
    {
      icon: Star,
      value: "5.0 / 5.0",
      label: "Public Business Rating",
      subtext: `${BUSINESS_INFO.listingRating.reviewCount} Verified Reviews on Supplier Listing`,
      accent: "text-[#C6A66B]",
      bg: "bg-[#C6A66B]/10"
    },
    {
      icon: MapPin,
      value: "Surat, Gujarat",
      label: "Centrally Located Office",
      subtext: "Office 415, 4th Floor, Times Trade Center",
      accent: "text-[#145B58]",
      bg: "bg-[#145B58]/10"
    },
    {
      icon: ShieldCheck,
      value: "1092 Jade Stones",
      label: "Flagship Stone Model",
      subtext: "Natural Mineral Heat & Far Infrared Options",
      accent: "text-[#8BAF9B]",
      bg: "bg-[#8BAF9B]/15"
    },
    {
      icon: RotateCcw,
      value: "Purchase & Rental",
      label: "Flexible Enquiries",
      subtext: "Postpartum care & home thermal wellness",
      accent: "text-[#145B58]",
      bg: "bg-[#145B58]/10"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-[#E8ECE7] shadow-xs hover:shadow-md hover:border-[#145B58]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${item.accent}`} />
                </span>
                <span className="text-[11px] font-bold text-[#8BAF9B] tracking-wider uppercase">
                  Verified
                </span>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#24312F] font-['Manrope'] tracking-tight">
                  {item.value}
                </div>
                <div className="text-sm font-bold text-[#145B58] mt-1 font-['Manrope']">
                  {item.label}
                </div>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                  {item.subtext}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
