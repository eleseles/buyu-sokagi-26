import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const TekKartTarot = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const tarotCards = [
    { name: "The Fool", meaning: "New beginnings, innocence, spontaneity" },
    { name: "The Magician", meaning: "Manifestation, resourcefulness, power" },
    { name: "The High Priestess", meaning: "Intuition, sacred knowledge, divine feminine" },
    // Add more cards here
  ];

  const selectRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    setSelectedCard(tarotCards[randomIndex]);
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
            {selectedCard ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-purple-100 mb-2">{selectedCard.name}</h3>
                <p className="text-purple-200 mb-4">{selectedCard.meaning}</p>
              </motion.div>
            ) : (
              <p className="text-purple-100 mb-4">Kartınızı çekmek için butona tıklayın.</p>
            )}
            <Button onClick={selectRandomCard}>
              {selectedCard ? "Yeni Kart Çek" : "Kart Çek"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TekKartTarot;