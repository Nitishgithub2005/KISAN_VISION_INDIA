import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import * as XLSX from 'xlsx';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded-md shadow-sm">
        <p className="font-medium text-xs">{`${payload[0].name}: ${payload[0].value.toLocaleString()} thousand tons`}</p>
      </div>
    );
  }
  return null;
};

const CropProduction = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedYear, setSelectedYear] = useState('2024');
  const [cropData, setCropData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [highestYieldCrop, setHighestYieldCrop] = useState(null);

  // Generate years array from 2000 to 2024
  const years = Array.from({ length: 25 }, (_, i) => (2024 - i).toString());

  const fetchCropData = async (year) => {
    setIsLoading(true);
    setError(null);

    try {
      const prompt = `For the year ${year}, provide the crop production data in India for the following crops:
- Rice
- Wheat
- Maize
- Pulses
- Sugarcane
- Cotton
- Oilseeds

Also, identify which crop had the highest yield in ${year} and explain why it was the highest yielding crop.

Format the response as a JSON object with the following structure:
{
  "cropData": [
    {
      "name": "Rice",
      "production": number_in_thousand_tons,
      "color": "#059669"
    },
    {
      "name": "Wheat",
      "production": number_in_thousand_tons,
      "color": "#10B981"
    },
    {
      "name": "Maize",
      "production": number_in_thousand_tons,
      "color": "#34D399"
    },
    {
      "name": "Pulses",
      "production": number_in_thousand_tons,
      "color": "#6EE7B7"
    },
    {
      "name": "Sugarcane",
      "production": number_in_thousand_tons,
      "color": "#A7F3D0"
    },
    {
      "name": "Cotton",
      "production": number_in_thousand_tons,
      "color": "#065F46"
    },
    {
      "name": "Oilseeds",
      "production": number_in_thousand_tons,
      "color": "#047857"
    }
  ],
  "highestYield": {
    "crop": "name of the highest yielding crop",
    "production": production_in_thousand_tons,
    "explanation": "brief explanation of why this crop had the highest yield"
  }
}

Use realistic production numbers based on historical data.`;

      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBp8m7FY-8chr9jFt8s0tpp8LoFL_795B0",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: prompt }]
            }]
          })
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch crop data");
      }

      const data = await response.json();
      const text = data.candidates[0].content.parts[0].text;
      
      // Clean the response text by removing markdown formatting
      const cleanedText = text.replace(/```json\n?|\n?```/g, '').trim();
      
      // Parse the JSON response
      const parsedData = JSON.parse(cleanedText);
      setCropData(parsedData.cropData);
      setHighestYieldCrop(parsedData.highestYield);
    } catch (err) {
      setError("Failed to fetch crop data. Please try again.");
      console.error("Error fetching crop data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCropData(selectedYear);
  }, [selectedYear]);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleExport = () => {
    if (!cropData.length) return;

    // Prepare data for Excel
    const exportData = [
      // Header row
      ['Crop Production Data for ' + selectedYear],
      [''],
      ['Highest Yielding Crop Information'],
      ['Crop', 'Production (thousand tons)', 'Explanation'],
      [highestYieldCrop.crop, highestYieldCrop.production, highestYieldCrop.explanation],
      [''],
      ['Detailed Crop Production Data'],
      ['Crop', 'Production (thousand tons)'],
      ...cropData.map(crop => [crop.name, crop.production])
    ];

    // Create worksheet
    const ws = XLSX.utils.aoa_to_sheet(exportData);

    // Set column widths
    const wscols = [
      { wch: 20 }, // Crop name column
      { wch: 25 }, // Production column
      { wch: 50 }  // Explanation column
    ];
    ws['!cols'] = wscols;

    // Create workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Crop Production');

    // Generate Excel file
    XLSX.writeFile(wb, `crop_production_${selectedYear}.xlsx`);
  };

  return (
    <div className="rounded-lg bg-white p-4 shadow-sm h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Crop Production</h3>
        <div className="flex items-center gap-2">
          <select 
            className="text-xs border border-gray-300 rounded-md px-2 py-1"
            value={selectedYear}
            onChange={handleYearChange}
            disabled={isLoading}
          >
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <button 
            onClick={handleExport}
            disabled={isLoading || !cropData.length}
            className="text-xs text-emerald-600 font-medium hover:text-emerald-700 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export
          </button>
        </div>
      </div>
      
      {isLoading ? (
        <div className="h-[240px] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
        </div>
      ) : error ? (
        <div className="h-[240px] flex items-center justify-center text-red-500">
          {error}
        </div>
      ) : (
        <>
          {highestYieldCrop && (
            <div className="mb-4 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
              <p className="text-sm text-emerald-800">
                <span className="font-semibold">Highest Yielding Crop ({selectedYear}):</span> {highestYieldCrop.crop} ({highestYieldCrop.production.toLocaleString()} thousand tons)
              </p>
              <p className="text-xs text-emerald-600 mt-1">{highestYieldCrop.explanation}</p>
            </div>
          )}
          
          <div className="h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={cropData}
                margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                onMouseMove={(data) => {
                  if (data && data.activeTooltipIndex !== undefined) {
                    setActiveIndex(data.activeTooltipIndex);
                  }
                }}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                <Bar 
                  dataKey="production" 
                  radius={[4, 4, 0, 0]}
                >
                  {cropData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={index === activeIndex ? entry.color : `${entry.color}99`}
                      cursor="pointer"
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 grid grid-cols-4 gap-2">
            {cropData.slice(0, 4).map((crop, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <div style={{ backgroundColor: crop.color }} className="w-3 h-3 rounded-full mr-1"></div>
                  <span className="text-xs font-medium">{crop.name}</span>
                </div>
                <p className="text-xs text-gray-500">{(crop.production / 1000).toFixed(1)}k tons</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CropProduction;
