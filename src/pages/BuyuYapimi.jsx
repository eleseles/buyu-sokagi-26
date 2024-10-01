import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wand2, Sparkles, Moon, Star, Heart, Shield, Coins, AlertTriangle, Hourglass } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import confetti from 'canvas-confetti';

const BuyuYapimi = () => {
  const [selectedSpell, setSelectedSpell] = useState(null);
  const [showSpellDialog, setShowSpellDialog] = useState(false);
  const [spellProgress, setSpellProgress] = useState(0);
  const [inventory, setInventory] = useState({
    "Gül yaprağı": 5,
    "Mum": 3,
    "Kristal": 2,
    "Dört yapraklı yonca": 1,
    "Yeşil mum": 2,
    "Zümrüt": 1,
    "Tütsü": 4,
    "Siyah obsidyen": 2,
    "Tuz": 10,
    "Tarçın çubuğu": 3,
    "Altın renkli mum": 1,
    "Kehribar": 2
  });

  const buyuler = [
    { title: "Aşk Büyüsü", icon: Heart, description: "Sevdiğiniz kişiyi etkilemek için güçlü bir büyü.", ingredients: ["Gül yaprağı", "Mum", "Kristal"], duration: 30, difficulty: "Orta" },
    { title: "Şans Büyüsü", icon: Sparkles, description: "Şansınızı artırmak ve fırsatları çekmek için.", ingredients: ["Dört yapraklı yonca", "Yeşil mum", "Zümrüt"], duration: 20, difficulty: "Kolay" },
    { title: "Koruma Büyüsü", icon: Shield, description: "Kendinizi negatif enerjilerden korumak için.", ingredients: ["Tütsü", "Siyah obsidyen", "Tuz"], duration: 25, difficulty: "Zor" },
    { title: "Bolluk Büyüsü", icon: Coins, description: "Finansal başarı ve bolluk çekmek için.", ingredients: ["Tarçın çubuğu", "Altın renkli mum", "Kehribar"], duration: 35, difficulty: "Orta" },
  ];

  const handleSpellClick = (spell) => {
    setSelectedSpell(spell);
    setShowSpellDialog(true);
    setSpellProgress(0);
  };

  const startSpell = () => {
    if (!hasAllIngredients(selectedSpell.ingredients)) {
      toast.error("Büyü için gerekli malzemeler eksik!");
      return;
    }

    useIngredients(selectedSpell.ingredients);
    
    const interval = setInterval(() => {
      setSpellProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          completeSpell();
          return 100;
        }
        return prevProgress + (100 / selectedSpell.duration);
      });
    }, 1000);
  };

  const hasAllIngredients = (ingredients) => {
    return ingredients.every(ingredient => inventory[ingredient] > 0);
  };

  const useIngredients = (ingredients) => {
    setInventory(prevInventory => {
      const newInventory = { ...prevInventory };
      ingredients.forEach(ingredient => {
        newInventory[ingredient] -= 1;
      });
      return newInventory;
    });
  };

  const completeSpell = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    toast.success(`${selectedSpell.title} başarıyla tamamlandı!`);
  };

  const difficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Kolay": return "text-green-400";
      case "Orta": return "text-yellow-400";
      case "Zor": return "text-red-400";
      default: return "text-gray-400";
    }
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
          Büyü Yapımı
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-6">
          {buyuler.map((buyu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-white bg-opacity-10 backdrop-blur-md cursor-pointer hover:bg-opacity-20 transition-all" onClick={() => handleSpellClick(buyu)}>
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    {React.createElement(buyu.icon, { className: "w-6 h-6 mr-2" })}
                    {buyu.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-100 mb-4">{buyu.description}</p>
                  <p className={`text-sm ${difficultyColor(buyu.difficulty)} mb-2`}>Zorluk: {buyu.difficulty}</p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Büyüyü İncele
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Card className="bg-yellow-500 bg-opacity-20 backdrop-blur-md">
            <CardContent className="flex items-center justify-center p-4">
              <AlertTriangle className="w-6 h-6 mr-2 text-yellow-400" />
              <p className="text-lg text-white">
                Büyü yapmadan önce lütfen tüm güvenlik önlemlerini aldığınızdan emin olun.
              </p>
            </CardContent>
          </Card>
          <Button className="mt-4 bg-white text-purple-700 hover:bg-purple-100">
            Güvenlik Rehberini Oku
          </Button>
        </motion.div>
      </div>
      <Dialog open={showSpellDialog} onOpenChange={setShowSpellDialog}>
        <DialogContent className="bg-purple-900 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center text-2xl">
              {selectedSpell && React.createElement(selectedSpell.icon, { className: "w-8 h-8 mr-2" })}
              {selectedSpell?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p>{selectedSpell?.description}</p>
            <div>
              <h4 className="font-bold mb-2">Gerekli Malzemeler:</h4>
              <ul className="list-disc list-inside">
                {selectedSpell?.ingredients.map((ingredient, index) => (
                  <li key={index} className={inventory[ingredient] > 0 ? "text-green-400" : "text-red-400"}>
                    {ingredient} ({inventory[ingredient]} adet mevcut)
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Büyü Süresi:</h4>
              <p>{selectedSpell?.duration} saniye</p>
            </div>
            {spellProgress > 0 && spellProgress < 100 && (
              <div>
                <h4 className="font-bold mb-2">Büyü İlerlemesi:</h4>
                <Progress value={spellProgress} className="h-2" />
                <div className="flex justify-center items-center mt-2">
                  <Hourglass className="w-4 h-4 mr-2 animate-spin" />
                  <p>{Math.round(spellProgress)}%</p>
                </div>
              </div>
            )}
            {spellProgress === 100 && (
              <p className="text-green-400 font-bold">Büyü başarıyla tamamlandı!</p>
            )}
            <Button onClick={startSpell} disabled={spellProgress > 0} className="w-full bg-purple-600 hover:bg-purple-700">
              Büyüyü Başlat
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BuyuYapimi;