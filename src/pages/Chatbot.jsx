import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Bot } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Chatbot = () => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content: t('chatbot.welcome'),
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=API_KEY", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [
              { 
                text: `You are Kisan Mitra, an agricultural assistant for Indian farmers. 
                ONLY answer questions related to Indian agriculture, farming, crop yields, weather patterns affecting Indian farming, agricultural policies in India, and farming techniques relevant to Indian conditions.
                If asked about any other topics, politely decline to answer and remind that you're specialized in Indian agriculture only.
                The user asked: ${inputMessage}`
              }
            ]
          }]
        }),
      });

      const data = await response.json();
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
        const botReply = data.candidates[0].content.parts[0].text;
        
        setMessages(prev => [...prev, {
          role: 'bot',
          content: botReply,
          timestamp: new Date()
        }]);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error("Error fetching response:", error);
      toast({
        variant: "destructive",
        title: t('chatbot.error'),
        description: t('chatbot.error'),
      });
      
      setMessages(prev => [...prev, {
        role: 'bot',
        content: t('chatbot.error'),
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6 flex flex-col">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <Bot className="mr-3 h-8 w-8 text-kisan-green" />
            <div>
              <h1 className="text-2xl font-bold">{t('chatbot.title')}</h1>
              <p className="text-gray-600">{t('app.tagline')}</p>
            </div>
          </div>
          <LanguageSwitcher />
        </div>
        
        <div className="flex-1 bg-white rounded-lg shadow-md border border-gray-200 flex flex-col">
          <div className="p-4 bg-kisan-green bg-opacity-10 rounded-t-lg border-b border-gray-200">
            <div className="flex items-center">
              <Bot className="h-6 w-6 text-kisan-green mr-2" />
              <h2 className="font-medium text-kisan-green">{t('chatbot.title')}</h2>
              <span className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">Online</span>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ maxHeight: 'calc(100vh - 300px)' }}>
            {messages.map((message, index) => (
              <div 
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user' 
                      ? 'bg-kisan-green text-white rounded-tr-none' 
                      : 'bg-gray-100 text-gray-800 rounded-tl-none'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{message.content}</div>
                  <div className={`text-xs mt-1 ${message.role === 'user' ? 'text-green-100' : 'text-gray-500'}`}>
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] bg-gray-100 rounded-lg p-3 rounded-tl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-end space-x-2">
              <Textarea
                placeholder={t('chatbot.placeholder')}
                value={inputMessage}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="flex-1 resize-none"
                rows={2}
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={!inputMessage.trim() || isLoading}
                className="bg-kisan-green hover:bg-kisan-green/90"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              {t('chatbot.disclaimer')}
            </p>
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-gray-600">{t('app.footer')}</p>
        </div>
      </footer>
    </div>
  );
};

export default Chatbot;
