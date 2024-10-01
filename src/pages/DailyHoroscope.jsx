import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Star, Pisces } from 'lucide-react';

const zodiacSigns = [
  { name: "Koç", icon: Aries },
  { name: "Boğa", icon: Taurus },
  { name: "İkizler", icon: Gemini },
  { name: "Yengeç", icon: Cancer },
  { name: "Aslan", icon: Leo },
  { name: "Başak", icon: Virgo },
  { name: "Terazi", icon: Libra },
  { name: "Akrep", icon: Scorpio },
  { name: "Yay", icon: Sagittarius },
  { name: "Oğlak", icon: Capricorn },
  { name: "Kova", icon: Star },
  { name: "Balık", icon: Pisces },
];

const DailyHoroscope = () => {
  const [selectedSign, setSelectedSign] = useState(null);
  const [horoscope, setHoroscope] = useState(null);

  const generateHoroscope = () => {
    if (!selectedSign) return;

    const horoscopeTexts = [
      "Bugün şansınız yaver gidecek. Yeni fırsatlar kapınızı çalabilir.",
      "İlişkilerinizde dikkatli olun. Yanlış anlaşılmalar yaşanabilir.",
      "Finansal konularda temkinli davranın. Beklenmedik harcamalar olabilir.",
      "Sağlığınıza özen gösterin. Bol bol dinlenin ve stresten uzak durun.",
      "Yaratıcılığınız zirve yapacak. Yeni projelere başlamak için ideal bir gün.",
      "Aşk hayatınızda heyecan verici gelişmeler olabilir. Gözlerinizi açık tutun.",
      "İş hayatınızda önemli kararlar alabilirsiniz. Sezgilerinize güvenin.",
      "Ailenizle vakit geçirmek size iyi gelecek. Ev içi aktivitelere yönelin.",
      "Eğitim ve öğrenme konularında şanslı bir gündesiniz. Yeni bir kursa başlayabilirsiniz.",
      "Seyahat planları yapabilirsiniz. Kısa bir gezi size iyi gelebilir.",
    ];

    setHoroscope(horoscopeTexts[Math.floor(Math.random() * horoscopeTexts.length)]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Günlük Burç Yorumu
        </motion.h1>
        <Card className="max-w-2xl mx-auto bg-white bg-opacity-10 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Burcunuzu Seçin</CardTitle>
          </CardHeader>
          <CardContent>
            <Select onValueChange={(value) => setSelectedSign(zodiacSigns.find(sign => sign.name === value))}>
              <SelectTrigger className="w-full mb-4">
                <SelectValue placeholder="Burç seçin" />
              </SelectTrigger>
              <SelectContent>
                {zodiacSigns.map((sign) => (
                  <SelectItem key={sign.name} value={sign.name}>
                    <div className="flex items-center">
                      {React.createElement(sign.icon, { className: "w-5 h-5 mr-2" })}
                      {sign.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={generateHoroscope} className="w-full bg-purple-600 hover:bg-purple-700 text-white" disabled={!selectedSign}>
              Günlük Yorumu Göster
            </Button>
            {horoscope && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-6"
              >
                <Card className="bg-purple-800 bg-opacity-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-white flex items-center justify-center">
                      {React.createElement(selectedSign.icon, { className: "w-6 h-6 mr-2" })}
                      {selectedSign.name} Burcu Günlük Yorumu
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-100">{horoscope}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DailyHoroscope;