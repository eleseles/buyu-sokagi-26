import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'next-themes';
import Index from "./pages/Index";
import BuyuTesti from "./pages/BuyuTesti";
import BuyuBelirtileri from "./pages/BuyuBelirtileri";
import BuyuYapimi from "./pages/BuyuYapimi";
import BuyuDualari from "./pages/BuyuDualari";
import BuyuBozma from "./pages/BuyuBozma";
import BuyuKitabi from "./pages/BuyuKitabi";
import BuyuTurleri from "./pages/BuyuTurleri";
import KullaniciDeneyimleri from "./pages/KullaniciDeneyimleri";
import AstrolojiveBuyu from "./pages/AstrolojiveBuyu";
import GunlukTavsiyeler from "./pages/GunlukTavsiyeler";
import TarotFali from "./pages/TarotFali";
import TekKartTarot from "./pages/TekKartTarot";
import UcKartTarot from "./pages/UcKartTarot";
import TarotKartlariAnlamlari from "./pages/TarotKartlariAnlamlari";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/buyu-testi" element={<BuyuTesti />} />
            <Route path="/buyu-belirtileri" element={<BuyuBelirtileri />} />
            <Route path="/buyu-yapimi" element={<BuyuYapimi />} />
            <Route path="/buyu-dualari" element={<BuyuDualari />} />
            <Route path="/buyu-bozma" element={<BuyuBozma />} />
            <Route path="/buyu-kitabi" element={<BuyuKitabi />} />
            <Route path="/buyu-turleri" element={<BuyuTurleri />} />
            <Route path="/kullanici-deneyimleri" element={<KullaniciDeneyimleri />} />
            <Route path="/astroloji-ve-buyu" element={<AstrolojiveBuyu />} />
            <Route path="/gunluk-tavsiyeler" element={<GunlukTavsiyeler />} />
            <Route path="/tarot-fali" element={<TarotFali />} />
            <Route path="/tarot-fali/tek-kart" element={<TekKartTarot />} />
            <Route path="/tarot-fali/uc-kart" element={<UcKartTarot />} />
            <Route path="/tarot-fali/kartlar-ve-anlamlari" element={<TarotKartlariAnlamlari />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;