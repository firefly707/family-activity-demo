// Layout component - Creates the main two-column structure of the app
// Left side: Search form (35% width)
// Right side: Results display (65% width)

export default function Layout({ children, onNewSearch }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with app branding and New Search button */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* App logo and title */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Family Activity Finder</h1>
              <p className="text-sm text-gray-600">Discover perfect activities for your family</p>
            </div>
          </div>

          {/* New Search button */}
          <button
            onClick={onNewSearch}
            className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
          >
            New Search
          </button>
        </div>
      </header>

      {/* Main content area with two-column layout */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {children}
        </div>
      </main>
    </div>
  );
}
