// Main App component - Orchestrates all components and manages application state
// For Milestone 1, this uses dummy data. In Milestone 2, we'll connect to the Claude API.

import { useState } from 'react';
import Layout from './components/Layout';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import LoadingSpinner from './components/LoadingSpinner';

// Dummy recommendations data for Milestone 1
// This will be replaced with real API data in Milestone 2
const dummyRecommendations = [
  {
    rank: 1,
    title: "Muni Heritage Weekend - Sunday 10am-4pm",
    emoji: "🚋",
    description: "A special event where families can ride vintage transit vehicles that are rarely seen on San Francisco streets, including vintage buses and the Blackpool Boat Tram. All rides on these special streetcars are FREE all weekend.",
    location: "San Francisco Railway Museum",
    distance: "0.5 miles"
  },
  {
    rank: 2,
    title: "Greek Food Festival - Sunday 11am-8pm",
    emoji: "🍕",
    description: "The annual Greek Food Festival features delicious traditional food like Spanakopita and Moussaka, plus desserts and Greek music. Families can watch award-winning folk dance groups perform, and browse unique gifts from local vendors.",
    location: "Mission District",
    distance: "1.2 miles"
  },
  {
    rank: 3,
    title: "Sunday Funnies Exhibit - Sunday 10am-5pm",
    emoji: "🎨",
    description: "The Cartoon Art Museum's 40th anniversary showcase features classic comic strips from the dawn of the comics medium to the present day, including works from legendary cartoonists like Charles M. Schulz (Peanuts) and contemporary classics like Phoebe and Her Unicorn.",
    location: "Cartoon Art Museum",
    distance: "2 miles"
  },
  {
    rank: 4,
    title: "Lindy in the Park Dance Party - Sunday 11am-2pm",
    emoji: "💃",
    description: "A weekly free swing dance event near the de Young Museum when the streets of Golden Gate Park are closed to traffic. Get ready to swing in Golden Gate Park every sunny Sunday at this family-friendly dance gathering.",
    location: "Golden Gate Park",
    distance: "3.5 miles"
  },
  {
    rank: 5,
    title: "Exploratorium After Dark - Sunday 6pm-10pm",
    emoji: "🔬",
    description: "The Exploratorium opens its doors for an adults-and-kids evening of science, art, and human perception. Explore hundreds of interactive exhibits, watch live demonstrations, and enjoy special performances. This Sunday features a special family night.",
    location: "Exploratorium",
    distance: "1.8 miles"
  }
];

function App() {
  // State management
  const [recommendations, setRecommendations] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle search - simulates API call with dummy data
  const handleSearch = (formData) => {
    console.log('Search clicked with data:', formData);

    // Simulate loading state
    setIsLoading(true);
    setRecommendations(null);

    // Simulate API delay (1.5 seconds)
    setTimeout(() => {
      setRecommendations(dummyRecommendations);
      setIsLoading(false);
    }, 1500);
  };

  // Handle new search - clears results
  const handleNewSearch = () => {
    setRecommendations(null);
    setIsLoading(false);
  };

  return (
    <Layout onNewSearch={handleNewSearch}>
      {/* Left column: Search form */}
      <SearchForm onSearch={handleSearch} isLoading={isLoading} />

      {/* Right column: Loading spinner or results */}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Results recommendations={recommendations} />
      )}
    </Layout>
  );
}

export default App;
