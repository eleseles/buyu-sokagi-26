import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AstrolojiveBuyu = () => {
  const burclar = [
    { isim: "Koç", buyu: "Cesaret ve güç büyüleri" },
    { isim: "Boğa", buyu: "Bolluk ve bereket büyüleri" },
    { isim: "İkizler", buyu: "İletişim ve zeka büyüleri" },
    { isim: "Yengeç", buyu: "Duygusal iyileşme büyüleri" },
    { isim: "Aslan", buyu: "Liderlik ve özgüven büyüleri" },
    { isim: "Başak", buyu: "Arınma ve sağlık büyüleri" },
    { isim: "Terazi", buyu: "Uyum ve denge büyüleri" },
    { isim: "Akrep", buyu: "Dönüşüm ve güç büyüleri" },
    { isim: "Yay", buyu: "Macera ve şans büyüleri" },
    { isim: "Oğlak", buyu: "Kariyer ve başarı büyüleri" },
    { isim: "Kova", buyu: "Yenilik ve özgürlük büyüleri" },
    { isim: "Balık", buyu: "Ruhsal gelişim ve sezgi büyüleri" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Astroloji ve Büyü</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Astroloji ve büyü arasında güçlü bir bağlantı vardır. Her burç, belirli büyü türlerine daha yatkındır:</p>
          <Tabs defaultValue="Koç">
            <TabsList className="grid grid-cols-3 lg:grid-cols-4">
              {burclar.map((burc) => (
                <TabsTrigger key={burc.isim} value={burc.isim}>{burc.isim}</TabsTrigger>
              ))}
            </TabsList>
            {burclar.map((burc) => (
              <TabsContent key={burc.isim} value={burc.isim}>
                <Card>
                  <CardHeader>
                    <CardTitle>{burc.isim} Burcu ve Büyü</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{burc.isim} burcu için en etkili büyü türü: {burc.buyu}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AstrolojiveBuyu;