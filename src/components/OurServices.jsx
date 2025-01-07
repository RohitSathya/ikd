import React from 'react';
import { LayoutGrid, Newspaper, Laptop, Database, MessageSquare, Rocket } from 'lucide-react';

const OurServices = () => {
  const services = [
    {
      icon: <LayoutGrid className="w-8 h-8 text-blue-600" />,
      title: 'Social Media Management',
      description: 'Enhance your online presence with tailored social media strategies that drive engagement and results.'
    },
    {
      icon: <Newspaper className="w-8 h-8 text-blue-600" />,
      title: 'Paid Promote',
      description: 'Leverage paid promotions to reach your target audience and maximize your marketing ROI.'
    },
    {
      icon: <Laptop className="w-8 h-8 text-blue-600" />,
      title: 'Digital Marketing',
      description: 'Empower your brand with cutting-edge digital marketing techniques that deliver measurable success.'
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: 'Data Driven',
      description: 'Utilize data-driven insights to make informed decisions and optimize your marketing efforts.'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      title: 'Strategic Consulting',
      description: 'Get expert guidance to align your business strategies with market trends and opportunities.'
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
      title: 'Creative Development',
      description: 'Unleash your creativity with innovative development solutions tailored to your brand needs.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
      {/* Header Section */}
      <div className="text-center mb-12">
        <span className="text-blue-600 font-semibold text-lg uppercase tracking-wide mb-4 block">
          Our Services
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Empower Your Marketing Strategy<br />with the Right Solutions
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 relative overflow-hidden"
          >
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0"></div>

            {/* Icon Container */}
            <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 relative z-10">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
              {service.description}
            </p>

            {/* Learn More Button */}
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium relative z-10">
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-blue-100 rounded-full -z-10 opacity-30 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-100 rounded-full -z-10 opacity-30 animate-pulse" />
    </div>
  );
};

export default OurServices;
