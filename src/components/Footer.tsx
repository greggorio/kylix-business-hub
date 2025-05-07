
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-kylix-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Kylix<span className="text-kylix-secondary">ERP</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Soluções completas para gestão empresarial que impulsionam o crescimento do seu negócio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Início</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefícios</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Planos</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Recursos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Base de Conhecimento</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Materiais Gratuitos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Parcerias</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-3 text-gray-300">
              <li>(11) 4000-5000</li>
              <li>contato@kylix.com.br</li>
              <li>Av. Paulista, 1000 - Bela Vista</li>
              <li>São Paulo - SP, 01310-100</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-4 mb-4 lg:mb-0">
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Termos de Uso</a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Política de Privacidade</a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Política de Cookies</a>
          </div>
          
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-kylix-secondary" />
            <span className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Kylix ERP. Todos os direitos reservados.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
