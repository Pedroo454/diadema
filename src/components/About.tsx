import { motion } from 'motion/react';
import { Shield, Users, Briefcase, Zap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 skew-x-12 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-red-500 font-bold tracking-widest mb-2">SOBRE NÓS</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">UMA NOVA ERA DE <span className="text-red-600">ROLEPLAY</span></h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Diadema SP não é apenas mais uma cidade no FiveM. É um ecossistema vivo, onde cada ação tem uma consequência. 
              Nossa proposta é trazer o equilíbrio perfeito entre a diversão e o roleplay sério (Hard RP).
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Com uma economia balanceada e fiscalizada, garantimos que suas conquistas tenham valor real. 
              Seja você um policial honesto, um médico dedicado ou um líder de organização criminosa, 
              aqui você escreve o seu destino.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-zinc-900/50 p-4 border-l-4 border-red-600">
                <h4 className="text-2xl font-bold text-white mb-1">99.9%</h4>
                <p className="text-sm text-gray-500 uppercase">Uptime</p>
              </div>
              <div className="bg-zinc-900/50 p-4 border-l-4 border-red-600">
                <h4 className="text-2xl font-bold text-white mb-1">+5k</h4>
                <p className="text-sm text-gray-500 uppercase">Jogadores</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-red-600 blur-[100px] opacity-20"></div>
            <img 
              src="https://picsum.photos/seed/policecar/800/600" 
              alt="Roleplay Scene" 
              className="relative z-10 rounded-lg shadow-2xl border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
