import { motion } from 'motion/react';
import { Shield, MapPin } from 'lucide-react';

const zones = [
  { name: "Praça Central", description: "Ponto de encontro principal. Proibido qualquer ato ilícito ou violência." },
  { name: "Hospital", description: "Área de atendimento médico. Respeite o trabalho dos paramédicos." },
  { name: "Delegacia", description: "Sede da força policial. Área de segurança máxima." },
  { name: "Mecânica", description: "Área de reparos e customização. Mantenha a ordem." },
];

export function SafeZones() {
  return (
    <section className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12 text-green-500" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">SAFE ZONES</h3>
          <p className="text-gray-500">Áreas seguras onde o PVP é estritamente proibido</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {zones.map((zone, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-zinc-900/80 p-6 rounded-lg border-l-4 border-green-500 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-green-500 w-5 h-5" />
                <h4 className="text-xl font-bold text-white">{zone.name}</h4>
              </div>
              <p className="text-gray-400 text-sm">{zone.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
