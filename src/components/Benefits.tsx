
import React from 'react';
import { Check } from 'lucide-react';

const Benefits = () => {
  const benefitsList = [
    {
      title: 'Aumento da produtividade',
      description: 'Automatize tarefas repetitivas e libere sua equipe para focar no que realmente importa.'
    },
    {
      title: 'Redução de custos operacionais',
      description: 'Identifique ineficiências e elimine desperdícios em todos os setores da empresa.'
    },
    {
      title: 'Tomada de decisão baseada em dados',
      description: 'Acesse informações precisas e em tempo real para tomar decisões estratégicas.'
    },
    {
      title: 'Integração entre departamentos',
      description: 'Conecte todas as áreas da empresa, eliminando silos de informação e duplicidade de trabalho.'
    },
    {
      title: 'Automação de processos',
      description: 'Configure fluxos de trabalho automatizados para aumentar a eficiência operacional.'
    },
    {
      title: 'Segurança e conformidade',
      description: 'Mantenha seus dados protegidos e sua empresa em conformidade com legislações e regulamentações.'
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Benefícios do Kylix ERP</h2>
          <p className="section-subtitle">
            Descubra como nossa solução pode transformar a gestão do seu negócio
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-1 gap-6">
              {benefitsList.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-4 bg-kylix-background rounded-lg hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0">
                    <div className="bg-kylix-secondary rounded-full p-1">
                      <Check size={16} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-kylix-primary mb-1">{benefit.title}</h3>
                    <p className="text-kylix-gray text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -z-10 w-80 h-80 bg-kylix-primary/5 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop" 
                alt="Equipe usando Kylix ERP" 
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-kylix-primary">+45%</p>
                  <p className="text-sm text-kylix-gray">Aumento de eficiência</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-kylix-secondary text-white rounded-lg shadow-lg p-4">
                <div className="text-center">
                  <p className="text-3xl font-bold">-30%</p>
                  <p className="text-sm">Custos operacionais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
