import React from "react";
import {
  Search,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react";

const HowWeWork = () => {
  const steps = [
    {
      id: "01",
      title: "Evaluate the Project",
      description:
        "The first step in our process is understanding your business, objectives, and target audience. We perform a thorough analysis of your existing digital presence, market conditions, and competitors. This evaluation helps us identify your unique selling points and challenges, allowing us to craft a strategy tailored to your needs.",
      icon: <Search className="w-8 h-8" />,
      position: "left",
    },
    {
      id: "02",
      title: "Discover Innovative Ideas",
      description:
        "We analyze current trends, consumer behavior, and industry best practices to ensure we bring fresh, impactful strategies to the table. The goal is to devise a plan that resonates with your target audience and fosters engagement.",
      icon: <Lightbulb className="w-8 h-8" />,
      position: "right",
    },
    {
      id: "03",
      title: "Start Optimization",
      description:
        "Once the strategy is in place, we begin the optimization process. Whether it's optimizing your website for SEO, launching targeted ad campaigns, or curating engaging social media content, we ensure every element is aligned with your goals. Continuous testing and optimization are key components of our approach to ensure we’re getting the best results from every digital channel.",
      icon: <TrendingUp className="w-8 h-8" />,
      position: "left",
    },
    {
      id: "04",
      title: "Achieve Goals",
      description:
        "With all the pieces in place, we focus on achieving your business goals. By consistently monitoring and analyzing the performance of each campaign, we make data-driven adjustments that ensure your goals are not just met but exceeded. We believe in results that speak for themselves – more traffic, more leads, and ultimately, more conversions.",
      icon: <Target className="w-8 h-8" />,
      position: "right",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            How We Work
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600" />

          {/* Steps */}
          <div className="relative space-y-20">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex ${
                  step.position === "left"
                    ? "justify-start"
                    : "justify-end"
                } items-center`}
              >
                {/* Content Container */}
                <div
                  className={`relative w-full md:w-5/12 ${
                    step.position === "right" && "ml-auto"
                  }`}
                >
                  {/* Step Number */}
                  <div
                    className={`absolute top-0 ${
                      step.position === "left"
                        ? "-right-16"
                        : "-left-16"
                    } bg-gradient-to-r from-purple-600 to-blue-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center font-bold text-xl transform -translate-y-1/2`}
                  >
                    {step.id}
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="mb-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full flex items-center justify-center text-purple-600">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector */}
                  <div
                    className={`absolute top-1/2 ${
                      step.position === "left"
                        ? "right-0"
                        : "left-0"
                    } w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 transform -translate-y-1/2 ${
                      step.position === "left"
                        ? "translate-x-full"
                        : "-translate-x-full"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 md:px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
