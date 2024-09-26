import React from 'react';

const AspectInterpretations = ({ chartData }) => {
  // In a real application, you would calculate aspects between planets
  // For this example, we'll use placeholder data
  const aspects = [
    { aspect: 'Conjunction', planets: 'Sun-Mercury', interpretation: 'Your thoughts and self-expression are closely linked...' },
    { aspect: 'Trine', planets: 'Moon-Venus', interpretation: 'You have a natural ease in expressing your emotions...' },
  ];

  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-white mb-4">Açı Yorumları</h3>
      <div className="space-y-4">
        {aspects.map((aspect, index) => (
          <div key={index} className="bg-purple-800 bg-opacity-30 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-purple-200">{aspect.aspect}: {aspect.planets}</h4>
            <p className="text-purple-300">{aspect.interpretation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AspectInterpretations;