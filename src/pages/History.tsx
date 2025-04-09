import { Calendar, MapPin, Bus, Clock } from 'lucide-react';

function History() {
  const trips = [
    {
      id: 1,
      route: 'Soweto - CBD',
      zones: 'A-C',
      date: '2024-03-25 14:30',
      status: 'Completed',
      busNumber: 'PTB-456',
      boardingPoint: 'Gandhi Square',
      alightingPoint: 'Soweto Terminal',
      passType: 'Monthly Pass'
    },
    {
      id: 2,
      route: 'Tembisa - Sandton',
      zones: 'B-D',
      date: '2024-03-25 08:15',
      status: 'Completed',
      busNumber: 'PTB-234',
      boardingPoint: 'Tembisa Station',
      alightingPoint: 'Sandton CBD',
      passType: 'Trip Bundle'
    },
    {
      id: 3,
      route: 'Soweto - CBD',
      zones: 'A-C',
      date: '2024-03-24 17:45',
      status: 'Completed',
      busNumber: 'PTB-789',
      boardingPoint: 'Gandhi Square',
      alightingPoint: 'Soweto Terminal',
      passType: 'Monthly Pass'
    },
  ];
  return (
    <div className="max-w-4xl mx-auto md:ml-64 p-6 relative z-0">
      <h2 className="text-2xl font-bold mt-8 mb-6 md:mb-8">Trip History</h2>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="border-b border-gray-100 last:border-0 py-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-start mb-4 gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-navy-600">{trip.route}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{trip.date}</span>
                  </div>
                </div>
                <div className="text-right min-w-[120px]">
                  <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
                    {trip.status}
                  </span>
                  <p className="text-sm text-gray-600 mt-1">Zones {trip.zones}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Bus className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">Bus: {trip.busNumber}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4 flex-shrink-0" />
                    <span>Pass Type: {trip.passType}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">From: {trip.boardingPoint}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">To: {trip.alightingPoint}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default History;