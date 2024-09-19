import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { motion } from 'framer-motion';

const BuyuTesti = () => {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    "Son zamanlarda sürekli kötü şansla mı karşılaşıyorsunuz?",
    "Açıklanamayan sağlık sorunları yaşıyor musunuz?",
    "Rüyalarınızda sık sık kabus görüyor musunuz?",
    "Etrafınızda açıklanamayan sesler veya hareketler fark ediyor musunuz?",
    "Ani ve açıklanamayan duygusal değişimler yaşıyor musunuz?",
    "İlişkilerinizde sürekli sorunlar yaşıyor musunuz?",
    "Sürekli yorgunluk ve enerji düşüklüğü hissediyor musunuz?",
    "Açıklanamayan korkular ve endişeler yaşıyor musunuz?"
  ];

  const handleChange = (checked) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: checked }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const calculateResult = () => {
    const trueCount = Object.values(answers).filter(Boolean).length;
    if (trueCount >= 6) {
      setResult("Büyü etkisi altında olma ihtimaliniz çok yüksek. Acilen bir uzmana danışmanızı öneririz.");
    } else if (trueCount >= 4) {
      setResult("Büyü etkisi altında olma ihtimaliniz yüksek. Büyüden korunma yollarını denemenizi ve bir uzmana danışmanızı öneririz.");
    } else if (trueCount >= 2) {
      setResult("Büyü etkisi altında olabilirsiniz. Daha fazla araştırma yapmanızı ve kendinizi korumanızı öneririz.");
    } else {
      setResult("Büyü etkisi altında olma ihtimaliniz düşük görünüyor. Yine de dikkatli olun ve kendinizi koruyun.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-purple-700">Bende Büyü Var Mı? Testi</CardTitle>
          </CardHeader>
          <CardContent>
            {currentQuestion < questions.length ? (
              <>
                <Progress value={(currentQuestion / questions.length) * 100} className="mb-4" />
                <p className="text-lg mb-4">{questions[currentQuestion]}</p>
                <div className="flex items-center space-x-2 mb-4">
                  <Checkbox
                    id={`question-${currentQuestion}`}
                    checked={answers[currentQuestion] || false}
                    onCheckedChange={handleChange}
                  />
                  <Label htmlFor={`question-${currentQuestion}`}>Evet</Label>
                </div>
                {currentQuestion === questions.length - 1 && (
                  <Button onClick={calculateResult} className="w-full mt-4">Sonucu Gör</Button>
                )}
              </>
            ) : (
              result && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="p-4 bg-purple-100 rounded-lg"
                >
                  <h3 className="text-xl font-semibold mb-2">Test Sonucunuz:</h3>
                  <p className="text-lg">{result}</p>
                </motion.div>
              )
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default BuyuTesti;
