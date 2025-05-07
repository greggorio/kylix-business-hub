
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-xl shadow-2xl w-80 md:w-96 overflow-hidden">
          <div className="bg-kylix-primary p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle size={20} className="text-kylix-primary" />
              </div>
              <div>
                <h3 className="text-white font-bold">Atendimento Kylix</h3>
                <p className="text-white/70 text-xs">Online agora</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-white/70 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="h-72 p-4 bg-gray-50 overflow-y-auto">
            <div className="bg-kylix-background p-3 rounded-lg rounded-tl-none mb-3 max-w-[80%]">
              <p className="text-sm">Olá! Como posso ajudar você hoje?</p>
            </div>
            <div className="bg-kylix-primary/10 p-3 rounded-lg rounded-tr-none mb-3 max-w-[80%] ml-auto">
              <p className="text-sm">Gostaria de saber mais sobre os planos.</p>
            </div>
            <div className="bg-kylix-background p-3 rounded-lg rounded-tl-none max-w-[80%]">
              <p className="text-sm">Claro! Temos três planos disponíveis: Básico, Profissional e Enterprise. Cada um com diferentes recursos e capacidades. Você está procurando para uma empresa de qual tamanho?</p>
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-100">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Digite sua mensagem..." 
                className="w-full px-4 py-2 pr-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-kylix-secondary/50"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-kylix-secondary">
                <MessageCircle size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-kylix-secondary hover:bg-kylix-secondary/90 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};

export default FloatingChat;
