import React from "react";
import Hero from "../components/Hero";
import FeaturedBooks from "../components/FeaturedBooks";
import { books } from "../data/books";
import Categories from "../components/Categories";
import Testimonial from "../components/Testimonial";
import NewsLetters from "../components/NewsLetters";

const Home = () => {
  const featuredBooks = books.slice(0, 4);
  const bestSellers = books.slice(4, 8);

  //   please copy form my github
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Avid Reader",
      rating: 5,
      comment:
        "This store has transformed my reading habits. The selection is incredible!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Avid Reader",
      rating: 5,
      comment:
        "This store has transformed my reading habits. The selection is incredible!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Avid Reader",
      rating: 5,
      comment:
        "This store has transformed my reading habits. The selection is incredible!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Avid Reader",
      rating: 5,
      comment:
        "This store has transformed my reading habits. The selection is incredible!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Avid Reader",
      rating: 5,
      comment:
        "This store has transformed my reading habits. The selection is incredible!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Avid Reader",
      rating: 5,
      comment:
        "This store has transformed my reading habits. The selection is incredible!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <FeaturedBooks books={featuredBooks} title="Featured Books" />
        <FeaturedBooks books={bestSellers} title="Best Sellers Books" />

        <Categories />
        {/* testimonials section */}
        <section className="my-12 ">
          <h2 className="text-2xl font-bold mb-6 text-center">
            What Our Readers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} testimonial={testimonial} />
            ))}
          </div>
        </section>
        <NewsLetters />
      </div>
    </div>
  );
};

export default Home;
