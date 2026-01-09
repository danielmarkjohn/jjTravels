import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onFleetClick?: () => void;
  onAboutClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onFleetClick, onAboutClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (item: string) => {
    if (item === 'Fleet' && onFleetClick) {
      onFleetClick();
      setIsMobileMenuOpen(false);
    } else if (item === 'About' && onAboutClick) {
      onAboutClick();
      setIsMobileMenuOpen(false);
    } else {
      // Handle other navigation items
      const element = document.getElementById(item.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-surface/95 backdrop-blur-md shadow-lg border-b border-primary/10' 
          : 'bg-surface/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center group cursor-pointer">
              <div className="bg-gradient-to-br from-accent to-accent/80 text-primary px-4 py-2 rounded-xl font-bold text-xl lg:text-2xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                JJ
              </div>
              <span className="ml-3 text-primary font-bold text-xl lg:text-2xl tracking-wide">
                TRAVELS
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {['Home', 'Fleet', 'Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="relative text-neutral hover:text-primary font-medium text-sm xl:text-base transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Desktop Contact Info */}
            <div className="hidden xl:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-primary">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="font-semibold text-sm">9141555333</span>
              </div>
              
              <button className="bg-primary hover:bg-secondary text-surface px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors duration-200"
            >
              <svg 
                className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div 
          className="absolute inset-0 bg-neutral/50 backdrop-blur-sm"
          onClick={toggleMobileMenu}
        ></div>
        
        <div className={`absolute top-16 left-0 right-0 bg-surface shadow-2xl border-t border-primary/10 transition-all duration-300 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <nav className="px-4 py-6 space-y-1">
            {['Home', 'Fleet', 'Services', 'About', 'Contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left px-4 py-3 text-neutral hover:text-primary hover:bg-primary/5 rounded-lg font-medium transition-all duration-200 transform ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item}
              </button>
            ))}
            
            {/* Mobile Contact & CTA */}
            <div className="pt-4 mt-4 border-t border-primary/10 space-y-3">
              <div className="flex items-center space-x-3 px-4 py-2 bg-accent/5 rounded-lg">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="font-semibold text-primary">9141555333</span>
              </div>
              
              <button className="w-full bg-primary hover:bg-secondary text-surface py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg">
                Book Now
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;



