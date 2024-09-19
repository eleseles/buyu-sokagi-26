import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const BuyuBozma = () => {
  const yontemler = [
    "Tuz banyosu: Vücudunuzu arındırmak için tuzlu su banyosu yapın.",
    "Beyaz mum yakma: Negatif enerjileri uzaklaştırmak için beyaz mum yakın.",
    "Dua ve meditasyon: İçsel huzur ve koruma için dua edin ve meditasyon yapın.",
    "Şifalı taşlar: Ametist veya kuvars gibi koruyucu taşlar kullanın.",
    "Profesyonel yardım: Gerekirse bir medyum veya spiritüel danışmana başvurun."
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Büyü Nasıl Bozulur?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Büyü bozma, üzerinizdeki negatif etkileri kaldırmak için yapılan işlemlerdir. İşte bazı büyü bozma yöntemleri:</p>
          <ul className="list-disc pl-5">
            {yontemler.map((yontem, index) => (
              <li key={index} className="mb-2">{yontem}</li>
            ))}
          </ul>
          <p className="mt-4">Not: Bu yöntemler genel bilgi amaçlıdır. Ciddi durumlar için mutlaka bir uzmana danışın.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BuyuBozma;