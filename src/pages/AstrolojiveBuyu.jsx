import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Compass, Star, Moon, Sun, Sparkles, Wand2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

const AstrolojiveBuyu = () => {
  const [selectedBurc, setSelectedBurc] = useState("Koç");
  const { toast } = useToast();

  const burclar = [
    { isim: "Koç", element: "Ateş", gezegen: "Mars", buyu: "Cesaret ve güç büyüleri", tavsiye: "Kırmızı mum ve karanfil kullanın." },
    { isim: "Boğa", element: "Toprak", gezegen: "Venüs", buyu: "Bolluk ve bereket büyüleri", tavsiye: "Yeşil mum ve papatya kullanın." },
    { isim: "İkizler", element: "Hava", gezegen: "Merkür", buyu: "İletişim ve zeka büyüleri", tavsiye: "Sarı mum ve lavanta kullanın." },
    { isim: "Yengeç", element: "Su", gezegen: "Ay", buyu: "Duygusal iyileşme büyüleri", tavsiye: "Beyaz mum ve gül yaprağı kullanın." },
    { isim: "Aslan", element: "Ateş", gezegen: "Güneş", buyu: "Liderlik ve özgüven büyüleri", tavsiye: "Altın renkli mum ve safran kullanın." },
    { isim: "Başak", element: "Toprak", gezegen: "Merkür", buyu: "Arınma ve sağlık büyüleri", tavsiye: "Kahverengi mum ve nane kullanın." },
    { isim: "Terazi", element: "Hava", gezegen: "Venüs", buyu: "Uyum ve denge büyüleri", tavsiye: "Pembe mum ve gül suyu kullanın." },
    { isim: "Akrep", element: "Su", gezegen: "Plüton", buyu: "Dönüşüm ve güç büyüleri", tavsiye: "Siyah mum ve zencefil kullanın." },
    { isim: "Yay", element: "Ateş", gezegen: "Jüpiter", buyu: "Macera ve şans büyüleri", tavsiye: "Mor mum ve adaçayı kullanın." },
    { isim: "Oğlak", element: "Toprak", gezegen: "Satürn", buyu: "Kariyer ve başarı büyüleri", tavsiye: "Gri mum ve sedir ağacı kullanın." },
    { isim: "Kova", element: "Hava", gezegen: "Uranüs", buyu: "Yenilik ve özgürlük büyüleri", tavsiye: "Mavi mum ve okaliptüs kullanın." },
    { isim: "Balık", element: "Su", gezegen: "Neptün", buyu: "Ruhsal gelişim ve sezgi büyüleri", tavsiye: "Turkuaz mum ve mersin yaprağı kullanın." },
  ];

  const elementRenkleri = {
    "Ateş": "from-red-500 to-orange-500",
    "Toprak": "from-green-500 to-yellow-500",
    "Hava": "from-blue-500 to-indigo-500",
    "Su": "from-cyan-500 to-blue-500"
  };

  const handleBuyuUygula = (burc) => {
    toast({
      title: "Büyü Uygulandı!",
      description: `${burc.isim} burcu için ${burc.buyu} uygulandı.`,
      duration: 3000,
    });
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
          Astroloji ve Büyü
        </motion.h1>
        <Card className="bg-white bg-opacity-10 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Burçlar ve Büyü İlişkisi</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-purple-100">Astroloji ve büyü arasında güçlü bir bağlantı vardır. Her burç, belirli büyü türlerine daha yatkındır ve kendine özgü enerjilere sahiptir.</p>
            <Tabs defaultValue={selectedBurc} onValueChange={setSelectedBurc}>
              <TabsList className="grid grid-cols-3 lg:grid-cols-4 gap-2">
                {burclar.map((burc) => (
                  <TabsTrigger key={burc.isim} value={burc.isim} className="text-purple-200">
                    {burc.isim}
                  </TabsTrigger>
                ))}
              </TabsList>
              {burclar.map((burc) => (
                <TabsContent key={burc.isim} value={burc.isim}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className={`bg-gradient-to-r ${elementRenkleri[burc.element]} text-white`}>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>{burc.isim} Burcu ve Büyü</span>
                          <Compass className="w-8 h-8" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="font-semibold">Element:</p>
                            <p>{burc.element}</p>
                          </div>
                          <div>
                            <p className="font-semibold">Gezegen:</p>
                            <p>{burc.gezegen}</p>
                          </div>
                          <div className="col-span-2">
                            <p className="font-semibold">En Etkili Büyü Türü:</p>
                            <p>{burc.buyu}</p>
                          </div>
                          <div className="col-span-2">
                            <p className="font-semibold">Büyü Tavsiyesi:</p>
                            <p>{burc.tavsiye}</p>
                          </div>
                        </div>
                        <Button 
                          className="mt-4 w-full bg-purple-600 hover:bg-purple-700"
                          onClick={() => handleBuyuUygula(burc)}
                        >
                          <Wand2 className="w-4 h-4 mr-2" />
                          Büyü Uygula
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <Card className="bg-white bg-opacity-10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Moon className="w-6 h-6 mr-2" />
                Ay Fazları ve Büyü
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-100">
              <p>Ay'ın farklı fazları, farklı türde büyüler için ideal zamanları belirler. Yeni ay yeni başlangıçlar için, dolunay ise güçlendirme büyüleri için mükemmeldir.</p>
            </CardContent>
          </Card>
          <Card className="bg-white bg-opacity-10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Sun className="w-6 h-6 mr-2" />
                Güneş Transitleri
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-100">
              <p>Güneş'in burçlar arasındaki geçişleri, büyülerin etkisini artırabilir. Örneğin, Güneş Aslan burcundayken liderlik büyüleri daha güçlü olur.</p>
            </CardContent>
          </Card>
          <Card className="bg-white bg-opacity-10 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Star className="w-6 h-6 mr-2" />
                Gezegen Uyumları
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-100">
              <p>Gezegenlerin birbirleriyle yaptıkları açılar, büyülerin gücünü etkileyebilir. Uyumlu açılar büyünün etkisini artırırken, zor açılar engeller oluşturabilir.</p>
            </CardContent>
          </Card>
        </div>
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-lg text-white mb-4">
            Astroloji ve büyü bilgilerinizi derinleştirmek ve kişisel astrolojik haritanıza uygun büyüler öğrenmek ister misiniz?
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                <Sparkles className="w-4 h-4 mr-2" />
                Kişisel Astro-Büyü Danışmanlığı Al
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-purple-900 text-white">
              <DialogHeader>
                <DialogTitle>Kişisel Astro-Büyü Danışmanlığı</DialogTitle>
              </DialogHeader>
              <p>Uzman astrologlarımız ve büyücülerimiz, sizin için özel olarak hazırlanmış bir danışmanlık hizmeti sunmaktadır. Doğum haritanıza ve kişisel enerjinize uygun büyüler, ritüeller ve astrolojik tavsiyeler alabilirsiniz.</p>
              <Button className="mt-4">Randevu Al</Button>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </div>
  );
};

export default AstrolojiveBuyu;