import React from 'react';
import Header from '../components/Header';

interface AboutPageProps {
  onBack?: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
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
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About JJ Travels</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              19 Years of Excellence in Premium Travel Services
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Company Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-neutral mb-8 text-center">Who We Are</h2>
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <p className="text-lg text-neutral/80 leading-relaxed mb-6">
                  Founded in <span className="font-semibold text-primary">2006</span>, JJ Travels is a premier luxury travel agency offering high-end corporate and event transportation. With <span className="font-semibold text-primary">19 years of excellence</span>, we are known for our punctuality, discipline, and 5-star service, catering to high-end and elite clients.
                </p>
                <p className="text-lg text-neutral/80 leading-relaxed">
                  Our fleet includes luxury cars, Tempo Travelers, and AC coach buses, providing corporate travel, wedding bookings, and special event transportation across Bangalore and other major cities. Every vehicle is sanitized, air-conditioned, and equipped with essential amenities, ensuring a seamless and comfortable journey.
                </p>
              </div>
            </div>

            {/* What Makes Us Unique */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-neutral mb-8 text-center">What Makes Us Unique</h2>
              <p className="text-lg text-neutral/70 text-center mb-12 max-w-3xl mx-auto">
                At JJ Travels, we redefine travel with luxury, professionalism, and reliability. Our premium services are tailored for corporate executives, high-end clients, and special events, ensuring a seamless experience every time.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Luxury Fleet */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral mb-3">Luxury Fleet</h3>
                  <p className="text-neutral/70 mb-4">Premium cars including Toyota Crysta, Hycross, Fortuner, Mercedes Benz E-Class, BMW 5 Series, Audi A6, and luxury coaches.</p>
                </div>

                {/* Punctual & Professional */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral mb-3">Punctual & Professional</h3>
                  <p className="text-neutral/70 mb-4">Timely pickups, well-trained chauffeurs, and disciplined service ensuring you reach your destination on time.</p>
                </div>

                {/* Hygiene & Safety */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral mb-3">Hygiene & Safety</h3>
                  <p className="text-neutral/70 mb-4">Sanitized, air-conditioned vehicles with water bottles, first aid kit, and fire extinguisher for your safety.</p>
                </div>

                {/* Exclusive Comfort */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral mb-3">Exclusive Comfort</h3>
                  <p className="text-neutral/70 mb-4">Ice box with snacks and drinks (on request) in premium vehicles for enhanced comfort during your journey.</p>
                </div>

                {/* Corporate & Event Experts */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral mb-3">Corporate & Event Experts</h3>
                  <p className="text-neutral/70 mb-4">Tailored travel solutions for business teams, weddings, and special events with dedicated service.</p>
                </div>

                {/* Pan-India Reach */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral mb-3">Pan-India Reach</h3>
                  <p className="text-neutral/70 mb-4">Based in Bangalore and Hyderabad, serving Tamil Nadu, Kerala, Mumbai, Delhi, and beyond.</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Experience 5-Star Travel</h2>
              <p className="text-xl mb-8 text-white/90">
                With 19 years of excellence, we deliver hassle-free travel experiences designed for elite clients.
              </p>
              <button className="bg-accent text-primary px-8 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:scale-105">
                Book Your Journey
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;

