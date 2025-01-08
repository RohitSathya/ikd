import React from "react";
import { Search, Lightbulb, Target, TrendingUp } from "lucide-react";

const HowWeWork = () => {
  const steps = [
    {
      id: "01",
      title: "Client Consultation",
      description:
        "We begin by collecting comprehensive information about your business needs, goals, and vision. This initial consultation helps us understand your unique requirements and challenges.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      id: "02",
      title: "Planning and Strategy",
      description:
        "Based on the consultation, we develop a detailed strategic plan that outlines our approach, timeline, and expected outcomes to achieve your business objectives.",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      id: "03",
      title: "Implementation",
      description:
        "Our expert team executes the planned strategies using industry best practices and cutting-edge technologies to deliver exceptional results.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      id: "04",
      title: "Monitoring & Optimization",
      description:
        "We continuously monitor progress and optimize our approach to ensure we meet and exceed your business goals and expectations.",
      icon: <Target className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      {/* Header Section with Hexagonal Design */}
      <div className="relative max-w-7xl mx-auto mb-20">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-24 w-80 bg-blue-600 transform rotate-0 skew-x-12 -skew-y-6"></div>
          </div>
          <h1 className="relative text-4xl font-bold text-center text-white py-6">
            How We Work
          </h1>
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-600"></div>

          {/* Steps Container */}
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-20 w-0.5 bg-purple-600" 
                       style={{ top: "100%" }}></div>
                )}

                {/* Step Card */}
                <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <div className="w-full md:w-5/12 bg-white rounded-lg shadow-xl p-6 relative">
                    {/* Step Number */}
                    <div className="absolute -top-6 left-0 bg-purple-600 text-white px-6 py-2 rounded-tr-2xl rounded-bl-2xl font-bold">
                      Step {step.id}
                    </div>

                    {/* Content */}
                    <div className="mt-6">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-purple-100 rounded-full mr-4">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Connector Dot */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-purple-600 rounded-full"
                         style={{
                           [index % 2 === 0 ? "right" : "left"]: "-2rem",
                         }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
