import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Moon, Sun, Heart } from 'lucide-react';
import html2canvas from 'html2canvas';

const ProfileTarotCard = ({ user }) => {
  const cardRef = React.useRef(null);

  const generateImage = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current);
      const image = canvas.toDataURL("image/png");
      
      // Create a temporary link element and trigger download
      const tmpLink = document.createElement('a');
      tmpLink.download = 'spiritual-journey-card.png';
      tmpLink.href = image;
      document.body.appendChild(tmpLink);
      tmpLink.click();
      document.body.removeChild(tmpLink);
    }
  };

  return (
    <motion.div
      className="relative w-64 h-96 mx-auto cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={generateImage}
      ref={cardRef}
    >
      <Card className="w-full h-full bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 overflow-hidden">
        <CardContent className="p-4 flex flex-col items-center justify-between h-full text-white">
          <div className="text-center">
            <Star className="w-12 h-12 text-yellow-300 mb-2" />
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-sm">Ruhsal Seviye: {user.level}</p>
          </div>
          <div className="flex justify-around w-full my-4">
            <div className="text-center">
              <Moon className="w-8 h-8 text-blue-300 mb-1" />
              <p className="text-xs">Sezgi</p>
            </div>
            <div className="text-center">
              <Sun className="w-8 h-8 text-yellow-400 mb-1" />
              <p className="text-xs">Enerji</p>
            </div>
            <div className="text-center">
              <Heart className="w-8 h-8 text-red-400 mb-1" />
              <p className="text-xs">Sevgi</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm mb-2">Favori Tılsım:</p>
            <p className="font-bold">{user.favoriteTalisman}</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-purple-900 bg-opacity-75 p-2 text-center">
            <p className="text-xs">Tıkla ve Ruhsal Yolculuğunu Paylaş</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProfileTarotCard;