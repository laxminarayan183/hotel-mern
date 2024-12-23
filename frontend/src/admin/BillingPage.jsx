// Import necessary libraries
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/MenuSlice";
import { Link } from "react-router-dom";

const BillingPage = () => {
  const menuItems = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const handleRemove = (_id) => {
    alert(` removed from cart!`);
    dispatch(remove(_id));
  };

  const calculateTotal = () => {
    return menuItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-4">Restaurant Billing</h1>

        {menuItems.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2 text-left">Image</th>
                <th className="border-b p-2 text-left">Item</th>
                <th className="border-b p-2 text-right">Price</th>
                <th className="border-b p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {menuItems.map((item) => (
                <tr key={item._id}>
                  <td className="border-b p-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="border-b p-2">{item.name}</td>
                  <td className="border-b p-2 text-right">
                    ${item.price.toFixed(2)}
                  </td>

                  <td className="border-b p-2 text-center">
                    <button
                      onClick={() => handleRemove(item._id)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500">No items in the cart.</p>
        )}

        <div className="mt-6 flex justify-between items-center">
          <h2 className="text-xl font-bold">Total: ${calculateTotal()}</h2>
          <Link
            to="/receipt"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Proceed to Payment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
