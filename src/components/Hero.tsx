
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-24 hero-gradient min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-kylix-primary mb-6 leading-tight">
              Kylix ERP: <br />
              <span className="text-kylix-secondary">Potencialize</span> a Gestão do Seu Negócio
            </h1>
            <p className="text-lg md:text-xl text-kylix-gray mb-8 max-w-lg">
              Solução completa e integrada para gestão empresarial que impulsiona a eficiência e o crescimento do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center gap-2 text-base">
                Solicitar Demonstração <ArrowRight size={16} />
              </Button>
              <Button variant="outline" className="btn-secondary text-base">
                Conhecer Funcionalidades
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="animate-float rounded-xl shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop"
                  alt="Dashboard Kylix ERP"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-kylix-secondary text-white rounded-lg p-4 shadow-lg">
                <p className="font-bold text-lg">+300%</p>
                <p className="text-sm">Aumento de produtividade</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg">
                <p className="font-bold text-kylix-primary text-lg">-25%</p>
                <p className="text-sm text-kylix-gray">Redução de custos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 py-8 flex flex-wrap justify-center gap-12 items-center text-kylix-gray">
          <div className="flex flex-col items-center">
            <span className="font-bold text-2xl text-kylix-primary">+1.500</span>
            <span className="text-sm">Empresas atendidas</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-2xl text-kylix-primary">12 anos</span>
            <span className="text-sm">No mercado</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-2xl text-kylix-primary">+95%</span>
            <span className="text-sm">Satisfação</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-2xl text-kylix-primary">24/7</span>
            <span className="text-sm">Suporte técnico</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
