import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AcademicCapIcon, HeartIcon, BuildingOfficeIcon, GlobeAltIcon, UserIcon, 
  PaintBrushIcon, WrenchIcon, BanknotesIcon, BriefcaseIcon, HomeModernIcon, CameraIcon,
  LightBulbIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";


const IndustryExpertise = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const industries = [
    {
      name: "Photography",
      icon: <CameraIcon className='w-8 h-8'/>,
      description: "Professional photography solutions",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      name: "Event Management",
      icon: <CalendarDaysIcon className="w-8 h-8" />,
      description: "Complete event planning services",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      name: "Healthcare",
      icon: <HeartIcon className="w-8 h-8" />,
      description: "Modern healthcare solutions",
      bgColor: "bg-red-50",
      textColor: "text-red-600"
    },
    {
      name: "Interior Design",
      icon: <HomeModernIcon className="w-8 h-8" />,
      description: "Innovative interior concepts",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600"
    },
    {
      name: "Immigration",
      icon: <GlobeAltIcon className="w-8 h-8" />,
      description: "Global immigration services",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      name: "NGO",
      icon: <UserIcon className="w-8 h-8" />,
      description: "Non-profit organization support",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600"
    },
    {
      name: "Education",
      icon: <AcademicCapIcon className="w-8 h-8" />,
      description: "Educational technology solutions",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-600"
    },
    {
      name: "Art & Decor",
      icon: <PaintBrushIcon className="w-8 h-8" />,
      description: "Creative art solutions",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600"
    },
    {
      name: "Manufacturing",
      icon: <WrenchIcon className="w-8 h-8" />,
      description: "Industrial manufacturing expertise",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    },
    {
      name: "Food & Beverages",
      icon: <BanknotesIcon className="w-8 h-8" />,
      description: "F&B industry solutions",
      bgColor: "bg-lime-50",
      textColor: "text-lime-600"
    },
    {
      name: "Finance",
      icon: <BriefcaseIcon className="w-8 h-8" />,
      description: "Financial technology services",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600"
    },
    {
      name: "Real Estate",
      icon: <BuildingOfficeIcon className="w-8 h-8" />,
      description: "Property management solutions",
      bgColor: "bg-violet-50",
      textColor: "text-violet-600"
    },
    {
      name: "Construction",
      icon: <LightBulbIcon className="w-8 h-8" />,
      description: "Property management solutions",
      bgColor: "bg-violet-50",
      textColor: "text-violet-600"
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="relative inline-block">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-6 py-2 rounded-full">
              Industry Expertise
            </span>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-20"></div>
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Customized Solutions for All Industries
          </h2>
          
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            As the best digital marketing agency in Delhi, our team of seasoned experts understands 
            the unique dynamics of your industry. We create highly targeted strategies that engage 
            and convert your niche audience.Whether you're a startup or an established brand, we provide services that are intended to increase success in your industry.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Link to={`/industry/${industry.name}`}>
                <div className={`relative overflow-hidden rounded-xl ${industry.bgColor} p-6 shadow-lg transition-all duration-300`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-80"></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    <motion.div
                      animate={{
                        rotate: hoveredIndex === index ? 360 : 0
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className={`p-4 rounded-full ${industry.bgColor}`}
                    >
                      <div className={`${industry.textColor}`}>
                        {typeof industry.icon === "string" ? (
                          <img src={industry.icon} alt={industry.name} className="w-10 h-10" />
                        ) : (
                          industry.icon
                        )}
                      </div>
                    </motion.div>

                    <div className="space-y-2">
                      <h3 className={`text-xl font-bold ${industry.textColor}`}>
                        {industry.name}
                      </h3>
                      <p className="text-sm text-gray-600">{industry.description}</p>
                    </div>

                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? [1, 1.2, 1] : 1
                      }}
                      transition={{ duration: 0.3 }}
                      className={`absolute bottom-0 left-0 h-1 w-full ${industry.textColor.replace('text', 'bg')} opacity-20`}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default IndustryExpertise;
