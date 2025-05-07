
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

const Pricing = () => {
  const plans = [
    {
      name: 'Básico',
      price: 'R$ 297',
      period: '/mês',
      description: 'Ideal para pequenas empresas que estão começando',
      features: [
        'Até 3 usuários',
        'Módulos Financeiro e Vendas',
        'Suporte por e-mail',
        'Atualizações básicas',
        '5GB de armazenamento'
      ],
      isPopular: false
    },
    {
      name: 'Profissional',
      price: 'R$ 597',
      period: '/mês',
      description: 'Perfeito para empresas em crescimento',
      features: [
        'Até 10 usuários',
        'Todos os módulos básicos',
        'Suporte prioritário',
        'Relatórios avançados',
        'Integrações com e-commerce',
        '20GB de armazenamento'
      ],
      isPopular: true
    },
    {
      name: 'Enterprise',
      price: 'R$ 997',
      period: '/mês',
      description: 'Para empresas de médio e grande porte',
      features: [
        'Usuários ilimitados',
        'Todos os módulos',
        'Suporte 24/7',
        'Personalização avançada',
        'API completa',
        'Armazenamento ilimitado',
        'Treinamento personalizado'
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-kylix-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Planos e Preços</h2>
          <p className="section-subtitle">
            Escolha o plano ideal para o tamanho e as necessidades do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg border overflow-hidden transition-all ${
                plan.isPopular ? 'border-kylix-secondary scale-105 md:transform' : 'border-gray-100 hover:border-kylix-secondary/30'
              }`}
            >
              {plan.isPopular && (
                <div className="bg-kylix-secondary text-white py-2 text-center text-sm font-medium">
                  Mais Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-kylix-primary mb-2">{plan.name}</h3>
                <p className="text-kylix-gray mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-kylix-primary">{plan.price}</span>
                  <span className="text-kylix-gray">{plan.period}</span>
                </div>
                <Button 
                  className={`w-full mb-8 ${
                    plan.isPopular 
                      ? 'bg-kylix-secondary hover:bg-kylix-secondary/90' 
                      : 'bg-kylix-primary hover:bg-kylix-primary/90'
                  } text-white`}
                >
                  Começar Agora
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check size={16} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-kylix-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-kylix-primary mb-2">Precisa de um plano personalizado?</h3>
            <p className="text-kylix-gray">
              Converse com nossa equipe para criar um plano sob medida para o seu negócio
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button className="bg-kylix-primary hover:bg-kylix-primary/90 text-white">
              Solicitar Orçamento
            </Button>
            <Button variant="outline" className="border-kylix-primary/20 text-kylix-primary hover:bg-kylix-background">
              Falar com Consultor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
