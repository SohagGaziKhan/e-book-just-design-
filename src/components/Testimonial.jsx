import React from "react";
import Rating from "./Rating";

const Testimonial = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-gray-600 text-md">{testimonial.role}</p>
        </div>
      </div>
      <Rating rating={testimonial.rating} />
      <p className="mt-3 text-gray-700 italic">{testimonial.comment}</p>
    </div>
  );
};

export default Testimonial;
