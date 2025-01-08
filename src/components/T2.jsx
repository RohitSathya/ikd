import React from "react";
import { Link } from "react-router-dom";
import {
  AcademicCapIcon,
  HeartIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  UsersIcon,
  PaintBrushIcon,
  WrenchIcon,
  BanknotesIcon,
  BriefcaseIcon,
  HomeModernIcon,
  LightBulbIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

const IndustryExpertise = () => {
  const industries = [
    { name: "Photography", icon: "https://cdn-icons-png.flaticon.com/512/3280/3280594.png" },
    { name: "Event Management", icon: <CalendarDaysIcon className="w-8 h-8 text-blue-600" /> },
    // { name: "Medical", icon: <HeartIcon className="w-8 h-8 text-blue-600" /> },
    { name: "Healthcare", icon: <HeartIcon className="w-8 h-8 text-blue-600" /> },
    { name: "Interior Design", icon: <HomeModernIcon className="w-8 h-8 text-blue-600" /> },
    { name: "Immigration", icon: <GlobeAltIcon className="w-8 h-8 text-blue-600" /> },
    { name: "NGO", icon: <UsersIcon className="w-8 h-8 text-blue-600" /> },
    { name: "Education", icon: <AcademicCapIcon className="w-8 h-8 text-blue-600" /> },
    { name: "Art & Decor", icon: <PaintBrushIcon className="w-8 h-8 text-blue-600" /> },
    { name: "Manufacturing", icon: <WrenchIcon className="w-8 h-8 text-blue-600" /> },
    { name: "Food & Beverages", icon: <BanknotesIcon className="w-8 h-8 text-blue-600" /> },
    { name: "Finance", icon: <BriefcaseIcon className="w-8 h-8 text-blue-600" /> },
    { name: "Real Estate", icon: <BuildingOfficeIcon className="w-8 h-8 text-blue-600" /> },
    { name: "Construction", icon: <LightBulbIcon className="w-8 h-8 text-blue-600" /> },
  ];

  return (
  <div className="bg-gradient-to-b from-white to-blue-50 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full">
        Industry Expertise
      </span>
      <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Customized Solutions for All Industries
      </h2>
      <p className="mt-4 text-xl text-gray-600">
        As the best digital marketing agency in Delhi, our team of seasoned experts understands the unique dynamics of your industry. We create highly targeted strategies that engage and convert your niche audience. Whether you're a startup or an established brand, we provide services that are intended to increase success in your industry.
      </p>
    </div>

    {/* Industries Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {industries.map((industry, index) => (
        <Link to={`/industry/${industry.name}`} key={index}>
          <div
            className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                {typeof industry.icon === "string" ? (
                  <img src={industry.icon} alt={industry.name} className="w-10 h-10" />
                ) : (
                  industry.icon
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {industry.name}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>

  );
};

export default IndustryExpertise;
