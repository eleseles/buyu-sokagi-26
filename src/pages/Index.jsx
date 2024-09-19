import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Sparkles, TestTube, AlertCircle, Book, BookOpen, Shield, ShoppingBag, Wand2, Star, Users, Feather } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Büyülü Dünyaya Hoş Geldiniz</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {feature.icon}
                  <span className="ml-2">{feature.title}</span>
                </CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full"><Link to={feature.link}>Keşfet</Link></Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Büyülü Yolculuğunuza Başlayın</h2>
          <p className="text-white mb-6">Gizem dolu dünyamızda size rehberlik etmekten mutluluk duyuyoruz. Büyünün sırlarını keşfedin, kendi gücünüzü ortaya çıkarın!</p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
            <Link to="/buyu-testi">Hemen Büyü Testine Başla</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
