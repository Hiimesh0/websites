import { Award, HeartPulse, BatteryCharging, Moon, Baby, Rocket, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function AboutAndTherapySections() {
  return (
    <>
      {/* About Section (Matches Coolma #about) */}
      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-5 align-items-center">
            <div className="col-lg-6 reveal">
              <div className="content-wrapper">
                <div className="section-badge mb-3">
                  <span>ABOUT MAA HEALTH CARE THERAPY</span>
                </div>
                <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: 16 }}>
                  Safe, Controlled Thermal Comfort for Home &amp; Postpartum Care
                </h2>
                <p className="lead-text">
                  No need for fire, charcoal, or smoke — Maa Health Care Therapy brings modern Far Infrared &amp; Jade Stone heating mats to Surat homes.
                </p>
                <p>
                  Led by <strong>{CLINIC_INFO.contactPerson}</strong> at {CLINIC_INFO.address.line1}, {CLINIC_INFO.address.line2}, Surat, we supply authentic Ceratonic and 1092 Jade Stone heating mattresses for both direct purchase and postpartum rental enquiries.
                </p>
                <p style={{ fontSize: '0.92rem', color: '#5b7272' }}>
                  <strong>Registered GSTIN:</strong> {CLINIC_INFO.gstin} &nbsp;|&nbsp; <strong>Timings:</strong> {CLINIC_INFO.hours}
                </p>
              </div>
            </div>

            <div className="col-lg-6 reveal">
              <div className="main-image-container">
                <img
                  src="./images/surat-office.svg"
                  alt="Maa Health Care Therapy Office — Times Trade Center, Surat"
                  loading="lazy"
                />
                <div className="overlay-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                    <div>
                      <h4>Times Trade Center, Surat</h4>
                      <p>
                        Visit Office 415, 4th Floor, Punagam–Magob for product demonstrations, rental enquiries, and guidance.
                      </p>
                    </div>
                    <Award size={28} style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Condition / Benefit Feature Boxes */}
          <div className="row gy-4 mt-5">
            <div className="col-md-3 reveal">
              <div className="feature-box">
                <div className="feature-icon"><HeartPulse size={26} /></div>
                <h5>Back &amp; Waist Discomfort</h5>
              </div>
            </div>
            <div className="col-md-3 reveal">
              <div className="feature-box">
                <div className="feature-icon"><BatteryCharging size={26} /></div>
                <h5>Body Weakness &amp; Stiffness</h5>
              </div>
            </div>
            <div className="col-md-3 reveal">
              <div className="feature-box">
                <div className="feature-icon"><Moon size={26} /></div>
                <h5>Relaxation &amp; Restful Sleep</h5>
              </div>
            </div>
            <div className="col-md-3 reveal">
              <div className="feature-box">
                <div className="feature-icon"><Baby size={26} /></div>
                <h5>Postpartum Comfort (With Doctor Advice)</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Thermal Therapy Section (Matches Coolma #features) */}
      <section id="features" className="features section">
        <div className="container section-title reveal">
          <span className="description-title">Thermal Therapy</span>
          <h2>What is Stone &amp; Infrared Heat Therapy?</h2>
          <p>
            Our Ceratonic and 1092 Jade Stone heating mattresses deliver balanced, adjustable warmth without open flames or smoke, supporting daily home relaxation and postpartum comfort.
          </p>
        </div>

        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-5 reveal">
              <div className="icon-badge"><Rocket size={26} /></div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: 12 }}>
                Maa Health Care Therapy — Trusted Surat Supplier
              </h3>
              <p>
                Whether you are looking for a Queen Size Ceratonic mattress, a 1092 Jade Stone mattress, or a flexible therapy mat on rent, our team helps you choose the right option.
              </p>

              <div className="feature-grid">
                <div className="feature-item">
                  <CheckCircle2 size={20} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Postpartum Enquiries</strong>
                    <div style={{ fontSize: 13, color: '#5b7272' }}>Confirm timing with your doctor after delivery</div>
                  </div>
                </div>
                <div className="feature-item">
                  <CheckCircle2 size={20} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>Purchase &amp; Rental</strong>
                    <div style={{ fontSize: 13, color: '#5b7272' }}>Flexible options for home recovery &amp; wellness</div>
                  </div>
                </div>
              </div>

              <div className="stats-row">
                <div>
                  <div className="stat-number">1092</div>
                  <div className="stat-label">Natural Jade Discs</div>
                </div>
                <div>
                  <div className="stat-number">5.0/5</div>
                  <div className="stat-label">Listing Rating</div>
                </div>
                <div>
                  <div className="stat-number">3</div>
                  <div className="stat-label">Flagship Models</div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 reveal">
              <div style={{ borderRadius: 16, overflow: 'hidden', background: '#f0f6f5', padding: 20 }}>
                <img
                  src="./images/product-ceratonic.svg"
                  alt="Ceratonic Far Infrared Heating Mattress"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
