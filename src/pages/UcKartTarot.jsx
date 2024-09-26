import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const UcKartTarot = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  const tarotCards = [
    { name: "The Fool", meaning: "New beginnings, innocence, spontaneity" },
    { name: "The Magician", meaning: "Manifestation, resourcefulness, power" },
    { name: "The High Priestess", meaning: "Intuition, sacred knowledge, divine feminine" },
    // Add more cards here
  ];

  const selectRandomCards = () => {
    const shuffled = [...tarotCards].sort(() => 0.5 - Math.random());
    setSelectedCards(shuffled.slice(0, 3));
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
          Üç Kart Tarot Falı
        </motion.h1>
        <Card className="bg-white bg-opacity-10 backdrop-blur-md max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Geçmiş, Şimdi ve Gelecek</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedCards.length > 0 ? (
              <div className="grid grid-cols-3 gap-4">
                {selectedCards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                  >
                    <h3 className="text-lg font-bold text-purple-100 mb-2">
                      {index === 0 ? "Geçmiş" : index === 1 ? "Şimdi" : "Gelecek"}
                    </h3>
                    <h4 className="text-md font-semibold text-purple-200 mb-1">{card.name}</h4>
                    <p className="text-sm text-purple-300">{card.meaning}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-purple-100 text-center mb-4">Kartlarınızı çekmek için butona tıklayın.</p>
            )}
            <div className="text-center mt-6">
              <Button onClick={selectRandomCards}>
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