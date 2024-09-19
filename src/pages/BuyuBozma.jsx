import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Shield, Droplet, Moon, Gem, HeartPulse, Feather } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const BuyuBozma = () => {
  const yontemler = [
    {
      title: "Tuz Banyosu",
      description: "Vücudunuzu arındırmak için tuzlu su banyosu yapın. Bu yöntem negatif enerjileri temizler ve koruyucu bir bariyer oluşturur.",
      icon: Droplet,
      color: "text-blue-500",
      steps: [
        "Ilık suyla dolu bir küvete 1 fincan deniz tuzu ekleyin.",
        "15-20 dakika boyunca suda kalın ve rahatlamaya çalışın.",
        "Çıkarken, negatif enerjilerin akıp gittiğini hayal edin.",
        "Duş alarak arınma sürecini tamamlayın."
      ]
    },
    {
      title: "Beyaz Mum Yakma",
      description: "Negatif enerjileri uzaklaştırmak için beyaz mum yakın. Mumun alevine odaklanarak, kötü enerjilerin yok olduğunu hayal edin.",
      icon: Moon,
      color: "text-yellow-500",
      steps: [
        "Beyaz bir mum seçin ve güvenli bir yere yerleştirin.",
        "Mumu yakarken, niyetinizi sesli olarak ifade edin.",
        "10-15 dakika boyunca alevin dans edişini izleyin.",
        "Mumu söndürmeden önce, temizlendiğinizi hissedin."
      ]
    },
    {
      title: "Dua ve Meditasyon",
      description: "İçsel huzur ve koruma için dua edin ve meditasyon yapın. Bu pratikler, ruhsal bağlantınızı güçlendirir ve sizi korur.",
      icon: HeartPulse,
      color: "text-pink-500",
      steps: [
        "Rahat bir pozisyonda oturun veya uzanın.",
        "Derin nefesler alarak zihninizi sakinleştirin.",
        "Koruma ve arınma için içten gelen bir dua edin.",
        "15-20 dakika boyunca meditasyon yapın."
      ]
    },
    {
      title: "Şifalı Taşlar",
      description: "Ametist veya kuvars gibi koruyucu taşlar kullanın. Bu taşlar, negatif enerjileri emer ve pozitif enerjiyi artırır.",
      icon: Gem,
      color: "text-purple-500",
      steps: [
        "Ametist veya berrak kuvars gibi bir şifalı taş seçin.",
        "Taşı avucunuzda tutarak enerjisini hissedin.",
        "Taşı vücudunuzun çeşitli bölgelerine temas ettirin.",
        "Geceleri yastığınızın altına koyarak uyuyun."
      ]
    },
    {
      title: "Tütsü Yakma",
      description: "Adaçayı veya günlük gibi arındırıcı tütsüler yakın. Tütsünün dumanı, negatif enerjileri uzaklaştırır ve alanınızı temizler.",
      icon: Feather,
      color: "text-gray-500",
      steps: [
        "Adaçayı veya günlük tütsüsü seçin.",
        "Tütsüyü yakın ve dumanın odayı doldurmasına izin verin.",
        "Tütsüyle evinizin her köşesini dolaşın.",
        "Pencereyi açarak negatif enerjilerin çıkmasını sağlayın."
      ]
    },
    {
      title: "Profesyonel Yardım",
      description: "Gerekirse bir medyum veya spiritüel danışmana başvurun. Uzmanlar, karmaşık büyüleri çözmede size yardımcı olabilir.",
      icon: Shield,
      color: "text-green-500",
      steps: [
        "Güvenilir bir medyum veya spiritüel danışman bulun.",
        "Durumunuzu detaylı bir şekilde anlatın.",
        "Önerilen ritüel veya uygulamaları dikkatle takip edin.",
        "Düzenli seanslarla ilerlemenizi takip edin."
      ]
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
        <Card className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-md">
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
                      <p className="mb-4">{yontem.description}</p>
                      <h4 className="font-semibold mb-2">Uygulama Adımları:</h4>
                      <ol className="list-decimal list-inside">
                        {yontem.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="mb-1">{step}</li>
                        ))}
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <p className="mb-4 text-purple-100">
                Not: Bu yöntemler genel bilgi amaçlıdır. Ciddi durumlar için mutlaka bir uzmana danışın.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Uzman Desteği Al
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuyuBozma;
