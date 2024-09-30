import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Gem, Wand2, Flame, Book, Sparkles, Compass, Feather } from 'lucide-react';

const products = [
  { id: 1, name: "Kristal Küre", price: 199.99, icon: Gem, description: "Geleceği görmek için mükemmel bir araç." },
  { id: 2, name: "Tarot Destesi", price: 49.99, icon: Feather, description: "Klasik Rider-Waite tarot destesi." },
  { id: 3, name: "Tütsü Seti", price: 29.99, icon: Flame, description: "Çeşitli kokulardan oluşan tütsü seti." },
  { id: 4, name: "Büyü Kitabı", price: 79.99, icon: Book, description: "Antik büyüleri içeren el yazması kitap." },
  { id: 5, name: "Rün Taşları", price: 59.99, icon: Sparkles, description: "Kader okumak için rün taşı seti." },
  { id: 6, name: "Şifa Kristalleri", price: 39.99, icon: Gem, description: "Çeşitli şifa kristallerinden oluşan set." },
  { id: 7, name: "Büyü Çubuğu", price: 89.99, icon: Wand2, description: "El yapımı, özel tasarım büyü çubuğu." },
  { id: 8, name: "Astroloji Haritası", price: 24.99, icon: Compass, description: "Kişiselleştirilmiş astroloji haritası." },
];

const ProductCard = ({ product }) => (
  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
    <Card className="h-full bg-purple-900 bg-opacity-50 backdrop-blur-md text-white border-2 border-purple-500">
      <CardHeader>
        <div className="w-full h-48 flex items-center justify-center">
          {React.createElement(product.icon, { className: "w-24 h-24 text-purple-200" })}
        </div>
        <CardTitle className="mt-2">{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">{product.price.toFixed(2)} TL</span>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <ShoppingCart className="mr-2 h-4 w-4" /> Sepete Ekle
          </Button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const Alisveris = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mistik Ürünler
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alisveris;