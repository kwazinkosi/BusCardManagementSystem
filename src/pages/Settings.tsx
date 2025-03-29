import { useState } from 'react';
import { Bell, CreditCard, Shield } from 'lucide-react';

function Settings() {
  const [autoReload, setAutoReload] = useState(false);
  const [autoReloadAmount, setAutoReloadAmount] = useState(100);
  const [autoReloadThreshold, setAutoReloadThreshold] = useState(50);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      {/* Auto-Reload Settings */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-navy-100 p-2 rounded-full">
            <CreditCard className="h-5 w-5 text-navy-600" />
          </div>
          <h3 className="text-lg font-semibold">Auto-Reload Settings</h3>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="font-medium">Enable Auto-Reload</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={autoReload}
                onChange={(e) => setAutoReload(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navy-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy-600"></div>
            </label>
          </div>

          {autoReload && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reload Amount
                </label>
                <input
                  type="number"
                  value={autoReloadAmount}
                  onChange={(e) => setAutoReloadAmount(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                  min="50"
                  max="500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reload when balance falls below
                </label>
                <input
                  type="number"
                  value={autoReloadThreshold}
                  onChange={(e) => setAutoReloadThreshold(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                  min="20"
                  max="100"
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-navy-100 p-2 rounded-full">
            <Bell className="h-5 w-5 text-navy-600" />
          </div>
          <h3 className="text-lg font-semibold">Notification Settings</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Low Balance Alerts</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navy-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <span>Transaction Notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navy-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-navy-100 p-2 rounded-full">
            <Shield className="h-5 w-5 text-navy-600" />
          </div>
          <h3 className="text-lg font-semibold">Security Settings</h3>
        </div>

        <div className="space-y-4">
          <button className="w-full text-left py-3 px-4 rounded-lg hover:bg-gray-50">
            Change Password
          </button>
          <button className="w-full text-left py-3 px-4 rounded-lg hover:bg-gray-50">
            Two-Factor Authentication
          </button>
          <button className="w-full text-left py-3 px-4 rounded-lg hover:bg-gray-50">
            Connected Devices
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;