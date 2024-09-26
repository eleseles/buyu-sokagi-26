import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Menu = () => {
  return (
    <nav className="bg-purple-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">BüyüDünyası</Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Menü</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link to="/buyu-testi">Büyü Testi</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/buyu-turleri">Büyü Türleri</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/buyu-belirtileri">Büyü Belirtileri</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/buyu-yapimi">Büyü Yapımı</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/buyu-dualari">Büyü Duaları</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/buyu-bozma">Büyü Bozma</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/buyu-kitabi">Büyü Kitabı</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/kullanici-deneyimleri">Kullanıcı Deneyimleri</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/astroloji-ve-buyu">Astroloji ve Büyü</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/gunluk-tavsiyeler">Günlük Tavsiyeler</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/tarot-fali">Tarot Falı</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/tarot-fali/tek-kart">Tek Kart Tarot</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/tarot-fali/uc-kart">Üç Kart Tarot Falı</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/tarot-fali/kartlar-ve-anlamlari">Tarot Kartları ve Anlamları</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/dogum-haritasi">Doğum Haritası</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Menu;