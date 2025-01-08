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
   <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600">
            We follow a structured approach to ensure exceptional results for
            every project.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
            >
              {/* Step Icon */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white mb-6">
                {step.icon}
              </div>
              {/* Step Number */}
              <div className="text-lg font-bold text-purple-600 mb-2">
                Step {step.id}
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {step.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
