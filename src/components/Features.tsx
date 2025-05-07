
import React from 'react';
import { Database, ShoppingCart, Box, Truck, Factory, Kanban, Users, ChartBar } from 'lucide-react';

const Features = () => {
  const modules = [
    {
      title: 'Gestão Financeira',
      description: 'Controle completo de contas a pagar, contas a receber, fluxo de caixa e conciliação bancária',
      icon: Database,
    },
    {
      title: 'Vendas',
      description: 'Gestão de pedidos, orçamentos e tabelas de preço personalizadas',
      icon: ShoppingCart,
    },
    {
      title: 'Estoque',
      description: 'Inventário em tempo real, controle de entrada/saída e gestão de múltiplos depósitos',
      icon: Box,
    },
    {
      title: 'Compras',
      description: 'Cotações, pedidos e relacionamento com fornecedores',
      icon: Truck,
    },
    {
      title: 'Produção',
      description: 'Controle de produção, insumos e planejamento',
      icon: Factory,
    },
    {
      title: 'Gestão de Tarefas',
      description: 'Sistema de tarefas, histórico e quadro Kanban',
      icon: Kanban,
    },
    {
      title: 'Gestão de Clientes',
      description: 'Cadastro completo, segmentação e histórico de relacionamento',
      icon: Users,
    },
    {
      title: 'Relatórios e Dashboards',
      description: 'Visualização de dados em tempo real para tomada de decisões',
      icon: ChartBar,
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Principais Módulos e Funcionalidades</h2>
          <p className="section-subtitle">
            Uma plataforma completa e integrada para gerenciar todos os aspectos do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all hover:border-kylix-secondary/30"
            >
              <div className="bg-kylix-background p-3 rounded-lg inline-block mb-4">
                <module.icon size={28} className="text-kylix-secondary" />
              </div>
              <h3 className="text-xl font-bold text-kylix-primary mb-3">{module.title}</h3>
              <p className="text-kylix-gray">{module.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-kylix-background rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-kylix-secondary/10 to-transparent"></div>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold text-kylix-primary mb-4">Tudo o que você precisa em um só lugar</h3>
              <p className="text-kylix-gray mb-6">
                O Kylix ERP oferece uma visão completa e integrada do seu negócio, permitindo que você tome decisões
                estratégicas com base em dados precisos e em tempo real.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-kylix-primary"></div>
                  <span className="text-kylix-gray">Integração entre departamentos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-kylix-primary"></div>
                  <span className="text-kylix-gray">Processos automatizados</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-kylix-primary"></div>
                  <span className="text-kylix-gray">Atualizações constantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-kylix-primary"></div>
                  <span className="text-kylix-gray">Layout personalizável</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop"
                alt="Dashboard Kylix integrado"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
