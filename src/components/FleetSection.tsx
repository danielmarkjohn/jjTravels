import React, { useState } from 'react';
import VehicleCard from './VehicleCard';

interface FleetSectionProps {
  showAllVehicles?: boolean;
  onViewAll?: () => void;
}

const FleetSection: React.FC<FleetSectionProps> = ({ showAllVehicles = false, onViewAll }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const allVehicles = [
    {
      id: 1,
      name: 'Toyota Innova Crysta',
      type: 'SUV',
      image: '/api/placeholder/400/250',
      capacity: '7 Seater',
      price: '2500',
      features: ['AC', 'GPS', 'Music System', 'Comfortable Seats', 'Safety Features']
    },
    {
      id: 2,
      name: 'Maruti Swift Dzire',
      type: 'Sedan',
      image: '/api/placeholder/400/250',
      capacity: '4 Seater',
      price: '1800',
      features: ['AC', 'Music System', 'Fuel Efficient', 'Compact']
    },
    {
      id: 3,
      name: 'Mahindra Scorpio',
      type: 'SUV',
      image: '/api/placeholder/400/250',
      capacity: '8 Seater',
      price: '3000',
      features: ['AC', 'GPS', 'Music System', 'Spacious', 'Powerful Engine', 'Off-road Capable']
    },
    {
      id: 4,
      name: 'Honda City',
      type: 'Sedan',
      image: '/api/placeholder/400/250',
      capacity: '5 Seater',
      price: '2000',
      features: ['AC', 'GPS', 'Premium Interior', 'Fuel Efficient']
    },
    {
      id: 5,
      name: 'Toyota Fortuner',
      type: 'Premium SUV',
      image: '/api/placeholder/400/250',
      capacity: '7 Seater',
      price: '4000',
      features: ['4WD', 'Premium Interior', 'Advanced Safety', 'Sunroof', 'Leather Seats']
    },
    {
      id: 6,
      name: 'Hyundai Creta',
      type: 'Compact SUV',
      image: '/api/placeholder/400/250',
      capacity: '5 Seater',
      price: '2800',
      features: ['AC', 'GPS', 'Touchscreen', 'Sunroof', 'Safety Features']
    }
  ];

  const vehicles = showAllVehicles ? allVehicles : allVehicles.slice(0, 3);

  const handleBookNow = (vehicle: any) => {
    console.log('Booking vehicle:', vehicle);
  };

  return (
    <section id="fleet" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-4">
            {showAllVehicles ? 'Complete Fleet Collection' : 'Our Fleet'}
          </h2>
          <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
            {showAllVehicles 
              ? 'Explore our complete range of vehicles for every occasion and budget.'
              : 'Choose from our diverse range of well-maintained vehicles, each designed to provide comfort and reliability for your journey.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <VehicleCard 
              key={vehicle.id} 
              vehicle={vehicle} 
              onBookNow={handleBookNow}
            />
          ))}
        </div>

        {!showAllVehicles && onViewAll && (
          <div className="text-center mt-12">
            <button 
              onClick={onViewAll}
              className="bg-accent text-neutral px-8 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              View All Vehicles
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FleetSection;


