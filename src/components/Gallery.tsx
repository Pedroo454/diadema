import { motion } from 'motion/react';

const galleryItems = [
  {
    src: "https://picsum.photos/seed/sportscar/800/600",
    category: "Veículos Exclusivos",
    caption: "Frota de importados e viaturas personalizadas"
  },
  {
    src: "https://picsum.photos/seed/policeaction/800/600",
    category: "Ação Policial",
    caption: "Operações táticas e perseguições intensas"
  },
  {
    src: "https://picsum.photos/seed/hospital/800/600",
    category: "SAMU & Resgate",
    caption: "Equipe médica preparada para qualquer emergência"
  },
  {
    src: "https://picsum.photos/seed/nightparty/800/600",
    category: "Vida Noturna",
    caption: "Festas e eventos exclusivos toda semana"
  },
  {
    src: "https://picsum.photos/seed/meeting/800/600",
    category: "Roleplay Sério",
    caption: "Interações imersivas e histórias únicas"
  },
  {
    src: "https://picsum.photos/seed/citynight/800/600",
    category: "Cidade Viva",
    caption: "Cenários urbanos detalhados e realistas"
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-red-500 font-bold tracking-widest mb-2">GALERIA</h2>
            <h3 className="text-4xl font-bold text-white">A VIDA EM <span className="text-red-600">DIADEMA</span></h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-video group overflow-hidden rounded-xl cursor-pointer border border-zinc-800 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-all z-10"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-red-500 text-xs font-bold uppercase tracking-wider mb-1 block">
                  {item.category}
                </span>
                <h4 className="text-white font-bold text-lg leading-tight group-hover:text-red-50 transition-colors">
                  {item.caption}
                </h4>
              </div>

              <img 
                src={item.src} 
                alt={item.category} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
