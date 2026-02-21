import { motion } from 'motion/react';

const factions = [
  { name: "Polícia Militar", color: "from-blue-900 to-blue-600", type: "Legal" },
  { name: "ROCAM", color: "from-yellow-700 to-yellow-500", type: "Legal" },
  { name: "Hospital", color: "from-emerald-800 to-emerald-500", type: "Legal" },
  { name: "Mecânica", color: "from-orange-800 to-orange-500", type: "Legal" },
  { name: "Bombeiros", color: "from-red-800 to-red-500", type: "Legal" },
  { name: "Jurídico", color: "from-slate-800 to-slate-500", type: "Legal" },
];

export function Factions() {
  return (
    <section className="py-20 bg-zinc-950 border-y border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-2">ORGANIZAÇÕES LEGAIS</h3>
          <p className="text-gray-500">Construa uma carreira de sucesso na cidade</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {factions.map((faction, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`h-32 rounded-lg bg-gradient-to-br ${faction.color} p-4 flex flex-col justify-end items-start relative overflow-hidden group cursor-pointer`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
              <span className="relative z-10 text-xs font-bold uppercase tracking-wider bg-black/50 px-2 py-1 rounded mb-2 text-white/80">
                {faction.type}
              </span>
              <h4 className="relative z-10 text-white font-bold font-display uppercase leading-tight">
                {faction.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
