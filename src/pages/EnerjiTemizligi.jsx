import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Wind, Sun, Droplet, Flame } from 'lucide-react';

const adimlar = [
  { id: 1, baslik: "Nefes Egzersizi", icon: Wind, aciklama: "Derin nefesler alarak zihninizi sakinleştirin." },
  { id: 2, baslik: "Güneş Vizualizasyonu", icon: Sun, aciklama: "Kendinizi güneş ışığıyla dolmuş hayal edin." },
  { id: 3, baslik: "Su ile Arınma", icon: Droplet, aciklama: "Suyun temizleyici gücünü hayal edin." },
  { id: 4, baslik: "Ateş Meditasyonu", icon: Flame, aciklama: "Negatif enerjilerin bir alevde yandığını hayal edin." },
];

const EnerjiTemizligi = () => {
  const [aktifAdim, setAktifAdim] = useState(0);

  const ilerle = () => {
    if (aktifAdim < adimlar.length - 1) {
      setAktifAdim(aktifAdim + 1);
    }
  };

  const geriDon = () => {
    if (aktifAdim > 0) {
      setAktifAdim(aktifAdim - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Enerji Temizliği Rehberi
        </motion.h1>
        <Card className="max-w-2xl mx-auto bg-white bg-opacity-20 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center justify-center">
              {React.createElement(adimlar[aktifAdim].icon, { className: "w-8 h-8 mr-2" })}
              {adimlar[aktifAdim].baslik}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-purple-100 mb-6">{adimlar[aktifAdim].aciklama}</p>
            <Progress value={(aktifAdim + 1) / adimlar.length * 100} className="mb-6" />
            <div className="flex justify-between">
              <Button onClick={geriDon} disabled={aktifAdim === 0}>Geri</Button>
              <Button onClick={ilerle} disabled={aktifAdim === adimlar.length - 1}>
                {aktifAdim === adimlar.length - 1 ? "Tamamla" : "İlerle"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnerjiTemizligi;