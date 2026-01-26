import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

const base = `${import.meta.env.BASE_URL}asset/images/AI育种:养殖/黄特鲳苗`;
const heroBg = `${base}/图片1.png`;

const gallery = [
  { src: `${base}/图片1.png`, alt: "黄特鲳苗育苗池与水体状态" },
  { src: `${base}/图片2.png`, alt: "黄特鲳苗分级操作" },
  { src: `${base}/图片3.png`, alt: "包装与运输准备" },
  { src: `${base}/图片4.png`, alt: "养殖场景与密度展示" }
];

const honors = [
  "2002 阳江市农业产业化示范工程（海陵岛试验区海水鱼苗繁育科技示范园）",
  "2004 “海水优质鱼苗受精胚胎贮存技术”列为地市重点引导项目",
  "2005 卵形鲳鲹等优质海水鱼苗人工繁育技术获阳江市科技二等奖；同年列为粤西星火“海水种苗繁育基地”实施单位",
  "2007 海水鱼类弧菌病免疫防治技术获阳江市科技一等奖",
  "2008 广东省健康农业科技示范基地",
  "2010 双棘黄姑鱼优质种苗人工繁育技术立项为地方重点引导项目",
  "2011 广东省民营科技企业",
  "2012 广东省食品安全示范单位、水产养殖质量安全示范点",
  "2013 国家无公害产地与无公害产品认定",
  "2014 阳江市人才工作示范点",
  "2016 双棘原黄姑鱼优质种苗人工繁育技术获阳江市科技进步奖三等奖",
  "2017 第六届中国创新创业大赛（广东阳江赛区）优秀奖",
  "2018 林浩然院士工作站实践基地；海水种苗繁育工程技术研究中心",
  "2020 广东省博士工作站",
  "2002-2021 连续当选阳江市海陵区闸坡网箱养殖协会常务副会长单位",
  "2021 阳江市海水种业创新发展协会副会长单位",
  "2023 阳江市水产种苗发展协会副会长单位"
];

export default function AiBreedingPomfret() {
  return (
    <Layout lang="zh">
      <section className="hero hero-splash">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-splash-overlay"></div>
        <div className="container hero-content">
          <div>
            <span className="tag">AI育种 / 黄特鲳苗 · 批次稳定 · 可追溯</span>
            <h1>黄特鲳苗</h1>
            <p>以数据驱动的选育与育苗闭环，覆盖亲本、育苗、分级质检到交付，适配深水网箱与池塘养殖。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                咨询订苗 / 预约参观
              </Link>
              <Link className="btn ghost" to="#ai-loop">
                查看AI育种体系
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card card-stack">
            <strong>规格与供应</strong>
            <p>多规格分级，按需求排产；批次稳定，支持预留计划。</p>
          </div>
          <div className="card card-stack">
            <strong>质量与检验</strong>
            <p>分级抽检+水质/密度记录；每批次附溯源码与检验单。</p>
          </div>
          <div className="card card-stack">
            <strong>适养场景</strong>
            <p>深水网箱、池塘、示范基地均可；提供到塘驯化建议。</p>
          </div>
        </div>
      </section>

      <section className="section section-tight" id="media">
        <div className="container reveal">
          <span className="eyebrow">现场图集</span>
          <h2 className="section-title">从育苗到出货的关键帧</h2>
          <div className="gallery-grid" style={{ marginTop: "20px" }}>
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
            <h3 className="section-title">规格、环境与交付要点</h3>
            <div className="card">
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td className="py-2 font-semibold">规格区间</td>
                    <td className="py-2 text-on-soft">待提供（按 cm / 尾）</td>
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
                    <td className="py-2 text-on-soft">待提供（区分网箱/池塘）</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">参考成活率</td>
                    <td className="py-2 text-on-soft">待提供（驯化前/后）</td>
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
              <li>选育与分级：记录批次指标与留样</li>
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
            <h3 className="section-title">亲本 → 育苗 → 分级 → 交付的数字闭环</h3>
            <ul className="list-disc ml-4 text-on-soft">
              <li>感知：水温、溶氧、盐度、流速、视频行为与摄食记录，定频采集。</li>
              <li>模型：生长曲线与性状对比、饵料系数优化、异常群游/应激预警。</li>
              <li>执行：投喂/增氧/换水/网箱调度联动，可人工复核与远程调整。</li>
              <li>溯源：亲本—鱼卵—鱼苗—成品链路，批次二维码绑定日志与发货记录。</li>
            </ul>
          </div>
          <div className="card card-stack">
            <strong>价值</strong>
            <p className="text-on-soft">
              通过数据驱动的选育与批次对比，降低波动、缩短驯化时间，形成可复制的黄特鲳苗标准；异常即时预警，保障到塘效果。
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

      <section className="section section-tight" id="hongyun">
        <div className="container reveal">
          <span className="eyebrow">合作背书</span>
          <h3 className="section-title">鸿运种苗 · 公司与基地简介</h3>
          <div className="nm-grid nm-grid-3" style={{ gap: "16px" }}>
            <div className="card card-stack">
              <strong>成立</strong>
              <p className="text-on-soft">1999，聚焦海水种苗育繁推一体化。</p>
            </div>
            <div className="card card-stack">
              <strong>规模</strong>
              <p className="text-on-soft">亲鱼育苗网箱 16,000㎡（132个），深海重力式网箱 15 个；海南陵水+海陵区基地共 100+ 亩。</p>
            </div>
            <div className="card card-stack">
              <strong>产能</strong>
              <p className="text-on-soft">亲鱼 20+ 品种、约 43,000 尾；年供应鱼卵 4,200+ kg、鱼苗 2,500+ 万尾。</p>
            </div>
          </div>
          <div className="card card-stack mt-4">
            <strong>主要品种与模式</strong>
            <p className="text-on-soft">
              卵形鲳鲹（金鲳鱼）、大黄鱼、白花鱼、石斑、尖吻鲈、珍珠龙胆等；模式覆盖“种苗基地＋养殖基地＋技术服务”，面向广东、广西、海南、福建等沿海养殖户。
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container reveal">
          <span className="eyebrow">荣誉与认定</span>
          <h3 className="section-title">2002 — 2023 里程碑</h3>
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
          <strong>需要黄特鲳苗规格、报价或到塘保障？</strong>
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
