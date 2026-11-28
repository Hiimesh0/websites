// Verified business data for Maa Health Care Therapy (Surat, Gujarat)
// Sources: ExportersIndia, Justdial, Magicpin, and Google Maps public business listings.
// Unverified items are explicitly marked as "Pending Client Confirmation" — never fabricated.

export const CLINIC_INFO = {
  name: "Maa Health Care Therapy",
  shortName: "Maa Health Care",
  contactPerson: "Dhrumil J. Vaghela",
  phoneDisplay: "+91 95124 28000",
  phoneRaw: "+919512428000",
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "919512428000",
  email: "Pending Client Confirmation",
  gstin: "24BGUPV2557E1ZX",
  hours: "8:30 AM – 8:15 PM (Daily — confirm Sunday hours)",
  address: {
    line1: "4th Floor, Office No. 415, Times Trade Center",
    line2: "BTRS Road (near The Polaris Mall), Punagam–Magob",
    city: "Surat",
    state: "Gujarat",
    pincode: "395011",
    country: "India",
    full: "4th Floor, Office No. 415, Times Trade Center, BTRS Road, Punagam–Magob, Surat, Gujarat 395011, India",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Maa+Health+Care+Therapy+Times+Trade+Center+Punagam+Magob+Surat+Gujarat+395011",
    googleMapsEmbedUrl:
      "https://www.google.com/maps?q=Times+Trade+Center+Punagam+Magob+Surat+Gujarat+395011&output=embed",
  },
  verifiedRating: {
    score: "5.0",
    outOf: "5",
    count: "437+",
    source: "ExportersIndia, Justdial & Magicpin Public Listings",
  },
  disclaimer:
    "Product specifications and usage guidance should be confirmed with the Maa Health Care Therapy team. Heating mats may not be suitable for all medical conditions; individuals with recent surgery, pregnancy-related concerns, or chronic health issues should consult a qualified doctor before use.",
};

