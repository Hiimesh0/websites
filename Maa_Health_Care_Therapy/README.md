# Maa Health Care Therapy — Official Website Demo

A modern, responsive, and conversion-focused business website developed for **Maa Health Care Therapy** (also known as **Maa Health Care**), a premier heating mattress and thermal therapy products supplier based in Surat, Gujarat.

---

## 🏢 Business Information (Verified)

- **Business Name:** Maa Health Care Therapy / Maa Health Care
- **Contact Person:** Dhrumil J. Vaghela
- **Phone / Mobile:** [+91 95124 28000](tel:+919512428000)
- **WhatsApp Enquiries:** [+91 95124 28000](https://wa.me/919512428000)
- **Premises:** 4th Floor, Office 415, Times Trade Center, BTRS Road, Punagam–Magob, Surat, Gujarat 395011, India
- **GSTIN:** 24BGUPV2557E1ZX
- **Public Business Listing:** 5.0 / 5.0 (437 verified reviews on ExportersIndia)

---

## ✨ Key Products Featured

1. **Maa Health Care Ceratonic Heating Mattress**
   - Queen size format
   - Ceramic disc array with Far Infrared Heating Technology
   - Multi-stage temperature controller
   - White / cream finish

2. **Maa Health Care Full Body 1092 Jade Stone Heating Mattress**
   - Model: 1092
   - 1092 polished natural jade stone discs
   - Multi-level adjustable thermostat controller
   - Long-lasting thermal retention

3. **Full Body Pain Relief Heating Therapy Mat**
   - Flexible, rollable thermal mat
   - Multi-zone temperature regulation
   - Prominently available for short-term rental enquiries (postpartum care, seasonal wellness)

---

## 📸 Google Maps Listing Photo Gallery & Lightbox

The website integrates authentic listing photographs attributed to **Maa Health Care Therapy** at Times Trade Center, Surat:
- **Interactive Lightbox:** Full-screen modal with Next/Previous navigation, keyboard controls (Arrow keys, Esc), and image details.
- **Categorized Views:** Products, Office & Exterior (Times Trade Center 4th Floor Office 415), and Product Demonstrations (Far Infrared ceramic core, 1092 Jade stone cluster, multi-layer circuit grids).
- **Google Maps Attribution Compliance:** Each image provides direct links to the official Google Maps listing and author attribution conforming to Google Maps Platform policies.
- **WhatsApp Action:** Instant button to inquire about any specific photographed mattress or therapy mat on WhatsApp (+91 95124 28000).

---

## 🚀 Technology Stack

- **Framework:** React 19 + TypeScript
- **Bundler & Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Typography:** Manrope (Headings) & Inter (Body) via Google Fonts
- **Assets:** Fully responsive inline SVG graphics & product renders

---

## 🛠️ Project Structure

```text
Maa_Health_Care_Therapy/
│
├── public/
│   ├── images/
│   │   ├── hero-therapy-lifestyle.svg
│   │   ├── product-ceratonic.svg
│   │   ├── product-ceratonic-detail.svg
│   │   ├── product-jade-1092.svg
│   │   ├── product-jade-detail.svg
│   │   ├── product-mat-therapy.svg
│   │   ├── product-mat-detail.svg
│   │   └── surat-office.svg
│   ├── favicon.svg
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductDetailModal.tsx
│   │   ├── ContactForm.tsx
│   │   ├── EnquiryCTA.tsx
│   │   ├── FAQSection.tsx
│   │   └── FloatingWhatsApp.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ProductsPage.tsx
│   │   ├── HowItWorksPage.tsx
│   │   └── ContactPage.tsx
│   ├── data/
│   │   └── businessData.ts
│   ├── hooks/
│   │   └── useNavigation.ts
│   ├── utils/
│   │   └── whatsapp.ts
│   ├── styles/
│   │   └── custom.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
└── README.md
```

---

## 💻 How to Install & Run the Website

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### 1. Navigate to the project folder
```bash
cd Maa_Health_Care_Therapy
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open your browser and navigate to the local address displayed in the terminal (usually `http://localhost:5173`).

### 4. Build for production
```bash
npm run build
```
This produces an optimized production bundle inside the `dist/` directory.

### 5. Preview production build
```bash
npm run preview
```

---

## 📲 WhatsApp Enquiry Flow

All enquiry touchpoints (hero CTA, product cards, detail modals, contact form, and floating button) use the centralized helper in `src/utils/whatsapp.ts`.

Clicking an enquiry action opens a formatted WhatsApp chat directed to **+91 95124 28000** with the customer's selected product name and enquiry details pre-filled.
