import { Bell, User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

function Navbar() {
  const { user } = useAuthStore();

  return (
    <nav className="fixed top-0 right-0 left-0 md:left-64 bg-white border-b border-gray-200 z-40 transition-all duration-200">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Spacer for mobile (since sidebar is hidden) */}
        <div className="md:hidden w-12" /> 
        
        <h1 className="text-xl md:text-2xl font-semibold text-navy-600 truncate">
          PUTCO Digital Transit
        </h1>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="sr-only">Notifications</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="bg-navy-100 p-2 rounded-full">
              <User className="h-5 w-5 text-navy-600" />
            </div>
            <span className="text-gray-700 hidden sm:inline">{user?.email}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;