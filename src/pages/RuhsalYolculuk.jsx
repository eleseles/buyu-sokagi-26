import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Compass, Book, Feather, Sparkles, Star } from 'lucide-react';

const hedefler = [
  { id: 1, baslik: "Meditasyon Pratiği", icon: Sparkles, aciklama: "Günlük meditasyon alışkanlığı geliştirin." },
  { id: 2, baslik: "Ruhsal Okumalar", icon: Book, aciklama: "Ruhsal gelişim kitapları okuyun." },
  { id: 3, baslik: "Günlük Tutma", icon: Feather, aciklama: "Ruhsal deneyimlerinizi ve içgörülerinizi kaydedin." },
  { id: 4, baslik: "Enerji Çalışması", icon: Sparkles, aciklama: "Çakra dengeleme ve enerji çalışmaları yapın." },
  { id: 5, baslik: "Rehberlik Arayışı", icon: Compass, aciklama: "Ruhsal bir rehber veya mentor bulun." },
];

const RuhsalYolculuk = () => {
  const [tamamlananlar, setTamamlananlar] = useState([]);

  const toggleHedef = (id) => {
    setTamamlananlar(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const ilerleme = (tamamlananlar.length / hedefler.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ruhsal Yolculuk Takibi
        </motion.h1>
        <Card className="max-w-2xl mx-auto bg-white bg-opacity-20 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center justify-center">
              <Star className="w-8 h-8 mr-2" />
              Ruhsal Gelişim Hedefleriniz
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={ilerleme} className="mb-6" />
            <p className="text-lg text-purple-100 mb-4">İlerlemeniz: %{ilerleme.toFixed(0)}</p>
            {hedefler.map((hedef) => (
              <motion.div
                key={hedef.id}
                className="mb-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className={`w-full justify-start text-left ${
                    tamamlananlar.includes(hedef.id) ? 'bg-green-500' : 'bg-purple-600'
                  } hover:bg-opacity-80`}
                  onClick={() => toggleHedef(hedef.id)}
                >
                  {React.createElement(hedef.icon, { className: "w-5 h-5 mr-2" })}
                  {hedef.baslik}
                </Button>
              </motion.div>
            ))}
          </CardContent>
        </Card>
        <Card className="max-w-2xl mx-auto bg-white bg-opacity-20 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Günlük Ruhsal Alıntı</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-purple-100 italic">
              "Ruhsal yolculuk, kendini tanıma ve evrenle bir olma sürecidir."
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RuhsalYolculuk;