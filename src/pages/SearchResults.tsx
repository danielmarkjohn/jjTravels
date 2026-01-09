import React from 'react';
import Header from '../components/Header';
import CarSearchResults from '../components/CarSearchResults';

const SearchResults: React.FC = () => {
  const handleBackToSearch = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20">
        <CarSearchResults onBack={handleBackToSearch} />
      </div>
    </div>
  );
};

export default SearchResults;