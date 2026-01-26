import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeZh from "./pages/zh/Home.jsx";
import MasterplanZh from "./pages/zh/Masterplan.jsx";
import EcoFarmingZh from "./pages/zh/EcoFarming.jsx";
import AiStudyZh from "./pages/zh/AiStudy.jsx";
import FamilyFunZh from "./pages/zh/FamilyFun.jsx";
import StayDineZh from "./pages/zh/StayDine.jsx";
import EventsZh from "./pages/zh/Events.jsx";
import AquacultureMuseumZh from "./pages/zh/AquacultureMuseum.jsx";
import EntrepreneurshipZh from "./pages/zh/Entrepreneurship.jsx";
import HailingZh from "./pages/zh/Hailing.jsx";
import HailingPingangZh from "./pages/zh/HailingPingang.jsx";
import HailingIslandZh from "./pages/zh/HailingIsland.jsx";
import HailingExchangeZh from "./pages/zh/HailingExchange.jsx";
import HailingMaweiZh from "./pages/zh/HailingMawei.jsx";
import HailingForumZh from "./pages/zh/HailingForum.jsx";
import HailingWellbeingZh from "./pages/zh/HailingWellbeing.jsx";
import HailingMaritimeZh from "./pages/zh/HailingMaritime.jsx";
import CompanyNongmaiZh from "./pages/zh/CompanyNongmai.jsx";
import CompanyYongxingZh from "./pages/zh/CompanyYongxing.jsx";
import CompanyPartnersZh from "./pages/zh/CompanyPartners.jsx";
import CompanyZhiqianZh from "./pages/zh/CompanyZhiqian.jsx";
import AiBreedingZh from "./pages/zh/AiBreeding.jsx";
import AiBreedingOysterZh from "./pages/zh/AiBreedingOyster.jsx";
import AiBreedingEelZh from "./pages/zh/AiBreedingEel.jsx";
import AiBreedingPomfretZh from "./pages/zh/AiBreedingPomfret.jsx";
import NewsZh from "./pages/zh/News.jsx";
import ContactZh from "./pages/zh/Contact.jsx";

import HomeEn from "./pages/en/Home.jsx";
import MasterplanEn from "./pages/en/Masterplan.jsx";
import EcoFarmingEn from "./pages/en/EcoFarming.jsx";
import AiStudyEn from "./pages/en/AiStudy.jsx";
import FamilyFunEn from "./pages/en/FamilyFun.jsx";
import StayDineEn from "./pages/en/StayDine.jsx";
import EventsEn from "./pages/en/Events.jsx";
import AquacultureMuseumEn from "./pages/en/AquacultureMuseum.jsx";
import EntrepreneurshipEn from "./pages/en/Entrepreneurship.jsx";
import HailingEn from "./pages/en/Hailing.jsx";
import HailingPingangEn from "./pages/en/HailingPingang.jsx";
import HailingIslandEn from "./pages/en/HailingIsland.jsx";
import HailingExchangeEn from "./pages/en/HailingExchange.jsx";
import HailingMaweiEn from "./pages/en/HailingMawei.jsx";
import HailingForumEn from "./pages/en/HailingForum.jsx";
import HailingWellbeingEn from "./pages/en/HailingWellbeing.jsx";
import HailingMaritimeEn from "./pages/en/HailingMaritime.jsx";
import CompanyNongmaiEn from "./pages/en/CompanyNongmai.jsx";
import CompanyYongxingEn from "./pages/en/CompanyYongxing.jsx";
import CompanyPartnersEn from "./pages/en/CompanyPartners.jsx";
import CompanyZhiqianEn from "./pages/en/CompanyZhiqian.jsx";
import AiBreedingEn from "./pages/en/AiBreeding.jsx";
import AiBreedingOysterEn from "./pages/en/AiBreedingOyster.jsx";
import AiBreedingEelEn from "./pages/en/AiBreedingEel.jsx";
import AiBreedingPomfretEn from "./pages/en/AiBreedingPomfret.jsx";
import NewsEn from "./pages/en/News.jsx";
import ContactEn from "./pages/en/Contact.jsx";

