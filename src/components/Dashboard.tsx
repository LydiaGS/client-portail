import { User, Project, Formation } from '../types';

interface DashboardProps {
  user: User;
  projects: Project[];
  formations: Formation[];
}

export default function Dashboard({ user, projects, formations }: DashboardProps) {
  const totalProgress = formations.reduce((acc, f) => acc + f.progress, 0) / formations.length;
  const activeProjects = projects.filter(p => p.status === 'in-progress').length;
  const completedSteps = projects.reduce((acc, p) => acc + p.steps.filter(s => s.status === 'validated').length, 0);

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">Bienvenue, {user.name.split(' ')[0]} ! 👋</h1>
        <p className="text-sm sm:text-base text-[var(--muted)]">Voici un aperçu de votre progression</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="glass rounded-2xl p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl sm:text-2xl">
              ⭐
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-[var(--text)]">{user.level}</span>
          </div>
          <h3 className="text-[var(--muted)] text-xs sm:text-sm">Niveau actuel</h3>
          <div className="mt-2 h-2 bg-[var(--accent)] rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 shimmer"
              style={{ width: `${(user.xp % 1000) / 10}%` }}
            />
          </div>
          <p className="text-xs text-[var(--muted2)] mt-1">{user.xp} XP</p>
        </div>

        <div className="glass rounded-2xl p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-xl sm:text-2xl">
              🚀
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-[var(--text)]">{activeProjects}</span>
          </div>
          <h3 className="text-[var(--muted)] text-xs sm:text-sm">Projets actifs</h3>
          <p className="text-xs text-[var(--muted2)] mt-3">{projects.length} projets au total</p>
        </div>

        <div className="glass rounded-2xl p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-xl sm:text-2xl">
              ✅
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-[var(--text)]">{completedSteps}</span>
          </div>
          <h3 className="text-[var(--muted)] text-xs sm:text-sm">Étapes validées</h3>
          <p className="text-xs text-[var(--muted2)] mt-3">Excellent travail !</p>
        </div>

        <div className="glass rounded-2xl p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-xl sm:text-2xl">
              🎓
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-[var(--text)]">{Math.round(totalProgress)}%</span>
          </div>
          <h3 className="text-[var(--muted)] text-xs sm:text-sm">Formation globale</h3>
          <p className="text-xs text-[var(--muted2)] mt-3">{formations.length} formations en cours</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="glass rounded-2xl p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-[var(--text)] mb-4 flex items-center gap-2">
            <span>🏆</span> Mes Badges
          </h2>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {user.badges.map((badge) => (
              <div key={badge.id} className="text-center group cursor-pointer">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-xl bg-gradient-to-br from-[var(--accent2)] to-pink-600 flex items-center justify-center text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-500/25">
                  {badge.icon}
                </div>
                <p className="text-xs text-[var(--muted)] font-medium">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-[var(--text)] mb-4 flex items-center gap-2">
            <span>📈</span> Progression Formations
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {formations.map((formation) => (
              <div key={formation.id}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-[var(--text)] font-medium">{formation.title}</span>
                  <span className="text-xs text-[var(--muted2)]">{formation.progress}%</span>
                </div>
                <div className="h-2 bg-[var(--accent)] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[var(--accent2)] to-pink-500 transition-all duration-1000"
                    style={{ width: `${formation.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass rounded-2xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-bold text-[var(--text)] mb-4 flex items-center gap-2">
          <span>🎯</span> Projets en cours
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {projects.filter(p => p.status === 'in-progress' || p.status === 'review').map((project) => (
            <div key={project.id} className="p-3 sm:p-4 rounded-xl bg-[var(--card)] border border-[var(--stroke)] hover:border-[var(--accent2)] transition-colors duration-300">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[var(--text)] text-sm sm:text-base truncate">{project.name}</h3>
                  <p className="text-xs sm:text-sm text-[var(--muted2)] truncate">{project.description}</p>
                </div>
                <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ml-2 ${
                  project.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {project.status === 'in-progress' ? 'En cours' : 'En révision'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-[var(--accent)] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[var(--text)]">{project.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
