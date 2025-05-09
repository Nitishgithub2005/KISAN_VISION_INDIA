
import React from 'react';
import { Info } from 'lucide-react';
import Header from '../components/layout/Header';
import StateMap from '../components/dashboard/StateMap';
import CropProduction from '../components/dashboard/CropProduction';
import YieldTrend from '../components/dashboard/YieldTrend';
import StatsCard from '../components/dashboard/StatsCard';
import WeatherImpact from '../components/dashboard/WeatherImpact';
import TopStates from '../components/dashboard/TopStates';
import SeasonalCrops from '../components/dashboard/SeasonalCrops';
import AIPredictions from '../components/dashboard/AIPredictions';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">Agricultural Dashboard</h1>
          <p className="text-gray-600">AI-powered analytics and predictions for Indian agriculture</p>
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatsCard 
            title="Total Agricultural Land" 
            value="159.7M ha" 
            change="2.8" 
            changeType="positive" 
            icon={<Info />} 
            color="green"
          />
          
          <StatsCard 
            title="Total Production" 
            value="328.5M tons" 
            change="4.2" 
            changeType="positive" 
            icon={<Info />} 
            color="amber"
          />
          
          <StatsCard 
            title="Average Yield" 
            value="2.5 tons/ha" 
            change="3.5" 
            changeType="positive" 
            icon={<Info />} 
            color="blue"
          />
          
          <StatsCard 
            title="Irrigated Land" 
            value="53%" 
            change="1.2" 
            changeType="negative" 
            icon={<Info />} 
            color="deep-orange"
          />
        </div>
        
        {/* Map and Crops Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <StateMap />
          </div>
          <div>
            <CropProduction />
          </div>
        </div>
        
        {/* Yield Trend Row */}
        <div className="mb-6">
          <YieldTrend />
        </div>
        
        {/* Weather Impact Row */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <WeatherImpact />
          </div>
          <div>
            <AIPredictions />
          </div>
        </div> */}
        
        {/* Seasonal Crops and Top States Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SeasonalCrops />
          <TopStates />
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

export default Dashboard;
