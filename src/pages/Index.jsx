import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Star, Zap, Shield, Book, Users, Sparkles, Moon, Sun, Wand2, Heart, Compass } from 'lucide-react';
import { useTheme } from 'next-themes';

const FeatureCard = ({ icon: Icon, title, description, to }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
    whileHover={{ scale: 1.05, rotate: 1 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className="w-12 h-12 mx-auto mb-4 text-purple-600 dark:text-purple-400" />
    <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
    <Button asChild variant="outline">
      <Link to={to}>Keşfet</Link>
    </Button>
  </motion.div>
);

const Index = () => {
  const { theme, setTheme } = useTheme();
  const features = [
    { icon: Star, title: "Büyü Testi", description: "Üzerinizdeki büyüyü keşfedin", to: "/buyu-testi" },
    { icon: Book, title: "Büyü Türleri", description: "Farklı büyü çeşitlerini öğrenin", to: "/buyu-turleri" },
    { icon: Sparkles, title: "Günlük Tavsiyeler", description: "Büyülü ipuçları alın", to: "/gunluk-tavsiyeler" },
    { icon: Shield, title: "Büyü Bozma", description: "Kendinizi negatif enerjilerden koruyun", to: "/buyu-bozma" },
    { icon: Wand2, title: "Büyü Yapımı", description: "Kendi büyülerinizi nasıl yapacağınızı öğrenin", to: "/buyu-yapimi" },
    { icon: Users, title: "Kullanıcı Deneyimleri", description: "Diğer büyücülerin hikayelerini okuyun", to: "/kullanici-deneyimleri" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 dark:from-purple-900 dark:via-pink-900 dark:to-red-900 transition-colors duration-500">
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <motion.h2 
            className="text-6xl font-bold mb-4 text-white dark:text-purple-300"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Büyülü Dünyanızı Keşfedin
          </motion.h2>
          <motion.p 
            className="text-2xl mb-8 text-purple-100 dark:text-purple-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Gizem dolu yolculuğunuzda size rehberlik ediyoruz. Kendi gücünüzü ortaya çıkarın!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-purple-100 dark:bg-purple-700 dark:text-white dark:hover:bg-purple-600 transition-colors duration-300">
              <Link to="/buyu-testi">Hemen Büyü Testine Başla</Link>
            </Button>
          </motion.div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </section>

        <section className="text-center mb-16 bg-white dark:bg-gray-800 bg-opacity-10 backdrop-blur-md p-8 rounded-lg">
          <h2 className="text-4xl font-bold mb-4 text-white dark:text-purple-300">Neden BüyüDünyası?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div className="text-left" whileHover={{ scale: 1.05 }}>
              <Zap className="w-12 h-12 text-yellow-300 dark:text-yellow-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-white dark:text-purple-300">Kapsamlı Bilgi</h3>
              <p className="text-purple-100 dark:text-purple-200">Yüzlerce yıllık bilgeliği modern çağa taşıyoruz.</p>
            </motion.div>
            <motion.div className="text-left" whileHover={{ scale: 1.05 }}>
              <Shield className="w-12 h-12 text-green-300 dark:text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-white dark:text-purple-300">Kişiselleştirilmiş Deneyim</h3>
              <p className="text-purple-100 dark:text-purple-200">Size özel büyü tavsiyeleri ve testler sunuyoruz.</p>
            </motion.div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-white dark:text-purple-300">Büyülü Yolculuğunuza Başlayın</h2>
          <p className="text-2xl mb-8 text-purple-100 dark:text-purple-200">Hemen üye olun ve tüm özelliklere erişim kazanın!</p>
          <Button asChild size="lg" className="bg-purple-700 text-white hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700 transition-colors duration-300">
            <Link to="/uye-ol">Ücretsiz Üye Ol</Link>
          </Button>
        </section>
      </main>

      <footer className="bg-purple-900 dark:bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 BüyüDünyası. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;