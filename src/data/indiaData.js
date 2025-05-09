
// Indian states data with crop production information
export const statesData = [
  {
    id: "AP",
    name: "Andhra Pradesh",
    region: "South",
    mainCrops: ["Rice", "Cotton", "Sugarcane", "Tobacco", "Chillies"],
    cropProduction: {
      Rice: 8025.12,
      Cotton: 1256.78,
      Sugarcane: 12569.45,
      Tobacco: 145.78,
      Chillies: 389.56
    },
    yieldPerHectare: {
      Rice: 3.6,
      Cotton: 2.1,
      Sugarcane: 78.5,
      Tobacco: 1.8,
      Chillies: 2.2
    },
    soilType: "Black soil, Red soil, Sandy loam",
    annualRainfall: 912,
    irrigationCoverage: 62.8,
    agriculturalLand: 6321.5
  },
  {
    id: "AR",
    name: "Arunachal Pradesh",
    region: "Northeast",
    mainCrops: ["Rice", "Maize", "Millet", "Ginger", "Cardamom"],
    cropProduction: {
      Rice: 356.89,
      Maize: 89.34,
      Millet: 56.78,
      Ginger: 32.56,
      Cardamom: 14.56
    },
    yieldPerHectare: {
      Rice: 2.1,
      Maize: 1.8,
      Millet: 1.3,
      Ginger: 7.8,
      Cardamom: 0.9
    },
    soilType: "Mountain soil, Forest soil",
    annualRainfall: 2782,
    irrigationCoverage: 18.6,
    agriculturalLand: 234.7
  },
  {
    id: "AS",
    name: "Assam",
    region: "Northeast",
    mainCrops: ["Rice", "Jute", "Tea", "Oilseeds", "Sugarcane"],
    cropProduction: {
      Rice: 5124.34,
      Jute: 789.65,
      Tea: 652.34,
      Oilseeds: 245.67,
      Sugarcane: 1087.45
    },
    yieldPerHectare: {
      Rice: 2.2,
      Jute: 2.5,
      Tea: 2.1,
      Oilseeds: 0.8,
      Sugarcane: 65.3
    },
    soilType: "Alluvial soil, Laterite soil",
    annualRainfall: 2818,
    irrigationCoverage: 10.1,
    agriculturalLand: 2878.8
  },
  {
    id: "BR",
    name: "Bihar",
    region: "East",
    mainCrops: ["Rice", "Wheat", "Maize", "Pulses", "Sugarcane"],
    cropProduction: {
      Rice: 6387.45,
      Wheat: 5214.67,
      Maize: 2934.12,
      Pulses: 856.34,
      Sugarcane: 13562.78
    },
    yieldPerHectare: {
      Rice: 2.3,
      Wheat: 2.9,
      Maize: 3.2,
      Pulses: 0.9,
      Sugarcane: 68.7
    },
    soilType: "Alluvial soil",
    annualRainfall: 1120,
    irrigationCoverage: 61.2,
    agriculturalLand: 5673.9
  },
  {
    id: "CG",
    name: "Chhattisgarh",
    region: "Central",
    mainCrops: ["Rice", "Maize", "Wheat", "Pulses", "Oilseeds"],
    cropProduction: {
      Rice: 6125.45,
      Maize: 345.78,
      Wheat: 156.78,
      Pulses: 345.67,
      Oilseeds: 287.45
    },
    yieldPerHectare: {
      Rice: 2.1,
      Maize: 1.9,
      Wheat: 1.4,
      Pulses: 0.7,
      Oilseeds: 0.8
    },
    soilType: "Red & Yellow soil, Laterite soil",
    annualRainfall: 1292,
    irrigationCoverage: 31.2,
    agriculturalLand: 4677.4
  },
  {
    id: "GA",
    name: "Goa",
    region: "West",
    mainCrops: ["Rice", "Coconut", "Cashew", "Arecanut", "Fruits"],
    cropProduction: {
      Rice: 112.45,
      Coconut: 125.78,
      Cashew: 32.56,
      Arecanut: 8.45,
      Fruits: 87.34
    },
    yieldPerHectare: {
      Rice: 2.8,
      Coconut: 5432, // nuts per hectare
      Cashew: 0.9,
      Arecanut: 1.2,
      Fruits: 14.2
    },
    soilType: "Red loamy soil, Laterite soil",
    annualRainfall: 2932,
    irrigationCoverage: 40.8,
    agriculturalLand: 130.7
  },
  {
    id: "GJ",
    name: "Gujarat",
    region: "West",
    mainCrops: ["Cotton", "Groundnut", "Wheat", "Rice", "Bajra"],
    cropProduction: {
      Cotton: 2987.67,
      Groundnut: 2457.89,
      Wheat: 3246.78,
      Rice: 1789.34,
      Bajra: 1456.78
    },
    yieldPerHectare: {
      Cotton: 2.8,
      Groundnut: 1.9,
      Wheat: 3.1,
      Rice: 2.3,
      Bajra: 1.4
    },
    soilType: "Black soil, Sandy soil, Alluvial soil",
    annualRainfall: 798,
    irrigationCoverage: 45.2,
    agriculturalLand: 9601.2
  },
  {
    id: "HR",
    name: "Haryana",
    region: "North",
    mainCrops: ["Wheat", "Rice", "Sugarcane", "Cotton", "Oilseeds"],
    cropProduction: {
      Wheat: 12567.89,
      Rice: 4256.78,
      Sugarcane: 9876.54,
      Cotton: 1987.67,
      Oilseeds: 875.34
    },
    yieldPerHectare: {
      Wheat: 4.7,
      Rice: 3.9,
      Sugarcane: 80.1,
      Cotton: 5.6,
      Oilseeds: 1.3
    },
    soilType: "Alluvial soil, Arid soil",
    annualRainfall: 617,
    irrigationCoverage: 86.8,
    agriculturalLand: 3812.0
  },
  {
    id: "HP",
    name: "Himachal Pradesh",
    region: "North",
    mainCrops: ["Wheat", "Maize", "Rice", "Barley", "Fruits"],
    cropProduction: {
      Wheat: 673.45,
      Maize: 756.78,
      Rice: 132.34,
      Barley: 24.56,
      Fruits: 1245.67
    },
    yieldPerHectare: {
      Wheat: 2.1,
      Maize: 2.4,
      Rice: 1.8,
      Barley: 1.3,
      Fruits: 8.7
    },
    soilType: "Mountain soil, Brown soil",
    annualRainfall: 1469,
    irrigationCoverage: 21.5,
    agriculturalLand: 550.1
  },
  {
    id: "JK",
    name: "Jammu and Kashmir",
    region: "North",
    mainCrops: ["Rice", "Maize", "Wheat", "Barley", "Saffron"],
    cropProduction: {
      Rice: 563.45,
      Maize: 478.56,
      Wheat: 289.34,
      Barley: 18.9,
      Saffron: 9.8
    },
    yieldPerHectare: {
      Rice: 2.0,
      Maize: 1.8,
      Wheat: 1.6,
      Barley: 1.0,
      Saffron: 0.003
    },
    soilType: "Mountain soil, Brown forest soil",
    annualRainfall: 1124,
    irrigationCoverage: 42.8,
    agriculturalLand: 734.0
  },
  {
    id: "JH",
    name: "Jharkhand",
    region: "East",
    mainCrops: ["Rice", "Maize", "Pulses", "Oilseeds", "Vegetables"],
    cropProduction: {
      Rice: 3245.67,
      Maize: 567.89,
      Pulses: 234.56,
      Oilseeds: 178.9,
      Vegetables: 1567.8
    },
    yieldPerHectare: {
      Rice: 1.9,
      Maize: 1.6,
      Pulses: 0.8,
      Oilseeds: 0.7,
      Vegetables: 14.5
    },
    soilType: "Red soil, Laterite soil",
    annualRainfall: 1200,
    irrigationCoverage: 6.2,
    agriculturalLand: 2405.5
  },
  {
    id: "KA",
    name: "Karnataka",
    region: "South",
    mainCrops: ["Rice", "Ragi", "Jowar", "Maize", "Coffee"],
    cropProduction: {
      Rice: 3978.56,
      Ragi: 1256.78,
      Jowar: 956.78,
      Maize: 3567.89,
      Coffee: 234.56
    },
    yieldPerHectare: {
      Rice: 2.8,
      Ragi: 1.8,
      Jowar: 1.0,
      Maize: 3.2,
      Coffee: 0.5
    },
    soilType: "Red soil, Black soil, Laterite soil",
    annualRainfall: 1248,
    irrigationCoverage: 32.8,
    agriculturalLand: 9877.6
  },
  {
    id: "KL",
    name: "Kerala",
    region: "South",
    mainCrops: ["Coconut", "Rice", "Rubber", "Spices", "Cashew"],
    cropProduction: {
      Coconut: 5678.9,
      Rice: 456.78,
      Rubber: 540.25,
      Spices: 345.67,
      Cashew: 78.9
    },
    yieldPerHectare: {
      Coconut: 7556, // nuts per hectare
      Rice: 2.7,
      Rubber: 1.5,
      Spices: 2.3,
      Cashew: 0.8
    },
    soilType: "Laterite soil, Coastal alluvial soil",
    annualRainfall: 2923,
    irrigationCoverage: 18.6,
    agriculturalLand: 2040.0
  },
  {
    id: "MP",
    name: "Madhya Pradesh",
    region: "Central",
    mainCrops: ["Wheat", "Soybean", "Pulses", "Rice", "Cotton"],
    cropProduction: {
      Wheat: 18965.45,
      Soybean: 5689.34,
      Pulses: 3456.78,
      Rice: 2345.67,
      Cotton: 1456.78
    },
    yieldPerHectare: {
      Wheat: 3.1,
      Soybean: 1.2,
      Pulses: 0.9,
      Rice: 1.8,
      Cotton: 2.3
    },
    soilType: "Black soil, Red & Yellow soil",
    annualRainfall: 1017,
    irrigationCoverage: 40.8,
    agriculturalLand: 14989.8
  },
  {
    id: "MH",
    name: "Maharashtra",
    region: "West",
    mainCrops: ["Jowar", "Cotton", "Sugarcane", "Pulses", "Oilseeds"],
    cropProduction: {
      Jowar: 3456.78,
      Cotton: 3678.9,
      Sugarcane: 83456.7,
      Pulses: 2378.9,
      Oilseeds: 3456.7
    },
    yieldPerHectare: {
      Jowar: 1.0,
      Cotton: 2.7,
      Sugarcane: 88.7,
      Pulses: 0.7,
      Oilseeds: 0.9
    },
    soilType: "Black soil, Red soil",
    annualRainfall: 1083,
    irrigationCoverage: 19.6,
    agriculturalLand: 19767.0
  },
  {
    id: "MN",
    name: "Manipur",
    region: "Northeast",
    mainCrops: ["Rice", "Maize", "Pulses", "Oilseeds", "Fruits"],
    cropProduction: {
      Rice: 456.78,
      Maize: 45.67,
      Pulses: 28.9,
      Oilseeds: 21.4,
      Fruits: 78.9
    },
    yieldPerHectare: {
      Rice: 2.4,
      Maize: 1.9,
      Pulses: 0.9,
      Oilseeds: 0.8,
      Fruits: 10.2
    },
    soilType: "Mountain soil, Red soil",
    annualRainfall: 1523,
    irrigationCoverage: 22.1,
    agriculturalLand: 95.7
  },
  {
    id: "ML",
    name: "Meghalaya",
    region: "Northeast",
    mainCrops: ["Rice", "Maize", "Jute", "Ginger", "Turmeric"],
    cropProduction: {
      Rice: 234.56,
      Maize: 78.9,
      Jute: 34.56,
      Ginger: 65.4,
      Turmeric: 43.2
    },
    yieldPerHectare: {
      Rice: 1.9,
      Maize: 1.8,
      Jute: 2.1,
      Ginger: 8.3,
      Turmeric: 4.2
    },
    soilType: "Laterite soil, Red loamy soil",
    annualRainfall: 2818,
    irrigationCoverage: 11.7,
    agriculturalLand: 286.5
  },
  {
    id: "MZ",
    name: "Mizoram",
    region: "Northeast",
    mainCrops: ["Rice", "Maize", "Pulses", "Sugarcane", "Fruits"],
    cropProduction: {
      Rice: 67.8,
      Maize: 12.4,
      Pulses: 8.9,
      Sugarcane: 45.6,
      Fruits: 87.6
    },
    yieldPerHectare: {
      Rice: 1.6,
      Maize: 1.5,
      Pulses: 0.8,
      Sugarcane: 54.5,
      Fruits: 11.2
    },
    soilType: "Mountain soil, Red sandy soil",
    annualRainfall: 2670,
    irrigationCoverage: 16.3,
    agriculturalLand: 130.7
  },
  {
    id: "NL",
    name: "Nagaland",
    region: "Northeast",
    mainCrops: ["Rice", "Maize", "Pulses", "Oilseeds", "Sugarcane"],
    cropProduction: {
      Rice: 178.9,
      Maize: 45.6,
      Pulses: 12.4,
      Oilseeds: 18.9,
      Sugarcane: 56.7
    },
    yieldPerHectare: {
      Rice: 1.8,
      Maize: 1.7,
      Pulses: 0.9,
      Oilseeds: 0.8,
      Sugarcane: 54.3
    },
    soilType: "Mountain soil, Forest soil",
    annualRainfall: 1981,
    irrigationCoverage: 12.9,
    agriculturalLand: 721.0
  },
  {
    id: "OD",
    name: "Odisha",
    region: "East",
    mainCrops: ["Rice", "Pulses", "Oilseeds", "Jute", "Sugarcane"],
    cropProduction: {
      Rice: 7856.7,
      Pulses: 567.8,
      Oilseeds: 345.6,
      Jute: 234.5,
      Sugarcane: 987.6
    },
    yieldPerHectare: {
      Rice: 2.0,
      Pulses: 0.7,
      Oilseeds: 0.8,
      Jute: 2.3,
      Sugarcane: 65.4
    },
    soilType: "Red & Yellow soil, Coastal alluvial soil",
    annualRainfall: 1489,
    irrigationCoverage: 35.2,
    agriculturalLand: 5524.3
  },
  {
    id: "PB",
    name: "Punjab",
    region: "North",
    mainCrops: ["Wheat", "Rice", "Cotton", "Sugarcane", "Maize"],
    cropProduction: {
      Wheat: 17845.6,
      Rice: 12345.7,
      Cotton: 1456.7,
      Sugarcane: 7856.7,
      Maize: 567.8
    },
    yieldPerHectare: {
      Wheat: 5.1,
      Rice: 4.2,
      Cotton: 5.7,
      Sugarcane: 79.8,
      Maize: 3.8
    },
    soilType: "Alluvial soil",
    annualRainfall: 649,
    irrigationCoverage: 98.5,
    agriculturalLand: 4195.0
  },
  {
    id: "RJ",
    name: "Rajasthan",
    region: "West",
    mainCrops: ["Bajra", "Pulses", "Wheat", "Oilseeds", "Cotton"],
    cropProduction: {
      Bajra: 4567.8,
      Pulses: 2345.6,
      Wheat: 9876.5,
      Oilseeds: 5678.9,
      Cotton: 987.6
    },
    yieldPerHectare: {
      Bajra: 1.2,
      Pulses: 0.7,
      Wheat: 3.5,
      Oilseeds: 1.2,
      Cotton: 3.1
    },
    soilType: "Desert soil, Red & Yellow soil",
    annualRainfall: 575,
    irrigationCoverage: 41.2,
    agriculturalLand: 18427.0
  },
  {
    id: "SK",
    name: "Sikkim",
    region: "Northeast",
    mainCrops: ["Maize", "Rice", "Cardamom", "Ginger", "Turmeric"],
    cropProduction: {
      Maize: 28.9,
      Rice: 21.4,
      Cardamom: 3.8,
      Ginger: 7.6,
      Turmeric: 5.4
    },
    yieldPerHectare: {
      Maize: 1.8,
      Rice: 1.7,
      Cardamom: 0.4,
      Ginger: 6.7,
      Turmeric: 4.8
    },
    soilType: "Mountain soil, Brown forest soil",
    annualRainfall: 2739,
    irrigationCoverage: 11.5,
    agriculturalLand: 79.0
  },
  {
    id: "TN",
    name: "Tamil Nadu",
    region: "South",
    mainCrops: ["Rice", "Sugarcane", "Millets", "Oilseeds", "Cotton"],
    cropProduction: {
      Rice: 5678.9,
      Sugarcane: 34567.8,
      Millets: 1234.5,
      Oilseeds: 987.6,
      Cotton: 567.8
    },
    yieldPerHectare: {
      Rice: 3.1,
      Sugarcane: 105.7,
      Millets: 1.9,
      Oilseeds: 1.4,
      Cotton: 2.8
    },
    soilType: "Red soil, Black soil, Laterite soil",
    annualRainfall: 998,
    irrigationCoverage: 57.7,
    agriculturalLand: 5963.0
  },
  {
    id: "TS",
    name: "Telangana",
    region: "South",
    mainCrops: ["Rice", "Cotton", "Maize", "Pulses", "Sugarcane"],
    cropProduction: {
      Rice: 6789.0,
      Cotton: 3456.7,
      Maize: 1234.5,
      Pulses: 876.5,
      Sugarcane: 5678.9
    },
    yieldPerHectare: {
      Rice: 3.0,
      Cotton: 3.1,
      Maize: 3.6,
      Pulses: 0.8,
      Sugarcane: 82.3
    },
    soilType: "Black soil, Red soil",
    annualRainfall: 906,
    irrigationCoverage: 61.3,
    agriculturalLand: 5673.9
  },
  {
    id: "TR",
    name: "Tripura",
    region: "Northeast",
    mainCrops: ["Rice", "Jute", "Tea", "Pulses", "Fruits"],
    cropProduction: {
      Rice: 756.7,
      Jute: 34.5,
      Tea: 21.4,
      Pulses: 18.9,
      Fruits: 156.7
    },
    yieldPerHectare: {
      Rice: 2.6,
      Jute: 2.4,
      Tea: 1.3,
      Pulses: 0.9,
      Fruits: 12.5
    },
    soilType: "Red loamy soil, Alluvial soil",
    annualRainfall: 2500,
    irrigationCoverage: 23.7,
    agriculturalLand: 246.5
  },
  {
    id: "UP",
    name: "Uttar Pradesh",
    region: "North",
    mainCrops: ["Wheat", "Rice", "Sugarcane", "Pulses", "Oilseeds"],
    cropProduction: {
      Wheat: 34567.8,
      Rice: 15678.9,
      Sugarcane: 145678.9,
      Pulses: 2345.6,
      Oilseeds: 1567.8
    },
    yieldPerHectare: {
      Wheat: 3.4,
      Rice: 2.7,
      Sugarcane: 67.8,
      Pulses: 0.9,
      Oilseeds: 1.0
    },
    soilType: "Alluvial soil",
    annualRainfall: 990,
    irrigationCoverage: 76.5,
    agriculturalLand: 16623.0
  },
  {
    id: "UK",
    name: "Uttarakhand",
    region: "North",
    mainCrops: ["Wheat", "Rice", "Pulses", "Oilseeds", "Fruits"],
    cropProduction: {
      Wheat: 876.5,
      Rice: 567.8,
      Pulses: 78.9,
      Oilseeds: 56.7,
      Fruits: 789.0
    },
    yieldPerHectare: {
      Wheat: 2.3,
      Rice: 2.1,
      Pulses: 0.9,
      Oilseeds: 0.8,
      Fruits: 11.2
    },
    soilType: "Mountain soil, Alluvial soil",
    annualRainfall: 1547,
    irrigationCoverage: 45.1,
    agriculturalLand: 785.6
  },
  {
    id: "WB",
    name: "West Bengal",
    region: "East",
    mainCrops: ["Rice", "Jute", "Tea", "Potatoes", "Oilseeds"],
    cropProduction: {
      Rice: 15678.9,
      Jute: 2345.6,
      Tea: 345.6,
      Potatoes: 9876.5,
      Oilseeds: 876.5
    },
    yieldPerHectare: {
      Rice: 2.9,
      Jute: 2.7,
      Tea: 2.1,
      Potatoes: 22.5,
      Oilseeds: 1.1
    },
    soilType: "Alluvial soil, Red & Yellow soil",
    annualRainfall: 1582,
    irrigationCoverage: 57.6,
    agriculturalLand: 5438.0
  }
];

