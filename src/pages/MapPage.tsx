import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Link, useNavigate } from 'react-router-dom';
import { Mountain, ArrowLeft } from 'lucide-react';
import { mountains } from '../data';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icon issue with Webpack
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

// Custom mountain icon
const mountainIcon = new L.DivIcon({
  className: 'custom-mountain-marker',
  html: `
    <div style="
      background: #1e40af; 
      border: 3px solid white; 
      border-radius: 50%; 
      width: 32px; 
      height: 32px; 
      display: flex; 
      align-items: center; 
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    ">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
      </svg>
    </div>
  `,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export function MapPage() {
  const navigate = useNavigate();
  
  // Filter mountains that have coordinates
  const mountainsWithCoords = mountains.filter(m => m.lat && m.lng);

  // Center on the Mournes (approximate center)
  const mournesCenter: [number, number] = [54.16, -5.97];

  return (
    <div className="relative h-screen pb-16">
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 z-[1000] p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition"
      >
        <ArrowLeft className="h-6 w-6 text-gray-900" />
      </button>

      <div className="absolute top-4 left-16 right-4 z-[1000] pointer-events-none">
        <div className="bg-white rounded-lg shadow-lg p-4 pointer-events-auto max-w-md mx-auto">
          <div className="flex items-center">
            <Mountain className="h-6 w-6 text-blue-600 mr-2" />
            <div>
              <h2 className="font-bold text-gray-900">Mourne Mountains Map</h2>
              <p className="text-xs text-gray-600">
                {mountainsWithCoords.length} of {mountains.length} mountains mapped
              </p>
            </div>
          </div>
        </div>
      </div>

      <MapContainer
        center={mournesCenter}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {mountainsWithCoords.map((mountain) => (
          <Marker
            key={mountain.id}
            position={[mountain.lat!, mountain.lng!]}
            icon={mountainIcon}
          >
            <Popup>
              <div className="min-w-[200px]">
                {mountain.image && (
                  <img
                    src={mountain.image}
                    alt={mountain.name}
                    className="w-full h-24 object-cover rounded mb-2"
                  />
                )}
                <h3 className="font-bold text-gray-900 mb-1">{mountain.name}</h3>
                {mountain.height && (
                  <p className="text-sm text-blue-600 font-semibold mb-1">
                    {mountain.height}
                  </p>
                )}
                {mountain.tagline && (
                  <p className="text-xs text-gray-600 italic mb-2">
                    {mountain.tagline}
                  </p>
                )}
                <Link
                  to={`/mountain/${mountain.id}`}
                  className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Mourne Wall approximate route - connecting major peaks */}
        {mountainsWithCoords.length > 1 && (
          <Polyline
            positions={[
              [54.1789, -5.9122], // Slieve Donard
              [54.1686, -5.9464], // Slieve Commedagh
              [54.1522, -5.9778], // Slieve Bearnagh
              [54.1581, -5.9828], // Slieve Meelbeg
              [54.1619, -5.9681], // Slieve Meelmore
              [54.1453, -5.9644], // Slieve Corragh
              [54.1375, -5.9711], // Ben Crom
              [54.1411, -5.9928], // Slieve Binnian
            ]}
            pathOptions={{
              color: '#dc2626',
              weight: 3,
              opacity: 0.7,
              dashArray: '10, 10',
            }}
          />
        )}
      </MapContainer>
    </div>
  );
}
