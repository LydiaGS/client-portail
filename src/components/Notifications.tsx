import { Notification } from '../types';

interface NotificationsProps {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
}

export default function Notifications({ notifications, onMarkAsRead }: NotificationsProps) {
  const getNotifIcon = (type: string) => {
    switch (type) {
      case 'success': return '✅';
      case 'warning': return '⚠️';
      case 'error': return '❌';
      default: return 'ℹ️';
    }
  };

  const getNotifColor = (type: string) => {
    switch (type) {
      case 'success': return 'border-green-500/30 bg-green-500/10';
      case 'warning': return 'border-yellow-500/30 bg-yellow-500/10';
      case 'error': return 'border-red-500/30 bg-red-500/10';
      default: return 'border-blue-500/30 bg-blue-500/10';
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">Notifications 🔔</h1>
          <p className="text-sm sm:text-base text-[var(--muted)]">
            {unreadCount > 0 ? `${unreadCount} notification${unreadCount > 1 ? 's' : ''} non lue${unreadCount > 1 ? 's' : ''}` : 'Tout est à jour !'}
          </p>
        </div>
        {unreadCount > 0 && (
          <button className="px-4 py-2 rounded-xl bg-[var(--card)] border border-[var(--stroke)] text-[var(--text)] text-xs sm:text-sm font-medium hover:border-[var(--accent2)] transition-all duration-300 w-full sm:w-auto">
            Tout marquer comme lu
          </button>
        )}
      </div>

      <div className="space-y-3">
        {notifications.length === 0 ? (
          <div className="glass rounded-2xl p-8 sm:p-12 text-center">
            <div className="text-5xl sm:text-6xl mb-4">🔕</div>
            <h3 className="text-lg sm:text-xl font-bold text-[var(--text)] mb-2">Aucune notification</h3>
            <p className="text-xs sm:text-sm text-[var(--muted2)]">Vous êtes à jour !</p>
          </div>
        ) : (
          notifications.map((notif, index) => (
            <div 
              key={notif.id}
              className={`glass rounded-2xl p-4 sm:p-5 border transition-all duration-300 hover:scale-[1.01] animate-slide-in ${
                notif.read ? 'opacity-60' : getNotifColor(notif.type)
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-2xl sm:text-3xl flex-shrink-0">{getNotifIcon(notif.type)}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 sm:gap-4 mb-2">
                    <h3 className="font-semibold text-[var(--text)] text-sm sm:text-base">{notif.title}</h3>
                    {!notif.read && (
                      <span className="w-2 h-2 rounded-full bg-[var(--accent2)] flex-shrink-0 mt-2 animate-pulse"></span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--muted2)] mb-2">{notif.message}</p>
                  <p className="text-xs text-[var(--muted2)]">
                    {new Date(notif.createdAt).toLocaleDateString('fr-FR', { 
                      day: 'numeric', 
                      month: 'long', 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
                {!notif.read && (
                  <button
                    onClick={() => onMarkAsRead(notif.id)}
                    className="px-2 sm:px-3 py-1 rounded-lg bg-[var(--card)] border border-[var(--stroke)] text-[var(--text)] text-xs font-medium hover:border-[var(--accent2)] transition-all duration-300 flex-shrink-0"
                  >
                    Marquer comme lu
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
