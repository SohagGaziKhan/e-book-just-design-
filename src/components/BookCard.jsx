import { Link } from "react-router-dom";

const BookCard = ({ book, onAddToCart }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(book);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg 
    transition-shadow"
    >
      <div className="h-full flex flex-col">
        <Link to={`/book/${book.id}`} className="block flex-grow">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-1">{book.title}</h3>
            <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold">${book.price.toFixed(2)}</span>
              <div className="flex items-center">
                <span className="text-yellow-500">★</span>
                <span className="ml-1 text-sm">{book.rating}</span>
              </div>
            </div>
          </div>
        </Link>
        <div className="p-4 pt-0">
          <button
            onClick={handleAddToCart}
            className="w-full bg-green-500 text-white py-2 rounded-md
             hover:bg-green-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
