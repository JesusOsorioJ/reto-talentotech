import React, { useState } from 'react';
import api from '../api/axios';
import Spinner from '../components/Spinner';

export default function ChatbotPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    const userMsg = { from: 'user', text: input };
    setMessages([...messages, userMsg]);
    try {
      const { data } = await api.post('/chatbot', { query: input });
      setMessages(msgs => [...msgs, { from: 'bot', text: data.reply }]);
    } catch(err) {
      setMessages(msgs => [...msgs, { from: 'bot', text: 'Error en la consulta', err }]);
    } finally { setLoading(false); setInput(''); }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto p-4 space-y-4 bg-white rounded-lg shadow">
        {messages.map((msg,i) => (
          <div key={i} className={`p-2 rounded-lg max-w-xs ${msg.from==='bot'? 'bg-gray-100 self-start':'bg-blue-100 self-end'}`}>{msg.text}</div>
        ))}
        {loading && <Spinner />}
      </div>
      <div className="mt-4 flex">
        <input
          value={input}
          onChange={e=>setInput(e.target.value)}
          className="flex-1 p-2 border rounded-l-lg outline-none"
          placeholder="Pregunta algo..."
        />
        <button onClick={sendMessage} className="px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">Enviar</button>
      </div>
    </div>
  );
}