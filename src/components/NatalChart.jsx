import React from 'react';

const NatalChart = ({ chartData }) => {
  // This would typically use a library like react-svg-chart or d3.js to render the chart
  // For simplicity, we'll just display the data
  return (
    <div className="bg-purple-900 bg-opacity-50 p-6 rounded-lg mb-6">
      <h3 className="text-xl font-bold text-white mb-4">Natal Chart</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-purple-200">Sun: {chartData.sun.sign} (House {chartData.sun.house})</p>
          <p className="text-purple-200">Moon: {chartData.moon.sign} (House {chartData.moon.house})</p>
        </div>
        <div>
          <p className="text-purple-200">Ascendant: {chartData.ascendant}</p>
        </div>
      </div>
    </div>
  );
};

export default NatalChart;