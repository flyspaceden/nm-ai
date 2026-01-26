import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

const base = `${import.meta.env.BASE_URL}asset/images/AI育种:养殖/牡蛎苗`;
const heroBg = `${base}/背景1.jpg`;
const heroVideo = `${base}/视频1.mp4`;

const kpis = [
  { label: "受精率", value: ">85%" },
  { label: "附苗率", value: ">70%" },
  { label: "成活率提升", value: "≈3倍" },
  { label: "年产能案例", value: "10亿+片" }
];

const flow = [
  { title: "亲本优育", desc: "可控环境促熟，全年卵源稳定", kpi: "全年稳定" },
  { title: "高精孵化", desc: "催产+授精，受精率>85%", kpi: ">85%" },
  { title: "智能培育", desc: "水/温/饵精控，成活率≈3倍", kpi: "≈3x" },
  { title: "高效附苗", desc: "专用附苗器，附苗率>70%", kpi: ">70%" }
];

const valueCards = [
  { title: "年产优质苗种", value: "10亿+ 片", note: "现代化育苗中心" },
  { title: "苗种销售额", value: "7000万+ /年", note: "2023 数据" },
  { title: "带动下游产值", value: "5亿元+", note: "区域供应链" }
];

const customerValues = [
  { title: "降本", detail: "亩产效益提升≈300%" },
  { title: "提质", detail: "抗逆性强，溢价≈15%" },
  { title: "稳供", detail: "全天候、多批次生产" }
];

const services = [
  "场地评估与改造",
  "工艺调优与SOP",
  "人员培训与陪跑",
  "远程监控与预警",
  "品牌共建与溯源",
  "车间/设备配置方案"
];

export default function AiBreedingOyster() {
  return (
    <Layout lang="zh">
      <section className="hero hero-splash oyster-hero">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-splash-overlay oyster-overlay"></div>
        <div className="container hero-content">
          <div className="hero-panel">
            <span className="tag">科技赋能 · 重塑蓝色粮仓根基</span>
            <h1>牡蛎种苗工业化孵化解决方案</h1>
            <p>用 AI 驱动的标准化工厂流程，替代对自然季节的依赖：亲本优育、高精孵化、智能培育、高效附苗，全年稳定产出可追溯的优质牡蛎苗。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                洽谈合作 / 预约参观
              </Link>
              <Link className="btn ghost" to="#ai-loop">
                查看 AI 育种体系
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
          <span className="eyebrow">展区一</span>
          <h2 className="section-title">工业化四步法 · 流程即标准</h2>
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
          <span className="eyebrow">展区二</span>
          <h2 className="section-title">商业价值验证 · 真实数字背书</h2>
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
            <span className="eyebrow">AI 系统 · 全链路闭环</span>
            <h3 className="section-title">感知 → 模型 → 执行 → 溯源</h3>
            <ul className="list-disc ml-4 text-on-soft">
              <li>感知：水温、溶氧、盐度、pH、光照、颗粒与幼虫/附苗阶段视频行为。</li>
              <li>模型：生长曲线与附苗率预测、饵料与水体优化、风险预警。</li>
              <li>执行：投喂/换水/增氧/光照联动，可人工复核与远程调整。</li>
              <li>溯源：亲本—受精—幼虫—附苗—出苗全程日志，批次二维码随货。</li>
            </ul>
          </div>
          <div className="ai-console">
            <div className="ai-widget">
              <strong>水质看板</strong>
              <p className="text-on-soft text-xs mt-1">水温 / 盐度 / DO / pH 实时曲线</p>
            </div>
            <div className="ai-widget">
              <strong>附苗率预测</strong>
              <p className="text-on-soft text-xs mt-1">AI 预测附苗率与阶段成活率区间</p>
            </div>
            <div className="ai-widget">
              <strong>异常预警</strong>
              <p className="text-on-soft text-xs mt-1">水体波动、摄食异常、应激行为即时提醒</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight" id="specs">
        <div className="container nm-grid nm-grid-2 reveal">
          <div>
            <span className="eyebrow">参数与交付</span>
            <h3 className="section-title">按项目定制的规格与流程</h3>
            <div className="chip-row">
              {["D型幼虫", "附苗规格", "水温/盐度", "密度与成活率", "批次溯源", "交付SOP"].map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
            <div className="card mt-4">
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td className="py-2 font-semibold">规格区间</td>
                    <td className="py-2 text-on-soft">待提供（D型幼虫、附苗后规格等）</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">适养水温/盐度</td>
                    <td className="py-2 text-on-soft">待提供（例：xx–xx ℃，盐度 xx‰）</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">溶氧 &amp; 水质</td>
                    <td className="py-2 text-on-soft">待提供（例：DO ≥ x mg/L，NH3-N ≤ x mg/L）</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">建议密度</td>
                    <td className="py-2 text-on-soft">待提供（车间/海区）</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">参考成活率</td>
                    <td className="py-2 text-on-soft">待提供（阶段成活率）</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">交付保障</td>
                    <td className="py-2 text-on-soft">分级检验、溯源码随货、到点驯化指导</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card card-stack">
            <strong>交付流程</strong>
            <div className="stepper">
              {["需求确认", "排产与催产", "质检与溯源", "包装运输", "到点支持"].map((item) => (
                <div key={item} className="stepper-item">
                  <div className="step-dot"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <span className="eyebrow">配套服务</span>
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
            <strong>想做工厂化育苗中心或升级现有产线？</strong>
            <p className="text-on-soft mt-2">告诉我目标规格、产能规划与场地条件，我将提供排产方案、工艺参数与合作模式。</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link className="btn primary" to="/contact">
              立即咨询
            </Link>
            <Link className="btn ghost" to="/ai-breeding/eel">
              查看黄鳝苗
            </Link>
            <Link className="btn ghost" to="/ai-breeding/pomfret">
              查看黄特鲳苗
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
