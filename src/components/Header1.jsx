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
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Buzzbiz Logo" className="h-10 w-auto mr-2" />
            <span className="text-gray-900 text-xl font-semibold">IKD Marketing</span>
          </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80} // Adjust for header height
                className="text-gray-600 hover:text-[#0d6efd] transition-colors duration-200 font-medium cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Get Started Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-[#0d6efd] text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 font-medium">
              GET STARTED
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-gray-600 hover:text-[#0d6efd] transition-colors duration-200 font-medium cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
              <button className="w-full mt-2 bg-[#0d6efd] text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 font-medium">
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
