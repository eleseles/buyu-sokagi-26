import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GunlukTavsiyeler = () => {
  const [tavsiye, setTavsiye] = React.useState("");

  const tavsiyeler = [
    "Bugün mavi bir mum yakarak iç huzurunuzu artırabilirsiniz.",
    "Evinizi tütsüleyerek negatif enerjilerden arındırın.",
    "Şans getirmesi için üzerinizde bir dört yapraklı yonca taşıyın.",
    "Gece yatmadan önce bir dilek tutup bir yıldıza bakın.",
    "Sevdiklerinize pozitif enerji göndermek için pembe bir taş taşıyın.",
    "Bugün meditasyon yaparak içsel gücünüzü artırın.",
    "Ay'ın enerjisinden faydalanmak için gece ay ışığında 10 dakika geçirin.",
  ];

  const yeniTavsiyeAl = () => {
    const randomIndex = Math.floor(Math.random() * tavsiyeler.length);
    setTavsiye(tavsiyeler[randomIndex]);
  };

  React.useEffect(() => {
    yeniTavsiyeAl();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Günlük Büyü Tavsiyeleri</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Her gün yeni bir büyü ipucu alarak hayatınıza biraz sihir katın!</p>
          <div className="bg-purple-100 p-4 rounded-lg mb-4">
            <p className="text-lg font-semibold">{tavsiye}</p>
          </div>
          <Button onClick={yeniTavsiyeAl}>Yeni Tavsiye Al</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default GunlukTavsiyeler;