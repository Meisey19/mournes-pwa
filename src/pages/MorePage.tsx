import { Link } from 'react-router-dom';
import { Info, Shield, Mountain, ExternalLink } from 'lucide-react';

export function MorePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 pb-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">More Information</h1>

      <div className="space-y-4">
        <Link
          to="/about"
          className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <Info className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900">About the Mournes</h2>
              <p className="text-sm text-gray-600 mt-1">
                Learn about the history and landscape of the Mourne Mountains
              </p>
            </div>
          </div>
        </Link>

        <Link
          to="/safety"
          className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-lg mr-4">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900">Mountain Safety</h2>
              <p className="text-sm text-gray-600 mt-1">
                Essential safety information and the mountain code
              </p>
            </div>
          </div>
        </Link>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Useful Links</h3>
          <div className="space-y-3">
            <a
              href="https://www.mourne-mountains.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-700 hover:text-blue-800"
            >
              <Mountain className="h-4 w-4 mr-2" />
              <span className="text-sm">Mourne Mountains Official Site</span>
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
            <a
              href="https://www.walkni.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-700 hover:text-blue-800"
            >
              <Mountain className="h-4 w-4 mr-2" />
              <span className="text-sm">WalkNI - Walking Routes</span>
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">About This App</h3>
          <p className="text-sm text-gray-600 mb-3">
            Explore the Mournes is a progressive web app designed to help you discover and 
            learn about the beautiful Mourne Mountains in County Down, Northern Ireland.
          </p>
          <p className="text-xs text-gray-500">
            Version 1.0.0 • Built with React & TypeScript
          </p>
        </div>
      </div>
    </div>
  );
}
