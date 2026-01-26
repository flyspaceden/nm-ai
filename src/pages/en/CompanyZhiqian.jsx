import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function CompanyZhiqian() {
  const imageBase = `${import.meta.env.BASE_URL}asset/images/公司/智倩达公司`;
  const heroBg = `${imageBase}/图片2.jpg`;
  const baseImage = `${imageBase}/图片1.jpg`;
  const videos = [
    { src: `${imageBase}/视频1.mp4`, title: "Base overview" },
    { src: `${imageBase}/视频2.mp4`, title: "Harvest & QC" },
    { src: `${imageBase}/视频3.mp4`, title: "Cold-chain & HK supply" }
  ];

  const milestones = [
    "2006: Founded in Luohu, Shenzhen",
    "2007: Yangjiang branch established, standard farming starts",
    "2014: Recognized as Shenzhen “vegetable basket” base",
    "2019: First batch of “Shenzhen Quality (圳品)” — 11 items",
    "2023: +3 items, total 14 certified products",
    "2024: Strengthen standardization, “Beautiful Fishery” pioneer"
  ];

  return (
    <Layout lang="en" ctaLabel="Procurement" ctaTo="/en/contact">
      <section className="hero hero-splash">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-splash-overlay"></div>
        <div className="container hero-content">
          <div>
            <span className="tag">HK live-fish registered · GBA “vegetable basket” base</span>
            <h1>Shenzhen Zhiqian Agricultural Technology Development Co., Ltd.</h1>
            <p>
              Founded in 2006 with HQ in Shenzhen and a major base in Yangjiang. A fully integrated
              aquaculture and trading enterprise building a traceable, AI-enabled supply chain.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Procurement
              </Link>
              <Link className="btn ghost" to="/en/contact">
                Visit the Base
              </Link>
            </div>
            <div className="metrics">
              <div className="metric">
                <strong>5,000 t/yr</strong>
                <span>Annual output</span>
              </div>
              <div className="metric">
                <strong>CNY 220M/yr</strong>
                <span>Annual value</span>
              </div>
              <div className="metric">
                <strong>40+ yrs</strong>
                <span>Supply to Shenzhen</span>
              </div>
              <div className="metric">
                <strong>38+ yrs</strong>
                <span>Supply to HK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container reveal">
          <span className="eyebrow">Base Footage</span>
          <h2 className="section-title">3 Videos · Real production</h2>
          <div className="nm-grid nm-grid-3" style={{ marginTop: "18px" }}>
            {videos.map((item) => (
              <div key={item.src} className="card card-stack">
                <div className="media-frame">
                  <video src={item.src} controls preload="metadata" />
                </div>
                <strong className="block">{item.title}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card card-stack">
            <span className="eyebrow">Company Scale</span>
            <h2 className="section-title">Overview & positioning</h2>
            <p className="section-subtitle">
              A full-chain supplier committed to green, eco-friendly and healthy aquatic products.
            </p>
            <ul className="grid gap-3 text-on-muted">
              <li>Second HK live-fish registered enterprise recognized by Guangdong Customs.</li>
              <li>Key “vegetable basket” base for Shenzhen and the Greater Bay Area.</li>
              <li>Daily supply exceeds 10,000 jin.</li>
            </ul>
          </div>
          <div className="card card-stack">
            <strong>Milestones</strong>
            <div className="timeline">
              {milestones.map((item) => (
                <div key={item} className="timeline-item">
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card card-stack">
            <span className="eyebrow">Yangjiang “Beautiful Fishery”</span>
            <h2 className="section-title">Base scale & advantages</h2>
            <p className="section-subtitle">
              Yongxing base in Pingang Farm, Yangjiang; about 3 hours to Shenzhen after the
              Shenzhen–Zhongshan Link.
            </p>
            <div className="metrics">
              <div className="metric">
                <strong>4,200 mu</strong>
                <span>Intensive ponds</span>
              </div>
              <div className="metric">
                <strong>1,300 mu</strong>
                <span>Tidal flats</span>
              </div>
              <div className="metric">
                <strong>30,000 m³</strong>
                <span>Industrial water body</span>
              </div>
            </div>
            <ul className="grid gap-3 text-on-muted">
              <li>Brackish water reduces bacteria & parasites, improves collagen content.</li>
              <li>Firmer texture, lower fat, no muddy taste, tender mouthfeel.</li>
              <li>Shellfish sourced from Hailing Island (mussels, clams).</li>
            </ul>
          </div>
          <div className="card card-stack">
            <img src={baseImage} alt="Zhiqian base" className="rounded-2xl" />
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card card-stack">
            <strong>Certified Fish (圳品)</strong>
            <p>Eel, tilapia, grass carp, bighead carp, silver carp, crucian carp, yellow catfish, perch, mullet, yellow pomfret.</p>
            <p className="text-on-soft">Eel is DHA-rich; tilapia is thick and low-bone.</p>
          </div>
          <div className="card card-stack">
            <strong>Shrimp, Crab & Shellfish (圳品)</strong>
            <p>Mud crab, whiteleg shrimp, clams, mussels.</p>
            <p className="text-on-soft">Mud crab is prized for rich roe; clams are known for freshness.</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Quality Control</span>
          <h2 className="section-title">Safety & traceability system</h2>
          <div className="logo-wall reveal" style={{ marginTop: "20px" }}>
            <div className="logo-card">ISO9001 Quality</div>
            <div className="logo-card">ISO14001 Environment</div>
            <div className="logo-card">ISO22000 Food Safety</div>
            <div className="logo-card">HACCP</div>
          </div>
          <div className="steps-grid reveal" style={{ marginTop: "24px" }}>
            <div className="step-card">
              <strong>On-base quick test</strong>
              <p>Daily checks before harvest.</p>
            </div>
            <div className="step-card">
              <strong>Third-party testing</strong>
              <p>Quantitative testing every two months.</p>
            </div>
            <div className="step-card">
              <strong>Customs oversight</strong>
              <p>HK FEHD supervision; 100% pass rate.</p>
            </div>
            <div className="step-card">
              <strong>Digital traceability</strong>
              <p>Daily compliance certificates, trackable flow.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Channel Map</span>
          <h2 className="section-title">Partners & sales network</h2>
          <div className="logo-wall reveal" style={{ marginTop: "24px" }}>
            <div className="logo-card">Hema</div>
            <div className="logo-card">Dingdong</div>
            <div className="logo-card">Meituan</div>
            <div className="logo-card">RT-Mart</div>
            <div className="logo-card">Rainbow</div>
            <div className="logo-card">Pupu</div>
            <div className="logo-card">Shenzhen Buji Market</div>
            <div className="logo-card">HK Cheung Sha Wan</div>
            <div className="logo-card">Jiumaojiu</div>
            <div className="logo-card">79 Fishing Ground</div>
            <div className="logo-card">Demi Hotpot</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">Future Plan</span>
          <h2 className="section-title">Smart fishery roadmap</h2>
          <p className="section-subtitle">Digital fishery with big data, IoT, and AI; deeper processing and full-chain integration.</p>
          <ul>
            <li>Build HK-standard fresh-cut processing facility.</li>
            <li>AI/IoT real-time monitoring across the farm.</li>
            <li>End-to-end integration: seed → farming → processing → storage → sales.</li>
          </ul>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container cta-panel reveal">
          <div>
            <strong>Procurement / Channel partnership / Visits</strong>
            <p>Submit requirements and we’ll respond within 1 business day.</p>
          </div>
          <div className="hero-actions">
            <Link className="btn primary" to="/en/contact">
              Procurement
            </Link>
            <Link className="btn ghost" to="/en/company/partners">
              Partnership
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
