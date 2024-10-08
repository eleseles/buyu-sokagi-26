import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Moon, Sun, ShoppingCart, User } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from "@/components/ui/button";

const MenuCategories = {
  "Ana Sayfa": [
    { to: "/", label: "Ana Sayfa" },
  ],
  Büyü: [
    { to: "/buyu-testi", label: "Büyü Testi" },
    { to: "/buyu-turleri", label: "Büyü Türleri" },
    { to: "/buyu-belirtileri", label: "Büyü Belirtileri" },
    { to: "/buyu-yapimi", label: "Büyü Yapımı" },
    { to: "/buyu-dualari", label: "Büyü Duaları" },
    { to: "/buyu-bozma", label: "Büyü Bozma" },
    { to: "/enerji-temizligi", label: "Enerji Temizliği" },
    { to: "/koruyucu-tilsimlar", label: "Koruyucu Tılsımlar" },
  ],
  Tarot: [
    { to: "/tarot-fali", label: "Tarot Falı" },
    { to: "/tarot-fali/tek-kart", label: "Tek Kart Tarot" },
    { to: "/tarot-fali/uc-kart", label: "Üç Kart Tarot" },
    { to: "/tarot-fali/kartlar-ve-anlamlari", label: "Tarot Kartları Anlamları" },
  ],
  Astroloji: [
    { to: "/astroloji-ve-buyu", label: "Astroloji ve Büyü" },
    { to: "/dogum-haritasi", label: "Doğum Haritası" },
    { to: "/gunluk-burc-yorumlari", label: "Günlük Burç Yorumları" },
  ],
  Diğer: [
    { to: "/gunluk-tavsiyeler", label: "Günlük Tavsiyeler" },
    { to: "/kullanici-deneyimleri", label: "Kullanıcı Deneyimleri" },
    { to: "/buyu-kitabi", label: "Büyü Kitabı" },
    { to: "/blog", label: "Blog" },
    { to: "/alisveris", label: "Alışveriş" },
  ],
};

const Menu = () => {
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("Ana Sayfa");

  return (
    <nav className="bg-purple-900 py-1 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-lg font-bold text-white">BüyüDünyası</Link>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
          <TabsList className="bg-purple-800 h-8">
            {Object.keys(MenuCategories).map((category) => (
              <TabsTrigger key={category} value={category} className="text-white text-sm px-2 py-1">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(MenuCategories).map(([category, items]) => (
            <TabsContent key={category} value={category} className="absolute left-0 right-0 bg-purple-800 mt-1">
              <div className="flex flex-wrap justify-center space-x-4 p-2">
                {items.map((item) => (
                  <Link key={item.to} to={item.to} className="text-white hover:text-purple-200">
                    {item.label}
                  </Link>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="flex items-center space-x-2">
          <Link to="/alisveris" className="text-white hover:text-purple-200">
            <ShoppingCart className="h-4 w-4" />
          </Link>
          <Link to="/profil" className="text-white hover:text-purple-200">
            <User className="h-4 w-4" />
          </Link>
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            variant="ghost"
            size="icon"
            className="text-white hover:text-purple-200"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Menu;