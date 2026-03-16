import { useState } from 'react';
import { User } from '../types';

interface ProfileProps {
  user: User;
  onUpdateAvatar: (url: string) => void;
}

export default function Profile({ user, onUpdateAvatar }: ProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newAvatar, setNewAvatar] = useState(user.avatar);

  const avatarOptions = [
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexandre',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Marie',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
  ];

  const handleSave = () => {
    onUpdateAvatar(newAvatar);
    setIsEditing(false);
  };

  const nextLevelXP = Math.ceil(user.xp / 1000) * 1000;
  const currentLevelXP = (Math.ceil(user.xp / 1000) - 1) * 1000;
  const progressToNextLevel = ((user.xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">Mon Profil 👤</h1>
        <p className="text-sm sm:text-base text-[var(--muted)]">Gérez vos informations personnelles</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <div className="glass rounded-2xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-[var(--text)] mb-6">Informations personnelles</h2>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
              <div className="relative group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-4 border-[var(--accent2)] shadow-lg shadow-pink-500/25">
                  <img src={isEditing ? newAvatar : user.avatar} alt={user.name} className="w-full h-full object-cover" />
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="absolute -bottom-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[var(--accent2)] to-pink-600 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 text-sm sm:text-base"
                >
                  📷
                </button>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)] mb-1">{user.name}</h3>
                <p className="text-xs sm:text-sm text-[var(--muted2)] mb-3">{user.email}</p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 text-xs sm:text-sm font-medium border border-purple-500/30">
                    Niveau {user.level}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 text-xs sm:text-sm font-medium border border-blue-500/30">
                    {user.xp} XP
                  </span>
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="mb-6 p-4 rounded-xl bg-[var(--card)] border border-[var(--stroke)] animate-slide-in">
                <h4 className="text-sm font-semibold text-[var(--text)] mb-3">Choisir un avatar</h4>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mb-4">
                  {avatarOptions.map((avatar, index) => (
                    <button
                      key={index}
                      onClick={() => setNewAvatar(avatar)}
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-110 ${
                        newAvatar === avatar ? 'border-[var(--accent2)] shadow-lg shadow-pink-500/25' : 'border-[var(--stroke)]'
                      }`}
                    >
                      <img src={avatar} alt={`Avatar ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs sm:text-sm font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex-1 sm:flex-none"
                  >
                    Sauvegarder
                  </button>
                  <button
                    onClick={() => { setIsEditing(false); setNewAvatar(user.avatar); }}
                    className="px-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--stroke)] text-[var(--text)] text-xs sm:text-sm font-medium hover:border-red-500 transition-all duration-300 flex-1 sm:flex-none"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs sm:text-sm text-[var(--muted)] mb-2">Nom complet</label>
                <input
                  type="text"
                  value={user.name}
                  readOnly
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[var(--card)] border border-[var(--stroke)] text-[var(--text)] text-sm sm:text-base focus:border-[var(--accent2)] outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm text-[var(--muted)] mb-2">Email</label>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[var(--card)] border border-[var(--stroke)] text-[var(--text)] text-sm sm:text-base focus:border-[var(--accent2)] outline-none transition-colors duration-300"
                />
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-[var(--text)] mb-4">Progression</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-[var(--muted)]">Niveau {user.level} → Niveau {user.level + 1}</span>
                  <span className="text-xs sm:text-sm font-bold text-[var(--text)]">{user.xp} / {nextLevelXP} XP</span>
                </div>
                <div className="h-3 sm:h-4 bg-[var(--accent)] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-[var(--accent2)] transition-all duration-1000 shimmer"
                    style={{ width: `${progressToNextLevel}%` }}
                  />
                </div>
                <p className="text-xs text-[var(--muted2)] mt-2">
                  Plus que {nextLevelXP - user.xp} XP pour atteindre le niveau {user.level + 1} !
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="glass rounded-2xl p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-bold text-[var(--text)] mb-4 flex items-center gap-2">
              <span>🏆</span> Mes Badges
            </h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {user.badges.map((badge) => (
                <div key={badge.id} className="text-center group cursor-pointer">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl bg-gradient-to-br from-[var(--accent2)] to-pink-600 flex items-center justify-center text-xl sm:text-2xl mb-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-pink-500/25">
                    {badge.icon}
                  </div>
                  <p className="text-xs text-[var(--muted)] font-medium">{badge.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">⭐</div>
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{user.level}</div>
              <p className="text-xs sm:text-sm text-[var(--muted2)]">Niveau actuel</p>
            </div>
          </div>

          <div className="glass rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">💎</div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">{user.xp}</div>
              <p className="text-xs sm:text-sm text-[var(--muted2)]">Points d'expérience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
