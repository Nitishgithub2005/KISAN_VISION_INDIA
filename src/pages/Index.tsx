// Update this page (the content is just a fallback if you fail to update the page)

import { Routes, Route } from "react-router-dom";
import Predictions from "./Predictions";
import Dashboard from "./Dashboard";
import CropAnalysis from "./CropAnalysis";
import Chatbot from "./Chatbot";
import NotFound from "./NotFound";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/predictions" element={<Predictions />} />
      <Route path="/crop-analysis" element={<CropAnalysis />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Index;
