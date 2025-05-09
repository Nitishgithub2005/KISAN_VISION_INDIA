
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { weatherImpactData } from '../../data/indiaData';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded-md shadow-sm">
        <p className="font-medium text-xs mb-1">{`Condition: ${label}`}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-1 text-xs">
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></div>
            <span>{entry.name}:</span>
            <span className="font-medium">{entry.value} tons/ha</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const WeatherImpact = () => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm h-full">
      <h3 className="text-lg font-semibold mb-4">Weather Impact on Yields</h3>
      
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={weatherImpactData}
            margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
            barGap={10}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="condition" 
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 5]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              iconType="circle" 
              iconSize={8} 
              formatter={(value) => <span className="text-xs">{value}</span>}
            />
            <Bar 
              dataKey="riceYield" 
              name="Rice" 
              fill="#4CAF50" 
              barSize={20} 
              radius={[4, 4, 0, 0]} 
            />
            <Bar 
              dataKey="wheatYield" 
              name="Wheat" 
              fill="#FFC107" 
              barSize={20} 
              radius={[4, 4, 0, 0]} 
            />
            <Bar 
              dataKey="maizeYield" 
              name="Maize" 
              fill="#FF9800" 
              barSize={20} 
              radius={[4, 4, 0, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 bg-gray-50 p-3 rounded-md">
        <h4 className="text-sm font-medium mb-1">AI Weather Prediction</h4>
        <p className="text-xs text-gray-600">
          Based on current weather patterns, we predict normal rainfall across most agricultural regions with a 
          15% chance of drought conditions in western states. Prepare for potential temperature fluctuations in northern regions.
        </p>
      </div>
    </div>
  );
};

export default WeatherImpact;
