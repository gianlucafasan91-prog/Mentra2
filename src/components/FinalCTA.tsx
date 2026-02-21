import { ArrowRight, Mail, Target, Users, TrendingUp } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-500 via-cyan-500 to-emerald-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Sei pronto a portare la tua performance<br />
            al livello successivo?
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
            Non aspettare. Inizia oggi il tuo percorso verso l'eccellenza.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Target className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Costruisci il tuo percorso</h3>
            <p className="text-white/80">Personalizzato per i tuoi obiettivi</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Costruisci il tuo team</h3>
            <p className="text-white/80">Professionisti al tuo fianco</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <TrendingUp className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Costruisci la tua versione migliore</h3>
            <p className="text-white/80">Ogni giorno un passo avanti</p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Contattaci</h3>
            <a
              href="mailto:gianluca.fasan91@gmail.com"
              className="group inline-flex items-center gap-3 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Mail className="w-6 h-6" />
              gianluca.fasan91@gmail.com
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-white/80 mt-6 text-sm">
              Risponderemo entro 24 ore per iniziare il tuo percorso
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-4">
            <p className="text-2xl font-bold">
              La tua performance. La tua evoluzione. Il tuo successo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
