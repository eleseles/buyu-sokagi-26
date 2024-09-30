import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, Menu as MenuIcon } from 'lucide-react';
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
  ],
};

const Menu = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-purple-900 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">BüyüDünyası</Link>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {Object.entries(MenuCategories).map(([category, items]) => (
                <React.Fragment key={category}>
                  <DropdownMenuLabel>{category}</DropdownMenuLabel>
                  {items.map((item) => (
                    <DropdownMenuItem key={item.to} asChild>
                      <Link to={item.to}>{item.label}</Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                </React.Fragment>
              ))}
              <DropdownMenuItem asChild>
                <Link to="/uye-ol">Üye Ol</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/uye-girisi">Üye Girişi</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Menu;