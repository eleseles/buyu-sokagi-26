import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Heart, Sparkles, Shield, Coins, Stethoscope, Trophy } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BuyuTurleri = () => {
  const buyuTurleri = [
    {
      title: "Aşk Büyüsü",
      description: "İki kişi arasındaki duygusal bağı güçlendirmek veya yeni bir aşk çekmek için yapılır.",
      icon: Heart,
      color: "text-red-500"
    },
    {
      title: "Şans Büyüsü",
      description: "Kişinin hayatına olumlu enerji çekmek ve şansını artırmak için yapılır.",
      icon: Sparkles,
      color: "text-yellow-500"
    },
    {
      title: "Koruma Büyüsü",
      description: "Kişiyi negatif enerjilerden ve kötü niyetli büyülerden korumak için yapılır.",
      icon: Shield,
      color: "text-blue-500"
    },
    {
      title: "Zenginlik Büyüsü",
      description: "Maddi refah ve bolluk çekmek için yapılır.",
      icon: Coins,
      color: "text-green-500"
    },
    {
      title: "Sağlık Büyüsü",
      description: "Hastalıklardan korunmak veya iyileşmeyi hızlandırmak için yapılır.",
      icon: Stethoscope,
      color: "text-purple-500"
    },
    {
      title: "Başarı Büyüsü",
      description: "Kişisel ve profesyonel hedeflere ulaşmak için yapılır.",
      icon: Trophy,
      color: "text-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Büyü Türleri
        </motion.h1>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {buyuTurleri.map((buyu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-white hover:text-purple-200">
                  <div className="flex items-center">
                    {React.createElement(buyu.icon, { className: `w-6 h-6 mr-2 ${buyu.color}` })}
                    <span>{buyu.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-purple-100">
                  <p>{buyu.description}</p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Kullanılan Malzemeler:</h4>
                    <ul className="list-disc list-inside">
                      <li>Özel mumlar</li>
                      <li>Tılsımlı taşlar</li>
                      <li>Bitkisel karışımlar</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Uygulama Süreci:</h4>
                    <p>Bu büyü türü, özel bir ritüel eşliğinde uygulanır ve genellikle belirli ay evrelerinde yapılması önerilir.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-lg text-white mb-4">
            Büyü türleri hakkında daha fazla bilgi edinmek ve kişisel danışmanlık almak için üye olun.
          </p>
          <a href="/uye-ol" className="inline-block bg-white text-purple-700 px-6 py-3 rounded-lg hover:bg-purple-100 transition-colors duration-300">
            Üye Ol
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default BuyuTurleri;
