import { XCircle, CheckCircle2, Layers, Sparkles, ShieldCheck, Quote } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/clinicData';

export default function ComparisonAndProducts({ onEnquireProduct }) {
  const productIcons = [Layers, Sparkles, ShieldCheck];

  return (
    <>
      {/* Comparison Cards Section (Matches Coolma #features-cards) */}
      <section id="features-cards" className="features-cards section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 reveal">
              <div className="feature-card">
                <div className="icon-box">❌</div>
                <h3>Traditional Method (Wood / Coal / Stove)</h3>
                <ul className="feature-list">
                  <li><XCircle size={18} style={{ color: '#dc2626', flexShrink: 0, marginTop: 2 }} /><span>Requires a wooden cot and constant fuel setup</span></li>
                  <li><XCircle size={18} style={{ color: '#dc2626', flexShrink: 0, marginTop: 2 }} /><span>Smoke and fumes inside the bedroom</span></li>
                  <li><XCircle size={18} style={{ color: '#dc2626', flexShrink: 0, marginTop: 2 }} /><span>Constant risk of sparks, burns, or uncontrolled heat</span></li>
                  <li><XCircle size={18} style={{ color: '#dc2626', flexShrink: 0, marginTop: 2 }} /><span>Uneven heat distribution across the body</span></li>
                  <li><XCircle size={18} style={{ color: '#dc2626', flexShrink: 0, marginTop: 2 }} /><span>Difficult to clean and maintain daily</span></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 reveal">
              <div className="feature-card">
                <div className="icon-box">✅</div>
                <h3>Maa Health Care — Safe &amp; Modern Thermal Mats</h3>
                <ul className="feature-list">
                  <li><CheckCircle2 size={18} style={{ color: '#16a34a', flexShrink: 0, marginTop: 2 }} /><span>100% smokeless, fire-free electric thermal comfort</span></li>
                  <li><CheckCircle2 size={18} style={{ color: '#16a34a', flexShrink: 0, marginTop: 2 }} /><span>Uniform Far Infrared &amp; natural Jade Stone warmth</span></li>
                  <li><CheckCircle2 size={18} style={{ color: '#16a34a', flexShrink: 0, marginTop: 2 }} /><span>Adjustable multi-stage temperature controller</span></li>
                  <li><CheckCircle2 size={18} style={{ color: '#16a34a', flexShrink: 0, marginTop: 2 }} /><span>Convenient to place on a bed, sofa, or floor</span></li>
                  <li><CheckCircle2 size={18} style={{ color: '#16a34a', flexShrink: 0, marginTop: 2 }} /><span>Available for purchase or postpartum rental enquiries</span></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 reveal">
              <div className="compliance-card">
                <h4>Smokeless Heat</h4>
                <p className="status in-progress">Far Infrared</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 reveal">
              <div className="compliance-card">
                <h4>Safe Temperature</h4>
                <p className="status compliant">Adjustable</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 reveal">
              <div className="compliance-card">
                <h4>1092 Jade Stones</h4>
                <p className="status compliant">Natural Mineral</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 reveal">
              <div className="compliance-card">
                <h4>Use at Home</h4>
                <p className="status planned">Rent or Buy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Products / Treatments Section (Matches Coolma #features-2) */}
      <section id="products" className="features-2 section">
        <div className="container section-title reveal">
          <span className="description-title">Our Products</span>
          <h2>Verified Therapy Mattresses &amp; Mats</h2>
          <p>
            Explore our three core heating therapy solutions in Surat — contact us for current pricing, rental availability, and live demonstrations
          </p>
        </div>

        <div className="container">
          <div className="row g-4">
            {PRODUCTS_DATA.map((product, index) => {
              const Icon = productIcons[index % productIcons.length];
              return (
                <div key={product.id} className="col-lg-4 reveal">
                  <div className={`feature-card ${product.highlighted ? 'highlighted' : ''}`}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <div className="feature-icon" style={{ marginBottom: 0 }}>
                        <Icon size={24} />
                      </div>
                      <span className="section-badge" style={{ fontSize: 11, padding: '4px 12px' }}>
                        {product.badge}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', marginBottom: 8 }}>{product.name}</h3>
                    <p style={{ fontSize: '0.94rem', color: '#4b6363', marginBottom: 14 }}>
                      {product.description}
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', fontSize: '0.88rem' }}>
                      {product.specs.map((spec) => (
                        <li
                          key={spec.label}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '5px 0',
                            borderBottom: '1px dashed #e2ecea',
                          }}
                        >
                          <span style={{ color: '#5b7272' }}>{spec.label}:</span>
                          <strong style={{ color: 'var(--heading-color)', textAlign: 'right' }}>{spec.value}</strong>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => onEnquireProduct(product.name)}
                      style={{
                        background: 'var(--accent-color)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 8,
                        padding: '10px 16px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        marginBottom: 14,
                      }}
                    >
                      Enquire / Book Demo
                    </button>

                    <div className="feature-image">
                      <img src={product.image} alt={product.name} loading="lazy" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="feature-testimonial reveal">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <img
                  src="./images/product-mat-detail.svg"
                  alt="Controlled Heat Therapy Principle"
                  loading="lazy"
                  style={{ borderRadius: 12 }}
                />
              </div>
              <div className="col-lg-6">
                <div style={{ color: 'var(--accent-color)', marginBottom: 10 }}>
                  <Quote size={32} />
                </div>
                <p style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--heading-color)' }}>
                  Maa Health Care Therapy provides controlled electric warm-compress comfort — a clean, modern alternative to traditional smoke-based heat methods. Always consult your physician for specific medical conditions or postpartum timing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
