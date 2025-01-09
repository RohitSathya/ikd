import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Share2, Settings, Headphones, LineChart, DollarSign, ChevronRight } from 'lucide-react';
import { 
  RadialBarChart, 
  RadialBar, 
  PolarGrid,
  ResponsiveContainer
} from 'recharts';

const ChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'We Deliver on Time',
      description: 'Time is crucial. We understand the importance of deadlines and are committed to delivering all projects on time without compromising quality.',
      color: '#60A5FA',
      value: 98,
      stat: '98% On-time Delivery'
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Social Media Results',
      description: 'Our targeted campaigns and engaging strategies boost your brand\'s visibility, leading to tangible results and increased ROI.',
      color: '#34D399',
      value: 85,
      stat: '85% Engagement Rate'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Customized Strategies',
      description: 'We don\'t believe in a one-size-fits-all approach. Every client receives tailored strategies that align with their goals.',
      color: '#F472B6',
      value: 92,
      stat: '92% Client Satisfaction'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Dedicated Support',
      description: 'Our team provides ongoing support, ensuring all your questions are answered and your campaigns are constantly improving.',
      color: '#A78BFA',
      value: 95,
      stat: '95% Support Response'
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: 'Transparent Reporting',
      description: 'We offer transparent and easy-to-understand reports that let you track the progress and success of your campaigns.',
      color: '#FBBF24',
      value: 90,
      stat: '90% Report Clarity'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Affordable Price',
      description: 'Whether you\'re a small business or a large enterprise, our flexible packages can be customized to fit your budget.',
      color: '#EC4899',
      value: 88,
      stat: '88% Cost Efficiency'
    }
  ];

  const chartData = features.map(feature => ({
    name: feature.title,
    value: feature.value,
    fill: feature.color
  }));

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Animated Background Patterns */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent pb-4">
          Top Digital Marketing Company in Delhi
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
          We focus on providing exceptional results through personalized services. Here's why Inspire Strategies stands out.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveFeature(index)}
                className={`cursor-pointer group ${activeFeature === index ? 'bg-white/10' : 'hover:bg-white/5'} rounded-2xl p-6 transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    {React.cloneElement(feature.icon, { 
                      className: "w-6 h-6",
                      style: { color: feature.color }
                    })}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <ChevronRight 
                        className={`w-5 h-5 transform transition-transform ${
                          activeFeature === index ? 'rotate-90' : 'rotate-0'
                        }`}
                      />
                    </div>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                    <div className="mt-3 text-sm font-medium" style={{ color: feature.color }}>
                      
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Interactive Chart */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[600px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart 
                innerRadius="30%" 
                outerRadius="100%" 
                data={chartData} 
                startAngle={0} 
                endAngle={360}
              >
                <PolarGrid />
                <RadialBar
                  minAngle={15}
                  background
                  clockWise={true}
                  dataKey="value"
                  cornerRadius={12}
                  animate={true}
                />
              </RadialBarChart>
            </ResponsiveContainer>
            
            {/* Center Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-full p-8"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  93%
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  Client Success Rate
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;  
