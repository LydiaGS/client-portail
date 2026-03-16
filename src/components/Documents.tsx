import { Document } from '../types';

interface DocumentsProps {
  documents: Document[];
}

export default function Documents({ documents }: DocumentsProps) {
  const getDocIcon = (type: string) => {
    switch (type) {
      case 'pdf': return '📕';
      case 'devis': return '📋';
      case 'facture': return '🧾';
      case 'contrat': return '📜';
      default: return '📄';
    }
  };

  const getDocColor = (type: string) => {
    switch (type) {
      case 'pdf': return 'from-red-500 to-orange-500';
      case 'devis': return 'from-blue-500 to-cyan-500';
      case 'facture': return 'from-green-500 to-emerald-500';
      case 'contrat': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const formationDocs = documents.filter(d => d.category === 'formation');
  const adminDocs = documents.filter(d => d.category === 'administratif');

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">Documents 📄</h1>
        <p className="text-sm sm:text-base text-[var(--muted)]">Tous vos documents importants au même endroit</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-lg sm:text-2xl font-bold text-[var(--text)] mb-4 flex items-center gap-2">
            <span>🎓</span> Documents de Formation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {formationDocs.map((doc, index) => (
              <div 
                key={doc.id}
                className="glass rounded-2xl p-4 sm:p-5 hover:scale-105 transition-all duration-300 animate-slide-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${getDocColor(doc.type)} flex items-center justify-center text-xl sm:text-2xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {getDocIcon(doc.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[var(--text)] text-sm sm:text-base mb-1 truncate">{doc.title}</h3>
                    <p className="text-xs text-[var(--muted2)] mb-2">{doc.size}</p>
                    <p className="text-xs text-[var(--muted2)]">
                      {new Date(doc.createdAt).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                </div>
                <button className="w-full mt-3 sm:mt-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--stroke)] text-[var(--text)] text-xs sm:text-sm font-medium hover:border-[var(--accent2)] hover:bg-[var(--accent2)]/10 transition-all duration-300">
                  Télécharger ⬇️
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg sm:text-2xl font-bold text-[var(--text)] mb-4 flex items-center gap-2">
            <span>📋</span> Documents Administratifs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {adminDocs.map((doc, index) => (
              <div 
                key={doc.id}
                className="glass rounded-2xl p-4 sm:p-5 hover:scale-105 transition-all duration-300 animate-slide-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${getDocColor(doc.type)} flex items-center justify-center text-xl sm:text-2xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {getDocIcon(doc.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[var(--text)] text-sm sm:text-base mb-1 truncate">{doc.title}</h3>
                    <p className="text-xs text-[var(--muted2)] mb-2">{doc.size}</p>
                    <p className="text-xs text-[var(--muted2)]">
                      {new Date(doc.createdAt).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                </div>
                <button className="w-full mt-3 sm:mt-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--stroke)] text-[var(--text)] text-xs sm:text-sm font-medium hover:border-[var(--accent2)] hover:bg-[var(--accent2)]/10 transition-all duration-300">
                  Télécharger ⬇️
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-[var(--accent2)]/10 to-pink-500/10 border-[var(--accent2)]/30">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[var(--accent2)] to-pink-600 flex items-center justify-center text-2xl sm:text-3xl shadow-lg shadow-pink-500/25 flex-shrink-0">
              📨
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text)] mb-1">Besoin d'un document ?</h3>
              <p className="text-xs sm:text-sm text-[var(--muted2)]">
                Demandez un devis, une facture ou un contrat
              </p>
            </div>
          </div>
          <button className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[var(--accent2)] to-pink-600 text-white font-medium text-xs sm:text-sm hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 w-full sm:w-auto">
            Faire une demande
          </button>
        </div>
      </div>
    </div>
  );
}
