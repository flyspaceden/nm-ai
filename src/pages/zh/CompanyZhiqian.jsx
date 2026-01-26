import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function CompanyZhiqian() {
  const imageBase = `${import.meta.env.BASE_URL}asset/images/公司/智倩达公司`;
  const heroBg = `${imageBase}/图片2.jpg`;
  const baseImage = `${imageBase}/图片1.jpg`;
  const videos = [
    { src: `${imageBase}/视频1.mp4`, title: "基地实拍" },
    { src: `${imageBase}/视频2.mp4`, title: "出塘与质检" },
    { src: `${imageBase}/视频3.mp4`, title: "冷链与供港流程" }
  ];

  const milestones = [
    "2006 深圳罗湖成立总公司",
    "2007 成立阳江分公司，迈入标准化养殖",
    "2014 获评深圳市“菜篮子”基地",
    "2019 首批通过“圳品”评价（11个品项）",
    "2023 新增3个“圳品”品项，总数14个",
    "2024 展望：完善标准化体系，创建“美丽渔场”示范"
  ];

  return (
    <Layout lang="zh" ctaLabel="采购合作" ctaTo="/contact">
      <section className="hero hero-splash">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-splash-overlay"></div>
        <div className="container hero-content">
          <div>
            <span className="tag">供港注册企业 · 大湾区“菜篮子”基地</span>
            <h1>深圳市智倩达农业技术开发有限公司</h1>
            <p>
              成立于2006年，深圳总部、阳江主基地，集水产品养殖与进出口贸易于一体，打造全链条优质水产品供应体系，
              并以AI与物联网推进“智慧渔场”升级。
            </p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                采购合作
              </Link>
              <Link className="btn ghost" to="/contact">
                预约参观
              </Link>
            </div>
            <div className="metrics">
              <div className="metric">
                <strong>5000吨/年</strong>
                <span>年产水产品</span>
              </div>
              <div className="metric">
                <strong>2.2亿元</strong>
                <span>年产值</span>
              </div>
              <div className="metric">
                <strong>供深40+年</strong>
                <span>稳定供应</span>
              </div>
              <div className="metric">
                <strong>供港38+年</strong>
                <span>日均万斤+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container reveal">
          <span className="eyebrow">基地实拍</span>
          <h2 className="section-title">三段视频 · 真实产线</h2>
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
            <h2 className="section-title">公司概况与规模</h2>
            <p className="section-subtitle">
              全链条优质水产品供应商，聚焦“绿色、环保、健康”生产标准。
            </p>
            <ul className="grid gap-3 text-on-muted">
              <li>广东省海关认定：全省第二家活鱼供港注册企业。</li>
              <li>深圳及粤港澳大湾区重要“菜篮子”基地。</li>
              <li>日均供应量万斤以上，保障城市高频需求。</li>
            </ul>
          </div>
          <div className="card card-stack">
            <strong>发展历程</strong>
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
            <span className="eyebrow">阳江“美丽渔场”</span>
            <h2 className="section-title">生产基地与环境优势</h2>
            <p className="section-subtitle">
              永兴基地位于阳江市高新区平岗农场，深中通道开通后约3小时可达深圳。
            </p>
            <div className="metrics">
              <div className="metric">
                <strong>4200亩</strong>
                <span>精养池塘</span>
              </div>
              <div className="metric">
                <strong>1300亩</strong>
                <span>滩涂基地</span>
              </div>
              <div className="metric">
                <strong>3万m³</strong>
                <span>工厂化水体</span>
              </div>
            </div>
            <ul className="grid gap-3 text-on-muted">
              <li>咸淡水养殖可有效杀菌、降低寄生虫风险。</li>
              <li>鱼肉更紧致、脂肪更低、无泥腥味，口感鲜嫩。</li>
              <li>贝类产地在海陵岛，适合青口、文蛤等繁殖。</li>
            </ul>
          </div>
          <div className="card card-stack">
            <img src={baseImage} alt="智倩达基地实景" className="rounded-2xl" />
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card card-stack">
            <strong>精选鱼类（圳品认证）</strong>
            <p>鳗鱼、罗非鱼、草鱼、鳙鱼、鲢鱼、鲫鱼、黄颡鱼、鲈鱼、乌头鱼、黄特鲳鱼等。</p>
            <p className="text-on-soft">鳗鱼富含DHA；罗非鱼肉质厚实少刺。</p>
          </div>
          <div className="card card-stack">
            <strong>虾蟹贝类（圳品认证）</strong>
            <p>青蟹、南美白对虾、文蛤、青口等。</p>
            <p className="text-on-soft">青蟹蟹膏甘腴；文蛤享有“天下第一鲜”。</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Quality Control</span>
          <h2 className="section-title">质量管控与安全体系</h2>
          <div className="logo-wall reveal" style={{ marginTop: "20px" }}>
            <div className="logo-card">ISO9001 质量体系</div>
            <div className="logo-card">ISO14001 环境体系</div>
            <div className="logo-card">ISO22000 食品安全</div>
            <div className="logo-card">HACCP 关键控制点</div>
          </div>
          <div className="steps-grid reveal" style={{ marginTop: "24px" }}>
            <div className="step-card">
              <strong>基地快检</strong>
              <p>出塘前每日快检，合格方可出货。</p>
            </div>
            <div className="step-card">
              <strong>第三方检测</strong>
              <p>每两个月定量检测，与第三方机构合作。</p>
            </div>
            <div className="step-card">
              <strong>海关监管</strong>
              <p>供港备案基地，香港食环署定期抽检。</p>
            </div>
            <div className="step-card">
              <strong>数字化追溯</strong>
              <p>每日上传合格证，流向可跟踪。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Channel Map</span>
          <h2 className="section-title">核心渠道与合作伙伴</h2>
          <div className="logo-wall reveal" style={{ marginTop: "24px" }}>
            <div className="logo-card">盒马鲜生</div>
            <div className="logo-card">叮咚买菜</div>
            <div className="logo-card">美团买菜</div>
            <div className="logo-card">大润发</div>
            <div className="logo-card">天虹</div>
            <div className="logo-card">朴朴超市</div>
            <div className="logo-card">深圳布吉农批</div>
            <div className="logo-card">香港长沙湾/香港仔</div>
            <div className="logo-card">九毛九</div>
            <div className="logo-card">七十九号渔场</div>
            <div className="logo-card">德米火锅</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">Future Plan</span>
          <h2 className="section-title">智慧渔业与未来规划</h2>
          <p className="section-subtitle">以大数据、物联网与AI打造数字化“智慧渔场”，推进深加工与全链条整合。</p>
          <ul>
            <li>建设供港标准鲜切加工厂，提升产品附加值。</li>
            <li>AI与IoT实时监测，实现养殖全过程数字化。</li>
            <li>种苗—养殖—加工—存储—销售一体化升级。</li>
          </ul>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container cta-panel reveal">
          <div>
            <strong>采购合作 / 渠道联名 / 参访交流</strong>
            <p>提交需求，我们将在1个工作日内对接。</p>
          </div>
          <div className="hero-actions">
            <Link className="btn primary" to="/contact">
              采购合作
            </Link>
            <Link className="btn ghost" to="/company/partners">
              渠道联名
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
