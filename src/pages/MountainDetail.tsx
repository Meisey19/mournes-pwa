import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { mountains } from '../data';
import { useFavoritesStore } from '../store/useFavoritesStore';
import { ArrowLeft, Mountain, Info, Heart } from 'lucide-react';

export function MountainDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const mountain = mountains.find(m => m.id === Number(id));
  const { isFavorite, toggleFavorite, isLoaded, loadFavorites } = useFavoritesStore();

  useEffect(() => {
    if (!isLoaded) {
      loadFavorites();
    }
  }, [isLoaded, loadFavorites]);

  if (!mountain) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Mountain className="h-24 w-24 text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Mountain Not Found</h2>
        <button
          onClick={() => navigate('/')}
          className="text-blue-600 hover:text-blue-700"
        >
          Back to Mountains
        </button>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
        {mountain.image ? (
          <img 
            src={mountain.image} 
            alt={mountain.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <Mountain className="h-32 w-32 text-blue-300" />
        )}
        
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition"
        >
          <ArrowLeft className="h-6 w-6 text-gray-900" />
        </button>

        <button
          onClick={() => toggleFavorite(mountain.id)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition"
        >
          <Heart 
            className={`h-6 w-6 ${isFavorite(mountain.id) ? 'text-red-500 fill-current' : 'text-gray-700'}`}
          />
        </button>

        {mountain.height && (
          <div className="absolute bottom-4 left-4 bg-blue-700 text-white px-4 py-2 rounded-full font-bold">
            {mountain.height}
          </div>
        )}
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{mountain.name}</h1>
        {mountain.tagline && (
          <p className="text-lg text-gray-600 italic mb-6">{mountain.tagline}</p>
        )}

        <div className="space-y-6">
          {mountain.additional && (
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-gray-700">{mountain.additional}</p>
              </div>
            </div>
          )}

          {mountain.terrain && (
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Terrain</h3>
              <p className="text-gray-700">{mountain.terrain}</p>
            </div>
          )}

          {mountain.photo && (
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Photo Credit</h3>
              <p className="text-sm text-gray-600 italic">{mountain.photo}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
