import { useState, useEffect } from 'react';
import { ArrowUp, Phone, MessageCircle, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <footer id="footer" className="footer dark-background">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12">
              <div className="sitename" style={{ marginBottom: 12 }}>
                {CLINIC_INFO.name}
              </div>
              <p style={{ maxWidth: 420 }}>
                Supplier of Ceratonic Heating Mattresses, Full Body 1092 Jade Stone Heating Mattresses, and Full Body Pain Relief Heating Therapy Mats in Surat, Gujarat.
              </p>
              <p style={{ fontSize: 13, opacity: 0.75, marginTop: 12 }}>
                {CLINIC_INFO.disclaimer}
              </p>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 2 }}>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact &amp; Booking</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6">
              <h4>Contact</h4>
              <p style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <MapPin size={16} style={{ flexShrink: 0, marginTop: 4, color: 'var(--accent-color)' }} />
                <span>{CLINIC_INFO.address.full}</span>
              </p>
              <p style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--accent-color)' }} />
                <a href={`tel:${CLINIC_INFO.phoneRaw}`}>{CLINIC_INFO.phoneDisplay}</a>
                <span>({CLINIC_INFO.contactPerson})</span>
              </p>
              <p style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <MessageCircle size={16} style={{ color: 'var(--accent-color)' }} />
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Enquiry
                </a>
              </p>
              <p style={{ fontSize: 13, opacity: 0.8 }}>
                <strong>GSTIN:</strong> {CLINIC_INFO.gstin}
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.</span>
            <span>Times Trade Center, Punagam–Magob, Surat, Gujarat</span>
          </div>
        </div>
      </footer>

      {showTop && (
        <button
          type="button"
          className="scroll-top"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
