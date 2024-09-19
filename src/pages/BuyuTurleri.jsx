import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from 'framer-motion';

const BuyuTurleri = () => {
  const buyuTurleri = [
    {
      title: "Aşk Büyüsü",
      content: "Aşk büyüsü, iki kişi arasındaki duygusal bağı güçlendirmek veya yeni bir aşk çekmek için yapılır. Genellikle gül yaprakları, kırmızı mum ve kişisel eşyalar kullanılır. Dikkatli kullanılması gereken güçlü bir büyü türüdür.",
      image: "https://example.com/ask-buyusu.jpg"
    },
    {
      title: "Şans Büyüsü",
      content: "Şans büyüsü, kişinin hayatına olumlu enerji çekmek ve şansını artırmak için yapılır. Dört yapraklı yonca, at nalı ve yeşil mum gibi şans getirici nesneler kullanılır. Hayatınızdaki fırsatları artırmak için idealdir.",
      image: "https://example.com/sans-buyusu.jpg"
    },
    {
      title: "Koruma Büyüsü",
      content: "Koruma büyüsü, kişiyi negatif enerjilerden ve kötü niyetli büyülerden korumak için yapılır. Tuz, beyaz mum ve koruyucu semboller kullanılır. Kendinizi ve sevdiklerinizi korumak için güçlü bir araçtır.",
      image: "https://example.com/koruma-buyusu.jpg"
    },
    {
      title: "Zenginlik Büyüsü",
      content: "Zenginlik büyüsü, maddi refah ve bolluk çekmek için yapılır. Altın renkli nesneler, para ve tarçın gibi malzemeler kullanılır. Finansal hedeflerinize ulaşmanıza yardımcı olabilir.",
      image: "https://example.com/zenginlik-buyusu.jpg"
    },
    {
      title: "Sağlık Büyüsü",
      content: "Sağlık büyüsü, hastalıklardan korunmak veya iyileşmeyi hızlandırmak için yapılır. Şifalı bitkiler, kristaller ve mavi mum kullanılır. Fiziksel ve zihinsel sağlığınızı desteklemek için kullanılır.",
      image: "https://example.com/saglik-buyusu.jpg"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center text-purple-700">Büyü Türleri</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-lg">Büyü dünyasında çeşitli amaçlara hizmet eden farklı büyü türleri bulunur. İşte en yaygın büyü türleri ve özellikleri:</p>
            <Accordion type="single" collapsible className="w-full">
              {buyuTurleri.map((buyu, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold">{buyu.title}</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
                      <img src={buyu.image} alt={buyu.title} className="w-full md:w-1/3 rounded-lg" />
                      <p className="text-gray-700">{buyu.content}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="mt-6 text-sm text-gray-500">Not: Büyü yapmak, etik ve yasal sonuçları olabilecek bir konudur. Bu bilgiler sadece bilgilendirme amaçlıdır.</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default BuyuTurleri;
