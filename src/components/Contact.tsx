
import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-kylix-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para esclarecer suas dúvidas e mostrar como o Kylix ERP pode transformar seu negócio
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <form className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-kylix-primary mb-6">Solicitar Demonstração</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-kylix-gray mb-1">Nome</label>
                  <Input 
                    id="name" 
                    placeholder="Seu nome" 
                    className="w-full border-gray-200 focus:border-kylix-secondary"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-kylix-gray mb-1">Empresa</label>
                  <Input 
                    id="company" 
                    placeholder="Nome da empresa" 
                    className="w-full border-gray-200 focus:border-kylix-secondary"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-kylix-gray mb-1">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="w-full border-gray-200 focus:border-kylix-secondary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-kylix-gray mb-1">Telefone</label>
                  <Input 
                    id="phone" 
                    placeholder="(00) 00000-0000" 
                    className="w-full border-gray-200 focus:border-kylix-secondary"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-kylix-gray mb-1">Mensagem</label>
                <Textarea 
                  id="message" 
                  placeholder="Como podemos ajudar?" 
                  rows={4}
                  className="w-full border-gray-200 focus:border-kylix-secondary"
                />
              </div>
              
              <Button className="w-full bg-kylix-primary hover:bg-kylix-primary/90 text-white">
                Enviar Mensagem
              </Button>
            </form>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-md h-full">
              <h3 className="text-xl font-bold text-kylix-primary mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-kylix-background p-3 rounded-full">
                    <Phone size={20} className="text-kylix-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-kylix-primary">Telefone</h4>
                    <p className="text-kylix-gray">(11) 4000-5000</p>
                    <p className="text-kylix-gray">0800 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-kylix-background p-3 rounded-full">
                    <Mail size={20} className="text-kylix-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-kylix-primary">Email</h4>
                    <p className="text-kylix-gray">contato@kylix.com.br</p>
                    <p className="text-kylix-gray">suporte@kylix.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-kylix-background p-3 rounded-full">
                    <MapPin size={20} className="text-kylix-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-kylix-primary">Endereço</h4>
                    <p className="text-kylix-gray">Av. Paulista, 1000 - Bela Vista</p>
                    <p className="text-kylix-gray">São Paulo - SP, 01310-100</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-kylix-background rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-kylix-secondary p-3 rounded-full">
                    <MessageSquare size={20} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-kylix-primary">Suporte via WhatsApp</h4>
                </div>
                <p className="text-kylix-gray mb-4">
                  Converse diretamente com nossa equipe de atendimento através do WhatsApp.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Iniciar Conversa
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
