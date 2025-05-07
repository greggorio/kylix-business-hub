
import React, { useState } from 'react';
import { Bell, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Newsletter = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-kylix-primary p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bell size={18} className="text-white" />
            <h3 className="text-white font-medium">Novidades Kylix</h3>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-white/70 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="p-6">
          {isSubscribed ? (
            <div className="text-center">
              <div className="bg-green-100 text-green-700 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Bell size={24} />
              </div>
              <h4 className="font-bold text-kylix-primary mb-2">Obrigado por se inscrever!</h4>
              <p className="text-sm text-kylix-gray">
                Você receberá as novidades do Kylix ERP diretamente no seu email.
              </p>
            </div>
          ) : (
            <>
              <h4 className="font-bold text-kylix-primary mb-2">Inscreva-se em nossa newsletter</h4>
              <p className="text-sm text-kylix-gray mb-4">
                Receba novidades, atualizações e conteúdos exclusivos sobre gestão empresarial.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="flex gap-2">
                  <Input 
                    type="email" 
                    placeholder="Seu melhor email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 border-gray-200"
                    required
                  />
                  <Button type="submit" className="bg-kylix-secondary hover:bg-kylix-secondary/90 text-white">
                    Inscrever
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
