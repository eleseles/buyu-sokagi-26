import { HomeIcon, TestTubeIcon, AlertCircleIcon, BookIcon, PrayIcon, ShieldIcon, ShoppingBagIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import BuyuTesti from "./pages/BuyuTesti.jsx";
import BuyuBelirtileri from "./pages/BuyuBelirtileri.jsx";
import BuyuYapimi from "./pages/BuyuYapimi.jsx";
import BuyuDualari from "./pages/BuyuDualari.jsx";
import BuyuBozma from "./pages/BuyuBozma.jsx";
import BuyuKitabi from "./pages/BuyuKitabi.jsx";

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
    icon: <BookIcon className="h-4 w-4" />,
    page: <BuyuYapimi />,
  },
  {
    title: "Büyü Duaları",
    to: "/buyu-dualari",
    icon: <PrayIcon className="h-4 w-4" />,
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
    icon: <ShoppingBagIcon className="h-4 w-4" />,
    page: <BuyuKitabi />,
  },
];
