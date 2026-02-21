import { Brain, Dumbbell, Apple, Users, Search, CheckCircle, Sparkles } from 'lucide-react';

export default function BuildTeam() {
  const professionals = [
    {
      icon: Brain,
      title: 'Psicologo dello Sport',
      description: 'Supporto mentale e preparazione psicologica',
      color: 'from-cyan-500 to-emerald-500'
    },
    {
      icon: Dumbbell,
      title: 'Personal Trainer',
      description: 'Programmi di allenamento personalizzati',
      color: 'from-emerald-500 to-cyan-500'
    },
    {
      icon: Apple,
      title: 'Nutrizionista Certificato',
      description: 'Piano alimentare su misura per te',
      color: 'from-cyan-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Team Multidisciplinare',
      description: 'Coordinamento integrato di tutti i professionisti',
      color: 'from-emerald-500 to-cyan-500'
    }
  ];

  const searchCriteria = [
    'Sport specifico',
    'Livello competitivo',
    'Specializzazione',
    'Obiettivi personali'
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mb-6 mx-auto">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Costruisci il tuo Team di Performance
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Trova i professionisti giusti per te. Tutto integrato nella tua dashboard personale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {professionals.map((prof, idx) => {
            const IconComponent = prof.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${prof.color} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {prof.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {prof.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-emerald-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle className="w-4 h-4" />
                  <span>Disponibile</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Search className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Ricerca Intelligente</h3>
              <p className="text-slate-300 text-lg mb-8">
                Trova il professionista perfetto per il tuo percorso con il nostro sistema di matching avanzato.
              </p>
              <div className="space-y-4">
                {searchCriteria.map((criteria, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-slate-200">{criteria}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">Dr. Marco Rossi</div>
                    <div className="text-sm text-slate-400">Psicologo dello Sport</div>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-semibold">Match 98%</span>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Dumbbell className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">Laura Bianchi</div>
                    <div className="text-sm text-slate-400">Personal Trainer</div>
                  </div>
                  <div className="flex items-center gap-1 text-cyan-400">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-semibold">Match 95%</span>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Apple className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">Alessandro Verdi</div>
                    <div className="text-sm text-slate-400">Nutrizionista</div>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-semibold">Match 92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-emerald-600" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Generazione Nuovi Programmi</h4>
            <p className="text-slate-600">
              Richiedi nuovi cicli di allenamento, aggiorna obiettivi e modifica il piano alimentare quando vuoi.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-cyan-600" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Coordinamento Totale</h4>
            <p className="text-slate-600">
              Il tuo team lavora in sinergia. Tutti i professionisti hanno accesso ai tuoi dati e progressi.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Adattamento Automatico</h4>
            <p className="text-slate-600">
              La piattaforma adatta automaticamente il tuo percorso in base ai risultati e feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
