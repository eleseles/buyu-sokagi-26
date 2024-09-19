import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, Zap, Shield, ThumbsUp, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const KullaniciDeneyimleri = () => {
  const [yeniYorum, setYeniYorum] = useState('');
  const [deneyimler, setDeneyimler] = useState([
    {
      isim: "Ayşe K.",
      avatar: "AK",
      deneyim: "Aşk büyüsü yaptırdıktan sonra hayatım değişti. Şu an çok mutlu bir ilişkim var!",
      icon: Heart,
      color: "text-red-500",
      tarih: "2 gün önce",
      begeniSayisi: 15,
      yorumlar: [
        { isim: "Mehmet Y.", yorum: "Harika! Ben de denemek istiyorum." },
        { isim: "Zeynep B.", yorum: "Çok mutlu oldum senin adına!" }
      ]
    },
    {
      isim: "Mehmet Y.",
      avatar: "MY",
      deneyim: "Şans büyüsü sonrası işlerim açıldı. İnanılmaz bir deneyimdi.",
      icon: Star,
      color: "text-yellow-500",
      tarih: "1 hafta önce",
      begeniSayisi: 23,
      yorumlar: [
        { isim: "Ali R.", yorum: "Hangi büyücüye gittin? Ben de gitmek istiyorum." }
      ]
    },
    {
      isim: "Zeynep B.",
      avatar: "ZB",
      deneyim: "Koruma büyüsü sayesinde negatif enerjilerden arındım. Kendimi çok daha iyi hissediyorum.",
      icon: Shield,
      color: "text-blue-500",
      tarih: "3 gün önce",
      begeniSayisi: 18,
      yorumlar: []
    },
    {
      isim: "Ali R.",
      avatar: "AR",
      deneyim: "Zenginlik büyüsünden sonra beklenmedik bir miras aldım. Gerçekten işe yarıyor!",
      icon: Zap,
      color: "text-green-500",
      tarih: "5 gün önce",
      begeniSayisi: 30,
      yorumlar: [
        { isim: "Ayşe K.", yorum: "Vay canına! Çok heyecan verici!" },
        { isim: "Mehmet Y.", yorum: "Bana da öğretir misin?" }
      ]
    },
  ]);

  const handleBegeni = (index) => {
    const yeniDeneyimler = [...deneyimler];
    yeniDeneyimler[index].begeniSayisi += 1;
    setDeneyimler(yeniDeneyimler);
  };

  const handleYorumEkle = (index) => {
    if (yeniYorum.trim() === '') return;
    const yeniDeneyimler = [...deneyimler];
    yeniDeneyimler[index].yorumlar.push({ isim: "Siz", yorum: yeniYorum });
    setDeneyimler(yeniDeneyimler);
    setYeniYorum('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Kullanıcı Deneyimleri
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {deneyimler.map((deneyim, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="bg-white bg-opacity-10 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar>
                        <AvatarFallback>{deneyim.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-white">{deneyim.isim}</h3>
                        <p className="text-sm text-purple-200">{deneyim.tarih}</p>
                      </div>
                      {React.createElement(deneyim.icon, { className: `w-6 h-6 ${deneyim.color}` })}
                    </div>
                    <p className="text-purple-100 mb-4">{deneyim.deneyim}</p>
                    <div className="flex items-center space-x-4 mb-4">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleBegeni(index)}
                        className="text-purple-200 hover:text-purple-100"
                      >
                        <ThumbsUp className="w-4 h-4 mr-2" />
                        {deneyim.begeniSayisi} Beğeni
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-purple-200 hover:text-purple-100"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {deneyim.yorumlar.length} Yorum
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {deneyim.yorumlar.map((yorum, yorumIndex) => (
                        <div key={yorumIndex} className="bg-purple-800 bg-opacity-30 p-2 rounded">
                          <p className="text-sm font-semibold text-purple-200">{yorum.isim}</p>
                          <p className="text-sm text-purple-100">{yorum.yorum}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Input 
                        type="text" 
                        placeholder="Yorum yazın..." 
                        value={yeniYorum}
                        onChange={(e) => setYeniYorum(e.target.value)}
                        className="bg-purple-800 bg-opacity-30 text-purple-100 placeholder-purple-300"
                      />
                      <Button onClick={() => handleYorumEkle(index)}>Gönder</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-lg text-white mb-4">
            Bu deneyimler gerçek kullanıcılarımıza aittir. Her deneyim kişiseldir ve sonuçlar değişiklik gösterebilir.
          </p>
          <p className="text-purple-200 mb-4">
            Siz de kendi büyü deneyiminizi yaşamak ister misiniz?
          </p>
          <Button size="lg" className="bg-purple-700 hover:bg-purple-800 text-white">
            Hemen Başla
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default KullaniciDeneyimleri;
