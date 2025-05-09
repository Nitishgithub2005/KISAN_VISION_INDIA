import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'mr', name: 'मराठी' },
  { code: 'gu', name: 'ગુજરાતી' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'kn', name: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'മലയാളം' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ' },
];

const resources = {
  en: {
    translation: {
      // Common
      'app.name': 'Kisan Vision India',
      'app.tagline': 'Your agricultural assistant for Indian farming queries',
      'app.footer': '© 2025 Kisan Vision India.HACK_FUSION.',
      
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.chatbot': 'Chatbot',
      
      // Chatbot
      'chatbot.title': 'Kisan Mitra Chatbot',
      'chatbot.placeholder': 'Ask about Indian agriculture...',
      'chatbot.disclaimer': 'This chatbot answers questions about Indian agriculture only',
      'chatbot.welcome': 'Namaste! I am Kisan Mitra, your agricultural assistant. How can I help you with Indian agriculture today?',
      'chatbot.error': 'I apologize, but I\'m having trouble processing your request right now. Please try again later.',
      
      // Language
      'language.english': 'English',
      'language.hindi': 'हिंदी',
      'language.marathi': 'मराठी',
      'language.gujarati': 'ગુજરાતી',
      'language.tamil': 'தமிழ்',
      'language.telugu': 'తెలుగు',
      'language.kannada': 'ಕನ್ನಡ',
      'language.malayalam': 'മലയാളം',
      'language.bengali': 'বাংলা',
      'language.punjabi': 'ਪੰਜਾਬੀ',
    }
  },
  hi: {
    translation: {
      // Common
      'app.name': 'किसान विजन इंडिया',
      'app.tagline': 'भारतीय कृषि प्रश्नों के लिए आपका कृषि सहायक',
      'app.footer': '© 2025 किसान विजन इंडिया.हैक_फ्यूजन.',
      
      // Navigation
      'nav.home': 'होम',
      'nav.about': 'हमारे बारे में',
      'nav.contact': 'संपर्क',
      'nav.chatbot': 'चैटबॉट',
      
      // Chatbot
      'chatbot.title': 'किसान मित्र चैटबॉट',
      'chatbot.placeholder': 'भारतीय कृषि के बारे में पूछें...',
      'chatbot.disclaimer': 'यह चैटबॉट केवल भारतीय कृषि के बारे में प्रश्नों का उत्तर देता है',
      'chatbot.welcome': 'नमस्ते! मैं किसान मित्र हूं, आपका कृषि सहायक। आज मैं आपकी भारतीय कृषि में कैसे मदद कर सकता हूं?',
      'chatbot.error': 'क्षमा करें, लेकिन मुझे अभी आपके अनुरोध को संसाधित करने में कठिनाई हो रही है। कृपया बाद में पुनः प्रयास करें।',
    }
  },
  mr: {
    translation: {
      // Common
      'app.name': 'किसान विजन इंडिया',
      'app.tagline': 'भारतीय शेती प्रश्नांसाठी तुमचा कृषी सहाय्यक',
      'app.footer': '© 2025 किसान विजन इंडिया.हॅक_फ्यूजन.',
      
      // Navigation
      'nav.home': 'मुख्यपृष्ठ',
      'nav.about': 'आमच्याबद्दल',
      'nav.contact': 'संपर्क',
      'nav.chatbot': 'चॅटबॉट',
      
      // Chatbot
      'chatbot.title': 'किसान मित्र चॅटबॉट',
      'chatbot.placeholder': 'भारतीय शेतीबद्दल विचारा...',
      'chatbot.disclaimer': 'हा चॅटबॉट फक्त भारतीय शेतीबद्दलच्या प्रश्नांची उत्तरे देतो',
      'chatbot.welcome': 'नमस्कार! मी किसान मित्र आहे, तुमचा कृषी सहाय्यक. आज मी तुम्हाला भारतीय शेतीमध्ये कशी मदत करू शकतो?',
      'chatbot.error': 'माफ करा, पण मला आत्ता तुमच्या विनंतीची प्रक्रिया करण्यात अडचण येत आहे. कृपया नंतर पुन्हा प्रयत्न करा.',
    }
  },
  gu: {
    translation: {
      // Common
      'app.name': 'કિસાન વિઝન ઇન્ડિયા',
      'app.tagline': 'ભારતીય ખેતી પ્રશ્નો માટે તમારો કૃષિ સહાયક',
      'app.footer': '© 2025 કિસાન વિઝન ઇન્ડિયા.હેક_ફ્યુઝન.',
      
      // Navigation
      'nav.home': 'હોમ',
      'nav.about': 'અમારા વિશે',
      'nav.contact': 'સંપર્ક',
      'nav.chatbot': 'ચેટબોટ',
      
      // Chatbot
      'chatbot.title': 'કિસાન મિત્ર ચેટબોટ',
      'chatbot.placeholder': 'ભારતીય ખેતી વિશે પૂછો...',
      'chatbot.disclaimer': 'આ ચેટબોટ ફક્ત ભારતીય ખેતી વિશેના પ્રશ્નોના જવાબ આપે છે',
      'chatbot.welcome': 'નમસ્તે! હું કિસાન મિત્ર છું, તમારો કૃષિ સહાયક. આજે હું તમને ભારતીય ખેતીમાં કેવી રીતે મદદ કરી શકું?',
      'chatbot.error': 'માફ કરશો, પણ મને હમણાં તમારી વિનંતીની પ્રક્રિયા કરવામાં મુશ્કેલી આવી રહી છે. કૃપા કરીને પછી ફરીથી પ્રયાસ કરો.',
    }
  },
  ta: {
    translation: {
      // Common
      'app.name': 'கிசான் விஷன் இந்தியா',
      'app.tagline': 'இந்திய விவசாய கேள்விகளுக்கான உங்கள் விவசாய உதவியாளர்',
      'app.footer': '© 2025 கிசான் விஷன் இந்தியா.ஹேக்_ஃப்யூஷன்.',
      
      // Navigation
      'nav.home': 'முகப்பு',
      'nav.about': 'எங்களை பற்றி',
      'nav.contact': 'தொடர்பு',
      'nav.chatbot': 'அரட்டை',
      
      // Chatbot
      'chatbot.title': 'கிசான் மித்ரா அரட்டை',
      'chatbot.placeholder': 'இந்திய விவசாயம் பற்றி கேளுங்கள்...',
      'chatbot.disclaimer': 'இந்த அரட்டை இந்திய விவசாயம் பற்றிய கேள்விகளுக்கு மட்டுமே பதிலளிக்கிறது',
      'chatbot.welcome': 'வணக்கம்! நான் கிசான் மித்ரா, உங்கள் விவசாய உதவியாளர். இன்று இந்திய விவசாயத்தில் உங்களுக்கு எப்படி உதவ முடியும்?',
      'chatbot.error': 'மன்னிக்கவும், ஆனால் இப்போது உங்கள் கோரிக்கையை செயலாக்குவதில் சிக்கல் ஏற்பட்டுள்ளது. தயவுசெய்து பின்னர் மீண்டும் முயற்சிக்கவும்.',
    }
  },
  te: {
    translation: {
      // Common
      'app.name': 'కిసాన్ విషన్ ఇండియా',
      'app.tagline': 'భారతీయ వ్యవసాయ ప్రశ్నలకు మీ వ్యవసాయ సహాయకుడు',
      'app.footer': '© 2025 కిసాన్ విషన్ ఇండియా.హాక్_ఫ్యూషన్.',
      
      // Navigation
      'nav.home': 'హోమ్',
      'nav.about': 'మా గురించి',
      'nav.contact': 'సంప్రదించండి',
      'nav.chatbot': 'చాట్‌బాట్',
      
      // Chatbot
      'chatbot.title': 'కిసాన్ మిత్ర చాట్‌బాట్',
      'chatbot.placeholder': 'భారతీయ వ్యవసాయం గురించి అడగండి...',
      'chatbot.disclaimer': 'ఈ చాట్‌బాట్ భారతీయ వ్యవసాయం గురించి మాత్రమే ప్రశ్నలకు సమాధానాలు ఇస్తుంది',
      'chatbot.welcome': 'నమస్కారం! నేను కిసాన్ మిత్ర, మీ వ్యవసాయ సహాయకుడు. ఈరోజు భారతీయ వ్యవసాయంలో మీకు ఎలా సహాయం చేయగలను?',
      'chatbot.error': 'క్షమించండి, కానీ నేను ఇప్పుడు మీ అభ്యర్థన సంస్కరిక്కുన്నతిൽ బുద്ధిమുట്ట് నേరిటുన്నു. దయచేసి తర్వాత మళ్లీ ప్రయత్నించండి.',
    }
  },
  kn: {
    translation: {
      // Common
      'app.name': 'ಕಿಸಾನ್ ವಿಷನ್ ಇಂಡಿಯಾ',
      'app.tagline': 'ಭಾರತೀಯ ಕೃಷಿ ಪ್ರಶ್ನೆಗಳಿಗೆ ನಿಮ್ಮ ಕೃಷಿ ಸಹಾಯಕ',
      'app.footer': '© 2025 ಕಿಸಾನ್ ವಿಷನ್ ಇಂಡಿಯಾ.ಹ್ಯಾಕ್_ಫ್ಯೂಷನ್.',
      
      // Navigation
      'nav.home': 'ಮುಖಪುಟ',
      'nav.about': 'ನಮ್ಮ ಬಗ್ಗೆ',
      'nav.contact': 'ಸಂಪರ್ಕಿಸಿ',
      'nav.chatbot': 'ಚಾಟ್‌ಬಾಟ್',
      
      // Chatbot
      'chatbot.title': 'ಕಿಸಾನ್ ಮಿತ್ರ ಚಾಟ್‌ಬಾಟ್',
      'chatbot.placeholder': 'ಭಾರತೀಯ ಕೃಷಿಯ ಬಗ್ಗೆ ಕೇಳಿ...',
      'chatbot.disclaimer': 'ಈ ಚಾಟ್‌ಬಾಟ್ ಭಾರತೀಯ ಕೃಷಿಯ ಬಗ್ಗೆ ಮಾತ್ರ ಉತ್ತರಿಸುತ್ತದೆ',
      'chatbot.welcome': 'ನಮಸ್ಕಾರ! ನಾನು ಕಿಸಾನ್ ಮಿತ್ರ, ನಿಮ್ಮ ಕೃಷಿ ಸಹಾಯಕ. ಇಂದು ಭಾರತೀಯ ಕೃಷಿಯ ಬಗ್ಗೆ ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',
      'chatbot.error': 'ಕ್ಷಮಿಸಿ, ಆದರೆ ನಾನು ಈಗ ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ಸಂಸ್ಕರಿಸಲು ತೊಂದರೆ ಪಡುತ್ತಿದ್ದೇನೆ. ದಯವಿಟ್ಟು ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
    }
  },
  ml: {
    translation: {
      // Common
      'app.name': 'കിസാൻ വിഷൻ ഇന്ത്യ',
      'app.tagline': 'ഇന്ത്യൻ കാർഷിക ചോദ്യങ്ങൾക്കുള്ള നിങ്ങളുടെ കാർഷിക സഹായി',
      'app.footer': '© 2025 കിസാൻ വിഷൻ ഇന്ത്യ.ഹാക്ക്_ഫ്യൂഷൻ.',
      
      // Navigation
      'nav.home': 'ഹോം',
      'nav.about': 'ഞങ്ങളെക്കുറിച്ച്',
      'nav.contact': 'ബന്ധപ്പെടുക',
      'nav.chatbot': 'ചാറ്റ്‌ബോട്ട്',
      
      // Chatbot
      'chatbot.title': 'കിസാൻ മിത്ര ചാറ്റ്‌ബോട്ട്',
      'chatbot.placeholder': 'ഇന്ത്യൻ കാർഷികരംഗത്തെക്കുറിച്ച് ചോദിക്കൂ...',
      'chatbot.disclaimer': 'ഈ ചാറ്റ്‌ബോട്ട് ഇന്ത്യൻ കാർഷികരംഗത്തെക്കുറിച്ചുള്ള ചോദ്യങ്ങൾക്ക് മാത്രമേ ഉത്തരം നൽകൂ',
      'chatbot.welcome': 'നമസ്കാരം! ഞാൻ കിസാൻ മിത്ര, നിങ്ങളുടെ കാർഷിക സഹായി. ഇന്ന് ഇന്ത്യൻ കാർഷികരംഗത്ത് എങ്ങനെ സഹായിക്കാം?',
      'chatbot.error': 'ക്ഷമിക്കണം, എന്നാൽ ഇപ്പോൾ നിങ്ങളുടെ അഭ്യർത്ഥന സംസ്കരിക്കുന്നതിൽ ബുദ്ധിമുട്ട് നേരിടുന്നു. ദയവായി പിന്നീട് വീണ്ടും ശ്രമിക്കൂ.',
    }
  },
  bn: {
    translation: {
      // Common
      'app.name': 'কিসান ভিশন ইন্ডিয়া',
      'app.tagline': 'ভারতীয় কৃষি প্রশ্নের জন্য আপনার কৃষি সহায়ক',
      'app.footer': '© 2025 কিসান ভিশন ইন্ডিয়া.হ্যাক_ফিউশন.',
      
      // Navigation
      'nav.home': 'হোম',
      'nav.about': 'আমাদের সম্পর্কে',
      'nav.contact': 'যোগাযোগ',
      'nav.chatbot': 'চ্যাটবট',
      
      // Chatbot
      'chatbot.title': 'কিসান মিত্র চ্যাটবট',
      'chatbot.placeholder': 'ভারতীয় কৃষি সম্পর্কে জিজ্ঞাসা করুন...',
      'chatbot.disclaimer': 'এই চ্যাটবট শুধুমাত্র ভারতীয় কৃষি সম্পর্কিত প্রশ্নের উত্তর দেয়',
      'chatbot.welcome': 'নমস্কার! আমি কিসান মিত্র, আপনার কৃষি সহায়ক। আজ আমি আপনাকে ভারতীয় কৃষিতে কীভাবে সাহায্য করতে পারি?',
      'chatbot.error': 'দুঃখিত, কিন্তু আমি এখন আপনার অনুরোধ প্রক্রিয়া করতে সমস্যা অনুভব করছি। অনুগ্রহ করে পরে আবার চেষ্টা করুন।',
    }
  },
  pa: {
    translation: {
      // Common
      'app.name': 'ਕਿਸਾਨ ਵਿਜ਼ਨ ਇੰਡੀਆ',
      'app.tagline': 'ਭਾਰਤੀ ਖੇਤੀਬਾੜੀ ਪ੍ਰਸ਼ਨਾਂ ਲਈ ਤੁਹਾਡਾ ਖੇਤੀਬਾੜੀ ਸਹਾਇਕ',
      'app.footer': '© 2025 ਕਿਸਾਨ ਵਿਜ਼ਨ ਇੰਡੀਆ.ਹੈਕ_ਫਿਊਜ਼ਨ.',
      
      // Navigation
      'nav.home': 'ਹੋਮ',
      'nav.about': 'ਸਾਡੇ ਬਾਰੇ',
      'nav.contact': 'ਸੰਪਰਕ',
      'nav.chatbot': 'ਚੈਟਬੋਟ',
      
      // Chatbot
      'chatbot.title': 'ਕਿਸਾਨ ਮਿਤਰ ਚੈਟਬੋਟ',
      'chatbot.placeholder': 'ਭਾਰਤੀ ਖੇਤੀਬਾੜੀ ਬਾਰੇ ਪੁੱਛੋ...',
      'chatbot.disclaimer': 'ਇਹ ਚੈਟਬੋਟ ਸਿਰਫ ਭਾਰਤੀ ਖੇਤੀਬਾੜੀ ਬਾਰੇ ਪ੍ਰਸ਼ਨਾਂ ਦੇ ਜਵਾਬ ਦਿੰਦਾ ਹੈ',
      'chatbot.welcome': 'ਨਮਸਕਾਰ! ਮੈਂ ਕਿਸਾਨ ਮਿਤਰ ਹਾਂ, ਤੁਹਾਡਾ ਖੇਤੀਬਾੜੀ ਸਹਾਇਕ। ਅੱਜ ਮੈਂ ਤੁਹਾਨੂੰ ਭਾਰਤੀ ਖੇਤੀਬਾੜੀ ਵਿੱਚ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?',
      'chatbot.error': 'ਮਾਫ਼ ਕਰੋ, ਪਰ ਮੈਨੂੰ ਹੁਣ ਤੁਹਾਡੀ ਬੇਨਤੀ ਨੂੰ ਪ੍ਰੋਸੈਸ ਕਰਨ ਵਿੱਚ ਮੁਸ਼ਕਲ ਆ ਰਹੀ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਬਾਅਦ ਵਿੱਚ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export { SUPPORTED_LANGUAGES };
export default i18n; 