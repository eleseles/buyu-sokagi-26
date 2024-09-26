import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from 'framer-motion';
import { Wand2, Sparkles, Heart, Coins, Shield, Zap, Moon, Sun, Feather } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const BuyuYapimi = () => {
  const [selectedBuyu, setSelectedBuyu] = useState(null);
  const [customIngredient, setCustomIngredient] = useState('');
  const { toast } = useToast();

  const buyuTurleri = [
    {
      title: "Aşk Büyüsü",
      icon: Heart,
      color: "text-red-500",
      content: "Aşk büyüsü, iki kişi arasındaki duygusal bağı güçlendirmek veya yeni bir aşk çekmek için yapılır.",
      malzemeler: ["Gül yaprakları", "Kırmızı mum", "Aşk taşı (Pembe kuvars)", "Tarçın", "Bal"],
      adimlar: [
        "Kırmızı mumu yakın ve niyetinizi söyleyin.",
        "Gül yapraklarını mumun etrafına dizin.",
        "Aşk taşını avucunuzda tutarak sevgi enerjisini hissedin.",
        "Tarçın ve balı karıştırıp bir kağıda sevdiğinizin ismini yazın.",
        "Kağıdı katlayıp mum ışığında yakın ve küllerini rüzgara bırakın."
      ]
    },
    {
      title: "Şans Büyüsü",
      icon: Sparkles,
      color: "text-yellow-500",
      content: "Şans büyüsü, kişinin hayatına olumlu enerji çekmek ve şansını artırmak için yapılır.",
      malzemeler: ["Yeşil mum", "Dört yapraklı yonca", "Zar", "Altın renkli ip", "Karanfil"],
      adimlar: [
        "Yeşil mumu yakın ve şanslı olma niyetinizi söyleyin.",
        "Dört yapraklı yoncayı mumun yanına koyun.",
        "Zarı 3 kez atın ve her atışta şanslı olacağınızı tekrarlayın.",
        "Altın renkli iple bileğinize bir bileklik yapın.",
        "Karanfili yakıp dumanını üzerinize doğru üfleyin."
      ]
    },
    {
      title: "Koruma Büyüsü",
      icon: Shield,
      color: "text-blue-500",
      content: "Koruma büyüsü, kişiyi negatif enerjilerden ve kötü niyetli büyülerden korumak için yapılır.",
      malzemeler: ["Beyaz mum", "Tuz", "Defne yaprağı", "Siyah obsidyen taşı", "Lavanta"],
      adimlar: [
        "Beyaz mumu yakın ve koruma niyetinizi söyleyin.",
        "Tuzla evinizin girişine bir çizgi çekin.",
        "Defne yapraklarını evin köşelerine yerleştirin.",
        "Siyah obsidyen taşını üzerinizde taşıyın.",
        "Lavanta yağını bileklerinize ve şakaklarınıza sürün."
      ]
    },
    {
      title: "Zenginlik Büyüsü",
      icon: Coins,
      color: "text-green-500",
      content: "Zenginlik büyüsü, maddi refah ve bolluk çekmek için yapılır.",
      malzemeler: ["Yeşil mum", "Tarçın çubukları", "Bozuk para", "Defne yaprağı", "Zümrüt taşı"],
      adimlar: [
        "Yeşil mumu yakın ve zenginlik niyetinizi söyleyin.",
        "Tarçın çubuklarını mum etrafında daire şeklinde dizin.",
        "Bozuk parayı mumun yanına koyun ve üzerine defne yaprağı yerleştirin.",
        "Zümrüt taşını avucunuzda tutarak zenginlik enerjisini hissedin.",
        "Her gün mumu 5 dakika yakıp meditasyon yapın."
      ]
    },
    {
      title: "Güç Büyüsü",
      icon: Zap,
      color: "text-purple-500",
      content: "Güç büyüsü, kişisel gücünüzü artırmak ve hedeflerinize ulaşmak için yapılır.",
      malzemeler: ["Mor mum", "Kaplan gözü taşı", "Meşe palamudu", "Karanfil", "Kırmızı ip"],
      adimlar: [
        "Mor mumu yakın ve güçlü olma niyetinizi söyleyin.",
        "Kaplan gözü taşını mumun yanına yerleştirin.",
        "Meşe palamudunu avucunuzda tutarak doğanın gücünü hissedin.",
        "Karanfili yakıp dumanını soluyun.",
        "Kırmızı iple bileğinize güç sembolü çizin."
      ]
    }
  ];

  const handleCustomIngredient = () => {
    if (customIngredient.trim() !== '' && selectedBuyu) {
      const updatedBuyu = {
        ...selectedBuyu,
        malzemeler: [...selectedBuyu.malzemeler, customIngredient]
      };
      setSelectedBuyu(updatedBuyu);
      setCustomIngredient('');
      toast({
        title: "Malzeme Eklendi",
        description: `${customIngredient} başarıyla eklendi.`,
        duration: 3000,
      });
    }
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
          Büyü Nasıl Yapılır?
        </motion.h1>
        <Card className="bg-white bg-opacity-10 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Büyü Türleri ve Yapılışları</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-purple-100">Büyü yapmak, doğaüstü güçleri kullanarak istenen sonuçları elde etme girişimidir. Farklı büyü türleri ve yapılış yöntemleri vardır. Lütfen dikkatli ve saygılı bir şekilde uygulamaya özen gösterin.</p>
            <Accordion type="single" collapsible className="w-full">
              {buyuTurleri.map((buyu, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-white hover:text-purple-200">
                    <div className="flex items-center">
                      {React.createElement(buyu.icon, { className: `w-6 h-6 mr-2 ${buyu.color}` })}
                      <span>{buyu.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-purple-100">
                    <p className="mb-4">{buyu.content}</p>
                    <h4 className="font-semibold mb-2">Malzemeler:</h4>
                    <ul className="list-disc list-inside mb-4">
                      {buyu.malzemeler.map((malzeme, mIndex) => (
                        <li key={mIndex}>{malzeme}</li>
                      ))}
                    </ul>
                    <h4 className="font-semibold mb-2">Yapılış Adımları:</h4>
                    <ol className="list-decimal list-inside">
                      {buyu.adimlar.map((adim, aIndex) => (
                        <li key={aIndex} className="mb-1">{adim}</li>
                      ))}
                    </ol>
                    <Button 
                      className="mt-4 bg-purple-600 hover:bg-purple-700 text-white"
                      onClick={() => setSelectedBuyu(buyu)}
                    >
                      Bu Büyüyü Seç
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
        {selectedBuyu && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <Card className="bg-white bg-opacity-10 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-white">Seçilen Büyü: {selectedBuyu.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-purple-100">
                <p className="mb-4">{selectedBuyu.content}</p>
                <h4 className="font-semibold mb-2">Gerekli Malzemeler:</h4>
                <ul className="list-disc list-inside mb-4">
                  {selectedBuyu.malzemeler.map((malzeme, index) => (
                    <li key={index}>{malzeme}</li>
                  ))}
                </ul>
                <div className="flex space-x-2 mb-4">
                  <Input
                    type="text"
                    placeholder="Özel malzeme ekle"
                    value={customIngredient}
                    onChange={(e) => setCustomIngredient(e.target.value)}
                    className="bg-purple-800 bg-opacity-30 text-white placeholder-purple-300"
                  />
                  <Button onClick={handleCustomIngredient} className="bg-purple-600 hover:bg-purple-700 text-white">
                    Ekle
                  </Button>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Malzemeleri Sipariş Et
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-lg text-white mb-4">
            Not: Büyü yapmak, etik ve yasal sonuçları olabilecek bir konudur. Bu bilgiler sadece eğitim amaçlıdır.
          </p>
          <Button className="bg-white text-purple-700 hover:bg-purple-100">
            Daha Fazla Bilgi Al
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default BuyuYapimi;