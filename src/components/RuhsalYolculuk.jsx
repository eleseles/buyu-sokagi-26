import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Feather, Star, Zap } from 'lucide-react';

const RuhsalYolculuk = ({ user }) => {
  const journeyStages = [
    { name: "Başlangıç", icon: Feather, progress: 100 },
    { name: "Keşif", icon: Star, progress: 75 },
    { name: "Dönüşüm", icon: Zap, progress: 30 },
    { name: "Aydınlanma", icon: Star, progress: 10 },
  ];

  return (
    <Card className="mt-6 bg-white bg-opacity-20 backdrop-blur-md">
      <CardHeader>
        <CardTitle className="text-2xl text-white flex items-center">
          <Feather className="w-6 h-6 mr-2" />
          Ruhsal Yolculuk
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {journeyStages.map((stage, index) => (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-2">
                {React.createElement(stage.icon, { className: "w-5 h-5 mr-2 text-yellow-400" })}
                <h3 className="text-lg font-bold text-white">{stage.name}</h3>
              </div>
              <Progress value={stage.progress} className="h-2" />
              <p className="text-sm text-purple-200 mt-1">{stage.progress}% tamamlandı</p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RuhsalYolculuk;