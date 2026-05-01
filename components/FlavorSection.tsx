import React from 'react';
import { FLAVORS } from '../constants';
import { motion } from 'motion/react';

const FlavorSection: React.FC = () => {
  return (
    <section id="flavors" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 opacity-20 rotate-12 hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1613919113166-2990052bb352?q=80&w=200&auto=format&fit=crop" 
              alt="Chips décor" 
              className="rounded-full" 
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-forest mb-4">Le Tour d'Afrique en <span className="text-ochre">10 Escales</span></h2>
          <p className="text-forest/70 max-w-2xl mx-auto">
            Chaque sachet est une invitation au voyage. Nous avons sélectionné les meilleures épices pour accompagner la douceur du manioc.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {FLAVORS.map((flavor, index) => (
            <motion.div 
              key={flavor.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-forest/5 hover:-translate-y-1 flex flex-col items-center text-center h-full"
            >
              <div className={`w-16 h-16 ${flavor.color} rounded-full mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                {/* Visual abstraction of spice/flavor using emoji or minimal div */}
                {['🌶️','🥣','🍋','🔥','🥜','🍗','🍛','🌿','🪵','🧂'][flavor.id - 1]}
              </div>
              <h3 className="font-display font-bold text-lg text-forest mb-2">{flavor.name}</h3>
              <p className="text-sm text-forest/70 leading-snug">{flavor.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorSection;