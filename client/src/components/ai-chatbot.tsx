import { useState, useEffect, useRef } from 'react';
import { X, Send, Move } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

type CornerPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showNewBadge, setShowNewBadge] = useState(true);
  const [showPopupMessage, setShowPopupMessage] = useState(false);
  const [position, setPosition] = useState<CornerPosition>('bottom-right');
  const [isDragging, setIsDragging] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Show popup message after 3 seconds on hero section
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowPopupMessage(true);
        // Hide popup after 5 seconds
        setTimeout(() => setShowPopupMessage(false), 5000);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const conversationStarters = [
    "Tell me about her experience",
    "What are her technical skills?",
    "Education & background?",
    "Why hire Ily?"
  ];

  const openChat = () => {
    setIsOpen(true);
    setShowNewBadge(false);
    setShowPopupMessage(false);
  };

  const getPositionStyles = (pos: CornerPosition) => {
    switch (pos) {
      case 'bottom-right':
        return { bottom: '20px', right: '20px' };
      case 'bottom-left':
        return { bottom: '20px', left: '20px' };
      case 'top-right':
        return { top: '20px', right: '20px' };
      case 'top-left':
        return { top: '20px', left: '20px' };
      default:
        return { bottom: '20px', right: '20px' };
    }
  };

  const cyclePosition = () => {
    const positions: CornerPosition[] = ['bottom-right', 'bottom-left', 'top-left', 'top-right'];
    const currentIndex = positions.indexOf(position);
    const nextIndex = (currentIndex + 1) % positions.length;
    setPosition(positions[nextIndex]);
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
      return "Ily has 3 years of experience working across analytics, tech consulting, business analysis, data strategy, actuarial science, and entrepreneurship. She combines technical skills with business understanding to solve real problems.";
    }
    
    if (lowerText.includes('skill') || lowerText.includes('technical')) {
      return "She's proficient in Python, R, SQL, and Machine Learning frameworks like Scikit-learn and TensorFlow. She also works with Tableau, Power BI, AWS, and Azure. Her math background helps with statistical modeling and data analysis.";
    }
    
    if (lowerText.includes('hire') || lowerText.includes('why')) {
      return "Ily offers a practical combination of technical data skills and business experience. She can analyze data, build models, and communicate insights effectively to stakeholders. Her consulting and entrepreneurship background helps her understand business needs.";
    }
    
    if (lowerText.includes('education') || lowerText.includes('school')) {
      return "She holds a B.S. in Mathematics and an M.S. in Business Analytics from Babson College. This gives her both the mathematical foundation for data work and the business context for practical applications.";
    }
    
    if (lowerText.includes('location') || lowerText.includes('where')) {
      return "Ily is based in Boston, MA and is available for new opportunities.";
    }
    
    if (lowerText.includes('available') || lowerText.includes('contact')) {
      return "Yes, she's currently looking for new opportunities. You can reach out through the contact section to discuss potential roles or projects.";
    }

    if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey')) {
      return "Hello! I'm ARIA, Ily's AI assistant. I can help you learn about her background and skills. What would you like to know?";
    }
    
    return "I'd be happy to share more about Ily's experience and skills. For detailed discussions about specific opportunities, you can contact her directly through the contact section. What else would you like to know?";
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

        @keyframes bounce-in {
          0% { transform: scale(0.7) translateY(10px); opacity: 0; }
          50% { transform: scale(1.1) translateY(-5px); opacity: 0.9; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }

        @keyframes gentle-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
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
          border: 2px solid #A5A584;
          border-radius: 50%;
          animation: pulse-ring 2s infinite;
        }
        
        .chat-slide-up {
          animation: slide-up 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .popup-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .gentle-bounce {
          animation: gentle-bounce 2s infinite ease-in-out;
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

        .position-transition {
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>

      {/* Floating ARIA Bubble */}
      <div 
        className="fixed z-50 position-transition"
        style={getPositionStyles(position)}
      >
        {/* Popup Message */}
        {showPopupMessage && !isOpen && (
          <div 
            className="absolute mb-4 popup-bounce-in gentle-bounce"
            style={{
              bottom: position.includes('bottom') ? '85px' : 'auto',
              top: position.includes('top') ? '85px' : 'auto',
              right: position.includes('right') ? '0' : 'auto',
              left: position.includes('right') ? '50%' : position.includes('left') ? '0' : '50%',
              transform: position.includes('left') ? 'translateX(0)' : 'translateX(-50%)'
            }}
          >
            <div 
              className="glassmorphism px-4 py-3 rounded-2xl shadow-2xl border-2"
              style={{ 
                borderColor: '#A5A584',
                maxWidth: '200px'
              }}
            >
              <p className="text-white text-sm font-medium text-center">
                💬 Learn more about me!
              </p>
              {/* Speech bubble arrow */}
              <div 
                className="absolute w-0 h-0"
                style={{
                  [position.includes('bottom') ? 'top' : 'bottom']: '100%',
                  [position.includes('right') ? 'right' : 'left']: position.includes('left') || position.includes('right') ? '20px' : '50%',
                  transform: position.includes('left') || position.includes('right') ? 'none' : 'translateX(-50%)',
                  borderLeft: '8px solid transparent',
                  borderRight: '8px solid transparent',
                  [position.includes('bottom') ? 'borderBottom' : 'borderTop']: '8px solid #A5A584'
                }}
              />
            </div>
          </div>
        )}

        {!isOpen && (
          <div className="relative">
            {/* Pulsing Ring */}
            <div className="pulse-ring-animation"></div>
            
            {/* Main Bubble */}
            <button
              onClick={openChat}
              className="relative w-[70px] h-[70px] rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group"
              style={{
                background: 'linear-gradient(135deg, #2d2d2d 0%, #404040 50%, #1a1a1a 100%)',
                border: '2px solid #A5A584'
              }}
              data-testid="chatbot-open-button"
            >
              {/* Avatar with Sparkle */}
              <div className="relative flex items-center justify-center h-full">
                <span className="text-2xl">👩🏽‍💻</span>
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

            {/* Move Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                cyclePosition();
              }}
              className="absolute -top-2 -left-2 w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 border border-gray-600"
              title="Move to corner"
              data-testid="chatbot-move-button"
            >
              <Move className="w-4 h-4 text-gray-300" />
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
            data-testid="chatbot-interface"
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
                  <span className="text-lg">👩🏽‍💻</span>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border border-black"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">ARIA</h3>
                  <p className="text-gray-400 text-xs">AI Intelligence Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2"
                data-testid="chatbot-close-button"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 aria-scrollbar" data-testid="chatbot-messages">
              {messages.length === 0 && (
                <div className="space-y-4">
                  <div className="text-gray-300 text-sm">
                    <div className="flex items-center space-x-2 mb-3">
                      <span>👩🏽‍💻</span>
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
                        data-testid={`conversation-starter-${index}`}
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
                      <span className="text-sm mt-1">👩🏽‍💻</span>
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
                    <span className="text-sm">👩🏽‍💻</span>
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
                  data-testid="chatbot-input"
                />
                <button
                  onClick={() => sendMessage(inputText)}
                  disabled={!inputText.trim()}
                  className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  data-testid="chatbot-send-button"
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