// Total crop production by type
export const cropProductionData = [
  { name: "Rice", production: 99720.38, color: "#4CAF50" },
  { name: "Wheat", production: 105645.67, color: "#FFC107" },
  { name: "Maize", production: 12345.67, color: "#FF9800" },
  { name: "Pulses", production: 12567.34, color: "#795548" },
  { name: "Sugarcane", production: 479123.45, color: "#8BC34A" },
  { name: "Cotton", production: 18753.45, color: "#FFEB3B" },
  { name: "Oilseeds", production: 17895.67, color: "#FF5722" }
];

// Monthly crop yield data for time-series charts
export const monthlyYieldData = [
  { month: "Jan", rice: 230.5, wheat: 450.2, maize: 120.8, pulses: 80.5, cotton: 60.2 },
  { month: "Feb", rice: 245.8, wheat: 478.9, maize: 115.6, pulses: 85.7, cotton: 65.8 },
  { month: "Mar", rice: 267.4, wheat: 512.6, maize: 132.4, pulses: 90.2, cotton: 72.5 },
  { month: "Apr", rice: 290.6, wheat: 530.8, maize: 148.7, pulses: 98.6, cotton: 85.3 },
  { month: "May", rice: 315.7, wheat: 510.3, maize: 160.2, pulses: 105.8, cotton: 95.7 },
  { month: "Jun", rice: 340.2, wheat: 490.5, maize: 175.6, pulses: 110.4, cotton: 110.2 },
  { month: "Jul", rice: 356.8, wheat: 470.6, maize: 190.3, pulses: 112.7, cotton: 130.5 },
  { month: "Aug", rice: 372.4, wheat: 455.2, maize: 205.6, pulses: 115.8, cotton: 145.7 },
  { month: "Sep", rice: 385.6, wheat: 445.8, maize: 215.7, pulses: 118.9, cotton: 155.3 },
  { month: "Oct", rice: 398.2, wheat: 435.6, maize: 210.5, pulses: 115.2, cotton: 150.8 },
  { month: "Nov", rice: 378.5, wheat: 425.7, maize: 195.3, pulses: 105.6, cotton: 140.2 },
  { month: "Dec", rice: 350.6, wheat: 440.2, maize: 180.8, pulses: 95.4, cotton: 125.6 }
];

