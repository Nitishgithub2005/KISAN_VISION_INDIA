import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { statesData } from '../../data/indiaData';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { Info } from 'lucide-react';

// This is an improved outline SVG map of India
const StateMap = () => {
  const [hoveredState, setHoveredState] = useState(null);
  const navigate = useNavigate();

  // Get state by ID helper function
  const getStateById = id => {
    return statesData.find(state => state.id === id) || null;
  };

  // Handle state click to navigate to analysis page
  const handleStateClick = stateId => {
    navigate(`/crop-analysis/${stateId}`);
  };

  // Generate a unique color for each state based on its ID
  const getStateColor = stateId => {
    const state = getStateById(stateId);
    if (!state) return '#e5e7eb';

    // Color palette for different regions
    const colorPalettes = {
      'North': ['#2e7d32', '#388e3c', '#43a047', '#4caf50', '#66bb6a'],
      'Central': ['#0277bd', '#0288d1', '#039be5', '#03a9f4', '#29b6f6'],
      'East': ['#7b1fa2', '#8e24aa', '#9c27b0', '#ab47bc', '#ba68c8'],
      'West': ['#f57f17', '#f9a825', '#fbc02d', '#fdd835', '#ffeb3b'],
      'South': ['#e65100', '#ef6c00', '#f57c00', '#fb8c00', '#ff9800'],
      'Northeast': ['#33691e', '#558b2f', '#689f38', '#7cb342', '#8bc34a']
    };

    // Get color based on region and some hash of the ID
    const region = state.region;
    const palette = colorPalettes[region] || colorPalettes['Central'];
    const hash = stateId.charCodeAt(0) + stateId.charCodeAt(1) || 0;
    const colorIndex = hash % palette.length;
    return palette[colorIndex];
  };

  // Function to get total production for a state
  const getTotalProduction = stateId => {
    const state = getStateById(stateId);
    if (!state) return 0;
    return Object.values(state.cropProduction).reduce((sum, value) => sum + value, 0);
  };
  return <div className="india-map relative rounded-lg p-4 shadow-sm h-full bg-sky-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Crop Production by State</h3>
        <div className="flex items-center space-x-1">
          <span className="text-xs font-medium">Click on state for detailed analysis</span>
          <HoverCard>
            <HoverCardTrigger>
              <Info size={16} className="text-gray-500 cursor-help" />
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="p-2">
                <p className="text-sm mb-2">Hover over states to see a summary, click to view detailed analysis</p>
                <div className="grid grid-cols-3 gap-1">
                  {Object.keys(statesData[0].region).length > 0 && ['North', 'South', 'East', 'West', 'Central', 'Northeast'].map(region => <div key={region} className="flex items-center">
                      <div className="w-3 h-3 mr-1 rounded-full" style={{
                    backgroundColor: getStateColor(statesData.find(s => s.region === region)?.id || '')
                  }}></div>
                      <span className="text-xs">{region}</span>
                    </div>)}
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row h-[calc(100%-2rem)]">
        <div className="w-full md:w-2/3 flex items-center justify-center relative">
          <svg viewBox="0 0 650 700" className="w-full h-full max-h-[500px]" preserveAspectRatio="xMidYMid meet">
            {/* More accurate map of India */}
            
            {/* Northern States - Improved shapes */}
            <path id="JK" d="M200,90 L230,60 L270,40 L310,60 L320,90 L300,120 L270,140 L240,120 L210,110 Z" fill={getStateColor("JK")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("JK")} onMouseEnter={() => setHoveredState(getStateById("JK"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="HP" d="M270,140 L300,120 L330,130 L340,150 L320,170 L290,180 L270,160 Z" fill={getStateColor("HP")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("HP")} onMouseEnter={() => setHoveredState(getStateById("HP"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="PB" d="M270,160 L290,180 L290,210 L270,220 L250,200 L260,180 Z" fill={getStateColor("PB")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("PB")} onMouseEnter={() => setHoveredState(getStateById("PB"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="UK" d="M320,170 L340,150 L370,160 L380,180 L370,200 L340,190 Z" fill={getStateColor("UK")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("UK")} onMouseEnter={() => setHoveredState(getStateById("UK"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="HR" d="M290,180 L320,170 L340,190 L330,220 L300,230 L290,210 Z" fill={getStateColor("HR")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("HR")} onMouseEnter={() => setHoveredState(getStateById("HR"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            
            {/* Central States - Improved shapes */}
            <path id="UP" d="M300,230 L330,220 L370,200 L400,210 L420,240 L410,270 L380,290 L350,270 L320,250 Z" fill={getStateColor("UP")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("UP")} onMouseEnter={() => setHoveredState(getStateById("UP"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="RJ" d="M220,220 L250,200 L270,220 L300,230 L320,250 L310,280 L260,310 L220,290 L200,260 L210,240 Z" fill={getStateColor("RJ")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("RJ")} onMouseEnter={() => setHoveredState(getStateById("RJ"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="MP" d="M260,310 L310,280 L350,270 L380,290 L390,320 L380,350 L340,370 L290,350 L260,330 Z" fill={getStateColor("MP")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("MP")} onMouseEnter={() => setHoveredState(getStateById("MP"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            
            {/* Eastern States - Improved shapes */}
            <path id="BR" d="M380,290 L410,270 L440,270 L460,290 L450,310 L420,320 L390,320 Z" fill={getStateColor("BR")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("BR")} onMouseEnter={() => setHoveredState(getStateById("BR"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="WB" d="M460,290 L480,270 L490,290 L480,320 L490,350 L470,370 L450,350 L450,310 Z" fill={getStateColor("WB")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("WB")} onMouseEnter={() => setHoveredState(getStateById("WB"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="JH" d="M420,320 L450,310 L450,350 L420,350 L400,340 Z" fill={getStateColor("JH")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("JH")} onMouseEnter={() => setHoveredState(getStateById("JH"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="OD" d="M400,340 L420,350 L450,350 L470,370 L460,390 L420,400 L390,380 L380,350 Z" fill={getStateColor("OD")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("OD")} onMouseEnter={() => setHoveredState(getStateById("OD"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            
            {/* Western States - Improved shapes */}
            <path id="GJ" d="M170,290 L200,260 L220,290 L240,310 L220,340 L190,350 L160,320 L140,300 Z" fill={getStateColor("GJ")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("GJ")} onMouseEnter={() => setHoveredState(getStateById("GJ"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="MH" d="M240,310 L260,310 L260,330 L290,350 L340,370 L330,400 L280,420 L250,410 L210,380 L220,340 Z" fill={getStateColor("MH")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("MH")} onMouseEnter={() => setHoveredState(getStateById("MH"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            
            {/* Southern States - Improved shapes */}
            <path id="CG" d="M340,370 L380,350 L390,380 L370,410 L330,400 Z" fill={getStateColor("CG")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("CG")} onMouseEnter={() => setHoveredState(getStateById("CG"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="TS" d="M330,400 L370,410 L360,440 L320,430 Z" fill={getStateColor("TS")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("TS")} onMouseEnter={() => setHoveredState(getStateById("TS"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="AP" d="M320,430 L360,440 L370,410 L390,420 L380,460 L360,490 L330,470 L310,440 Z" fill={getStateColor("AP")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("AP")} onMouseEnter={() => setHoveredState(getStateById("AP"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="KA" d="M280,420 L330,400 L320,430 L310,440 L290,470 L260,450 L250,420 Z" fill={getStateColor("KA")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("KA")} onMouseEnter={() => setHoveredState(getStateById("KA"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="TN" d="M290,470 L310,440 L330,470 L360,490 L350,520 L320,540 L290,520 L280,490 Z" fill={getStateColor("TN")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("TN")} onMouseEnter={() => setHoveredState(getStateById("TN"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="KL" d="M260,450 L290,470 L280,490 L290,520 L270,530 L250,510 L240,480 Z" fill={getStateColor("KL")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("KL")} onMouseEnter={() => setHoveredState(getStateById("KL"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            
            {/* Northeastern States - Improved shapes */}
            <path id="AS" d="M490,240 L530,220 L560,230 L570,260 L540,270 L500,260 Z" fill={getStateColor("AS")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("AS")} onMouseEnter={() => setHoveredState(getStateById("AS"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="ML" d="M520,270 L540,270 L530,290 L510,290 Z" fill={getStateColor("ML")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("ML")} onMouseEnter={() => setHoveredState(getStateById("ML"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="MZ" d="M540,270 L570,260 L570,290 L550,300 L530,290 Z" fill={getStateColor("MZ")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("MZ")} onMouseEnter={() => setHoveredState(getStateById("MZ"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="TR" d="M530,290 L550,300 L520,310 L510,290 Z" fill={getStateColor("TR")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("TR")} onMouseEnter={() => setHoveredState(getStateById("TR"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="MN" d="M570,260 L590,250 L600,270 L590,300 L570,290 Z" fill={getStateColor("MN")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("MN")} onMouseEnter={() => setHoveredState(getStateById("MN"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="NL" d="M560,230 L580,220 L590,250 L570,260 Z" fill={getStateColor("NL")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("NL")} onMouseEnter={() => setHoveredState(getStateById("NL"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="AR" d="M530,200 L560,190 L580,200 L580,220 L560,230 L530,220 Z" fill={getStateColor("AR")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("AR")} onMouseEnter={() => setHoveredState(getStateById("AR"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="SK" d="M490,220 L510,210 L520,230 L490,240 Z" fill={getStateColor("SK")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("SK")} onMouseEnter={() => setHoveredState(getStateById("SK"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />
            <path id="GA" d="M230,390 L240,380 L260,390 L250,410 Z" fill={getStateColor("GA")} stroke="#fff" strokeWidth="1.5" onClick={() => handleStateClick("GA")} onMouseEnter={() => setHoveredState(getStateById("GA"))} onMouseLeave={() => setHoveredState(null)} style={{
            cursor: 'pointer',
            transition: 'fill 0.3s'
          }} className="hover:opacity-80" />

            {/* Add outline of India */}
            <path d="M170,290 L200,260 L220,220 L210,240 L200,260 L170,290 Z
                 M200,90 L230,60 L270,40 L310,60 L320,90 L300,120 L270,140 L240,120 L210,110 L200,90 Z
                 M530,200 L560,190 L580,200 L580,220 L590,250 L600,270 L590,300 L570,290 L570,260 L560,230 L530,220 L530,200 Z
                 M490,220 L510,210 L520,230 L490,240 L490,220 Z
                 M140,300 L160,320 L190,350 L210,380 L230,390 L240,380 L260,390 L250,410 L210,380 L190,350 L160,320 L140,300 Z
                 M250,410 L280,420 L250,420 L260,450 L240,480 L250,510 L270,530 L290,520 L320,540 L350,520 L360,490 L380,460 L390,420 L420,400 L460,390 L470,370 L490,350 L480,320 L490,290 L480,270 L490,240 L500,260 L490,290 L480,270 L490,240 Z" fill="none" stroke="#555" strokeWidth="1" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
          
          {/* If hovered state, show tooltip */}
          {hoveredState && <div className="absolute pointer-events-none bg-white p-2 rounded-md shadow-md text-xs border border-gray-200 max-w-[200px] z-10" style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
              <p className="font-bold text-sm">{hoveredState.name}</p>
              <p className="text-gray-600 text-xs">{hoveredState.region} Region</p>
              <p className="mt-1">Main crops: {hoveredState.mainCrops.slice(0, 3).join(", ")}</p>
              <p className="mt-1 text-xs font-semibold">Total production: {getTotalProduction(hoveredState.id).toLocaleString()} (000s tons)</p>
              <p className="text-xs italic mt-1">Click for detailed analysis</p>
            </div>}
        </div>
        
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          {!hoveredState && <div className="p-4 bg-gray-50 rounded-lg h-full">
              <h4 className="text-sm font-semibold text-gray-800">India Agricultural Map</h4>
              <p className="text-xs text-gray-600 mt-1">Hover over any state to see a summary, click to view detailed crop production data.</p>
              <div className="mt-3">
                <h5 className="text-xs font-semibold mb-1">Top Producing Regions:</h5>
                <ul className="text-xs space-y-1">
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-[#2e7d32] mr-2"></span>
                    North: Punjab, Haryana, UP (Wheat, Rice)
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-[#ff9800] mr-2"></span>
                    South: TN, AP, Karnataka (Rice, Cotton)
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-[#9c27b0] mr-2"></span>
                    East: WB, Bihar, Odisha (Rice, Jute)
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-[#fbc02d] mr-2"></span>
                    West: Maharashtra, Gujarat (Cotton, Sugarcane)
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-[#03a9f4] mr-2"></span>
                    Central: MP, Chhattisgarh (Wheat, Pulses)
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-[#8bc34a] mr-2"></span>
                    Northeast: Assam, Meghalaya (Tea, Rice)
                  </li>
                </ul>
              </div>
            </div>}
        </div>
      </div>
    </div>;
};
export default StateMap;