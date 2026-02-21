import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-3xl font-display font-bold italic text-white flex items-center gap-2 mb-6">
              <span className="text-red-600">DIADEMA</span> <span className="text-white">SP</span>
            </a>
            <p className="text-gray-500 max-w-md mb-6">
              O servidor de GTA RP mais completo do Brasil. Venha fazer parte dessa história e construa seu legado em uma cidade onde tudo é possível.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-red-500 transition-colors">Início</a></li>
              <li><a href="#" className="text-gray-500 hover:text-red-500 transition-colors">Regras</a></li>
              <li><a href="#" className="text-gray-500 hover:text-red-500 transition-colors">Whitelist</a></li>
              <li><a href="#" className="text-gray-500 hover:text-red-500 transition-colors">Loja VIP</a></li>
              <li><a href="#" className="text-gray-500 hover:text-red-500 transition-colors">Suporte</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-6">Status</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                <span className="text-gray-400">Servidor Online</span>
              </div>
              <div className="text-gray-500 text-sm">
                <p>Jogadores: <span className="text-white font-bold">482</span>/1024</p>
                <p>Ping: <span className="text-green-500">12ms</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; 2024 Diadema SP Roleplay. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-sm">
            Desenvolvido com <span className="text-red-900">♥</span> por DevTeam
          </p>
        </div>
      </div>
    </footer>
  );
}
