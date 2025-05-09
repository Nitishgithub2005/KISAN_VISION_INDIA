
import React from 'react';
import { topAgricultureStates } from '../../data/indiaData';

const TopStates = () => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm h-full">
      <h3 className="text-lg font-semibold mb-4">Top Agricultural States</h3>
      
      <div className="space-y-3 overflow-y-auto max-h-[450px] pr-2">
        {topAgricultureStates.map((item) => (
          <div 
            key={item.rank}
            className="flex items-center"
          >
            <div className={`w-8 h-8 rounded-full bg-kisan-green bg-opacity-10 flex items-center justify-center mr-3 ${item.rank <= 3 ? 'border-2 border-kisan-green' : ''}`}>
              <span className={`text-xs font-bold ${item.rank <= 3 ? 'text-kisan-green' : 'text-gray-700'}`}>{item.rank}</span>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-medium">{item.state}</h4>
                <span className="text-sm font-semibold">{item.value.toLocaleString()} cr</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-kisan-green h-1.5 rounded-full"
                  style={{ width: `${(item.value / topAgricultureStates[0].value) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStates;
