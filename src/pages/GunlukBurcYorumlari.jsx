import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Briefcase, Star, Zap } from 'lucide-react';

const burclar = [
  "Koç", "Boğa", "İkizler", "Yengeç", "Aslan", "Başak",
  "Terazi", "Akrep", "Yay", "Oğlak", "Kova", "Balık"
];

const GunlukBurcYorumlari = () => {
  const [seciliBurc, setSeciliBurc] = useState("Koç");

  const burcYorumlari = {
    Koç: {
      genel: "Bugün enerjiniz yüksek ve motivasyonunuz tam. Yeni başlangıçlar için ideal bir gün.",
      ask: "Aşk hayatınızda heyecan verici gelişmeler olabilir. Açık ve dürüst iletişim kurun.",
      kariyer: "İş hayatınızda liderlik özellikleriniz ön plana çıkacak. İnisiyatif almaktan çekinmeyin.",
      saglik: "Fiziksel aktivitelere yönelmek size iyi gelecek. Enerjinizi doğru kanalize edin."
    },
    // Diğer burçlar için benzer yorumlar eklenebilir
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
            
            {burcYorumlari[seciliBurc] && (
              <Tabs defaultValue="genel" className="mt-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="genel">Genel</TabsTrigger>
                  <TabsTrigger value="ask">Aşk</TabsTrigger>
                  <TabsTrigger value="kariyer">Kariyer</TabsTrigger>
                  <TabsTrigger value="saglik">Sağlık</TabsTrigger>
                </TabsList>
                <TabsContent value="genel">
                  <Card>
                    <CardHeader>
                      <CardTitle>Genel Yorum</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Star className="w-6 h-6 mb-2 text-yellow-400" />
                      <p>{burcYorumlari[seciliBurc].genel}</p>
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
                      <p>{burcYorumlari[seciliBurc].ask}</p>
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
                      <p>{burcYorumlari[seciliBurc].kariyer}</p>
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
                      <p>{burcYorumlari[seciliBurc].saglik}</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GunlukBurcYorumlari;