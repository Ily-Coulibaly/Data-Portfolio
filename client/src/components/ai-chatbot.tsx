import { useState, useEffect, useRef, useCallback } from 'react';
import { X, Send, Move } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface Position {
  x: number;
  y: number;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showNewBadge, setShowNewBadge] = useState(true);
  const [showPopupMessage, setShowPopupMessage] = useState(false);
  const [position, setPosition] = useState<Position>({ x: window.innerWidth - 90, y: window.innerHeight - 90 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });
  const [animationCycle, setAnimationCycle] = useState(0);
  const [animationStopped, setAnimationStopped] = useState(false);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Animation timing: 4s wait → 15s show → 4s hide → 15s show → stop
  useEffect(() => {
    if (!animationStopped && !isOpen && animationCycle < 2) {
      if (animationCycle === 0) {
        // Initial 4-second delay
        const initialTimer = setTimeout(() => {
          setShowPopupMessage(true);
          setAnimationCycle(1);
          
          // Hide after 15 seconds
          setTimeout(() => {
            setShowPopupMessage(false);
            
            // Wait 4 seconds, then show again for 15 seconds
            setTimeout(() => {
              setShowPopupMessage(true);
              setAnimationCycle(2);
              
              // Final hide after 15 seconds
              setTimeout(() => {
                setShowPopupMessage(false);
              }, 15000);
            }, 4000);
          }, 15000);
        }, 4000);
        
        return () => clearTimeout(initialTimer);
      }
    }
  }, [animationCycle, animationStopped, isOpen]);

  const snapToEdge = useCallback((x: number, y: number) => {
    const snapThreshold = 30;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const bubbleSize = 70;
    
    let newX = x;
    let newY = y;
    
    // Snap to edges
    if (x < snapThreshold) newX = 20;
    if (x > windowWidth - bubbleSize - snapThreshold) newX = windowWidth - bubbleSize - 20;
    if (y < snapThreshold) newY = 20;
    if (y > windowHeight - bubbleSize - snapThreshold) newY = windowHeight - bubbleSize - 20;
    
    return { x: newX, y: newY };
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!bubbleRef.current) return;
    
    setIsDragging(true);
    const rect = bubbleRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    
    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;
    const snappedPosition = snapToEdge(newX, newY);
    setPosition(snappedPosition);
  }, [isDragging, dragOffset, snapToEdge]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch events for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!bubbleRef.current) return;
    
    setIsDragging(true);
    const rect = bubbleRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    setDragOffset({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    });
    e.preventDefault();
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    const newX = touch.clientX - dragOffset.x;
    const newY = touch.clientY - dragOffset.y;
    const snappedPosition = snapToEdge(newX, newY);
    setPosition(snappedPosition);
    e.preventDefault();
  }, [isDragging, dragOffset, snapToEdge]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  const getMessagePosition = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const messageWidth = 400; // max-width
    const messageHeight = 120; // approximate height
    const bubbleSize = 70;
    const offset = 20;

    let messageX = position.x;
    let messageY = position.y;
    let arrowPosition = 'right';
    let arrowTop = '50%';

    // Define content collision zones (areas to avoid)
    const heroSectionHeight = 600; // approximate hero section height
    const contentCenterX = windowWidth / 2;
    const contentCenterY = heroSectionHeight / 2;
    const contentZoneWidth = 600; // width of main content area
    const contentZoneHeight = 400; // height of main content area
    
    // Content zone boundaries
    const contentLeft = contentCenterX - contentZoneWidth / 2;
    const contentRight = contentCenterX + contentZoneWidth / 2;
    const contentTop = contentCenterY - contentZoneHeight / 2;
    const contentBottom = contentCenterY + contentZoneHeight / 2;

    // Horizontal positioning with collision avoidance
    if (position.x > windowWidth / 2) {
      // Bubble on right side - message to the left
      messageX = position.x - messageWidth - offset;
      arrowPosition = 'right';
    } else {
      // Bubble on left side - message to the right
      messageX = position.x + bubbleSize + offset;
      arrowPosition = 'left';
    }

    // Vertical positioning with content avoidance
    const proposedMessageBottom = position.y + messageHeight;
    const proposedMessageTop = position.y;
    
    // Check if message would overlap with content area
    const messageLeft = messageX;
    const messageRight = messageX + messageWidth;
    
    // If message overlaps horizontally with content area and vertically with hero section
    const overlapsHorizontally = messageRight > contentLeft && messageLeft < contentRight;
    const overlapsVertically = proposedMessageBottom > contentTop && proposedMessageTop < contentBottom;
    
    if (overlapsHorizontally && overlapsVertically && position.y < heroSectionHeight) {
      // Force message outside content area
      if (position.y < contentCenterY) {
        // If bubble is in upper part of hero, place message below content area
        messageY = Math.max(contentBottom + 20, position.y);
      } else {
        // If bubble is in lower part of hero, place message above content area
        messageY = Math.min(contentTop - messageHeight - 20, position.y + bubbleSize - messageHeight);
      }
    } else {
      // Normal vertical positioning
      if (position.y < windowHeight / 2) {
        // Bubble at top - message below or aligned
        messageY = position.y;
      } else {
        // Bubble at bottom - message above or aligned
        messageY = position.y + bubbleSize - messageHeight;
      }
    }

    // Ensure message stays within screen bounds
    messageX = Math.max(10, Math.min(messageX, windowWidth - messageWidth - 10));
    messageY = Math.max(10, Math.min(messageY, windowHeight - messageHeight - 10));

    // Additional check: if still overlapping, move to edge of screen
    if (overlapsHorizontally && messageY > contentTop && messageY < contentBottom && position.y < heroSectionHeight) {
      if (messageX < contentCenterX) {
        messageX = Math.max(10, contentLeft - messageWidth - 20);
      } else {
        messageX = Math.min(windowWidth - messageWidth - 10, contentRight + 20);
      }
    }

    return { messageX, messageY, arrowPosition, arrowTop };
  };

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
    setAnimationStopped(true);
  };

  const handleLearnMore = () => {
    setShowPopupMessage(false);
    setAnimationStopped(true);
    // Scroll to skills section or handle learn more action
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
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

  const { messageX, messageY, arrowPosition } = getMessagePosition();

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

        .draggable-cursor {
          cursor: ${isDragging ? 'grabbing' : 'grab'};
        }

        .no-select {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>

      {/* Floating ARIA Bubble */}
      <div 
        ref={bubbleRef}
        className="fixed z-50"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transition: isDragging ? 'none' : 'all 0.3s ease'
        }}
      >
        {/* Enhanced Popup Message */}
        {showPopupMessage && !isOpen && (
          <div 
            className="absolute popup-bounce-in gentle-bounce"
            style={{
              left: `${messageX - position.x}px`,
              top: `${messageY - position.y}px`,
              width: '400px',
              minWidth: '320px'
            }}
          >
            <div 
              className="px-6 py-4 rounded-2xl shadow-2xl border-2 relative"
              style={{ 
                background: 'rgba(0, 0, 0, 0.95)',
                borderColor: '#A5A584',
                backdropFilter: 'blur(20px)',
                lineHeight: '1.6'
              }}
            >
              <p className="text-white text-sm font-medium mb-4" style={{ lineHeight: '1.6' }}>
                Hi! I'm ARIA, Ily's AI assistant. Want to learn more about her experience and skills?
              </p>
              
              <div className="flex gap-3">
                <button
                  onClick={handleLearnMore}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors border border-gray-600"
                  data-testid="learn-more-button"
                >
                  Learn More
                </button>
                <button
                  onClick={openChat}
                  className="px-4 py-2 text-white rounded-lg text-sm transition-colors border-2"
                  style={{ 
                    backgroundColor: '#A5A584',
                    borderColor: '#A5A584'
                  }}
                  data-testid="chat-button"
                >
                  Chat
                </button>
              </div>
              
              {/* Speech bubble arrow */}
              <div 
                className="absolute w-0 h-0"
                style={{
                  [arrowPosition]: '100%',
                  top: '30px',
                  borderTop: '10px solid transparent',
                  borderBottom: '10px solid transparent',
                  [arrowPosition === 'left' ? 'borderRight' : 'borderLeft']: '10px solid #A5A584'
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
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              onClick={isDragging ? undefined : openChat}
              className={`relative w-[70px] h-[70px] rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group no-select ${
                isDragging ? 'draggable-cursor scale-110' : 'draggable-cursor'
              }`}
              style={{
                background: 'linear-gradient(135deg, #2d2d2d 0%, #404040 50%, #1a1a1a 100%)',
                border: '2px solid #A5A584'
              }}
              data-testid="chatbot-open-button"
            >
              {/* Avatar */}
              <div className="relative flex items-center justify-center h-full">
                <span className="text-2xl">👩🏽</span>
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
            className="glassmorphism chat-slide-up flex flex-col absolute"
            style={{
              width: window.innerWidth <= 480 ? '100vw' : '400px',
              height: '520px',
              borderRadius: '16px',
              left: position.x + 70 + window.innerWidth > window.innerWidth + 380 ? '-330px' : '80px',
              top: position.y + 520 > window.innerHeight ? `${window.innerHeight - position.y - 520 - 10}px` : '0px'
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
                  <span className="text-lg">👩🏽</span>
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
                      <span>👩🏽</span>
                      <span className="font-semibold">ARIA</span>
                    </div>
                    <p>Hi! I'm ARIA, Ily's AI assistant. I can share insights about her skills and experience. What would you like to know?</p>
                  </div>
                  <div className="space-y-2">
                    {conversationStarters.map((starter, index) => (
                      <button
                        key={index}
                        onClick={() => handleStarterClick(starter)}
                        className="block w-full text-left p-3 text-sm rounded-lg transition-all duration-300 text-white border border-gray-700 hover:border-gray-600 hover:shadow-lg hover:scale-[1.02]"
                        style={{
                          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%)',
                        }}
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
                      <span className="text-sm mt-1">👩🏽</span>
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
                    <span className="text-sm">👩🏽</span>
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