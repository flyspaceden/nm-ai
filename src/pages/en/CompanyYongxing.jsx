import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function CompanyYongxing() {
  const imageBase = `${import.meta.env.BASE_URL}asset/images/公司/阳江市永兴水产养殖`;
  const basePath = `${imageBase}/资质`;
  const heroBg = `${imageBase}/图片1.jpg`;
  const pondImages = [
    `${imageBase}/图片2.jpg`,
    `${imageBase}/图片3.jpg`,
    `${imageBase}/图片4.jpg`,
    `${imageBase}/图片5.png`
  ];
  const zhenpinCerts = Array.from({ length: 14 }, (_, index) =>
    `${basePath}/10.14个圳品证书合集_${String(index).padStart(2, "0")}.png`
  );
  const trademarkCerts = [
    `${basePath}/商标注册证（兴倩达29类）_68598547_1687990756247_00.png`,
    `${basePath}/商标注册证（兴倩达31类）_68596588_1687204675733_00.png`,
    `${basePath}/商标注册证（兴通遂31类）_68599483_1687896157640_00.png`
  ];
  const honorCerts = [
    `${basePath}/资质荣誉_00.png`,
    `${basePath}/资质荣誉_01.png`,
    `${basePath}/资质荣誉_02.png`,
    `${basePath}/资质荣誉_03.png`
  ];
  const [lightbox, setLightbox] = useState({ open: false, src: "", alt: "" });

  useEffect(() => {
    document.body.style.overflow = lightbox.open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox.open]);

  const openLightbox = (src, alt) => setLightbox({ open: true, src, alt });
  const closeLightbox = () => setLightbox({ open: false, src: "", alt: "" });

  return (
    <Layout lang="en" ctaLabel="Procurement" ctaTo="/en/contact">
      <section className="hero hero-splash">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-splash-overlay"></div>
        <div className="container hero-content">
          <div>
            <span className="tag">Greater Bay Area Supply Backbone</span>
            <h1>Guangdong Yangjiang Yongxing Aquaculture</h1>
            <p>Founded in 2005 with 4,200 mu standardized ponds, 1,300 mu tidal flats, and 30,000 m³ factory farming water.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Procurement
              </Link>
              <Link className="btn ghost" to="/en/company/partners">
                Partnerships
              </Link>
            </div>
            <div className="metrics">
              <div className="metric">
                <strong>4,200 mu</strong>
                <span>Standard ponds</span>
              </div>
              <div className="metric">
                <strong>1,300 mu</strong>
                <span>Tidal flats</span>
              </div>
              <div className="metric">
                <strong>5,000 tons</strong>
                <span>Annual output</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container reveal">
          <span className="eyebrow">On-site Ponds</span>
          <h2 className="section-title">Farm Ponds & Facilities</h2>
          <p className="section-subtitle">Current views of the Pingang farm ponds and infrastructure.</p>
          <div className="cert-grid" style={{ marginTop: "18px" }}>
            {pondImages.map((src, index) => (
              <div className="cert-card" key={src}>
                <button type="button" onClick={() => openLightbox(src, `Farm pond ${index + 1}`)}>
                  <img src={src} alt={`Farm pond ${index + 1}`} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <span className="eyebrow">Leadership</span>
            <h2 className="section-title">Chairman Huang Chuangzhi</h2>
            <p className="section-subtitle">A pioneer in aquaculture trade since the early reform era, investing RMB 100 million in the 1990s to build the Pingang aquaculture base.</p>
          </div>
          <div className="card">
            <strong>Industry Impact</strong>
            <ul className="mt-4 grid gap-3 text-on-muted">
              <li>Advised aquaculture projects in dozens of countries.</li>
              <li>40 years of supply chain and export experience.</li>
              <li>Vice President of Shenzhen Aquatic Products Association, Executive Chairman in Yangjiang.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Trust Pillars</span>
          <h2 className="section-title">Why Trusted</h2>
          <div className="nm-grid nm-grid-4 reveal" style={{ marginTop: "24px" }}>
            <div className="card">
              <strong>Compliance</strong>
              <p>Customs registered and supervised by HK authorities.</p>
            </div>
            <div className="card">
              <strong>Testing System</strong>
              <p>Multi-checkpoints and third-party on-site testing.</p>
            </div>
            <div className="card">
              <strong>Traceability</strong>
              <p>Batch records, flow tracking, and daily certificates.</p>
            </div>
            <div className="card">
              <strong>Stable Supply</strong>
              <p>Serving Shenzhen 40+ years and Hong Kong 38+ years.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Certifications</span>
          <h2 className="section-title">Certificates & Honors</h2>
          <p className="section-subtitle">Grouped by category for quick review.</p>

          <div className="reveal" style={{ marginTop: "24px" }}>
            <strong>Shenzhen “Zhenpin” Certificates (14)</strong>
            <div className="cert-grid" style={{ marginTop: "12px" }}>
              {zhenpinCerts.map((src, index) => (
                <div className="cert-card" key={src}>
                  <button type="button" onClick={() => openLightbox(src, `Zhenpin certificate ${index + 1}`)}>
                    <img src={src} alt={`Zhenpin certificate ${index + 1}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ marginTop: "24px" }}>
            <strong>Trademark Registrations (3)</strong>
            <div className="cert-grid" style={{ marginTop: "12px" }}>
              {trademarkCerts.map((src, index) => (
                <div className="cert-card" key={src}>
                  <button type="button" onClick={() => openLightbox(src, `Trademark certificate ${index + 1}`)}>
                    <img src={src} alt={`Trademark certificate ${index + 1}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ marginTop: "24px" }}>
            <strong>Honors (4)</strong>
            <div className="cert-grid" style={{ marginTop: "12px" }}>
              {honorCerts.map((src, index) => (
                <div className="cert-card" key={src}>
                  <button type="button" onClick={() => openLightbox(src, `Honor certificate ${index + 1}`)}>
                    <img src={src} alt={`Honor certificate ${index + 1}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>Products</strong>
            <p>14 product lines certified as Shenzhen “Zhenpin”.</p>
            <p>Fish: eel, grass carp, tilapia, crucian, seabass, silver carp, yellow catfish, mullet.</p>
            <p>Shellfish: mussels, clams, blood clams (from Hailing Island).</p>
          </div>
          <div className="card">
            <strong>Farming Technique</strong>
            <p>Brackish-water farming for improved texture and clean taste.</p>
            <p>Standardized management and eco-friendly practices.</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Channel Map</span>
          <h2 className="section-title">Key Channels & Partners</h2>
          <div className="logo-wall reveal" style={{ marginTop: "24px" }}>
            <div className="logo-card">Buji Wholesale Market</div>
            <div className="logo-card">Dingdong Grocery</div>
            <div className="logo-card">Pupu Supermarket</div>
            <div className="logo-card">Meituan Grocery</div>
            <div className="logo-card">RT-Mart</div>
            <div className="logo-card">Hema Fresh</div>
            <div className="logo-card">Rainbow</div>
            <div className="logo-card">Hong Kong Markets</div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Traceability Flow</span>
          <h2 className="section-title">Quality & Traceability Flow</h2>
          <div className="steps-grid reveal" style={{ marginTop: "24px" }}>
            <div className="step-card">
              <strong>Production Records</strong>
              <p>Full process logging and accountability.</p>
            </div>
            <div className="step-card">
              <strong>Pre-harvest Testing</strong>
              <p>Key indicators checked before harvest.</p>
            </div>
            <div className="step-card">
              <strong>Third-party Checks</strong>
              <p>On-site testing by third-party agencies.</p>
            </div>
            <div className="step-card">
              <strong>Pre-delivery Testing</strong>
              <p>Additional checks before delivery.</p>
            </div>
            <div className="step-card">
              <strong>Daily Certificates</strong>
              <p>Compliance certificates uploaded daily.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI + Aquaculture</span>
          <h2 className="section-title">Smart Farming Roadmap</h2>
          <p className="section-subtitle">HACCP processing and digital traceability upgrades to expand export markets.</p>
          <ul>
            <li>HACCP processing plant planning (showcase).</li>
            <li>IoT + AI monitoring for real-time control.</li>
            <li>Full-chain traceability and brand trust.</li>
          </ul>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container cta-panel reveal">
          <div>
            <strong>Procurement / Partnerships / Visits</strong>
            <p>Submit your needs and we will respond within 1 business day.</p>
          </div>
          <div className="hero-actions">
            <Link className="btn primary" to="/en/contact">
              Procurement
            </Link>
            <Link className="btn ghost" to="/en/company/partners">
              Partnerships
            </Link>
          </div>
        </div>
      </section>
      {lightbox.open ? (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <div className="lightbox-inner" onClick={(event) => event.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <button className="lightbox-close" type="button" onClick={closeLightbox} aria-label="Close">
              ×
            </button>
          </div>
        </div>
      ) : null}
    </Layout>
  );
}
