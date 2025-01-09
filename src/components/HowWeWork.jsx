import React from "react";
import { motion } from "framer-motion";
import { Search, Lightbulb, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowWeWork = () => {
  const steps = [
    {
      id: "01",
      title: "Evaluate the Project",
      description:
        "The first step in our process is understanding your business, objectives, and target audience. We perform a thorough analysis of your existing digital presence, market conditions, and competitors.",
      icon: <Search className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      position: "left",
    },
    {
      id: "02",
      title: "Discover Innovative Ideas",
      description:
        "We analyze current trends, consumer behavior, and industry best practices to ensure we bring fresh, impactful strategies to the table.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      position: "right",
    },
    {
      id: "03",
      title: "Start Optimization",
      description:
        "Once the strategy is in place, we begin the optimization process. Whether it's optimizing your website for SEO, launching targeted ad campaigns, or curating engaging social media content.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      position: "left",
    },
    {
      id: "04",
      title: "Achieve Goals",
      description:
        "With all the pieces in place, we focus on achieving your business goals. By consistently monitoring and analyzing the performance of each campaign, we make data-driven adjustments.",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      position: "right",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent pb-2">
            How We Work
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl mt-4 max-w-2xl mx-auto">
            We follow a systematic approach to ensure that every project is executed to perfection.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          {/* Steps */}
          <div className="relative space-y-24">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className={`flex ${
                  step.position === "left" ? "justify-start" : "justify-end"
                } items-center`}
              >
                <div className={`relative w-full md:w-5/12 ${
                  step.position === "right" && "ml-auto"
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <Card className="bg-gray-900/50 border-0 backdrop-blur-sm">
                      <CardContent className="p-8">
                        {/* Step Number */}
                        <div className={`absolute top-0 ${
                          step.position === "left" ? "-right-16" : "-left-16"
                        } bg-gradient-to-r ${step.color} w-14 h-14 rounded-full shadow-lg flex items-center justify-center font-bold text-2xl transform -translate-y-1/2`}>
                          {step.id}
                        </div>

                        <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center transform rotate-3 transition-transform group-hover:rotate-6 duration-300`}>
                          {React.cloneElement(step.icon, { className: "w-8 h-8 text-white" })}
                        </div>
                        
                        <h3 className="text-2xl font-bold mt-6 mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          {step.title}
                        </h3>
                        
                        <p className="text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>

                    {/* Connector */}
                    <div className={`absolute top-1/2 ${
                      step.position === "left" ? "right-0" : "left-0"
                    } w-16 h-0.5 bg-gradient-to-r ${step.color} transform -translate-y-1/2 ${
                      step.position === "left" ? "translate-x-full" : "-translate-x-full"
                    }`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowWeWork;
