import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Mountain, Heart, MoreHorizontal, Map } from 'lucide-react';
import { HomePage } from './pages/HomePage';
import { MountainDetail } from './pages/MountainDetail';
import { FavoritesPage } from './pages/FavoritesPage';
import { AboutPage } from './pages/AboutPage';
import { SafetyPage } from './pages/SafetyPage';
import { MorePage } from './pages/MorePage';
import { MapPage } from './pages/MapPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-blue-700 text-white shadow-lg sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center space-x-3">
              <Mountain className="h-8 w-8" />
              <div>
                <h1 className="text-xl font-bold">Explore the Mournes</h1>
                <p className="text-xs text-blue-100">Na Beanna Boirche</p>
              </div>
            </div>
          </div>
        </header>
        
        <main className="pb-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mountain/:id" element={<MountainDetail />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/more" element={<MorePage />} />
          </Routes>
        </main>

        <Navigation />
      </div>
    </BrowserRouter>
  );
}

function Navigation() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // Hide navigation on map page for full-screen experience
  if (location.pathname === '/map') {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        <Link 
          to="/" 
          className={`flex flex-col items-center justify-center flex-1 h-full ${
            isActive('/') ? 'text-blue-600' : 'text-gray-500'
          }`}
        >
          <Mountain className="h-6 w-6" />
          <span className="text-xs mt-1">Mountains</span>
        </Link>
        <Link 
          to="/map" 
          className={`flex flex-col items-center justify-center flex-1 h-full ${
            isActive('/map') ? 'text-blue-600' : 'text-gray-500'
          }`}
        >
          <Map className="h-6 w-6" />
          <span className="text-xs mt-1">Map</span>
        </Link>
        <Link 
          to="/favorites" 
          className={`flex flex-col items-center justify-center flex-1 h-full ${
            isActive('/favorites') ? 'text-blue-600' : 'text-gray-500'
          }`}
        >
          <Heart className="h-6 w-6" />
          <span className="text-xs mt-1">Favorites</span>
        </Link>
        <Link 
          to="/more" 
          className={`flex flex-col items-center justify-center flex-1 h-full ${
            isActive('/more') || isActive('/about') || isActive('/safety') ? 'text-blue-600' : 'text-gray-500'
          }`}
        >
          <MoreHorizontal className="h-6 w-6" />
          <span className="text-xs mt-1">More</span>
        </Link>
      </div>
    </nav>
  );
}

export default App;
