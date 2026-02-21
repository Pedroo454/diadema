import { motion } from 'motion/react';
import { RefreshCw, CheckCircle2 } from 'lucide-react';

const updates = [
  {
    version: "v2.5",
    date: "20/02/2026",
    changes: [
      "Novo sistema de concessionária com test-drive",
      "Otimização de FPS em áreas densas",
      "Adicionado novos veículos importados",
      "Correção de bugs no inventário"
    ]
  },
  {
    version: "v2.4",
    date: "15/02/2026",
    changes: [
      "Reformulação da Praça Central",
      "Novo fardamento para Polícia Militar",
      "Sistema de casas com decoração customizável",
      "Ajustes na economia de empregos legais"
    ]
  },
  {
    version: "v2.3",
    date: "10/02/2026",
    changes: [
      "Implementação do sistema de pets",
      "Novas animações de interação",
      "Melhoria no sistema de rádio",
    ]
  }
];

export function Updates() {
  return (
    <section id="updates" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <RefreshCw className="text-red-500 w-8 h-8 animate-spin-slow" />
          <h3 className="text-3xl font-bold text-white">ÚLTIMAS <span className="text-red-600">ATUALIZAÇÕES</span></h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {updates.map((update, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-red-600/30 transition-colors"
            >
              <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-4">
                <span className="text-2xl font-display font-bold text-white">{update.version}</span>
                <span className="text-sm text-gray-500 font-mono">{update.date}</span>
              </div>
              <ul className="space-y-3">
                {update.changes.map((change, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>{change}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
