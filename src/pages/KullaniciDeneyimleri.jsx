import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const KullaniciDeneyimleri = () => {
  const deneyimler = [
    {
      isim: "Ayşe K.",
      avatar: "AK",
      deneyim: "Aşk büyüsü yaptırdıktan sonra hayatım değişti. Şu an çok mutlu bir ilişkim var!",
    },
    {
      isim: "Mehmet Y.",
      avatar: "MY",
      deneyim: "Şans büyüsü sonrası işlerim açıldı. İnanılmaz bir deneyimdi.",
    },
    {
      isim: "Zeynep B.",
      avatar: "ZB",
      deneyim: "Koruma büyüsü sayesinde negatif enerjilerden arındım. Kendimi çok daha iyi hissediyorum.",
    },
    {
      isim: "Ali R.",
      avatar: "AR",
      deneyim: "Zenginlik büyüsünden sonra beklenmedik bir miras aldım. Gerçekten işe yarıyor!",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Kullanıcı Deneyimleri</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Büyü deneyimi yaşayan kullanıcılarımızın gerçek hikayeleri:</p>
          {deneyimler.map((deneyim, index) => (
            <div key={index} className="flex items-start space-x-4 mb-6">
              <Avatar>
                <AvatarFallback>{deneyim.avatar}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{deneyim.isim}</h3>
                <p className="text-sm text-gray-600">{deneyim.deneyim}</p>
              </div>
            </div>
          ))}
          <p className="mt-4 text-sm text-gray-500">Not: Bu deneyimler kişiseldir ve herkes için aynı sonuçları garanti etmez.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default KullaniciDeneyimleri;