// Growth of agricultural production over years
export const agricultureGrowthData = [
  { year: 2010, production: 244.5, growth: 3.8 },
  { year: 2011, production: 259.3, growth: 6.1 },
  { year: 2012, production: 257.1, growth: -0.8 },
  { year: 2013, production: 265.6, growth: 3.3 },
  { year: 2014, production: 252.0, growth: -5.1 },
  { year: 2015, production: 270.1, growth: 7.2 },
  { year: 2016, production: 275.1, growth: 1.9 },
  { year: 2017, production: 285.2, growth: 3.7 },
  { year: 2018, production: 285.0, growth: -0.1 },
  { year: 2019, production: 296.7, growth: 4.1 },
  { year: 2020, production: 305.4, growth: 2.9 },
  { year: 2021, production: 316.1, growth: 3.5 },
  { year: 2022, production: 328.7, growth: 4.0 },
  { year: 2023, production: 342.5, growth: 4.2 },
  { year: 2024, production: 355.0, growth: 3.6 }
];

// Weather impact on crop yield
export const weatherImpactData = [
  { condition: "Ideal", riceYield: 3.8, wheatYield: 4.2, maizeYield: 3.5 },
  { condition: "Drought", riceYield: 2.1, wheatYield: 2.5, maizeYield: 1.8 },
  { condition: "Heavy Rain", riceYield: 2.9, wheatYield: 2.2, maizeYield: 2.5 },
  { condition: "Temperature Rise", riceYield: 3.0, wheatYield: 3.5, maizeYield: 2.8 }
];

