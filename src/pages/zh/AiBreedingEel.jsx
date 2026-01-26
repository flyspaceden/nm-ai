import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

const base = `${import.meta.env.BASE_URL}asset/images/AI育种:养殖/黄鳝苗`;

const heroBg = `${base}/图片1.jpg`;

const gallery = [
  { src: `${base}/图片1.jpg`, alt: "黄鳝苗池塘环境" },
  { src: `${base}/图片2.jpg`, alt: "黄鳝苗分级与取样" },
  { src: `${base}/图片3.jpg`, alt: "黄鳝苗饲养密度展示" },
  { src: `${base}/图片4.jpg`, alt: "包装出货准备" },
  { src: `${base}/图片5.jpg`, alt: "现场操作与质检" }
];

const videos = [
  { src: `${base}/视频1.mp4`, title: "育苗现场", desc: "水体管理与巡检片段，体现日常管控节奏。" },
  { src: `${base}/视频2.mp4`, title: "分级与装袋", desc: "分级、检验、打包到发运的关键步骤。", poster: `${base}/图片4.jpg` }
];

export default function AiBreedingEel() {
  return (
    <Layout lang="zh">
      <section className="hero hero-splash">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-splash-overlay"></div>
        <div className="container hero-content">
          <div>
            <span className="tag">AI育种 / 黄鳝苗 · 稳定批次 · 全链路可追溯</span>
            <h1>黄鳝苗</h1>
            <p>以数据驱动的育种与育苗流程，串联感知—模型—执行—溯源，保障批次稳定、快速驯化与安全交付。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                咨询订苗 / 预约参观
              </Link>
              <Link className="btn ghost" to="#ai-loop">
                查看AI管控体系
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card card-stack">
            <strong>规格与供应</strong>
            <p>支持多规格分级出塘，批次稳定；可根据需求预留生产计划。</p>
          </div>
          <div className="card card-stack">
            <strong>质量与检验</strong>
            <p>分级抽检、水质与密度记录入库；每批次生成溯源码随货交付。</p>
          </div>
          <div className="card card-stack">
            <strong>交付与服务</strong>
            <p>打包、运输、到塘驯化指导一体化；异常预警与复投支持可选。</p>
          </div>
        </div>
      </section>

      <section className="section section-tight" id="media">
        <div className="container reveal">
          <span className="eyebrow">现场直观</span>
          <h2 className="section-title">视频 + 现场图集</h2>
          <div className="nm-grid nm-grid-2" style={{ gap: "18px", marginTop: "16px" }}>
            {videos.map((item) => (
              <div key={item.src} className="card card-stack">
                <div className="media-frame">
                  <video
                    src={item.src}
                    poster={item.poster}
                    controls
                    preload="metadata"
                  />
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
                  <span className="text-xs text-on-soft block mt-1">现场实拍</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight" id="specs">
        <div className="container nm-grid nm-grid-2 reveal">
          <div>
            <span className="eyebrow">参数与交付</span>
            <h3 className="section-title">规格、环境与驯化要点</h3>
            <div className="card">
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td className="py-2 font-semibold">规格区间</td>
                    <td className="py-2 text-on-soft">待提供（建议按 cm / 尾）</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">适养水温</td>
                    <td className="py-2 text-on-soft">待提供（例：xx–xx ℃）</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">溶氧 &amp; 水质</td>
                    <td className="py-2 text-on-soft">待提供（例：DO ≥ x mg/L，NH3-N ≤ x mg/L）</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">建议密度</td>
                    <td className="py-2 text-on-soft">待提供（按养殖模式区分）</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">参考成活率</td>
                    <td className="py-2 text-on-soft">待提供（分驯化前/后）</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">交付与保障</td>
                    <td className="py-2 text-on-soft">分级检验、溯源码随货、到塘指导与复投方案可选</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card card-stack">
            <strong>交付流程</strong>
            <ul className="list-disc ml-4 text-on-soft">
              <li>需求确认：规格/数量/到货时间</li>
              <li>生产与分级：按批次留样记录</li>
              <li>质检与溯源：水质、密度、检验记录入库</li>
              <li>包装与运输：按路线配置氧气与温控</li>
              <li>到塘驯化：远程/现场指导，异常预警</li>
            </ul>
            <div>
              <span className="eyebrow">配套服务</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {["到塘驯化建议", "水质诊断", "密度/投喂优化", "批次追溯二维码", "异常预警推送"].map((item) => (
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
            <span className="eyebrow">AI育种/养殖管线</span>
            <h3 className="section-title">感知 → 模型 → 执行 → 溯源</h3>
            <ul className="list-disc ml-4 text-on-soft">
              <li>感知：水温、溶氧、氨氮、pH、视频行为，定频采集。</li>
              <li>模型：生长曲线预测、摄食与密度优化、疾病/应激风险预警。</li>
              <li>执行：增氧/换水/投喂策略联动，可人工复核与远程调整。</li>
              <li>溯源：批次二维码绑定育苗日志、水质曲线、检验与发货记录。</li>
            </ul>
          </div>
          <div className="card card-stack">
            <strong>数据闭环价值</strong>
            <p className="text-on-soft">
              通过实时数据与模型输出，降低波动、缩短驯化时间，形成标准化的可复制批次；异常即时预警，保障到塘效果。
            </p>
            <div className="flex gap-2">
              <Link className="btn ghost" to="/ai-breeding">
                返回AI育种目录
              </Link>
              <Link className="btn primary" to="/contact">
                获取方案
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card card-stack reveal">
          <strong>需要黄鳝苗规格、报价或到塘保障？</strong>
          <p className="text-on-soft">告诉我目标规格、到货时间与养殖模式，我们按批次给出生产与交付方案。</p>
          <div className="flex gap-2">
            <Link className="btn primary" to="/contact">
              立即咨询
            </Link>
            <Link className="btn ghost" to="/ai-breeding">
              查看其他品类
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
