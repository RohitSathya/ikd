import React from 'react';
import {
  Search,
  Lightbulb,
  TrendingUp,
  Target
} from 'lucide-react';

const HowWeWork = () => {
  const steps = [
    {
      id: 1,
      icon: <Search className="w-8 h-8" />,
      title: "Evaluate the Project",
      description: "The first step in our process is understanding your business, objectives, and target audience. We perform a thorough analysis of your existing digital presence, market conditions, and competitors. This evaluation helps us identify your unique selling points and challenges, allowing us to craft a strategy tailored to your needs."
    },
    {
      id: 2,
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Discover Innovative Ideas",
      description: "We analyze current trends, consumer behavior, and industry best practices to ensure we bring fresh, impactful strategies to the table. The goal is to devise a plan that resonates with your target audience and fosters engagement."
    },
    {
      id: 3,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Start Optimization",
      description: "Once the strategy is in place, we begin the optimization process. Whether it's optimizing your website for SEO, launching targeted ad campaigns, or curating engaging social media content, we ensure every element is aligned with your goals. Continuous testing and optimization are key components of our approach to ensure we're getting the best results from every digital channel."
    },
    {
      id: 4,
      icon: <Target className="w-8 h-8" />,
      title: "Achieve Goals",
      description: "With all the pieces in place, we focus on achieving your business goals. By consistently monitoring and analyzing the performance of each campaign, we make data-driven adjustments that ensure your goals are not just met but exceeded. We believe in results that speak for themselves – more traffic, more leads, and ultimately, more conversions."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">We follow a systematic approach</h2>
          <p className="text-xl text-gray-600">to ensure that every project is executed to perfection.</p>
        </div>

        <div className="space-y-12">
          {steps.map((step) => (
            <div key={step.id} className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    {step.icon}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-3xl font-bold text-blue-600">{step.id}</span>
                    <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
