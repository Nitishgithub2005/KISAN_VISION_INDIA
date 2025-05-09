import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import * as XLSX from 'xlsx';
import { useTranslation } from 'react-i18next';

const CustomTooltip = ({ active, payload, label }) => {
  const { t } = useTranslation();
  
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-sm rounded-md">
        <p className="text-xs font-medium text-gray-700 mb-1">{t(`months.${label.toLowerCase()}`)}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 text-xs">
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="capitalize">{t(`crops.${entry.name}`)}:</span>
            <span className="font-medium">{entry.value.toFixed(1)}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const YieldTrend = () => {
  const { t } = useTranslation();
  const [selectedCrops, setSelectedCrops] = useState({
    rice: true,
    wheat: true,
    maize: false,
    pulses: false,
    cotton: false
  });
  
  const [selectedYear, setSelectedYear] = useState('2024');
  const [yieldData, setYieldData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [aiInsights, setAiInsights] = useState('');
  
  const years = Array.from({ length: 25 }, (_, i) => (2024 - i).toString());
  
  const fetchYieldData = async (year) => {
    setIsLoading(true);
    setError(null);

    try {
      const prompt = `For the year ${year}, provide monthly crop yield data in India for the following crops:
- Rice
- Wheat
- Maize
- Pulses
- Cotton

Format the response as a JSON object with the following structure:
{
  "monthlyData": [
    {
      "month": "January",
      "rice": number,
      "wheat": number,
      "maize": number,
      "pulses": number,
      "cotton": number
    },
    // ... repeat for all months
  ],
  "aiInsights": "Provide 2-3 sentences about the yield trends and predictions for the next season based on the data"
}

Use realistic yield numbers based on historical data. The numbers should represent yield in tons per hectare.`;

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
        throw new Error("Failed to fetch yield data");
      }

      const data = await response.json();
      const text = data.candidates[0].content.parts[0].text;
      
      // Clean the response text by removing markdown formatting
      const cleanedText = text.replace(/```json\n?|\n?```/g, '').trim();
      
      // Parse the JSON response
      const parsedData = JSON.parse(cleanedText);
      setYieldData(parsedData.monthlyData);
      setAiInsights(parsedData.aiInsights);
    } catch (err) {
      setError(t('common.error'));
      console.error("Error fetching yield data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchYieldData(selectedYear);
  }, [selectedYear]);

  const handleExport = () => {
    if (!yieldData.length) return;

    // Prepare data for Excel
    const exportData = [
      // Header row
      [t('dashboard.cropYieldTrends') + ' ' + selectedYear],
      [''],
      [t('dashboard.monthlyYieldData')],
      [t('months.january'), t('crops.rice'), t('crops.wheat'), t('crops.maize'), t('crops.pulses'), t('crops.cotton')],
      ...yieldData.map(month => [
        t(`months.${month.month.toLowerCase()}`),
        month.rice,
        month.wheat,
        month.maize,
        month.pulses,
        month.cotton
      ]),
      [''],
      [t('common.aiInsights')],
      [aiInsights]
    ];

    // Create worksheet
    const ws = XLSX.utils.aoa_to_sheet(exportData);

    // Set column widths
    const wscols = [
      { wch: 15 }, // Month column
      { wch: 12 }, // Rice column
      { wch: 12 }, // Wheat column
      { wch: 12 }, // Maize column
      { wch: 12 }, // Pulses column
      { wch: 12 }, // Cotton column
      { wch: 50 }  // AI Insights column
    ];
    ws['!cols'] = wscols;

    // Create workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, t('dashboard.cropYieldTrends'));

    // Generate Excel file
    XLSX.writeFile(wb, `crop_yield_trends_${selectedYear}.xlsx`);
  };
  
  const toggleCrop = (crop) => {
    setSelectedCrops(prev => ({
      ...prev,
      [crop]: !prev[crop]
    }));
  };
  
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm h-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
        <h3 className="text-lg font-semibold">{t('dashboard.cropYieldTrends')}</h3>
        
        <div className="flex flex-wrap items-center gap-2">
          <div className="w-32">
            <Select defaultValue={selectedYear} onValueChange={(value) => setSelectedYear(value)}>
              <SelectTrigger className="h-8 text-xs">
                <SelectValue placeholder={t('common.selectYear')} />
              </SelectTrigger>
              <SelectContent>
                {years.map(year => (
                  <SelectItem key={year} value={year} className="text-xs">
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <button 
            onClick={handleExport}
            disabled={isLoading || !yieldData.length}
            className="text-xs text-emerald-600 font-medium hover:text-emerald-700 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {t('common.export')}
          </button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <button 
          className={`px-2 py-1 text-xs rounded-full border ${selectedCrops.rice ? 'bg-emerald-500 text-white border-emerald-500' : 'border-gray-300 text-gray-600'}`}
          onClick={() => toggleCrop('rice')}
        >
          {t('crops.rice')}
        </button>
        <button 
          className={`px-2 py-1 text-xs rounded-full border ${selectedCrops.wheat ? 'bg-amber-500 text-white border-amber-500' : 'border-gray-300 text-gray-600'}`}
          onClick={() => toggleCrop('wheat')}
        >
          {t('crops.wheat')}
        </button>
        <button 
          className={`px-2 py-1 text-xs rounded-full border ${selectedCrops.maize ? 'bg-orange-500 text-white border-orange-500' : 'border-gray-300 text-gray-600'}`}
          onClick={() => toggleCrop('maize')}
        >
          {t('crops.maize')}
        </button>
        <button 
          className={`px-2 py-1 text-xs rounded-full border ${selectedCrops.pulses ? 'bg-purple-500 text-white border-purple-500' : 'border-gray-300 text-gray-600'}`}
          onClick={() => toggleCrop('pulses')}
        >
          {t('crops.pulses')}
        </button>
        <button 
          className={`px-2 py-1 text-xs rounded-full border ${selectedCrops.cotton ? 'bg-yellow-500 text-white border-yellow-500' : 'border-gray-300 text-gray-600'}`}
          onClick={() => toggleCrop('cotton')}
        >
          {t('crops.cotton')}
        </button>
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
        <div className="h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={yieldData}
              margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 10 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => t(`months.${value.toLowerCase()}`)}
              />
              <YAxis 
                tick={{ fontSize: 10 }}
                axisLine={false}
                tickLine={false}
                domain={[0, 'dataMax + 0.5']}
                tickFormatter={(value) => value.toFixed(1)}
              />
              <Tooltip content={<CustomTooltip />} />
              
              {selectedCrops.rice && (
                <Line
                  type="monotone"
                  dataKey="rice"
                  stroke="#059669"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6, fill: "#059669", stroke: "white", strokeWidth: 2 }}
                />
              )}
              
              {selectedCrops.wheat && (
                <Line
                  type="monotone"
                  dataKey="wheat"
                  stroke="#D97706"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6, fill: "#D97706", stroke: "white", strokeWidth: 2 }}
                />
              )}
              
              {selectedCrops.maize && (
                <Line
                  type="monotone"
                  dataKey="maize"
                  stroke="#EA580C"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6, fill: "#EA580C", stroke: "white", strokeWidth: 2 }}
                />
              )}
              
              {selectedCrops.pulses && (
                <Line
                  type="monotone"
                  dataKey="pulses"
                  stroke="#7E22CE"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6, fill: "#7E22CE", stroke: "white", strokeWidth: 2 }}
                />
              )}
              
              {selectedCrops.cotton && (
                <Line
                  type="monotone"
                  dataKey="cotton"
                  stroke="#CA8A04"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6, fill: "#CA8A04", stroke: "white", strokeWidth: 2 }}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
      
      <div className="mt-4">
        <div className="bg-emerald-50 rounded-md p-3 border border-emerald-100">
          <h4 className="text-sm font-medium text-emerald-800 mb-2">{t('common.aiInsights')}</h4>
          <p className="text-xs text-emerald-700">
            {aiInsights || t('common.loading')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default YieldTrend;