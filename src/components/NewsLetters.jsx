import React from "react";

const NewsLetters = () => {
  return (
    <div className="bg-indigo-50 rounded-xl p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter for the latest book releases and exclusive
          offers.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-2 rounded-md border focus:outline-none 
          focus:ring-2 focus:ring-indigo-500"
          />
          <button
            className="bg-indigo-600 text-white px-6 py-2 rounded-md
         hover:bg-indigo-700 whitespace-nowrap"
          >
            Subscribe
          </button>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default NewsLetters;
