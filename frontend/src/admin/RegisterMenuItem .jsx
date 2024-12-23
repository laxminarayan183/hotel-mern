import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterMenuItem = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    taste: "",
    is_drink: false,
    ingredients: "",
    image: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      ingredients: formData.ingredients.split(",").map((item) => item.trim()),
    };

    // backend connection
    try {
      const url = "http://localhost:3000/menu";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result) {
        alert("New Menu added Succesfully:");
        navigate("/admin-dashboard");
      }
    } catch (err) {
      console.log(err);
    }
    console.log("Menu Item Submitted:", formattedData);

    // Reset form
    setFormData({
      name: "",
      price: "",
      taste: "",
      is_drink: false,
      ingredients: "",
      image: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Register Menu Item
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Spicy Chicken Curry"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 mb-2">Price ($)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="12.99"
              step="0.01"
              required
            />
          </div>

          {/* Taste */}
          <div>
            <label className="block text-gray-700 mb-2">Taste</label>
            <select
              name="taste"
              value={formData.taste}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select</option>
              <option value="spicy">Spicy</option>
              <option value="sweet">Sweet</option>
              <option value="savory">Savory</option>
            </select>
          </div>

          {/* Is Drink */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="is_drink"
              checked={formData.is_drink}
              onChange={handleChange}
              className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="ml-2 text-gray-700">Is this a drink?</label>
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 mb-2">Ingredients</label>
            <input
              type="text"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=""
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              Separate ingredients with commas.
            </p>
          </div>

          {/* Number of Sales */}
          <div>
            <label className="block text-gray-700 mb-2">Image</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=""
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Register Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterMenuItem;
