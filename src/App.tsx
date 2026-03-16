import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Formations from './components/Formations';
import Timeline from './components/Timeline';
import Agenda from './components/Agenda';
import Documents from './components/Documents';
import Notifications from './components/Notifications';
import Profile from './components/Profile';
import { currentUser, projects, formations, events, notifications as initialNotifications, documents, timelineItems, badges } from './data/mockData';
import { Notification } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user, setUser] = useState(currentUser);
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const unreadNotifications = notifications.filter(n => !n.read).length;

  const handleMarkAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const handleUpdateAvatar = (url: string) => {
    setUser(prev => ({ ...prev, avatar: url }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard user={user} projects={projects} formations={formations} />;
      case 'projects':
        return <Projects projects={projects} />;
      case 'formations':
        return <Formations formations={formations} badges={badges} />;
      case 'timeline':
        return <Timeline timelineItems={timelineItems} />;
      case 'agenda':
        return <Agenda events={events} />;
      case 'documents':
        return <Documents documents={documents} />;
      case 'notifications':
        return <Notifications notifications={notifications} onMarkAsRead={handleMarkAsRead} />;
      case 'profile':
        return <Profile user={user} onUpdateAvatar={handleUpdateAvatar} />;
      default:
        return <Dashboard user={user} projects={projects} formations={formations} />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Sidebar 
        user={user} 
        activeTab={activeTab} 
        onTabChange={(tab) => {
          setActiveTab(tab);
          setSidebarOpen(false);
        }}
        unreadNotifications={unreadNotifications}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <button 
        className="lg:hidden fixed top-4 left-4 z-30 p-3 bg-[var(--card)] backdrop-blur-xl rounded-xl border border-[var(--stroke)] text-[var(--text)] hover:bg-[var(--accent)] transition-all duration-300"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <main className="lg:ml-64 p-4 sm:p-6 md:p-8 pt-20 lg:pt-8">
        {renderContent()}
      </main>
    </div>
  );
}
