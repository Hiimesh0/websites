import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { PRODUCTS, BUSINESS_INFO } from '../data/businessData';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface ContactFormProps {
  initialProduct?: string;
  initialType?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  initialProduct = '', 
  initialType = 'Purchase' 
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(initialProduct || PRODUCTS[0].name);
  const [enquiryType, setEnquiryType] = useState(initialType || 'Purchase');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    }
    const cleanPhone = phoneNumber.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      errs.phoneNumber = 'Phone Number is required.';
    } else if (cleanPhone.length < 10) {
      errs.phoneNumber = 'Please enter a valid 10-digit mobile number.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate verified WhatsApp link
    const link = buildWhatsAppLink({
      customerName: fullName.trim(),
      productName: selectedProduct,
      enquiryType,
      message: message.trim() || `I am interested in ${selectedProduct} for ${enquiryType.toLowerCase()}. Please contact me with availability and price.`
    });

    setWhatsappUrl(link);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFullName('');
    setPhoneNumber('');
    setMessage('');
    setIsSubmitted(false);
    setWhatsappUrl('');
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-[#8BAF9B]/40 shadow-xl text-center space-y-6 animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-[#145B58]/10 text-[#145B58] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-[#24312F] font-['Manrope']">
            Enquiry Prepared Successfully!
          </h3>
          <p className="text-sm text-[#64748B] max-w-md mx-auto">
            Thank you, <strong className="text-[#24312F]">{fullName}</strong>. Your enquiry for{' '}
            <strong className="text-[#145B58]">{selectedProduct}</strong> ({enquiryType}) is ready.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#F8F9F6] border border-[#E8ECE7] text-left text-xs space-y-2 max-w-md mx-auto">
          <div className="flex justify-between border-b border-[#E8ECE7] pb-1.5">
            <span className="text-[#64748B]">Contact Person:</span>
            <span className="font-semibold text-[#24312F]">{BUSINESS_INFO.contactPerson}</span>
          </div>
          <div className="flex justify-between border-b border-[#E8ECE7] pb-1.5">
            <span className="text-[#64748B]">Business WhatsApp:</span>
            <span className="font-semibold text-[#145B58]">{BUSINESS_INFO.phone}</span>
          </div>
          <div className="flex justify-between pb-1">
            <span className="text-[#64748B]">Enquiry Type:</span>
            <span className="font-semibold text-[#24312F]">{enquiryType}</span>
          </div>
        </div>

        {/* Action to proceed to WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Send Enquiry on WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#CBD5E1] text-[#64748B] hover:text-[#24312F] text-xs font-semibold hover:bg-[#F8F9F6] transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>

        <p className="text-[11px] text-[#94A3B8]">
          You will be redirected to WhatsApp to send your pre-filled inquiry directly to our Surat office.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8ECE7] shadow-lg">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#24312F] font-['Manrope']">
          Send a Product Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-[#64748B] mt-1">
          Have questions regarding purchase, rental, or product specifications? Submit below to connect directly with our Surat team.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-[#334155] mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (errors.fullName) setErrors({ ...errors, fullName: '' });
            }}
            placeholder="e.g. Ramesh Patel"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-hidden ${
              errors.fullName
                ? 'border-red-400 bg-red-50/20 focus:ring-1 focus:ring-red-400'
                : 'border-[#CBD5E1] focus:border-[#145B58] focus:ring-1 focus:ring-[#145B58]'
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-semibold text-[#334155] mb-1">
            Phone / WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-xs text-[#64748B] font-medium">
              +91
            </span>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
              }}
              placeholder="98765 43210"
              className={`w-full pl-12 pr-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-hidden ${
                errors.phoneNumber
                  ? 'border-red-400 bg-red-50/20 focus:ring-1 focus:ring-red-400'
                  : 'border-[#CBD5E1] focus:border-[#145B58] focus:ring-1 focus:ring-[#145B58]'
              }`}
            />
          </div>
          {errors.phoneNumber && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
            </p>
          )}
        </div>

        {/* Product Selection */}
        <div>
          <label className="block text-xs font-semibold text-[#334155] mb-1">
            Product Interested In
          </label>
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] bg-white text-sm focus:outline-hidden focus:border-[#145B58] focus:ring-1 focus:ring-[#145B58]"
          >
            {PRODUCTS.map((prod) => (
              <option key={prod.id} value={prod.name}>
                {prod.name}
              </option>
            ))}
            <option value="General Heating Mattress Enquiry">General Heating Mattress Enquiry</option>
          </select>
        </div>

        {/* Enquiry Type */}
        <div>
          <label className="block text-xs font-semibold text-[#334155] mb-1.5">
            Enquiry Type
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'Purchase', label: 'Purchase' },
              { id: 'Rental', label: 'Rental' },
              { id: 'General Enquiry', label: 'General' },
            ].map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setEnquiryType(type.id)}
                className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                  enquiryType === type.id
                    ? 'border-[#145B58] bg-[#145B58] text-white font-semibold'
                    : 'border-[#CBD5E1] bg-[#F8F9F6] text-[#334155] hover:bg-white'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-[#334155] mb-1">
            Your Questions or Requirements (Optional)
          </label>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us what you'd like to know about specifications, delivery in Surat, or rental options..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-sm focus:outline-hidden focus:border-[#145B58] focus:ring-1 focus:ring-[#145B58]"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3.5 px-4 rounded-xl bg-[#145B58] hover:bg-[#0E4340] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
        >
          <Send className="w-4 h-4 text-[#C6A66B]" />
          Submit &amp; Prepare WhatsApp Message
        </button>

        <p className="text-[11px] text-center text-[#94A3B8] pt-1">
          Direct communication with Dhrumil J. Vaghela • Times Trade Center, Surat
        </p>
      </form>
    </div>
  );
};
