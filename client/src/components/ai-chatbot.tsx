import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Show welcome message after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const conversationStarters = [
    "What's Ily's background?",
    "What skills does Ily have?",
    "Is Ily available for hire?",
    "Tell me about Ily's education"
  ];

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response (we'll replace this with actual AI integration)
    setTimeout(() => {
      const aiResponse = generateAIResponse(text);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userText: string): string => {
    const lowerText = userText.toLowerCase();
    
    if (lowerText.includes('background') || lowerText.includes('who') || lowerText.includes('about')) {
      return "Ily Coulibaly is a Data Analyst & AI Specialist with 3 years of experience across analytics, tech consulting, business analysis, data strategy, Actuarial Science, and entrepreneurship. He holds a B.S. in Mathematics and an M.S. in Business Analytics from Babson College.";
    }
    
    if (lowerText.includes('skill') || lowerText.includes('technical') || lowerText.includes('technology')) {
      return "Ily is an expert at turning data into actionable business insights using Python, R, SQL, and Machine Learning. His technical skills include Scikit-learn, TensorFlow, Tableau, Power BI, AWS, and Azure.";
    }
    
    if (lowerText.includes('hire') || lowerText.includes('available') || lowerText.includes('work') || lowerText.includes('opportunity')) {
      return "Yes! Ily is available for new opportunities. He's passionate about solving business problems with data and AI. I'd recommend reaching out to him directly through the contact section to discuss specific opportunities.";
    }
    
    if (lowerText.includes('education') || lowerText.includes('school') || lowerText.includes('university')) {
      return "Ily has a strong educational foundation with a B.S. in Mathematics and an M.S. in Business Analytics from Babson College, which is renowned for its business programs.";
    }
    
    if (lowerText.includes('location') || lowerText.includes('where') || lowerText.includes('based')) {
      return "Ily is based in Boston, MA, which puts him at the heart of the tech and business analytics scene on the East Coast.";
    }
    
    if (lowerText.includes('experience') || lowerText.includes('years')) {
      return "Ily has 3 years of experience across multiple domains including analytics, tech consulting, business analysis, data strategy, Actuarial Science, and entrepreneurship. This diverse background gives him a unique perspective on business challenges.";
    }

    if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey')) {
      return "Hello! I'm Ily's AI assistant. I'm here to help you learn more about his professional background, skills, and experience. What would you like to know?";
    }
    
    return "That's a great question! For detailed discussions about Ily's experience and how he can help with your specific needs, I'd recommend contacting him directly through the contact section. Is there anything specific about his background or skills you'd like to know more about?";
  };

  const handleStarterClick = (starter: string) => {
    sendMessage(starter);
  };

  return (
    <>
      {/* Floating Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <div className="relative">
            {showWelcome && (
              <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 rounded-lg shadow-lg max-w-xs mb-2 animate-in slide-in-from-bottom-2">
                <div className="text-sm font-medium">👋 Hi! I'm Ily's AI assistant. Ask me anything about his background!</div>
                <button 
                  onClick={() => setShowWelcome(false)}
                  className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
            <button
              onClick={() => setIsOpen(true)}
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 animate-pulse hover:animate-none hover:scale-105"
            >
              <MessageCircle className="w-8 h-8" />
            </button>
          </div>
        )}

        {/* Chat Interface */}
        {isOpen && (
          <div className="w-96 h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col animate-in slide-in-from-bottom-4">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-t-2xl flex items-center justify-between">
              <div className="text-white">
                <h3 className="font-semibold">Chat with Ily's AI Assistant</h3>
                <p className="text-xs text-blue-100">Ask about Ily's background & skills</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-blue-200 transition-colors p-1"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-blue-200 transition-colors p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    👋 Hi! I'm here to help you learn about Ily's professional background. Try asking:
                  </div>
                  <div className="space-y-2">
                    {conversationStarters.map((starter, index) => (
                      <button
                        key={index}
                        onClick={() => handleStarterClick(starter)}
                        className="block w-full text-left p-2 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        {starter}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputText)}
                  placeholder="Ask about Ily's background..."
                  className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                />
                <button
                  onClick={() => sendMessage(inputText)}
                  disabled={!inputText.trim()}
                  className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AIChatbot;