import React from "react";
import { useParams } from "react-router-dom";
import { books } from "../data/books";
import Rating from "../components/Rating";
import BookCard from "../components/BookCard";

const BookDetails = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));
  if (!book) {
    return <div className="container mx-auto px-4 py-8">Book Not Found</div>;
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Book Image */}
        <div className="md:w-1/3">
          <img
            src={book.image}
            alt={book.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        {/* Book Details */}
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
          <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
          <div className="flex items-center mb-4">
            <Rating rating={book.rating} />
            <span className="ml-2 text-gray-600">{book.reviews} reviews</span>
          </div>
          <p className="text-2xl font-bold text-indigo-700 mb-6">
            $ {book.price}
          </p>
          <div className="flex space-x-4 mb-8">
            <button className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-900 cursor-pointer">
              Add to Cart
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-500 cursor-pointer hover:text-white">
              Add to Wishlist
            </button>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{book.description}</p>
          </div>
          <div className="">
            <h3 className="text-xl font-semibold mb-2">Details</h3>
            <ul className="grid grid-cols-2 gap-2 text-gray-700">
              <li>
                Category:{" "}
                <span className="font-semibold text-md">{book.category}</span>
              </li>
              <li>
                Pages:{" "}
                <span className="font-semibold text-md">{book.pages}</span>
              </li>
              <li>
                Language: <span className="font-semibold text-md">English</span>
              </li>
              <li>
                <span className="font-semibold text-md">Format:</span> e-book
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Related Books */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books
            .filter((b) => b.category === book.category && b.id !== book.id)
            .slice(0, 4)
            .map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default BookDetails;
