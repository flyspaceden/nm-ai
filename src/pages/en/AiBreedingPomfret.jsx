import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

const base = `${import.meta.env.BASE_URL}asset/images/AI育种:养殖/黄特鲳苗`;
const heroBg = `${base}/图片1.png`;

const gallery = [
  { src: `${base}/图片1.png`, alt: "Pomfret hatchery pond" },
  { src: `${base}/图片2.png`, alt: "Grading operation" },
  { src: `${base}/图片3.png`, alt: "Packaging preparation" },
  { src: `${base}/图片4.png`, alt: "Grow-out density scene" }
];

const honors = [
  "2002 Yangjiang agricultural industrialization demo project",
  "2004 Key municipal project: oyster/fish embryo preservation tech",
  "2005 Tech award for premium marine seed breeding; Spark base implementation unit",
  "2007 Tech award: vibriosis immune prevention",
  "2008 Guangdong Healthy Agriculture demo base",
  "2010 Key local project: premium yellow drum seed breeding",
  "2011 Guangdong private science & tech enterprise",
  "2012 Food safety demo unit & aquaculture safety site",
  "2013 National pollution-free origin/product",
  "2014 Talent work demonstration site (Yangjiang)",
  "2016 Tech progress award (third prize)",
  "2017 China Innovation & Entrepreneurship Competition (Yangjiang) award",
  "2018 Academician workstation practice base; engineering tech center",
  "2020 Guangdong PhD workstation",
  "2002-2021 Vice-chair unit of Jiezpo cage aquaculture association",
  "2021 Vice-chair unit of marine seed industry innovation association",
  "2023 Vice-chair unit of seed industry development association"
];

export default function AiBreedingPomfret() {
  return (
    <Layout lang="en">
      <section className="hero hero-splash">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-splash-overlay"></div>
        <div className="container hero-content">
          <div>
            <span className="tag">AI breeding / Pomfret seed · Stable batches · Traceable</span>
            <h1>Pomfret Seed</h1>
            <p>Data-driven selection and hatchery loop from broodstock to delivery, suitable for cages and ponds.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Order / Visit
              </Link>
              <Link className="btn ghost" to="#ai-loop">
                View AI breeding loop
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
            <p>Grading + water/density logs; each batch ships with traceability docs.</p>
          </div>
          <div className="card card-stack">
            <strong>Use Scenarios</strong>
            <p>Deep-sea cages, ponds, and demo bases with acclimation support.</p>
          </div>
        </div>
      </section>

      <section className="section section-tight" id="media">
        <div className="container reveal">
          <span className="eyebrow">Gallery</span>
          <h2 className="section-title">Key frames from hatchery to delivery</h2>
          <div className="gallery-grid" style={{ marginTop: "20px" }}>
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
            <h3 className="section-title">Key parameters & delivery</h3>
            <div className="card">
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td className="py-2 font-semibold">Size range</td>
                    <td className="py-2 text-on-soft">To be provided (cm / pcs)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Temp / Salinity</td>
                    <td className="py-2 text-on-soft">To be provided (xx–xx ℃, xx‰)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">DO &amp; Water</td>
                    <td className="py-2 text-on-soft">To be provided (DO ≥ x mg/L, NH3-N ≤ x mg/L)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Density</td>
                    <td className="py-2 text-on-soft">To be provided (cage / pond)</td>
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
              <li>Selection & grading: batch metrics & sampling</li>
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
            <h3 className="section-title">Broodstock → Hatchery → Grading → Delivery</h3>
            <ul className="list-disc ml-4 text-on-soft">
              <li>Sensing: temperature, DO, salinity, current, video behavior.</li>
              <li>Models: growth curve, trait comparison, abnormal schooling alerts.</li>
              <li>Actuation: feeding / aeration / water scheduling with override.</li>
              <li>Traceability: QR codes link broodstock, hatchery logs, and delivery records.</li>
            </ul>
          </div>
          <div className="card card-stack">
            <strong>Value</strong>
            <p className="text-on-soft">Reduce variability, improve batch consistency, and secure arrival performance.</p>
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

      <section className="section section-tight" id="hongyun">
        <div className="container reveal">
          <span className="eyebrow">Partner Endorsement</span>
          <h3 className="section-title">Hongyun Seed · Company Overview</h3>
          <div className="nm-grid nm-grid-3" style={{ gap: "16px" }}>
            <div className="card card-stack">
              <strong>Founded</strong>
              <p className="text-on-soft">1999, focus on marine seed breeding.</p>
            </div>
            <div className="card card-stack">
              <strong>Scale</strong>
              <p className="text-on-soft">16,000㎡ cages (132 units), 15 deep-water cages; 100+ acres across bases.</p>
            </div>
            <div className="card card-stack">
              <strong>Capacity</strong>
              <p className="text-on-soft">20+ broodstock species, ~43,000 fish; 4,200+ kg eggs, 25M+ fry yearly.</p>
            </div>
          </div>
          <div className="card card-stack mt-4">
            <strong>Species & model</strong>
            <p className="text-on-soft">
              Golden pomfret, large yellow croaker, white flower croaker, grouper, seabass and more,
              covering “seed base + farming base + technical service”.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container reveal">
          <span className="eyebrow">Honors</span>
          <h3 className="section-title">2002 — 2023 Milestones</h3>
          <div className="timeline">
            {honors.map((item) => (
              <div key={item} className="timeline-item">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card card-stack reveal">
          <strong>Need pomfret seed specs or pricing?</strong>
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
