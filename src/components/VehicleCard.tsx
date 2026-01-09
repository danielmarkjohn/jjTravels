import React from 'react';

interface Vehicle {
  id: number;
  name: string;
  type: string;
  image: string;
  capacity: string;
  price: string;
  features: string[];
}

interface VehicleCardProps {
  vehicle: Vehicle;
  onBookNow?: (vehicle: Vehicle) => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onBookNow }) => {
  return (
    <div className="bg-surface rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={vehicle.image} 
          alt={vehicle.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-accent text-neutral px-3 py-1 rounded-full text-sm font-semibold">
          {vehicle.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-neutral mb-2">{vehicle.name}</h3>
          <div className="flex items-center text-sm text-neutral/70">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {vehicle.capacity}
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-primary">₹{vehicle.price}</span>
            <span className="text-sm text-neutral/70 ml-1">/day</span>
          </div>
          <div className="text-xs text-neutral/50">Starting from</div>
        </div>

        {/* Features */}
        <div className="mb-6 flex-grow">
          <div className="flex flex-wrap gap-2">
            {vehicle.features.slice(0, 3).map((feature, index) => (
              <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                {feature}
              </span>
            ))}
            {vehicle.features.length > 3 && (
              <span className="text-xs text-neutral/50">+{vehicle.features.length - 3} more</span>
            )}
          </div>
        </div>

        {/* Book Button - Always at bottom */}
        <div className="mt-auto">
          <button 
            onClick={() => onBookNow?.(vehicle)}
            className="w-full bg-primary text-surface py-3 rounded-xl font-semibold hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;