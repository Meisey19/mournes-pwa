import { Link } from 'react-router-dom';
import { useState } from 'react';
import { mountains } from '../data';
import { Mountain as MountainIcon, Search } from 'lucide-react';

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMountains = mountains.filter(mountain => 
    mountain.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mountain.tagline?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mountain.additional?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Discover the Mournes</h2>
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search mountains..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      {filteredMountains.length === 0 ? (
        <div className="text-center py-12">
          <MountainIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600">No mountains found matching "{searchTerm}"</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMountains.map((mountain) => (
          <Link
            key={mountain.id}
            to={`/mountain/${mountain.id}`}
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
              {mountain.image ? (
                <img 
                  src={mountain.image} 
                  alt={mountain.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <MountainIcon className="h-20 w-20 text-blue-300" />
              )}
              {mountain.height && (
                <div className="absolute bottom-2 left-2 bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {mountain.height}
                </div>
              )}
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900">
                {mountain.name}
              </h3>
              {mountain.tagline && (
                <p className="text-sm text-gray-600 mt-1 italic">{mountain.tagline}</p>
              )}
              {mountain.additional && (
                <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                  {mountain.additional}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
      )}
    </div>
  );
}
