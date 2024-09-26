import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";

const TarotKartlariAnlamlari = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const tarotCards = [
    { name: "The Fool", meaning: "Yeni başlangıçlar, masumiyet, spontanlık", image: "/images/tarot/fool.jpg" },
    { name: "The Magician", meaning: "Yaratıcılık, beceri, irade gücü", image: "/images/tarot/magician.jpg" },
    { name: "The High Priestess", meaning: "Sezgi, bilinçaltı, gizem", image: "/images/tarot/high-priestess.jpg" },
    { name: "The Empress", meaning: "Bereket, annelik, doğa", image: "/images/tarot/empress.jpg" },
    { name: "The Emperor", meaning: "Otorite, yapı, liderlik", image: "/images/tarot/emperor.jpg" },
    { name: "The Hierophant", meaning: "Gelenek, uyum, manevi rehberlik", image: "/images/tarot/hierophant.jpg" },
    { name: "The Lovers", meaning: "Aşk, uyum, ilişkiler", image: "/images/tarot/lovers.jpg" },
    { name: "The Chariot", meaning: "Kontrol, irade, başarı", image: "/images/tarot/chariot.jpg" },
    { name: "Strength", meaning: "Cesaret, iç güç, sabır", image: "/images/tarot/strength.jpg" },
    { name: "The Hermit", meaning: "İçe dönüş, yalnızlık, bilgelik arayışı", image: "/images/tarot/hermit.jpg" },
    // Daha fazla kart eklenebilir
  ];

  const filteredCards = tarotCards.filter(card =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Kart adı veya anlamı ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white bg-opacity-20 text-white placeholder-purple-200 border-purple-300"
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-white bg-opacity-10 backdrop-blur-md overflow-hidden">
                <img src={card.image} alt={card.name} className="w-full h-48 object-cover" />
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