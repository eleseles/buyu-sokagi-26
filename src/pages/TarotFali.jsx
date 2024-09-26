import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const TarotFali = () => {
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
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white bg-opacity-10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-white">Tek Kart Tarot</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-purple-100 mb-4">Hızlı bir rehberlik için tek kart çekin.</p>
              <Button asChild>
                <Link to="/tarot-fali/tek-kart">Tek Kart Çek</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-white bg-opacity-10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-white">Üç Kart Tarot Falı</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-purple-100 mb-4">Geçmiş, şimdi ve geleceğinizi keşfedin.</p>
              <Button asChild>
                <Link to="/tarot-fali/uc-kart">Üç Kart Çek</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-white bg-opacity-10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-white">Tarot Kartları ve Anlamları</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-purple-100 mb-4">Tüm tarot kartlarını ve anlamlarını öğrenin.</p>
              <Button asChild>
                <Link to="/tarot-fali/kartlar-ve-anlamlari">Kartları İncele</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TarotFali;