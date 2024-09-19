import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Büyü Dünyasına Hoş Geldiniz</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Bende Büyü Var Mı? Testi</CardTitle>
              <CardDescription>Kendinizde büyü olup olmadığını öğrenin.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild><Link to="/buyu-testi">Teste Başla</Link></Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Büyü Belirtileri</CardTitle>
              <CardDescription>Büyü etkisinde olup olmadığınızı anlamak için belirtileri öğrenin.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild><Link to="/buyu-belirtileri">Belirtileri Gör</Link></Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Büyü Nasıl Yapılır?</CardTitle>
              <CardDescription>Farklı büyü türleri ve yapılış yöntemleri hakkında bilgi edinin.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild><Link to="/buyu-yapimi">Detayları Öğren</Link></Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Büyü Duaları</CardTitle>
              <CardDescription>Çeşitli amaçlar için kullanılan büyü dualarını keşfedin.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild><Link to="/buyu-dualari">Duaları Gör</Link></Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Büyü Bozma</CardTitle>
              <CardDescription>Büyü bozma yöntemleri ve duaları hakkında bilgi alın.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild><Link to="/buyu-bozma">Nasıl Bozulur?</Link></Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Büyü Kitabı</CardTitle>
              <CardDescription>Kapsamlı büyü kitabımızı satın alın ve daha fazla bilgiye erişin.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild><Link to="/buyu-kitabi">Kitabı İncele</Link></Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
