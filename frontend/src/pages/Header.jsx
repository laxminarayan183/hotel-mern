import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="relative bg-cover bg-center bg-no-repeat h-screen bg-[url('https://img.freepik.com/premium-photo/food-images-any-restaurant_198067-567784.jpg?w=740')]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-65"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover Luxury Like Never Before
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Experience the ultimate comfort and exquisite service at our hotel.
        </p>
        <Link
          to="/menu"
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-all"
        >
          Explore Now
        </Link>
      </div>
    </header>
  );
};

export default Header;
