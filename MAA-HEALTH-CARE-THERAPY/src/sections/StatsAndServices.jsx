import { Trophy, Users, TrendingUp, Award, MapPin, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';

export default function StatsAndServices({ onBookService }) {
  return (
    <>
      {/* Stats Section (Matches Coolma #stats) */}
      <section id="stats" className="stats section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5 reveal">
              <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 12 }}>
                Trusted Thermal Care Supplier in Surat
              </h3>
              <p>
                Verified supplier profile on ExportersIndia, Justdial, and Magicpin serving families across Surat and Gujarat with Ceratonic &amp; Jade Stone heating mattresses.
              </p>

              <div className="achievement-badge">
                <div className="achievement-content">
                  <div className="achievement-icon"><Trophy size={26} /></div>
                  <div>
                    <div className="achievement-title">5.0 / 5 Public Listing Rating</div>
                    <div className="achievement-subtitle">437+ reviews on ExportersIndia &amp; local directories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-xl-3 col-lg-6 col-md-6 reveal">
              <div className="stat-item">
                <div className="stat-icon"><Users size={24} /></div>
                <div className="stat-number">{CLINIC_INFO.verifiedRating.count}</div>
                <div className="stat-label">Public Listing Reviews</div>
                <div className="stat-growth"><ArrowUpRight size={14} /><span>ExportersIndia</span></div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 reveal">
              <div className="stat-item featured">
                <div className="stat-icon"><TrendingUp size={24} /></div>
                <div className="stat-number">5.0/5</div>
                <div className="stat-label">Verified Star Rating</div>
                <div className="stat-growth"><ArrowUpRight size={14} /><span>Justdial &amp; Magicpin</span></div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 reveal">
              <div className="stat-item">
                <div className="stat-icon"><Award size={24} /></div>
                <div className="stat-number">1092</div>
                <div className="stat-label">Jade Stone Discs</div>
                <div className="stat-growth"><ArrowUpRight size={14} /><span>Flagship Model 1092</span></div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-6 reveal">
              <div className="stat-item">
                <div className="stat-icon"><MapPin size={24} /></div>
                <div className="stat-number">415</div>
                <div className="stat-label">Times Trade Center</div>
                <div className="stat-growth"><ArrowUpRight size={14} /><span>Punagam–Magob, Surat</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (Matches Coolma #services) */}
      <section id="services" className="services section">
        <div className="container section-title reveal">
          <span className="description-title">Services</span>
          <h2>Our Services</h2>
          <p>
            Heating therapy mattress supply, postpartum rental enquiries, and live demonstrations in Surat, Gujarat
          </p>
        </div>

        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6 reveal">
              <div className="intro-content">
                <div className="section-badge mb-3">
                  <span>WHAT WE OFFER</span>
                </div>
                <h2 className="section-heading">Complete Thermal Care &amp; Rental Support</h2>
                <p style={{ marginBottom: 24, fontSize: '1.05rem', color: '#4b6363' }}>
                  Maa Health Care Therapy assists customers with Ceratonic and 1092 Jade Stone heating mattresses for home relaxation, pain-relief routines, and postpartum thermal care rentals.
                </p>
                <a href="#contact" className="cta-button" onClick={() => onBookService('Demo')}>
                  Book Free Enquiry / Demo
                </a>
              </div>
            </div>

            <div className="col-lg-6 reveal">
              <div style={{ borderRadius: 20, overflow: 'hidden', background: '#f0f6f5', padding: 20, boxShadow: '0 20px 50px rgba(25,56,56,0.1)' }}>
                <img
                  src="./images/hero-therapy-lifestyle.svg"
                  alt="Maa Health Care Therapy Services"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="services-grid mt-5">
            <div className="row g-4">
              {SERVICES_DATA.map((service) => (
                <div key={service.number} className="col-lg-4 col-md-6 reveal">
                  <div className="service-card">
                    <div className="card-number">
                      <span>{service.number}</span>
                    </div>
                    <div className="card-content">
                      <h5 className="service-title">
                        <a href="#contact" onClick={() => onBookService(service.title)}>
                          {service.title}
                        </a>
                      </h5>
                      <p style={{ margin: 0, fontSize: '0.95rem', color: '#536b6b' }}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
