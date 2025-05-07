
import React from 'react';
import { BookOpen, ShieldCheck, Building } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-kylix-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Sobre o Kylix</h2>
          <p className="section-subtitle">
            Uma plataforma completa para transformar a maneira como você gerencia sua empresa
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2">
            <p className="text-lg text-kylix-gray mb-6">
              O Kylix ERP é uma solução empresarial desenvolvida para otimizar e integrar 
              todos os processos do seu negócio em uma única plataforma. Com mais de 12 anos 
              no mercado, nosso sistema é resultado da combinação entre tecnologia avançada e 
              profundo conhecimento em gestão empresarial.
            </p>
            <p className="text-lg text-kylix-gray mb-6">
              Nossa missão é proporcionar às empresas, independentemente do seu tamanho, 
              as ferramentas necessárias para tomar decisões estratégicas baseadas em dados 
              confiáveis e em tempo real, aumentando a eficiência operacional e impulsionando 
              o crescimento sustentável.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="flex items-start gap-4">
                <div className="bg-kylix-primary/10 p-3 rounded-full">
                  <ShieldCheck size={24} className="text-kylix-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-kylix-primary mb-2">Segurança de Dados</h3>
                  <p className="text-kylix-gray">Proteção total com criptografia avançada e backups automáticos</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-kylix-primary/10 p-3 rounded-full">
                  <Building size={24} className="text-kylix-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-kylix-primary mb-2">Experiência Comprovada</h3>
                  <p className="text-kylix-gray">Mais de 1.500 empresas confiam no Kylix ERP</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-kylix-primary/10 p-3 rounded-full">
                  <BookOpen size={24} className="text-kylix-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-kylix-primary mb-2">Treinamento Completo</h3>
                  <p className="text-kylix-gray">Suporte na implementação e capacitação da equipe</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative">
              <div className="absolute -z-10 w-72 h-72 bg-kylix-secondary/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop" 
                alt="Equipe Kylix" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute bottom-6 right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-center gap-2">
                  <span className="flex h-3 w-3 bg-green-500 rounded-full"></span>
                  <p className="font-semibold text-kylix-primary">96% de retenção de clientes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
