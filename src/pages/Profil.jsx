import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Star, Book, Shield, Zap, Heart } from 'lucide-react';

const Profil = () => {
  const [user, setUser] = useState({
    name: "Ayşe Yılmaz",
    email: "ayse@example.com",
    avatar: "https://i.pravatar.cc/150?img=5",
    level: 5,
    xp: 2500,
    nextLevelXp: 5000,
    favoriteTalisman: "Koruyucu Kalkan",
    completedRituals: 15,
    readBooks: 7
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ruhsal Profiliniz
        </motion.h1>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white bg-opacity-20 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <User className="w-6 h-6 mr-2" />
                Profil Bilgileri
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full mb-4" />
                <h2 className="text-xl font-bold text-white mb-2">{user.name}</h2>
                <p className="text-purple-200">{user.email}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white bg-opacity-20 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Star className="w-6 h-6 mr-2" />
                Ruhsal Seviye
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-2">Seviye {user.level}</h3>
                <Progress value={(user.xp / user.nextLevelXp) * 100} className="mb-2" />
                <p className="text-purple-200">{user.xp} / {user.nextLevelXp} XP</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white bg-opacity-20 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                Favori Tılsım
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">{user.favoriteTalisman}</h3>
                <p className="text-purple-200">Bu tılsım size özel koruma sağlar.</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-6 bg-white bg-opacity-20 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Ruhsal İstatistikler</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="rituals">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="rituals">Ritüeller</TabsTrigger>
                <TabsTrigger value="books">Okumalar</TabsTrigger>
                <TabsTrigger value="achievements">Başarılar</TabsTrigger>
              </TabsList>
              <TabsContent value="rituals">
                <div className="text-center">
                  <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-white mb-2">Tamamlanan Ritüeller</h3>
                  <p className="text-3xl text-purple-200">{user.completedRituals}</p>
                </div>
              </TabsContent>
              <TabsContent value="books">
                <div className="text-center">
                  <Book className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-white mb-2">Okunan Kitaplar</h3>
                  <p className="text-3xl text-purple-200">{user.readBooks}</p>
                </div>
              </TabsContent>
              <TabsContent value="achievements">
                <div className="text-center">
                  <Star className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-white mb-2">Ruhsal Başarılar</h3>
                  <ul className="text-purple-200">
                    <li>İlk Meditasyon</li>
                    <li>Enerji Ustası</li>
                    <li>Tarot Öğrencisi</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <div className="mt-6 text-center">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <Heart className="w-4 h-4 mr-2" />
            Ruhsal Yolculuğu Paylaş
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profil;