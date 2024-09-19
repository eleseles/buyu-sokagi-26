import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Book, Star, Shield, Wand2, Sparkles } from 'lucide-react';

const BuyuKitabi = () => {
  const [selectedChapter, setSelectedChapter] = useState(null);

  const chapters = [
    { title: "Büyü Tarihi", icon: Book, description: "Antik çağlardan günümüze büyünün evrimi" },
    { title: "Temel Büyü Teknikleri", icon: Wand2, description: "Başlangıç seviyesi büyü uygulamaları" },
    { title: "İleri Seviye Ritüeller", icon: Sparkles, description: "Deneyimli büyücüler için karmaşık ritüeller" },
    { title: "Koruyucu Büyüler", icon: Shield, description: "Kendinizi ve sevdiklerinizi koruma yöntemleri" },
    { title: "Büyü Malzemeleri", icon: Star, description: "Etkili büyüler için gerekli malzemeler ve özellikleri" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Büyü Kitabı
        </motion.h1>
        <Card className="bg-white bg-opacity-10 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-white">"Sırlar ve Büyüler: Kapsamlı Bir Rehber"</CardTitle>
          </CardHeader>
          <CardContent className="text-purple-100">
            <p className="mb-6">Bu kitap, büyü dünyasına dair tüm bilgileri içeren kapsamlı bir kaynaktır. Antik çağlardan günümüze kadar gelen büyü bilgilerini, modern uygulamalarla birleştirerek sunar.</p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {chapters.map((chapter, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer ${
                    selectedChapter === index ? 'bg-purple-700' : 'bg-purple-800 bg-opacity-30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedChapter(index)}
                >
                  <div className="flex items-center mb-2">
                    {React.createElement(chapter.icon, { className: "w-6 h-6 mr-2 text-yellow-300" })}
                    <h3 className="text-xl font-semibold">{chapter.title}</h3>
                  </div>
                  <p className="text-sm">{chapter.description}</p>
                </motion.div>
              ))}
            </div>
            {selectedChapter !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-purple-800 bg-opacity-30 rounded-lg"
              >
                <h4 className="text-xl font-semibold mb-2">{chapters[selectedChapter].title} Bölümü Önizleme</h4>
                <p>Bu bölümde, {chapters[selectedChapter].description.toLowerCase()} hakkında detaylı bilgiler bulacaksınız. Pratik uygulamalar ve tarihi bilgilerle zenginleştirilmiş içerik sizi bekliyor.</p>
              </motion.div>
            )}
            <div className="text-center">
              <p className="mb-4 text-lg">Fiyat: 99.99 TL</p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-bold">
                Hemen Satın Al
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white bg-opacity-10 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Neden Bu Kitabı Almalısınız?</CardTitle>
          </CardHeader>
          <CardContent className="text-purple-100">
            <ul className="list-disc list-inside space-y-2">
              <li>500+ sayfa kapsamlı büyü bilgisi</li>
              <li>Adım adım uygulama rehberleri</li>
              <li>Tarihi ve modern büyü tekniklerinin karşılaştırması</li>
              <li>Güvenli uygulama için etik kurallar</li>
              <li>Özel illüstrasyonlar ve diyagramlar</li>
              <li>Yazardan özel büyü tavsiyeleri</li>
            </ul>
          </CardContent>
        </Card>
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-lg text-white mb-4">
            Bu kitap, büyü dünyasına adım atmak veya bilgilerinizi derinleştirmek isteyenler için mükemmel bir kaynaktır.
          </p>
          <Button className="bg-white text-purple-700 hover:bg-purple-100">
            Örnek Sayfaları Görüntüle
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default BuyuKitabi;
