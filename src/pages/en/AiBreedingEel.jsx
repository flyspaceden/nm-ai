import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

const base = `${import.meta.env.BASE_URL}asset/images/AI育种:养殖/黄鳝苗`;

const heroBg = `${base}/图片1.jpg`;

const gallery = [
  { src: `${base}/图片1.jpg`, alt: "Eel seed pond environment" },
  { src: `${base}/图片2.jpg`, alt: "Grading and sampling" },
  { src: `${base}/图片3.jpg`, alt: "Density and health check" },
  { src: `${base}/图片4.jpg`, alt: "Packaging preparation" },
  { src: `${base}/图片5.jpg`, alt: "On-site QC and handling" }
];

const videos = [
  { src: `${base}/视频1.mp4`, title: "Hatchery scene", desc: "Daily water management and inspection flow." },
  { src: `${base}/视频2.mp4`, title: "Grading & packing", desc: "Key steps from grading to shipment.", poster: `${base}/图片4.jpg` }
];

export default function AiBreedingEel() {
  return (
    <Layout lang="en">
      <section className="hero hero-splash">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-splash-overlay"></div>
        <div className="container hero-content">
          <div>
            <span className="tag">AI breeding / Eel seed · Stable batches · Traceable</span>
            <h1>Eel Seed</h1>
            <p>Data-driven breeding and nursery flow links sensing, modeling, actuation, and traceability for stable batches and safe delivery.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Order / Visit
              </Link>
              <Link className="btn ghost" to="#ai-loop">
                View AI control loop
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card card-stack">
            <strong>Specs & Supply</strong>
            <p>Multi-size grading with stable batches and planned production capacity.</p>
          </div>
          <div className="card card-stack">
            <strong>Quality & QC</strong>
            <p>Grading + water & density logs; each batch ships with traceability code.</p>
          </div>
          <div className="card card-stack">
            <strong>Delivery & Service</strong>
            <p>Packaging, logistics, and acclimation guidance; optional alerting.</p>
          </div>
        </div>
      </section>

      <section className="section section-tight" id="media">
        <div className="container reveal">
          <span className="eyebrow">On-site</span>
          <h2 className="section-title">Video + Gallery</h2>
          <div className="nm-grid nm-grid-2" style={{ gap: "18px", marginTop: "16px" }}>
            {videos.map((item) => (
              <div key={item.src} className="card card-stack">
                <div className="media-frame">
                  <video src={item.src} poster={item.poster} controls preload="metadata" />
                </div>
                <div className="flex flex-col gap-1">
                  <strong>{item.title}</strong>
                  <p className="text-on-soft text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="gallery-grid" style={{ marginTop: "22px" }}>
            {gallery.map((item) => (
              <div key={item.src} className="gallery-item">
                <div className="gallery-media">
                  <img src={item.src} alt={item.alt} />
                </div>
                <div className="gallery-caption">
                  <strong>{item.alt}</strong>
                  <span className="text-xs text-on-soft block mt-1">On-site</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight" id="specs">
        <div className="container nm-grid nm-grid-2 reveal">
          <div>
            <span className="eyebrow">Specs & Delivery</span>
            <h3 className="section-title">Key parameters & acclimation</h3>
            <div className="card">
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td className="py-2 font-semibold">Size range</td>
                    <td className="py-2 text-on-soft">To be provided (cm / pcs)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Water temp</td>
                    <td className="py-2 text-on-soft">To be provided (xx–xx ℃)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">DO &amp; water</td>
                    <td className="py-2 text-on-soft">To be provided (DO ≥ x mg/L, NH3-N ≤ x mg/L)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Density</td>
                    <td className="py-2 text-on-soft">To be provided (by system)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Survival rate</td>
                    <td className="py-2 text-on-soft">To be provided (pre/post acclimation)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Delivery</td>
                    <td className="py-2 text-on-soft">QC, QR traceability, acclimation support</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card card-stack">
            <strong>Delivery Flow</strong>
            <ul className="list-disc ml-4 text-on-soft">
              <li>Requirement: size / volume / arrival time</li>
              <li>Production & grading: batch logs & sampling</li>
              <li>QC & trace: water, density, inspection records</li>
              <li>Packaging & logistics: oxygen & temp control</li>
              <li>Acclimation: remote/on-site guidance</li>
            </ul>
            <div>
              <span className="eyebrow">Services</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Acclimation guide", "Water diagnostics", "Density/feeding optimization", "Batch QR", "Alerting"].map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="ai-loop">
        <div className="container nm-grid nm-grid-2 reveal">
          <div>
            <span className="eyebrow">AI Pipeline</span>
            <h3 className="section-title">Sensing → Modeling → Actuation → Traceability</h3>
            <ul className="list-disc ml-4 text-on-soft">
              <li>Sensing: temperature, DO, ammonia, pH, video behavior.</li>
              <li>Models: growth prediction, feeding optimization, health alerts.</li>
              <li>Actuation: aeration / water exchange / feeding with overrides.</li>
              <li>Traceability: batch QR linked to hatchery logs and QC.</li>
            </ul>
          </div>
          <div className="card card-stack">
            <strong>Closed-loop value</strong>
            <p className="text-on-soft">Reduce variability, shorten acclimation time, and deliver consistent batches with alerts.</p>
            <div className="flex gap-2">
              <Link className="btn ghost" to="/en/ai-breeding">
                Back to catalog
              </Link>
              <Link className="btn primary" to="/en/contact">
                Get a plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card card-stack reveal">
          <strong>Need eel seed specs or pricing?</strong>
          <p className="text-on-soft">Share size, timing, and culture mode—we’ll prepare a batch plan.</p>
          <div className="flex gap-2">
            <Link className="btn primary" to="/en/contact">
              Contact
            </Link>
            <Link className="btn ghost" to="/en/ai-breeding">
              Other species
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
