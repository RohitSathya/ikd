import React, { useState } from 'react';
import { Menu as MenuIcon } from 'lucide-react';
import { Link } from 'react-scroll';
import logo from '../images/ikd.jpg';
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
    "bg-gradient-to-r from-[#07e7e7] via-[#0d6efd] to-[#ff69b4] text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-pink-500 transition-colors duration-200 font-semibold text-lg";

  const handleMenuClick = (item) => {
    if (item.label === 'Homepage') {
      navigate('/');
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={logo}
              alt="Buzzbiz Logo"
              onClick={() => navigate('/')}
              className="h-16 w-auto sm:h-20 md:h-24 lg:h-28 transition-all duration-200 cursor-pointer"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.label}
                onClick={() => handleMenuClick(item)}
                className={`text-gray-600 hover:text-[#0d6efd] transition-colors duration-200 font-medium text-lg cursor-pointer`}
              >
                {item.label === 'Homepage' ? (
                  <span>{item.label}</span>
                ) : (
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-96}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Get Started Button */}
          <div className="hidden md:flex items-center">
            <button className={buttonStyles}>GET STARTED</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              <MenuIcon className="h-8 w-8" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  onClick={() => handleMenuClick(item)}
                  className="block px-4 py-3 text-gray-600 hover:text-[#0d6efd] transition-colors duration-200 font-medium text-lg cursor-pointer"
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
              <button className={buttonStyles}>GET STARTED</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header1;
