import { useState, useEffect } from 'react';
import {
  ChevronRight,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  ExternalLink,
  AlertCircle,
} from 'lucide-react';
import { CLINIC_INFO, FAQ_DATA } from '../data/clinicData';

export default function FaqAndContact({ preselectedService }) {
  const [activeFaq, setActiveFaq] = useState(0);

  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    bookingType: '',
    deliveryType: '',
    edd: '',
    demoCity: 'Surat',
    otherCity: '',
    preferredDate: '',
    address: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setForm((prev) => ({
        ...prev,
        bookingType: preselectedService === 'Demo' ? 'Demo' : prev.bookingType || 'Purchase',
        address:
          preselectedService !== 'Demo' && !prev.address.includes(preselectedService)
            ? `Interested in: ${preselectedService}`
            : prev.address,
      }));
    }
  }, [preselectedService]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!form.name.trim() || !/^\d{10}$/.test(form.mobile.replace(/\D/g, '').slice(-10))) {
      setStatus({
        type: 'error',
        message: 'Please enter your full name and a valid 10-digit mobile number.',
      });
      return;
    }

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    const summaryLines = [
      `Hello Maa Health Care Therapy (${CLINIC_INFO.contactPerson}),`,
      `Name: ${form.name}`,
      `Mobile: ${form.mobile}`,
      form.email ? `Email: ${form.email}` : null,
      `Enquiry Type: ${form.bookingType || 'General Enquiry'}`,
      form.bookingType === 'Rent' && form.deliveryType ? `Delivery Type: ${form.deliveryType}` : null,
      form.bookingType === 'Advance' && form.edd ? `Expected Delivery Date: ${form.edd}` : null,
      form.bookingType === 'Demo'
        ? `Demo City: ${form.demoCity === 'Other' ? form.otherCity : form.demoCity}`
        : null,
      form.preferredDate ? `Preferred Date: ${form.preferredDate}` : null,
      form.address ? `Address / Notes: ${form.address}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    if (endpoint) {
      setSubmitting(true);
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Submission failed');
        setStatus({
          type: 'success',
          message: 'Enquiry submitted successfully! Our Surat team will contact you shortly.',
        });
        setSubmitting(false);
        return;
      } catch {
        setSubmitting(false);
        setStatus({
          type: 'error',
          message: 'Direct server submission failed. Opening WhatsApp so your enquiry reaches us immediately.',
        });
      }
    }

    // Fallback: Direct WhatsApp delivery (no fake success message)
    const waUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(summaryLines)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setStatus({
      type: 'info',
      message: `WhatsApp opened with your enquiry details for ${CLINIC_INFO.phoneDisplay}. Please press Send in WhatsApp to complete.`,
    });
  };

  return (
    <>
      {/* FAQ Section (Matches Coolma #faq) */}
      <section id="faq" className="faq section">
        <div className="container">
          <div className="section-title reveal">
            <span className="description-title">FAQ&apos;s</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-container">
            {FAQ_DATA.map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`faq-item reveal ${isOpen ? 'faq-active' : ''}`}
                  onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                >
                  <h3>{item.question}</h3>
                  <ChevronRight size={18} className="faq-toggle" />
                  {isOpen && (
                    <div className="faq-content">
                      <p style={{ margin: 0 }}>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact & Appointment Booking Section (Matches Coolma #contact) */}
      <section id="contact" className="contact section light-background">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 reveal">
              <div className="content">
                <div className="section-badge mb-3">
                  <span>CONTACT US</span>
                </div>
                <h2 style={{ fontSize: '2.4rem', marginBottom: 12 }}>{CLINIC_INFO.name}</h2>
                <p style={{ fontSize: '1.1rem', color: '#4b6363', marginBottom: 28 }}>
                  Contact Person: <strong>{CLINIC_INFO.contactPerson}</strong>
                </p>

                <div className="contact-info">
                  <div className="info-item">
                    <Phone size={20} />
                    <div>
                      <strong>Phone &amp; WhatsApp:</strong>{' '}
                      <a href={`tel:${CLINIC_INFO.phoneRaw}`}>{CLINIC_INFO.phoneDisplay}</a>
                    </div>
                  </div>

                  <div className="info-item">
                    <MapPin size={20} />
                    <div>
                      <strong>Address:</strong> {CLINIC_INFO.address.full}
                    </div>
                  </div>

                  <div className="info-item">
                    <Clock size={20} />
                    <div>
                      <strong>Timings:</strong> {CLINIC_INFO.hours}
                    </div>
                  </div>

                  <div className="info-item">
                    <ShieldCheck size={20} />
                    <div>
                      <strong>GSTIN:</strong> {CLINIC_INFO.gstin} &nbsp;|&nbsp;{' '}
                      <strong>Email:</strong> {CLINIC_INFO.email}
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 22 }}>
                  <a
                    href={CLINIC_INFO.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 12 }}
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink size={15} />
                  </a>
                  <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #d7e4e2' }}>
                    <iframe
                      title="Maa Health Care Therapy — Times Trade Center, Surat"
                      src={CLINIC_INFO.address.googleMapsEmbedUrl}
                      width="100%"
                      height="220"
                      style={{ border: 0, display: 'block' }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 reveal">
              <div className="contact-form">
                <h3 style={{ marginBottom: 18 }}>Book Demo / Rental / Purchase Enquiry</h3>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-4" style={{ rowGap: '1rem' }}>
                    <div className="col-12">
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="col-6">
                      <label className="form-label" htmlFor="mobile">Mobile Number *</label>
                      <input
                        id="mobile"
                        type="tel"
                        className="form-control"
                        placeholder="10-digit mobile"
                        value={form.mobile}
                        onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                        required
                      />
                    </div>

                    <div className="col-6">
                      <label className="form-label" htmlFor="bookingType">Enquiry Type *</label>
                      <select
                        id="bookingType"
                        className="form-control"
                        value={form.bookingType}
                        onChange={(e) => setForm({ ...form, bookingType: e.target.value })}
                        required
                      >
                        <option value="">Select Type</option>
                        <option value="Rent">Rent Booking (Postpartum / Home)</option>
                        <option value="Purchase">Purchase Mattress / Mat</option>
                        <option value="Advance">Advance Booking</option>
                        <option value="Demo">Live Demo Booking</option>
                      </select>
                    </div>

                    {form.bookingType === 'Rent' && (
                      <div className="col-12">
                        <label className="form-label">Delivery Type (If Postpartum)</label>
                        <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', fontSize: 14.5 }}>
                          <label><input type="radio" name="deliveryType" value="Normal Delivery" onChange={(e) => setForm({ ...form, deliveryType: e.target.value })} /> Normal Delivery</label>
                          <label><input type="radio" name="deliveryType" value="C-Section Delivery" onChange={(e) => setForm({ ...form, deliveryType: e.target.value })} /> C-Section Delivery</label>
                          <label><input type="radio" name="deliveryType" value="General Pain Relief" onChange={(e) => setForm({ ...form, deliveryType: e.target.value })} /> General Pain Relief</label>
                        </div>
                      </div>
                    )}

                    {form.bookingType === 'Advance' && (
                      <div className="col-12">
                        <label className="form-label" htmlFor="edd">Expected Delivery Date (EDD)</label>
                        <input
                          id="edd"
                          type="date"
                          className="form-control"
                          value={form.edd}
                          onChange={(e) => setForm({ ...form, edd: e.target.value })}
                        />
                      </div>
                    )}

                    {form.bookingType === 'Demo' && (
                      <div className="col-12">
                        <label className="form-label" htmlFor="demoCity">City for Demo</label>
                        <select
                          id="demoCity"
                          className="form-control"
                          value={form.demoCity}
                          onChange={(e) => setForm({ ...form, demoCity: e.target.value })}
                        >
                          <option value="Surat">Surat (Times Trade Center / Local)</option>
                          <option value="Ahmedabad">Ahmedabad</option>
                          <option value="Vadodara">Vadodara</option>
                          <option value="Rajkot">Rajkot</option>
                          <option value="Other">Other City</option>
                        </select>
                        {form.demoCity === 'Other' && (
                          <input
                            type="text"
                            className="form-control"
                            style={{ marginTop: 10 }}
                            placeholder="Enter your city"
                            value={form.otherCity}
                            onChange={(e) => setForm({ ...form, otherCity: e.target.value })}
                          />
                        )}
                      </div>
                    )}

                    <div className="col-6">
                      <label className="form-label" htmlFor="email">Email (Optional)</label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>

                    <div className="col-6">
                      <label className="form-label" htmlFor="preferredDate">Preferred Date</label>
                      <input
                        id="preferredDate"
                        type="date"
                        className="form-control"
                        value={form.preferredDate}
                        onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label" htmlFor="address">Address / Message</label>
                      <textarea
                        id="address"
                        className="form-control"
                        rows={3}
                        placeholder="Your area/address in Surat or product question..."
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                      />
                    </div>

                    {status.message && (
                      <div className="col-12">
                        <div
                          style={{
                            padding: '12px 14px',
                            borderRadius: 8,
                            fontSize: 14,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            background:
                              status.type === 'error'
                                ? '#fef2f2'
                                : status.type === 'success'
                                ? '#ecfdf5'
                                : '#eff6ff',
                            color:
                              status.type === 'error'
                                ? '#b91c1c'
                                : status.type === 'success'
                                ? '#047857'
                                : '#1d4ed8',
                          }}
                        >
                          <AlertCircle size={18} style={{ flexShrink: 0 }} />
                          <span>{status.message}</span>
                        </div>
                      </div>
                    )}

                    <div className="col-12">
                      <button type="submit" className="btn-submit" disabled={submitting}>
                        <Send size={17} />
                        <span>{submitting ? 'Sending...' : 'Send Enquiry via WhatsApp'}</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
