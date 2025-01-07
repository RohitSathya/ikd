import React from 'react';

const T1 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Image with experience badge */}
        <div className="relative">
          <div className="rounded-3xl shadow-2xl overflow-hidden relative transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://web.moxcreative.com/buzzbiz/wp-content/uploads/sites/27/2023/04/group-of-multiracial-young-friends-with-coats-and-hats-smiling-and-watching-the-social-media-with-a.jpg"
              alt="People connecting on social media"
              className="w-full h-full object-cover"
            />
            {/* Experience Badge */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full p-6 shadow-xl transform hover:scale-110 transition-transform duration-300">
              <div className="text-center">
                <span className="text-4xl font-extrabold">15+</span>
                <div className="text-sm mt-1">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="space-y-8">
          {/* Heading */}
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Now is the perfect time to connect with people on social media.
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg leading-relaxed">
            Unlock new opportunities and expand your reach. Social media provides
            a platform to engage, inspire, and grow like never before. Let us help you
            build connections that matter.
          </p>

          {/* Button */}
          <div className="pt-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-lg font-semibold">
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default T1;
