export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
            Mentra
          </div>
          <p className="text-slate-400 mb-4 max-w-md">
            La piattaforma per la performance mentale e fisica degli atleti competitivi
          </p>
          <div className="text-sm text-slate-500">
            {new Date().getFullYear()} Mentra. Tutti i diritti riservati.
          </div>
        </div>
      </div>
    </footer>
  );
}
