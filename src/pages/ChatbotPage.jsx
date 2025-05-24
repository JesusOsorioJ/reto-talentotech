import React, { useState, useRef, useEffect } from 'react';
import api from '../api/axios';
import Spinner from '../components/Spinner';
import { User, Rocket } from 'lucide-react';

export default function ChatbotPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  // Scroll al último mensaje
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input, time: new Date().toLocaleTimeString() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const { data } = await api.post('/chatbot', { query: input });
      const botMsg = { from: 'bot', text: data.reply, time: new Date().toLocaleTimeString() };
      setMessages(prev => [...prev, botMsg]);
    } catch {
      setMessages(prev => [...prev, { from: 'bot', text: 'Error en la consulta', time: new Date().toLocaleTimeString() }]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => setMessages([]);

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Chatbot</h2>
        <button onClick={clearChat} className="text-sm text-red-500 hover:text-red-700">Limpiar Chat</button>
      </header>

      {/* Mensajes */}
      <div ref={containerRef} className="flex-1 overflow-auto p-4 space-y-4 bg-white dark:bg-gray-800">
        {messages.map((msg, i) => (
          <div key={i} className="flex items-start space-x-3">
            {msg.from === 'bot' ? (
              <Rocket className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            ) : (
              <User className="w-6 h-6 text-blue-500" />
            )}
            <div>
              <div className={
                `p-3 rounded-xl max-w-md break-words
                ${msg.from === 'bot'
                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  : 'bg-blue-100 dark:bg-blue-700 text-gray-800 dark:text-gray-200 self-end'}`
              }>
                {msg.text}
              </div>
              <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">{msg.time}</span>
            </div>
          </div>
        ))}
        {loading && <div className="flex justify-center"><Spinner /></div>}
      </div>

      {/* Input */}
      <footer className="p-4 bg-white dark:bg-gray-800 shadow flex">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="Escribe tu pregunta..."
          className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-l-xl outline-none bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        />
        <button
          onClick={sendMessage}
          className="px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-r-xl focus:outline-none transition"
        >Enviar</button>
      </footer>
    </div>
  );
}