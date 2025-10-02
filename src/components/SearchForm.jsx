// SearchForm component - Collects user input for finding family activities
// Contains 5 input fields: city, kid ages, availability, distance, preferences

import { useState } from 'react';

export default function SearchForm({ onSearch, isLoading }) {
  // State for each form field
  const [city, setCity] = useState('San Francisco');
  const [kidsAges, setKidsAges] = useState('7');
  const [availability, setAvailability] = useState('sunday (tomorrow)');
  const [maxDistance, setMaxDistance] = useState(10);
  const [preferences, setPreferences] = useState('');

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({
      city,
      kidsAges,
      availability,
      maxDistance,
      preferences
    });
  };

  // Clear all form fields
  const handleClear = () => {
    setCity('');
    setKidsAges('');
    setAvailability('');
    setMaxDistance(10);
    setPreferences('');
  };

  return (
    <div className="lg:col-span-4">
      <div className="bg-blue-50 rounded-2xl p-6 sticky top-8">
        {/* Form header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Find Activities</h2>
          <p className="text-sm text-gray-600">Tell us about your family&apos;s preferences</p>
        </div>

        <form onSubmit={handleSearch} className="space-y-5">
          {/* City Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              📍 City
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="San Francisco"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Kid Ages Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              👶 Kid Ages
            </label>
            <input
              type="text"
              value={kidsAges}
              onChange={(e) => setKidsAges(e.target.value)}
              placeholder="7"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Date & Time Availability Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              🎫 Date &amp; Time Availability
            </label>
            <input
              type="text"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              placeholder="sunday (tomorrow)"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Maximum Distance Slider */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              🚗 Maximum Distance: <span className="font-bold text-blue-600">{maxDistance} miles</span>
            </label>
            <div className="relative">
              <input
                type="range"
                min="1"
                max="50"
                value={maxDistance}
                onChange={(e) => setMaxDistance(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 mile</span>
                <span>25 miles</span>
                <span>50 miles</span>
              </div>
            </div>
          </div>

          {/* Optional Preferences Text Area */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ✨ Optional Preferences
            </label>
            <textarea
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              placeholder="e.g., indoor activities, educational, budget-friendly"
              rows="3"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>🔍</span>
              <span>{isLoading ? 'Searching...' : 'Search Activities'}</span>
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="px-6 py-3 text-gray-700 hover:bg-white rounded-lg transition-colors duration-200 font-medium"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
