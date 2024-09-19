import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Heart, Sparkles, Shield, Coins, Stethoscope, Trophy, Moon, Sun, Zap, Feather, Eye, Compass } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const BuyuTurleri = () => {
  const buyuTurleri = [
    {
      title: "Aşk Büyüsü",
      description: "İki kişi arasındaki duygusal bağı güçlendirmek veya yeni bir aşk çekmek için yapılır.",
      icon: Heart,
      color: "text-red-500",
      malzemeler: ["Gül yaprakları", "Kırmızı mum", "Aşk taşları (Pembe kuvars, Rodokrozit)"],
      etkiler: ["Duygusal bağın güçlenmesi", "Yeni aşk fırsatları", "İlişki problemlerinin çözülmesi"]
    },
    {
      title: "Şans Büyüsü",
      description: "Kişinin hayatına olumlu enerji çekmek ve şansını artırmak için yapılır.",
      icon: Sparkles,
      color: "text-yellow-500",
      malzemeler: ["Dört yapraklı yonca", "Yeşil mum", "Şans taşları (Aventurin, Sitrin)"],
      etkiler: ["Genel şansın artması", "Fırsatların çoğalması", "Pozitif enerjinin artması"]
    },
    {
      title: "Koruma Büyüsü",
      description: "Kişiyi negatif enerjilerden ve kötü niyetli büyülerden korumak için yapılır.",
      icon: Shield,
      color: "text-blue-500",
      malzemeler: ["Tuz", "Beyaz mum", "Koruyucu taşlar (Obsidyen, Turmalin)"],
      etkiler: ["Negatif enerjilerden korunma", "Kötü niyetli büyülerin etkisizleşmesi", "Ruhsal bariyerin güçlenmesi"]
    },
    {
      title: "Zenginlik Büyüsü",
      description: "Maddi refah ve bolluk çekmek için yapılır.",
      icon: Coins,
      color: "text-green-500",
      malzemeler: ["Tarçın", "Yeşil mum", "Bereket taşları (Jade, Pirit)"],
      etkiler: ["Finansal fırsatların artması", "Para akışının hızlanması", "Maddi bolluğun çekilmesi"]
    },
    {
      title: "Sağlık Büyüsü",
      description: "Hastalıklardan korunmak veya iyileşmeyi hızlandırmak için yapılır.",
      icon: Stethoscope,
      color: "text-purple-500",
      malzemeler: ["Lavanta", "Mavi mum", "Şifa taşları (Ametist, Akuamarin)"],
      etkiler: ["Bağışıklık sisteminin güçlenmesi", "İyileşme sürecinin hızlanması", "Genel sağlık durumunun iyileşmesi"]
    },
    {
      title: "Başarı Büyüsü",
      description: "Kişisel ve profesyonel hedeflere ulaşmak için yapılır.",
      icon: Trophy,
      color: "text-orange-500",
      malzemeler: ["Defne yaprağı", "Altın renkli mum", "Başarı taşları (Kaplan Gözü, Sitrin)"],
      etkiler: ["Motivasyonun artması", "Hedeflere ulaşma yolunda engellerin kalkması", "Kişisel ve profesyonel başarının artması"]
    },
    {
      title: "Rüya Büyüsü",
      description: "Rüyaları kontrol etmek veya rüyalar aracılığıyla mesajlar almak için yapılır.",
      icon: Moon,
      color: "text-indigo-500",
      malzemeler: ["Papatya", "Mor mum", "Rüya taşları (Labradorit, Ay Taşı)"],
      etkiler: ["Lucid rüya görme yeteneğinin gelişmesi", "Rüyalar aracılığıyla rehberlik alma", "Astral seyahat yeteneklerinin artması"]
    },
    {
      title: "Enerji Büyüsü",
      description: "Kişisel enerjiyi artırmak ve canlandırmak için yapılır.",
      icon: Zap,
      color: "text-yellow-400",
      malzemeler: ["Zencefil", "Turuncu mum", "Enerji taşları (Karnelyan, Güneş Taşı)"],
      etkiler: ["Fiziksel ve zihinsel enerjinin artması", "Yorgunluğun azalması", "Yaşam gücünün yükselmesi"]
    },
    {
      title: "İlham Büyüsü",
      description: "Yaratıcılığı artırmak ve yeni fikirler elde etmek için yapılır.",
      icon: Feather,
      color: "text-pink-400",
      malzemeler: ["Biberiye", "Mavi mum", "İlham taşları (Lapis Lazuli, Akuamarin)"],
      etkiler: ["Yaratıcı blokajların kaldırılması", "Yeni fikirlerin akışının hızlanması", "Sanatsal yeteneklerin gelişmesi"]
    },
    {
      title: "Görünmezlik Büyüsü",
      description: "Fiziksel veya enerjisel olarak görünmez olmak için yapılır.",
      icon: Eye,
      color: "text-gray-500",
      malzemeler: ["Adaçayı", "Siyah mum", "Gizlilik taşları (Dumanlı Kuvars, Ay Taşı)"],
      etkiler: ["Fiziksel görünmezlik", "Enerjisel gizlilik", "Dikkat çekmeme yeteneğinin artması"]
    },
    {
      title: "Yol Açma Büyüsü",
      description: "Hayattaki engelleri kaldırmak ve yeni fırsatlar açmak için yapılır.",
      icon: Compass,
      color: "text-teal-500",
      malzemeler: ["Karanfil", "Yeşil mum", "Yol açıcı taşlar (Labradorit, Aytaşı)"],
      etkiler: ["Karşılaşılan engellerin kalkması", "Yeni fırsatların ortaya çıkması", "Hayat yolunun netleşmesi"]
    },
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
        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
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
                  <p className="mb-4">{buyu.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Kullanılan Malzemeler:</h4>
                    <ul className="list-disc list-inside">
                      {buyu.malzemeler.map((malzeme, mIndex) => (
                        <li key={mIndex}>{malzeme}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Beklenen Etkiler:</h4>
                    <ul className="list-disc list-inside">
                      {buyu.etkiler.map((etki, eIndex) => (
                        <li key={eIndex}>{etki}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm italic">
                    Not: Bu büyü türü, özel bir ritüel eşliğinde uygulanır ve genellikle belirli ay evrelerinde yapılması önerilir.
                  </p>
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
          <Button asChild className="bg-white text-purple-700 hover:bg-purple-100 transition-colors duration-300">
            <a href="/uye-ol">Üye Ol</a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default BuyuTurleri;
