import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CompatibilityChecker = ({ yourChart }) => {
  const [partnerData, setPartnerData] = useState({ sun: '', moon: '', ascendant: '' });
  const [compatibility, setCompatibility] = useState(null);

  const handleInputChange = (e) => {
    setPartnerData({ ...partnerData, [e.target.name]: e.target.value });
  };

  const checkCompatibility = () => {
    // This is a simplified compatibility check
    // In a real application, you would use more complex astrological calculations
    const score = Math.floor(Math.random() * 100) + 1; // Random score for demonstration
    let interpretation = '';
    if (score > 80) interpretation = "Mükemmel uyum! Birbirinizi tamamlıyorsunuz.";
    else if (score > 60) interpretation = "İyi bir uyum. Bazı zorluklar olabilir ama üstesinden gelebilirsiniz.";
    else if (score > 40) interpretation = "Orta düzeyde uyum. İlişkiniz üzerinde çalışmanız gerekebilir.";
    else interpretation = "Düşük uyum. Bu ilişki zorlayıcı olabilir.";

    setCompatibility({ score, interpretation });
  };

  return (
    <div className="bg-purple-900 bg-opacity-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-white mb-4">Uyumluluk Kontrolü</h3>
      <div className="space-y-4 mb-4">
        <Input
          type="text"
          name="sun"
          value={partnerData.sun}
          onChange={handleInputChange}
          placeholder="Partner'in Güneş Burcu"
          className="bg-purple-800 bg-opacity-30 text-white placeholder-purple-300"
        />
        <Input
          type="text"
          name="moon"
          value={partnerData.moon}
          onChange={handleInputChange}
          placeholder="Partner'in Ay Burcu"
          className="bg-purple-800 bg-opacity-30 text-white placeholder-purple-300"
        />
        <Input
          type="text"
          name="ascendant"
          value={partnerData.ascendant}
          onChange={handleInputChange}
          placeholder="Partner'in Yükselen Burcu"
          className="bg-purple-800 bg-opacity-30 text-white placeholder-purple-300"
        />
      </div>
      <Button onClick={checkCompatibility} className="w-full bg-purple-600 hover:bg-purple-700 text-white">
        Uyumluluğu Kontrol Et
      </Button>
      {compatibility && (
        <div className="mt-4">
          <p className="text-xl font-bold text-white">Uyumluluk Skoru: {compatibility.score}%</p>
          <p className="text-purple-200">{compatibility.interpretation}</p>
        </div>
      )}
    </div>
  );
};

export default CompatibilityChecker;