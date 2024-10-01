import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Sun, Moon, Star, Heart, Zap, Shield, Sparkles, Compass, Feather, Eye, Wand2, Coins, Swords, Coffee } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const TarotKartlariAnlamlari = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);

  const tarotCards = [
    { name: "The Sun", meaning: "Başarı, mutluluk, pozitif enerji", icon: Sun, color: "text-yellow-500", suit: "Major Arcana", description: "Güneş kartı, hayatınızdaki aydınlık ve mutlu zamanları temsil eder. Başarı, neşe ve iyimserliğin habercisidir." },
    { name: "The Moon", meaning: "Sezgiler, bilinçaltı, gizem", icon: Moon, color: "text-blue-300", suit: "Major Arcana", description: "Ay kartı, bilinçaltınızın derinliklerini ve gizli korkularınızı simgeler. Sezgilerinizi dinlemeniz gereken bir dönemi işaret eder." },
    { name: "The Star", meaning: "Umut, ilham, rehberlik", icon: Star, color: "text-purple-300", suit: "Major Arcana", description: "Yıldız kartı, umut ve ilhamın sembolüdür. Zorlu zamanların ardından gelen iy ileşme ve yenilenme dönemini müjdeler." },
    { name: "The Lovers", meaning: "Aşk, uyum, ilişkiler", icon: Heart, color: "text-red-500", suit: "Major Arcana", description: "Aşıklar kartı, sadece romantik ilişkileri değil, aynı zamanda önemli seçimleri ve uyumu da temsil eder." },
    { name: "The Tower", meaning: "Ani değişim, yıkım, yeniden yapılanma", icon: Zap, color: "text-orange-500", suit: "Major Arcana", description: "Kule kartı, beklenmedik değişimleri ve yıkımları simgeler. Ancak bu yıkım, yeniden inşa etme fırsatı da sunar." },
    { name: "The Hermit", meaning: "İçe dönüş, yalnızlık, bilgelik arayışı", icon: Shield, color: "text-green-500", suit: "Major Arcana", description: "Ermiş kartı, içsel yolculuğu ve bilgelik arayışını temsil eder. Kendinizle baş başa kalmanın önemini vurgular." },
    { name: "The Magician", meaning: "Yaratıcılık, beceri, irade gücü", icon: Sparkles, color: "text-indigo-500", suit: "Major Arcana", description: "Sihirbaz kartı, yaratıcı gücünüzü ve potansiyelinizi simgeler. Hedeflerinize ulaşmak için gereken tüm araçlara sahip olduğunuzu hatırlatır." },
    { name: "The Fool", meaning: "Yeni başlangıçlar, spontanlık, macera", icon: Compass, color: "text-teal-500", suit: "Major Arcana", description: "Deli kartı, yeni başlangıçları ve risk almayı temsil eder. Hayata karşı saf ve açık bir yaklaşımı simgeler." },
    { name: "The High Priestess", meaning: "Sezgi, gizli bilgi, bilinçaltı", icon: Eye, color: "text-pink-500", suit: "Major Arcana", description: "Yüksek Rahibe kartı, içsel bilgeliği ve sezgisel güçleri temsil eder. Gizli bilgilere erişimi simgeler." },
    { name: "The Empress", meaning: "Bereket, annelik, doğa", icon: Feather, color: "text-green-300", suit: "Major Arcana", description: "İmparatoriçe kartı, doğurganlığı, bereketi ve yaratıcılığı temsil eder. Doğayla uyum içinde olmayı simgeler." },
    { name: "Ace of Wands", meaning: "Yeni başlangıçlar, ilham, potansiyel", icon: Wand2, color: "text-red-400", suit: "Wands", description: "Asaların Ası, yeni fırsatları ve yaratıcı potansiyeli temsil eder. Yeni projelere başlamak için ideal bir zamandır." },
    { name: "King of Pentacles", meaning: "Maddi başarı, pratiklik, güvenilirlik", icon: Coins, color: "text-yellow-600", suit: "Pentacles", description: "Pentakl Kralı, finansal başarıyı ve maddi güvenliği temsil eder. Pratik ve güvenilir bir liderliği simgeler." },
    { name: "Queen of Swords", meaning: "Keskin zeka, dürüstlük, bağımsızlık", icon: Swords, color: "text-blue-500", suit: "Swords", description: "Kılıçların Kraliçesi, keskin zekayı ve dürüstlüğü temsil eder. Bağımsız düşünce ve net iletişimi simgeler." },
    { name: "Knight of Cups", meaning: "Romantizm, macera, duygusal teklifler", icon: Coffee, color: "text-pink-400", suit: "Cups", description: "Kupaların Şövalyesi, romantik yaklaşımları ve duygusal maceraları temsil eder. Yeni ilişkiler veya yaratıcı projeler için bir davet niteliğindedir." },
  ];

  const filteredCards = tarotCards.filter(card =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.suit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tarot Kartları ve Anlamları
        </motion.h1>
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Kart adı, anlamı veya takımı ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white bg-opacity-20 text-white placeholder-purple-200 border-purple-300"
          />
        </div>
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="bg-purple-800 text-purple-100">
            <TabsTrigger value="all">Tümü</TabsTrigger>
            <TabsTrigger value="Major Arcana">Major Arcana</TabsTrigger>
            <TabsTrigger value="Wands">Asalar</TabsTrigger>
            <TabsTrigger value="Cups">Kupalar</TabsTrigger>
            <TabsTrigger value="Swords">Kılıçlar</TabsTrigger>
            <TabsTrigger value="Pentacles">Pentaklar</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <CardGrid cards={filteredCards} setSelectedCard={setSelectedCard} />
          </TabsContent>
          {["Major Arcana", "Wands", "Cups", "Swords", "Pentacles"].map((suit) => (
            <TabsContent key={suit} value={suit}>
              <CardGrid cards={filteredCards.filter(card => card.suit === suit)} setSelectedCard={setSelectedCard} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <Dialog open={!!selectedCard} onOpenChange={() => setSelectedCard(null)}>
        <DialogContent className="bg-purple-900 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center">
              {selectedCard && React.createElement(selectedCard.icon, { className: `w-8 h-8 mr-2 ${selectedCard.color}` })}
              {selectedCard?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p><strong>Anlamı:</strong> {selectedCard?.meaning}</p>
            <p><strong>Takım:</strong> {selectedCard?.suit}</p>
            <p><strong>Açıklama:</strong> {selectedCard?.description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const CardGrid = ({ cards, setSelectedCard }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {cards.map((card, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        <Card className="bg-white bg-opacity-10 backdrop-blur-md overflow-hidden cursor-pointer hover:bg-opacity-20 transition-all duration-300" onClick={() => setSelectedCard(card)}>
          <CardHeader>
            <CardTitle className="text-xl text-center text-white flex items-center justify-center">
              {React.createElement(card.icon, { className: `w-12 h-12 ${card.color} mr-2` })}
              {card.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-purple-100 text-center">{card.meaning}</p>
            <p className="text-purple-200 text-center mt-2 text-sm">{card.suit}</p>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
);

export default TarotKartlariAnlamlari;