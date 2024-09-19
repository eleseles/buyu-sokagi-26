import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from 'framer-motion';
import { Star, Heart, Zap, Shield } from 'lucide-react';

const KullaniciDeneyimleri = () => {
  const deneyimler = [
    {
      isim: "Ayşe K.",
      avatar: "AK",
      deneyim: "Aşk büyüsü yaptırdıktan sonra hayatım değişti. Şu an çok mutlu bir ilişkim var!",
      icon: Heart,
      color: "text-red-500"
    },
    {
      isim: "Mehmet Y.",
      avatar: "MY",
      deneyim: "Şans büyüsü sonrası işlerim açıldı. İnanılmaz bir deneyimdi.",
      icon: Star,
      color: "text-yellow-500"
    },
    {
      isim: "Zeynep B.",
      avatar: "ZB",
      deneyim: "Koruma büyüsü sayesinde negatif enerjilerden arındım. Kendimi çok daha iyi hissediyorum.",
      icon: Shield,
      color: "text-blue-500"
    },
    {
      isim: "Ali R.",
      avatar: "AR",
      deneyim: "Zenginlik büyüsünden sonra beklenmedik bir miras aldım. Gerçekten işe yarıyor!",
      icon: Zap,
      color: "text-green-500"
    },
  ];

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
          {deneyimler.map((deneyim, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
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
                      {React.createElement(deneyim.icon, { className: `w-6 h-6 ${deneyim.color}` })}
                    </div>
                  </div>
                  <p className="text-purple-100">{deneyim.deneyim}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
          <p className="text-purple-200">
            Siz de kendi büyü deneyiminizi yaşamak ister misiniz?
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default KullaniciDeneyimleri;
