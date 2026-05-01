import React from 'react';
import { Check } from 'lucide-react';
import { PACKS } from '../constants';

const PricingSection: React.FC = () => {
  const scrollToOrder = (packId: string) => {
    // This is a simple implementation. In a real app, this might update a context or URL param
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
      // Dispatch a custom event or use context to pre-select the pack would be better in a larger app
      // For this single file scope, we rely on the user selecting it manually or basic focus
    }
  };

  return (
    <section id="packs" className="py-24 px-4 bg-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-forest mb-4">Nos Packs Gourmands</h2>
          <p className="text-forest/70">Choisissez la formule qui convient à votre appétit.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
          {PACKS.map((pack) => (
            <div 
              key={pack.id}
              className={`flex-1 rounded-3xl p-8 relative flex flex-col ${
                pack.isPopular 
                  ? 'bg-forest text-white shadow-2xl scale-105 z-10 border-2 border-ochre' 
                  : 'bg-white text-forest shadow-xl border border-gray-100'
              }`}
            >
              {pack.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-terracotta text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-md">
                  Best Seller
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-display font-bold mb-2 ${pack.isPopular ? 'text-white' : 'text-forest'}`}>
                  {pack.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${pack.isPopular ? 'text-ochre' : 'text-terracotta'}`}>
                    {pack.price}
                  </span>
                </div>
                <p className={`mt-2 text-sm opacity-80 ${pack.isPopular ? 'text-gray-300' : 'text-gray-500'}`}>
                  {pack.quantity}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {pack.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className={`p-1 rounded-full ${pack.isPopular ? 'bg-white/20' : 'bg-forest/10'}`}>
                      <Check size={14} className={pack.isPopular ? 'text-ochre' : 'text-forest'} />
                    </div>
                    <span className={pack.isPopular ? 'text-gray-100' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollToOrder(pack.id)}
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  pack.isPopular 
                    ? 'bg-ochre text-forest hover:bg-white' 
                    : 'bg-forest text-white hover:bg-terracotta'
                }`}
              >
                Je choisis ce pack
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;