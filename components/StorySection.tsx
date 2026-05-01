import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const StorySection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const patternY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} id="story" className="py-24 px-4 bg-forest text-cream relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div 
        style={{ y: patternY }}
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
      >
         <svg width="100%" height="100%">
            <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-circles)" />
         </svg>
      </motion.div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 order-2 lg:order-1">
             <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-ochre rounded-tl-3xl"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-terracotta rounded-br-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop" 
                  alt="Nic, fondateur souriant" 
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
             </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-ochre font-display font-bold text-xl uppercase tracking-widest mb-2">L'Esprit Nic's</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">Le Rêve d'un <br/>Petit Gourmand</h3>
            
            <div className="space-y-6 text-lg font-light leading-relaxed text-gray-200">
              <div className="float-right ml-6 mb-4 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-2 border-ochre/30 rotate-3 hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1613919113166-2990052bb352?q=80&w=400&auto=format&fit=crop" 
                  alt="Bol de chips de manioc" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p>
                Tout a commencé à Cotonou, non pas dans une salle de réunion, mais dans la cuisine bruyante et parfumée de Maman Célestine.
              </p>
              <p>
                Alors que ses amis rêvaient de devenir pilotes ou médecins, le petit Nic, lui, avait une ambition différente. Il voulait être le <strong className="text-ochre font-semibold">"Roi du Manioc"</strong>. 
              </p>
              <p>
                Ses après-midis ? Il les passait à piler poivre, gingembre et piment, cherchant le mélange parfait qui ferait danser les papilles. Ce qui semblait être un jeu d'enfant est devenu une obsession, puis une vocation.
              </p>
              <p>
                Aujourd'hui, chaque paquet de Nic's Manioc porte en lui cette étincelle : l'insouciance d'un rêve d'enfant et la richesse d'un terroir millénaire.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="font-handwriting text-3xl text-terracotta transform -rotate-2">
                "Fait avec le coeur, pour le vôtre."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StorySection;