import React from 'react';

const T1 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Image with Experience Badge */}
        <div className="relative">
          <div className="rounded-3xl shadow-xl overflow-hidden relative transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://web.moxcreative.com/buzzbiz/wp-content/uploads/sites/27/2023/04/group-of-multiracial-young-friends-with-coats-and-hats-smiling-and-watching-the-social-media-with-a.jpg"
              alt="People collaborating"
              className="w-full h-full object-cover"
            />
            {/* Experience Badge */}
            <div className="absolute -top-8 -right-8 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white rounded-full p-6 shadow-lg transform hover:scale-110 transition-transform duration-300">
              <div className="text-center">
                <span className="text-4xl font-extrabold">15+</span>
                <div className="text-sm mt-1">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - About Us Content */}
        <div className="space-y-8">
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-wide">
            About Us
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            At <span className="text-blue-600 font-bold">IKD Marketing</span>, we specialize in crafting powerful digital marketing solutions that elevate businesses to new heights. 
            With over 15 years of experience, we are committed to helping our clients build meaningful connections, drive growth, and achieve exceptional results in the ever-evolving digital landscape.
          </p>

          {/* Mission Statement */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              To empower businesses by providing innovative strategies, data-driven insights, 
              and creative solutions that spark inspiration and deliver measurable success.
            </p>
          </div>

          {/* Bullet Points */}
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-center gap-3">
              <span className="bg-blue-500 text-white p-2 rounded-full">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Custom digital marketing strategies for every client
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-green-500 text-white p-2 rounded-full">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Expertise in social media, SEO, and content marketing
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-purple-500 text-white p-2 rounded-full">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Proven track record of delivering measurable results
            </li>
          </ul>

          {/* Call to Action */}
          <div className="pt-4">
            <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-10 py-4 rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-lg font-semibold">
              LEARN MORE ABOUT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default T1;
