// import React, { useState, useEffect } from 'react';

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     'https://i.ibb.co/f2ywrhQ/1.jpg',
//     'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920',
//     'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920'
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Image Slider */}
//       <div className="absolute inset-0">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               currentSlide === index ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <img
//               src={slide}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//               loading="lazy"
//             />
//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
//           </div>
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 h-full flex items-center justify-center">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           {/* Tag */}
//           <div className="mb-6">
//             <span className="inline-block text-blue-500 text-sm font-medium tracking-wider uppercase">
//               #TheBestAgency
//             </span>
//           </div>

//           {/* Main Heading */}
//           <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
//             Tap into the<br />power of<br />social media.
//           </h1>

//           {/* Description */}
//           <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//             Unlock your business potential with strategies that make an impact. Elevate your brand like never before.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
//             <button className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold">
//               GET STARTED
//             </button>
//             <button className="border-2 border-white text-white px-8 py-4 rounded-lg shadow-lg hover:bg-white hover:text-black transition-colors duration-200 text-lg font-semibold">
//               FREE TRIAL
//             </button>
//           </div>

//           {/* Features */}
//           <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-white text-sm">
//             <div className="flex items-center gap-2">
//               <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//               </svg>
//               <span>14-day free trial</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//               </svg>
//               <span>No credit card required</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//               </svg>
//               <span>Cancel anytime</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Slider Indicators */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full transition-colors duration-200 shadow-lg ${
//               currentSlide === index ? 'bg-blue-500' : 'bg-white bg-opacity-50'
//             }`}
//             onClick={() => setCurrentSlide(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'INSPIRE',
      subtitle: 'Inspiring Strategies',
    },
    {
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'KINDLE',
      subtitle: 'Sparking Creativity',
    },
    {
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'DELIVER',
      subtitle: 'Delivering Results',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        {slides.map((slide, index) =>
          currentSlide === index ? (
            <div key={index} className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white">
                {slide.title}
              </h1>
              <p className="text-lg md:text-3xl text-white">
                {slide.subtitle}
              </p>
             
            </div>
          ) : null
        )}
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-200 shadow-lg ${
              currentSlide === index ? 'bg-blue-500' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
