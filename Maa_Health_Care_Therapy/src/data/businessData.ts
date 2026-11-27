export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'Heating Mattress' | 'Jade Stone' | 'Therapy Mat' | 'Rental Options';
  model?: string;
  material: string;
  color?: string;
  size?: string;
  powerSource: string;
  featuredFeature: string;
  rentalAvailable: boolean;
  rentalNote: string;
  priceNote: string;
  overview: string;
  description: string[];
  verifiedSpecs: ProductSpec[];
  idealFor: string[];
  image: string;
  secondaryImage: string;
  accentBadge: string;
}

export interface BusinessInfo {
  name: string;
  altName: string;
  contactPerson: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  location: {
    floor: string;
    office: string;
    building: string;
    road: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullAddress: string;
    googleMapsUrl: string;
  };
  gstin: string;
  listingRating: {
    score: number;
    reviewCount: number;
    source: string;
    sourceUrl: string;
  };
  positioning: string[];
  disclaimer: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "Maa Health Care Therapy",
  altName: "Maa Health Care",
  contactPerson: "Dhrumil J. Vaghela",
  phone: "+91 95124 28000",
  phoneRaw: "+919512428000",
  whatsappNumber: "919512428000",
  location: {
    floor: "4th Floor",
    office: "Office 415",
    building: "Times Trade Center",
    road: "BTRS Road",
    area: "Punagam–Magob",
    city: "Surat",
    state: "Gujarat",
    pincode: "395011",
    country: "India",
    fullAddress: "4th Floor, Office 415, Times Trade Center, BTRS Road, Punagam–Magob, Surat, Gujarat 395011, India",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Times+Trade+Center+Punagam+Magob+Surat+Gujarat+395011"
  },
  gstin: "24BGUPV2557E1ZX",
  listingRating: {
    score: 5.0,
    reviewCount: 437,
    source: "Public Supplier Business Listing",
    sourceUrl: "https://www.exportersindia.com/maa-health-care/"
  },
  positioning: [
    "Heating therapy mattresses",
    "Jade stone heating mattresses",
    "Full-body heating therapy mats",
    "Postpartum heat-therapy product rental enquiries",
    "Healthcare and wellness product supply"
  ],
  disclaimer: "Product specifications and usage guidance should be confirmed with the business. Heating products may not be suitable for everyone. Customers with medical conditions, pregnancy-related concerns or recent surgery should seek appropriate medical advice before use."
};

