import { Formation, Badge } from '../types';

interface FormationsProps {
  formations: Formation[];
  badges: Badge[];
}

export default function Formations({ formations, badges }: FormationsProps) {
  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">Formations 🎓</h1>
        <p className="text-sm sm:text-base text-[var(--muted)]">Développez vos compétences et gagnez des badges</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {formations.map((formation, index) => (
          <div 
            key={formation.id}
            className="glass rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 animate-slide-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl ${
                    formation.type === 'web' 
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-500' 
                      : 'bg-gradient-to-br from-purple-500 to-pink-500'
                  }`}>
                    {formation.type === 'web' ? '💻' : '🎨'}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-[var(--text)]">{formation.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      formation.type === 'web' 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : 'bg-purple-500/20 text-purple-400'
                    }`}>
                      {formation.type === 'web' ? 'Développement Web' : 'Design'}
                    </span>
                  </div>
                </div>
              </div>
              {formation.badge && (
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-xl sm:text-2xl shadow-lg shadow-yellow-500/25">
                    {formation.badge.icon}
                  </div>
                  <p className="text-xs text-[var(--muted2)] mt-1 hidden sm:block">Récompense</p>
                </div>
              )}
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-[var(--muted)]">Progression</span>
                <span className="font-bold text-[var(--text)]">{formation.progress}%</span>
              </div>
              <div className="h-2 sm:h-3 bg-[var(--accent)] rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 ${
                    formation.type === 'web'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500'
                  }`}
                  style={{ width: `${formation.progress}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-xs text-[var(--muted2)]">
                <span>{formation.completedLessons} / {formation.totalLessons} leçons</span>
                <span className="flex items-center gap-1">
                  <span>⭐</span>
                  <span>{formation.xpReward} XP</span>
                </span>
              </div>
            </div>

            <button className={`w-full mt-4 py-2 sm:py-3 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 ${
              formation.type === 'web'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:shadow-lg hover:shadow-blue-500/25'
                : 'bg-gradient-to-r from-purple-500 to-pink-600 hover:shadow-lg hover:shadow-purple-500/25'
            } text-white`}>
              Continuer la formation →
            </button>
          </div>
        ))}
      </div>

      <div className="glass rounded-2xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-2xl font-bold text-[var(--text)] mb-4 sm:mb-6 flex items-center gap-2">
          <span>🏆</span> Collection de Badges
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {badges.map((badge, index) => (
            <div 
              key={badge.id}
              className="text-center group cursor-pointer animate-slide-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative">
                <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br from-[var(--accent2)] to-pink-600 flex items-center justify-center text-2xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-pink-500/25">
                  {badge.icon}
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500 flex items-center justify-center text-xs">
                  ✓
                </div>
              </div>
              <h4 className="font-semibold text-[var(--text)] text-xs sm:text-sm mb-1">{badge.name}</h4>
              <p className="text-xs text-[var(--muted2)] hidden sm:block">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="glass rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-2xl sm:text-3xl shadow-lg shadow-purple-500/25 flex-shrink-0">
            🎮
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-[var(--text)] mb-1">Gamification</h3>
            <p className="text-xs sm:text-sm text-[var(--muted2)]">
              Complétez des leçons, gagnez de l'XP, débloquez des badges et montez en niveau !
            </p>
          </div>
          <div className="text-center sm:text-right">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">2450</div>
            <div className="text-xs text-[var(--muted2)]">XP Total</div>
          </div>
        </div>
      </div>
    </div>
  );
}
