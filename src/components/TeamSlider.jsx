import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Mail, Trophy, Target, BarChart, Sparkles, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TeamSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      name: "Ikra",
      position: "Head of Digital Strategy",
      bio: "Ikra is the visionary leader behind the digital marketing company. As the Founder & Head of Digital Strategy, she ensures every project aligns with the latest industry trends and client needs. With experience working with 50+ clients, she has expertise in diverse industries.",
      expertise: ["Digital Strategy", "Client Insights", "Industry Trends"],
      icon: <Trophy className="w-6 h-6" />,
      image: "https://via.placeholder.com/150" // Replace with Ikra's image URL
    },
    {
      name: "Deepanshi",
      position: "Director of Marketing",
      bio: "Deepanshi leads the marketing department, driving client conversions through innovative strategies. Her expertise in client acquisition transforms leads into loyal customers, delivering high-impact campaigns with measurable results.",
      expertise: ["Client Acquisition", "Campaign Strategy", "Marketing Leadership"],
      icon: <Target className="w-6 h-6" />,
      image: "https://via.placeholder.com/150" // Replace with Deepanshi's image URL
    }
    
    // ... other team members remain unchanged
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our diverse team of digital marketing specialists brings together years of experience 
            and expertise to deliver exceptional results for your business.
          </p>
        </div>

        {/* Team Slider */}
        <div className="relative">
          <div className="flex items-center justify-center gap-8 flex-wrap lg:flex-nowrap">
            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>

            {/* Team Member Cards */}
            {[-1, 0, 1].map((offset) => {
              const index = (currentSlide + offset + teamMembers.length) % teamMembers.length;
              const member = teamMembers[index];
              return (
                <Card 
                  key={index}
                  className={`transform transition-all duration-500 ${
                    offset === 0 
                      ? 'scale-100 opacity-100 z-20' 
                      : 'scale-90 opacity-60 z-10'
                  } bg-white/80 backdrop-blur-sm shadow-xl w-full max-w-sm`}
                >
                  <CardContent className="p-6">
                    <div className="relative flex flex-col items-center mb-6">
                      {/* Rounded Image */}
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-blue-600"
                      />
                      <div className="absolute -bottom-6">
                        <div className="bg-blue-600 p-3 rounded-full shadow-lg">
                          {member.icon}
                        </div>
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="text-center mt-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                      <p className="text-gray-600 mb-6">{member.bio}</p>

                      <div className="space-y-3">
                        {member.expertise.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="inline-block px-4 py-1 m-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Social Icons */}
                      <div className="flex justify-center space-x-4 mt-6">
                        <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                          <Twitter className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                          <Mail className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <button 
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {teamMembers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  currentSlide === idx ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSlider;
