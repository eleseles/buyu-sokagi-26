import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

const TekKartTarot = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const tarotCards = [
    { name: "The Fool", meaning: "Yeni başlangıçlar, masumiyet, spontanlık", image: "/images/tarot/fool.jpg" },
    { name: "The Magician", meaning: "Yaratıcılık, beceri, irade gücü", image: "/images/tarot/magician.jpg" },
    { name: "The High Priestess", meaning: "Sezgi, bilinçaltı, gizem", image: "/images/tarot/high-priestess.jpg" },
    { name: "The Empress", meaning: "Bereket, annelik, doğa", image: "/images/tarot/empress.jpg" },
    { name: "The Emperor", meaning: "Otorite, yapı, liderlik", image: "/images/tarot/emperor.jpg" },
    // Daha fazla kart eklenebilir
  ];

  const selectRandomCard = () => {
    setIsFlipped(false);
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    setSelectedCard(tarotCards[randomIndex]);
    setTimeout(() => setIsFlipped(true), 500);
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
          Tek Kart Tarot
        </motion.h1>
        <Card className="bg-white bg-opacity-10 backdrop-blur-md max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Günlük Tarot Kartınız</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <AnimatePresence mode="wait">
              {selectedCard && (
                <motion.div
                  key={selectedCard.name}
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  exit={{ rotateY: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-64 h-96 mx-auto mb-4"
                >
                  <div className="absolute w-full h-full backface-hidden">
                    <img src="/images/tarot/card-back.jpg" alt="Tarot card back" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="absolute w-full h-full backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
                    <img src={selectedCard.image} alt={selectedCard.name} className="w-full h-full object-cover rounded-lg" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {isFlipped && selectedCard && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-purple-100 mb-2">{selectedCard.name}</h3>
                <p className="text-purple-200 mb-4">{selectedCard.meaning}</p>
              </motion.div>
            )}
            <Button onClick={selectRandomCard} className="bg-purple-600 hover:bg-purple-700 text-white">
              {selectedCard ? "Yeni Kart Çek" : "Kart Çek"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TekKartTarot;