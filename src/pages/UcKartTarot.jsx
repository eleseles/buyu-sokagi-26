import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Star, Heart, Zap, Shield, Sparkles } from 'lucide-react';

const UcKartTarot = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [isFlipped, setIsFlipped] = useState([false, false, false]);

  const tarotCards = [
    { name: "The Sun", meaning: "Başarı, mutluluk, pozitif enerji", icon: Sun, color: "text-yellow-500" },
    { name: "The Moon", meaning: "Sezgiler, bilinçaltı, gizem", icon: Moon, color: "text-blue-300" },
    { name: "The Star", meaning: "Umut, ilham, rehberlik", icon: Star, color: "text-purple-300" },
    { name: "The Lovers", meaning: "Aşk, uyum, ilişkiler", icon: Heart, color: "text-red-500" },
    { name: "The Tower", meaning: "Ani değişim, yıkım, yeniden yapılanma", icon: Zap, color: "text-orange-500" },
    { name: "The Hermit", meaning: "İçe dönüş, yalnızlık, bilgelik arayışı", icon: Shield, color: "text-green-500" },
    { name: "The Magician", meaning: "Yaratıcılık, beceri, irade gücü", icon: Sparkles, color: "text-indigo-500" },
  ];

  const selectRandomCards = () => {
    setIsFlipped([false, false, false]);
    const shuffled = [...tarotCards].sort(() => 0.5 - Math.random());
    setSelectedCards(shuffled.slice(0, 3));
    setTimeout(() => setIsFlipped([true, true, true]), 500);
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
              <Button onClick={selectRandomCards} className="bg-purple-600 hover:bg-purple-700 text-white">
                {selectedCards.length > 0 ? "Yeni Kartlar Çek" : "Kartları Çek"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UcKartTarot;