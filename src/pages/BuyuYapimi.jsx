import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BuyuYapimi = () => {
  const buyuTurleri = [
    {
      title: "Aşk Büyüsü",
      content: "Aşk büyüsü, iki kişi arasındaki duygusal bağı güçlendirmek veya yeni bir aşk çekmek için yapılır. Genellikle gül yaprakları, mum ve kişisel eşyalar kullanılır."
    },
    {
      title: "Şans Büyüsü",
      content: "Şans büyüsü, kişinin hayatına olumlu enerji çekmek ve şansını artırmak için yapılır. Dört yapraklı yonca, at nalı gibi şans getirici nesneler kullanılır."
    },
    {
      title: "Koruma Büyüsü",
      content: "Koruma büyüsü, kişiyi negatif enerjilerden ve kötü niyetli büyülerden korumak için yapılır. Tuz, beyaz mum ve koruyucu semboller kullanılır."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Büyü Nasıl Yapılır?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Büyü yapmak, doğaüstü güçleri kullanarak istenen sonuçları elde etme girişimidir. Farklı büyü türleri ve yapılış yöntemleri vardır:</p>
          <Accordion type="single" collapsible>
            {buyuTurleri.map((buyu, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{buyu.title}</AccordionTrigger>
                <AccordionContent>{buyu.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-4">Not: Büyü yapmak, etik ve yasal sonuçları olabilecek bir konudur. Bu bilgiler sadece bilgilendirme amaçlıdır.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BuyuYapimi;