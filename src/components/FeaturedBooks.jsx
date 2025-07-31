import React from "react";
import useCart from "../hooks/useCart";
import BookCard from "./BookCard";

const FeaturedBooks = ({ books, title }) => {
  const { addToCart } = useCart();

  return (
    <div className="my-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} onAddToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBooks;