export const PRODUCTS: Product[] = [
  {
    id: "ceratonic-heating-mattress",
    name: "Maa Health Care Ceratonic Heating Mattress",
    tagline: "Far Infrared Heat Technology in Queen Size Comfort",
    category: "Heating Mattress",
    material: "Ceratonic",
    color: "White / Cream",
    size: "Queen Size",
    powerSource: "Electric",
    featuredFeature: "Far Infrared Heating Technology",
    rentalAvailable: true,
    rentalNote: "Purchase and rental enquiries welcome (confirm with team)",
    priceNote: "Price on Request",
    overview: "A premium full-body heating mattress featuring advanced Ceratonic stone disc elements engineered with Far Infrared Heating Technology for deep, soothing thermal comfort.",
    description: [
      "The Maa Health Care Ceratonic Heating Mattress is designed to provide full-body thermal relaxation through embedded Ceratonic discs.",
      "Utilizing Far Infrared Heating Technology, heat penetrates gently and evenly across the entire mattress surface.",
      "Supplied in a generous Queen size format in a clean, elegant white/cream finish with dedicated electric temperature control.",
      "Ideal for relaxation routines, personal home warmth, and individuals seeking heat-therapy product solutions in Surat and across Gujarat."
    ],
    verifiedSpecs: [
      { label: "Material", value: "Ceratonic" },
      { label: "Colour", value: "White" },
      { label: "Size", value: "Queen" },
      { label: "Power Source", value: "Electric" },
      { label: "Heating Technology", value: "Far Infrared Heating Technology" },
      { label: "Pricing", value: "Price on Request (Contact for current pricing)" },
      { label: "Availability", value: "Confirm with business team" }
    ],
    idealFor: [
      "Full-body relaxation after tiring workdays",
      "Gentle warming comfort during cooler months",
      "Home heat therapy routine",
      "Short-term rental and long-term purchase requirements"
    ],
    image: "./images/product-ceratonic.svg",
    secondaryImage: "./images/product-ceratonic-detail.svg",
    accentBadge: "Far Infrared Tech"
  },
  {
    id: "1092-jade-stone-mattress",
    name: "Maa Health Care Full Body 1092 Jade Stone Heating Mattress",
    tagline: "1092 Natural Jade Stones with Adjustable Thermal Control",
    category: "Jade Stone",
    model: "1092",
    material: "Jade Stone",
    color: "Natural Jade Green / Deep Brown Trim",
    size: "Full Body Length",
    powerSource: "Electric",
    featuredFeature: "1092 Jade Stones & Adjustable Temperature",
    rentalAvailable: true,
    rentalNote: "Purchase and rental availability (confirm with business)",
    priceNote: "Price on Request",
    overview: "Engineered with 1092 individual polished natural jade stone discs, this flagship mattress combines ancient mineral thermal retention with modern electric temperature controls.",
    description: [
      "The Model 1092 Jade Stone Heating Mattress is one of Maa Health Care's most sought-after therapy mattress models.",
      "Each mattress is embedded with 1092 carefully aligned natural jade stone discs that absorb and radiate thermal energy uniformly.",
      "Equipped with an intuitive multi-stage adjustable temperature controller, allowing users to customize their warmth level based on personal preference.",
      "Suitable for both direct purchase and short-term rental enquiries for wellness recovery and relaxation."
    ],
    verifiedSpecs: [
      { label: "Model Number", value: "1092" },
      { label: "Primary Material", value: "Jade Stone (1092 Discs)" },
      { label: "Mattress Type", value: "Full Body Heating Mattress" },
      { label: "Temperature Settings", value: "Adjustable temperature controller" },
      { label: "Power Source", value: "Electric" },
      { label: "Pricing", value: "Price on Request (Contact for current pricing)" },
      { label: "Options", value: "Purchase & Rental enquiries accepted" }
    ],
    idealFor: [
      "Individuals seeking stone-based thermal relaxation",
      "Consistent, radiant mineral heat across the full spine and legs",
      "Postpartum heat comfort enquiries (subject to doctor advice)",
      "Daily personal wellness and relaxation routines"
    ],
    image: "./images/product-jade-1092.svg",
    secondaryImage: "./images/product-jade-detail.svg",
    accentBadge: "1092 Jade Stones"
  },
  {
    id: "full-body-pain-relief-mat",
    name: "Full Body Pain Relief Heating Therapy Mat",
    tagline: "Flexible Heat Therapy Mat with Multi-Setting Temperature",
    category: "Therapy Mat",
    material: "Multi-layered Thermal Fabric & Heat Core",
    color: "Earthy Slate & Sand",
    size: "Full Body Length",
    powerSource: "Electric",
    featuredFeature: "Adjustable Heat Settings & Rental Availability",
    rentalAvailable: true,
    rentalNote: "Rental enquiries prominently available (confirm with business)",
    priceNote: "Price on Request",
    overview: "A versatile, flexible full-body heating therapy mat designed for targeted warmth, portable convenience, and accessible purchase or rental arrangements.",
    description: [
      "The Full Body Pain Relief Heating Therapy Mat provides convenient, portable thermal comfort across the body.",
      "Designed with an adjustable temperature controller, enabling gentle low warmth or higher therapeutic heat levels as desired.",
      "Widely inquired for postpartum thermal care and comfort rental periods in Surat.",
      "Flexible construction allows for easy storage and placement on beds, recliners, or floor mats."
    ],
    verifiedSpecs: [
      { label: "Product Category", value: "Heating Therapy Mat" },
      { label: "Form Factor", value: "Full Body Length, Flexible & Portable" },
      { label: "Temperature Control", value: "Multi-level adjustable heat controller" },
      { label: "Rental Enquiries", value: "Available (Confirm booking with team)" },
      { label: "Power Source", value: "Electric" },
      { label: "Pricing", value: "Price on Request (Contact for current pricing)" }
    ],
    idealFor: [
      "Postpartum heating therapy rental enquiries",
      "Targeted thermal comfort for tired backs and limbs",
      "Flexible and space-saving home use",
      "Elderly family members seeking soothing warmth during winter"
    ],
    image: "./images/product-mat-therapy.svg",
    secondaryImage: "./images/product-mat-detail.svg",
    accentBadge: "Popular for Rental"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Explore Products",
    description: "Browse available heating mattress and therapy mat options from our curated catalogue."
  },
  {
    step: "02",
    title: "Ask Your Questions",
    description: "Contact our team on WhatsApp or phone to understand specifications, dimensions, and current availability."
  },
  {
    step: "03",
    title: "Discuss Your Requirement",
    description: "Ask about purchase or rental options where available, tailored to your duration and budget."
  },
  {
    step: "04",
    title: "Confirm With the Team",
    description: "Confirm product details, pricing, delivery/pickup arrangements directly with our Surat office."
  }
];

// ─── Feature Flags ────────────────────────────────────────────────────────────
export const FEATURES = {
  enableTestimonials: false,
  enableServices: true,
  enableRental: true,
  enableDemonstration: true,
  enableGallery: true,
  enableBrochure: false,          // set to true when client provides PDF
  enableProductComparison: true,
  enableLanguageSwitcher: true,
};

export const FAQS = [
  {
    question: "What products does Maa Health Care offer?",
    answer: "Maa Health Care specializes in heating therapy products, including the Ceratonic Heating Mattress, Full Body 1092 Jade Stone Heating Mattress, and Full Body Pain Relief Heating Therapy Mats."
  },
  {
    question: "How can I enquire about a heating mattress?",
    answer: "You can enquire directly by clicking the WhatsApp enquiry button on any product, calling our team at +91 95124 28000, or submitting our online enquiry form."
  },
  {
    question: "Are rental options available?",
    answer: "Yes, rental enquiries are accepted for selected heating therapy mats and mattresses, including postpartum heat therapy requirements. Please confirm current rental availability and terms with our team."
  },
  {
    question: "How can I know the current product price?",
    answer: "Because prices depend on current model availability, purchase versus rental arrangements, and delivery logistics, we provide 'Price on Request'. Please message or call us for accurate, up-to-date pricing."
  },
  {
    question: "Can I contact the business through WhatsApp?",
    answer: "Yes! WhatsApp is our primary enquiry channel. You can message us at +91 95124 28000 for quick responses, product photos, and specification sheets."
  },
  {
    question: "Where is Maa Health Care located?",
    answer: "Our office is located at 4th Floor, Office 415, Times Trade Center, BTRS Road, Punagam–Magob, Surat, Gujarat 395011, India."
  },
  {
    question: "Are heating mattresses safe for everyone?",
    answer: "Heating products may not be suitable for everyone. Customers with specific medical conditions, pregnancy concerns, sensory impairments, or recent surgery should seek appropriate medical advice before use."
  }
];
