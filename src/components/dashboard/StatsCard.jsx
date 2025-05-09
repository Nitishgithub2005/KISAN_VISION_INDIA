
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatsCard = ({ title, value, change, changeType = 'positive', icon, color = 'green' }) => {
  // Define color classes based on the color prop
  const colorClasses = {
    green: {
      bg: 'bg-kisan-green bg-opacity-10',
      text: 'text-kisan-green',
      icon: 'text-kisan-green'
    },
    amber: {
      bg: 'bg-kisan-amber bg-opacity-10',
      text: 'text-kisan-amber',
      icon: 'text-kisan-amber'
    },
    blue: {
      bg: 'bg-kisan-blue bg-opacity-10',
      text: 'text-kisan-blue',
      icon: 'text-kisan-blue'
    },
    'deep-orange': {
      bg: 'bg-kisan-deep-orange bg-opacity-10',
      text: 'text-kisan-deep-orange',
      icon: 'text-kisan-deep-orange'
    }
  };
  
  const currentColor = colorClasses[color] || colorClasses.green;
  
  return (
    <div className="stats-card rounded-lg bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
          
          <div className="flex items-center mt-1 text-xs font-medium">
            {changeType === 'positive' ? (
              <>
                <TrendingUp className="w-4 h-4 mr-1 text-green-600" />
                <span className="text-green-600">{change}%</span>
              </>
            ) : (
              <>
                <TrendingDown className="w-4 h-4 mr-1 text-red-600" />
                <span className="text-red-600">{change}%</span>
              </>
            )}
            <span className="text-gray-500 ml-1">vs last year</span>
          </div>
        </div>
        
        <div className={`p-3 rounded-full ${currentColor.bg}`}>
          {icon && React.cloneElement(icon, { 
            className: `w-5 h-5 ${currentColor.icon}` 
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
