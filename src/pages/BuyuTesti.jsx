import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from 'framer-motion';

const BuyuTesti = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const questions = [
    {
      question: "Son zamanlarda sürekli kötü şansla mı karşılaşıyorsunuz?",
      image: "/images/bad-luck.jpg"
    },
    {
      question: "Açıklanamayan sağlık sorunları yaşıyor musunuz?",
      image: "/images/health-issues.jpg"
    },
    {
      question: "Rüyalarınızda sık sık kabus görüyor musunuz?",
      image: "/images/nightmares.jpg"
    },
    {
      question: "Etrafınızda açıklanamayan sesler veya hareketler fark ediyor musunuz?",
      image: "/images/strange-noises.jpg"
    },
    {
      question: "Ani ve açıklanamayan duygusal değişimler yaşıyor musunuz?",
      image: "/images/mood-swings.jpg"
    }
  ];

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    const score = finalAnswers.filter(answer => answer === 'Evet').length;
    if (score >= 4) {
      setResult("Büyü etkisi altında olma ihtimaliniz çok yüksek. Acilen bir uzmana danışmanızı öneririz.");
    } else if (score >= 2) {
      setResult("Büyü etkisi altında olabilirsiniz. Daha fazla araştırma yapmanızı ve kendinizi korumanızı öneririz.");
    } else {
      setResult("Büyü etkisi altında olma ihtimaliniz düşük görünüyor. Yine de dikkatli olun ve kendinizi koruyun.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-indigo-200 py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-purple-800">Bende Büyü Var Mı? Testi</CardTitle>
          </CardHeader>
          <CardContent>
            {result ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h3 className="text-2xl font-semibold mb-4 text-purple-700">Test Sonucunuz:</h3>
                <p className="text-lg mb-6">{result}</p>
                <img src="/images/crystal-ball-result.jpg" alt="Test Sonucu" className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-6" />
                <Button onClick={() => window.location.reload()} className="bg-purple-600 text-white hover:bg-purple-700">
                  Testi Tekrarla
                </Button>
              </motion.div>
            ) : (
              <>
                <Progress value={(currentQuestion / questions.length) * 100} className="mb-6" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={questions[currentQuestion].image} alt={`Soru ${currentQuestion + 1}`} className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold mb-4 text-center text-purple-800">{questions[currentQuestion].question}</h3>
                    <div className="flex justify-center space-x-4">
                      <Button onClick={() => handleAnswer('Evet')} className="bg-green-500 hover:bg-green-600">Evet</Button>
                      <Button onClick={() => handleAnswer('Hayır')} className="bg-red-500 hover:bg-red-600">Hayır</Button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuyuTesti;
