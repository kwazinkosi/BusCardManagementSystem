
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Bus, Clock, MapPin } from 'lucide-react';

// Fix for default marker icons in react-leaflet
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface BusInfo {
  id: string;
  route: string;
  busNumber: string;
  position: LatLngExpression;
  nextStop: string;
  estimatedArrival: string;
  status: 'On Time' | 'Delayed' | 'Early';
}

const mockBuses: BusInfo[] = [
  {
    id: '1',
    route: 'Soweto - CBD',
    busNumber: 'PTB-456',
    position: [-26.2023, 28.0436],
    nextStop: 'Gandhi Square',
    estimatedArrival: '5 mins',
    status: 'On Time',
  },
  {
    id: '2',
    route: 'Tembisa - Sandton',
    busNumber: 'PTB-234',
    position: [-26.1814, 28.0471],
    nextStop: 'Sandton CBD',
    estimatedArrival: '8 mins',
    status: 'Delayed',
  },
];

function BusTracker() {
  const johannesburgCenter: LatLngExpression = [-26.2041, 28.0473];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Live Bus Tracking</h3>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <div className="h-[400px] relative">
            <MapContainer
              center={johannesburgCenter}
              zoom={12}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {mockBuses.map((bus) => (
                <Marker key={bus.id} position={bus.position}>
                  <Popup>
                    <div className="p-2">
                      <h4 className="font-semibold">{bus.route}</h4>
                      <p className="text-sm">Bus: {bus.busNumber}</p>
                      <p className="text-sm">Next Stop: {bus.nextStop}</p>
                      <p className="text-sm">
                        Arrival: {bus.estimatedArrival}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        <div className="p-4">
          <h4 className="font-semibold mb-4">Nearby Buses</h4>
          <div className="space-y-4">
            {mockBuses.map((bus) => (
              <div
                key={bus.id}
                className="p-4 rounded-lg border border-gray-200 hover:border-navy-600 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-navy-100 p-2 rounded-full">
                    <Bus className="h-4 w-4 text-navy-600" />
                  </div>
                  <div>
                    <p className="font-medium">{bus.route}</p>
                    <p className="text-sm text-gray-600">{bus.busNumber}</p>
                  </div>
                </div>
                <div className="ml-9 space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>Next: {bus.nextStop}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>ETA: {bus.estimatedArrival}</span>
                  </div>
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded-full ${
                      bus.status === 'On Time'
                        ? 'bg-green-100 text-green-600'
                        : bus.status === 'Delayed'
                        ? 'bg-red-100 text-red-600'
                        : 'bg-yellow-100 text-yellow-600'
                    }`}
                  >
                    {bus.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusTracker;