import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Briefcase, Star, Zap, Brain, Coins } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

const burclar = [
  "Koç", "Boğa", "İkizler", "Yengeç", "Aslan", "Başak",
  "Terazi", "Akrep", "Yay", "Oğlak", "Kova", "Balık"
];

const fetchBurcYorumu = async (burc) => {
  // Bu fonksiyon normalde bir API'ye istek atardı, ancak şimdilik rastgele bir yorum döndüreceğiz
  const yorumlar = {
    genel: [
      "Bugün enerjiniz yüksek ve motivasyonunuz tam. Yeni başlangıçlar için ideal bir gün.",
      "Dikkatli olmanız gereken bir gün. Ani değişikliklere hazırlıklı olun.",
      "Şansınız yaver gidiyor. Fırsatları değerlendirmeye bakın.",
      "İç sesinizi dinlemenin tam zamanı. Sezgileriniz sizi yanıltmayacak.",
      "Sosyal ilişkilerinizin öne çıkacağı bir gün. İletişime açık olun."
    ],
    ask: [
      "Aşk hayatınızda heyecan verici gelişmeler olabilir. Açık ve dürüst iletişim kurun.",
      "Partnerinizle olan ilişkinizde derin duygusal bağlar kurabilirsiniz.",
      "Yalnızsanız, yeni bir aşka yelken açabilirsiniz. Gözlerinizi açık tutun.",
      "İlişkinizde bazı zorluklar yaşayabilirsiniz. Sabırlı ve anlayışlı olun.",
      "Romantizm bugün hayatınızda ön planda. Sevdiklerinize zaman ayırın."
    ],
    kariyer: [
      "İş hayatınızda liderlik özellikleriniz ön plana çıkacak. İnisiyatif almaktan çekinmeyin.",
      "Yeni iş fırsatları kapınızı çalabilir. Değerlendirmeye açık olun.",
      "Mesleki becerilerinizi geliştirmek için ideal bir gün. Eğitimlere katılmayı düşünebilirsiniz.",
      "İş arkadaşlarınızla işbirliği içinde çalışmak, büyük başarılar getirebilir.",
      "Kariyerinizde yeni bir sayfa açmak için uygun bir zaman. Hedeflerinizi gözden geçirin."
    ],
    saglik: [
      "Fiziksel aktivitelere yönelmek size iyi gelecek. Enerjinizi doğru kanalize edin.",
      "Stresinizi yönetmek için meditasyon veya yoga deneyebilirsiniz.",
      "Beslenme alışkanlıklarınızı gözden geçirmenin tam zamanı.",
      "Uyku düzeninize dikkat edin. Kaliteli bir uyku sağlığınız için çok önemli.",
      "Düzenli check-up yaptırmanın faydalarını görebilirsiniz. Sağlığınızı ihmal etmeyin."
    ],
    para: [
      "Finansal konularda dikkatli olmanız gereken bir gün. Gereksiz harcamalardan kaçının.",
      "Yeni bir yatırım fırsatı karşınıza çıkabilir. İyi değerlendirin.",
      "Bütçenizi gözden geçirmenin tam zamanı. Tasarruf planları yapabilirsiniz.",
      "Beklenmedik bir gelir elde edebilirsiniz. Akıllıca değerlendirin.",
      "Finansal hedeflerinize odaklanın. Uzun vadeli planlar yapmak için uygun bir zaman."
    ]
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        genel: yorumlar.genel[Math.floor(Math.random() * yorumlar.genel.length)],
        ask: yorumlar.ask[Math.floor(Math.random() * yorumlar.ask.length)],
        kariyer: yorumlar.kariyer[Math.floor(Math.random() * yorumlar.kariyer.length)],
        saglik: yorumlar.saglik[Math.floor(Math.random() * yorumlar.saglik.length)],
        para: yorumlar.para[Math.floor(Math.random() * yorumlar.para.length)]
      });
    }, 1000);
  });
};

