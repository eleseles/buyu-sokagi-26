import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Sun, Moon, Star, Heart, Zap, Shield, Sparkles, Compass, Feather, Eye } from 'lucide-react';

const TarotKartlariAnlamlari = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const tarotCards = [
    { name: "The Sun", meaning: "Başarı, mutluluk, pozitif enerji", icon: Sun, color: "text-yellow-500" },
    { name: "The Moon", meaning: "Sezgiler, bilinçaltı, gizem", icon: Moon, color: "text-blue-300" },
    { name: "The Star", meaning: "Umut, ilham, rehberlik", icon: Star, color: "text-purple-300" },
    { name: "The Lovers", meaning: "Aşk, uyum, ilişkiler", icon: Heart, color: "text-red-500" },
    { name: "The Tower", meaning: "Ani değişim, yıkım, yeniden yapılanma", icon: Zap, color: "text-orange-500" },
    { name: "The Hermit", meaning: "İçe dönüş, yalnızlık, bilgelik arayışı", icon: Shield, color: "text-green-500" },
    { name: "The Magician", meaning: "Yaratıcılık, beceri, irade gücü", icon: Sparkles, color: "text-indigo-500" },
    { name: "The Fool", meaning: "Yeni başlangıçlar, spontanlık, macera", icon: Compass, color: "text-teal-500" },
    { name: "The High Priestess", meaning: "Sezgi, gizli bilgi, bilinçaltı", icon: Eye, color: "text-pink-500" },
    { name: "The Empress", meaning: "Bereket, annelik, doğa", icon: Feather, color: "text-green-300" },
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
                <CardHeader>
                  <CardTitle className="text-xl text-center text-white flex items-center justify-center">
                    {React.createElement(card.icon, { className: `w-12 h-12 ${card.color} mr-2` })}
                    {card.name}
                  </CardTitle>
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