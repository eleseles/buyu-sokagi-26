import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Star, Shield, Zap, Moon, Sun, Sparkles } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BuyuDualari = () => {
  const [customDua, setCustomDua] = useState('');
  const [customDuaCategory, setCustomDuaCategory] = useState('');
  const [dualar, setDualar] = useState([
    { title: "Aşk Duası", icon: Heart, content: "Sevgi dolu kalplerle birleşelim, aşkımız sonsuza dek sürsün.", category: "Aşk" },
    { title: "Şans Duası", icon: Star, content: "Talih yıldızım parlasın, şans her adımımda benimle olsun.", category: "Şans" },
    { title: "Koruma Duası", icon: Shield, content: "Kötülüklerden uzak, iyiliklerle dolu bir yaşam için korunayım.", category: "Koruma" },
    { title: "Güç Duası", icon: Zap, content: "İçimdeki güç ortaya çıksın, hedeflerime ulaşmamı sağlasın.", category: "Güç" },
    { title: "Huzur Duası", icon: Moon, content: "İç huzurum artsın, ruhum sakinleşsin, zihnimde barış hüküm sürsün.", category: "Huzur" },
    { title: "Bereket Duası", icon: Sun, content: "Bolluk ve bereket hayatımı kuşatsın, nimetler çoğalsın.", category: "Bereket" },
    { title: "İyileşme Duası", icon: Sparkles, content: "Bedenime ve ruhuma şifa gelsin, sağlığım yerine gelsin.", category: "Sağlık" },
  ]);
  const [selectedDua, setSelectedDua] = useState(null);
  const [favoriteDualar, setFavoriteDualar] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteDualar');
    if (savedFavorites) {
      setFavoriteDualar(JSON.parse(savedFavorites));
    }
  }, []);

  const handleCustomDuaSubmit = (e) => {
    e.preventDefault();
    if (customDua.trim() !== '' && customDuaCategory !== '') {
      const newDua = { 
        title: "Özel Dua", 
        icon: Star, 
        content: customDua, 
        category: customDuaCategory 
      };
      setDualar([...dualar, newDua]);
      setCustomDua('');
      setCustomDuaCategory('');
      toast({
        title: "Dua Eklendi",
        description: "Özel duanız başarıyla eklendi.",
      });
    }
  };

  const toggleFavorite = (dua) => {
    const newFavorites = favoriteDualar.includes(dua.title)
      ? favoriteDualar.filter(title => title !== dua.title)
      : [...favoriteDualar, dua.title];
    
    setFavoriteDualar(newFavorites);
    localStorage.setItem('favoriteDualar', JSON.stringify(newFavorites));
    
    toast({
      title: favoriteDualar.includes(dua.title) ? "Favorilerden Çıkarıldı" : "Favorilere Eklendi",
      description: `${dua.title} ${favoriteDualar.includes(dua.title) ? 'favorilerden çıkarıldı.' : 'favorilere eklendi.'}`,
    });
  };

  const categories = [...new Set(dualar.map(dua => dua.category))];

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
        <div className="grid md:grid-cols-2 gap-6">
          {dualar.map((dua, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-white bg-opacity-10 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <div className="flex items-center">
                      {React.createElement(dua.icon, { className: "w-6 h-6 mr-2" })}
                      {dua.title}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => toggleFavorite(dua)}
                      className={favoriteDualar.includes(dua.title) ? "text-yellow-400" : "text-white"}
                    >
                      <Star className="w-5 h-5" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-100 italic mb-2">"{dua.content}"</p>
                  <p className="text-sm text-purple-200">Kategori: {dua.category}</p>
                  <Button 
                    className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => setSelectedDua(dua)}
                  >
                    Detayları Gör
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <Card className="mt-12 bg-white bg-opacity-10 backdrop-blur-md">
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
              <Select onValueChange={setCustomDuaCategory} value={customDuaCategory}>
                <SelectTrigger className="w-full bg-purple-800 bg-opacity-30 text-white">
                  <SelectValue placeholder="Kategori seçin" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Duayı Ekle
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <Dialog open={!!selectedDua} onOpenChange={() => setSelectedDua(null)}>
        <DialogContent className="bg-purple-900 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center text-2xl">
              {selectedDua && React.createElement(selectedDua.icon, { className: "w-8 h-8 mr-2" })}
              {selectedDua?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="italic">"{selectedDua?.content}"</p>
            <h4 className="font-bold">Kategori:</h4>
            <p>{selectedDua?.category}</p>
            <h4 className="font-bold">Kullanım Önerileri:</h4>
            <ul className="list-disc list-inside">
              <li>Bu duayı günde en az bir kez tekrarlayın.</li>
              <li>Dua ederken içten ve samimi olun.</li>
              <li>Duanızı görselleştirmeye çalışın.</li>
              <li>Sabırlı olun, sonuçlar zaman alabilir.</li>
            </ul>
            <h4 className="font-bold">Uyarı:</h4>
            <p>Bu dua sadece iyi niyetli amaçlar için kullanılmalıdır. Başkalarına zarar vermek için asla kullanmayın.</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BuyuDualari;