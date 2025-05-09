
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { predictionAccuracyData } from '../../data/indiaData';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded-md shadow-sm">
        <p className="text-xs font-medium">{`Year: ${label}`}</p>
        <p className="text-xs">{`Accuracy: ${payload[0].value.toFixed(1)}%`}</p>
      </div>
    );
  }
  return null;
};

const AIPredictions = () => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">AI Prediction Center</h3>
        <span className="text-xs py-1 px-2 bg-green-100 text-green-800 rounded-full">Live</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="p-3 bg-gradient-to-br from-kisan-green/5 to-kisan-green/20 rounded-md">
          <h4 className="text-sm font-medium mb-2">Rice Yield Prediction</h4>
          <div className="flex justify-between items-baseline">
            <p className="text-xl font-bold">3.2 tons/ha</p>
            <span className="text-xs text-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              +5.2%
            </span>
          </div>
          <p className="text-xs text-gray-600 mt-1">Next season prediction based on current conditions</p>
        </div>
        
        <div className="p-3 bg-gradient-to-br from-amber-50 to-amber-100 rounded-md">
          <h4 className="text-sm font-medium mb-2">Wheat Yield Prediction</h4>
          <div className="flex justify-between items-baseline">
            <p className="text-xl font-bold">4.5 tons/ha</p>
            <span className="text-xs text-amber-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              +8.3%
            </span>
          </div>
          <p className="text-xs text-gray-600 mt-1">Next season prediction based on current conditions</p>
        </div>
      </div>
      
      <h4 className="text-sm font-medium mb-2">AI Prediction Accuracy</h4>
      <div className="h-[140px] mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={predictionAccuracyData}
            margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="year" 
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              domain={[70, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="accuracy"
              stroke="#4CAF50"
              strokeWidth={2}
              dot={{ r: 3, fill: "#4CAF50", stroke: "white", strokeWidth: 2 }}
              activeDot={{ r: 6, fill: "#4CAF50", stroke: "white", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="space-y-2">
        <h4 className="text-sm font-medium">AI Insights</h4>
        <p className="text-xs text-gray-600">
          Based on satellite imagery and sensor data, we predict a 12% increase in rice production in Eastern states this year. 
          Weather patterns suggest optimal growing conditions for wheat in the coming season.
        </p>
        
        <div className="flex items-center bg-blue-50 p-3 rounded-md mt-2">
          <div className="flex-shrink-0 w-8 h-8 bg-kisan-light-blue rounded-full flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <div>
            <h5 className="text-xs font-medium text-gray-800">Ask AI Assistant</h5>
            <p className="text-xs text-gray-600">Ask questions about crop predictions in natural language</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPredictions;
