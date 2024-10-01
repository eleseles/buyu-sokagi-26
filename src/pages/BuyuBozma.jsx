import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Shield, Droplet, Moon, Gem, HeartPulse, Feather, Star, Sun } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

const BuyuBozma = () => {
  const [activeRitual, setActiveRitual] = useState(null);
  const [ritualProgress, setRitualProgress] = useState(0);
  const [showExperienceDialog, setShowExperienceDialog] = useState(false);
  const [userExperience, setUserExperience] = useState('');
  const { toast } = useToast();

  const yontemler = [
    {
      title: "Tuz Banyosu",
      description: "Vücudunuzu arındırmak için tuzlu su banyosu yapın. Bu yöntem negatif enerjileri temizler ve koruyucu bir bariyer oluşturur.",
      icon: Droplet,
      color: "text-blue-500",
      steps: [
        "Ilık suyla dolu bir küvete 1 fincan deniz tuzu ekleyin.",
        "15-20 dakika boyunca suda kalın ve rahatlamaya çalışın.",
        "Çıkarken, negatif enerjilerin akıp gittiğini hayal edin.",
        "Duş alarak arınma sürecini tamamlayın."
      ],
      duration: 20
    },
    {
      title: "Beyaz Mum Yakma",
      description: "Negatif enerjileri uzaklaştırmak için beyaz mum yakın. Mumun alevine odaklanarak, kötü enerjilerin yok olduğunu hayal edin.",
      icon: Moon,
      color: "text-yellow-500",
      steps: [
        "Beyaz bir mum seçin ve güvenli bir yere yerleştirin.",
        "Mumu yakarken, niyetinizi sesli olarak ifade edin.",
        "10-15 dakika boyunca alevin dans edişini izleyin.",
        "Mumu söndürmeden önce, temizlendiğinizi hissedin."
      ],
      duration: 15
    },
    {
      title: "Dua ve Meditasyon",
      description: "İçsel huzur ve koruma için dua edin ve meditasyon yapın. Bu pratikler, ruhsal bağlantınızı güçlendirir ve sizi korur.",
      icon: HeartPulse,
      color: "text-pink-500",
      steps: [
        "Rahat bir pozisyonda oturun veya uzanın.",
        "Derin nefesler alarak zihninizi sakinleştirin.",
        "Koruma ve arınma için içten gelen bir dua edin.",
        "15-20 dakika boyunca meditasyon yapın."
      ],
      duration: 20
    },
    {
      title: "Şifalı Taşlar",
      description: "Ametist veya kuvars gibi koruyucu taşlar kullanın. Bu taşlar, negatif enerjilAnladım, bu sayfaları geliştirmek ve yeni özellikler eklemek için çalışacağım. Her bir sayfaya yeni ve ilginç özellikler ekleyeceğim. İşte yapacağım değişikliklerin özeti:

<lov-code>
Aşağıdaki sayfaları güncelleyeceğiz:
1. Büyü Testi (src/pages/BuyuTesti.jsx)
2. Büyü Türleri (src/pages/BuyuTurleri.jsx)
3. Büyü Belirtileri (src/pages/BuyuBelirtileri.jsx)
4. Büyü Yapımı (src/pages/BuyuYapimi.jsx)
5. Büyü Duaları (src/pages/BuyuDualari.jsx)
6. Büyü Bozma (src/pages/BuyuBozma.jsx)
7. Enerji Temizliği (src/pages/EnerjiTemizligi.jsx)
8. Koruyucu Tılsımlar (src/pages/KoruyucuTilsimlar.jsx)

Her sayfaya yeni özellikler ekleyeceğiz ve mevcut içeriği geliştireceğiz.

Öncelikle, Büyü Testi sayfasını güncelleyelim:

<lov-write file_path="src/pages/BuyuTesti.jsx">
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Sparkles, Zap, Cloud, Frown, Brain, Heart, Moon, Sun, Star, Shield } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

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
  {
    question: "Gün içinde ani ruh hali değişimleri yaşıyor musunuz?",
    icon: Sun,
  },
  {
    question: "Geceleri açıklanamayan sesler veya hareketler fark ediyor musunuz?",
    icon: Star,
  },
  {
    question: "Kendinizi sürekli olarak korunmasız veya savunmasız hissediyor musunuz?",
    icon: Shield,
  },
];

const BuyuTesti = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [testCompleted, setTestCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (testCompleted) {
      toast({
        title: "Test Tamamlandı!",
        description: "Sonucunuzu görmek için aşağı kaydırın.",
        duration: 3000,
      });
    }
  }, [testCompleted, toast]);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
      setTestCompleted(true);
    }
  };

  const calculateResult = (finalAnswers) => {
    const positiveAnswers = finalAnswers.filter(answer => answer === 'Evet').length;
    const percentage = (positiveAnswers / questions.length) * 100;

    if (percentage >= 70) {
      setResult({
        text: "Yüksek ihtimalle büyü etkisi altında olabilirsiniz. Bir uzmana danışmanızı öneririz.",
        color: "text-red-500",
        icon: Sparkles,
      });
    } else if (percentage >= 40) {
      setResult({
        text: "Orta düzeyde büyü etkisi belirtileri gösteriyorsunuz. Önlem almanızda fayda var.",
        color: "text-yellow-500",
        icon: Zap,
      });
    } else {
      setResult({
        text: "Büyü etkisi altında olma ihtimaliniz düşük görünüyor. Ancak kendinizi gözlemlemeye devam edin.",
        color: "text-green-500",
        icon: Shield,
      });
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setTestCompleted(false);
    setShowExplanation(false);
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
        {testCompleted ? (
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
                <div className="flex items-center justify-center mb-4">
                  {React.createElement(result.icon, { className: `w-16 h-16 ${result.color}` })}
                </div>
                <p className="text-lg mb-4 text-center">{result.text}</p>
                <Progress value={(answers.filter(a => a === 'Evet').length / questions.length) * 100} className="mb-4" />
                <div className="flex justify-center space-x-4">
                  <Button onClick={resetTest} className="bg-purple-600 hover:bg-purple-700">
                    Testi Tekrarla
                  </Button>
                  <Button onClick={() => setShowExplanation(!showExplanation)} className="bg-blue-600 hover:bg-blue-700">
                    {showExplanation ? "Açıklamayı Gizle" : "Sonucu Açıkla"}
                  </Button>
                </div>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="mt-4 p-4 bg-purple-800 bg-opacity-50 rounded-lg"
                  >
                    <p>Bu test sonucu, verdiğiniz cevaplara dayanarak genel bir değerlendirme sunar. Ancak, kesin bir teşhis için mutlaka bir uzmana danışmanız önerilir. Büyü etkileri karmaşık olabilir ve profesyonel yardım almak önemlidir.</p>
                  </motion.div>
                )}
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