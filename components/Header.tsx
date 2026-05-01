import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="text-2xl md:text-3xl font-display font-bold text-forest tracking-tight">
            Nic's <span className="text-terracotta">Manioc</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-forest">
          <button onClick={() => scrollToSection('flavors')} className="hover:text-terracotta transition-colors">Saveurs</button>
          <button onClick={() => scrollToSection('story')} className="hover:text-terracotta transition-colors">L'Histoire</button>
          <button onClick={() => scrollToSection('packs')} className="hover:text-terracotta transition-colors">Tarifs</button>
          <button 
            onClick={() => scrollToSection('order')} 
            className="bg-forest text-cream px-6 py-2.5 rounded-full font-semibold hover:bg-terracotta transition-all shadow-lg hover:shadow-terracotta/30 transform hover:-translate-y-0.5"
          >
            Goûter l'Afrique
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-forest"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cream shadow-xl border-t border-forest/10 p-6 flex flex-col gap-4 items-center animate-fadeIn">
          <button onClick={() => scrollToSection('flavors')} className="text-lg font-medium text-forest">Saveurs</button>
          <button onClick={() => scrollToSection('story')} className="text-lg font-medium text-forest">L'Histoire</button>
          <button onClick={() => scrollToSection('packs')} className="text-lg font-medium text-forest">Tarifs</button>
          <button 
            onClick={() => scrollToSection('order')} 
            className="bg-terracotta text-white w-full py-3 rounded-xl font-bold mt-2"
          >
            Commander Maintenant
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;