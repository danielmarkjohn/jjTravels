import React, { useState } from 'react';
import { BookingFormData } from '../types';

const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    pickupTime: '',
    passengers: 1,
    vehicleType: 'economy'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking data:', formData);
    // Handle booking submission
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-4">
            Book Your Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quick and easy booking process. Select your preferences and get instant confirmation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Pickup Location */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-neutral">
                  Pickup Location
                </label>
                <input
                  type="text"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleInputChange}
                  placeholder="Enter pickup location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  required
                />
              </div>

              {/* Dropoff Location */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-neutral">
                  Dropoff Location
                </label>
                <input
                  type="text"
                  name="dropoffLocation"
                  value={formData.dropoffLocation}
                  onChange={handleInputChange}
                  placeholder="Enter destination"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  required
                />
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-neutral">
                  Pickup Date
                </label>
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  required
                />
              </div>

              {/* Time */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-neutral">
                  Pickup Time
                </label>
                <input
                  type="time"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  required
                />
              </div>

              {/* Passengers */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-neutral">
                  Passengers
                </label>
                <select
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>{num} Passenger{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              {/* Vehicle Type */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-neutral">
                  Vehicle Type
                </label>
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                >
                  <option value="economy">Economy</option>
                  <option value="premium">Premium</option>
                  <option value="luxury">Luxury</option>
                  <option value="suv">SUV</option>
                </select>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-primary text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors duration-200 shadow-lg"
              >
                Search Available Vehicles
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;