// Main App component - Orchestrates all components and manages application state
// Milestone 2: Now connected to Claude API backend for real activity recommendations

import { useState } from 'react';
import Layout from './components/Layout';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import LoadingSpinner from './components/LoadingSpinner';

// Backend API URL (configured to point to our Express server)
const API_URL = 'http://localhost:3001';

function App() {
  // State management
  const [recommendations, setRecommendations] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle search - calls our backend API which uses Claude with Web Search
  const handleSearch = async (formData) => {
    console.log('Search clicked with data:', formData);

    // Reset state and start loading
    setIsLoading(true);
    setRecommendations(null);
    setError(null);

    try {
      // Call our backend API endpoint
      const response = await fetch(`${API_URL}/api/search-activities`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the response is ok (status 200-299)
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch activities');
      }

      // Parse the JSON response
      const data = await response.json();
      console.log('Received recommendations:', data);

      // Update state with recommendations
      setRecommendations(data.recommendations);
    } catch (err) {
      console.error('Error fetching activities:', err);
      setError(err.message);
    } finally {
      // Always stop loading, whether successful or not
      setIsLoading(false);
    }
  };

  // Handle new search - clears results and errors
  const handleNewSearch = () => {
    setRecommendations(null);
    setIsLoading(false);
    setError(null);
  };

  return (
    <Layout onNewSearch={handleNewSearch}>
      {/* Left column: Search form */}
      <SearchForm onSearch={handleSearch} isLoading={isLoading} />

      {/* Right column: Loading spinner, error message, or results */}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Results recommendations={recommendations} error={error} />
      )}
    </Layout>
  );
}

export default App;
