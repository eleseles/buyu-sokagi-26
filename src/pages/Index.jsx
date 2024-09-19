import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Index = () => {
  const features = [
    { title: "Büyü Testi", description: "Üzerinizdeki büyüyü keşfedin", icon: "🔮" },
    { title: "Büyü Türleri", description: "Farklı büyü çeşitlerini öğrenin", icon: "📚" },
    { title: "Günlük Tavsiyeler", description: "Büyülü ipuçları alın", icon: "✨" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-indigo-200">
      <header className="py-6 px-4 bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-700">BüyüDünyası</h1>
          <div className="space-x-4">
            <Link to="/buyu-testi" className="text-purple-600 hover:text-purple-800">Büyü Testi</Link>
            <Link to="/buyu-turleri" className="text-purple-600 hover:text-purple-800">Büyü Türleri</Link>
            <Button asChild><Link to="/uye-ol">Üye Ol</Link></Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <motion.h2 
            className="text-5xl font-bold mb-4 text-purple-800"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Büyülü Dünyanızı Keşfedin
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-gray-600"
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
            <Button asChild size="lg" className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300">
              <Link to="/buyu-testi">Hemen Büyü Testine Başla</Link>
            </Button>
          </motion.div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-700">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-purple-800">Neden BüyüDünyası?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/images/magic-book.jpg" alt="Büyü Kitabı" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-purple-700">Kapsamlı Bilgi</h3>
              <p className="text-gray-600">Yüzlerce yıllık bilgeliği modern çağa taşıyoruz.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/images/crystal-ball.jpg" alt="Kristal Küre" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-purple-700">Kişiselleştirilmiş Deneyim</h3>
              <p className="text-gray-600">Size özel büyü tavsiyeleri ve testler sunuyoruz.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-purple-800">Büyülü Yolculuğunuza Başlayın</h2>
          <p className="text-xl mb-8 text-gray-600">Hemen üye olun ve tüm özelliklere erişim kazanın!</p>
          <Button asChild size="lg" className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300">
            <Link to="/uye-ol">Ücretsiz Üye Ol</Link>
          </Button>
        </section>
      </main>

      <footer className="bg-purple-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 BüyüDünyası. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
