import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { mountains } from '../data';
import { useFavoritesStore } from '../store/useFavoritesStore';
import { Mountain as MountainIcon, Heart } from 'lucide-react';

export function FavoritesPage() {
  const { favorites, isLoaded, loadFavorites } = useFavoritesStore();

  useEffect(() => {
    if (!isLoaded) {
      loadFavorites();
    }
  }, [isLoaded, loadFavorites]);

  const favoriteMountains = mountains.filter(m => favorites.has(m.id));

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-600">Loading favorites...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 pb-20">
      <div className="flex items-center mb-6">
        <Heart className="h-8 w-8 text-red-500 fill-current mr-3" />
        <h2 className="text-2xl font-bold">My Favorites</h2>
      </div>

      {favoriteMountains.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">No favorite mountains yet</p>
          <p className="text-sm text-gray-500">Tap the heart icon on mountains to save them here</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteMountains.map((mountain) => (
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
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
