import React, { useState, useEffect } from 'react';
import CarSearchResults from './CarSearchResults';

interface HeroProps {
  onNavigateToResults?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateToResults }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<'outstation' | 'withinCity'>('outstation');
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  
  const [outstationFormData, setOutstationFormData] = useState({
    pickupLocation: '',
    destinationCity: '',
    pickupDate: '',
    pickupTime: '',
    returnDate: '',
    passengers: 1,
    vehicleType: 'economy',
    tripType: 'oneWay'
  });

  const [withinCityFormData, setWithinCityFormData] = useState({
    pickupLocation: '',
    dropLocation: '',
    pickupDate: '',
    pickupTime: '',
    duration: '4hours',
    passengers: 1,
    vehicleType: 'economy'
  });

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
    },
    {
      url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const handleOutstationInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setOutstationFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWithinCityInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setWithinCityFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onNavigateToResults) {
      onNavigateToResults();
    }
  };

  const handleBackToSearch = () => {
    setShowSearchResults(false);
  };

  const closeModal = () => {
    setShowComingSoonModal(false);
  };

  const handleProceedToResults = () => {
    setShowComingSoonModal(false);
    if (onNavigateToResults) {
      onNavigateToResults();
    }
  };

  // Don't replace the entire component, just show modal
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Carousel Images */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 animate-ken-burns"
              style={{ backgroundImage: `url("${image.url}")` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        ))}
      </div>

      {/* Booking Form Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-5xl w-full mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral mb-2">
              JJ <span className="text-accent">TRAVELS</span>
            </h1>
            <p className="text-lg text-gray-600">Book Your Journey</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex mb-6 bg-gray-50 rounded-md p-0.5 max-w-xs mx-auto">
            <button
              onClick={() => setActiveTab('outstation')}
              className={`flex-1 py-2 px-4 rounded text-sm font-medium transition-all duration-200 ${
                activeTab === 'outstation'
                  ? 'bg-white text-primary shadow-sm border border-gray-200'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'
              }`}
            >
              Outstation
            </button>
            <button
              onClick={() => setActiveTab('withinCity')}
              className={`flex-1 py-2 px-4 rounded text-sm font-medium transition-all duration-200 ${
                activeTab === 'withinCity'
                  ? 'bg-white text-primary shadow-sm border border-gray-200'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'
              }`}
            >
              Within City
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Outstation Form */}
            {activeTab === 'outstation' && (
              <div className="space-y-4">
                {/* Row 1: Main Journey Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {/* Travellers */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-600 uppercase tracking-wide">
                      Traveller(s)
                    </label>
                    <select
                      name="passengers"
                      value={outstationFormData.passengers}
                      onChange={handleOutstationInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all duration-200 bg-white"
                    >
                      {[1, 2, 3, 4, 5, 6, 7].map(num => (
                        <option key={num} value={num}>{num} Member{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>

                  {/* Starting From */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-600 uppercase tracking-wide">
                      Starting From
                    </label>
                    <input
                      type="text"
                      name="pickupLocation"
                      value={outstationFormData.pickupLocation}
                      onChange={handleOutstationInputChange}
                      placeholder="Bangalore"
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all duration-200 placeholder-gray-400"
                      required
                    />
                  </div>

                  {/* Travelling To */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-600 uppercase tracking-wide">
                      Travelling to
                    </label>
                    <input
                      type="text"
                      name="destinationCity"
                      value={outstationFormData.destinationCity}
                      onChange={handleOutstationInputChange}
                      placeholder="Destination"
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all duration-200 placeholder-gray-400"
                      required
                    />
                  </div>

                  {/* Vehicle Type */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-600 uppercase tracking-wide">
                      Vehicle Type
                    </label>
                    <select
                      name="vehicleType"
                      value={outstationFormData.vehicleType}
                      onChange={handleOutstationInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all duration-200 bg-white"
                    >
                      <option value="economy">Economy</option>
                      <option value="premium">Premium</option>
                      <option value="luxury">Luxury</option>
                      <option value="suv">SUV</option>
                    </select>
                  </div>
                </div>

                {/* Row 2: Date and Time Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {/* Date of Travel */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-600 uppercase tracking-wide">
                      Date of Travel
                    </label>
                    <input
                      type="date"
                      name="pickupDate"
                      value={outstationFormData.pickupDate}
                      onChange={handleOutstationInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                      required
                    />
                  </div>

                  {/* Date of Return */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-600 uppercase tracking-wide">
                      Date of Return
                    </label>
                    <input
                      type="date"
                      name="returnDate"
                      value={outstationFormData.returnDate}
                      onChange={handleOutstationInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                    />
                  </div>

                  {/* Pickup Time */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-600 uppercase tracking-wide">
                      Pickup Time
                    </label>
                    <input
                      type="time"
                      name="pickupTime"
                      value={outstationFormData.pickupTime || '01:00'}
                      onChange={handleOutstationInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                    />
                  </div>

                  {/* Trip Type */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-600 uppercase tracking-wide">
                      Trip Type
                    </label>
                    <select
                      name="tripType"
                      value={outstationFormData.tripType}
                      onChange={handleOutstationInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all duration-200 bg-white"
                    >
                      <option value="oneWay">One Way</option>
                      <option value="roundTrip">Round Trip</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Within City Form */}
            {activeTab === 'withinCity' && (
              <div className="space-y-4">
                {/* Row 1: Main Booking Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {/* Travellers */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-600 uppercase tracking-wide">
                      Traveller(s)
                    </label>
                    <select
                      name="passengers"
                      value={withinCityFormData.passengers}
                      onChange={handleWithinCityInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all duration-200 bg-white"
                    >
                      {[1, 2, 3, 4, 5, 6, 7].map(num => (
                        <option key={num} value={num}>{num} Member{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>

                  {/* Car From */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-600 uppercase tracking-wide">
                      Car From
                    </label>
                    <input
                      type="text"
                      name="pickupLocation"
                      value={withinCityFormData.pickupLocation}
                      onChange={handleWithinCityInputChange}
                      placeholder="Bangalore"
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all duration-200 placeholder-gray-400"
                      required
                    />
                  </div>

                  {/* No of Car Hours */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-600 uppercase tracking-wide">
                      No of Car Hours
                    </label>
                    <select
                      name="duration"
                      value={withinCityFormData.duration}
                      onChange={handleWithinCityInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all duration-200 bg-white"
                    >
                      <option value="2hours">2 Hours - 20 kms included</option>
                      <option value="4hours">4 Hours - 40 kms included</option>
                      <option value="8hours">8 Hours - 80 kms included</option>
                      <option value="12hours">12 Hours - 120 kms included</option>
                      <option value="fullDay">Full Day - 200 kms included</option>
                    </select>
                  </div>
                </div>

                {/* Row 2: Date and Time Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Pickup Date */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-600 uppercase tracking-wide">
                      Pickup Date
                    </label>
                    <input
                      type="date"
                      name="pickupDate"
                      value={withinCityFormData.pickupDate}
                      onChange={handleWithinCityInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                      required
                    />
                  </div>

                  {/* Pickup Time */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-600 uppercase tracking-wide">
                      Pickup Time
                    </label>
                    <input
                      type="time"
                      name="pickupTime"
                      value={withinCityFormData.pickupTime || '00:00'}
                      onChange={handleWithinCityInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md min-w-[140px]"
              >
                {activeTab === 'outstation' ? 'Search' : 'Search'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Coming Soon Modal */}
      {showComingSoonModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-auto relative animate-fade-in">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-neutral mb-2">Coming Soon!</h3>
              <p className="text-gray-600 mb-6">
                Search functionality is under development. Our team is working on API integration to bring you the best booking experience.
              </p>
              
              <div className="text-left mb-6">
                <h4 className="font-semibold text-neutral mb-2">What's coming:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Real-time vehicle availability</li>
                  <li>• Instant price quotes</li>
                  <li>• Seamless booking process</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={closeModal}
                  className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleProceedToResults}
                  className="flex-1 bg-primary text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  View Demo Results
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-accent scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

















