import React from 'react';
import { CheckCircle, MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../utils/whatsapp';

const FEATURES = [
  {
    id: 'design',
    eyebrow: 'Product Design',
    heading: 'Full-Body Length, Carefully Engineered',
    description:
      'Each heating mattress is designed to cover the entire body from shoulder to foot, with mineral stone discs aligned in precise rows for uniform heat distribution.',
    bullets: [
      'Queen-size format for spacious coverage',
      'Natural jade & Ceratonic stone disc arrays',
      'Clean, elegant finish for home environments',
    ],
    image: './images/product-jade-1092.svg',
    imageAlt: '1092 Jade Stone Heating Mattress – Full View',
    imageRight: false,
    ctaLabel: 'View Jade Mattress Details',
    ctaMsg: 'Hello, I would like to enquire about the 1092 Jade Stone Heating Mattress.',
  },
  {
    id: 'tech',
    eyebrow: 'Heating Technology',
    heading: 'Far-Infrared Warmth Through Natural Mineral Stones',
    description:
      'Far-infrared heating via embedded Ceratonic and jade stone elements delivers a gradual, enveloping warmth — operating smoke-free, with no open flame or coal.',
    bullets: [
      'Far Infrared (FIR) heating technology',
      'Electric powered — no smoke, no flame',
      'Mineral stones retain & radiate heat evenly',
    ],
    image: './images/product-ceratonic-detail.svg',
    imageAlt: 'Ceratonic Disc Close-up – Far Infrared Detail',
    imageRight: true,
    ctaLabel: 'Enquire About Ceratonic Mattress',
    ctaMsg: 'Hello, I would like to enquire about the Ceratonic Heating Mattress.',
  },
  {
    id: 'controls',
    eyebrow: 'User Controls',
    heading: 'Adjustable Temperature for Personal Preference',
    description:
      'All heating mattresses available through Maa Health Care come with an intuitive multi-level temperature controller, letting each user set their preferred warmth.',
    bullets: [
      'Multi-level adjustable heat settings',
      'Simple controller interface',
      'Suitable for both purchase and rental',
    ],
    image: './images/product-mat-therapy.svg',
    imageAlt: 'Full Body Therapy Mat – Adjustable Heat Controller',
    imageRight: false,
    ctaLabel: 'Enquire About Therapy Mat',
    ctaMsg: 'Hello, I would like to enquire about the Full Body Pain Relief Heating Therapy Mat.',
  },
];

export const AlternatingFeatures: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C6A66B] mb-3">
            Product Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#24312F] font-['Manrope'] leading-tight">
            What Makes Our Products <span className="text-[#145B58]">Different</span>
          </h2>
          <p className="mt-3 text-base text-[#475569] max-w-xl mx-auto">
            Three key pillars that define the Maa Health Care product range.
          </p>
        </div>

        {/* Alternating Feature Rows */}
        {FEATURES.map((feature) => (
          <div
            key={feature.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              feature.imageRight ? 'lg:grid-flow-col' : ''
            }`}
          >
            {/* Text Column */}
            <div className={`space-y-5 ${feature.imageRight ? 'lg:order-1' : ''}`}>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#8BAF9B]">
                {feature.eyebrow}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#24312F] font-['Manrope'] leading-tight">
                {feature.heading}
              </h3>
              <p className="text-[#475569] leading-relaxed">{feature.description}</p>
              <ul className="space-y-3">
                {feature.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-[#334155]">
                    <CheckCircle className="w-5 h-5 text-[#145B58] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={buildWhatsAppLink({ message: feature.ctaMsg })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20BD5A] transition-all shadow-sm hover:shadow-md mt-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                {feature.ctaLabel}
              </a>
            </div>

            {/* Image Column */}
            <div className={`${feature.imageRight ? 'lg:order-0' : ''}`}>
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#F2F5F2] to-[#EDF0EB] border border-[#E8ECE7] shadow-md aspect-[4/3] flex items-center justify-center p-8">
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className="w-full h-full object-contain drop-shadow-xl"
                />
                {/* Decorative accent */}
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-[#145B58]/8 blur-xl pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-[#C6A66B]/10 blur-lg pointer-events-none" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
