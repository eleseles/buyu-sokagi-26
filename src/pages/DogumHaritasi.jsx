import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from 'framer-motion';
import { Sun, Moon, Star, Calendar, Clock, MapPin } from 'lucide-react';

const DogumHaritasi = () => {
  const [dogumTarihi, setDogumTarihi] = useState('');
  const [dogumSaati, setDogumSaati] = useState('');
  const [dogumYeri, setDogumYeri] = useState('');
  const [harita, setHarita] = useState(null);

  const hesaplaHarita = () => {
    // Burada gerçek bir doğum haritası hesaplama algoritması olmalı
    // Şimdilik basit bir örnek gösteriyoruz
    setHarita({
      gunesBurcu: "Aslan",
      ayBurcu: "Yengeç",
      yukselen: "İkizler",
      // Diğer gezegenler ve evler burada olmalı
    });
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
          Doğum Haritası Hesaplama ve Yorumlama
        </motion.h1>
        <Card className="bg-white bg-opacity-10 backdrop-blur-md max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Doğum Bilgilerinizi Girin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Calendar className="text-white" />
                <Input
                  type="date"
                  value={dogumTarihi}
                  onChange={(e) => setDogumTarihi(e.target.value)}
                  className="bg-purple-800 bg-opacity-30 text-white placeholder-purple-300"
                  placeholder="Doğum Tarihi"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-white" />
                <Input
                  type="time"
                  value={dogumSaati}
                  onChange={(e) => setDogumSaati(e.target.value)}
                  className="bg-purple-800 bg-opacity-30 text-white placeholder-purple-300"
                  placeholder="Doğum Saati"
                />
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-white" />
                <Input
                  type="text"
                  value={dogumYeri}
                  onChange={(e) => setDogumYeri(e.target.value)}
                  className="bg-purple-800 bg-opacity-30 text-white placeholder-purple-300"
                  placeholder="Doğum Yeri"
                />
              </div>
              <Button onClick={hesaplaHarita} className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Doğum Haritamı Hesapla
              </Button>
            </div>
            {harita && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 p-4 bg-purple-800 bg-opacity-30 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">Doğum Haritanız:</h3>
                <div className="grid grid-cols-2 gap-4 text-white">
                  <div className="flex items-center">
                    <Sun className="w-6 h-6 mr-2 text-yellow-300" />
                    <span>Güneş Burcu: {harita.gunesBurcu}</span>
                  </div>
                  <div className="flex items-center">
                    <Moon className="w-6 h-6 mr-2 text-blue-300" />
                    <span>Ay Burcu: {harita.ayBurcu}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-6 h-6 mr-2 text-purple-300" />
                    <span>Yükselen: {harita.yukselen}</span>
                  </div>
                  {/* Diğer gezegenler ve evler burada listelenebilir */}
                </div>
                <p className="mt-4 text-purple-200">
                  Bu doğum haritası, kişiliğinizin farklı yönlerini ve yaşam yolculuğunuzdaki potansiyel fırsatları ve zorlukları gösterir. Detaylı bir yorum için bir astroloğa danışmanızı öneririz.
                </p>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DogumHaritasi;