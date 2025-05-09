
import React from 'react';
import { agriculturalSeasons } from '../../data/indiaData';

const SeasonalCrops = () => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm h-full">
      <h3 className="text-lg font-semibold mb-4">Agricultural Seasons</h3>
      
      <div className="space-y-6">
        {agriculturalSeasons.map((season, index) => (
          <div key={index} className="relative">
            <div className={`absolute left-4 top-0 bottom-0 w-0.5 ${index === agriculturalSeasons.length - 1 ? 'h-6' : 'h-full'} ${
              season.name === 'Kharif' ? 'bg-kisan-light-green' : 
              season.name === 'Rabi' ? 'bg-kisan-amber' : 'bg-kisan-light-blue'
            }`}></div>
            
            <div className="ml-10 relative">
              <div className={`absolute -left-10 top-0 w-5 h-5 rounded-full ${
                season.name === 'Kharif' ? 'bg-kisan-light-green' : 
                season.name === 'Rabi' ? 'bg-kisan-amber' : 'bg-kisan-light-blue'
              } flex items-center justify-center`}>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              
              <h4 className="text-sm font-semibold flex items-center">
                {season.name}
                <span className="ml-2 text-xs text-gray-500 font-normal">({season.period})</span>
              </h4>
              
              <div className="mt-2">
                <div className="flex flex-wrap gap-1 mb-2">
                  {season.mainCrops.map((crop, idx) => (
                    <span 
                      key={idx}
                      className={`px-2 py-0.5 text-xs rounded-full ${
                        season.name === 'Kharif' ? 'bg-kisan-light-green bg-opacity-20 text-green-800' : 
                        season.name === 'Rabi' ? 'bg-kisan-amber bg-opacity-20 text-amber-800' : 'bg-kisan-light-blue bg-opacity-20 text-blue-800'
                      }`}
                    >
                      {crop}
                    </span>
                  ))}
                </div>
                
                <p className="text-xs text-gray-600 mb-2">{season.characteristics}</p>
                
                <p className="text-xs text-gray-500 mb-1">Major Growing States:</p>
                <p className="text-xs text-gray-800">{season.states.join(', ')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-3 bg-gray-50 rounded-md">
        <h4 className="text-sm font-medium mb-1">Current Season: <span className="text-kisan-green">Zaid</span></h4>
        <p className="text-xs text-gray-600">
          Planting for vegetables and short-duration crops is ongoing. 
          Prepare irrigation systems for the upcoming Kharif season.
        </p>
      </div>
    </div>
  );
};

export default SeasonalCrops;
