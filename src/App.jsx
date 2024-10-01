import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'next-themes';
import Menu from "./components/Menu";
import Footer from "./components/Footer";
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
import DogumHaritasi from "./pages/DogumHaritasi";
import UyeOl from "./pages/UyeOl";
import UyeGirisi from "./pages/UyeGirisi";
import Blog from "./pages/Blog";
import Alisveris from "./pages/Alisveris";
import KoruyucuTilsimlar from "./pages/KoruyucuTilsimlar";
import EnerjiTemizligi from "./pages/EnerjiTemizligi";
import RuhsalYolculuk from "./pages/RuhsalYolculuk";
import GunlukBurcYorumlari from "./pages/GunlukBurcYorumlari";
import Profil from "./pages/Profil";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
            <Menu />
            <main className="flex-grow pt-4">
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
                <Route path="/dogum-haritasi" element={<DogumHaritasi />} />
                <Route path="/uye-ol" element={<UyeOl />} />
                <Route path="/uye-girisi" element={<UyeGirisi />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/alisveris" element={<Alisveris />} />
                <Route path="/koruyucu-tilsimlar" element={<KoruyucuTilsimlar />} />
                <Route path="/enerji-temizligi" element={<EnerjiTemizligi />} />
                <Route path="/ruhsal-yolculuk" element={<RuhsalYolculuk />} />
                <Route path="/gunluk-burc-yorumlari" element={<GunlukBurcYorumlari />} />
                <Route path="/profil" element={<Profil />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;