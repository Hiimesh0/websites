import { BUSINESS_INFO } from '../data/businessData';

export interface WhatsAppEnquiryParams {
  productName?: string;
  customerName?: string;
  enquiryType?: 'Purchase' | 'Rental' | 'General Enquiry' | string;
  message?: string;
}

/**
 * Builds an official, pre-filled WhatsApp click-to-chat URL using business number 919512428000
 */
export function buildWhatsAppLink(params?: WhatsAppEnquiryParams): string {
  const productLine = params?.productName 
    ? `Product: ${params.productName}` 
    : 'Product: General Heating Mattress Enquiry';

  const typeLine = params?.enquiryType 
    ? `Enquiry Type: ${params.enquiryType}` 
    : '';

  const nameLine = params?.customerName 
    ? `My Name: ${params.customerName}` 
    : '';

  const enquiryLine = params?.message 
    ? `My Enquiry: ${params.message}` 
    : '';

  const textLines = [
    'Hello Maa Health Care,',
    '',
    'I would like to know more about your heating mattress products.',
    '',
    productLine,
    typeLine,
    nameLine,
    enquiryLine,
    '',
    'Please share the product details and current price.',
    '',
    'Thank you.'
  ].filter(line => line !== undefined);

  const cleanText = textLines.join('\n');
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(cleanText)}`;
}

/**
 * Direct phone call helper
 */
export function getPhoneCallLink(): string {
  return `tel:${BUSINESS_INFO.phoneRaw}`;
}
