import { User } from '../types';

interface SidebarProps {
  user: User;
  activeTab: string;
  onTabChange: (tab: string) => void;
  unreadNotifications: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ user, activeTab, onTabChange, unreadNotifications, isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'projects', label: 'Mes Projets', icon: '🚀' },
    { id: 'formations', label: 'Formations', icon: '🎓' },
    { id: 'timeline', label: 'Timeline', icon: '⏱️' },
    { id: 'agenda', label: 'Agenda', icon: '📅' },
    { id: 'documents', label: 'Documents', icon: '📄' },
    { id: 'notifications', label: 'Notifications', icon: '🔔', badge: unreadNotifications },
    { id: 'profile', label: 'Profil', icon: '👤' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <aside className={`w-64 h-screen glass border-r border-[var(--stroke)] flex flex-col fixed left-0 top-0 z-50 transition-transform duration-300 lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-4 sm:p-6 border-b border-[var(--stroke)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[var(--accent2)] flex-shrink-0">
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-[var(--text)] truncate text-sm sm:text-base">{user.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[var(--muted2)]">Niveau {user.level}</span>
                <div className="flex-1 h-1 bg-[var(--accent)] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[var(--accent2)] to-pink-500"
                    style={{ width: `${(user.xp % 1000) / 10}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 sm:p-4 space-y-1 sm:space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-300 group text-xs sm:text-sm ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-[var(--accent2)] to-pink-600 text-white shadow-lg shadow-pink-500/25'
                  : 'text-[var(--muted)] hover:bg-[var(--card)] hover:text-[var(--text)]'
              }`}
            >
              <span className="text-lg sm:text-xl">{item.icon}</span>
              <span className="font-medium flex-1 text-left truncate">{item.label}</span>
              {item.badge && item.badge > 0 && (
                <span className="bg-red-500 text-white text-xs px-1.5 sm:px-2 py-0.5 rounded-full flex-shrink-0">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-3 sm:p-4 border-t border-[var(--stroke)]">
          <a
            href="https://vscode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-xs sm:text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            <span>💻</span>
            <span className="hidden sm:inline">Éditeur de Code</span>
            <span className="sm:hidden">Code</span>
          </a>
        </div>
      </aside>
    </>
  );
}
