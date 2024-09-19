import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const BuyuTesti = () => {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const questions = [
    "Son zamanlarda sürekli kötü şansla mı karşılaşıyorsunuz?",
    "Açıklanamayan sağlık sorunları yaşıyor musunuz?",
    "Rüyalarınızda sık sık kabus görüyor musunuz?",
    "Etrafınızda açıklanamayan sesler veya hareketler fark ediyor musunuz?",
    "Ani ve açıklanamayan duygusal değişimler yaşıyor musunuz?"
  ];

  const handleChange = (question, checked) => {
    setAnswers(prev => ({ ...prev, [question]: checked }));
  };

  const calculateResult = () => {
    const trueCount = Object.values(answers).filter(Boolean).length;
    if (trueCount >= 4) {
      setResult("Büyü etkisi altında olma ihtimaliniz yüksek. Büyüden korunma yollarını denemenizi öneririz.");
    } else if (trueCount >= 2) {
      setResult("Büyü etkisi altında olabilirsiniz. Daha fazla araştırma yapmanızı öneririz.");
    } else {
      setResult("Büyü etkisi altında olma ihtimaliniz düşük görünüyor.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Bende Büyü Var Mı? Testi</CardTitle>
        </CardHeader>
        <CardContent>
          {questions.map((question, index) => (
            <div key={index} className="flex items-center space-x-2 mb-4">
              <Checkbox
                id={`question-${index}`}
                checked={answers[question] || false}
                onCheckedChange={(checked) => handleChange(question, checked)}
              />
              <Label htmlFor={`question-${index}`}>{question}</Label>
            </div>
          ))}
          <Button onClick={calculateResult} className="mt-4">Sonucu Gör</Button>
          {result && (
            <div className="mt-4 p-4 bg-blue-100 rounded">
              <p>{result}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BuyuTesti;