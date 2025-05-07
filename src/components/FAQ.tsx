
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: 'Quanto tempo leva a implementação do Kylix ERP?',
      answer: 'O tempo de implementação varia de acordo com o tamanho da empresa e os módulos escolhidos. Para o plano básico, a implementação pode ser concluída em 1-2 semanas. Para planos mais complexos, pode levar de 1 a 3 meses. Nossa equipe oferece suporte completo durante todo o processo.'
    },
    {
      question: 'É possível personalizar o sistema de acordo com as necessidades específicas da minha empresa?',
      answer: 'Sim, o Kylix ERP foi projetado para ser altamente flexível e personalizável. Podemos adaptar os módulos, relatórios e fluxos de trabalho para atender às necessidades específicas do seu negócio. Nossos consultores trabalham diretamente com você para entender seus processos e implementar as personalizações necessárias.'
    },
    {
      question: 'Como funciona o suporte técnico?',
      answer: 'Oferecemos diferentes níveis de suporte, dependendo do plano escolhido. Todos os planos incluem acesso à nossa base de conhecimento e suporte por e-mail. Os planos Profissional e Enterprise contam com suporte prioritário por telefone e chat. O plano Enterprise oferece suporte 24/7 e um gerente de conta dedicado.'
    },
    {
      question: 'O sistema é acessível de dispositivos móveis?',
      answer: 'Sim, o Kylix ERP possui uma interface responsiva que pode ser acessada de qualquer dispositivo com conexão à internet. Além disso, oferecemos aplicativos nativos para iOS e Android que permitem acesso às principais funcionalidades do sistema em mobilidade.'
    },
    {
      question: 'Quais são os requisitos técnicos para utilizar o Kylix ERP?',
      answer: 'Como somos uma solução baseada em nuvem, os requisitos são mínimos. Você precisará apenas de um navegador web atualizado (Chrome, Firefox, Safari ou Edge) e uma conexão estável com a internet. Não é necessário instalar software adicional ou investir em infraestrutura de servidores.'
    },
    {
      question: 'O Kylix ERP é compatível com outros sistemas que já utilizo?',
      answer: 'Sim, o Kylix ERP oferece diversas integrações nativas com sistemas populares de e-commerce, CRM, marketplaces e plataformas de pagamento. Além disso, disponibilizamos uma API completa e documentada para desenvolvimento de integrações customizadas com qualquer outro sistema.'
    },
    {
      question: 'Existe algum período de teste gratuito?',
      answer: 'Sim, oferecemos um período de teste gratuito de 14 dias para que você possa explorar todas as funcionalidades do Kylix ERP antes de tomar sua decisão. Durante esse período, você terá acesso a todos os módulos e contará com suporte da nossa equipe para orientá-lo.'
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <p className="section-subtitle">
            Tire suas dúvidas sobre o Kylix ERP e descubra como podemos ajudar seu negócio
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-kylix-primary font-semibold text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-kylix-gray">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
