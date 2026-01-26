import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

const heroBg = `${import.meta.env.BASE_URL}asset/images/AI育种:养殖/背景.png`;

export default function AiBreeding() {
  return (
    <Layout lang="en">
      <section className="hero hero-splash">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-splash-overlay"></div>
        <div className="container hero-content">
          <div>
            <span className="tag">Digital broodstock · Smart hatchery · Full traceability</span>
            <h1>AI Breeding & Aquaculture Center</h1>
            <p>
              Focused on three core species—oyster, eel, and pomfret—with end-to-end workflows from
              broodstock selection and hatchery to smart grow-out and traceable delivery.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Book a Visit / Partner
              </Link>
              <Link className="btn ghost" to="/en/ai-breeding/oyster">
                View seed catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card card-stack">
            <strong>3 Species</strong>
            <p>Dedicated flows for oyster, eel, and pomfret with clear specs and delivery standards.</p>
          </div>
          <div className="card card-stack">
            <strong>AI Core</strong>
            <p>Four-layer stack: data capture → feature extraction → decisions → actuation.</p>
          </div>
          <div className="card card-stack">
            <strong>Traceability</strong>
            <p>Batch QR codes tie broodstock info, hatchery logs, water/feed data, and deliveries.</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container reveal">
          <span className="eyebrow">Page Blueprint</span>
          <h2 className="section-title">Structure to populate for each species</h2>
          <div className="matrix-grid" style={{ marginTop: "20px" }}>
            <div className="matrix-card">
              <strong>Key value</strong>
              <p>Summarize advantages, scale, and supply rhythm in 3–4 bullets.</p>
            </div>
            <div className="matrix-card">
              <strong>Specs</strong>
              <p>Water temp, salinity, density, survival rate presented in a simple table.</p>
            </div>
            <div className="matrix-card">
              <strong>Use cases</strong>
              <p>R&D co-dev, demo farms, and contract grow-out with CTA.</p>
            </div>
            <div className="matrix-card">
              <strong>Delivery & service</strong>
              <p>Lead time, QA, support flow, and warranty policies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-2 reveal">
          <div>
            <span className="eyebrow">Data & Device Flow</span>
            <h3 className="section-title">Extensible AI pipeline</h3>
            <ul className="list-disc ml-4 text-on-soft">
              <li>Sensing: water quality, video behavior, feeding logs.</li>
              <li>Models: growth prediction, health alerts, feed/energy optimization.</li>
              <li>Actuation: aeration / water exchange / feeding automation with overrides.</li>
              <li>Ops: batch reports, alerts, visitor dashboard, QR traceability.</li>
            </ul>
          </div>
          <div className="card card-stack">
            <strong>Next step</strong>
            <p>Share your specs, cases, and delivery requirements to finalize each page.</p>
            <div className="flex gap-2">
              <Link className="btn ghost" to="/en/ai-breeding/oyster">
                Oyster seed
              </Link>
              <Link className="btn ghost" to="/en/ai-breeding/eel">
                Eel seed
              </Link>
              <Link className="btn ghost" to="/en/ai-breeding/pomfret">
                Pomfret seed
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
