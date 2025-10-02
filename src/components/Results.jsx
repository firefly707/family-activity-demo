// Results component - Displays the top 5 activity recommendations
// Shows numbered rankings, titles, emojis, descriptions, locations, and distances

export default function Results({ recommendations }) {
  // If no results yet, show a helpful message
  if (!recommendations || recommendations.length === 0) {
    return (
      <div className="lg:col-span-8">
        <div className="bg-white rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Ready to Find Activities?
          </h3>
          <p className="text-gray-600">
            Fill out the form on the left and click &quot;Search Activities&quot; to discover perfect family activities!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:col-span-8">
      <div className="bg-white rounded-2xl p-6">
        {/* Results header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Top 5 Recommendations</h2>
            <p className="text-sm text-gray-600 mt-1">Perfect matches for your family</p>
          </div>
          <div className="text-xs text-gray-500 uppercase tracking-wide">
            Sorted by Relevance
          </div>
        </div>

        {/* Recommendations list */}
        <div className="space-y-4">
          {recommendations.map((rec) => (
            <div
              key={rec.rank}
              className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              {/* Rank badge and title row */}
              <div className="flex items-start gap-4">
                {/* Numbered rank badge */}
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  #{rec.rank}
                </div>

                {/* Activity emoji and content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{rec.emoji}</span>
                    <h3 className="text-lg font-bold text-gray-900">{rec.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {rec.description}
                  </p>

                  {/* Location and distance */}
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-red-500">
                      <span>📍</span>
                      <span className="text-gray-700 font-medium">{rec.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <span>🚗</span>
                      <span>{rec.distance}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
