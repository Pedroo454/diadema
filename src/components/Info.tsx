import { Info as InfoIcon, Clock, Server, AlertTriangle } from 'lucide-react';

export function Info() {
  return (
    <section className="py-16 bg-dark-bg border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-zinc-900/30 p-6 rounded-xl border border-zinc-800 flex items-start gap-4">
            <div className="bg-red-600/10 p-3 rounded-lg">
              <Clock className="text-red-500 w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Reinícios Diários</h4>
              <p className="text-gray-400 text-sm">
                O servidor reinicia automaticamente às:
                <br />
                <span className="text-white font-mono">06:00, 12:00, 18:00, 00:00</span>
              </p>
            </div>
          </div>

          <div className="bg-zinc-900/30 p-6 rounded-xl border border-zinc-800 flex items-start gap-4">
            <div className="bg-blue-600/10 p-3 rounded-lg">
              <Server className="text-blue-500 w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Informações Técnicas</h4>
              <p className="text-gray-400 text-sm">
                IP: <span className="text-white font-mono select-all">connect.diademasp.com</span>
                <br />
                Voz: <span className="text-white">Tokovoip / In-game</span>
              </p>
            </div>
          </div>

          <div className="bg-zinc-900/30 p-6 rounded-xl border border-zinc-800 flex items-start gap-4">
            <div className="bg-yellow-600/10 p-3 rounded-lg">
              <AlertTriangle className="text-yellow-500 w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Regras Básicas</h4>
              <p className="text-gray-400 text-sm">
                • Proibido RDM e VDM
                <br />
                • Valorize sua vida (Amor à Vida)
                <br />
                • Respeite a Staff e Jogadores
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
