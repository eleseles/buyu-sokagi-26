import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BuyuKitabi = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Büyü Kitabı</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">"Sırlar ve Büyüler: Kapsamlı Bir Rehber"</h2>
          <p className="mb-4">Bu kitap, büyü dünyasına dair tüm bilgileri içeren kapsamlı bir kaynaktır. İçerik:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Farklı büyü türleri ve tarihleri</li>
            <li>Büyü malzemeleri ve kullanımları</li>
            <li>Adım adım büyü yapma rehberleri</li>
            <li>Koruyucu büyüler ve tılsımlar</li>
            <li>Büyü bozma teknikleri</li>
            <li>Etik büyü uygulamaları</li>
          </ul>
          <p className="mb-4">Fiyat: 99.99 TL</p>
          <Button>Şimdi Satın Al</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BuyuKitabi;