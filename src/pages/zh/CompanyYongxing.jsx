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
    <Layout lang="zh" ctaLabel="采购合作" ctaTo="/contact">
      <section className="hero hero-splash">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-splash-overlay"></div>
        <div className="container hero-content">
          <div>
            <span className="tag">大湾区“菜篮子”核心供应商</span>
            <h1>广东省阳江市永兴水产养殖有限公司</h1>
            <p>成立于2005年，集水产品养殖与进出口贸易于一体，拥有4200亩精养池塘、1300亩滩涂和3万m³工厂化养殖水体。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                采购合作
              </Link>
              <Link className="btn ghost" to="/company/partners">
                渠道联名
              </Link>
            </div>
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
                <strong>5000吨/年</strong>
                <span>稳定产量</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container reveal">
          <span className="eyebrow">基地实景</span>
          <h2 className="section-title">鱼塘与养殖基地</h2>
          <p className="section-subtitle">实时呈现阳江市平岗农场鱼塘水体与基础设施现状。</p>
          <div className="cert-grid" style={{ marginTop: "18px" }}>
            {pondImages.map((src, index) => (
              <div className="cert-card" key={src}>
                <button type="button" onClick={() => openLightbox(src, `鱼塘实景 ${index + 1}`)}>
                  <img src={src} alt={`鱼塘实景 ${index + 1}`} />
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
            <h2 className="section-title">黄创智董事长</h2>
            <p className="section-subtitle">
              70年代改革开放初期在深圳从事水产贸易起家，90年代投资1亿元在阳江市平岗农场开挖万余亩鱼塘，打造水产养殖基地，并以“愚公移山”的精神持续深耕产业。
            </p>
          </div>
          <div className="card">
            <strong>行业贡献</strong>
            <ul className="mt-4 grid gap-3 text-on-muted">
              <li>走访全国及海外，总结出可复制的水产养殖经验，曾指导几十个国家的水产养殖实践。</li>
              <li>40年水产供应链与出口贸易经验，服务珠三角食品安全。</li>
              <li>首批渔业产销链开拓者，现任深圳水产协会副会长、阳江水产协会常务会长。</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Trust Pillars</span>
          <h2 className="section-title">为什么可信</h2>
          <div className="nm-grid nm-grid-4 reveal" style={{ marginTop: "24px" }}>
            <div className="card">
              <strong>合规监管</strong>
              <p>海关备案与香港食环署监管，两个月抽检机制。</p>
            </div>
            <div className="card">
              <strong>检测体系</strong>
              <p>准入/准出标准，第三方驻点检测与多重快检。</p>
            </div>
            <div className="card">
              <strong>全程追溯</strong>
              <p>批次记录、流向可追踪，每日合格证上传。</p>
            </div>
            <div className="card">
              <strong>供应稳定</strong>
              <p>供深40余年、供港38余年，日供应量万斤以上。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Certifications</span>
          <h2 className="section-title">资质与证书</h2>
          <p className="section-subtitle">按类别展示核心资质与荣誉证书。</p>

          <div className="reveal" style={{ marginTop: "24px" }}>
            <strong>圳品评价证书（14项）</strong>
            <div className="cert-grid" style={{ marginTop: "12px" }}>
              {zhenpinCerts.map((src, index) => (
                <div className="cert-card" key={src}>
                  <button type="button" onClick={() => openLightbox(src, `圳品评价证书 ${index + 1}`)}>
                    <img src={src} alt={`圳品评价证书 ${index + 1}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ marginTop: "24px" }}>
            <strong>商标注册证（3项）</strong>
            <div className="cert-grid" style={{ marginTop: "12px" }}>
              {trademarkCerts.map((src, index) => (
                <div className="cert-card" key={src}>
                  <button type="button" onClick={() => openLightbox(src, `商标注册证 ${index + 1}`)}>
                    <img src={src} alt={`商标注册证 ${index + 1}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ marginTop: "24px" }}>
            <strong>荣誉证书（4项）</strong>
            <div className="cert-grid" style={{ marginTop: "12px" }}>
              {honorCerts.map((src, index) => (
                <div className="cert-card" key={src}>
                  <button type="button" onClick={() => openLightbox(src, `荣誉证书 ${index + 1}`)}>
                    <img src={src} alt={`荣誉证书 ${index + 1}`} />
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
            <strong>核心产品</strong>
            <p>14个品项入选深圳“圳品”认证，鱼类与贝类品项覆盖多元市场需求。</p>
            <p>鱼类：鳗鱼、草鱼、罗非鱼、鲫鱼、鲈鱼、鲢鱼、黄骨鱼、乌头鱼。</p>
            <p>贝类：青口、文蛤、沙白、血蛤（海陵岛）。</p>
          </div>
          <div className="card">
            <strong>养殖技术</strong>
            <p>采用咸淡水养殖技术，提升鱼肉胶原蛋白含量，肉质紧致鲜美，无泥腥味。</p>
            <p>同时兼顾生态养殖与标准化管理。</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Channel Map</span>
          <h2 className="section-title">核心渠道与合作伙伴</h2>
          <div className="logo-wall reveal" style={{ marginTop: "24px" }}>
            <div className="logo-card">深圳布吉农批</div>
            <div className="logo-card">叮咚买菜</div>
            <div className="logo-card">朴朴超市</div>
            <div className="logo-card">美团买菜</div>
            <div className="logo-card">大润发</div>
            <div className="logo-card">盒马鲜生</div>
            <div className="logo-card">天虹</div>
            <div className="logo-card">香港元朗/香港仔</div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Traceability Flow</span>
          <h2 className="section-title">质量与追溯链路</h2>
          <div className="steps-grid reveal" style={{ marginTop: "24px" }}>
            <div className="step-card">
              <strong>养殖过程记录</strong>
              <p>生产有记录、责任可追溯。</p>
            </div>
            <div className="step-card">
              <strong>出塘前快检</strong>
              <p>关键指标快速检测。</p>
            </div>
            <div className="step-card">
              <strong>第三方驻点检测</strong>
              <p>第三方机构三方圆驻点检测。</p>
            </div>
            <div className="step-card">
              <strong>卸货前快检</strong>
              <p>商超卸货前再次检测。</p>
            </div>
            <div className="step-card">
              <strong>承诺合格证</strong>
              <p>每日上传承诺达标合格证。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI + Aquaculture</span>
          <h2 className="section-title">智慧渔业与未来规划</h2>
          <p className="section-subtitle">与农脉AI合作，建设HACCP鲜切加工与数字化追溯系统，提升国际市场竞争力。</p>
          <ul>
            <li>HACCP鲜切加工厂建设（规划）。</li>
            <li>大数据、物联网与AI监测系统。</li>
            <li>全链条追溯与品牌可信升级。</li>
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
      {lightbox.open ? (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <div className="lightbox-inner" onClick={(event) => event.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <button className="lightbox-close" type="button" onClick={closeLightbox} aria-label="关闭">
              ×
            </button>
          </div>
        </div>
      ) : null}
    </Layout>
  );
}
