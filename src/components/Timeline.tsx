import { TimelineItem } from '../types';

interface TimelineProps {
  timelineItems: TimelineItem[];
}

export default function Timeline({ timelineItems }: TimelineProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'validated': return 'bg-green-500';
      case 'rejected': return 'bg-red-500';
      default: return 'bg-yellow-500';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'validated': return 'Validé';
      case 'rejected': return 'Refusé';
      default: return 'En attente';
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">Timeline ⏱️</h1>
        <p className="text-sm sm:text-base text-[var(--muted)]">Suivi des validations de projets</p>
      </div>

      <div className="glass rounded-2xl p-4 sm:p-6 overflow-x-auto">
        <div className="relative min-w-[300px]">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent2)] via-purple-500 to-blue-500"></div>
          
          <div className="space-y-6 sm:space-y-8">
            {timelineItems.map((item, index) => (
              <div 
                key={item.id}
                className="relative pl-12 sm:pl-16 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute left-1.5 sm:left-3 w-5 h-5 sm:w-6 sm:h-6 rounded-full ${getStatusColor(item.status)} shadow-lg ${
                  item.status === 'validated' ? 'shadow-green-500/50' :
                  item.status === 'rejected' ? 'shadow-red-500/50' :
                  'shadow-yellow-500/50 animate-pulse'
                } flex items-center justify-center`}>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></div>
                </div>

                <div className="glass rounded-xl p-4 sm:p-5 hover:scale-[1.02] transition-all duration-300 border border-[var(--stroke)] hover:border-[var(--accent2)]">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-[var(--text)] mb-1 truncate">{item.stepTitle}</h3>
                      <p className="text-xs sm:text-sm text-[var(--muted2)] truncate">Projet: {item.projectName}</p>
                    </div>
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ml-2 ${
                      item.status === 'validated' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      item.status === 'rejected' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {getStatusLabel(item.status)}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs text-[var(--muted2)]">
                    <div className="flex items-center gap-1">
                      <span>📤</span>
                      <span>Soumis le {new Date(item.submittedAt).toLocaleDateString('fr-FR')}</span>
                    </div>
                    {item.validatedAt && (
                      <div className="flex items-center gap-1">
                        <span>✅</span>
                        <span>Validé le {new Date(item.validatedAt).toLocaleDateString('fr-FR')}</span>
                      </div>
                    )}
                  </div>

                  {item.status === 'pending' && (
                    <div className="mt-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                      <p className="text-xs text-yellow-400 flex items-center gap-2">
                        <span className="animate-pulse">⏳</span>
                        En attente de validation par l'administrateur
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div className="glass rounded-xl p-4 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">
            {timelineItems.filter(i => i.status === 'validated').length}
          </div>
          <p className="text-xs sm:text-sm text-[var(--muted2)]">Validés</p>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">
            {timelineItems.filter(i => i.status === 'pending').length}
          </div>
          <p className="text-xs sm:text-sm text-[var(--muted2)]">En attente</p>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-red-400 mb-1">
            {timelineItems.filter(i => i.status === 'rejected').length}
          </div>
          <p className="text-xs sm:text-sm text-[var(--muted2)]">Refusés</p>
        </div>
      </div>
    </div>
  );
}
