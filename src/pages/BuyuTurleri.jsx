import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';

const BuyuTurleri = () => {
  const buyuTurleri = [
    {
      title: "Aşk Büyüsü",
      description: "İki kişi arasındaki duygusal bağı güçlendirmek veya yeni bir aşk çekmek için yapılır.",
      image: "/images/love-spell.jpg"
    },
    {
      title: "Şans Büyüsü",
      description: "Kişinin hayatına olumlu enerji çekmek ve şansını artırmak için yapılır.",
      image: "/images/luck-spell.jpg"
    },
    {
      title: "Koruma Büyüsü",
      description: "Kişiyi negatif enerjilerden ve kötü niyetli büyülerden korumak için yapılır.",
      image: "/images/protection-spell.jpg"
    },
    {
      title: "Zenginlik Büyüsü",
      description: "Maddi refah ve bolluk çekmek için yapılır.",
      image: "/images/wealth-spell.jpg"
    },
    {
      title: "Sağlık Büyüsü",
      description: "Hastalıklardan korunmak veya iyileşmeyi hızlandırmak için yapılır.",
      image: "/images/health-spell.jpg"
    },
    {
      title: "Başarı Büyüsü",
      description: "Kişisel ve profesyonel hedeflere ulaşmak için yapılır.",
      image: "/images/success-spell.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-indigo-200 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-purple-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Büyü Türleri
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {buyuTurleri.map((buyu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full overflow-hidden">
                <img src={buyu.image} alt={buyu.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle className="text-xl text-purple-700">{buyu.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{buyu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-lg text-gray-700 mb-4">
            Büyü türleri hakkında daha fazla bilgi edinmek ve kişisel danışmanlık almak için üye olun.
          </p>
          <a href="/uye-ol" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300">
            Üye Ol
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default BuyuTurleri;
