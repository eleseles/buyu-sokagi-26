import React from 'react';
import { Sun, Moon } from 'lucide-react';

const PlanetInterpretations = ({ chartData }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-white mb-4">Gezegen Yorumları</h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-2">
          <Sun className="w-6 h-6 text-yellow-400" />
          <div>
            <h4 className="text-lg font-semibold text-purple-200">Güneş in {chartData.sun.sign}</h4>
            <p className="text-purple-300">
              Güneş {chartData.sun.sign} burcunda olduğunuzda, kişiliğinizin özü...
              {/* Add more detailed interpretation here */}
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <Moon className="w-6 h-6 text-blue-200" />
          <div>
            <h4 className="text-lg font-semibold text-purple-200">Ay in {chartData.moon.sign}</h4>
            <p className="text-purple-300">
              Ay {chartData.moon.sign} burcunda olduğunuzda, duygusal doğanız...
              {/* Add more detailed interpretation here */}
            </p>
          </div>
        </div>
        {/* Add more planet interpretations here */}
      </div>
    </div>
  );
};

export default PlanetInterpretations;