import { User, Dumbbell, Apple, Brain, TrendingUp, Target, Activity, Zap, Share2, Cpu, Watch } from 'lucide-react';
import avatarImg from '../../images/foto2.png';

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Come funziona Mentra
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Un sistema integrato che evolve con te
          </p>
        </div>

        <div className="space-y-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mb-6">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                1. Il tuo Avatar di Performance
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                All'iscrizione, crei il tuo Avatar Mentra: una rappresentazione dinamica della tua evoluzione. Visualizza come sei adesso e come diventerai con il programma.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Profilo sportivo e livello competitivo',
                  'Obiettivi stagionali',
                  'Stato mentale iniziale',
                  'Parametri fisici',
                  'Storico allenamenti'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5"></div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3 mb-8">
                <div className="bg-blue-50 border-l-4 border-cyan-500 rounded-r-lg p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <Cpu className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">IA integrata</p>
                      <p className="text-sm text-slate-600">Analisi automatica dei dati per evidenziare miglioramenti e punti di sviluppo</p>
                    </div>
                  </div>
                </div>
                <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-4">
                  <div className="flex items-start gap-2">
                    <Watch className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">Sincronizzazione biometrica</p>
                      <p className="text-sm text-slate-600">Condividi i tuoi dati da smartwatch e dispositivi per monitoraggio automatico</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-slate-50 border-l-4 border-emerald-500 rounded-r-lg">
                <p className="text-slate-700 italic">
                  "Ogni sessione ti avvicina alla tua versione migliore."
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200 space-y-4">
              <div className="text-center text-sm font-semibold text-slate-600 mb-6 uppercase tracking-wide">Avatar 3D di Performance</div>
              <div className="bg-white rounded-xl p-4 shadow-sm border-2 border-slate-200">
                <div className="relative rounded-lg overflow-hidden">
                  <img src={avatarImg} alt="Avatar Performance" className="w-full aspect-[4/3] object-cover" />
                  <div className="absolute inset-y-0 left-1/2 w-px bg-slate-200/70"></div>
                  <div className="absolute top-2 left-2 bg-slate-700 text-white text-xs font-bold px-2 py-1 rounded">ADESSO</div>
                  <div className="absolute top-2 right-2 bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded">OBIETTIVO</div>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-600">
                  <div className="text-left">
                    <div className="font-semibold text-slate-900">Stato Attuale</div>
                    <div>Baseline fitness</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-slate-900">Target Performance</div>
                    <div>Con il programma</div>
                  </div>
                </div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4 text-center border border-emerald-200">
                <div className="text-2xl font-bold text-emerald-600 mb-1">Evoluzione Prevista</div>
                <div className="text-sm text-slate-600">+35% performance in 12 settimane</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-8 border border-emerald-100">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Dumbbell className="w-8 h-8 text-emerald-600 mb-3" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">24</div>
                  <div className="text-sm text-slate-600">Sessioni completate</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <TrendingUp className="w-8 h-8 text-cyan-600 mb-3" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">+15%</div>
                  <div className="text-sm text-slate-600">Miglioramento</div>
                </div>
                <div className="col-span-2 bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-sm text-slate-500 mb-3">Carico settimanale</div>
                  <div className="flex gap-1">
                    {[75, 85, 60, 90, 70, 80, 65].map((height, idx) => (
                      <div key={idx} className="flex-1 bg-slate-100 rounded-t">
                        <div
                          className="bg-gradient-to-t from-emerald-500 to-cyan-500 rounded-t transition-all"
                          style={{ height: `${height}px` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mb-6">
                <Dumbbell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                2. Programma di Allenamento Personalizzato
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                Piano settimanale generato da trainer certificati con adattamento dinamico in base ai risultati.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Monitoraggio carico, recupero e progressione',
                  'Generazione nuovi programmi su richiesta',
                  'Performance metrics in tempo reale',
                  'Dashboard con progressi verso l\'obiettivo'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5"></div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-lg p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Share2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Collaborazione Team</p>
                    <p className="text-sm text-slate-600">I risultati e le indicazioni sono visibili agli altri professionisti. Tutti lavorano insieme e aggiornano il percorso sulla base della tua evoluzione</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Esempi di Programma</div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="inline-flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-sm font-semibold text-slate-900">Ciclismo</span>
                      </div>
                      <span className="text-[11px] px-2 py-1 rounded bg-emerald-50 text-emerald-700">4×8' @105% FTP</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-700">Potenza: 280–310W</span>
                      <span className="text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-700">FC: 165–175 bpm</span>
                      <span className="text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-700">Distanza: 35 km</span>
                      <span className="text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-700">Velocità: 30–34 km/h</span>
                      <span className="text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-700">Cadenza: 90–100 rpm</span>
                    </div>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li><span className="font-semibold text-slate-900">Riscaldamento</span> · 15' Z2 + 3×1' Z3</li>
                      <li><span className="font-semibold text-slate-900">Intervalli</span> · 4×8' @105% FTP, rec. 4' Z1</li>
                      <li><span className="font-semibold text-slate-900">Defaticamento</span> · 10' Z1</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="inline-flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                        <span className="text-sm font-semibold text-slate-900">Corsa</span>
                      </div>
                      <span className="text-[11px] px-2 py-1 rounded bg-cyan-50 text-cyan-700">Progressivo 10 km</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-700">FC: 150–170 bpm</span>
                      <span className="text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-700">HRV: 78 ms</span>
                      <span className="text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-700">VO2max: 56 ml/kg/min</span>
                      <span className="text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-700">Pace: 4'45\" → 4'05\"/km</span>
                    </div>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li><span className="font-semibold text-slate-900">Riscaldamento</span> · 15' facile + 3 allunghi</li>
                      <li><span className="font-semibold text-slate-900">Progressivo</span> · 10 km da Z2 a Z4</li>
                      <li><span className="font-semibold text-slate-900">Defaticamento</span> · 10' cammino/corsa facile</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-slate-50 border-l-4 border-cyan-500 rounded-r-lg">
                <p className="text-slate-700 italic">
                  "La disciplina costruisce il talento."
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mb-6">
                <Apple className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                3. Programma di Alimentazione Integrato
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                Piano nutrizionale personalizzato con supporto da esperti certificati.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Monitoraggio energia e composizione corporea',
                  'Adattamento in base agli obiettivi',
                  'Supporto per massa, definizione, endurance',
                  'Tracking completo dei macronutrienti'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5"></div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-slate-50 border-l-4 border-emerald-500 rounded-r-lg">
                <p className="text-slate-700 italic">
                  "Il carburante giusto cambia la prestazione."
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-sm text-slate-500 mb-4">Intake giornaliero</div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-700">Proteine</span>
                        <span className="font-semibold text-slate-900">145g / 160g</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-[90%] bg-emerald-500"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-700">Carboidrati</span>
                        <span className="font-semibold text-slate-900">280g / 300g</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-[93%] bg-cyan-500"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-700">Grassi</span>
                        <span className="font-semibold text-slate-900">65g / 70g</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-[92%] bg-emerald-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-sm text-slate-500 mb-3">Esempio giornaliero</div>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li><span className="mr-2">🥣</span><span className="font-semibold text-slate-900">Colazione</span> · Yogurt greco, muesli, frutti di bosco, miele</li>
                    <li><span className="mr-2">🍎</span><span className="font-semibold text-slate-900">Spuntino</span> · Mela e 10 mandorle</li>
                    <li><span className="mr-2">🥗</span><span className="font-semibold text-slate-900">Pranzo</span> · Riso integrale, pollo, verdure grigliate, olio EVO</li>
                    <li><span className="mr-2">🍌</span><span className="font-semibold text-slate-900">Pre-workout</span> · Banana e isotonic drink</li>
                    <li><span className="mr-2">🍝</span><span className="font-semibold text-slate-900">Cena</span> · Pasta al pomodoro, ricotta, insalata mista</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-2xl p-8 border border-cyan-100">
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold text-slate-900">Stato Mentale</div>
                    <Brain className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-cyan-600 mb-1">8.5</div>
                      <div className="text-xs text-slate-600">Focus</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-600 mb-1">9.0</div>
                      <div className="text-xs text-slate-600">Fiducia</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-600 mb-1">7.8</div>
                      <div className="text-xs text-slate-600">Motivazione</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-sm text-slate-500 mb-3">Evoluzione nel tempo</div>
                  <div className="h-32 flex items-end gap-1">
                    {[6, 6.5, 7, 7.5, 8, 8.5, 8.2, 8.8, 9].map((value, idx) => (
                      <div key={idx} className="flex-1 bg-slate-100 rounded-t relative group">
                        <div
                          className="bg-gradient-to-t from-cyan-500 to-emerald-500 rounded-t absolute bottom-0 w-full transition-all"
                          style={{ height: `${(value / 10) * 100}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center justify-between bg-slate-50 rounded px-2 py-1 border border-slate-100">
                      <span className="text-slate-600">Focus</span>
                      <span className="font-semibold text-emerald-600">↑ +2.5</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-50 rounded px-2 py-1 border border-slate-100">
                      <span className="text-slate-600">Motivazione</span>
                      <span className="font-semibold text-emerald-600">↑ +1.8</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-50 rounded px-2 py-1 border border-slate-100">
                      <span className="text-slate-600">VO2max</span>
                      <span className="font-semibold text-emerald-600">↑ +6%</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-50 rounded px-2 py-1 border border-slate-100">
                      <span className="text-slate-600">FTP</span>
                      <span className="font-semibold text-emerald-600">↑ +20W</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                4. Tracciamento Mentale con Psicologo dello Sport
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                Percorso strutturato per il potenziamento mentale.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Monitoraggio motivazione',
                  'Gestione ansia pre-gara',
                  'Resilienza e gestione errore',
                  'Visualizzazione obiettivi',
                  'Costruzione self-talk positivo',
                  'Correlazione stato mentale e performance'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2.5"></div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-slate-50 border-l-4 border-cyan-500 rounded-r-lg">
                <p className="text-slate-700 italic">
                  "La mente guida il corpo."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center text-white">
          <Target className="w-16 h-16 mx-auto mb-6 text-emerald-400" />
          <h3 className="text-3xl font-bold mb-4">Obiettivi e Risultati</h3>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Definisci obiettivi stagionali, target mensili e micro-goal settimanali. Mentra ti mostra l'avanzamento in tempo reale.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <Zap className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <div className="text-sm text-slate-400 mb-1">Percentuale</div>
              <div className="text-2xl font-bold">avanzamento</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <TrendingUp className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-sm text-slate-400 mb-1">Indicatori</div>
              <div className="text-2xl font-bold">miglioramento</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <Activity className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <div className="text-sm text-slate-400 mb-1">Alert cali</div>
              <div className="text-2xl font-bold">motivazionali</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <Target className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-sm text-slate-400 mb-1">Suggerimenti</div>
              <div className="text-2xl font-bold">personalizzati</div>
            </div>
          </div>
          <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg inline-block">
            <p className="text-slate-200 italic text-lg">
              "Non migliorare per vincere. Migliora per diventare migliore."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
