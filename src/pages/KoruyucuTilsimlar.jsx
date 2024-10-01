import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Zap, Sun, Moon, Star } from 'lucide-react';

const tilsimlar = [
  { id: 1, isim: "Koruyucu Kalkan", icon: Shield, etki: "Genel koruma", aciklama: "Negatif enerjilere karşı güçlü bir kalkan oluşturur." },
  { id: 2, isim: "Sevgi Tılsımı", icon: Heart, etki: "Aşk ve ilişkiler", aciklama: "Sevgi dolu ilişkiler çeker ve mevcut ilişkileri güçlendirir." },
  { id: 3, isim: "Güç Tılsımı", icon: Zap, etki: "Kişisel güç", aciklama: "İç gücünüzü artırır ve hedeflerinize ulaşmanıza yardımcı olur." },
  { id: 4, isim: "Güneş Tılsımı", icon: Sun, etki: "Enerji ve canlılık", aciklama: "Pozitif enerji ve yaşam sevinci getirir." },
  { id: 5, isim: "Ay Tılsımı", icon: Moon, etki: "Sezgi ve rüyalar", aciklama: "Sezgisel yeteneklerinizi güçlendirir ve rüyalarınızı berraklaştırır." },
  { id: 6, isim: "Yıldız Tılsımı", icon: Star, etki: "Şans ve rehberlik", aciklama: "Şansınızı artırır ve ruhsal rehberlik sağlar." },
];

const KoruyucuTilsimlar = () => {
  const [seciliTilsim, setSeciliTilsim] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Koruyucu Tılsımlar
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tilsimlar.map((tilsim) => (
            <motion.div
              key={tilsim.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card 
                className="bg-white bg-opacity-20 backdrop-blur-md cursor-pointer"
                onClick={() => setSeciliTilsim(tilsim)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    {React.createElement(tilsim.icon, { className: "w-6 h-6 mr-2" })}
                    {tilsim.isim}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-100">{tilsim.etki}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        {seciliTilsim && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
          >
            <Card className="bg-white bg-opacity-30 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  {React.createElement(seciliTilsim.icon, { className: "w-8 h-8 mr-2" })}
                  {seciliTilsim.isim}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-purple-100 mb-4">{seciliTilsim.aciklama}</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Bu Tılsımı Edinmek İstiyorum
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default KoruyucuTilsimlar;