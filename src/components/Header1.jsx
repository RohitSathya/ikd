import React, { useState } from 'react';
import { Menu as MenuIcon } from 'lucide-react';
import { Link } from 'react-scroll';
import logo from '../images/ikd.jpg'

const Header1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { label: 'Homepage', to: 'hero' },
    { label: 'About us', to: 't1' },
    { label: 'Services', to: 'ourservices' },
    { label: 'Contact us', to: 'consultationform' },
    { label: 'Our Team', to: 'ts' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24"> {/* Increased header height */}
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src={logo} 
              alt="Buzzbiz Logo" 
              className="h-12 w-auto sm:h-16 md:h-20 mr-3 sm:mr-4 transition-all duration-200" // Increased logo size
            />
            <span className="text-gray-900 text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight transition-all duration-200">
              IKD Marketing
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-96} // Adjusted for new header height
                className="text-gray-600 hover:text-[#0d6efd] transition-colors duration-200 font-medium text-lg cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Get Started Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-[#0d6efd] text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-semibold text-lg">
              GET STARTED
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              <MenuIcon className="h-8 w-8" /> {/* Increased menu icon size */}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-96}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-gray-600 hover:text-[#0d6efd] transition-colors duration-200 font-medium text-lg cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
              <button className="w-full mt-3 bg-[#0d6efd] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-semibold text-lg">
                GET STARTED
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header1;
