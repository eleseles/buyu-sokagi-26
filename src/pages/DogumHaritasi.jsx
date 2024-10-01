import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from 'framer-motion';
import { Sun, Moon, Star, Calendar, Clock, MapPin, Heart, Activity, Compass } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DogumHaritasi = () => {
  const [birthData, setBirthData] = useState({
    date: '',
    time: '',
    place: '',
  });
  const [chartData, setChartData] = useState(null);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setBirthData({ ...birthData, [e.target.name]: e.target.value });
  };

  const calculateChart = () => {
    // In a real application, this would call an astrology API
    // For demonstration, we'll use placeholder data
    setChartData({
      sun: { sign: 'Leo', house: 5, degree: 15 },
      moon: { sign: 'Cancer', house: 4, degree: 22 },
      ascendant: { sign: 'Libra', degree: 3 },
      mercury: { sign: 'Virgo', house: 6, degree: 8 },
      venus: { sign: 'Leo', house: 5, degree: 2 },
      mars: { sign: 'Scorpio', house: 8, degree: 29 },
      jupiter: { sign: 'Sagittarius', house: 9, degree: 17 },
      saturn: { sign: 'Capricorn', house: 10, degree: 11 },
    });

    toast({
      title: "Doğum Haritası Hazır!",
      description: "Haritanız başarıyla oluşturuldu.",
      duration: 3000,
    });
  };

  const renderPlanetInfo = (planet, data) => (
    <div className="mb-4">
      <h4 className="text-lg font-semibold flex items-center">
        {planet === 'sun' && <Sun className="w-5 h-5 mr-2" />}
        {planet === 'moon' && <Moon className="w-5 h-5 mr-2" />}
        {planet === 'ascendant' && <Star className="w-5 h-5 mr-2" />}
        {planet.charAt(0).toUpperCase() + planet.slice(1)}
      </h4>
      <p>Burç: {data.sign}</p>
      {data.house && <p>Ev: {data.house}</p>}
      <p>Derece: {data.degree}°</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ücretsiz Doğum Haritası
        </motion.h1>
        <Card className="bg-white bg-opacity-10 backdrop-blur-md max-w-2xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Doğum Bilgilerinizi Girin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Calendar className="text-white" />
                <Input
                  type="date"
                  name="date"
                  value={birthData.date}
                  onChange={handleInputChange}
                  className="bg-purple-800 bg-opacity-30 text-white placeholder-purple-300"
                  placeholder="Doğum Tarihi"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-white" />
                <Input
                  type="time"
                  name="time"
                  value={birthData.time}
                  onChange={handleInputChange}
                  className="bg-purple-800 bg-opacity-30 text-white placeholder-purple-300"
                  placeholder="Doğum Saati"
                />
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-white" />
                <Input
                  type="text"
                  name="place"
                  value={birthData.place}
                  onChange={handleInputChange}
                  className="bg-purple-800 bg-opacity-30 text-white placeholder-purple-300"
                  placeholder="Doğum Yeri"
                />
              </div>
              <Button onClick={calculateChart} className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Doğum Haritamı Hesapla
              </Button>
            </div>
          </CardContent>
        </Card>

        {chartData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white bg-opacity-10 backdrop-blur-md max-w-4xl mx-auto mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-white">Natal Haritanız</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="genel" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="genel">Genel Bakış</TabsTrigger>
                    <TabsTrigger value="detaylar">Detaylı Analiz</TabsTrigger>
                    <TabsTrigger value="yorumlar">Yorumlar</TabsTrigger>
                  </TabsList>
                  <TabsContent value="genel">
                    <div className="grid grid-cols-2 gap-4">
                      {renderPlanetInfo('sun', chartData.sun)}
                      {renderPlanetInfo('moon', chartData.moon)}
                      {renderPlanetInfo('ascendant', chartData.ascendant)}
                    </div>
                  </TabsContent>
                  <TabsContent value="detaylar">
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(chartData).map(([planet, data]) => (
                        renderPlanetInfo(planet, data)
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="yorumlar">
                    <p className="text-white mb-4">
                      Güneş {chartData.sun.sign} burcunda ve {chartData.sun.house}. evde yer alıyor. Bu, sizin temel kişiliğinizin {chartData.sun.sign} burcu özellikleriyle şekillendiğini ve bu özellikleri özellikle {chartData.sun.house}. ev alanında gösterdiğinizi ifade eder.
                    </p>
                    <p className="text-white mb-4">
                      Ay {chartData.moon.sign} burcunda ve {chartData.moon.house}. evde bulunuyor. Bu, duygusal doğanızın ve içgüdüsel tepkilerinizin {chartData.moon.sign} burcu özellikleriyle uyumlu olduğunu gösterir.
                    </p>
                    <p className="text-white">
                      Yükselen burcunuz {chartData.ascendant.sign}, bu da dış dünyaya ilk izlenimde bu burcun özelliklerini yansıttığınızı gösterir.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="text-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Detaylı Yorum Al
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-purple-900 text-white">
                  <DialogHeader>
                    <DialogTitle>Detaylı Doğum Haritası Yorumu</DialogTitle>
                  </DialogHeader>
                  <p>Uzman astrologlarımız, doğum haritanızı derinlemesine inceleyerek size özel bir yorum hazırlayabilir. Bu yorum, kariyer, aşk hayatı, sağlık ve kişisel gelişim alanlarında size rehberlik edecektir.</p>
                  <Button className="mt-4">Yorum Satın Al</Button>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DogumHaritasi;