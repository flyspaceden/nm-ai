import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const baseTheme = {
  tag: "#0ea5a5",
  tagBg: "rgba(14, 165, 165, 0.14)",
  heroBg: "linear-gradient(135deg, rgba(14, 165, 165, 0.16) 0%, rgba(56, 189, 248, 0.14) 45%, rgba(248, 250, 252, 0) 70%)"
};

const hashString = (value) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

const resolveTheme = (key) => {
  if (key === "home") return baseTheme;
  const hue = 30 + (hashString(key) % 170);
  const accent = `hsl(${hue} 70% 38%)`;
  const accentSoft = `hsla(${hue} 70% 60% / 0.18)`;
  const accentGlow = `hsla(${(hue + 24) % 360} 80% 66% / 0.12)`;
  return {
    tag: accent,
    tagBg: accentSoft,
    heroBg: `linear-gradient(135deg, ${accentSoft} 0%, ${accentGlow} 55%, rgba(248, 250, 252, 0) 75%)`
  };
};

const navConfig = {
  zh: {
    brand: { name: "农脉AI", sub: "Nongmai AI", to: "/" },
    langSwitch: { label: "EN", to: "/en" },
    cta: { label: "预约参观", to: "/contact" },
    items: [
      { label: "首页", to: "/" },
      {
        label: "园区规划",
        to: "/masterplan",
        children: [
          { label: "总览", to: "/masterplan" },
          { label: "生态农业体验", to: "/masterplan/ecofarming" },
          { label: "科技研学", to: "/masterplan/ai-study" },
          { label: "亲子互动", to: "/masterplan/family-fun" },
          { label: "休闲度假", to: "/masterplan/stay-dine" },
          { label: "节庆活动", to: "/masterplan/events" },
          { label: "水产博物馆", to: "/masterplan/aquaculture-museum" },
          { label: "大学生创业中心", to: "/masterplan/entrepreneurship" }
        ]
      },
      {
        label: "海陵岛联动",
        to: "/hailing",
        children: [
          { label: "总览（300km城市群）", to: "/hailing" },
          { label: "平岗农场综合体", to: "/hailing/pingang" },
          { label: "海陵岛目的地", to: "/hailing/island" },
          { label: "国际交流总览", to: "/hailing/exchange" },
          { label: "马尾岛文化交流中心", to: "/hailing/mawei" },
          { label: "国际海上经济论坛", to: "/hailing/forum" },
          { label: "AI心理疗愈中心", to: "/hailing/wellbeing" },
          { label: "航海博物馆", to: "/hailing/maritime" }
        ]
      },
          {
        label: "公司与合作",
        to: "/company/nongmai-ai",
        children: [
          { label: "农脉人工智能", to: "/company/nongmai-ai" },
          { label: "永兴水产养殖", to: "/company/yongxing" },
          { label: "合作与招商", to: "/company/partners" }
        ]
      },
      { label: "资讯", to: "/news" },
      { label: "联系/预约", to: "/contact" }
    ],
    footer: {
      brand: "农脉AI · Nongmai AI",
      title: "阳江永兴-农脉 AI 国际渔田秘境",
      tagline: "AI渔业 · 研学 · 农文旅度假",
      phone: "电话：13923710623",
      email: "邮箱：zengweifeng3@163.com",
      address: "地址：广东省阳江市高新区平岗农场10队",
      quickTitle: "快速导航",
      quickLinks: [
        { label: "首页", to: "/" },
        { label: "园区规划", to: "/masterplan" },
        { label: "海陵岛联动", to: "/hailing" },
        { label: "公司与合作", to: "/company/nongmai-ai" },
        { label: "资讯", to: "/news" },
        { label: "联系/预约", to: "/contact" }
      ],
      experienceTitle: "项目与体验",
      experienceLinks: [
        { label: "生态农业体验", to: "/masterplan/ecofarming" },
        { label: "科技研学", to: "/masterplan/ai-study" },
        { label: "亲子互动", to: "/masterplan/family-fun" },
        { label: "休闲度假", to: "/masterplan/stay-dine" },
        { label: "节庆活动", to: "/masterplan/events" },
        { label: "海陵岛目的地", to: "/hailing/island" }
      ],
      entitiesTitle: "落款单位",
      entities: [
        "广东省农脉人工智能科技有限公司",
        "广东省阳江市永兴水产养殖有限公司"
      ],
      complianceTitle: "备案信息",
      compliance: ["粤ICP备XXXXXXXX号", "粤公网安备XXXXXXXX号"]
    }
  },
  en: {
    brand: { name: "Nongmai AI", sub: "农脉AI", to: "/en" },
    langSwitch: { label: "中文", to: "/" },
    cta: { label: "Book a Visit", to: "/en/contact" },
    items: [
      { label: "Home", to: "/en" },
      {
        label: "Master Plan",
        to: "/en/masterplan",
        children: [
          { label: "Overview", to: "/en/masterplan" },
          { label: "Eco Farming", to: "/en/masterplan/ecofarming" },
          { label: "AI & Study", to: "/en/masterplan/ai-study" },
          { label: "Family Fun", to: "/en/masterplan/family-fun" },
          { label: "Stay & Dine", to: "/en/masterplan/stay-dine" },
          { label: "Events", to: "/en/masterplan/events" },
          { label: "Aquaculture Museum", to: "/en/masterplan/aquaculture-museum" },
          { label: "Entrepreneurship Center", to: "/en/masterplan/entrepreneurship" }
        ]
      },
      {
        label: "Hailing Gateway",
        to: "/en/hailing",
        children: [
          { label: "Overview", to: "/en/hailing" },
          { label: "Pingang Complex", to: "/en/hailing/pingang" },
          { label: "Hailing Island", to: "/en/hailing/island" },
          { label: "Exchange Overview", to: "/en/hailing/exchange" },
          { label: "Mawei Cultural Center", to: "/en/hailing/mawei" },
          { label: "Maritime Economy Forum", to: "/en/hailing/forum" },
          { label: "AI Wellbeing Center", to: "/en/hailing/wellbeing" },
          { label: "Maritime Museum", to: "/en/hailing/maritime" }
        ]
      },
      {
        label: "Company",
        to: "/en/company/nongmai-ai",
        children: [
          { label: "Nongmai AI", to: "/en/company/nongmai-ai" },
          { label: "Yongxing Aquaculture", to: "/en/company/yongxing" },
          { label: "Partnerships", to: "/en/company/partners" }
        ]
      },
      { label: "News", to: "/en/news" },
      { label: "Contact", to: "/en/contact" }
    ],
    footer: {
      brand: "Nongmai AI",
      title: "Yangjiang Yongxing Nongmai AI International Fishpond Haven",
      tagline: "AI Aquaculture · Study · Agritourism",
      phone: "Tel: 13923710623",
      email: "Email: zengweifeng3@163.com",
      address: "Address: Pingang Farm Team 10, High-tech Zone, Yangjiang, Guangdong",
      quickTitle: "Quick Links",
      quickLinks: [
        { label: "Home", to: "/en" },
        { label: "Master Plan", to: "/en/masterplan" },
        { label: "Hailing Gateway", to: "/en/hailing" },
        { label: "Company", to: "/en/company/nongmai-ai" },
        { label: "News", to: "/en/news" },
        { label: "Contact", to: "/en/contact" }
      ],
      experienceTitle: "Experiences",
      experienceLinks: [
        { label: "Eco Farming", to: "/en/masterplan/ecofarming" },
        { label: "AI & Study", to: "/en/masterplan/ai-study" },
        { label: "Family Fun", to: "/en/masterplan/family-fun" },
        { label: "Stay & Dine", to: "/en/masterplan/stay-dine" },
        { label: "Events", to: "/en/masterplan/events" },
        { label: "Hailing Island", to: "/en/hailing/island" }
      ],
      entitiesTitle: "Entities",
      entities: [
        "Guangdong Nongmai AI Technology Co., Ltd.",
        "Guangdong Yangjiang Yongxing Aquaculture Co., Ltd."
      ],
      complianceTitle: "Compliance",
      compliance: ["ICP: Guangdong ICP XXXXXXXX", "Public Security: Guangdong Public Security XXXXXXXX"]
    }
  }
};

