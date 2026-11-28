import { Play, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/clinicData';

export default function ReviewsAndDemoSections({ onOpenMedia }) {
  return (
    <>
      {/* Product & Clinic Gallery Scroller (Matches Coolma Section 2) */}
      <section id="gallery" className="section">
        <div className="container">
          <div className="section-title reveal">
            <span className="description-title">Clinic &amp; Products</span>
            <h2>Clinic &amp; Product Gallery</h2>
            <p>
              Explore our Ceratonic Heating Mattress, 1092 Jade Stone Mattress, and Times Trade Center office in Surat (placeholder illustrations until client photos are uploaded)
            </p>
          </div>

          <div className="media-strip">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                className="iframe2div"
                onClick={() => onOpenMedia(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onOpenMedia(item)}
              >
                <div className="media-thumb">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="media-caption">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4>{item.title}</h4>
                    <ZoomIn size={15} style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
                  </div>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How To Use / Demonstration Scroller (Matches Coolma Section 3) */}
      <section id="demonstration" className="section" style={{ paddingTop: 10 }}>
        <div className="container">
          <div className="section-title reveal">
            <span className="description-title">How To Use</span>
            <h2>How To Use &amp; Live Demo</h2>
            <p>
              Simple 4-step setup and controlled thermal operation — book a live demonstration at our Surat office or enquire for home guidance
            </p>
          </div>

          <div className="media-strip">
            {[
              {
                title: '01. Place Mat on Bed or Sofa',
                subtitle: 'Lay the flexible therapy mat or mattress flat on any bed, sofa, or floor.',
                image: './images/product-mat-therapy.svg',
              },
              {
                title: '02. Set Temperature Controller',
                subtitle: 'Adjust the electric controller to your preferred gentle or deep warmth level.',
                image: './images/product-mat-detail.svg',
              },
              {
                title: '03. Jade & Ceratonic Heat',
                subtitle: '1092 Jade stones & Ceratonic discs radiate uniform, smokeless Far Infrared warmth.',
                image: './images/product-jade-detail.svg',
              },
              {
                title: '04. Relax & Recover Safely',
                subtitle: 'Ideal for evening relaxation and postpartum warmth (subject to doctor advice).',
                image: './images/product-ceratonic-detail.svg',
              },
            ].map((demo, idx) => (
              <div
                key={idx}
                className="iframe2div"
                onClick={() => onOpenMedia(demo)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onOpenMedia(demo)}
              >
                <div className="media-thumb" style={{ position: 'relative' }}>
                  <img src={demo.image} alt={demo.title} loading="lazy" />
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 10,
                      right: 10,
                      background: 'var(--accent-color)',
                      color: '#fff',
                      borderRadius: '50%',
                      width: 34,
                      height: 34,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Play size={15} />
                  </span>
                </div>
                <div className="media-caption">
                  <h4>{demo.title}</h4>
                  <p>{demo.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
