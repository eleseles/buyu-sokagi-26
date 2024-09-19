import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Sparkles, Sun, Moon, Star, Cloud, Zap } from 'lucide-react';

const GunlukTavsiyeler = () => {
  const [tavsiye, setTavsiye] = useState("");
  const [gunlukBurc, setGunlukBurc] = useState("");
  const [sansliSayi, setSansliSayi] = useState(0);
  const [sansliRenk, setSansliRenk] = useState("");

  const tavsiyeler = [
    "Bugün mavi bir mum yakarak iç huzurunuzu artırabilirsiniz.",
    "Evinizi tütsüleyerek negatif enerjilerden arındırın.",
    "Şans getirmesi için üzerinizde bir dört yapraklı yonca taşıyın.",
    "Gece yatmadan önce bir dilek tutup bir yıldıza bakın.",
    "Sevdiklerinize pozitif enerji göndermek için pembe bir taş taşıyın.",
    "Bugün meditasyon yaparak içsel gücünüzü artırın.",
    "Ay'ın enerjisinden faydalanmak için gece ay ışığında 10 dakika geçirin.",
    "Güne bir şükür ritüeli ile başlayın ve pozitif enerjinizi artırın.",
    "Bugün mor renkli kıyafetler giyerek ruhsal farkındalığınızı yükseltin.",
    "Evinizdeki bitkilere sevgi sözleri söyleyerek enerjiyi yükseltin.",
    "Gün içinde üç kez derin nefes alıp vererek enerjinizi dengeleyin.",
    "Akşam bir bardak papatya çayı içerek günün stresini atın.",
    "Bugün güneş doğarken kısa bir meditasyon yapın.",
    "Sevdiğiniz bir müzik eşliğinde dans ederek auranızı temizleyin.",
    "Gün boyunca pozitif afirmasyonlar tekrarlayarak enerjinizi yükseltin."
  ];

  const burclar = ["Koç", "Boğa", "İkizler", "Yengeç", "Aslan", "Başak", "Terazi", "Akrep", "Yay", "Oğlak", "Kova", "Balık"];
  const renkler = ["Kırmızı", "Mavi", "Yeşil", "Mor", "Turuncu", "Sarı", "Pembe", "Turkuaz", "Lacivert", "Beyaz"];

  useEffect(() => {
    yeniTavsiyeAl();
  }, []);

  const yeniTavsiyeAl = () => {
    const randomIndex = Math.floor(Math.random() * tavsiyeler.length);
    setTavsiye(tavsiyeler[randomIndex]);
    setGunlukBurc(burclar[Math.floor(Math.random() * burclar.length)]);
    setSansliSayi(Math.floor(Math.random() * 100) + 1);
    setSansliRenk(renkler[Math.floor(Math.random() * renkler.length)]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Günlük Büyü Tavsiyeleri
        </motion.h1>
        <Card className="bg-white bg-opacity-10 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white flex items-center justify-center">
              <Sparkles className="w-6 h-6 mr-2" />
              Günün Büyülü Tavsiyesi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <motion.div
              className="bg-purple-800 bg-opacity-30 p-6 rounded-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl font-semibold text-white mb-4">{tavsiye}</p>
              <div className="grid grid-cols-2 gap-4 text-purple-100">
                <div className="flex items-center">
                  <Sun className="w-5 h-5 mr-2 text-yellow-300" />
                  <span>Günün Burcu: {gunlukBurc}</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-300" />
                  <span>Şanslı Sayı: {sansliSayi}</span>
                </div>
                <div className="flex items-center">
                  <Cloud className="w-5 h-5 mr-2 text-blue-300" />
                  <span>Şanslı Renk: {sansliRenk}</span>
                </div>
                <div className="flex items-center">
                  <Moon className="w-5 h-5 mr-2 text-gray-300" />
                  <span>Ay Fazı: Yeni Ay</span>
                </div>
              </div>
            </motion.div>
            <Button onClick={yeniTavsiyeAl} className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Yeni Tavsiye Al
            </Button>
          </CardContent>
        </Card>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white bg-opacity-10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-lg text-white flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-300" />
                Enerji Yükseltme Ritüeli
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-100">
              <p>Gün içinde enerjinizi yükseltmek için bu basit ritüeli uygulayın:</p>
              <ol className="list-decimal list-inside mt-2">
                <li>Derin bir nefes alın</li>
                <li>Ellerinizi kalbinizin üzerine koyun</li>
                <li>"Ben güçlüyüm ve enerjim yüksek" deyin</li>
                <li>Bu afirmasyonu 3 kez tekrarlayın</li>
              </ol>
            </CardContent>
          </Card>
          <Card className="bg-white bg-opacity-10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-lg text-white flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-300" />
                Günün Kristali
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-100">
              <p>Bugün için önerilen kristal: <strong>Ametist</strong></p>
              <p className="mt-2">Ametist, sakinleştirici ve dengeleyici özellikleriyle bilinir. Meditasyon sırasında veya gün boyunca üzerinizde taşıyabilirsiniz.</p>
            </CardContent>
          </Card>
          <Card className="bg-white bg-opacity-10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-lg text-white flex items-center">
                <Sun className="w-5 h-5 mr-2 text-yellow-300" />
                Günlük Mantra
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-100">
              <p className="font-semibold italic">"Ben, evrenin sonsuz potansiyeliyle uyum içindeyim."</p>
              <p className="mt-2">Bu mantrayı gün içinde tekrarlayarak pozitif enerjinizi artırın ve evrenle bağlantınızı güçlendirin.</p>
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
            Her gün yeni büyü tavsiyeleri ve kişiselleştirilmiş astrolojik öngörüler almak ister misiniz?
          </p>
          <Button className="bg-white text-purple-700 hover:bg-purple-100">
            Premium Üyelik Al
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default GunlukTavsiyeler;