export default function Layout({ lang = "zh", children, ctaLabel, ctaTo }) {
  const config = navConfig[lang];
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const variantKey = (() => {
    const path = location.pathname.replace(/^\/en/, "");
    if (path === "" || path === "/") return "home";
    return path.replace(/^\/+/, "").replace(/\/+$/, "").replace(/\/+/g, "-");
  })();
  const theme = resolveTheme(variantKey);
  const themeStyle = {
    "--tag-border": theme.tag,
    "--tag-bg": theme.tagBg,
    "--tag-text": theme.tag,
    "--hero-bg": theme.heroBg
  };

  const langSwitchTo = (() => {
    const { pathname, search, hash } = location;
    if (lang === "zh") {
      const target = pathname === "/" ? "/en" : `/en${pathname}`;
      return `${target}${search}${hash}`;
    }
    const stripped = pathname.replace(/^\/en/, "") || "/";
    const target = stripped === "/" ? "/" : stripped;
    return `${target}${search}${hash}`;
  })();

  const handleLangSwitch = (event) => {
    event.preventDefault();
    navigate(langSwitchTo, {
      state: { preserveScroll: true, scrollY: window.scrollY }
    });
  };

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (location.state?.preserveScroll) {
      const targetY = Number.isFinite(location.state.scrollY) ? location.state.scrollY : 0;
      window.scrollTo({ top: targetY, left: 0, behavior: "auto" });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname, location.search, location.hash, location.state]);

  useEffect(() => {
    const targets = document.querySelectorAll(".reveal");
    if (targets.length === 0) return undefined;

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("reveal-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      <header>
        <div className="container navbar">
          <Link className="logo" to={config.brand.to}>
            <span>{config.brand.name}</span> {config.brand.sub}
          </Link>
          <nav className="nav-links">
            {config.items.map((item) => (
              <div className="nav-item" key={item.to}>
                <Link to={item.to}>
                  {item.label} {item.children ? "▾" : ""}
                </Link>
                {item.children ? (
                  <div className="dropdown">
                    {item.children.map((child) => (
                      <Link key={child.to} to={child.to}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
          <div className="nav-cta">
            <Link className="btn ghost" to={langSwitchTo} onClick={handleLangSwitch}>
              {config.langSwitch.label}
            </Link>
            <Link className="btn primary" to={ctaTo ?? config.cta.to}>
              {ctaLabel ?? config.cta.label}
            </Link>
          </div>
          <button
            className="nav-toggle"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
        <div className={`container mobile-menu ${open ? "open" : ""}`}>
          {config.items.map((item) => (
            <div key={item.to} className="border-b border-black/5 pb-3">
              {item.children ? (
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-on-surface">
                    {item.label}
                    <span className="text-on-soft transition group-open:rotate-45">+</span>
                  </summary>
                  <div className="mt-2 flex flex-col gap-2 pl-4 text-sm text-on-muted">
                    {item.children.map((child) => (
                      <Link key={child.to} to={child.to}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link className="text-base font-semibold text-on-surface" to={item.to}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link className="text-sm text-on-muted" to={langSwitchTo} onClick={handleLangSwitch}>
            {config.langSwitch.label}
          </Link>
        </div>
      </header>
      <main data-variant={variantKey} style={themeStyle}>
        {children}
      </main>
      <footer>
        <div className="container footer-grid">
          <div>
            <strong>{config.footer.brand}</strong>
            <p>{config.footer.title}</p>
            <p>{config.footer.tagline}</p>
          </div>
          <div>
            <strong>{config.footer.quickTitle}</strong>
            {config.footer.quickLinks.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <strong>{config.footer.experienceTitle}</strong>
            {config.footer.experienceLinks.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <strong>{lang === "zh" ? "联系与地址" : "Contact & Address"}</strong>
            <p>{config.footer.phone}</p>
            <p>{config.footer.email}</p>
            <p>{config.footer.address}</p>
          </div>
        </div>
        <div className="container footer-divider"></div>
        <div className="container footer-meta">
          <div>
            <strong>{config.footer.entitiesTitle}</strong>
            {config.footer.entities.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div>
            <strong>{config.footer.complianceTitle}</strong>
            {config.footer.compliance.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className="footer-lang">
            <Link to={langSwitchTo} onClick={handleLangSwitch}>
              {config.langSwitch.label}
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
