import React, { useContext } from "react";
import { DataContext } from "../context/ContextProvider";

const Drinks = () => {
  const menuItems = useContext(DataContext);
  const filteredItems = menuItems.filter((item) => item.is_drink);
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
          Drinks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <img src={item.image} alt="" />
              <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
              <p className="text-blue-600 font-semibold">Price:{item.price}</p>
              <p className="text-gray-600 mt-2">{item.taste}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drinks;
