import { Link, useLocation } from 'react-router-dom';
import { Home, Wallet, History, Settings, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

function Sidebar() {
  const location = useLocation();
  const { logout } = useAuthStore();

  const links = [
    { to: '/', icon: Home, label: 'Dashboard' },
    { to: '/reload', icon: Wallet, label: 'Reload Card' },
    { to: '/history', icon: History, label: 'History' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-navy-700 text-white min-h-screen">
      <div className="p-6">
        <div className="flex items-center justify-center mb-8">
          <img 
            src="../dist/assets/putco_logo.jpg" 
            alt="PUTCO Logo" 
            className="h-12"
          />
        </div>
        <nav className="space-y-2">
          {links.map(({ to, icon: Icon, label }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === to
                  ? 'bg-navy-600 text-white'
                  : 'text-gray-300 hover:bg-navy-600 hover:text-white'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </Link>
          ))}
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-navy-600 hover:text-white rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;