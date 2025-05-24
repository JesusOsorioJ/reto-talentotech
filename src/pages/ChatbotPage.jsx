import React, { useState } from 'react';
import api from '../api/axios';
import Spinner from '../components/Spinner';

export default function ChatbotPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    setMessages(prev => [...prev, { from: 'user', text: input }]);
    try {
      const { data } = await api.post('/chatbot', { query: input });
      setMessages(prev => [...prev, { from: 'bot', text: data.reply }]);
    } catch {
      setMessages(prev => [...prev, { from: 'bot', text: 'Error en la consulta' }]);
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 overflow-auto p-4 space-y-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        {messages.map((msg, i) => (
          <div key={i} className={`p-2 rounded-lg max-w-xs ${msg.from === 'bot'
            ? 'bg-gray-100 dark:bg-gray-700 self-start'
            : 'bg-blue-100 dark:bg-blue-700 self-end'} text-gray-800 dark:text-gray-200`}>{msg.text}</div>
        ))}
        {loading && <Spinner />}
      </div>
      <div className="mt-4 flex bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-l-lg outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          placeholder="Pregunta algo..."
        />
        <button
          onClick={sendMessage}
          className="px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg"
        >Enviar</button>
      </div>
    </div>
  );
}
