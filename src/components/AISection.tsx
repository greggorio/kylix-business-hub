
import React from 'react';
import { MessageCircle, Bot, BarChart3, Calendar } from 'lucide-react';
import { Button } from './ui/button';

const AISection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-kylix-background to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Inteligência Artificial a Serviço do Seu Negócio</h2>
          <p className="section-subtitle">
            Esclareça dúvidas, agende demonstrações e potencialize suas análises com recursos avançados de IA
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-8">
              <div className="flex gap-4 mb-4">
                <div className="bg-kylix-primary/10 p-3 rounded-full">
                  <Bot size={24} className="text-kylix-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-kylix-primary text-xl mb-1">Chatbot Inteligente</h3>
                  <p className="text-kylix-gray">
                    Disponível 24/7 para esclarecer dúvidas, guiar demonstrações e fornecer suporte imediato.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-8">
              <div className="flex gap-4 mb-4">
                <div className="bg-kylix-primary/10 p-3 rounded-full">
                  <BarChart3 size={24} className="text-kylix-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-kylix-primary text-xl mb-1">Análise Preditiva</h3>
                  <p className="text-kylix-gray">
                    Utilize algoritmos avançados para prever tendências de vendas, comportamento de clientes e otimizar seu estoque.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex gap-4 mb-4">
                <div className="bg-kylix-primary/10 p-3 rounded-full">
                  <Calendar size={24} className="text-kylix-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-kylix-primary text-xl mb-1">Agendamento Automatizado</h3>
                  <p className="text-kylix-gray">
                    Marque demonstrações e reuniões diretamente pelo chatbot, que se integra ao seu calendário.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center md:justify-start">
              <Button className="btn-primary flex items-center gap-2">
                <MessageCircle size={18} /> Falar com o assistente
              </Button>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 max-w-md mx-auto">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="bg-kylix-secondary rounded-full w-10 h-10 flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-kylix-primary">Assistente Kylix</h4>
                  <p className="text-xs text-kylix-gray">Online agora</p>
                </div>
              </div>

              <div className="py-6 space-y-4">
                <div className="bg-kylix-background p-3 rounded-lg rounded-tl-none max-w-xs">
                  <p className="text-sm">Olá! Como posso ajudar você hoje com o Kylix ERP?</p>
                </div>
                <div className="bg-kylix-primary/10 p-3 rounded-lg rounded-tr-none max-w-xs ml-auto">
                  <p className="text-sm">Gostaria de conhecer mais sobre o módulo financeiro.</p>
                </div>
                <div className="bg-kylix-background p-3 rounded-lg rounded-tl-none max-w-sm">
                  <p className="text-sm">O módulo financeiro do Kylix oferece controle completo de fluxo de caixa, conciliação bancária e relatórios detalhados. Posso agendar uma demonstração para você?</p>
                </div>
                <div className="bg-kylix-primary/10 p-3 rounded-lg rounded-tr-none max-w-xs ml-auto">
                  <p className="text-sm">Sim, gostaria de agendar para amanhã.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
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

            <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 bg-kylix-primary text-white p-3 rounded-lg shadow-lg hidden md:block">
              <p className="text-sm font-bold">Análise Preditiva</p>
              <p className="text-xs">Previsão de vendas +22% no próximo trimestre</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
