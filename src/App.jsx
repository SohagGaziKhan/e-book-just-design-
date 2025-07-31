import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/Home";
import Account from "./page/Account";
import Cart from "./page/Cart";
import Shop from "./page/Shop";
import Footer from "./components/Footer";
import BookDetails from "./page/BookDetails";
import Categories from "./components/Categories";
const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
