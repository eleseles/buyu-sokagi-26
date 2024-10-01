import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Sparkles, Zap, Cloud, Frown, Brain, Heart, Moon } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const questions = [
  {
    question: "Son zamanlarda açıklanamayan şanssızlıklar yaşıyor musunuz?",
    icon: Cloud,
    weight: 1,
  },
  {
    question: "Sürekli yorgunluk ve enerji düşüklüğü hissediyor musunuz?",
    icon: Zap,
    weight: 1.2,
  },
  {
    question: "Rüyalarınızda sık sık kabus görüyor musunuz?",
    icon: Moon,
    weight: 1.5,
  },
  {
    question: "İlişkilerinizde ani ve açıklanamayan sorunlar yaşıyor musunuz?",
    icon: Heart,
    weight: 1.3,
  },
  {
    question: "Konsantrasyon güçlüğü ve unutkanlık yaşıyor musunuz?",
    icon: Brain,
    weight: 1.1,
  },
  {
    question: "Açıklanamayan fiziksel rahatsızlıklar hissediyor musunuz?",
    icon: Frown,
    weight: 1.4,
  },
  {
    question: "Etrafınızda negatif bir enerji hissediyor musunuz?",
    icon: Sparkles,
    weight: 1.6,
  },
];

const BuyuTesti = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const { toast } = useToast();
  const [testHistory, setTestHistory] = useLocalStorage("testHistory", []);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, { question: currentQuestion, answer }];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    let totalWeight = 0;
    let positiveWeight = 0;

    finalAnswers.forEach((answer, index) => {
      const questionWeight = questions[index].weight;
      totalWeight += questionWeight;
      if (answer.answer === 'Evet') {
        positiveWeight += questionWeight;
      }
    });

    const percentage = (positiveWeight / totalWeight) * 100;

    let resultText;
    if (percentage >= 70) {
      resultText = "Yüksek ihtimalle büyü etkisi altında olabilirsiniz. Bir uzmana danışmanızı öneririz.";
    } else if (percentage >= 40) {
      resultText = "Orta düzeyde büyü etkisi belirtileri gösteriyorsunuz. Önlem almanızda fayda var.";
    } else {
      resultText = "Büyü etkisi altında olma ihtimaliniz düşük görünüyor. Ancak kendinizi gözlemlemeye devam edin.";
    }

    setResult({ text: resultText, percentage });
    saveTestResult(resultText, percentage);
  };

  const saveTestResult = (resultText, percentage) => {
    const newTestResult = {
      date: new Date().toLocaleString(),
      result: resultText,
      percentage,
    };
    setTestHistory([...testHistory, newTestResult]);
    toast({
      title: "Test Sonucu Kaydedildi",
      description: "Sonuçlarınızı geçmiş sekmesinde görebilirsiniz.",
    });
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
                <p className="text-lg mb-4">{result.text}</p>
                <Progress value={result.percentage} className="mb-4" />
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
        {testHistory.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8"
          >
            <Card className="bg-purple-900 bg-opacity-50 backdrop-blur-md text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Test Geçmişi</CardTitle>
              </CardHeader>
              <CardContent>
                {testHistory.map((test, index) => (
                  <div key={index} className="mb-2 p-2 bg-purple-800 bg-opacity-50 rounded">
                    <p>{test.date}</p>
                    <p>{test.result}</p>
                    <Progress value={test.percentage} className="mt-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BuyuTesti;