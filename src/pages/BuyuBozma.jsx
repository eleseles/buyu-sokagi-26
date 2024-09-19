import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Shield, Droplet, Moon, Gem, HeartPulse } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BuyuBozma = () => {
  const yontemler = [
    {
      title: "Tuz Banyosu",
      description: "Vücudunuzu arındırmak için tuzlu su banyosu yapın. Bu yöntem negatif enerjileri temizler ve koruyucu bir bariyer oluşturur.",
      icon: Droplet,
      color: "text-blue-500"
    },
    {
      title: "Beyaz Mum Yakma",
      description: "Negatif enerjileri uzaklaştırmak için beyaz mum yakın. Mumun alevine odaklanarak, kötü enerjilerin yok olduğunu hayal edin.",
      icon: Moon,
      color: "text-yellow-500"
    },
    {
      title: "Dua ve Meditasyon",
      description: "İçsel huzur ve koruma için dua edin ve meditasyon yapın. Bu pratikler, ruhsal bağlantınızı güçlendirir ve sizi korur.",
      icon: HeartPulse,
      color: "text-pink-500"
    },
    {
      title: "Şifalı Taşlar",
      description: "Ametist veya kuvars gibi koruyucu taşlar kullanın. Bu taşlar, negatif enerjileri emer ve pozitif enerjiyi artırır.",
      icon: Gem,
      color: "text-purple-500"
    },
    {
      title: "Profesyonel Yardım",
      description: "Gerekirse bir medyum veya spiritüel danışmana başvurun. Uzmanlar, karmaşık büyüleri çözmede size yardımcı olabilir.",
      icon: Shield,
      color: "text-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Büyü Nasıl Bozulur?
        </motion.h1>
        <Card className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Büyü Bozma Yöntemleri</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-center text-purple-100">Büyü bozma, üzerinizdeki negatif etkileri kaldırmak için yapılan işlemlerdir. İşte bazı etkili büyü bozma yöntemleri:</p>
            <Accordion type="single" collapsible className="w-full">
              {yontemler.map((yontem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-white hover:text-purple-200">
                      <div className="flex items-center">
                        {React.createElement(yontem.icon, { className: `w-6 h-6 mr-2 ${yontem.color}` })}
                        <span>{yontem.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-purple-100">
                      <p>{yontem.description}</p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
            <motion.p 
              className="mt-6 text-center text-purple-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Not: Bu yöntemler genel bilgi amaçlıdır. Ciddi durumlar için mutlaka bir uzmana danışın.
            </motion.p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuyuBozma;
