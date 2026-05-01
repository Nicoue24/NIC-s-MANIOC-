import React from 'react';
import { Instagram, Facebook, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-forest text-cream py-12 px-4 border-t border-white/10">
      <div className="container mx-auto flex flex-col items-center justify-center">
        
        <div className="text-3xl font-display font-bold mb-6">
          Nic's <span className="text-terracotta">Manioc</span>
        </div>

        <div className="flex gap-6 mb-8">
          <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-terracotta transition-colors text-white">
            <Instagram size={24} />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-terracotta transition-colors text-white">
            <Facebook size={24} />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-terracotta transition-colors text-white">
            <Twitter size={24} />
          </a>
        </div>

        <div className="text-white/40 text-sm font-light text-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} Nic's Manioc. Tous droits réservés.</p>
          <p className="flex items-center justify-center gap-1">
            Fait avec <Heart size={12} className="text-red-500 fill-current" /> et beaucoup de passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;