import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from 'framer-motion';
import { Star, AlertTriangle, Moon, Volume2, Zap } from 'lucide-react';

const BuyuTesti = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const questions = [
    {
      question: "Son zamanlarda sürekli kötü şansla mı karşılaşıyorsunuz?",
      icon: Star
    },
    {
      question: "Açıklanamayan sağlık sorunları yaşıyor musunuz?",
      icon: AlertTriangle
    },
    {
      question: "Rüyalarınızda sık sık kabus görüyor musunuz?",
      icon: Moon
    },
    {
      question: "Etrafınızda açıklanamayan sesler veya hareketler fark ediyor musunuz?",
      icon: Volume2
    },
    {
      question: "Ani ve açıklanamayan duygusal değişimler yaşıyor musunuz?",
      icon: Zap
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-white bg-opacity-10 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-white">Bende Büyü Var Mı? Testi</CardTitle>
          </CardHeader>
          <CardContent>
            {result ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">Test Sonucunuz:</h3>
                <p className="text-lg mb-6 text-purple-100">{result}</p>
                <div className="w-32 h-32 mx-auto mb-6 bg-purple-300 rounded-full flex items-center justify-center">
                  <Star className="w-20 h-20 text-purple-700" />
                </div>
                <Button onClick={() => window.location.reload()} className="bg-white text-purple-700 hover:bg-purple-100">
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
                    className="text-center"
                  >
                    <div className="w-24 h-24 mx-auto mb-4 bg-purple-300 rounded-full flex items-center justify-center">
                      {React.createElement(questions[currentQuestion].icon, { className: "w-16 h-16 text-purple-700" })}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{questions[currentQuestion].question}</h3>
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
