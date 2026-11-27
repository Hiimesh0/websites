import React from 'react';
import { X, MessageCircle } from 'lucide-react';
import type { Product } from '../data/businessData';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface ProductComparisonProps {
  products: Product[];
  onRemove: (id: string) => void;
  onClose: () => void;
}

const ALL_SPEC_LABELS = [
  'Material',
  'Primary Material',
  'Model Number',
  'Mattress Type',
  'Product Category',
  'Colour',
  'Size',
  'Form Factor',
  'Power Source',
  'Heating Technology',
  'Temperature Settings',
  'Temperature Control',
  'Rental Enquiries',
  'Options',
  'Pricing',
  'Availability',
];

export const ProductComparison: React.FC<ProductComparisonProps> = ({
  products,
  onRemove,
  onClose,
}) => {
  if (products.length < 2) return null;

  // Gather all unique spec labels across selected products
  const usedLabels = ALL_SPEC_LABELS.filter((label) =>
    products.some((p) => p.verifiedSpecs.some((s) => s.label === label))
  );

  const getSpec = (product: Product, label: string) =>
    product.verifiedSpecs.find((s) => s.label === label)?.value ?? '—';

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-5xl rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-[#E8ECE7] bg-white rounded-t-3xl">
          <div>
            <h2 className="text-lg font-bold text-[#24312F] font-['Manrope']">Product Comparison</h2>
            <p className="text-xs text-[#64748B]">Side-by-side specification comparison</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-[#F1F4F1] text-[#475569] transition-colors"
            aria-label="Close comparison"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            {/* Product Headers */}
            <thead>
              <tr>
                <th className="text-left text-xs font-semibold text-[#8BAF9B] uppercase tracking-wider pb-4 w-36 pr-4">
                  Specification
                </th>
                {products.map((p) => (
                  <th key={p.id} className="pb-4 px-3 align-top text-left">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-xs font-bold text-[#145B58] leading-snug">{p.name}</div>
                        <div className="text-[11px] text-[#64748B] mt-0.5">{p.tagline}</div>
                        <div className="mt-1.5 inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#145B58]/10 text-[#145B58]">
                          {p.accentBadge}
                        </div>
                      </div>
                      <button
                        onClick={() => onRemove(p.id)}
                        className="shrink-0 p-1 rounded-lg hover:bg-red-50 text-[#94A3B8] hover:text-red-500 transition-colors"
                        aria-label={`Remove ${p.name} from comparison`}
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Product Image Row */}
              <tr className="border-t border-[#F1F4F1]">
                <td className="py-4 pr-4 text-xs font-semibold text-[#334155] align-top">Product Image</td>
                {products.map((p) => (
                  <td key={p.id} className="py-4 px-3 align-top">
                    <div className="w-28 h-20 bg-[#F8F9F6] rounded-xl overflow-hidden border border-[#E8ECE7]">
                      <img src={p.image} alt={p.name} className="w-full h-full object-contain p-2" />
                    </div>
                  </td>
                ))}
              </tr>

              {/* Category Row */}
              <tr className="border-t border-[#F1F4F1] bg-[#FAFAF9]">
                <td className="py-3 pr-4 text-xs font-semibold text-[#334155] align-middle">Category</td>
                {products.map((p) => (
                  <td key={p.id} className="py-3 px-3 text-xs text-[#475569] align-middle">
                    {p.category}
                  </td>
                ))}
              </tr>

              {/* Rental Row */}
              <tr className="border-t border-[#F1F4F1]">
                <td className="py-3 pr-4 text-xs font-semibold text-[#334155] align-middle">Rental Available</td>
                {products.map((p) => (
                  <td key={p.id} className="py-3 px-3 text-xs align-middle">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold ${
                        p.rentalAvailable
                          ? 'bg-green-50 text-green-700'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {p.rentalAvailable ? '✓ Yes' : '✗ No'}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Spec Rows */}
              {usedLabels.map((label, idx) => (
                <tr key={label} className={`border-t border-[#F1F4F1] ${idx % 2 === 0 ? 'bg-[#FAFAF9]' : ''}`}>
                  <td className="py-3 pr-4 text-xs font-semibold text-[#334155] align-middle">{label}</td>
                  {products.map((p) => (
                    <td key={p.id} className="py-3 px-3 text-xs text-[#475569] align-middle leading-relaxed">
                      {getSpec(p, label)}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Ideal For */}
              <tr className="border-t border-[#F1F4F1]">
                <td className="py-3 pr-4 text-xs font-semibold text-[#334155] align-top">Ideal For</td>
                {products.map((p) => (
                  <td key={p.id} className="py-3 px-3 text-xs text-[#475569] align-top">
                    <ul className="space-y-1 list-disc list-inside">
                      {p.idealFor.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {/* Price Row */}
              <tr className="border-t border-[#F1F4F1] bg-[#FAFAF9]">
                <td className="py-3 pr-4 text-xs font-semibold text-[#334155] align-middle">Price</td>
                {products.map((p) => (
                  <td key={p.id} className="py-3 px-3 text-xs font-bold text-[#145B58] align-middle">
                    {p.priceNote}
                  </td>
                ))}
              </tr>

              {/* CTA Row */}
              <tr className="border-t border-[#E8ECE7]">
                <td className="py-4 pr-4 text-xs font-semibold text-[#334155] align-middle">Enquire</td>
                {products.map((p) => (
                  <td key={p.id} className="py-4 px-3 align-middle">
                    <a
                      href={buildWhatsAppLink({
                        productName: p.name,
                        message: `Hello, I'd like to compare and enquire about the ${p.name}.`,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      WhatsApp
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