// Fertilizer usage and yield correlation
export const fertilizerImpactData = [
  { usage: "Low", yield: 2.2, cost: 3500 },
  { usage: "Medium", yield: 3.6, cost: 7000 },
  { usage: "High", yield: 4.5, cost: 12000 },
  { usage: "Optimal", yield: 4.8, cost: 10000 }
];

// AI Prediction Accuracy over time
export const predictionAccuracyData = [
  { year: 2018, accuracy: 72.5 },
  { year: 2019, accuracy: 78.3 },
  { year: 2020, accuracy: 83.6 },
  { year: 2021, accuracy: 87.2 },
  { year: 2022, accuracy: 90.5 },
  { year: 2023, accuracy: 92.8 },
  { year: 2024, accuracy: 94.1 }
];

// Top 10 states by total agricultural production value
export const topAgricultureStates = [
  { rank: 1, state: "Uttar Pradesh", value: 42567.8 },
  { rank: 2, state: "Punjab", value: 38972.5 },
  { rank: 3, state: "Madhya Pradesh", value: 31913.4 },
  { rank: 4, state: "Maharashtra", value: 29845.7 },
  { rank: 5, state: "West Bengal", value: 28876.5 },
  { rank: 6, state: "Bihar", value: 25954.6 },
  { rank: 7, state: "Andhra Pradesh", value: 24386.7 },
  { rank: 8, state: "Tamil Nadu", value: 23036.6 },
  { rank: 9, state: "Gujarat", value: 21938.1 },
  { rank: 10, state: "Haryana", value: 21564.3 }
];

// Agricultural Seasons in India
export const agriculturalSeasons = [
  {
    name: "Kharif",
    period: "June-October",
    mainCrops: ["Rice", "Maize", "Jowar", "Bajra", "Cotton", "Groundnut", "Pulses"],
    characteristics: "Monsoon crops. Requires lot of water and hot weather to grow.",
    states: ["West Bengal", "Odisha", "Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Maharashtra"]
  },
  {
    name: "Rabi",
    period: "October-March",
    mainCrops: ["Wheat", "Barley", "Oats", "Gram", "Mustard", "Peas"],
    characteristics: "Winter crops. Requires cool weather to grow and moderate amount of water.",
    states: ["Punjab", "Haryana", "Uttar Pradesh", "Rajasthan", "Madhya Pradesh", "Gujarat"]
  },
  {
    name: "Zaid",
    period: "March-June",
    mainCrops: ["Watermelon", "Cucumber", "Muskmelon", "Vegetables", "Fodder Crops"],
    characteristics: "Summer crops. Short season between Rabi and Kharif.",
    states: ["Uttar Pradesh", "Madhya Pradesh", "Punjab", "Haryana", "Rajasthan", "Uttarakhand"]
  }
];
