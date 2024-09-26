import { HomeIcon, TestTubeIcon, AlertCircleIcon, BookIcon, BookOpenIcon, ShieldIcon, ShoppingBagIcon, Wand2Icon, StarIcon, UsersIcon, SparklesIcon, FeatherIcon, TarotIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import BuyuTesti from "./pages/BuyuTesti.jsx";
import BuyuBelirtileri from "./pages/BuyuBelirtileri.jsx";
import BuyuYapimi from "./pages/BuyuYapimi.jsx";
import BuyuDualari from "./pages/BuyuDualari.jsx";
import BuyuBozma from "./pages/BuyuBozma.jsx";
import BuyuKitabi from "./pages/BuyuKitabi.jsx";
import BuyuTurleri from "./pages/BuyuTurleri.jsx";
import KullaniciDeneyimleri from "./pages/KullaniciDeneyimleri.jsx";
import AstrolojiveBuyu from "./pages/AstrolojiveBuyu.jsx";
import GunlukTavsiyeler from "./pages/GunlukTavsiyeler.jsx";
import TarotFali from "./pages/TarotFali.jsx";
import TekKartTarot from "./pages/TekKartTarot.jsx";
import UcKartTarot from "./pages/UcKartTarot.jsx";
import TarotKartlariAnlamlari from "./pages/TarotKartlariAnlamlari.jsx";

export const navItems = [
  {
    title: "Ana Sayfa",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Büyü Testi",
    to: "/buyu-testi",
    icon: <TestTubeIcon className="h-4 w-4" />,
    page: <BuyuTesti />,
  },
  {
    title: "Büyü Belirtileri",
    to: "/buyu-belirtileri",
    icon: <AlertCircleIcon className="h-4 w-4" />,
    page: <BuyuBelirtileri />,
  },
  {
    title: "Büyü Yapımı",
    to: "/buyu-yapimi",
    icon: <Wand2Icon className="h-4 w-4" />,
    page: <BuyuYapimi />,
  },
  {
    title: "Büyü Duaları",
    to: "/buyu-dualari",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <BuyuDualari />,
  },
  {
    title: "Büyü Bozma",
    to: "/buyu-bozma",
    icon: <ShieldIcon className="h-4 w-4" />,
    page: <BuyuBozma />,
  },
  {
    title: "Büyü Kitabı",
    to: "/buyu-kitabi",
    icon: <BookIcon className="h-4 w-4" />,
    page: <BuyuKitabi />,
  },
  {
    title: "Büyü Türleri",
    to: "/buyu-turleri",
    icon: <StarIcon className="h-4 w-4" />,
    page: <BuyuTurleri />,
  },
  {
    title: "Kullanıcı Deneyimleri",
    to: "/kullanici-deneyimleri",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <KullaniciDeneyimleri />,
  },
  {
    title: "Astroloji ve Büyü",
    to: "/astroloji-ve-buyu",
    icon: <SparklesIcon className="h-4 w-4" />,
    page: <AstrolojiveBuyu />,
  },
  {
    title: "Günlük Tavsiyeler",
    to: "/gunluk-tavsiyeler",
    icon: <FeatherIcon className="h-4 w-4" />,
    page: <GunlukTavsiyeler />,
  },
  {
    title: "Tarot Falı",
    to: "/tarot-fali",
    icon: <TarotIcon className="h-4 w-4" />,
    page: <TarotFali />,
    subItems: [
      {
        title: "Tek Kart Tarot",
        to: "/tarot-fali/tek-kart",
        page: <TekKartTarot />,
      },
      {
        title: "Üç Kart Tarot Falı",
        to: "/tarot-fali/uc-kart",
        page: <UcKartTarot />,
      },
      {
        title: "Tarot Kartları ve Anlamları",
        to: "/tarot-fali/kartlar-ve-anlamlari",
        page: <TarotKartlariAnlamlari />,
      },
    ],
  },
];