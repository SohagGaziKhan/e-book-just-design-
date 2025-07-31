import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import useCart from "../hooks/useCart";

const Header = () => {
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-indigo-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold hover:text-indigo-200 transition-colors"
          >
            Book-Shop
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center  gap-4 bg-white text-indigo-900 py-1 px-8 rounded-md">
              <FaSearch className="" size={18} />
              <input
                type="text"
                placeholder="Search Your Books.."
                className="text-xl outline-none"
              />
            </div>
            <nav className="flex space-x-6">
              <Link to="/" className="hover:text-indigo-200 transition-colors">
                Home
              </Link>
              <Link
                to="/shop"
                className="hover:text-indigo-200 transition-colors"
              >
                Shop
              </Link>
              <Link
                to="/categories"
                className="hover:text-indigo-200 transition-colors"
              >
                Categories
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link
                to="/account"
                className="hover:text-indigo-200 transition-colors"
              >
                <FiUser className="text-xl" />
              </Link>
              <Link
                to="/cart"
                className="relative hover:text-indigo-200 transition-colors"
              >
                <FiShoppingCart className="text-xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <div className="flex items-center  gap-4 bg-white text-indigo-900 py-1 px-8 rounded-md">
              <FaSearch className="" size={18} />
              <input
                type="text"
                placeholder="Search Your Books.."
                className="text-xl outline-none"
              />
            </div>

            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="hover:text-indigo-200 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="hover:text-indigo-200 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/categories"
                className="hover:text-indigo-200 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Categories
              </Link>
            </nav>
            <div className="flex items-center space-x-4 pt-2">
              <Link
                to="/account"
                className="hover:text-indigo-200 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FiUser className="text-xl" />
              </Link>
              <Link
                to="/cart"
                className="relative hover:text-indigo-200 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FiShoppingCart className="text-xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
