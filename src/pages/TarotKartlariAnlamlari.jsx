import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';

const TarotKartlariAnlamlari = () => {
  const tarotCards = [
    { name: "The Fool", meaning: "New beginnings, innocence, spontaneity" },
    { name: "The Magician", meaning: "Manifestation, resourcefulness, power" },
    { name: "The High Priestess", meaning: "Intuition, sacred knowledge, divine feminine" },
    { name: "The Empress", meaning: "Fertility, nurturing, abundance" },
    { name: "The Emperor", meaning: "Authority, structure, leadership" },
    { name: "The Hierophant", meaning: "Tradition, conformity, morality & ethics" },
    { name: "The Lovers", meaning: "Partnerships, duality, union" },
    { name: "The Chariot", meaning: "Direction, control, willpower" },
    { name: "Strength", meaning: "Courage, patience, compassion" },
    { name: "The Hermit", meaning: "Contemplation, search for truth, inner guidance" },
    // Add more cards here
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tarot Kartları ve Anlamları
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tarotCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-white bg-opacity-10 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-xl text-center text-white">{card.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-100 text-center">{card.meaning}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TarotKartlariAnlamlari;