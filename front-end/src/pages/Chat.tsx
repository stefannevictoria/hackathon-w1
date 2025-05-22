
import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface Message {
  id: number;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const Chat: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: 'Olá! Como posso ajudar você hoje?',
      isUser: false,
      timestamp: new Date(new Date().getTime() - 60000)
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages([...messages, newUserMessage]);
    setInputValue('');
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        content: 'Estou processando sua solicitação. Como posso ajudar mais?',
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, aiResponse]);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-600 rounded-lg overflow-hidden">
        <div className="p-6 bg-w1-accent flex items-center justify-center flex-col text-white">
          <div className="w-24 h-24 mb-4">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" fillOpacity="0.2" />
              <path d="M8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13Z" fill="currentColor" />
              <path d="M16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z" fill="currentColor" />
              <path d="M8.85 16C9.47833 17.25 10.6933 18 12 18C13.3067 18 14.5217 17.25 15.15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold">INTELIGÊNCIA ARTIFICIAL W1</h2>
          <p className="flex items-center mt-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Como posso ajudar?
          </p>
        </div>
        
        <div className="bg-gray-200 h-96 p-4 overflow-y-auto">
          {messages.map(message => (
            <div 
              key={message.id}
              className={`mb-4 max-w-xs md:max-w-md ${message.isUser ? 'ml-auto' : 'mr-auto'}`}
            >
              <div className={`rounded-lg p-3 ${message.isUser ? 'bg-blue-500 text-white' : 'bg-white'}`}>
                {message.content}
              </div>
              <div className={`text-xs mt-1 ${message.isUser ? 'text-right' : ''}`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSendMessage} className="p-4 border-t">
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Pergunte alguma coisa"
              className="w-full bg-gray-100 border border-gray-300 rounded-full pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2"
            >
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
