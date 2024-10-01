import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Sparkles, Zap, Cloud, Frown, Brain, Heart, Moon } from 'lucide-react';

const questions = [
  {
    question: "Son zamanlarda açıklanamayan şanssızlıklar yaşıyor musunuz?",
    icon: Cloud,
  },
  {
    question: "Sürekli yorgunluk ve enerji düşüklüğü hissediyor musunuz?",
    icon: Zap,
  },
  {
    question: "Rüyalarınızda sık sık kabus görüyor musunuz?",
    icon: Moon,
  },
  {
    question: "İlişkilerinizde ani ve açıklanamayan sorunlar yaşıyor musunuz?",
    icon: Heart,
  },
  {
    question: "Konsantrasyon güçlüğü ve unutkanlık yaşıyor musunuz?",
    icon: Brain,
  },
  {
    question: "Açıklanamayan fiziksel rahatsızlıklar hissediyor musunuz?",
    icon: Frown,
  },
  {
    question: "Etrafınızda negatif bir enerji hissediyor musunuz?",
    icon: Sparkles,
  },
];

const BuyuTesti = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

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
    const positiveAnswers = finalAnswers.filter(answer => answer === 'Evet').length;
    const percentage = (positiveAnswers / questions.length) * 100;

    if (percentage >= 70) {
      setResult("Yüksek ihtimalle büyü etkisi altında olabilirsiniz. Bir uzmana danışmanızı öneririz.");
    } else if (percentage >= 40) {
      setResult("Orta düzeyde büyü etkisi belirtileri gösteriyorsunuz. Önlem almanızda fayda var.");
    } else {
      setResult("Büyü etkisi altında olma ihtimaliniz düşük görünüyor. Ancak kendinizi gözlemlemeye devam edin.");
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  const QuestionCard = ({ question, icon: Icon }) => (
    <Card className="bg-purple-900 bg-opacity-50 backdrop-blur-md text-white">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center justify-center">
          <Icon className="w-8 h-8 mr-2 text-purple-300" />
          {question}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center space-x-4">
        <Button onClick={() => handleAnswer('Evet')} className="bg-green-600 hover:bg-green-700">
          Evet
        </Button>
        <Button onClick={() => handleAnswer('Hayır')} className="bg-red-600 hover:bg-red-700">
          Hayır
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Büyü Testi
        </motion.h1>
        {result ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-purple-900 bg-opacity-50 backdrop-blur-md text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Test Sonucunuz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">{result}</p>
                <Progress value={(answers.filter(a => a === 'Evet').length / questions.length) * 100} className="mb-4" />
                <Button onClick={resetTest} className="w-full bg-purple-600 hover:bg-purple-700">
                  Testi Tekrarla
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <QuestionCard {...questions[currentQuestion]} />
            <div className="mt-4 text-center text-white">
              Soru {currentQuestion + 1} / {questions.length}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BuyuTesti;