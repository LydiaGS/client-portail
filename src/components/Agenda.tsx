import { Event } from '../types';

interface AgendaProps {
  events: Event[];
}

export default function Agenda({ events }: AgendaProps) {
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'meeting': return '🤝';
      case 'deadline': return '⏰';
      case 'formation': return '🎓';
      default: return '📅';
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'meeting': return 'from-blue-500 to-cyan-500';
      case 'deadline': return 'from-red-500 to-orange-500';
      case 'formation': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const sortedEvents = [...events].sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">Agenda 📅</h1>
        <p className="text-sm sm:text-base text-[var(--muted)]">Vos prochains événements et deadlines</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2 space-y-3 sm:space-y-4">
          {sortedEvents.map((event, index) => (
            <div 
              key={event.id}
              className="glass rounded-2xl p-4 sm:p-6 hover:scale-[1.02] transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${getEventColor(event.type)} flex items-center justify-center text-2xl sm:text-3xl shadow-lg flex-shrink-0`}>
                  {getEventIcon(event.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-2">
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-xl font-bold text-[var(--text)] mb-1 truncate">{event.title}</h3>
                      <p className="text-xs sm:text-sm text-[var(--muted2)] truncate">{event.description}</p>
                    </div>
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                      event.type === 'meeting' ? 'bg-blue-500/20 text-blue-400' :
                      event.type === 'deadline' ? 'bg-red-500/20 text-red-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {event.type === 'meeting' ? 'Réunion' : event.type === 'deadline' ? 'Deadline' : 'Formation'}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2 text-xs sm:text-sm">
                    <div className="flex items-center gap-1 sm:gap-2 text-[var(--muted)]">
                      <span>📅</span>
                      <span>{new Date(event.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 text-[var(--muted)]">
                      <span>🕐</span>
                      <span>{new Date(event.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3 sm:space-y-4">
          <div className="glass rounded-2xl p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-bold text-[var(--text)] mb-4 flex items-center gap-2">
              <span>📊</span> Statistiques
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-[var(--muted2)]">Réunions</span>
                <span className="text-lg sm:text-xl font-bold text-blue-400">
                  {events.filter(e => e.type === 'meeting').length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-[var(--muted2)]">Deadlines</span>
                <span className="text-lg sm:text-xl font-bold text-red-400">
                  {events.filter(e => e.type === 'deadline').length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-[var(--muted2)]">Formations</span>
                <span className="text-lg sm:text-xl font-bold text-purple-400">
                  {events.filter(e => e.type === 'formation').length}
                </span>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">📆</div>
              <h3 className="text-base sm:text-lg font-bold text-[var(--text)] mb-2">Prochain événement</h3>
              {sortedEvents.length > 0 && (
                <>
                  <p className="text-xs sm:text-sm text-[var(--muted)] mb-1 truncate">{sortedEvents[0].title}</p>
                  <p className="text-xs text-[var(--muted2)]">
                    {new Date(sortedEvents[0].date).toLocaleDateString('fr-FR')}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
