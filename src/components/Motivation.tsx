import { Quote, Flame, Target, Brain, Zap } from 'lucide-react';

export default function Motivation() {
  const quotes = [
    {
      text: 'La costanza batte il talento quando il talento non è costante.',
      icon: Flame
    },
    {
      text: 'La pressione è un privilegio.',
      icon: Target
    },
    {
      text: 'Il focus crea risultati.',
      icon: Zap
    },
    {
      text: 'La tua mente è il tuo primo allenatore.',
      icon: Brain
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Quote className="w-16 h-16 mx-auto mb-6 text-emerald-400" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            La mentalità vincente
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Le frasi che guidano gli atleti di successo
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {quotes.map((quote, idx) => {
            const IconComponent = quote.icon;
            return (
              <div
                key={idx}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-slate-400 mb-2 text-sm">#MentraMindset</div>
                    <p className="text-xl font-semibold text-white leading-relaxed">
                      {quote.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-8">
            <p className="text-2xl font-bold text-white mb-2">
              La differenza tra buono e grande?
            </p>
            <p className="text-xl text-slate-300">
              La preparazione mentale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
