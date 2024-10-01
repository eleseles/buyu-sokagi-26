import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Star, Shield, Zap, Moon } from 'lucide-react';

const BuyuDualari = () => {
  const [customDua, setCustomDua] = useState('');
  const [dualar, setDualar] = useState([
    { title: "Aşk Duası", icon: Heart, content: "Sevgi dolu kalplerle birleşelim, aşkımız sonsuza dek sürsün." },
    { title: "Şans Duası", icon: Star, content: "Talih yıldızım parlasın, şans her adımımda benimle olsun." },
    { title: "Koruma Duası", icon: Shield, content: "Kötülüklerden uzak, iyiliklerle dolu bir yaşam için korunayım." },
    { title: "Güç Duası", icon: Zap, content: "İçimdeki güç ortaya çıksın, hedeflerime ulaşmamı sağlasın." },
    { title: "Huzur Duası", icon: Moon, content: "İç huzurum artsın, ruhum sakinleşsin, zihnimde barış hüküm sürsün." },
  ]);

  const handleCustomDuaSubmit = (e) => {
    e.preventDefault();
    if (customDua.trim() !== '') {
      setDualar([...dualar, { title: "Özel Dua", icon: Star, content: customDua }]);
      setCustomDua('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Büyü Duaları
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-6">
          {dualar.map((dua, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-white bg-opacity-10 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <dua.icon className="w-6 h-6 mr-2" />
                    {dua.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-100 italic">"{dua.content}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <Card className="mt-12 bg-white bg-opacity-10 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Kendi Duanızı Oluşturun</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCustomDuaSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Kendi duanızı yazın..."
                value={customDua}
                onChange={(e) => setCustomDua(e.target.value)}
                className="bg-purple-800 bg-opacity-30 text-white placeholder-purple-300"
              />
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Duayı Ekle
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuyuDualari;