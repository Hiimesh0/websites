import React from 'react';
import { Thermometer, Zap, Shield, Clock, Leaf, Activity } from 'lucide-react';

const educationPoints = [
  {
    icon: Thermometer,
    title: 'Gentle Far-Infrared Heat',
    description:
      'Far-infrared wavelengths penetrate beneath the skin surface to deliver a soothing, deep warmth that feels natural — not harsh or surface-level.',
  },
  {
    icon: Leaf,
    title: 'Natural Mineral Stones',
    description:
      'Jade and Ceratonic stones are known in traditional wellness for their ability to retain and evenly radiate heat across the body.',
  },
  {
    icon: Zap,
    title: 'Electric Precision Control',
    description:
      'Modern electric heating mattresses allow you to select your preferred warmth level precisely, unlike traditional methods involving open flame or hot coals.',
  },
  {
    icon: Shield,
    title: 'Smoke-Free & Controlled',
    description:
      'No smoke, no flame, no uneven hot spots — just consistent, controllable warmth from a certified electric heating element.',
  },
  {
    icon: Activity,
    title: 'Full-Body Coverage',
    description:
      'Queen-size and full-body-length formats ensure even warmth from shoulders to feet, supporting complete relaxation.',
  },
  {
    icon: Clock,
    title: 'Flexible Duration',
    description:
      'Use for short sessions or extended overnight comfort. Many customers choose rental for postpartum recovery periods before committing to purchase.',
  },
];

export const HeatingTherapyEducation: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FFF8F0] to-[#FEF9F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C6A66B] mb-3">
            Wellness Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#24312F] font-['Manrope'] leading-tight">
            What Is <span className="text-[#145B58]">Heating Therapy?</span>
          </h2>
          <p className="mt-3 text-base text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Understanding the principles behind far-infrared and mineral stone heat therapy for
            everyday wellness and postpartum comfort.
          </p>
        </div>

        {/* Two-column intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14 items-center">
          <div className="space-y-5 text-[#334155] leading-relaxed">
            <p>
              Heating therapy using far-infrared (FIR) technology and natural mineral stones has
              been a part of traditional wellness practices across East Asia for generations.
              Modern electric heating mattresses bring this concept into a safe, controllable,
              smoke-free format.
            </p>
            <p>
              Natural stones such as jade and Ceratonic discs absorb electric heat and re-radiate
              it in the far-infrared spectrum — wavelengths that the body absorbs more readily
              than surface-level convective heat. The result is a gradual, enveloping warmth.
            </p>
            <p>
              Many users choose heating mattress products for personal relaxation, general
              wellness routines during cooler months, and postpartum comfort enquiries. Products
              are available for both purchase and short-term rental.
            </p>
            {/* Disclaimer */}
            <div className="rounded-2xl border border-[#C6A66B]/30 bg-[#FFF8F0] p-4 text-xs text-[#64748B] leading-relaxed">
              <strong className="text-[#C6A66B]">Important Disclaimer:</strong> Product information
              provided here is for general awareness only. Heating products are not medical devices
              and do not treat, cure, or prevent any medical condition. Customers with existing
              medical conditions, pregnancy, or recent surgery should seek qualified medical advice
              before use.
            </div>
          </div>

          {/* Visual illustration block */}
          <div className="relative bg-white rounded-3xl border border-[#E8ECE7] shadow-sm p-8 flex flex-col items-center justify-center gap-6">
            <div className="grid grid-cols-2 gap-4 w-full">
              {[
                { label: 'Far Infrared', value: 'FIR Technology', color: '#145B58' },
                { label: 'Jade Stones', value: '1092 Discs', color: '#C6A66B' },
                { label: 'Heat Range', value: 'Adjustable', color: '#8BAF9B' },
                { label: 'Format', value: 'Queen / Full-body', color: '#145B58' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#F8F9F6] border border-[#E8ECE7] text-center"
                >
                  <span className="text-lg font-extrabold font-['Manrope']" style={{ color: stat.color }}>
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-[#64748B] font-medium mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="text-center text-xs text-[#8BAF9B] font-semibold tracking-wide uppercase">
              Maa Health Care Therapy Products
            </div>
          </div>
        </div>

        {/* 6-point grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {educationPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="bg-white rounded-2xl border border-[#E8ECE7] p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#145B58]/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#145B58]" />
                </div>
                <h3 className="font-bold text-sm text-[#24312F] font-['Manrope'] mb-1.5">
                  {point.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
