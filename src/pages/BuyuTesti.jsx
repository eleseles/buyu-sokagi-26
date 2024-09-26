import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import { Star, AlertTriangle, Moon, Volume2, Zap, Heart, Shield, Sparkles, Clock } from "lucide-react";
import confetti from "canvas-confetti";

const BuyuTesti = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [testStarted, setTestStarted] = useState(false);

  const questions = [
    {
      question: "Son zamanlarda sürekli kötü şansla mı karşılaşıyorsunuz?",
      icon: Star,
      options: ["Evet, her şey ters gidiyor", "Bazen kötü şansım oluyor", "Hayır, şansım normal"]
    },
    {
      question: "Açıklanamayan sağlık sorunları yaşıyor musunuz?",
      icon: AlertTriangle,
      options: ["Evet, sürekli", "Ara sıra", "Hayır, sağlığım iyi"]
    },
    {
      question: "Rüyalarınızda sık sık kabus görüyor musunuz?",
      icon: Moon,
      options: ["Evet, neredeyse her gece", "Bazen görüyorum", "Hayır, rüyalarım normal"]
    },
    {
      question: "Etrafınızda açıklanamayan sesler veya hareketler fark ediyor musunuz?",
      icon: Volume2,
      options: ["Evet, sık sık", "Ara sıra olur", "Hayır, hiç olmadı"]
    },
    {
      question: "Ani ve açıklanamayan duygusal değişimler yaşıyor musunuz?",
      icon: Zap,
      options: ["Evet, çok sık", "Bazen oluyor", "Hayır, duygularım dengeli"]
    },
    {
      question: "İlişkilerinizde sürekli sorunlar yaşıyor musunuz?",
      icon: Heart,
      options: ["Evet, her ilişkimde", "Bazen sorunlar oluyor", "Hayır, ilişkilerim iyi"]
    },
    {
      question: "Kendinizi sürekli yorgun ve enerjisiz hissediyor musunuz?",
      icon: Shield,
      options: ["Evet, her zaman", "Bazen yorgun oluyorum", "Hayır, enerjim yerinde"]
    },
    {
      question: "Hayalleriniz ve hedefleriniz sürekli engelleniyor mu?",
      icon: Sparkles,
      options: ["Evet, hiçbir şey yolunda gitmiyor", "Bazen zorluklar yaşıyorum", "Hayır, hedeflerime ulaşabiliyorum"]
    }
  ];

  useEffect(() => {
    let timer;
    if (testStarted && timeLeft > 0 && currentQuestion < questions.length) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      handleAnswer(questions[currentQuestion].options[2]);
    }
    return () => clearTimeout(timer);
  }, [timeLeft, testStarted, currentQuestion]);

  const startTest = () => {
    setTestStarted(true);
    setTimeLeft(30);
  };

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    const score = finalAnswers.reduce((total, answer) => {
      if (answer === questions[total].options[0]) return total + 2;
      if (answer === questions[total].options[1]) return total + 1;
      return total;
    }, 0);

    if (score >= 12) {
      setResult({
        text: "Büyü etkisi altında olma ihtimaliniz çok yüksek. Acilen bir uzmana danışmanızı öneririz.",
        icon: AlertTriangle,
        color: "text-red-500"
      });
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else if (score >= 6) {
      setResult({
        text: "Büyü etkisi altında olabilirsiniz. Daha fazla araştırma yapmanızı ve kendinizi korumanızı öneririz.",
        icon: Shield,
        color: "text-yellow-500"
      });
    } else {
      setResult({
        text: "Büyü etkisi altında olma ihtimaliniz düşük görünüyor. Yine de dikkatli olun ve kendinizi koruyun.",
        icon: Sparkles,
        color: "text-green-500"
      });
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
            {!testStarted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <p className="text-lg mb-6 text-purple-100">Bu test, üzerinizdeki olası büyü etkilerini belirlemenize yardımcı olacaktır. Başlamaya hazır mısınız?</p>
                <Button onClick={startTest} className="bg-purple-600 hover:bg-purple-700 text-white">
                  Testi Başlat
                </Button>
              </motion.div>
            ) : result ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">Test Sonucunuz:</h3>
                <p className="text-lg mb-6 text-purple-100">{result.text}</p>
                <div className="w-32 h-32 mx-auto mb-6 bg-purple-300 rounded-full flex items-center justify-center">
                  {React.createElement(result.icon, { className: `w-20 h-20 ${result.color}` })}
                </div>
                <Button onClick={() => window.location.reload()} className="bg-white text-purple-700 hover:bg-purple-100">
                  Testi Tekrarla
                </Button>
              </motion.div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-4">
                  <Progress value={(currentQuestion / questions.length) * 100} className="w-2/3" />
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-purple-200" />
                    <span className="text-purple-200">{timeLeft}s</span>
                  </div>
                </div>
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
                    <div className="flex flex-col space-y-4">
                      {questions[currentQuestion].options.map((option, index) => (
                        <Button 
                          key={index} 
                          onClick={() => handleAnswer(option)} 
                          className={`bg-purple-600 hover:bg-purple-700 text-white`}
                        >
                          {option}
                        </Button>
                      ))}
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