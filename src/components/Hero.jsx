import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-gradient-to-r from-indigo-700 to-purple-800 text-white 
    py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-xl mb-8">
            Thousands of e-books at your fingertips.Read anytime,anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium
             hover:bg-gray-100 transition cursor-pointer"
            >
              Browse Collection
            </button>
            <button
              className="bg-transparent border-2 border-white text-white px-6 py-3 
            rounded-lg font-medium hover:bg-white hover:text-indigo-700 transition cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white opacity-10"></div>
    </section>
  );
};

export default Hero;
