import { motion } from 'motion/react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/losangelesnight/1920/1080?blur=2" 
          alt="Diadema SP Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark-bg"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-red-500 font-display tracking-[0.2em] text-lg md:text-xl mb-4 uppercase font-bold">Bem-vindo à Revolução</h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-2 italic tracking-tighter drop-shadow-2xl">
            DIADEMA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900 text-neon">SP</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
            O Roleplay mais imersivo e sério do Brasil. Sua história começa aqui.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button variant="primary" className="w-full md:w-auto min-w-[200px]">
              Entrar no Discord
            </Button>
            <Button variant="outline" className="w-full md:w-auto min-w-[200px]">
              Fazer Whitelist
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-red-500 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
