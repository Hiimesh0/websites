import React from 'react';
import { Sliders, Zap, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const HowToUseSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Surface Placement",
      description: "Place your Maa Health Care heating mattress or therapy mat flat on your bed, couch, or clean floor mat. Ensure the mat is completely unfolded without creases.",
      tip: "Lay flat on a stable surface"
    },
    {
      step: "02",
      title: "Connect Digital Controller",
      description: "Plug the heavy-duty controller cable securely into the mattress receptacle, then insert the AC plug into a standard household electric socket (220V).",
      tip: "Secure plug connection"
    },
    {
      step: "03",
      title: "Adjust Temperature Settings",
      description: "Power on the controller and adjust the temperature setting to your comfort preference. Allow 10–15 minutes for the ceramic or jade stones to absorb and radiate soothing warmth.",
      tip: "Adjust to comfortable warmth level"
    },
    {
      step: "04",
      title: "Thermal Comfort & Relaxation",
      description: "Lie comfortably on the mattress. A lightweight cotton sheet or blanket may be placed over the stones for gentle diffusion during your relaxation routine.",
      tip: "Typically used for 30–60 min sessions"
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-[#E8ECE7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#145B58]/10 text-[#145B58]">
            <Sliders className="w-3.5 h-3.5 text-[#C6A66B]" />
            <span>Usage &amp; Care Guidance</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#24312F] font-['Manrope']">
            How to Use Your Heating Therapy Mattress
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Designed for intuitive, hassle-free everyday operation with digital temperature controls and safe electrical components.
          </p>
        </div>

        {/* 4-Step Walkthrough Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8F9F6] rounded-3xl p-6 sm:p-7 border border-[#E8ECE7] flex flex-col justify-between hover:border-[#145B58]/30 transition-all shadow-xs group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#C6A66B] font-['Manrope'] group-hover:text-[#145B58] transition-colors">
                    {item.step}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white border border-[#E8ECE7] flex items-center justify-center text-[#145B58] text-xs font-bold">
                    <Zap className="w-3.5 h-3.5" />
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#24312F] font-['Manrope'] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-[#64748B] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8ECE7] mt-5 flex items-center gap-1.5 text-[11px] font-semibold text-[#145B58]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8BAF9B]" />
                <span>{item.tip}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Care & Maintenance Tips Bar */}
        <div className="bg-[#F2F5F2] rounded-3xl p-6 sm:p-8 border border-[#D5DCD6] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-[#24312F] font-['Manrope'] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#145B58]" />
              Easy Cleaning
            </h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Wipe the stone surface gently with a slightly damp, soft cloth when disconnected and completely cooled. Do not submerge in water.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="font-bold text-sm text-[#24312F] font-['Manrope'] flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-[#145B58]" />
              Safe Storage
            </h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              When not in regular use, roll gently or store flat in a dry, shaded place away from sharp objects and extreme moisture.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="font-bold text-sm text-[#24312F] font-['Manrope'] flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-[#C6A66B]" />
              Usage Advisory
            </h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              {BUSINESS_INFO.disclaimer}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
