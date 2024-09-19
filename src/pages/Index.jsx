import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Sparkles, TestTube, AlertCircle, Book, BookOpen, Shield, ShoppingBag, Wand2, Star, Users, Feather } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon, link }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center text-primary">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild className="w-full"><Link to={link}>Keşfet</Link></Button>
      </CardContent>
    </Card>
  </motion.div>
);

const Index = () => {
  const features = [
    { title: "Büyü Testi", description: "Üzerinizde büyü olup olmadığını öğrenin", icon: <TestTube className="h-6 w-6" />, link: "/buyu-testi" },
    { title: "Büyü Belirtileri", description: "Büyü etkisini nasıl anlarsınız?", icon: <AlertCircle className="h-6 w-6" />, link: "/buyu-belirtileri" },
    { title: "Büyü Yapımı", description: "Çeşitli büyü türleri ve yapılışları", icon: <Wand2 className="h-6 w-6" />, link: "/buyu-yapimi" },
    { title: "Büyü Duaları", description: "Güçlü ve etkili büyü duaları", icon: <BookOpen className="h-6 w-6" />, link: "/buyu-dualari" },
    { title: "Büyü Bozma", description: "Büyüden kurtulmanın yolları", icon: <Shield className="h-6 w-6" />, link: "/buyu-bozma" },
    { title: "Büyü Kitabı", description: "Kapsamlı büyü rehberimiz", icon: <Book className="h-6 w-6" />, link: "/buyu-kitabi" },
    { title: "Büyü Türleri", description: "Farklı büyü çeşitleri hakkında bilgi", icon: <Star className="h-6 w-6" />, link: "/buyu-turleri" },
    { title: "Kullanıcı Deneyimleri", description: "Gerçek hikayeler ve yorumlar", icon: <Users className="h-6 w-6" />, link: "/kullanici-deneyimleri" },
    { title: "Astroloji ve Büyü", description: "Yıldızların büyüye etkisi", icon: <Sparkles className="h-6 w-6" />, link: "/astroloji-ve-buyu" },
    { title: "Günlük Büyü Tavsiyeleri", description: "Her gün yeni bir büyü ipucu", icon: <Feather className="h-6 w-6" />, link: "/gunluk-tavsiyeler" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-5xl font-bold text-center mb-8 text-purple-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Büyülü Dünyaya Hoş Geldiniz
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-purple-700 mb-4">Büyülü Yolculuğunuza Başlayın</h2>
          <p className="text-lg text-gray-600 mb-6">Gizem dolu dünyamızda size rehberlik etmekten mutluluk duyuyoruz. Büyünün sırlarını keşfedin, kendi gücünüzü ortaya çıkarın!</p>
          <Button asChild size="lg" className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300">
            <Link to="/buyu-testi">Hemen Büyü Testine Başla</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
