import React, { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Header1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Homepage', to: 'hero' },
    { label: 'About us', to: 't1' },
    { label: 'Services', to: 'ourservices' },
    { label: 'Blog', to: 'latestblog' },
    { label: 'Contact us', to: 'consultationform' },
  ];

  const buttonStyles = 
    "bg-gradient-to-r from-[#07e7e7] via-[#0d6efd] to-[#ff69b4] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:from-blue-600 hover:to-pink-500 transition-all duration-200 font-semibold text-base md:text-lg whitespace-nowrap";

  const handleMenuClick = (item) => {
    if (item.label === 'Homepage') {
      navigate('/');
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-20 lg:h-24">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img
              src="https://i.postimg.cc/L87Zm2xB/ikd-2-removebg-preview.png"
              alt="Buzzbiz Logo"
              onClick={() => navigate('/')}
              className="h-8 sm:h-12 md:h-16 w-auto cursor-pointer transition-transform duration-200 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-6">
            {menuItems.map((item) => (
              <div
                key={item.label}
                onClick={() => handleMenuClick(item)}
                className="text-gray-600 hover:text-[#0d6efd] transition-colors duration-200 font-medium text-sm lg:text-base cursor-pointer px-2"
              >
                {item.label === 'Homepage' ? (
                  <span>{item.label}</span>
                ) : (
                  <Link 
                    to={item.to} 
                    smooth={true} 
                    duration={500} 
                    offset={-96}
                    className="whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Get Started Button */}
          <div className="hidden md:flex items-center ml-4">
            <button className={buttonStyles}>GET STARTED</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="px-4 py-3 space-y-2">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  onClick={() => handleMenuClick(item)}
                  className="block px-3 py-2 text-gray-600 hover:text-[#0d6efd] hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium text-base cursor-pointer"
                >
                  {item.label === 'Homepage' ? (
                    <span>{item.label}</span>
                  ) : (
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-96}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <button className={`${buttonStyles} w-full justify-center`}>
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header1;