export const PRODUCTS_DATA = [
  {
    id: "ceratonic-heating-mattress",
    badge: "Far Infrared Tech",
    name: "Ceratonic Heating Mattress",
    tagline: "Far Infrared Heat Technology in Queen Size Comfort",
    description:
      "Designed to provide full-body thermal relaxation through embedded Ceratonic stone discs. Far Infrared Heating Technology delivers gentle, even warmth across the Queen Size mattress surface with electric temperature control.",
    image: "./images/product-ceratonic.svg",
    detailImage: "./images/product-ceratonic-detail.svg",
    specs: [
      { label: "Material", value: "Ceratonic Stone Discs" },
      { label: "Size", value: "Queen Size (White / Cream)" },
      { label: "Heating Tech", value: "Far Infrared Heating" },
      { label: "Power & Control", value: "Electric, Adjustable" },
      { label: "Options", value: "Purchase & Rental Enquiries" },
    ],
  },
  {
    id: "1092-jade-stone-mattress",
    badge: "1092 Jade Stones",
    name: "Full Body 1092 Jade Stone Heating Mattress",
    tagline: "Model 1092 — Natural Jade Stones with Adjustable Control",
    description:
      "Embedded with 1092 carefully aligned natural jade stone discs that absorb and radiate soothing thermal energy uniformly across the spine and legs. Includes an intuitive multi-stage adjustable temperature controller.",
    image: "./images/product-jade-1092.svg",
    detailImage: "./images/product-jade-detail.svg",
    highlighted: true,
    specs: [
      { label: "Model", value: "1092 Full Body" },
      { label: "Primary Material", value: "1092 Natural Jade Stone Discs" },
      { label: "Finish", value: "Jade Green / Deep Brown Trim" },
      { label: "Temperature", value: "Multi-stage Adjustable Controller" },
      { label: "Options", value: "Purchase & Rental Enquiries" },
    ],
  },
  {
    id: "full-body-pain-relief-mat",
    badge: "Popular for Rental",
    name: "Full Body Pain Relief Heating Therapy Mat",
    tagline: "Flexible, Portable Heat Therapy Mat for Home & Postpartum Care",
    description:
      "A versatile, flexible full-body heating therapy mat with multi-level adjustable heat settings. Widely enquired for postpartum recovery and home pain-relief routines on beds, sofas, or floor mats.",
    image: "./images/product-mat-therapy.svg",
    detailImage: "./images/product-mat-detail.svg",
    specs: [
      { label: "Category", value: "Full Body Heating Therapy Mat" },
      { label: "Form Factor", value: "Flexible & Portable" },
      { label: "Temperature", value: "Multi-level Adjustable Heat" },
      { label: "Power Source", value: "Electric" },
      { label: "Rental", value: "Postpartum & Home Rental Enquiries" },
    ],
  },
];

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Ceratonic Heating Mattress",
    subtitle: "Far Infrared Queen Size Thermal Mattress",
    image: "./images/product-ceratonic.svg",
    category: "Product",
  },
  {
    id: "gal-2",
    title: "Ceratonic Disc Array Detail",
    subtitle: "Embedded ceramic thermal discs for even warmth",
    image: "./images/product-ceratonic-detail.svg",
    category: "Detail",
  },
  {
    id: "gal-3",
    title: "1092 Jade Stone Heating Mattress",
    subtitle: "Full-body mineral thermal retention mattress",
    image: "./images/product-jade-1092.svg",
    category: "Product",
  },
  {
    id: "gal-4",
    title: "Natural Jade Stone Matrix",
    subtitle: "1092 polished jade discs with uniform heat spread",
    image: "./images/product-jade-detail.svg",
    category: "Detail",
  },
  {
    id: "gal-5",
    title: "Full Body Pain Relief Therapy Mat",
    subtitle: "Flexible portable mat for bed, sofa, or floor",
    image: "./images/product-mat-therapy.svg",
    category: "Product",
  },
  {
    id: "gal-6",
    title: "Digital Temperature Controller & Layers",
    subtitle: "Multi-layer thermal core with safe heat control",
    image: "./images/product-mat-detail.svg",
    category: "Detail",
  },
  {
    id: "gal-7",
    title: "Times Trade Center, Surat Office",
    subtitle: "4th Floor, Office 415, Punagam–Magob, Surat",
    image: "./images/surat-office.svg",
    category: "Clinic",
  },
];

export const SERVICES_DATA = [
  {
    number: "01",
    title: "Postpartum Heat Therapy Mat Rental",
    description:
      "Flexible rental enquiries for new mothers seeking safe, smokeless thermal comfort at home after normal or C-section delivery (subject to medical advice).",
  },
  {
    number: "02",
    title: "Ceratonic & Jade Stone Mattress Supply",
    description:
      "Direct purchase enquiries for Queen Size Ceratonic Heating Mattresses and Full Body 1092 Jade Stone Heating Mattresses in Surat and across Gujarat.",
  },
  {
    number: "03",
    title: "Live Product Demonstration & Guidance",
    description:
      "Hands-on demonstration of temperature controllers, stone heating surfaces, and safe home setup at our Times Trade Center office or via enquiry.",
  },
  {
    number: "04",
    title: "Full-Body Pain & Muscle Relaxation",
    description:
      "Controlled electric heat therapy designed to help ease back stiffness, waist discomfort, and general muscular fatigue without smoke or open flame.",
  },
  {
    number: "05",
    title: "Surat & Pan-Gujarat Delivery Support",
    description:
      "Convenient local coordination across Punagam, Magob, Varachha, and Surat, with parcel/courier supply support for surrounding cities.",
  },
  {
    number: "06",
    title: "Dedicated WhatsApp & Phone Assistance",
    description:
      "Direct support from Dhrumil J. Vaghela and the Maa Health Care Therapy team for product selection, pricing, and usage guidance.",
  },
];

