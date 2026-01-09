import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FleetSection from './components/FleetSection';
import CarSearchResults from './components/CarSearchResults';
import FleetPage from './pages/Fleet';
import AboutPage from './pages/About';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'search-results' | 'fleet' | 'about'>('home');

  const navigateToSearchResults = () => {
    setCurrentPage('search-results');
  };

  const navigateToFleet = () => {
    setCurrentPage('fleet');
  };

  const navigateToAbout = () => {
    setCurrentPage('about');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'search-results') {
    return (
      <div className="min-h-screen bg-background">
        <div className="pt-4">
          <CarSearchResults onBack={navigateToHome} />
        </div>
      </div>
    );
  }

  if (currentPage === 'fleet') {
    return <FleetPage onBack={navigateToHome} />;
  }

  if (currentPage === 'about') {
    return <AboutPage onBack={navigateToHome} />;
  }

  return (
    <div className="App bg-background">
      <button
        onClick={navigateToHome}
        className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors duration-200 group bg-white px-4 py-2 rounded-lg shadow-md"
      >
        <svg
          className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="font-medium">Back to JJ Travels Home</span>
      </button>

      <Hero onNavigateToResults={navigateToSearchResults} />
      {/* <FleetSection onViewAll={navigateToFleet} /> */}
    </div>
  );
}

export default App;







