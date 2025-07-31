import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* company info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold">Book-Shop</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your premier destination for digital books.Instant
              downloads,endless reading
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:bg-blue-500 transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>{" "}
              <a
                href="#"
                className="text-gray-400 hover:bg-blue-500 transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>{" "}
              <a
                href="#"
                className="text-gray-400 hover:bg-blue-500 transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>{" "}
              <a
                href="#"
                className="text-gray-400 hover:bg-blue-500 transition-colors"
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>
          {/* quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>{" "}
            </ul>
          </div>
          {/* categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Fiction
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Non-Fiction
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Seience Fiction
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Biography
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Self-Help
                </a>
              </li>
            </ul>
          </div>
          {/* contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">123 Book Street, Reading City</li>
              <li className="text-gray-400">Email:info@book-shop.com</li>
              <li className="text-gray-400">Phone:(123) 456-7890</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 my-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-md">
            {" "}
            © {new Date().getFullYear()}Book-Shop.All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-white text-md transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-md transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
