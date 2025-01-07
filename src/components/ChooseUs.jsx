import React from 'react';
import { Diamond, TrendingUp, Tag } from 'lucide-react';

const ChooseUs = () => {
  const features = [
    {
      icon: <Diamond className="w-8 h-8 text-white" />,
      title: 'Promote Your Product & Brand',
      description: 'Drive visibility and engagement for your products and brand with innovative strategies that deliver results.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: 'Growing & Scale Up Businesses',
      description: 'Empower your business with proven growth techniques to scale efficiently and effectively.'
    },
    {
      icon: <Tag className="w-8 h-8 text-white" />,
      title: 'Success Campaign on Social',
      description: 'Achieve unparalleled success with expertly crafted social media campaigns tailored for impact.'
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-[#0a1f44] via-[#1b2b5a] to-[#0a1f44] min-h-screen">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] to-transparent opacity-90" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Section Tag */}
            <span className="text-blue-400 text-lg font-medium mb-4 block uppercase tracking-wide">
              Why Choose Us
            </span>

            {/* Main Heading */}
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Optimize your social efforts for greater impact.
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-xl mb-12 leading-relaxed">
              We provide tailored solutions that empower your brand to reach new heights. Unlock your potential with our expert guidance and innovative strategies.
            </p>

            {/* Feature List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-6">
                  {/* Icon Container */}
                  <div className="bg-blue-600 p-4 rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2">
            <div className="h-full relative">
              <img
                src="https://web.moxcreative.com/buzzbiz/wp-content/uploads/sites/27/2023/04/img4_.png"
                alt="Professional with laptop"
                className="h-full w-full object-cover object-center rounded-lg shadow-2xl hover:shadow-blue-500/50 transition-shadow duration-300"
              />
              {/* Overlay gradient for smooth transition */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a1f44] opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
