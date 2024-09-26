import React, { useState, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from 'framer-motion';
import { Heart, Star, Shield, Zap, Moon, Volume2 } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const BuyuDualari = () => {
  const [customDua, setCustomDua] = useState('');
  const [dualar, setDualar] = useState([
    {
      title: "Aşk Duası",
      icon: Heart,
      color: "text-red-500",
      content: "Sevgi dolu kalplerle birleşelim, aşkımız sonsuza dek sürsün.",
      rituel: "Bu duayı okurken pembe bir mum yakın ve sevdiğiniz kişiyi düşünün."
    },
    {
      title: "Şans Duası",
      icon: Star,
      color: "text-yellow-500",
      content: "Talih yıldızım parlasın, şans her adımımda benimle olsun.",
      rituel: "Bu duayı okurken yeşil bir mum yakın ve şanslı bir anınızı hayal edin."
    },
    {
      title: "Koruma Duası",
      icon: Shield,
      color: "text-blue-500",
      content: "Kötülüklerden uzak, iyiliklerle dolu bir yaşam için korunayım.",
      rituel: "Bu duayı okurken beyaz bir mum yakın ve kendinizi güvende hissedin."
    },
    {
      title: "Güç Duası",
      icon: Zap,
      color: "text-purple-500",
      content: "İçimdeki güç ortaya çıksın, hedeflerime ulaşmamı sağlasın.",
      rituel: "Bu duayı okurken mor bir mum yakın ve kendinizi güçlü hissedin."
    },
    {
      title: "Huzur Duası",
      icon: Moon,
      color: "text-indigo-500",
      content: "İç huzurum artsın, ruhum sakinleşsin, zihnimde barış hüküm sürsün.",
      rituel: "Bu duayı okurken mavi bir mum yakın ve sakin bir yer hayal edin."
    }
  ]);

  const { toast } = useToast();
  const audioRef = useRef(null);

  const handleCustomDuaSubmit = (e) => {
    e.preventDefault();
    if (customDua.trim() !== '') {
      setDualar([...dualar, {
        title: "Özel Dua",
        icon: Star,
        color: "text-green-500",
        content: customDua,
        rituel: "Bu duayı kendi ritüelinizle birlikte uygulayın."
      }]);
      setCustomDua('');
      toast({
        title: "Yeni Dua Eklendi",
        description: "Özel duanız başarıyla eklendi.",
        duration: 3000,
      });
    }
  };

  const playAudio = (content) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(content);
      utterance.lang = 'tr-TR';
      speechSynthesis.speak(utterance);
    } else {
      toast({
        title: "Hata",
        description: "Tarayıcınız ses özelliğini desteklemiyor.",
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Büyü Duaları
        </motion.h1>
        <Card className="bg-white bg-opacity-10 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Güçlü Büyü Duaları</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-purple-100">Büyü duaları, isteklerinizi evrene iletmek için kullanılan güçlü sözlerdir. Her duayı saygıyla ve inançla okuyun.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {dualar.map((dua, index) => (
                <motion.div 
                  key={index}
                  className="bg-purple-800 bg-opacity-30 p-4 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center mb-2">
                    {React.createElement(dua.icon, { className: `w-6 h-6 mr-2 ${dua.color}` })}
                    <h3 className="text-xl font-semibold text-white">{dua.title}</h3>
                  </div>
                  <p className="text-purple-100 italic mb-2">"{dua.content}"</p>
                  <p className="text-sm text-purple-200 mb-2">Ritüel: {dua.rituel}</p>
                  <Button 
                    onClick={() => playAudio(dua.content)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center"
                  >
                    <Volume2 className="w-4 h-4 mr-2" />
                    Sesli Dinle
                  </Button>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white bg-opacity-10 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Kendi Duanızı Oluşturun</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCustomDuaSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Kendi duanızı yazın..."
                value={customDua}
                onChange={(e) => setCustomDua(e.target.value)}
                className="bg-purple-800 bg-opacity-30 text-white placeholder-purple-300"
              />
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Duayı Ekle
              </Button>
            </form>
          </CardContent>
        </Card>
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-lg text-white mb-4">
            Not: Bu duaları kullanırken saygılı ve dikkatli olun. Duaların gücü, niyetinizin saflığına ve inancınıza bağlıdır.
          </p>
          <Button className="bg-white text-purple-700 hover:bg-purple-100">
            Dua Rehberini İndir
          </Button>
        </motion.div>
      </div>
      <audio ref={audioRef} />
    </div>
  );
};

export default BuyuDualari;