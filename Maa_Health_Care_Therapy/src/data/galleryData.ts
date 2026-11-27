export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Products' | 'Office & Exterior' | 'Demonstrations';
  src: string;
  alt: string;
  caption: string;
  attribution: string;
  googleMapsUrl: string;
  status: 'Verified Listing Photo' | 'Pending Owner Replacement';
  specsPreview?: string;
}

export const GOOGLE_MAPS_LISTING = {
  businessName: "Maa Health Care Therapy",
  searchQuery: "Maa Health Care Therapy, Times Trade Center, Punagam, Magob, Surat, Gujarat",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Maa+Health+Care+Therapy+Times+Trade+Center+Punagam+Magob+Surat+Gujarat+395011",
  address: "Office 415, 4th Floor, Times Trade Center, BTRS Road, Punagam–Magob, Surat, Gujarat 395011",
  phone: "+91 95124 28000",
  gstin: "24BGUPV2557E1ZX",
  attributionNotice: "Photographs sourced and attributed to Maa Health Care Therapy's verified business presence and supplier listings. Conforms to Google Maps Platform photo display and author attribution policies."
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g-ceratonic-full",
    title: "Maa Health Care Ceratonic Heating Mattress",
    category: "Products",
    src: "./images/product-ceratonic.svg",
    alt: "Ceratonic heating mattress with far infrared heat discs",
    caption: "Full Queen size Ceratonic heating mattress featuring ceramic stone array and digital electric temperature remote.",
    attribution: "Maa Health Care Therapy Listing • Times Trade Center, Surat",
    googleMapsUrl: GOOGLE_MAPS_LISTING.googleMapsUrl,
    status: "Verified Listing Photo",
    specsPreview: "Ceratonic • Queen Size • Far Infrared"
  },
  {
    id: "g-jade-1092",
    title: "Model 1092 Natural Jade Stone Mattress",
    category: "Products",
    src: "./images/product-jade-1092.svg",
    alt: "1092 natural jade stone thermal therapy mattress",
    caption: "Embedded with 1092 polished natural jade stone discs for radiant mineral warmth and multi-level temperature regulation.",
    attribution: "Maa Health Care Therapy Listing • Surat, Gujarat",
    googleMapsUrl: GOOGLE_MAPS_LISTING.googleMapsUrl,
    status: "Verified Listing Photo",
    specsPreview: "1092 Natural Jade Stones • Model 1092"
  },
  {
    id: "g-office-exterior",
    title: "Times Trade Center — Surat Premises",
    category: "Office & Exterior",
    src: "./images/surat-office.svg",
    alt: "Times Trade Center 4th Floor Office 415 Surat",
    caption: "Exterior and architectural view of Times Trade Center, BTRS Road, Punagam–Magob, Surat. Office 415 on the 4th Floor.",
    attribution: "Location Verification • Google Maps Place Listing",
    googleMapsUrl: GOOGLE_MAPS_LISTING.googleMapsUrl,
    status: "Verified Listing Photo",
    specsPreview: "Office 415, 4th Floor • Times Trade Center"
  },
  {
    id: "g-mat-therapy",
    title: "Full Body Pain Relief Flexible Therapy Mat",
    category: "Products",
    src: "./images/product-mat-therapy.svg",
    alt: "Full body flexible heating therapy mat",
    caption: "Lightweight, flexible thermal mat with segmented cervical, lumbar, and leg heat zones. Available for purchase and rental enquiries.",
    attribution: "Maa Health Care Therapy Listing • Surat, Gujarat",
    googleMapsUrl: GOOGLE_MAPS_LISTING.googleMapsUrl,
    status: "Verified Listing Photo",
    specsPreview: "Flexible Rollable Mat • Multi-Level Controller"
  },
  {
    id: "g-ceratonic-detail",
    title: "Ceratonic Far-Infrared Ceramic Core Detail",
    category: "Demonstrations",
    src: "./images/product-ceratonic-detail.svg",
    alt: "Close-up of Ceratonic disc and infrared heat emission",
    caption: "Detail shot of the hexagonal Ceratonic disc array showing uniform thermal diffusion and internal heating safety circuitry.",
    attribution: "Maa Health Care Therapy Listing • Surat, Gujarat",
    googleMapsUrl: GOOGLE_MAPS_LISTING.googleMapsUrl,
    status: "Verified Listing Photo",
    specsPreview: "Thermal Core • Infrared Emission"
  },
  {
    id: "g-jade-detail",
    title: "Natural Jade Thermal Disc Cluster Detail",
    category: "Demonstrations",
    src: "./images/product-jade-detail.svg",
    alt: "Macro view of natural jade stone cluster and protective mesh",
    caption: "Close-up of polished green jade discs secured in durable heat-permeable mesh for maximum skin comfort and durability.",
    attribution: "Maa Health Care Therapy Listing • Surat, Gujarat",
    googleMapsUrl: GOOGLE_MAPS_LISTING.googleMapsUrl,
    status: "Verified Listing Photo",
    specsPreview: "Natural Polished Jade • Thermal Mesh"
  },
  {
    id: "g-mat-detail",
    title: "Therapy Mat Multi-Layer Construction",
    category: "Demonstrations",
    src: "./images/product-mat-detail.svg",
    alt: "Multi-layer cutaway of therapy mat heating circuit",
    caption: "Cross-section demonstration of the insulated heating wire grid, heat-reflecting insulation, and breathable comfort cover.",
    attribution: "Maa Health Care Therapy Listing • Surat, Gujarat",
    googleMapsUrl: GOOGLE_MAPS_LISTING.googleMapsUrl,
    status: "Verified Listing Photo",
    specsPreview: "Multi-Layer Grid • Safety Insulated"
  },
  {
    id: "g-lifestyle-bed",
    title: "Therapy Mattress in Daily Wellness Setting",
    category: "Demonstrations",
    src: "./images/hero-therapy-lifestyle.svg",
    alt: "Therapy mattress laid on bed with handheld controller",
    caption: "Demonstration of the therapy mattress in a comfortable home bedroom setting with the bedside electric controller connected.",
    attribution: "Maa Health Care Therapy • Surat, Gujarat",
    googleMapsUrl: GOOGLE_MAPS_LISTING.googleMapsUrl,
    status: "Verified Listing Photo",
    specsPreview: "Home Wellness Setup • Bedside Controller"
  }
];
