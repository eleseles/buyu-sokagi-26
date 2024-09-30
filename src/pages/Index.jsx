import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles, Moon, Sun, Wand2, Heart, Compass, Book, Star } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, to }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 1 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Card className="bg-purple-900 bg-opacity-50 backdrop-blur-md text-white h-full border-2 border-purple-500">
      <CardHeader>
        <CardTitle className="flex items-center justify-center">
          <Icon className="w-8 h-8 mr-2 text-purple-300" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-purple-100 mb-4">{description}</p>
        <Button asChild variant="secondary" className="w-full">
          <Link to={to}>Keşfet</Link>
        </Button>
      </CardContent>
    </Card>
  </motion.div>
);

const Index = () => {
  const features = [
    { icon: Wand2, title: "Büyü Dünyası", description: "Çeşitli büyü türlerini keşfedin ve kendi ritüellerinizi oluşturun.", to: "/buyu-turleri" },
    { icon: Star, title: "Tarot Falı", description: "Geleceğinizi tarot kartlarıyla keşfedin.", to: "/tarot-fali" },
    { icon: Moon, title: "Astroloji", description: "Yıldızların sizin için ne söylediğini öğrenin.", to: "/astroloji-ve-buyu" },
    { icon: Heart, title: "Aşk Büyüleri", description: "Aşk hayatınızı canlandıracak büyüler ve ritüeller.", to: "/buyu-yapimi" },
    { icon: Sun, title: "Günlük Tavsiyeler", description: "Her gün için mistik öneriler ve rehberlik.", to: "/gunluk-tavsiyeler" },
    { icon: Compass, title: "Ruhsal Yolculuk", description: "İç dünyanızı keşfetmeniz için rehberlik.", to: "/dogum-haritasi" },
    { icon: Book, title: "Büyü Kitabı", description: "Antik bilgeliği modern dünyaya taşıyan rehberiniz.", to: "/buyu-kitabi" },
    { icon: Sparkles, title: "Mistik Ürünler", description: "Büyüleriniz için gerekli tüm malzemeler.", to: "/alisveris" },
  ];

  return (
    <div className="min-h-screen bg-[url('/mystical-background.jpg')] bg-cover bg-center text-white">
      <div className="container mx-auto px-4 py-16 backdrop-blur-sm bg-black bg-opacity-50">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">BüyüDünyası'na Hoş Geldiniz</h1>
          <p className="text-xl text-purple-200 mb-8">Mistik güçleri keşfedin, geleceğinizi şekillendirin</p>
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Link to="/buyu-testi">Büyü Testine Başla</Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-semibold mb-4">Ruhsal Yolculuğunuza Başlayın</h2>
          <p className="text-lg text-purple-200 mb-8">
            BüyüDünyası'nda, antik bilgelik ve modern mistisizm bir araya geliyor. 
            Kendi gücünüzü keşfedin ve hayatınızı dönüştürün.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link to="/uye-ol">Hemen Üye Olun</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;