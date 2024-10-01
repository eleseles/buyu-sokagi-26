import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Star, Heart, Zap, Shield, Sparkles, Compass, Feather, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

const UcKartTarot = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [isFlipped, setIsFlipped] = useState([false, false, false]);
  const [showInterpretation, setShowInterpretation] = useState(false);
  const { toast } = useToast();

  const tarotCards = [
    { name: "The Sun", meaning: "Başarı, mutluluk, pozitif enerji", icon: Sun, color: "text-yellow-500", interpretation: "Hayatınızda parlak bir dönem başlıyor. Başarılarınızın tadını çıkarın ve pozitif enerjinizi çevrenizdekilerle paylaşın." },
    { name: "The Moon", meaning: "Sezgiler, bilinçaltı, gizem", icon: Moon, color: "text-blue-300", interpretation: "İç sesinizi dinleme zamanı. Rüyalarınıza ve sezgilerinize güvenin, size yol gösterecekler." },
    { name: "The Star", meaning: "Umut, ilham, rehberlik", icon: Star, color: "text-purple-300", interpretation: "Umudunuzu kaybetmeyin. Yıldızlar size rehberlik ediyor ve yakında hayalleriniz gerçekleşecek." },
    { name: "The Lovers", meaning: "Aşk, uyum, ilişkiler", icon: Heart, color: "text-red-500", interpretation: "İlişkilerinizde uyum ve dengeyi bulacaksınız. Sevgi dolu bir dönem sizi bekliyor." },
    { name: "The Tower", meaning: "Ani değişim, yıkım, yeniden yapılanma", icon: Zap, color: "text-orange-500", interpretation: "Büyük değişimler kapıda. Bu zorlu süreç sizi daha güçlü kılacak ve yeni fırsatlar doğuracak." },
    { name: "The Hermit", meaning: "İçe dönüş, yalnızlık, bilgelik arayışı", icon: Shield, color: "text-green-500", interpretation: "Kendinize zaman ayırın ve içsel yolculuğunuza odaklanın. Bu dönemde edindiğiniz bilgelik, ileride size rehberlik edecek." },
    { name: "The Magician", meaning: "Yaratıcılık, beceri, irade gücü", icon: Sparkles, color: "text-indigo-500", interpretation: "Yaratıcı gücünüzü kullanma zamanı. Hedeflerinize ulaşmak için gereken tüm kaynaklara sahipsiniz." },
    { name: "The Fool", meaning: "Yeni başlangıçlar, spontanlık, macera", icon: Compass, color: "text-teal-500", interpretation: "Yeni bir maceraya atılmaktan korkmayın. Spontane kararlar, sizi beklenmedik güzelliklere götürebilir." },
    { name: "The High Priestess", meaning: "Sezgi, gizli bilgi, bilinçaltı", icon: Eye, color: "text-pink-500", interpretation: "İç sesinizi dinleyin ve sezgilerinize güvenin. Bilinçaltınızdaki bilgeliğe erişme zamanı." },
    { name: "The Empress", meaning: "Bereket, annelik, doğa", icon: Feather, color: "text-green-300", interpretation: "Bolluk ve bereket dönemindesiniz. Yaratıcılığınızı ve şefkatinizi çevrenizdekilerle paylaşın." },
  ];

  const selectRandomCards = () => {
    setIsFlipped([false, false, false]);
    const shuffled = [...tarotCards].sort(() => 0.5 - Math.random());
    setSelectedCards(shuffled.slice(0, 3));
    setTimeout(() => setIsFlipped([true, true, true]), 500);
    toast({
      title: "Yeni Kartlar Çekildi!",
      description: "Geçmiş, şimdi ve geleceğiniz için üç kart çekildi.",
      duration: 3000,
    });
  };

  const cardTitles = ["Geçmiş", "Şimdi", "Gelecek"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Üç Kart Tarot Falı
        </motion.h1>
        <Card className="bg-white bg-opacity-10 backdrop-blur-md max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Geçmiş, Şimdi ve Gelecek</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <AnimatePresence>
                {selectedCards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="text-center"
                  >
                    <h3 className="text-lg font-bold text-purple-100 mb-2">{cardTitles[index]}</h3>
                    <motion.div
                      initial={{ rotateY: 0 }}
                      animate={{ rotateY: isFlipped[index] ? 180 : 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-48 h-72 mx-auto mb-4"
                    >
                      <div className="absolute w-full h-full backface-hidden bg-purple-800 rounded-lg flex items-center justify-center">
                        <Star className="w-24 h-24 text-yellow-300" />
                      </div>
                      <div className="absolute w-full h-full backface-hidden bg-purple-700 rounded-lg flex flex-col items-center justify-center" style={{ transform: 'rotateY(180deg)' }}>
                        {React.createElement(card.icon, { className: `w-24 h-24 ${card.color} mb-4` })}
                      </div>
                    </motion.div>
                    {isFlipped[index] && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        <h4 className="text-md font-semibold text-purple-200 mb-1">{card.name}</h4>
                        <p className="text-sm text-purple-300">{card.meaning}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <div className="text-center">
              <Button onClick={selectRandomCards} className="bg-purple-600 hover:bg-purple-700 text-white mb-2">
                {selectedCards.length > 0 ? "Yeni Kartlar Çek" : "Kartları Çek"}
              </Button>
              {selectedCards.length > 0 && (
                <Button onClick={() => setShowInterpretation(true)} className="bg-purple-600 hover:bg-purple-700 text-white ml-2">
                  Yorumu Gör
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      <Dialog open={showInterpretation} onOpenChange={setShowInterpretation}>
        <DialogContent className="bg-purple-900 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl">Üç Kart Tarot Yorumu</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {selectedCards.map((card, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold flex items-center">
                  {React.createElement(card.icon, { className: `w-6 h-6 mr-2 ${card.color}` })}
                  {cardTitles[index]}: {card.name}
                </h3>
                <p className="text-sm mt-1">{card.interpretation}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm italic">Bu yorum, kartların genel anlamlarını yansıtır. Kendi hayatınızla nasıl bağlantı kurduğunu düşünün ve sezgilerinize güvenin.</p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UcKartTarot;