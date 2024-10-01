import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wand2, Sparkles, Moon, Star, Heart, Shield, Coins } from 'lucide-react';

const BuyuYapimi = () => {
  const buyuler = [
    { title: "Aşk Büyüsü", icon: Heart, description: "Sevdiğiniz kişiyi etkilemek için güçlü bir büyü." },
    { title: "Şans Büyüsü", icon: Sparkles, description: "Şansınızı artırmak ve fırsatları çekmek için." },
    { title: "Koruma Büyüsü", icon: Shield, description: "Kendinizi negatif enerjilerden korumak için." },
    { title: "Bolluk Büyüsü", icon: Coins, description: "Finansal başarı ve bolluk çekmek için." },
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
              <Card className="bg-white bg-opacity-10 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <buyu.icon className="w-6 h-6 mr-2" />
                    {buyu.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-100 mb-4">{buyu.description}</p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Büyü Yap
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
          <p className="text-lg text-white mb-4">
            Büyü yapmadan önce lütfen tüm güvenlik önlemlerini aldığınızdan emin olun.
          </p>
          <Button className="bg-white text-purple-700 hover:bg-purple-100">
            Güvenlik Rehberini Oku
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default BuyuYapimi;