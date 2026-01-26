import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

const base = `${import.meta.env.BASE_URL}asset/images/AI育种:养殖/牡蛎苗`;
const heroBg = `${base}/背景1.jpg`;
const heroVideo = `${base}/视频1.mp4`;

const kpis = [
  { label: "Fertilization rate", value: ">85%" },
  { label: "Settlement rate", value: ">70%" },
  { label: "Survival uplift", value: "≈3x" },
  { label: "Annual output", value: "1B+ seeds" }
];

const flow = [
  { title: "Broodstock", desc: "Controlled maturation for year-round eggs", kpi: "All-season" },
  { title: "Precision hatch", desc: "Induced spawning + fertilization, >85%", kpi: ">85%" },
  { title: "Smart rearing", desc: "Water/temp/feed control, survival ≈3x", kpi: "≈3x" },
  { title: "Settlement", desc: "Dedicated devices, settlement >70%", kpi: ">70%" }
];

const valueCards = [
  { title: "Annual seed output", value: "1B+ pcs", note: "Modern hatchery center" },
  { title: "Seed sales", value: "CNY 70M+/yr", note: "2023 data" },
  { title: "Downstream value", value: "CNY 500M+", note: "Regional supply chain" }
];

const customerValues = [
  { title: "Lower cost", detail: "Yield per acre +≈300%" },
  { title: "Better quality", detail: "Premium price +≈15%" },
  { title: "Stable supply", detail: "All-season, multi-batch" }
];

const services = [
  "Site evaluation & retrofit",
  "Process optimization & SOP",
  "Training & onboarding",
  "Remote monitoring & alerts",
  "Brand traceability",
  "Facility & equipment planning"
];

export default function AiBreedingOyster() {
  return (
    <Layout lang="en">
      <section className="hero hero-splash oyster-hero">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-splash-overlay oyster-overlay"></div>
        <div className="container hero-content">
          <div className="hero-panel">
            <span className="tag">Tech-enabled · Rebuild the blue granary</span>
            <h1>Industrial Oyster Hatchery Solution</h1>
            <p>
              AI-driven standardized production replaces seasonal dependence: broodstock selection,
              precision hatch, smart larval rearing, and high-efficiency settlement—delivering traceable,
              stable oyster seed all year.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Partner / Visit
              </Link>
              <Link className="btn ghost" to="#ai-loop">
                View AI breeding loop
              </Link>
            </div>
            <div className="kpi-row">
              {kpis.map((item) => (
                <div key={item.label} className="kpi-pill">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight video-only">
        <div className="container reveal">
          <div className="video-center">
            <div className="media-frame shadow-deep">
              <video src={heroVideo} controls preload="metadata" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container reveal">
          <span className="eyebrow">Zone 1</span>
          <h2 className="section-title">Industrial 4-Step Flow</h2>
          <div className="flow-grid">
            {flow.map((step) => (
              <div key={step.title} className="flow-card">
                <div className="flow-badge">{step.kpi}</div>
                <strong>{step.title}</strong>
                <p className="text-on-soft mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container reveal">
          <span className="eyebrow">Zone 2</span>
          <h2 className="section-title">Business Proof · Real Numbers</h2>
          <div className="nm-grid nm-grid-3" style={{ gap: "16px" }}>
            {valueCards.map((item) => (
              <div key={item.title} className="card card-stack text-center">
                <strong>{item.title}</strong>
                <p className="text-2xl font-semibold text-primary">{item.value}</p>
                <p className="text-on-soft text-sm">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="value-strip">
            {customerValues.map((item) => (
              <div key={item.title} className="value-chip">
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight" id="ai-loop">
        <div className="container reveal ai-panel">
          <div>
            <span className="eyebrow">AI System · Closed Loop</span>
            <h3 className="section-title">Sensing → Modeling → Actuation → Traceability</h3>
            <ul className="list-disc ml-4 text-on-soft">
              <li>Sensing: temp, DO, salinity, pH, light, particles, larval behavior.</li>
              <li>Models: growth curve, settlement/survival prediction, feed & water optimization.</li>
              <li>Actuation: feeding / water exchange / aeration / lighting with remote override.</li>
              <li>Traceability: broodstock → fertilization → larva → settlement → delivery logs.</li>
            </ul>
          </div>
          <div className="ai-console">
            <div className="ai-widget">
              <strong>Water Quality Dashboard</strong>
              <p className="text-on-soft text-xs mt-1">Temp / salinity / DO / pH live curves</p>
            </div>
            <div className="ai-widget">
              <strong>Settlement Forecast</strong>
              <p className="text-on-soft text-xs mt-1">AI predicts settlement & survival ranges</p>
            </div>
            <div className="ai-widget">
              <strong>Alerts</strong>
              <p className="text-on-soft text-xs mt-1">Abnormal water, feeding, or stress signals</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight" id="specs">
        <div className="container nm-grid nm-grid-2 reveal">
          <div>
            <span className="eyebrow">Specs & Delivery</span>
            <h3 className="section-title">Project-based specifications</h3>
            <div className="chip-row">
              {["D-shaped larvae", "Settlement size", "Temp/Salinity", "Density & Survival", "Batch QR", "Delivery SOP"].map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
            <div className="card mt-4">
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td className="py-2 font-semibold">Size range</td>
                    <td className="py-2 text-on-soft">To be provided (larvae / post-set)</td>
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
                    <td className="py-2 text-on-soft">To be provided (hatchery / sea)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Survival rate</td>
                    <td className="py-2 text-on-soft">To be provided by stage</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Delivery</td>
                    <td className="py-2 text-on-soft">QC, QR traceability, on-site guidance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card card-stack">
            <strong>Delivery Flow</strong>
            <div className="stepper">
              {["Requirement", "Production", "QC & Trace", "Packaging", "On-site Support"].map((item) => (
                <div key={item} className="stepper-item">
                  <div className="step-dot"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <span className="eyebrow">Services</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {services.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-panel reveal">
          <div>
            <strong>Building or upgrading a hatchery line?</strong>
            <p className="text-on-soft mt-2">Share your target specs, capacity plan, and site conditions for a tailored plan.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link className="btn primary" to="/en/contact">
              Contact us
            </Link>
            <Link className="btn ghost" to="/en/ai-breeding/eel">
              Eel seed
            </Link>
            <Link className="btn ghost" to="/en/ai-breeding/pomfret">
              Pomfret seed
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
