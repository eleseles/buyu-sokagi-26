import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const BuyuDualari = () => {
  const dualar = [
    {
      title: "Aşk Duası",
      content: "Sevgi dolu kalplerle birleşelim, aşkımız sonsuza dek sürsün."
    },
    {
      title: "Şans Duası",
      content: "Talih yıldızım parlasın, şans her adımımda benimle olsun."
    },
    {
      title: "Koruma Duası",
      content: "Kötülüklerden uzak, iyiliklerle dolu bir yaşam için korunayım."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Büyü Duaları</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Büyü duaları, isteklerinizi evrene iletmek için kullanılan güçlü sözlerdir. İşte bazı örnek dualar:</p>
          {dualar.map((dua, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold">{dua.title}</h3>
              <p className="italic">"{dua.content}"</p>
            </div>
          ))}
          <p className="mt-4">Not: Bu duaları kullanırken saygılı ve dikkatli olun. Duaların gücü, niyetinizin saflığına ve inancınıza bağlıdır.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BuyuDualari;