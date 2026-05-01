import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const scrollToOrder = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} id="hero" className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 overflow-hidden relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 text-center lg:text-left z-10"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-ochre/20 text-forest font-semibold text-sm tracking-wide uppercase">
              100% Naturel &bull; 100% Croustillant
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-forest leading-[1.1] mb-6">
              L'apéro aux <br/>
              <span className="text-terracotta relative inline-block">
                racines Africaines
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-ochre/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-lg text-forest/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Redécouvrez le manioc sous sa forme la plus noble. Une texture croustillante inégalée, sublimée par des épices rares du terroir africain. 
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={scrollToOrder}
                className="group bg-terracotta text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-terracotta/20 hover:bg-forest transition-all flex items-center gap-2"
              >
                Commander mes packs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-forest font-semibold hover:text-terracotta transition-colors underline decoration-ochre underline-offset-4"
              >
                Découvrir l'origine
              </button>
            </div>
          </motion.div>

          {/* Image Content */}
          <div className="lg:w-1/2 relative">
            <motion.div 
              style={{ y: backgroundY }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-ochre/20 to-terracotta/20 rounded-full blur-3xl -z-10"
            ></motion.div>
            <motion.div style={{ y: imageY }}>
              <img 
                src="https://images.unsplash.com/photo-1613919113166-2990052bb352?q=80&w=1000&auto=format&fit=crop" 
                alt="Bol de chips de manioc croustillantes" 
                className="w-full h-auto object-cover rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 ease-out border-4 border-white"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {/* Floating Badge */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: -6 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-cream p-4 md:p-6 rounded-2xl shadow-xl border border-forest/5"
            >
              <span className="block text-3xl md:text-4xl font-display font-bold text-terracotta">10</span>
              <span className="text-sm md:text-base font-medium text-forest uppercase tracking-wider">Saveurs<br/>Uniques</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;