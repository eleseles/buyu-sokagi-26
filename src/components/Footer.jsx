import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">BüyüDünyası</h3>
            <p className="text-purple-200">Mistik dünyayı keşfedin.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-purple-200 hover:text-white">Ana Sayfa</Link></li>
              <li><Link to="/buyu-testi" className="text-purple-200 hover:text-white">Büyü Testi</Link></li>
              <li><Link to="/buyu-turleri" className="text-purple-200 hover:text-white">Büyü Türleri</Link></li>
              <li><Link to="/blog" className="text-purple-200 hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Üyelik</h3>
            <ul className="space-y-2">
              <li><Link to="/uye-ol" className="text-purple-200 hover:text-white">Üye Ol</Link></li>
              <li><Link to="/uye-girisi" className="text-purple-200 hover:text-white">Üye Girişi</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-2">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-200 hover:text-white"><Facebook /></a>
              <a href="#" className="text-purple-200 hover:text-white"><Twitter /></a>
              <a href="#" className="text-purple-200 hover:text-white"><Instagram /></a>
              <a href="#" className="text-purple-200 hover:text-white"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-purple-200">&copy; 2024 BüyüDünyası. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;