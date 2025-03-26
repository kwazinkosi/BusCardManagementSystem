import React from 'react';
import { Bell, User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

function Navbar() {
  const { user } = useAuthStore();

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-navy-600">PUTCO Digital Transit</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <div className="flex items-center gap-2">
            <div className="bg-navy-100 p-2 rounded-full">
              <User className="h-5 w-5 text-navy-600" />
            </div>
            <span className="text-gray-700">{user?.email}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;