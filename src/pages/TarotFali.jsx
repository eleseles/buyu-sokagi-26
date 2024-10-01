import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Sun, Moon, Star, Heart, Zap, Shield, Book, Feather } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";

const tarotCards = [
  { name: "The Sun", meaning: "Başarı, mutluluk, pozitif enerji", icon: Sun, color: "text-yellow-500" },
  { name: "The Moon", meaning: "Sezgiler, bilinçaltı, gizem", icon: Moon, color: "text-blue-300" },
  { name: "The Star", meaning: "Umut, ilham, rehberlik", icon: Star, color: "text-purple-300" },
  { name: "The Lovers", meaning: "Aşk, uyum, ilişkiler", icon: Heart, color: "text-red-500" },
  { name: "The Tower", meaning: "Ani değişim,yıkım, yeniden yapılanma", icon: Zap, color: "text-orange-500" },
  { name: "The Hermit", meaning: "İçe dönüş, yalnızlık, bilgelik arayışı", icon: Shield, color: "text-green-500" },
  { name: "The Magician", meaning: "Yaratıcılık, beceri, irade gücü", icon: Sparkles, color: "text-indigo-500" },
  { name: "The High Priestess", meaning: "Sezgi, gizli bilgi, bilinçaltı", icon: Book, color: "text-pink-500" },
  { name: "The Empress", meaning: "Bereket, annelik, doğa", icon: Feather, color: "text-green-300" },
];

const TarotFali = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showMeaningDialog, setShowMeaningDialog] = useState(false);
  const [dailyCardDrawn, setDailyCardDrawn] = useState(false);

  useEffect(() => {
    const lastDrawDate = localStorage.getItem('lastTarotDrawDate');
    const today = new Date().toDateString();
    if (lastDrawDate !== today) {
      setDailyCardDrawn(false);
    } else {
      setDailyCardDrawn(true);
    }
  }, []);

  const selectRandomCard = () => {
    if (dailyCardDrawn) {
      toast.error("Günlük tarot kartınızı zaten çektiniz. Yarın tekrar deneyin!");
      return;
    }
    setIsFlipped(false);
    const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    setSelectedCard(randomCard);
    setTimeout(() => setIsFlipped(true), 500);
    localStorage.setItem('lastTarotDrawDate', new Date().toDateString());
    setDailyCardDrawn(true);
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
          Tarot Falı
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white bg-opacity-10 backdrop-blur-md">
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
                    <div className="absolute w-full h-full backface-hidden bg-purple-800 rounded-lg flex items-center justify-center">
                      <Star className="w-32 h-32 text-yellow-300" />
                    </div>
                    <div className="absolute w-full h-full backface-hidden bg-purple-700 rounded-lg flex flex-col items-center justify-center" style={{ transform: 'rotateY(180deg)' }}>
                      {React.createElement(selectedCard.icon, { className: `w-32 h-32 ${selectedCard.color} mb-4` })}
                      <h3 className="text-xl font-bold text-white mb-2">{selectedCard.name}</h3>
                      <p className="text-purple-200">{selectedCard.meaning}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <Button onClick={selectRandomCard} className="bg-purple-600 hover:bg-purple-700 text-white" disabled={dailyCardDrawn}>
                {dailyCardDrawn ? "Günlük Kart Çekildi" : "Günlük Kart Çek"}
              </Button>
              {selectedCard && (
                <Button onClick={() => setShowMeaningDialog(true)} className="ml-2 bg-purple-600 hover:bg-purple-700 text-white">
                  Anlamı Gör
                </Button>
              )}
            </CardContent>
          </Card>
          <Card className="bg-white bg-opacity-10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-white">Tarot Okuma Seçenekleri</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                <Link to="/tarot-fali/uc-kart">Üç Kart Tarot Falı</Link>
              </Button>
              <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                <Link to="/tarot-fali/kartlar-ve-anlamlari">Tarot Kartları ve Anlamları</Link>
              </Button>
              <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                <Link to="/tarot-fali/yasam-yolu">Yaşam Yolu Tarot Okuması</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-lg text-white mb-4">
            Tarot, içsel bilgeliğinize ulaşmanın güçlü bir yoludur. Hangi okumayı seçerseniz seçin, açık fikirli olun ve sezgilerinize güvenin.
          </p>
          <Button asChild className="bg-white text-purple-700 hover:bg-purple-100">
            <Link to="/blog/tarot-rehberi">Tarot Hakkında Daha Fazla Bilgi</Link>
          </Button>
        </motion.div>
      </div>
      <Dialog open={showMeaningDialog} onOpenChange={setShowMeaningDialog}>
        <DialogContent className="bg-purple-900 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center text-2xl">
              {selectedCard && React.createElement(selectedCard.icon, { className: `w-8 h-8 mr-2 ${selectedCard.color}` })}
              {selectedCard?.name}
            </DialogTitle>
          </DialogHeader>
          <p className="text-lg">{selectedCard?.meaning}</p>
          <p className="mt-4 text-sm italic">Bu kart, hayatınızın şu anki durumunu yansıtabilir. Üzerinde düşünün ve size ne ifade ettiğini anlamaya çalışın.</p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TarotFali;