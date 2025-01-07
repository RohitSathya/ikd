import React from 'react';
import { Facebook, Twitter, Linkedin, ArrowUp, Send } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-cyan-50 to-yellow-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4 whitespace-nowrap">
              IKD Marketing
            </h2>
            <p className="text-gray-600 mb-6">
              Empowering your journey with innovative and reliable solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Information</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="latestblog"
                  smooth={true}
                  duration={500}
                  className="text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="ourservices"
                  smooth={true}
                  duration={500}
                  className="text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="faq"
                  smooth={true}
                  duration={500}
                  className="text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="consultationform"
                  smooth={true}
                  duration={500}
                  className="text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="text-gray-600 mb-2">
                123 Main Street, New York, NY 10001
              </p>
              <p className="text-gray-600 mb-2">
                <a
                  href="mailto:contact@ikdmarketing.com"
                  className="hover:text-blue-600"
                >
                  contact@ikdmarketing.com
                </a>
              </p>
              <p className="text-gray-600">+1 234 567 890</p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Newsletter</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-700">
                <Send size={24} />
              </button>
            </div>
            <p className="mt-4 text-gray-600">
              Stay updated with our latest news and offers.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-sm text-center md:text-left">
            &copy;2024 IKD Marketing. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              Support
            </a>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 bg-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <ArrowUp size={24} className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
