import { PhoneCall, PlayCircle, ShieldCheck, Thermometer } from 'lucide-react';
import { CLINIC_INFO, TRANSLATIONS } from '../data/clinicData';

export default function HeroSection({ lang, onOpenDemo }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="hero-content">
              <h1 className="hero-title">{t.heroTitle}</h1>
              <p className="hero-description">{t.heroDesc}</p>

              <div className="hero-actions">
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="btn-primary">
                  <PhoneCall size={18} />
                  <span>{t.heroCtaPrimary}</span>
                </a>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() =>
                    onOpenDemo({
                      title: 'Maa Health Care Thermal Therapy Demonstration',
                      subtitle:
                        'Preview our Ceratonic Heating Mattress, 1092 Jade Stone Mattress & Full Body Pain Relief Mat.',
                      image: './images/hero-therapy-lifestyle.svg',
                    })
                  }
                >
                  <PlayCircle size={24} style={{ color: 'var(--accent-color)' }} />
                  <span>{t.heroCtaSecondary}</span>
                </button>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">{CLINIC_INFO.verifiedRating.count}</span>
                  <span className="stat-label">Verified Listing Reviews</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">
                    {CLINIC_INFO.verifiedRating.score}/{CLINIC_INFO.verifiedRating.outOf}
                  </span>
                  <span className="stat-label">Public Supplier Rating</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">Surat</span>
                  <span className="stat-label">Times Trade Center</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2">
            <div className="hero-visual">
              <div className="hero-image-wrapper">
                <img
                  src="./images/hero-therapy-lifestyle.svg"
                  alt="Maa Health Care Therapy — Safe Smokeless Thermal Mattress in Surat"
                  className="hero-image"
                />
                <div className="floating-elements">
                  <div className="floating-card card-1">
                    <Thermometer size={18} style={{ color: 'var(--accent-color)' }} />
                    <span>Adjustable Heat Control</span>
                  </div>
                  <div className="floating-card card-2">
                    <ShieldCheck size={18} style={{ color: 'var(--accent-color)' }} />
                    <span>100% Smokeless &amp; Electric</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
