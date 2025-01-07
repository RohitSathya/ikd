import React from 'react';
import { 
  Camera, 
  Stethoscope, 
  Heart, 
  Home, 
  Globe, 
  Users, 
  School, 
  Paintbrush, 
  Factory, 
  DollarSign, 
  Building, 
  Hammer,
  Calendar, // Alternative for Event
  UtensilsCrossed // Alternative for FastFood
} from 'lucide-react';

const IndustryExpertise = () => {
  const industries = [
    { name: 'Photography', profession: 'Professional Photographers', icon: <Camera className="w-6 h-6 text-blue-600" /> },
    { name: 'Event Management', profession: 'Event Planners & Coordinators', icon: <Calendar className="w-6 h-6 text-blue-600" /> },
    { name: 'Medical', profession: 'Doctors & Healthcare Professionals', icon: <Stethoscope className="w-6 h-6 text-blue-600" /> },
    { name: 'Healthcare', profession: 'Healthcare Providers', icon: <Heart className="w-6 h-6 text-blue-600" /> },
    { name: 'Interior Design', profession: 'Interior Designers & Decorators', icon: <Home className="w-6 h-6 text-blue-600" /> },
    { name: 'Immigration', profession: 'Immigration Consultants', icon: <Globe className="w-6 h-6 text-blue-600" /> },
    { name: 'NGO', profession: 'Non-Profit Organizations', icon: <Users className="w-6 h-6 text-blue-600" /> },
    { name: 'Education', profession: 'Educators & Institutions', icon: <School className="w-6 h-6 text-blue-600" /> },
    { name: 'Art & Decor', profession: 'Artists & Decorators', icon: <Paintbrush className="w-6 h-6 text-blue-600" /> },
    { name: 'Manufacturing', profession: 'Manufacturers & Producers', icon: <Factory className="w-6 h-6 text-blue-600" /> },
    { name: 'Food & Beverages', profession: 'Restaurants & Caterers', icon: <UtensilsCrossed className="w-6 h-6 text-blue-600" /> },
    { name: 'Finance', profession: 'Financial Advisors', icon: <DollarSign className="w-6 h-6 text-blue-600" /> },
    { name: 'Real Estate', profession: 'Realtors & Property Managers', icon: <Building className="w-6 h-6 text-blue-600" /> },
    { name: 'Construction', profession: 'Contractors & Builders', icon: <Hammer className="w-6 h-6 text-blue-600" /> }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full">
            Industry Expertise
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Tailored Solutions for Every Industry
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover how our expertise can transform your business across various sectors
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  {industry.profession}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
            <span>Get Started Today</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustryExpertise;