import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  // please all data copy by github
  const categories = [
    { name: "historical fiction", icon: "📖", count: 124 },
    { name: "philosophical fiction", icon: "📚", count: 89 },
    { name: "thriller", icon: "🔬", count: 56 },
    { name: "self-help", icon: "👤", count: 42 },
    { name: "post-apocalyptic", icon: "🧙", count: 78 },
    { name: "dystopian", icon: "💖", count: 65 },
  ];

  return (
    <section className="my-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Browse Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              to={`/shop?category=${category.name.toLocaleLowerCase()}`}
              key={category.name}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center group"
            >
              <div className="text-3xl mb-2 group-hover:text-indigo-600 transition">
                {category.icon}
              </div>
              <h3 className="font-medium">{category.name}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {" "}
                {category.count} books
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
