import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

const zodiacSigns = [
  "Koç", "Boğa", "İkizler", "Yengeç", "Aslan", "Başak",
  "Terazi", "Akrep", "Yay", "Oğlak", "Kova", "Balık"
];

const fetchHoroscope = async (sign) => {
  // This function would normally make an API request, but for now we'll return a random horoscope
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

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(horoscopeTexts[Math.floor(Math.random() * horoscopeTexts.length)]);
    }, 1000);
  });
};

const DailyHoroscope = () => {
  const [selectedSign, setSelectedSign] = useState(null);
  const { data: horoscope, isLoading, error, refetch } = useQuery({
    queryKey: ['horoscope', selectedSign],
    queryFn: () => fetchHoroscope(selectedSign),
    enabled: !!selectedSign,
  });

  const generateHoroscope = () => {
    if (selectedSign) {
      refetch();
    }
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
            <Select onValueChange={(value) => setSelectedSign(value)}>
              <SelectTrigger className="w-full mb-4">
                <SelectValue placeholder="Burç seçin" />
              </SelectTrigger>
              <SelectContent>
                {zodiacSigns.map((sign) => (
                  <SelectItem key={sign} value={sign}>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 mr-2" />
                      {sign}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={generateHoroscope} className="w-full bg-purple-600 hover:bg-purple-700 text-white" disabled={!selectedSign || isLoading}>
              {isLoading ? "Yorum Yükleniyor..." : "Günlük Yorumu Göster"}
            </Button>
            {error && (
              <p className="text-red-500 mt-4">Bir hata oluştu. Lütfen tekrar deneyin.</p>
            )}
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
                      <Star className="w-6 h-6 mr-2" />
                      {selectedSign} Burcu Günlük Yorumu
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