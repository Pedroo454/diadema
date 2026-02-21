import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { MessageSquare, FileText, CheckCircle, Play } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Entre no Discord",
    description: "Acesse nosso servidor oficial para ler as regras e interagir com a comunidade."
  },
  {
    id: 2,
    icon: <FileText className="w-6 h-6" />,
    title: "Faça a Whitelist",
    description: "Realize o teste de whitelist para provar que conhece as regras de Roleplay."
  },
  {
    id: 3,
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Aguarde Aprovação",
    description: "Nossa equipe analisará sua resposta. O resultado sai em poucos minutos."
  },
  {
    id: 4,
    icon: <Play className="w-6 h-6" />,
    title: "Conecte-se",
    description: "Pegue o IP da cidade na sala #conectar e inicie sua jornada!"
  }
];

export function HowToJoin() {
  return (
    <section id="join" className="py-24 bg-dark-bg relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-red-500 font-bold tracking-widest mb-2">PASSO A PASSO</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-10">COMO <span className="text-red-600">ENTRAR NA CIDADE</span></h3>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-zinc-900 rounded-full border border-red-900/50 flex items-center justify-center text-red-500 font-bold text-xl relative">
                      {step.id}
                      {index !== steps.length - 1 && (
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-zinc-800"></div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <Button className="w-full md:w-auto">
                Iniciar Processo Agora
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-2xl transform rotate-3"></div>
            <img 
              src="https://picsum.photos/seed/gtacharacter/600/800" 
              alt="Character Creation" 
              className="rounded-2xl shadow-2xl relative z-10 border border-zinc-800"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