export const FAQ_DATA = [
  {
    question: "What products does Maa Health Care Therapy offer?",
    answer:
      "We offer the Maa Health Care Ceratonic Heating Mattress (Queen Size, Far Infrared), the Full Body 1092 Jade Stone Heating Mattress (Model 1092), and the Full Body Pain Relief Heating Therapy Mat for both purchase and rental enquiries.",
  },
  {
    question: "Where is Maa Health Care Therapy located in Surat?",
    answer:
      "Our office is located at 4th Floor, Office No. 415, Times Trade Center, BTRS Road (near The Polaris Mall), Punagam–Magob, Surat, Gujarat 395011.",
  },
  {
    question: "Do you offer heating therapy mats on rent for postpartum care?",
    answer:
      "Yes, we welcome rental enquiries for full-body heating therapy mats for postpartum comfort at home. Please consult your doctor regarding the right timing after normal or C-section delivery, and contact us at +91 95124 28000 for availability.",
  },
  {
    question: "Is there any smoke or fire involved in these heating mats?",
    answer:
      "No. Unlike traditional coal, wood, or stove-based heat methods, our electric Ceratonic and Jade Stone therapy mats provide controlled, smokeless warmth with an adjustable temperature controller.",
  },
  {
    question: "Can the temperature be adjusted according to comfort?",
    answer:
      "Yes. Both our 1092 Jade Stone Heating Mattress and Full Body Pain Relief Heating Therapy Mat feature an adjustable temperature controller so you can set a comfortable warmth level.",
  },
  {
    question: "How can I check pricing or book a live demonstration?",
    answer:
      "Pricing and rental terms are shared on request based on the model and duration. You can call or WhatsApp +91 95124 28000, or submit the appointment enquiry form below.",
  },
  {
    question: "What are your clinic / office opening hours?",
    answer:
      "Our Times Trade Center office is generally open from 8:30 AM to 8:15 PM. We recommend calling ahead on +91 95124 28000 before visiting, especially on Sundays or public holidays.",
  },
];

export const TRANSLATIONS = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navProducts: "Products",
    navServices: "Services",
    navFaq: "FAQ",
    navContact: "Contact",
    whatsapp: "WhatsApp",
    callNow: "Call Now",
    heroTitle: "Safe, Smokeless Thermal Therapy & Jade Stone Mattresses in Surat",
    heroDesc:
      "Ceratonic Heating Mattresses • 1092 Jade Stone Mattresses • Full-Body Pain Relief Mats & Postpartum Rental Enquiries",
    heroCtaPrimary: "Call +91 95124 28000",
    heroCtaSecondary: "Watch Product Demo",
  },
  hi: {
    navHome: "होम",
    navAbout: "हमारे बारे में",
    navProducts: "उत्पाद",
    navServices: "सेवाएं",
    navFaq: "सवाल-जवाब",
    navContact: "संपर्क",
    whatsapp: "व्हाट्सएप",
    callNow: "कॉल करें",
    heroTitle: "सूरत में सुरक्षित, धुआं-रहित थर्मल थेरेपी और जेड स्टोन मैट्रेस",
    heroDesc:
      "सेराटोनिक हीटिंग मैट्रेस • 1092 जेड स्टोन मैट्रेस • फुल-बॉडी पेन रिलीफ मैट और पोस्टपार्टम रेंटल सेवा",
    heroCtaPrimary: "कॉल करें +91 95124 28000",
    heroCtaSecondary: "प्रोडक्ट डेमो देखें",
  },
  gu: {
    navHome: "હોમ",
    navAbout: "અમારા વિશે",
    navProducts: "પ્રોડક્ટ્સ",
    navServices: "સેવાઓ",
    navFaq: "પ્રશ્નો",
    navContact: "સંપર્ક",
    whatsapp: "વોટ્સએપ",
    callNow: "કોલ કરો",
    heroTitle: "સુરતમાં સુરક્ષિત, ધુમાડા-રહિત થર્મલ થેરાપી અને જેડ સ્ટોન મેટ્રેસ",
    heroDesc:
      "સેરાટોનિક હીટિંગ મેટ્રેસ • 1092 જેડ સ્ટોન મેટ્રેસ • ફુલ-બોડી પેઈન રિલીફ મેટ અને પોસ્ટપાર્ટમ રેન્ટલ પૂછપરછ",
    heroCtaPrimary: "કોલ કરો +91 95124 28000",
    heroCtaSecondary: "પ્રોડક્ટ ડેમો જુઓ",
  },
};
