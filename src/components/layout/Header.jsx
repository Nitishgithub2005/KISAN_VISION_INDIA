import React, { useState } from "react";
import { Search, Bell, Settings, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { i18n } = useTranslation();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const getLinkClassName = (path) => {
    const baseClasses = "px-4 py-2 rounded-full text-sm font-medium";
    return currentPath === path
      ? `${baseClasses} bg-kisan-green text-white`
      : `${baseClasses} text-gray-600 hover:text-kisan-green`;
  };

  return <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-kisan-green rounded-md flex items-center justify-center">
            <span className="text-white font-bold">KV</span>
          </div>
          <h1 className="text-lg font-bold text-kisan-green">Kisan Vision India</h1>
        </Link>
      </div>

      <nav className="flex items-center">
        <ul className="flex space-x-1">
          <li>
            <Link to="/" className={getLinkClassName("/")}>
              Dashboard
            </Link>
          </li>
          {/* <li>
            <Link to="/crop-analysis" className={getLinkClassName("/crop-analysis")}>
              Crop Analysis
            </Link>
          </li> */}
          <li>
            <Link to="/predictions" className={getLinkClassName("/predictions")}>
              Predictions
            </Link>
          </li>
          <li>
            <Link to="/chatbot" className={getLinkClassName("/chatbot")}>
              Chatbot
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-4">
        
      </div>
    </header>;
};
export default Header;
