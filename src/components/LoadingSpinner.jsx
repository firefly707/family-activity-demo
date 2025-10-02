// LoadingSpinner component - Shows animated spinner while searching for activities

export default function LoadingSpinner() {
  return (
    <div className="lg:col-span-8">
      <div className="bg-white rounded-2xl p-12 text-center">
        {/* Animated spinner */}
        <div className="flex justify-center mb-6">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
        </div>

        {/* Loading message */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Searching for Activities...
        </h3>
        <p className="text-gray-600">
          Finding the perfect family-friendly activities for you
        </p>
      </div>
    </div>
  );
}
