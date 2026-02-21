import { Trophy, Zap, Users, Target, Heart, TrendingUp } from 'lucide-react';

export default function ForWho() {
  const audiences = [
    {
      icon: Trophy,
      title: 'Atleti Competitivi',
      description: 'Porta la tua performance al livello successivo',
      gradient: 'from-emerald-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Giovani Talenti',
      description: 'Costruisci le basi per una carriera di successo',
      gradient: 'from-cyan-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Professionisti',
      description: 'Ottimizza ogni aspetto della tua preparazione',
      gradient: 'from-emerald-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Team e Società Sportive',
      description: 'Gestione integrata di tutto il roster',
      gradient: 'from-cyan-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Preparazione Pre-Stagionale',
      description: 'Inizia la stagione al massimo della forma',
      gradient: 'from-emerald-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Recupero Post-Infortunio',
      description: 'Supporto mentale e motivazionale per il rientro',
      gradient: 'from-cyan-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Per chi è Mentra
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Una piattaforma pensata per chi vuole eccellere nello sport
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, idx) => {
            const IconComponent = audience.icon;
            return (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${audience.gradient} opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>

                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${audience.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-slate-600">
                    {audience.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
