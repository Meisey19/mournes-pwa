import { AlertTriangle, Cloud, Map as MapIcon, Users, Clock } from 'lucide-react';

export function SafetyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 pb-20">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mountain Safety</h1>
        <p className="text-gray-600">Essential information for a safe mountain experience</p>
      </div>

      <div className="space-y-6">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">Emergency Contacts</h2>
              <p className="text-gray-700 mb-2">In case of emergency, call:</p>
              <p className="text-xl font-bold text-red-600">999 or 112</p>
              <p className="text-sm text-gray-600 mt-2">Ask for Mountain Rescue</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">The Mountain Code</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <MapIcon className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Plan Your Route</h3>
                <p className="text-gray-700 text-sm">
                  Research your route in advance. Know the distance, terrain, and estimated time. 
                  Leave details of your route with someone responsible.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Cloud className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Check the Weather</h3>
                <p className="text-gray-700 text-sm">
                  Mountain weather can change rapidly. Check the forecast before you go and be 
                  prepared to turn back if conditions deteriorate.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Users className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Don't Go Alone</h3>
                <p className="text-gray-700 text-sm">
                  Where possible, walk with others. If you must go alone, make sure someone 
                  knows your plans and expected return time.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Start Early</h3>
                <p className="text-gray-700 text-sm">
                  Give yourself plenty of daylight. Remember that it takes longer to descend 
                  than to ascend, especially in poor conditions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Essential Equipment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-2">Navigation</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Map & compass</li>
                <li>• GPS device or phone</li>
                <li>• Spare batteries</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-2">Clothing</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Waterproof jacket & trousers</li>
                <li>• Warm layers</li>
                <li>• Hat & gloves</li>
                <li>• Sturdy boots</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-2">Safety</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• First aid kit</li>
                <li>• Whistle</li>
                <li>• Head torch</li>
                <li>• Emergency shelter</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-2">Supplies</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Food & high-energy snacks</li>
                <li>• Water (at least 1-2 liters)</li>
                <li>• Mobile phone (fully charged)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Weather Considerations</h3>
          <p className="text-gray-700 text-sm mb-3">
            The Mourne Mountains experience significantly different weather conditions than the 
            valleys below. Be aware that:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Temperature drops approximately 1°C for every 150m of altitude gained</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Wind speed increases significantly on exposed ridges and summits</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Cloud can descend rapidly, reducing visibility to near zero</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Rain is common year-round - waterproofs are essential</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Leave No Trace</h3>
          <p className="text-gray-700 text-sm mb-3">
            Help preserve the Mournes for future generations:
          </p>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li>• Take all litter home with you</li>
            <li>• Stay on marked paths to prevent erosion</li>
            <li>• Keep dogs under control near livestock</li>
            <li>• Close gates behind you</li>
            <li>• Respect wildlife and their habitats</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
