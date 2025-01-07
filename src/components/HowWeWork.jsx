import React from 'react';
import { 
  Search, 
  Lightbulb, 
  Target, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Users,
  BarChart,
  PieChart,
  Rocket
} from 'lucide-react';

const HowWeWork = () => {
  const steps = [
    {
      id: 1,
      title: "Evaluate the Project",
      description: "We begin with a comprehensive analysis of your business, market position, and digital presence. Our team conducts detailed audits of your current marketing efforts and identifies key opportunities for growth.",
      icon: <Search className="w-8 h-8" />,
      subPoints: [
        { text: "Market Analysis", icon: <PieChart className="w-5 h-5" /> },
        { text: "Competitor Research", icon: <Users className="w-5 h-5" /> },
        { text: "Performance Audit", icon: <BarChart className="w-5 h-5" /> }
      ]
    },
    {
      id: 2,
      title: "Discover Innovative Ideas",
      description: "Our creative team brainstorms cutting-edge strategies tailored to your unique business needs. We focus on innovative solutions that set you apart from competitors and resonate with your target audience.",
      icon: <Lightbulb className="w-8 h-8" />,
      subPoints: [
        { text: "Creative Brainstorming", icon: <Lightbulb className="w-5 h-5" /> },
        { text: "Strategy Development", icon: <Target className="w-5 h-5" /> },
        { text: "Action Plan Creation", icon: <CheckCircle className="w-5 h-5" /> }
      ]
    },
    {
      id: 3,
      title: "Start Optimization",
      description: "We implement data-driven optimizations across all channels. Our team continuously monitors performance metrics and makes real-time adjustments to maximize your marketing ROI.",
      icon: <TrendingUp className="w-8 h-8" />,
      subPoints: [
        { text: "Campaign Launch", icon: <Rocket className="w-5 h-5" /> },
        { text: "Performance Tracking", icon: <TrendingUp className="w-5 h-5" /> },
        { text: "Continuous Improvement", icon: <ArrowRight className="w-5 h-5" /> }
      ]
    },
    {
      id: 4,
      title: "Achieve Goals",
      description: "We measure success through tangible results and achieved objectives. Our team provides detailed reporting on KPIs and ensures your marketing goals align with business growth.",
      icon: <Target className="w-8 h-8" />,
      subPoints: [
        { text: "Goal Achievement", icon: <Target className="w-5 h-5" /> },
        { text: "Results Analysis", icon: <BarChart className="w-5 h-5" /> },
        { text: "Growth Planning", icon: <TrendingUp className="w-5 h-5" /> }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            How We Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our proven process ensures consistent results and exceptional service delivery
            for all your digital marketing needs.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform -translate-y-1/2 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="group relative"
              >
                {/* Step Card */}
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-4">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-2">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {step.description}
                  </p>

                  {/* Sub Points */}
                  <div className="space-y-4">
                    {step.subPoints.map((point, idx) => (
                      <div key={idx} className="flex items-center space-x-4 text-gray-700">
                        <div className="text-indigo-600">
                          {point.icon}
                        </div>
                        <span>{point.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connection Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-8 h-8 text-purple-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            Start Your Project Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
