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
        <Header />
        <div className="pt-20">
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
      <Header onFleetClick={navigateToFleet} onAboutClick={navigateToAbout} />
      <Hero onNavigateToResults={navigateToSearchResults} />
      <FleetSection onViewAll={navigateToFleet} />
    </div>
  );
}

export default App;