function NotFound() {
  return (
    <div className="min-h-screen bg-bg-1 text-on-surface flex items-center justify-center">
      <div className="card">
        <strong>404</strong>
        <p className="mt-2 text-on-muted">Page not found.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomeZh />} />
        <Route path="/masterplan" element={<MasterplanZh />} />
        <Route path="/masterplan/ecofarming" element={<EcoFarmingZh />} />
        <Route path="/masterplan/ai-study" element={<AiStudyZh />} />
        <Route path="/masterplan/family-fun" element={<FamilyFunZh />} />
        <Route path="/masterplan/stay-dine" element={<StayDineZh />} />
        <Route path="/masterplan/events" element={<EventsZh />} />
        <Route path="/masterplan/aquaculture-museum" element={<AquacultureMuseumZh />} />
        <Route path="/masterplan/entrepreneurship" element={<EntrepreneurshipZh />} />
        <Route path="/ai-breeding" element={<AiBreedingZh />} />
        <Route path="/ai-breeding/oyster" element={<AiBreedingOysterZh />} />
        <Route path="/ai-breeding/eel" element={<AiBreedingEelZh />} />
        <Route path="/ai-breeding/pomfret" element={<AiBreedingPomfretZh />} />
        <Route path="/hailing" element={<HailingZh />} />
        <Route path="/hailing/pingang" element={<HailingPingangZh />} />
        <Route path="/hailing/island" element={<HailingIslandZh />} />
        <Route path="/hailing/exchange" element={<HailingExchangeZh />} />
        <Route path="/hailing/mawei" element={<HailingMaweiZh />} />
        <Route path="/hailing/forum" element={<HailingForumZh />} />
        <Route path="/hailing/wellbeing" element={<HailingWellbeingZh />} />
        <Route path="/hailing/maritime" element={<HailingMaritimeZh />} />
        <Route path="/company/nongmai-ai" element={<CompanyNongmaiZh />} />
        <Route path="/company/yongxing" element={<CompanyYongxingZh />} />
        <Route path="/company/zhiqian" element={<CompanyZhiqianZh />} />
        <Route path="/company/partners" element={<CompanyPartnersZh />} />
        <Route path="/news" element={<NewsZh />} />
        <Route path="/contact" element={<ContactZh />} />

        <Route path="/en" element={<HomeEn />} />
        <Route path="/en/masterplan" element={<MasterplanEn />} />
        <Route path="/en/masterplan/ecofarming" element={<EcoFarmingEn />} />
        <Route path="/en/masterplan/ai-study" element={<AiStudyEn />} />
        <Route path="/en/masterplan/family-fun" element={<FamilyFunEn />} />
        <Route path="/en/masterplan/stay-dine" element={<StayDineEn />} />
        <Route path="/en/masterplan/events" element={<EventsEn />} />
        <Route path="/en/masterplan/aquaculture-museum" element={<AquacultureMuseumEn />} />
        <Route path="/en/masterplan/entrepreneurship" element={<EntrepreneurshipEn />} />
        <Route path="/en/ai-breeding" element={<AiBreedingEn />} />
        <Route path="/en/ai-breeding/oyster" element={<AiBreedingOysterEn />} />
        <Route path="/en/ai-breeding/eel" element={<AiBreedingEelEn />} />
        <Route path="/en/ai-breeding/pomfret" element={<AiBreedingPomfretEn />} />
        <Route path="/en/hailing" element={<HailingEn />} />
        <Route path="/en/hailing/pingang" element={<HailingPingangEn />} />
        <Route path="/en/hailing/island" element={<HailingIslandEn />} />
        <Route path="/en/hailing/exchange" element={<HailingExchangeEn />} />
        <Route path="/en/hailing/mawei" element={<HailingMaweiEn />} />
        <Route path="/en/hailing/forum" element={<HailingForumEn />} />
        <Route path="/en/hailing/wellbeing" element={<HailingWellbeingEn />} />
        <Route path="/en/hailing/maritime" element={<HailingMaritimeEn />} />
        <Route path="/en/company/nongmai-ai" element={<CompanyNongmaiEn />} />
        <Route path="/en/company/yongxing" element={<CompanyYongxingEn />} />
        <Route path="/en/company/zhiqian" element={<CompanyZhiqianEn />} />
        <Route path="/en/company/partners" element={<CompanyPartnersEn />} />
        <Route path="/en/news" element={<NewsEn />} />
        <Route path="/en/contact" element={<ContactEn />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
