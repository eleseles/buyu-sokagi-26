import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

const UcKartTarot = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [isFlipped, setIsFlipped] = useState([false, false, false]);

  const tarotCards = [
    { name: "The Fool", meaning: "Yeni başlangıçlar, masumiyet, spontanlık", image: "/images/tarot/fool.jpg" },
    { name: "The Magician", meaning: "Yaratıcılık, beceri, irade gücü", image: "/images/tarot/magician.jpg" },
    { name: "The High Priestess", meaning: "Sezgi, bilinçaltı, gizem", image: "/images/tarot/high-priestess.jpg" },
    { name: "The Empress", meaning: "Bereket, annelik, doğa", image: "/images/tarot/empress.jpg" },
    { name: "The Emperor", meaning: "Otorite, yapı, liderlik", image: "/images/tarot/emperor.jpg" },
    // Daha fazla kart eklenebilir
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
                      <div className="absolute w-full h-full backface-hidden">
                        <img src="/images/tarot/card-back.jpg" alt="Tarot card back" className="w-full h-full object-cover rounded-lg" />
                      </div>
                      <div className="absolute w-full h-full backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
                        <img src={card.image} alt={card.name} className="w-full h-full object-cover rounded-lg" />
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