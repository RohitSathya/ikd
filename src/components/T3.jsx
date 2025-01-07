import React from 'react';

const T3 = () => {
  return (
    <div className="relative min-h-[600px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7535030/pexels-photo-7535030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920"
          alt="People enjoying social media"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-[600px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
            Unlock endless possibilities<br />with social media strategies.
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Discover innovative ways to expand your reach, engage your audience, and elevate your brand. Harness the power of social media to drive growth and success.
          </p>

          {/* Button */}
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-lg font-semibold">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default T3;
