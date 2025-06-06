'use client';

import { useChat } from 'ai/react';

export default function NaoAIChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto stretch">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length > 0 ? (
          messages.map(m => (
            <div
              key={m.id}
              className={`whitespace-pre-wrap ${m.role === 'user' ? 'text-right' : 'text-left'}`}
            >
              <span
                className={`inline-block px-4 py-2 rounded-lg ${m.role === 'user' ? 'bg-q-lila text-q-indigo' : 'bg-q-violeta text-q-blanco-calido'}`}
              >
                {m.role === 'user' ? 'Tú: ' : 'NaoAI: '}
                {m.content}
              </span>
            </div>
          ))
        ) : (
          <div className="text-center text-q-gris">
            Soy NaoAI. Pregúntame sobre los misterios del universo o los de tu propio ser.
          </div>
        )}

        {isLoading && <div className="text-center text-q-lila">NaoAI está pensando...</div>}
      </div>

      <form onSubmit={handleSubmit} className="p-4">
        <input
          className="w-full p-2 border border-q-lila/50 rounded-md bg-q-indigo focus:outline-none focus:ring-2 focus:ring-q-lila"
          value={input}
          placeholder="Escribe tu mensaje aquí..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
