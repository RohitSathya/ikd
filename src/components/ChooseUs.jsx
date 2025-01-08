import React from 'react';
import { Clock, Share2, Settings, Headphones, LineChart, DollarSign } from 'lucide-react';

const ChooseUs = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: 'We Deliver on Time',
      description: 'Time is crucial. We understand the importance of deadlines and are committed to delivering all projects on time without compromising quality.'
    },
    {
      icon: <Share2 className="w-8 h-8 text-white" />,
      title: 'Our Social Media Efforts Show Results',
      description: 'As the Best Social Media Agency in Delhi, our targeted campaigns and engaging strategies boost your brand\'s visibility, leading to tangible results and increased ROI.'
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: 'Customized Strategies for Your Business',
      description: 'We don\'t believe in a one-size-fits-all approach. Every client receives tailored strategies that align with their goals, helping them reach the right audience effectively.'
    },
    {
      icon: <Headphones className="w-8 h-8 text-white" />,
      title: 'Dedicated Client Support',
      description: 'Our team provides ongoing support, ensuring all your questions are answered and your campaigns are constantly improving.'
    },
    {
      icon: <LineChart className="w-8 h-8 text-white" />,
      title: 'Transparent Reporting',
      description: 'We offer transparent and easy-to-understand reports that let you track the progress and success of your campaigns.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: 'Affordable Price',
      description: 'Whether you\'re a small business or a large enterprise, our flexible packages can be customized to fit your budget and growth needs.'
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
              Top Digital Marketing Company in Delhi
            </h2>
            {/* Description */}
            <p className="text-gray-300 text-xl mb-12 leading-relaxed">
              We focus on providing exceptional results through personalized services. Here's why Inspire Strategies stands out.
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
                alt="Professional digital marketing team"
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
