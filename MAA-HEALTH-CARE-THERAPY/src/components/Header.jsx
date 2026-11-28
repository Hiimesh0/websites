import { useState, useEffect } from 'react';
import { PhoneCall, MessageCircle, Menu, X, ChevronDown, Globe } from 'lucide-react';
import { CLINIC_INFO, TRANSLATIONS } from '../data/clinicData';

export default function Header({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: t.navHome },
    { href: '#about', label: t.navAbout },
    { href: '#products', label: t.navProducts },
    { href: '#services', label: t.navServices },
    { href: '#faq', label: t.navFaq },
    { href: '#contact', label: t.navContact },
  ];

  const langLabels = { en: 'English', hi: 'हिंदी', gu: 'ગુજરાતી' };

  return (
    <>
      <header id="header" className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-inner">
            <a href="#hero" className="logo" aria-label={CLINIC_INFO.name}>
              <img src="./images/logo.svg" alt="Maa Health Care Therapy Logo" />
            </a>

            <nav className="navmenu navmenu-desktop" aria-label="Main navigation">
              <ul>
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
                <li className="language-dropdown">
                  <button
                    type="button"
                    className="nav-link-btn"
                    onClick={() => setLangOpen((prev) => !prev)}
                    aria-expanded={langOpen}
                  >
                    <Globe size={15} />
                    <span>{langLabels[lang]}</span>
                    <ChevronDown size={14} />
                  </button>
                  {langOpen && (
                    <div className="dropdown-menu">
                      {Object.entries(langLabels).map(([code, label]) => (
                        <button
                          key={code}
                          type="button"
                          className={`dropdown-item ${lang === code ? 'active' : ''}`}
                          onClick={() => {
                            setLang(code);
                            setLangOpen(false);
                          }}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  )}
                </li>
              </ul>
            </nav>

            <div className="header-cta-group">
              <a
                className="btn-getstarted btn-green"
                href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Maa Health Care Therapy, I would like to enquire about your heating therapy mattresses.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} />
                <span>{t.whatsapp}</span>
              </a>

              <a
                className="btn-getstarted btn-blue btn-blue-desktop"
                href={`tel:${CLINIC_INFO.phoneRaw}`}
              >
                <PhoneCall size={16} />
                <span>{t.callNow}</span>
              </a>

              <button
                type="button"
                className="mobile-nav-toggle"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-drawer" onClick={() => setMobileOpen(false)}>
          <div className="mobile-drawer-panel" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <strong style={{ color: 'var(--heading-color)' }}>{CLINIC_INFO.name}</strong>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
              >
                <X size={22} />
              </button>
            </div>
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ))}
            <div style={{ marginTop: 8 }}>
              <div style={{ fontSize: 12, color: '#5b7272', marginBottom: 6 }}>Language</div>
              <div style={{ display: 'flex', gap: 6 }}>
                {Object.entries(langLabels).map(([code, label]) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    style={{
                      padding: '6px 10px',
                      borderRadius: 6,
                      border: '1px solid #d5e2e0',
                      background: lang === code ? 'var(--accent-color)' : '#fff',
                      color: lang === code ? '#fff' : 'var(--heading-color)',
                      cursor: 'pointer',
                      fontSize: 13,
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <a
              className="btn-getstarted btn-blue"
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              style={{ justifyContent: 'center', marginTop: 12 }}
            >
              <PhoneCall size={16} />
              <span>{CLINIC_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
