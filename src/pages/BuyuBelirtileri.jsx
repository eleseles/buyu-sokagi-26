import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const BuyuBelirtileri = () => {
  const belirtiler = [
    "Sürekli kötü şans ve olumsuz olaylar",
    "Açıklanamayan sağlık sorunları",
    "Sık sık kabuslar görme",
    "Ani ve şiddetli duygusal değişimler",
    "Açıklanamayan sesler veya hareketler",
    "İlişkilerde sürekli sorunlar yaşama",
    "Sürekli yorgunluk ve enerji düşüklüğü",
    "Açıklanamayan korkular ve endişeler"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Büyü Belirtileri</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Büyü etkisinde olup olmadığınızı anlamak için aşağıdaki belirtilere dikkat edin:</p>
          <ul className="list-disc pl-5">
            {belirtiler.map((belirti, index) => (
              <li key={index} className="mb-2">{belirti}</li>
            ))}
          </ul>
          <p className="mt-4">Bu belirtilerin birçoğunu yaşıyorsanız, bir uzmana danışmanız önerilir.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BuyuBelirtileri;