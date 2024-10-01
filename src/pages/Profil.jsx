import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Star, Book, Shield, Zap, Heart, Trophy, Scroll, Award, Briefcase, Feather } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import confetti from 'canvas-confetti';

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
    readBooks: 7,
    achievements: [
      { id: 1, name: "İlk Büyü", icon: Zap, description: "İlk büyünüzü başarıyla tamamladınız." },
      { id: 2, name: "Kitap Kurdu", icon: Book, description: "5 ruhsal kitap okudunuz." },
      { id: 3, name: "Ritüel Ustası", icon: Scroll, description: "10 ritüel tamamladınız." },
    ],
    inventory: [
      { id: 1, name: "Kristal Küre", quantity: 1, rarity: "Nadir" },
      { id: 2, name: "Tılsımlı Muska", quantity: 3, rarity: "Sıradan" },
      { id: 3, name: "Ejderha Pulu", quantity: 1, rarity: "Efsanevi" },
    ],
    quests: [
      { id: 1, name: "Kayıp Grimuar'ı Bul", progress: 60, reward: "500 XP" },
      { id: 2, name: "3 Koruma Büyüsü Yap", progress: 33, reward: "Nadir Tılsım" },
    ],
    skills: [
      { name: "Büyü Yapımı", level: 4 },
      { name: "Tarot Okuma", level: 3 },
      { name: "Meditasyon", level: 5 },
      { name: "Enerji Manipülasyonu", level: 2 },
    ],
    dailyTasks: [
      { id: 1, name: "Günlük Meditasyon", completed: false },
      { id: 2, name: "Bir Büyü Kitabı Oku", completed: false },
      { id: 3, name: "Bir Tılsım Yap", completed: true },
    ],
  });

  const [showAchievementDialog, setShowAchievementDialog] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const handleAchievementClick = (achievement) => {
    setSelectedAchievement(achievement);
    setShowAchievementDialog(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setUser(prevUser => ({
        ...prevUser,
        xp: prevUser.xp + 10 > prevUser.nextLevelXp ? prevUser.nextLevelXp : prevUser.xp + 10
      }));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const rarityColors = {
    "Sıradan": "bg-gray-500",
    "Nadir": "bg-blue-500",
    "Efsanevi": "bg-purple-500"
  };

  const completeTask = (taskId) => {
    setUser(prevUser => ({
      ...prevUser,
      dailyTasks: prevUser.dailyTasks.map(task =>
        task.id === taskId ? { ...task, completed: true } : task
      ),
      xp: prevUser.xp + 50 > prevUser.nextLevelXp ? prevUser.nextLevelXp : prevUser.xp + 50
    }));
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
            <Tabs defaultValue="skills">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="skills">Yetenekler</TabsTrigger>
                <TabsTrigger value="rituals">Ritüeller</TabsTrigger>
                <TabsTrigger value="books">Okumalar</TabsTrigger>
                <TabsTrigger value="achievements">Başarılar</TabsTrigger>
                <TabsTrigger value="inventory">Envanter</TabsTrigger>
              </TabsList>
              <TabsContent value="skills">
                <div className="grid grid-cols-2 gap-4">
                  {user.skills.map((skill, index) => (
                    <Card key={index} className="bg-purple-800 bg-opacity-50">
                      <CardContent className="p-4">
                        <h4 className="text-lg font-bold text-white mb-2">{skill.name}</h4>
                        <Progress value={(skill.level / 10) * 100} className="mb-2" />
                        <p className="text-sm text-purple-200">Seviye {skill.level}/10</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
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
                <div className="grid grid-cols-3 gap-4">
                  {user.achievements.map((achievement) => (
                    <motion.div
                      key={achievement.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAchievementClick(achievement)}
                      className="cursor-pointer"
                    >
                      <Card className="bg-purple-800 bg-opacity-50">
                        <CardContent className="p-4 text-center">
                          {React.createElement(achievement.icon, { className: "w-8 h-8 mx-auto mb-2 text-yellow-400" })}
                          <p className="text-sm font-bold text-white">{achievement.name}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="inventory">
                <div className="grid grid-cols-2 gap-4">
                  {user.inventory.map((item) => (
                    <Card key={item.id} className="bg-purple-800 bg-opacity-50">
                      <CardContent className="p-4">
                        <h4 className="text-lg font-bold text-white">{item.name}</h4>
                        <p className="text-sm text-purple-200">Adet: {item.quantity}</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs ${rarityColors[item.rarity]} text-white mt-2`}>
                          {item.rarity}
                        </span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <Card className="mt-6 bg-white bg-opacity-20 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center">
              <Award className="w-6 h-6 mr-2" />
              Aktif Görevler
            </CardTitle>
          </CardHeader>
          <CardContent>
            {user.quests.map((quest) => (
              <div key={quest.id} className="mb-4">
                <h4 className="text-lg font-bold text-white">{quest.name}</h4>
                <Progress value={quest.progress} className="mt-2" />
                <p className="text-sm text-purple-200 mt-1">Ödül: {quest.reward}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="mt-6 bg-white bg-opacity-20 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center">
              <Briefcase className="w-6 h-6 mr-2" />
              Günlük Görevler
            </CardTitle>
          </CardHeader>
          <CardContent>
            {user.dailyTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between mb-2">
                <span className={`text-lg ${task.completed ? 'text-green-400 line-through' : 'text-white'}`}>
                  {task.name}
                </span>
                {!task.completed && (
                  <Button onClick={() => completeTask(task.id)} size="sm" variant="outline">
                    Tamamla
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="mt-6 text-center">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <Heart className="w-4 h-4 mr-2" />
            Ruhsal Yolculuğu Paylaş
          </Button>
        </div>
      </div>
      <Dialog open={showAchievementDialog} onOpenChange={setShowAchievementDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center">
              {selectedAchievement && React.createElement(selectedAchievement.icon, { className: "w-6 h-6 mr-2 text-yellow-400" })}
              {selectedAchievement?.name}
            </DialogTitle>
          </DialogHeader>
          <p>{selectedAchievement?.description}</p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profil;