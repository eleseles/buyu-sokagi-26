import React from 'react';

const LifePathCalculator = ({ birthDate }) => {
  const calculateLifePath = (date) => {
    if (!date) return null;
    const [year, month, day] = date.split('-');
    let sum = parseInt(day);
    sum += parseInt(month);
    sum += year.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    while (sum > 9) {
      sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return sum;
  };

  const lifePathNumber = calculateLifePath(birthDate);

  const interpretations = {
    1: "Bağımsız ve yaratıcı bir lidersiniz...",
    2: "İşbirlikçi ve diplomatik bir arabulucusunuz...",
    3: "Yaratıcı ve ifade dolu bir sanatçı ruhunuz var...",
    4: "Pratik ve güvenilir bir temel oluşturucusunuz...",
    5: "Özgür ruhlu ve maceraperest bir gezginsiniz...",
    6: "Şefkatli ve sorumlu bir bakıcısınız...",
    7: "Düşünceli ve içe dönük bir analistsiniz...",
    8: "Güçlü ve hırslı bir iş insanısınız...",
    9: "İdealist ve insancıl bir hümanistsiniz...",
  };

  return (
    <div className="bg-purple-900 bg-opacity-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-white mb-4">Yaşam Yolu Sayınız: {lifePathNumber}</h3>
      {lifePathNumber && (
        <p className="text-purple-200">{interpretations[lifePathNumber]}</p>
      )}
    </div>
  );
};

export default LifePathCalculator;