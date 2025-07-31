import React, { useState } from "react";
import useCart from "../hooks/useCart";
import { books } from "../data/books";
import BookCard from "../components/BookCard";

const Shop = () => {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("default");
  const { addToCart } = useCart();

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;

  // filter
  const filteredBooks =
    filter === "all" ? books : books.filter((book) => book.category === filter);

  // sort all book by category
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sort === "price-low") return a.price - b.price;
    if (sort === "price-high") return b.price - a.price;
    if (sort === "rating") return b.rating - a.rating;
    return 0;
  });

  // calculated pagination data
  const totalBooks = sortedBooks.length;
  const totalPages = Math.ceil(totalBooks / recordsPerPage);
  const currentBooks = sortedBooks.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // Generate page number
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">All Books</h1>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
          <select
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-2 border rounded-md cursor-pointer"
          >
            <option value="all">All Categories</option>
            <option value="historical fiction">Historical Fiction</option>
            <option value="philosophical fiction">Philosophical Fiction</option>
            <option value="thriller">Thriller</option>
            <option value="self-help">Self Help</option>
            <option value="post-apocalyptic">Post Apocalyptic</option>
            <option value="dystopian">Dystopian</option>
          </select>

          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-2 border rounded-md cursor-pointer"
          >
            <option value="default">Default Sorting</option>
            <option value="price-low">Price : Low to High</option>
            <option value="price-high">Price : High to Low</option>
            <option value="rating">Highest Rating Book</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onAddToCart={() => addToCart(book)}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12">
          <nav className="flex items-center gap-1">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {getPageNumbers().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded border ${
                  currentPage === page ? "bg-green-500 text-white" : ""
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Shop;
