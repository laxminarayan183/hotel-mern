import React, { useContext } from "react";
import { DataContext } from "../context/ContextProvider";

const Menu = () => {
  const menuItems = useContext(DataContext);
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-yellow-500 mb-8">
          Our Menu
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                <p className="text-blue-600 font-semibold">{item.price}</p>
                <p className="text-gray-600 mt-2">{item.taste}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
