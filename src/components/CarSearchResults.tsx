import React, { useState } from 'react';

interface Car {
  id: string;
  name: string;
  image: string;
  seatingCapacity: number;
  minBilling: number;
  category: 'ALL' | 'ECONOMIC' | 'PREMIUM' | 'SUV / FAMILY';
}

interface CarSearchResultsProps {
  onBack?: () => void;
}

const CarSearchResults: React.FC<CarSearchResultsProps> = ({ onBack }) => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'ECONOMIC' | 'PREMIUM' | 'SUV / FAMILY'>('ALL');
  const [showFareDetails, setShowFareDetails] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [enquiryData, setEnquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });
  const [bookingData, setBookingData] = useState({
    pickupDate: '2025-11-27',
    pickupTime: '04:45',
    pickupLocation: '',
    fullAddress: '',
    remarks: 'Flight details required incase of Airport pickup',
    name: '',
    email: '',
    mobile: '',
    paymentOption: 'booking',
    promoCode: '',
    agreeTerms: false
  });

  const handleFareDetailsClick = (car: Car) => {
    setSelectedCar(car);
    setShowFareDetails(true);
  };

  const closeFareDetails = () => {
    setShowFareDetails(false);
    setSelectedCar(null);
  };

  const handleEnquiryClick = (car: Car) => {
    setSelectedCar(car);
    setShowEnquiryForm(true);
  };

  const closeEnquiryForm = () => {
    setShowEnquiryForm(false);
    setSelectedCar(null);
    setEnquiryData({ name: '', email: '', phone: '', query: '' });
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Enquiry submitted:', enquiryData, 'for car:', selectedCar);
    alert('Enquiry submitted successfully!');
    closeEnquiryForm();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEnquiryData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookNowClick = (car: Car) => {
    setSelectedCar(car);
    setShowBookingForm(true);
  };

  const closeBookingForm = () => {
    setShowBookingForm(false);
    setSelectedCar(null);
  };

  const handleBookingInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setBookingData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setBookingData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', bookingData, 'for car:', selectedCar);
    alert('Booking confirmed successfully!');
    closeBookingForm();
  };

  const cars: Car[] = [
    {
      id: '1',
      name: 'Maruti Swift Dzire',
      image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=300&h=200&fit=crop',
      seatingCapacity: 4,
      minBilling: 1800,
      category: 'ECONOMIC'
    },
    {
      id: '2',
      name: 'Toyota Etios',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=200&fit=crop',
      seatingCapacity: 4,
      minBilling: 2200,
      category: 'ECONOMIC'
    },
    {
      id: '3',
      name: 'Innova 7 Seater',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
      seatingCapacity: 7,
      minBilling: 2800,
      category: 'SUV / FAMILY'
    },
    {
      id: '4',
      name: 'Innova Crysta',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
      seatingCapacity: 7,
      minBilling: 3200,
      category: 'SUV / FAMILY'
    },
    {
      id: '5',
      name: 'Honda City',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=300&h=200&fit=crop',
      seatingCapacity: 4,
      minBilling: 3500,
      category: 'PREMIUM'
    },
    {
      id: '6',
      name: 'Innova Hycross',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop',
      seatingCapacity: 6,
      minBilling: 4300,
      category: 'SUV / FAMILY'
    }
  ];

  const filteredCars = activeFilter === 'ALL' ? cars : cars.filter(car => car.category === activeFilter);

  if (showBookingForm && selectedCar) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-4 lg:py-6">
          {/* Header */}
          <div className="bg-blue-100 px-4 lg:px-6 py-3 lg:py-4 rounded-lg flex items-center justify-between border-b mb-4 lg:mb-6">
            <h3 className="text-base lg:text-lg font-bold text-blue-600">Car BOOKING Details</h3>
            <button
              onClick={closeBookingForm}
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Yellow Notice */}
          <div className="bg-yellow-200 text-center py-2 lg:py-3 px-3 lg:px-4 rounded-lg mb-4 lg:mb-6 text-xs lg:text-sm">
            Online booking will be considered as confirmed during 09:00 AM to 09:00 PM. To confirm the booking instantly, Please call us at 9141555333!
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            {/* Left Side - Form */}
            <div className="flex-1">
              <form onSubmit={handleBookingSubmit} className="space-y-4 lg:space-y-6">
                {/* Pickup Details */}
                <div>
                  <h4 className="text-green-600 font-semibold text-base lg:text-lg mb-3 lg:mb-4">Pickup Details</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-3 lg:mb-4">
                    <div>
                      <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">PICK UP DATE</label>
                      <input
                        type="date"
                        name="pickupDate"
                        value={bookingData.pickupDate}
                        onChange={handleBookingInputChange}
                        className="w-full px-3 py-2 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">PICKUP TIME</label>
                      <div className="flex gap-2">
                        <select
                          value={bookingData.pickupTime.split(':')[0]}
                          onChange={(e) => setBookingData(prev => ({
                            ...prev,
                            pickupTime: `${e.target.value}:${prev.pickupTime.split(':')[1]}`
                          }))}
                          className="flex-1 px-2 lg:px-3 py-2 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                          {Array.from({length: 24}, (_, i) => (
                            <option key={i} value={i.toString().padStart(2, '0')}>{i.toString().padStart(2, '0')}</option>
                          ))}
                        </select>
                        <select
                          value={bookingData.pickupTime.split(':')[1]}
                          onChange={(e) => setBookingData(prev => ({
                            ...prev,
                            pickupTime: `${prev.pickupTime.split(':')[0]}:${e.target.value}`
                          }))}
                          className="flex-1 px-2 lg:px-3 py-2 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                          <option value="00">00</option>
                          <option value="15">15</option>
                          <option value="30">30</option>
                          <option value="45">45</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-3 lg:mb-4">
                    <div>
                      <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">PICKUP LOCATION</label>
                      <input
                        type="text"
                        name="pickupLocation"
                        value={bookingData.pickupLocation}
                        onChange={handleBookingInputChange}
                        placeholder="Please Type Area Name"
                        className="w-full px-3 py-2 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">FULL ADDRESS</label>
                      <input
                        type="text"
                        name="fullAddress"
                        value={bookingData.fullAddress}
                        onChange={handleBookingInputChange}
                        className="w-full px-3 py-2 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">REMARKS</label>
                    <textarea
                      name="remarks"
                      value={bookingData.remarks}
                      onChange={handleBookingInputChange}
                      rows={2}
                      className="w-full px-3 py-2 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                    />
                  </div>
                </div>

                {/* Contact Details */}
                <div>
                  <h4 className="text-green-600 font-semibold text-base lg:text-lg mb-3 lg:mb-4">Contact Details</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                    <div>
                      <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">NAME</label>
                      <input
                        type="text"
                        name="name"
                        value={bookingData.name}
                        onChange={handleBookingInputChange}
                        required
                        className="w-full px-3 py-2 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">EMAIL</label>
                      <input
                        type="email"
                        name="email"
                        value={bookingData.email}
                        onChange={handleBookingInputChange}
                        required
                        className="w-full px-3 py-2 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <div className="sm:col-span-2 lg:col-span-1">
                      <label className="block text-xs lg:text-sm font-medium text-gray-700 mb-1">MOBILE NUMBER</label>
                      <input
                        type="tel"
                        name="mobile"
                        value={bookingData.mobile}
                        onChange={handleBookingInputChange}
                        required
                        className="w-full px-3 py-2 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <p className="text-xs text-gray-500 mt-1">Your booking details will be SMSed to this number</p>
                    </div>
                  </div>
                </div>

                {/* Payment Details */}
                <div>
                  <h4 className="text-green-600 font-semibold text-base lg:text-lg mb-3 lg:mb-4">Payment Details</h4>
                  <p className="text-xs lg:text-sm font-medium text-gray-700 mb-3">I WOULD LIKE TO PAY:</p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentOption"
                        value="booking"
                        checked={bookingData.paymentOption === 'booking'}
                        onChange={handleBookingInputChange}
                        className="mr-2"
                      />
                      <span className="text-sm lg:text-base">Booking Amount (₹ 500)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentOption"
                        value="full"
                        checked={bookingData.paymentOption === 'full'}
                        onChange={handleBookingInputChange}
                        className="mr-2"
                      />
                      <span className="text-sm lg:text-base">Full Amount (₹ {selectedCar.minBilling.toLocaleString()})</span>
                    </label>
                  </div>
                </div>

                {/* Promo Code */}
                <div>
                  <h4 className="text-green-600 font-semibold text-base lg:text-lg mb-3 lg:mb-4">Discount/Promotion Code (Optional)</h4>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      name="promoCode"
                      value={bookingData.promoCode}
                      onChange={handleBookingInputChange}
                      placeholder="Please enter Promotion Code"
                      className="flex-1 px-3 py-2 text-sm lg:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                      type="button"
                      className="bg-yellow-400 text-black px-4 lg:px-6 py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors text-sm lg:text-base"
                    >
                      APPLY CODE
                    </button>
                  </div>
                </div>

                {/* Terms */}
                <div>
                  <label className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={bookingData.agreeTerms}
                      onChange={handleBookingInputChange}
                      required
                      className="mt-1"
                    />
                    <span className="text-xs lg:text-sm">I agree with Terms and Conditions</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-gray-600 text-white px-6 lg:px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors w-full text-sm lg:text-base"
                >
                  CONFIRM BOOKING
                </button>
              </form>
            </div>

            {/* Right Side - Car Details */}
            <div className="w-full lg:w-80 bg-blue-50 p-4 lg:p-6 rounded-lg">
              <h4 className="text-blue-600 font-semibold text-base lg:text-lg mb-3 lg:mb-4">FARE DETAILS</h4>
              
              <div className="mb-3 lg:mb-4">
                <img
                  src={selectedCar.image}
                  alt={selectedCar.name}
                  className="w-full h-24 lg:h-32 object-cover rounded-lg mb-3"
                />
              </div>

              <div className="space-y-2 text-xs lg:text-sm mb-3 lg:mb-4">
                <div className="flex justify-between">
                  <span className="text-red-500">Car</span>
                  <span>{selectedCar.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-500">Car from</span>
                  <span>Bangalore</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-500">Service</span>
                  <span>Local</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-500">Pickup Date</span>
                  <span>Thu 27-Nov, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-500">Pickup Time</span>
                  <span>04:45 AM</span>
                </div>
              </div>

              <div className="border-t pt-3 lg:pt-4 mb-3 lg:mb-4">
                <div className="text-base lg:text-lg font-bold">Price ₹ {selectedCar.minBilling.toLocaleString()}/-</div>
              </div>

              <div className="text-xs text-gray-600 space-y-1">
                <div className="text-green-600 font-semibold">Fare Details</div>
                <div>80 Km include in 8 Hr</div>
                <div>Extra Hours: ₹ 300 per Hour</div>
                <div>Extra Kms: ₹ 25 per km</div>
                <div>Driver Batta Rs.400/- After 8Hr/10pm To 6Am</div>
                <div>New hour billing starts when usage more than 30 mins</div>
                
                <div className="text-green-600 font-semibold mt-3">Extra Charges</div>
                <div>Road Toll & Parking Etc. As Per Actual</div>
                <div>GST will be charged as per the Govt. rules on Gross billing amount.</div>
                <div>Final Rental Will Be Based On Total Kms & Hrs from Our Garage To Garage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="mb-4 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Search
          </button>
        )}

        {/* Search Header */}
        <div className="bg-neutral text-white p-4 rounded-lg mb-6">
          <div className="flex items-center gap-4 text-sm flex-wrap">
            <span>YOU SEARCHED FOR</span>
            <span className="text-accent font-semibold">LOCAL CAR</span>
            <span>Bangalore</span>
            <span>8 Hours</span>
            <span>Thu 27, Nov, 2025</span>
            <span>04:30 AM</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {['ALL', 'ECONOMIC', 'PREMIUM', 'SUV / FAMILY'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter as any)}
              className={`px-6 py-2 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                activeFilter === filter
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex gap-4">
                {/* Car Image */}
                <div className="flex-shrink-0">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-24 h-16 object-cover rounded-lg bg-gray-100"
                  />
                </div>

                {/* Car Details */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-neutral mb-1">{car.name}</h3>
                  <div className="text-sm text-gray-600 mb-3">
                    <div>Seating Capacity</div>
                    <div>Upto {car.seatingCapacity} passengers</div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-1">Minimum Billing</div>
                  <div className="text-xl font-bold text-primary">₹ {car.minBilling.toLocaleString()}/-</div>
                  <button 
                    onClick={() => handleFareDetailsClick(car)}
                    className="text-xs text-primary underline mt-1 hover:text-primary/80 transition-colors duration-200"
                  >
                    📋 Fare Details
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-gray-100">
                <button 
                  onClick={() => handleBookNowClick(car)}
                  className="bg-gray-500 text-white py-2 px-6 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors duration-200"
                >
                  BOOK NOW
                </button>
                <button 
                  onClick={() => handleEnquiryClick(car)}
                  className="bg-accent text-white py-2 px-6 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors duration-200"
                >
                  ENQUIRY NOW
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fare Details Modal */}
      {showFareDetails && selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto relative">
            {/* Header */}
            <div className="bg-yellow-300 px-6 py-4 rounded-t-2xl flex items-center justify-between">
              <h3 className="text-lg font-bold text-black">FARE DETAILS</h3>
              <button
                onClick={closeFareDetails}
                className="text-black hover:text-gray-700 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Fare Details Section */}
              <div className="mb-6">
                <h4 className="text-yellow-500 font-semibold mb-3">Fare Details</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-500">›</span>
                    <span>80 Km include in 8 Hr</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-500">›</span>
                    <span>Extra Hours: ₹ 150 per Hour</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-500">›</span>
                    <span>Extra Kms: ₹ 12 per km</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-500">›</span>
                    <span>Driver Batta Rs 350/- After 10Hr/10pm To 6Am</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-500">›</span>
                    <span>New hour billing starts when usage more than 30 mins</span>
                  </div>
                </div>
              </div>

              {/* Extra Charges Section */}
              <div>
                <h4 className="text-yellow-500 font-semibold mb-3">Extra Charges</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-500">›</span>
                    <span>Road Toll & Parking Etc. As Per Actual</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-500">›</span>
                    <span>GST will be charged as per the Govt. rules on Gross billing amount.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-500">›</span>
                    <span>Final Rental Will Be Based On Total Kms & Hrs from Our Garage To Garage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enquiry Form Modal */}
      {showEnquiryForm && selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto relative">
            {/* Header */}
            <div className="bg-yellow-300 px-6 py-4 rounded-t-2xl flex items-center justify-between">
              <h3 className="text-lg font-bold text-black">ENQUIRY</h3>
              <button
                onClick={closeEnquiryForm}
                className="text-black hover:text-gray-700 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={enquiryData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email and Phone Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={enquiryData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={enquiryData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Phone"
                    />
                  </div>
                </div>

                {/* Query Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Query
                  </label>
                  <textarea
                    name="query"
                    value={enquiryData.query}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                    placeholder="Enter your query or requirements..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 w-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Booking Form Modal */}
      {showBookingForm && selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-auto relative my-8">
            {/* Header */}
            <div className="bg-blue-100 px-6 py-4 rounded-t-2xl flex items-center justify-between border-b">
              <h3 className="text-lg font-bold text-blue-600">Car BOOKING Details</h3>
              <button
                onClick={closeBookingForm}
                className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex">
              {/* Left Side - Form */}
              <div className="flex-1 p-6">
                {/* Yellow Notice */}
                <div className="bg-yellow-200 text-center py-3 px-4 rounded-lg mb-6 text-sm">
                  Online booking will be considered as confirmed during 09:00 AM to 09:00 PM. To confirm the booking instantly, Please call us at 9141555333!
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  {/* Pickup Details */}
                  <div>
                    <h4 className="text-green-600 font-semibold text-lg mb-4">Pickup Details</h4>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">PICK UP DATE</label>
                        <input
                          type="date"
                          name="pickupDate"
                          value={bookingData.pickupDate}
                          onChange={handleBookingInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">PICKUP TIME</label>
                        <div className="flex gap-2">
                          <select
                            value={bookingData.pickupTime.split(':')[0]}
                            onChange={(e) => setBookingData(prev => ({
                              ...prev,
                              pickupTime: `${e.target.value}:${prev.pickupTime.split(':')[1]}`
                            }))}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          >
                            {Array.from({length: 24}, (_, i) => (
                              <option key={i} value={i.toString().padStart(2, '0')}>{i.toString().padStart(2, '0')}</option>
                            ))}
                          </select>
                          <select
                            value={bookingData.pickupTime.split(':')[1]}
                            onChange={(e) => setBookingData(prev => ({
                              ...prev,
                              pickupTime: `${prev.pickupTime.split(':')[0]}:${e.target.value}`
                            }))}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          >
                            <option value="00">00</option>
                            <option value="15">15</option>
                            <option value="30">30</option>
                            <option value="45">45</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">PICKUP LOCATION</label>
                        <input
                          type="text"
                          name="pickupLocation"
                          value={bookingData.pickupLocation}
                          onChange={handleBookingInputChange}
                          placeholder="Please Type Area Name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">FULL ADDRESS</label>
                        <input
                          type="text"
                          name="fullAddress"
                          value={bookingData.fullAddress}
                          onChange={handleBookingInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">REMARKS</label>
                      <textarea
                        name="remarks"
                        value={bookingData.remarks}
                        onChange={handleBookingInputChange}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                      />
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div>
                    <h4 className="text-green-600 font-semibold text-lg mb-4">Contact Details</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">NAME</label>
                        <input
                          type="text"
                          name="name"
                          value={bookingData.name}
                          onChange={handleBookingInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">EMAIL</label>
                        <input
                          type="email"
                          name="email"
                          value={bookingData.email}
                          onChange={handleBookingInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">MOBILE NUMBER</label>
                        <input
                          type="tel"
                          name="mobile"
                          value={bookingData.mobile}
                          onChange={handleBookingInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Details */}
                  <div>
                    <h4 className="text-green-600 font-semibold text-lg mb-4">Payment Details</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="paymentOption"
                          value="booking"
                          checked={bookingData.paymentOption === 'booking'}
                          onChange={handleBookingInputChange}
                          className="mr-2"
                        />
                        <span>Booking Amount (₹ 500)</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="paymentOption"
                          value="full"
                          checked={bookingData.paymentOption === 'full'}
                          onChange={handleBookingInputChange}
                          className="mr-2"
                        />
                        <span>Full Amount (₹ {selectedCar.minBilling.toLocaleString()})</span>
                      </label>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div>
                    <h4 className="text-green-600 font-semibold text-lg mb-4">Discount/Promotion Code (Optional)</h4>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        name="promoCode"
                        value={bookingData.promoCode}
                        onChange={handleBookingInputChange}
                        placeholder="Please enter Promotion Code"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <button
                        type="button"
                        className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
                      >
                        APPLY CODE
                      </button>
                    </div>
                  </div>

                  {/* Terms */}
                  <div>
                    <label className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={bookingData.agreeTerms}
                        onChange={handleBookingInputChange}
                        required
                        className="mt-1"
                      />
                      <span className="text-sm">I agree with Terms and Conditions</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors w-full"
                  >
                    CONFIRM BOOKING
                  </button>
                </form>
              </div>

              {/* Right Side - Car Details */}
              <div className="w-80 bg-blue-50 p-6 rounded-r-2xl">
                <h4 className="text-blue-600 font-semibold text-lg mb-4">FARE DETAILS</h4>
                
                <div className="mb-4">
                  <img
                    src={selectedCar.image}
                    alt={selectedCar.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                </div>

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-red-500">Car</span>
                    <span>{selectedCar.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-500">Car from</span>
                    <span>Bangalore</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-500">Service</span>
                    <span>Local</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-500">Pickup Date</span>
                    <span>Thu 27-Nov, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-500">Pickup Time</span>
                    <span>04:45 AM</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-4">
                  <div className="text-lg font-bold">Price ₹ {selectedCar.minBilling.toLocaleString()}/-</div>
                </div>

                <div className="text-xs text-gray-600 space-y-1">
                  <div className="text-green-600 font-semibold">Fare Details</div>
                  <div>80 Km include in 8 Hr</div>
                  <div>Extra Hours: ₹ 300 per Hour</div>
                  <div>Extra Kms: ₹ 25 per km</div>
                  <div>Driver Batta Rs.400/- After 8Hr/10pm To 6Am</div>
                  <div>New hour billing starts when usage more than 30 mins</div>
                  
                  <div className="text-green-600 font-semibold mt-3">Extra Charges</div>
                  <div>Road Toll & Parking Etc. As Per Actual</div>
                  <div>GST will be charged as per the Govt. rules on Gross billing amount.</div>
                  <div>Final Rental Will Be Based On Total Kms & Hrs from Our Garage To Garage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarSearchResults;






















