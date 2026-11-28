import { X, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function ModalLightbox({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(3, 26, 26, 0.78)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: 16,
          maxWidth: 680,
          width: '100%',
          overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '14px 20px',
            borderBottom: '1px solid #e6efef',
          }}
        >
          <div>
            <h3 style={{ margin: 0, fontSize: 18 }}>{item.title}</h3>
            {item.subtitle && (
              <p style={{ margin: 0, fontSize: 13, color: '#5b7272' }}>{item.subtitle}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            style={{
              background: '#f0f6f5',
              border: 'none',
              borderRadius: '50%',
              width: 34,
              height: 34,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ background: '#f6faf9', padding: 20, textAlign: 'center' }}>
          <img
            src={item.image}
            alt={item.title}
            style={{ maxHeight: 380, margin: '0 auto', objectFit: 'contain' }}
          />
        </div>

        <div
          style={{
            padding: '14px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 10,
            background: '#ffffff',
          }}
        >
          <span style={{ fontSize: 13, color: '#5b7272' }}>
            Need a live video or office demo? Contact {CLINIC_INFO.contactPerson}.
          </span>
          <a
            href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
              `Hello Maa Health Care Therapy, I would like a live demo / details for: ${item.title}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-getstarted btn-green"
          >
            <MessageCircle size={15} />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
