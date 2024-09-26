import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from 'framer-motion';
import { Sun, Moon, Star, Calendar, Clock, MapPin, Heart, Activity, Compass } from 'lucide-react';
import NatalChart from '../components/NatalChart';
import PlanetInterpretations from '../components/PlanetInterpretations';
import AspectInterpretations from '../components/AspectInterpretations';
import LifePathCalculator from '../components/LifePathCalculator';
import CompatibilityChecker from '../components/CompatibilityChecker';

const DogumHaritasi = () => {
  const [birthData, setBirthData] = useState({
    date: '',
    time: '',
    place: '',
  });
  const [chartData, setChartData] = useState(null);

  const handleInputChange = (e) => {
    setBirthData({ ...birthData, [e.target.name]: e.target.value });
  };

  const calculateChart = () => {
    // In a real application, this would call an astrology API
    // For demonstration, we'll use placeholder data
    setChartData({
      sun: { sign: 'Leo', house: 5 },
      moon: { sign: 'Cancer', house: 4 },
      ascendant: 'Libra',
      // Add more planetary positions here
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
                <NatalChart chartData={chartData} />
                <PlanetInterpretations chartData={chartData} />
                <AspectInterpretations chartData={chartData} />
              </CardContent>
            </Card>

            <Card className="bg-white bg-opacity-10 backdrop-blur-md max-w-4xl mx-auto mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-white">Yaşam Yolu Sayınız</CardTitle>
              </CardHeader>
              <CardContent>
                <LifePathCalculator birthDate={birthData.date} />
              </CardContent>
            </Card>

            <Card className="bg-white bg-opacity-10 backdrop-blur-md max-w-4xl mx-auto mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-white">Uyumluluk Kontrolü</CardTitle>
              </CardHeader>
              <CardContent>
                <CompatibilityChecker yourChart={chartData} />
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DogumHaritasi;