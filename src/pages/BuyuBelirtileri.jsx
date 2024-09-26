import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Zap, Cloud, Frown, Brain, Heart, Moon, Battery, Eye, Compass, Feather } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const BuyuBelirtileri = () => {
  const [selectedTab, setSelectedTab] = useState("fiziksel");
  const { toast } = useToast();

  const belirtiler = {
    fiziksel: [
      { icon: <Zap className="w-6 h-6 text-yellow-500" />, belirti: "Sürekli yorgunluk ve enerji düşüklüğü" },
      { icon: <Cloud className="w-6 h-6 text-blue-500" />, belirti: "Açıklanamayan baş ağrıları" },
      { icon: <Frown className="w-6 h-6 text-red-500" />, belirti: "Ani kilo değişimleri" },
      { icon: <AlertCircle className="w-6 h-6 text-orange-500" />, belirti: "Cilt problemleri ve döküntüler" },
      { icon: <Eye className="w-6 h-6 text-purple-500" />, belirti: "Göz seğirmesi veya bulanık görme" },
    ],
    zihinsel: [
      { icon: <Brain className="w-6 h-6 text-purple-500" />, belirti: "Konsantrasyon güçlüğü" },
      { icon: <Moon className="w-6 h-6 text-indigo-500" />, belirti: "Sık sık kabuslar görme" },
      { icon: <Zap className="w-6 h-6 text-yellow-500" />, belirti: "Ani ruh hali değişimleri" },
      { icon: <AlertCircle className="w-6 h-6 text-orange-500" />, belirti: "Açıklanamayan korkular ve endişeler" },
      { icon: <Compass className="w-6 h-6 text-green-500" />, belirti: "Sürekli kafa karışıklığı ve yön duygusunu kaybetme" },
    ],
    duygusal: [
      { icon: <Heart className="w-6 h-6 text-red-500" />, belirti: "İlişkilerde sürekli sorunlar yaşama" },
      { icon: <Battery className="w-6 h-6 text-green-500" />, belirti: "Duygusal tükenme hissi" },
      { icon: <Cloud className="w-6 h-6 text-blue-500" />, belirti: "Sürekli negatif düşünceler" },
      { icon: <Frown className="w-6 h-6 text-red-500" />, belirti: "Açıklanamayan öfke patlamaları" },
      { icon: <Feather className="w-6 h-6 text-pink-500" />, belirti: "Aşırı hassasiyet ve duygusallık" },
    ],
  };

  const [testSonucu, setTestSonucu] = useState(null);
  const [seciliBelirti, setSeciliBelirti] = useState([]);

  const handleBelirtiSecimi = (belirti) => {
    if (seciliBelirti.includes(belirti)) {
      setSeciliBelirti(seciliBelirti.filter(item => item !== belirti));
    } else {
      setSeciliBelirti([...seciliBelirti, belirti]);
    }
  };

  const hesaplaTestSonucu = () => {
    const toplamBelirti = Object.values(belirtiler).flat().length;
    const seciliBelitiSayisi = seciliBelirti.length;
    const yuzde = (seciliBelitiSayisi / toplamBelirti) * 100;

    if (yuzde >= 75) {
      setTestSonucu("Yüksek ihtimalle büyü etkisi altında olabilirsiniz.  Bir uzmana danışmanızı öneririz.");
    } else if (yuzde >= 50) {
      setTestSonucu("Orta düzeyde büyü etkisi belirtileri gösteriyorsunuz. Önlem almanızda fayda var.");
    } else if (yuzde >= 25) {
      setTestSonucu("Düşük düzeyde büyü etkisi belirtileri var. Kendinizi gözlemlemeye devam edin.");
    } else {
      setTestSonucu("Büyü etkisi altında olma ihtimaliniz düşük görünüyor.");
    }

    toast({
      title: "Test Sonucu Hazır!",
      description: "Sonucunuzu görmek için aşağı kaydırın.",
      duration: 3000,
    });
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
          Büyü Belirtileri
        </motion.h1>
        <Card className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Büyü Etkisi Altında Olup Olmadığınızı Kontrol Edin</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-purple-100 mb-6 text-center">
              Aşağıdaki belirtilerden size uyanları seçin ve büyü etkisi altında olup olmadığınızı öğrenin.
            </p>
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="fiziksel">Fiziksel</TabsTrigger>
                <TabsTrigger value="zihinsel">Zihinsel</TabsTrigger>
                <TabsTrigger value="duygusal">Duygusal</TabsTrigger>
              </TabsList>
              <AnimatePresence mode="wait">
                {Object.entries(belirtiler).map(([key, value]) => (
                  <TabsContent key={key} value={key}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      {value.map((item, index) => (
                        <Button
                          key={index}
                          variant={seciliBelirti.includes(item.belirti) ? "secondary" : "outline"}
                          className="justify-start text-left"
                          onClick={() => handleBelirtiSecimi(item.belirti)}
                        >
                          {item.icon}
                          <span className="ml-2">{item.belirti}</span>
                        </Button>
                      ))}
                    </motion.div>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </Tabs>
            <div className="mt-8">
              <Button onClick={hesaplaTestSonucu} className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Sonucu Göster
              </Button>
            </div>
            {testSonucu && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-4 bg-purple-800 bg-opacity-50 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">Test Sonucunuz:</h3>
                <p className="text-purple-100">{testSonucu}</p>
                <Progress value={(seciliBelirti.length / Object.values(belirtiler).flat().length) * 100} className="mt-4" />
              </motion.div>
            )}
          </CardContent>
        </Card>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-lg text-white mb-4">
            Bu test genel bir değerlendirme amaçlıdır. Kesin bir teşhis için mutlaka bir uzmana danışın.
          </p>
          <Button className="bg-white text-purple-700 hover:bg-purple-100">
            Uzman Desteği Al
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default BuyuBelirtileri;