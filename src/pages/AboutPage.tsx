import { Mountain, Info } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 pb-20">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">About the Mournes</h1>
        <p className="text-lg text-gray-600 italic">Na Beanna Boirche</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start mb-4">
            <Mountain className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">The Mourne Mountains</h2>
              <p className="text-gray-700 leading-relaxed">
                The Mourne Mountains are a granite mountain range in County Down, Northern Ireland. 
                They include the highest mountains in Northern Ireland, the most prominent of which is 
                Slieve Donard at 850 metres (2,790 ft).
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">History & Culture</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            The mountains have been an important part of Irish history and culture for thousands of years. 
            The name "Beanna Boirche" refers to the legendary warrior Boirche, while many individual 
            peaks have names derived from Irish Gaelic.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The famous Mourne Wall, built between 1904 and 1922, crosses fifteen of the mountains 
            and encloses the catchment area of the Silent Valley and Ben Crom reservoirs.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">The Landscape</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            The Mournes are characterized by dramatic granite peaks, deep valleys, mountain tarns, 
            and expansive views. The terrain varies from gentle heather-covered slopes to challenging 
            rocky scrambles at the summit tors.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The area is designated as an Area of Outstanding Natural Beauty (AONB) and is a popular 
            destination for hillwalking, rock climbing, and trail running.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Did You Know?</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>C.S. Lewis found inspiration for Narnia in the Mourne Mountains</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Parts of Game of Thrones were filmed in the Mournes</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>The Mourne Wall is 22 miles long and built from mountain granite</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Over 250,000 people visit the mountains each year</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start">
            <Info className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Visitor Information</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                The Mournes are accessible year-round, with several car parks and access points 
                around the range. The main access points include:
              </p>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>• Bloody Bridge (for Slieve Donard)</li>
                <li>• Carrick Little car park (for the central Mournes)</li>
                <li>• Silent Valley car park</li>
                <li>• Trassey Track (for Hare's Gap)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