const GunlukBurcYorumlari = () => {
  const [seciliBurc, setSeciliBurc] = useState("Koç");
  const { data: burcYorumu, isLoading, error, refetch } = useQuery({
    queryKey: ['burcYorumu', seciliBurc],
    queryFn: () => fetchBurcYorumu(seciliBurc),
    enabled: !!seciliBurc,
  });

  const [sansYuzdesi, setSansYuzdesi] = useState(Math.floor(Math.random() * 101));

  const yeniYorumAl = () => {
    refetch();
    setSansYuzdesi(Math.floor(Math.random() * 101));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Günlük Burç Yorumları
        </motion.h1>
        <Card className="max-w-2xl mx-auto bg-white bg-opacity-20 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Burcunuzu Seçin</CardTitle>
          </CardHeader>
          <CardContent>
            <Select onValueChange={setSeciliBurc} defaultValue={seciliBurc}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Burç seçin" />
              </SelectTrigger>
              <SelectContent>
                {burclar.map((burc) => (
                  <SelectItem key={burc} value={burc}>{burc}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {isLoading && <p className="text-white mt-4">Yorumunuz yükleniyor...</p>}
            {error && <p className="text-red-500 mt-4">Bir hata oluştu. Lütfen tekrar deneyin.</p>}
            
            {burcYorumu && (
              <Tabs defaultValue="genel" className="mt-6">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="genel">Genel</TabsTrigger>
                  <TabsTrigger value="ask">Aşk</TabsTrigger>
                  <TabsTrigger value="kariyer">Kariyer</TabsTrigger>
                  <TabsTrigger value="saglik">Sağlık</TabsTrigger>
                  <TabsTrigger value="para">Para</TabsTrigger>
                </TabsList>
                <TabsContent value="genel">
                  <Card>
                    <CardHeader>
                      <CardTitle>Genel Yorum</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Star className="w-6 h-6 mb-2 text-yellow-400" />
                      <p>{burcYorumu.genel}</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="ask">
                  <Card>
                    <CardHeader>
                      <CardTitle>Aşk Yorumu</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Heart className="w-6 h-6 mb-2 text-red-400" />
                      <p>{burcYorumu.ask}</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="kariyer">
                  <Card>
                    <CardHeader>
                      <CardTitle>Kariyer Yorumu</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Briefcase className="w-6 h-6 mb-2 text-blue-400" />
                      <p>{burcYorumu.kariyer}</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="saglik">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sağlık Yorumu</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Zap className="w-6 h-6 mb-2 text-green-400" />
                      <p>{burcYorumu.saglik}</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="para">
                  <Card>
                    <CardHeader>
                      <CardTitle>Para Yorumu</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Coins className="w-6 h-6 mb-2 text-yellow-400" />
                      <p>{burcYorumu.para}</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            )}

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-2">Günlük Şans Yüzdeniz</h3>
              <Progress value={sansYuzdesi} className="w-full" />
              <p className="text-white mt-2">%{sansYuzdesi}</p>
            </div>

            <Button onClick={yeniYorumAl} className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white">
              Yeni Yorum Al
            </Button>
          </CardContent>
        </Card>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-white text-purple-700 hover:bg-purple-100">
                <Brain className="w-4 h-4 mr-2" />
                Kişisel Astroloji Danışmanlığı
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-purple-900 text-white">
              <DialogHeader>
                <DialogTitle>Kişisel Astroloji Danışmanlığı</DialogTitle>
              </DialogHeader>
              <p>Uzman astrologlarımızdan biriyle özel bir seans ayarlayarak, doğum haritanıza dayalı derinlemesine bir analiz alabilirsiniz. Bu seans, hayatınızın tüm alanlarında size rehberlik edecek değerli içgörüler sunacaktır.</p>
              <Button className="mt-4">Randevu Al</Button>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </div>
  );
};

export default GunlukBurcYorumlari;