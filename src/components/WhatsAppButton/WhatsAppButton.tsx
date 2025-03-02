// components/ChatBot.tsx
import { useState } from 'react';
import { FaComment, FaTimes, FaPaperPlane } from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ id: number; text: string; isUser: boolean }>>([]);
  const [askedForEmail, setAskedForEmail] = useState(false);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add user message
      setMessages(prev => [...prev, { id: Date.now(), text: message, isUser: true }]);

      // Bot response logic
      setTimeout(() => {
        if (!askedForEmail) {
          // First response: Ask for email
          setMessages(prev => [...prev, { 
            id: Date.now(), 
            text: "Please provide your email address so we can assist you with your car report.", 
            isUser: false 
          }]);
          setAskedForEmail(true);
        } else {
          // Second response: Confirmation
          setMessages(prev => [...prev, { 
            id: Date.now(), 
            text: "Thank you! Our team will get back to you shortly with your car report.", 
            isUser: false 
          }]);
          setAskedForEmail(false); // Reset for next interaction
        }
      }, 1000);

      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {isOpen && (
        <div className="bg-white w-80 h-96 rounded-lg shadow-xl flex flex-col mb-4">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Car Report Assistant</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-200"
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg) => (
              <div 
                key={msg.id}
                className={`mb-4 ${msg.isUser ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block p-2 rounded-lg ${
                    msg.isUser 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={askedForEmail ? "Enter your email..." : "Type a message..."}
              className="flex-1 border rounded-lg p-2 text-sm focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
      >
        {isOpen ? (
          <FaTimes className="text-white text-2xl" />
        ) : (
          <FaComment className="text-white text-2xl" />
        )}
      </button>
    </div>
  );
};

export default ChatBot;