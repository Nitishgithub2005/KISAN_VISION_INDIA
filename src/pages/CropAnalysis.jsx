
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Info } from 'lucide-react';
import Header from '../components/layout/Header';
import { statesData } from '../data/indiaData';
import YieldTrend from '../components/dashboard/YieldTrend';
import CropProduction from '../components/dashboard/CropProduction';

const CropAnalysis = () => {
  const { stateId } = useParams();
  const [stateInfo, setStateInfo] = useState(null);
  
  useEffect(() => {
    // Find state data based on URL parameter
    const foundState = statesData.find((state) => state.id === stateId);
    setStateInfo(foundState);
  }, [stateId]);

  if (!stateInfo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">State data not found</h2>
          <Link to="/" className="text-kisan-green hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={16} /> Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  // Get total production from all crops
  const cropKeys = Object.keys(stateInfo.cropProduction);
  const totalProduction = cropKeys.reduce((sum, crop) => sum + stateInfo.cropProduction[crop], 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <div className="mb-2">
          <Link to="/" className="text-kisan-green hover:underline flex items-center gap-2 mb-4">
            <ArrowLeft size={16} /> Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold mb-1">{stateInfo.name} - Crop Analysis</h1>
          <p className="text-gray-600">Agricultural statistics and crop yield data</p>
        </div>
        
        {/* State Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* State Info Card */}
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-white p-4 shadow-sm h-full">
              <h3 className="text-lg font-semibold mb-4">State Overview</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm text-gray-500">Region</h4>
                  <p className="font-medium">{stateInfo.region}</p>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-500">Total Agricultural Land</h4>
                  <p className="font-medium">{stateInfo.agriculturalLand.toLocaleString()} kha</p>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-500">Irrigation Coverage</h4>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="bg-kisan-green h-2 rounded-full"
                        style={{ width: `${stateInfo.irrigationCoverage}%` }}
                      ></div>
                    </div>
                    <span>{stateInfo.irrigationCoverage}%</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-500">Annual Rainfall</h4>
                  <p className="font-medium">{stateInfo.annualRainfall} mm</p>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-500">Soil Type</h4>
                  <p className="font-medium">{stateInfo.soilType}</p>
                </div>
                
                <div>
                  <h4 className="text-sm text-gray-500">Main Crops</h4>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {stateInfo.mainCrops.map((crop, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 text-xs rounded-full bg-kisan-green bg-opacity-10 text-kisan-green"
                      >
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Crop Production Chart */}
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-white p-4 shadow-sm h-full">
              <h3 className="text-lg font-semibold mb-4">Crop Production Distribution</h3>
              
              <div className="space-y-4">
                {Object.entries(stateInfo.cropProduction).map(([crop, production]) => (
                  <div key={crop} className="flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{crop}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{production.toFixed(1)} (000s tons)</span>
                        <span className="text-xs text-gray-500">
                          {((production / totalProduction) * 100).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-kisan-green h-2 rounded-full"
                        style={{ width: `${(production / totalProduction) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Yield Trend for this State */}
        <div className="mb-6">
          <YieldTrend stateFilter={stateInfo.id} />
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-gray-600">© 2024 Kisan Vision India. All data is for demonstration purposes only.</p>
        </div>
      </footer>
    </div>
  );
};

export default CropAnalysis;
