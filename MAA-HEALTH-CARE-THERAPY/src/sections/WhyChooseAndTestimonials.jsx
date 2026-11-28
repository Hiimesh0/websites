import { CheckCircle2, Quote, Star, BadgeCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function WhyChooseAndTestimonials() {
  return (
    <>
      {/* Headline / Why Choose Section (Matches Coolma #headline) */}
      <section id="headline" className="headline section">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6 reveal">
              <div style={{ borderRadius: 16, overflow: 'hidden', background: '#f0f6f5', padding: 20 }}>
                <img
                  src="./images/product-jade-1092.svg"
                  alt="Maa Health Care 1092 Jade Stone Heating Mattress"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="col-lg-6 reveal">
              <div className="intro-content">
                <div className="section-badge mb-3">
                  <Star size={14} />
                  <span>WHY MAA HEALTH CARE THERAPY</span>
                </div>
                <h2 className="section-heading">Why Choose Maa Health Care Heating Mats?</h2>
                <p style={{ marginBottom: 20 }}>
                  Unlike traditional charcoal, wood, or stove-based heating methods, our Ceratonic and 1092 Jade Stone heating mattresses provide controlled, smokeless electric warmth that is clean, convenient, and comfortable for home use.
                </p>
                <ul className="checklist">
                  <li><CheckCircle2 size={18} style={{ color: 'var(--accent-color)' }} /> Helps relieve back, waist, and muscular stiffness</li>
                  <li><CheckCircle2 size={18} style={{ color: 'var(--accent-color)' }} /> Far Infrared &amp; natural Jade Stone thermal retention</li>
                  <li><CheckCircle2 size={18} style={{ color: 'var(--accent-color)' }} /> Multi-stage adjustable electric temperature controller</li>
                  <li><CheckCircle2 size={18} style={{ color: 'var(--accent-color)' }} /> 100% smokeless, fire-free, and medicine-free warmth</li>
                  <li><CheckCircle2 size={18} style={{ color: 'var(--accent-color)' }} /> Easy to use at home on a bed, sofa, or floor</li>
                  <li><CheckCircle2 size={18} style={{ color: 'var(--accent-color)' }} /> Available for both purchase and postpartum rental enquiries</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Verified Public Ratings (Matches Coolma #testimonials) */}
      <section id="testimonials" className="testimonials section">
        <div className="container section-title reveal">
          <span className="description-title">Verified Rating</span>
          <h2>Customer Ratings &amp; Trust</h2>
          <p>
            Verified public business listing ratings for Maa Health Care Therapy, Surat — we never publish fabricated reviews
          </p>
        </div>

        <div className="container">
          <div className="testimonial-masonry">
            <div className="testimonial-item reveal">
              <div className="testimonial-content">
                <div className="quote-pattern">
                  <BadgeCheck size={28} />
                </div>
                <p>
                  Listed with a <strong>5.0 / 5</strong> rating across <strong>437+ public supplier reviews</strong> on ExportersIndia for heating therapy mattresses and thermal care products.
                </p>
                <div className="client-info">
                  <div className="client-details">
                    <h3>ExportersIndia Listing</h3>
                    <span className="position">Verified Public Supplier Profile</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-item highlight reveal">
              <div className="testimonial-content">
                <div className="quote-pattern">
                  <Star size={28} />
                </div>
                <p>
                  Rated <strong>5.0 Stars</strong> on Justdial &amp; Magicpin for prompt enquiry responses, product demonstration, and reliable thermal mat supply in Punagam–Magob, Surat.
                </p>
                <div className="client-info">
                  <div className="client-details">
                    <h3>Justdial &amp; Magicpin</h3>
                    <span className="position">Surat Local Business Directories</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-item reveal">
              <div className="testimonial-content">
                <div className="quote-pattern">
                  <Quote size={28} />
                </div>
                <p>
                  <strong>Client-Verified Stories (Pending Confirmation):</strong> Individual patient names and video testimonials will be published here once written consent is provided by {CLINIC_INFO.contactPerson}.
                </p>
                <div className="client-info">
                  <div className="client-details">
                    <h3>Authentic Reviews Policy</h3>
                    <span className="position">Zero Fabricated Testimonials</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
