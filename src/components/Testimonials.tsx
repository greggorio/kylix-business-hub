
import React from 'react';
import { User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Mendes',
      position: 'CEO, Indústria Tecnova',
      text: 'O Kylix ERP transformou completamente nossa gestão. Conseguimos reduzir custos operacionais em 30% e aumentar a produtividade da equipe.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Mariana Silva',
      position: 'Diretora Financeira, Comercial Express',
      text: 'A visibilidade que temos agora sobre nossos dados financeiros é extraordinária. As decisões se tornaram muito mais rápidas e assertivas.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Roberto Almeida',
      position: 'Gerente de Operações, Grupo Logística SA',
      text: 'A integração entre os módulos de estoque e produção nos permitiu um controle sem precedentes. O suporte da equipe Kylix é simplesmente excelente.',
      image: 'https://randomuser.me/api/portraits/men/67.jpg'
    }
  ];

  return (
    <section className="section-padding bg-kylix-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <p className="section-subtitle">
            Empresas de diversos segmentos transformaram seus negócios com o Kylix ERP
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-kylix-secondary">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h3 className="font-bold text-kylix-primary">{testimonial.name}</h3>
                  <p className="text-sm text-kylix-gray">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-kylix-gray italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-kylix-gray font-medium mb-4">Junte-se a mais de 1.500 empresas que confiam no Kylix ERP</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center">
                <User size={24} className="mr-2 text-kylix-gray" />
                <span className="font-bold text-xl text-kylix-gray">Cliente {item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
