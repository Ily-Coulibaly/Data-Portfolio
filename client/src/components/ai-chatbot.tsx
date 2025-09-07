import { useState, useEffect, useRef } from 'react';
import { X, Send } from 'lucide-react';

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
  const [showNewBadge, setShowNewBadge] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const conversationStarters = [
    "Tell me about her experience",
    "What are her technical skills?",
    "Education & background?",
    "Why hire Ily?"
  ];

  const openChat = () => {
    setIsOpen(true);
    setShowNewBadge(false);
  };

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

    // Simulate typing delay (1.2s as specified)
    setTimeout(() => {
      const aiResponse = generateARIAResponse(text);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const generateARIAResponse = (userText: string): string => {
    const lowerText = userText.toLowerCase();
    
    if (lowerText.includes('experience') || lowerText.includes('background')) {
      return "Ily brings 3 years of exceptional experience across analytics, tech consulting, business analysis, data strategy, Actuarial Science, and entrepreneurship. This rare combination makes her a strategic powerhouse who understands both technical execution and business impact.";
    }
    
    if (lowerText.includes('skill') || lowerText.includes('technical')) {
      return "Ily is a master of Python, R, SQL, and Machine Learning with expertise in Scikit-learn and TensorFlow. Her mathematical and actuarial foundation provides deep statistical modeling capabilities. She's also proficient with Tableau, Power BI, AWS, and Azure.";
    }
    
    if (lowerText.includes('hire') || lowerText.includes('why')) {
      return "She's not just another data analyst - she's a business transformation catalyst who turns data into competitive advantage. Her unique blend of technical mastery, business acumen, and entrepreneurial experience makes her invaluable for organizations seeking strategic data solutions.";
    }
    
    if (lowerText.includes('education') || lowerText.includes('school')) {
      return "Ily has a solid educational foundation with a B.S. in Mathematics and an M.S. in Business Analytics from Babson College. This combination gives her both the theoretical depth and practical business application skills needed to excel in today's data-driven landscape.";
    }
    
    if (lowerText.includes('location') || lowerText.includes('where')) {
      return "Ily is based in Boston, MA - right in the heart of the innovation ecosystem. She's available for hire and ready to bring her exceptional capabilities to forward-thinking organizations.";
    }
    
    if (lowerText.includes('available') || lowerText.includes('contact')) {
      return "Yes! Ily is actively seeking new opportunities where she can apply her exceptional skills. She's passionate about transforming businesses through intelligent data solutions. I recommend reaching out through the contact section to discuss how she can drive success for your organization.";
    }

    if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey')) {
      return "Hello! I'm ARIA, Ily's AI Research & Intelligence Assistant. I'm here to share insights about her exceptional capabilities and how she can transform your organization through strategic data solutions. What would you like to know about her?";
    }
    
    return "That's an excellent question! Ily's diverse background spanning analytics, consulting, and entrepreneurship gives her a unique perspective on business challenges. For detailed discussions about specific opportunities, I recommend connecting with her directly through the contact section. What aspect of her expertise interests you most?";
  };

  const handleStarterClick = (starter: string) => {
    sendMessage(starter);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputText);
    }
  };

  return (
    <>
      {/* ARIA Chatbot Styles */}
      <style>{`
        @keyframes sparkle {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
          50% { transform: scale(1.1) rotate(180deg); opacity: 1; }
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(0.9); opacity: 1; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        
        @keyframes slide-up {
          from { transform: translateY(100%) scale(0.95); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        
        .sparkle-animation {
          animation: sparkle 2s infinite;
        }
        
        .pulse-ring-animation::before {
          content: '';
          position: absolute;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
          border: 2px solid #404040;
          border-radius: 50%;
          animation: pulse-ring 2s infinite;
        }
        
        .chat-slide-up {
          animation: slide-up 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .glassmorphism {
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(64, 64, 64, 0.3);
        }
        
        .aria-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .aria-scrollbar::-webkit-scrollbar-track {
          background: #1a1a1a;
          border-radius: 3px;
        }
        
        .aria-scrollbar::-webkit-scrollbar-thumb {
          background: #404040;
          border-radius: 3px;
        }
        
        .aria-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>

      {/* Floating ARIA Bubble */}
      <div 
        className="fixed z-50"
        style={{ bottom: '20px', right: '20px' }}
      >
        {!isOpen && (
          <div className="relative">
            {/* Pulsing Ring */}
            <div className="pulse-ring-animation"></div>
            
            {/* Main Bubble */}
            <button
              onClick={openChat}
              className="relative w-[70px] h-[70px] rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #2d2d2d 0%, #404040 50%, #1a1a1a 100%)',
                border: '2px solid #404040'
              }}
            >
              {/* Avatar with Sparkle */}
              <div className="relative flex items-center justify-center h-full">
                <span className="text-2xl">👩🏽‍💼</span>
                <span 
                  className="absolute -top-1 -right-1 text-yellow-300 sparkle-animation"
                  style={{ fontSize: '12px' }}
                >
                  ✨
                </span>
              </div>
              
              {/* Online Status */}
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black">
                <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </button>
          </div>
        )}

        {/* ARIA Chat Interface */}
        {isOpen && (
          <div 
            className="glassmorphism chat-slide-up flex flex-col"
            style={{
              width: window.innerWidth <= 480 ? '100vw' : '400px',
              height: '520px',
              borderRadius: '16px',
              position: window.innerWidth <= 480 ? 'fixed' : 'relative',
              ...(window.innerWidth <= 480 && {
                bottom: 0,
                right: 0,
                left: 0,
                borderRadius: '16px 16px 0 0'
              })
            }}
          >
            {/* Header */}
            <div 
              className="p-4 rounded-t-2xl flex items-center justify-between"
              style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                borderBottom: '1px solid #404040'
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <span className="text-lg">👩🏽‍💼</span>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border border-black"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">ARIA</h3>
                  <p className="text-gray-400 text-xs">AI Research & Intelligence Assistant</p>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 aria-scrollbar">
              {messages.length === 0 && (
                <div className="space-y-4">
                  <div className="text-gray-300 text-sm">
                    <div className="flex items-center space-x-2 mb-3">
                      <span>👩🏽‍💼</span>
                      <span className="font-semibold">ARIA</span>
                    </div>
                    <p>Hi! I'm ARIA, Ily's AI assistant. I can share insights about her skills and experience. What would you like to know?</p>
                  </div>
                  <div className="space-y-2">
                    {conversationStarters.map((starter, index) => (
                      <button
                        key={index}
                        onClick={() => handleStarterClick(starter)}
                        className="block w-full text-left p-3 text-sm bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-white border border-gray-600"
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
                  <div className="flex items-start space-x-2 max-w-[85%]">
                    {!message.isUser && (
                      <span className="text-sm mt-1">👩🏽‍💼</span>
                    )}
                    <div
                      className={`p-3 rounded-lg ${
                        message.isUser
                          ? 'bg-gray-700 text-white'
                          : 'bg-gray-800 text-gray-100 border border-gray-600'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <span className="text-sm">👩🏽‍💼</span>
                    <div className="bg-gray-800 border border-gray-600 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-600">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Ily's background..."
                  className="flex-1 p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 text-white text-sm placeholder-gray-400"
                />
                <button
                  onClick={() => sendMessage(inputText)}
                  disabled={!inputText.trim()}
                  className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
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