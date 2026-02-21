import { motion } from 'motion/react';
import { DollarSign, Skull, Briefcase, Siren, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: <DollarSign className="w-8 h-8 text-red-500" />,
    title: "Economia Realista",
    description: "Sistema econômico balanceado onde o dinheiro tem valor. Inflação controlada e mercado dinâmico."
  },
  {
    icon: <Skull className="w-8 h-8 text-red-500" />,
    title: "Organizações",
    description: "Sistemas complexos para organizações e grupos, com hierarquia e gestão."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-red-500" />,
    title: "Empregos Legais",
    description: "Desde mecânico até advogado. Carreira pública e privada com progressão de cargos."
  },
  {
    icon: <Siren className="w-8 h-8 text-red-500" />,
    title: "Polícia & SAMU",
    description: "Corporações ativas, treinadas e com hierarquia séria. Viaturas exclusivas e fardas personalizadas."
  },
  {
    icon: <Users className="w-8 h-8 text-red-500" />,
    title: "Comunidade Ativa",
    description: "Staff presente 24/7, suporte rápido e eventos semanais para integrar a comunidade."
  },
  {
    icon: <Trophy className="w-8 h-8 text-red-500" />,
    title: "Eventos Exclusivos",
    description: "Corridas de rua, festas em iates, campeonatos de luta e muito mais."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-red-500 font-bold tracking-widest mb-2">DIFERENCIAIS</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">POR QUE ESCOLHER <span className="text-red-600">DIADEMA SP?</span></h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 hover:border-red-600/50 transition-all duration-300 group hover:bg-zinc-900"
            >
              <div className="bg-zinc-950 w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-zinc-800 group-hover:border-red-500/50 group-hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
