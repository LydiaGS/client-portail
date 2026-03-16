import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'validated': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'completed': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'in-progress': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'validated': return 'Validé';
      case 'completed': return 'Terminé';
      case 'in-progress': return 'En cours';
      default: return 'En attente';
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">Mes Projets 🚀</h1>
        <p className="text-sm sm:text-base text-[var(--muted)]">Suivez l'évolution de vos projets en temps réel</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="glass rounded-2xl p-4 sm:p-6 hover:scale-[1.02] transition-all duration-300 animate-slide-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                  <h2 className="text-lg sm:text-2xl font-bold text-[var(--text)]">{project.name}</h2>
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border ${
                    project.status === 'completed' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                    project.status === 'review' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                    'bg-blue-500/20 text-blue-400 border-blue-500/30'
                  }`}>
                    {project.status === 'completed' ? 'Terminé' : project.status === 'review' ? 'En révision' : 'En cours'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--muted2)]">{project.description}</p>
              </div>
              {project.previewUrl && (
                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--accent2)] to-pink-600 text-white font-medium text-xs sm:text-sm hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Voir aperçu 👁️
                </a>
              )}
            </div>

            <div className="mb-4 sm:mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs sm:text-sm text-[var(--muted)]">Progression globale</span>
                <span className="text-base sm:text-lg font-bold text-[var(--text)]">{project.progress}%</span>
              </div>
              <div className="h-2 sm:h-3 bg-[var(--accent)] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 shimmer"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-base sm:text-lg font-semibold text-[var(--text)] mb-3 sm:mb-4">Étapes du projet</h3>
              {project.steps.sort((a, b) => a.order - b.order).map((step, stepIndex) => (
                <div 
                  key={step.id}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[var(--card)] border border-[var(--stroke)] hover:border-[var(--accent2)] transition-all duration-300"
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-lg flex-shrink-0 ${
                    step.status === 'validated' ? 'bg-green-500/20 text-green-400' :
                    step.status === 'completed' ? 'bg-blue-500/20 text-blue-400' :
                    step.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400 animate-pulse' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {step.status === 'validated' ? '✓' : stepIndex + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                      <h4 className="font-semibold text-[var(--text)] text-sm sm:text-base">{step.title}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(step.status)}`}>
                        {getStatusLabel(step.status)}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--muted2)]">{step.description}</p>
                    {step.validatedAt && (
                      <p className="text-xs text-green-400 mt-1">
                        ✓ Validé le {new Date(step.validatedAt).toLocaleDateString('fr-FR')}
                      </p>
                    )}
                  </div>
                  {step.needsValidation && step.status === 'completed' && (
                    <button className="px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs sm:text-sm font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex-shrink-0">
                      Valider
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
