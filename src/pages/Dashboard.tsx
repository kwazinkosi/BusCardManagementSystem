import { CreditCard, TrendingUp, Clock, MapPin } from 'lucide-react';
import BusTracker from '../components/BusTracker';

function Dashboard() {
  const activePass = {
    type: 'Monthly Pass',
    zones: 'A-C',
    validUntil: '2024-04-25',
    remainingDays: 30,
  };

  const remainingTrips = {
    bundle: '10-Trip Bundle',
    zones: 'A-C',
    remaining: 7,
  };

  const recentTrips = [
    { 
      id: 1, 
      route: 'Soweto - CBD',
      zones: 'A-C',
      date: '2024-03-25 14:30',
      status: 'Completed',
      busNumber: 'PTB-456'
    },
    { 
      id: 2, 
      route: 'Tembisa - Sandton',
      zones: 'B-D',
      date: '2024-03-25 08:15',
      status: 'Completed',
      busNumber: 'PTB-234'
    },
    { 
      id: 3, 
      route: 'Soweto - CBD',
      zones: 'A-C',
      date: '2024-03-24 17:45',
      status: 'Completed',
      busNumber: 'PTB-789'
    },
  ];

  return (
    
      <div className="max-w-6xl mx-auto md:ml-64 p-6 relative z-0">
      <h2 className="text-2xl font-bold my-6">Dashboard</h2>
      {/* Active Pass Status */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-navy-100 p-3 rounded-full">
            <CreditCard className="h-6 w-6 text-navy-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Active Pass</h3>
            <p className="text-3xl font-bold text-navy-600">{activePass.type}</p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <p className="text-gray-600">Zones: {activePass.zones}</p>
          <p className="text-gray-600">Valid until: {activePass.validUntil}</p>
          <p className="text-gray-600">Remaining days: {activePass.remainingDays}</p>
        </div>
      </div>

      {/* Trip Bundle Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{remainingTrips.bundle}</h3>
              <p className="text-2xl font-bold text-green-600">
                {remainingTrips.remaining} trips remaining
              </p>
              <p className="text-sm text-gray-600">Zones: {remainingTrips.zones}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <MapPin className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Next Bus</h3>
              <p className="text-2xl font-bold text-purple-600">5 minutes</p>
              <p className="text-sm text-gray-600">Route: Soweto - CBD</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bus Tracker */}
      
      <div className="mb-8 relative z-10" style={{ minHeight: '500px' }}>
        <BusTracker />
      </div>

      {/* Recent Trips */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Trips</h3>
        <div className="space-y-4">
          {recentTrips.map((trip) => (
            <div key={trip.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div>
                <p className="font-medium">{trip.route}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{trip.date}</span>
                </div>
                <p className="text-sm text-navy-600">Bus: {trip.busNumber}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-600">Zones {trip.zones}</p>
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-600">
                  {trip.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;