import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { ShieldCheck, UserPlus, Star } from 'lucide-react';

export function Staff() {
  return (
    <section id="staff" className="py-24 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-zinc-900/80 border border-red-900/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-[0_0_50px_rgba(220,38,38,0.1)]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-red-500 w-8 h-8" />
                <h2 className="text-red-500 font-bold tracking-widest uppercase">Faça Parte da Equipe</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">SEJA <span className="text-red-600">STAFF</span></h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Estamos procurando pessoas dedicadas e maduras para ajudar a manter a ordem e a qualidade do roleplay em nossa cidade. 
                Se você tem experiência, paciência e vontade de ajudar, venha fazer parte da nossa administração.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-400">
                  <Star className="text-red-500 w-5 h-5" />
                  <span>Benefícios exclusivos in-game e no Discord</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <UserPlus className="text-red-500 w-5 h-5" />
                  <span>Oportunidade de crescimento na hierarquia</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <ShieldCheck className="text-red-500 w-5 h-5" />
                  <span>Ajude a construir uma comunidade melhor</span>
                </li>
              </ul>

              <Button variant="primary" className="w-full md:w-auto">
                Aplicar para Staff
              </Button>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-red-600 blur-[80px] opacity-20 rounded-full"></div>
              <motion.img 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                src="https://picsum.photos/seed/staff/500/500" 
                alt="Staff Team" 
                className="relative z-10 rounded-xl border-2 border-zinc-800 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
