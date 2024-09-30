import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Moon, Sun, ShoppingCart } from 'lucide-react';
import { useTheme } from 'next-themes';

const MenuCategories = {
  Büyü: [
    { to: "/buyu-testi", label: "Büyü Testi" },
    { to: "/buyu-turleri", label: "Büyü Türleri" },
    { to: "/buyu-belirtileri", label: "Büyü Belirtileri" },
    { to: "/buyu-yapimi", label: "Büyü Yapımı" },
    { to: "/buyu-dualari", label: "Büyü Duaları" },
    { to: "/buyu-bozma", label: "Büyü Bozma" },
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

  return (
    <nav className="bg-purple-900 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col items-center">
        <Link to="/" className="text-2xl font-bold text-white mb-4">BüyüDünyası</Link>
        <Tabs defaultValue="Büyü" className="w-full max-w-3xl">
          <TabsList className="grid w-full grid-cols-5">
            {Object.keys(MenuCategories).map((category) => (
              <TabsTrigger key={category} value={category} className="text-white">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(MenuCategories).map(([category, items]) => (
            <div key={category} className="mt-4" data-value={category}>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {items.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="block text-purple-200 hover:text-white hover:bg-purple-800 px-3 py-2 rounded-md text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Tabs>
        <div className="flex items-center space-x-4 mt-4">
          <Link to="/alisveris" className="text-white hover:text-purple-200">
            <ShoppingCart className="h-6 w-6" />
          </Link>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-white hover:text-purple-200"
          >
            {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Menu;