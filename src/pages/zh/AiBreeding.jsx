import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

const heroBg = `${import.meta.env.BASE_URL}asset/images/AI育种:养殖/背景.png`;

export default function AiBreeding() {
  return (
    <Layout lang="zh">
      <section className="hero hero-splash">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-splash-overlay"></div>
        <div className="container hero-content">
          <div>
            <span className="tag">数字化苗种 · 智慧育成 · 全链路监控</span>
            <h1>AI育种 / 养殖中心</h1>
            <p>围绕牡蛎、黄鳝、黄特鲳三大核心品类，提供从亲本筛选、苗种培育到智慧养殖的完整方案，支持科研共创与产业落地。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                咨询合作 / 预约参观
              </Link>
              <Link className="btn ghost" to="/ai-breeding/oyster">
                进入苗种目录
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card card-stack">
            <strong>三大品类</strong>
            <p>牡蛎苗、黄鳝苗、黄特鲳苗分别设立独立流程与环境参数，便于后续补充详细规格与交付标准。</p>
          </div>
          <div className="card card-stack">
            <strong>AI中枢</strong>
            <p>规划“数据采集—特征提取—决策建议—执行联动”四层架构，可按品类填充模型指标与控制策略。</p>
          </div>
          <div className="card card-stack">
            <strong>全链路追溯</strong>
            <p>每批次生成唯一溯源码，连接亲本信息、育苗日志、水质/饵料数据和出塘记录。</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container reveal">
          <span className="eyebrow">页面逻辑示意</span>
          <h2 className="section-title">后续填充内容的结构</h2>
          <div className="matrix-grid" style={{ marginTop: "20px" }}>
            <div className="matrix-card">
              <strong>核心卖点</strong>
              <p>3-4 行总结该品类的优势、规模、供应周期（留空待补）。</p>
            </div>
            <div className="matrix-card">
              <strong>关键参数</strong>
              <p>水温 / 盐度 / 密度 / 成活率等表格化占位，待提供真实数据。</p>
            </div>
            <div className="matrix-card">
              <strong>场景方案</strong>
              <p>科研共建、示范场、订单代养三类卡片，可插入具体案例与联系方式。</p>
            </div>
            <div className="matrix-card">
              <strong>交付与服务</strong>
              <p>交付周期、质保与技术支持流程占位，便于后续补齐。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-2 reveal">
          <div>
            <span className="eyebrow">数据与设备流</span>
            <h3 className="section-title">可扩展的 AI 养殖管线</h3>
            <ul className="list-disc ml-4 text-on-soft">
              <li>感知层：水质传感、视频行为识别、饵料投喂记录（留参数位）。</li>
              <li>模型层：生长曲线预测、健康预警、能耗与饲料优化（留模型位）。</li>
              <li>执行层：增氧/换水/投喂自动化联动，支持远程调控。</li>
              <li>运营层：批次报表、异常提醒、访客看板与扫码溯源。</li>
            </ul>
          </div>
          <div className="card card-stack">
            <strong>下一步</strong>
            <p>请提供每个品类的卖点、参数、案例与交付信息，我将填入对应模块并细化交互。</p>
            <div className="flex gap-2">
              <Link className="btn ghost" to="/ai-breeding/oyster">
                牡蛎苗
              </Link>
              <Link className="btn ghost" to="/ai-breeding/eel">
                黄鳝苗
              </Link>
              <Link className="btn ghost" to="/ai-breeding/pomfret">
                黄特鲳苗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
