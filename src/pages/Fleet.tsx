import React from 'react';
import Header from '../components/Header';
import FleetSection from '../components/FleetSection';

interface FleetPageProps {
  onBack?: () => void;
}

const FleetPage: React.FC<FleetPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
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
            <span className="font-medium">Back</span>
          </button>
        </div>
      </div>
      
      <div className={onBack ? "pb-8" : "pt-20"}>
        <FleetSection showAllVehicles={true} />
      </div>
    </div>
  );
};

export default FleetPage;

