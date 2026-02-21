import { motion } from 'motion/react';

const images = [
  "https://picsum.photos/seed/gta1/800/600",
  "https://picsum.photos/seed/gta2/800/600",
  "https://picsum.photos/seed/gta3/800/600",
  "https://picsum.photos/seed/gta4/800/600",
  "https://picsum.photos/seed/gta5/800/600",
  "https://picsum.photos/seed/gta6/800/600",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-video group overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-bold uppercase tracking-widest border-2 border-white px-4 py-2">Ver Foto</span>
              </div>
              <img 
                src={src} 
                alt={`Gallery ${index}`} 
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
