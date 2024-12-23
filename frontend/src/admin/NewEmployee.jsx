import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    work: "",
    mobile: "",
    email: "",
    address: "",
    salary: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // backend connection
    try {
      const url = "http://localhost:3000/person/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result) {
        alert("Form Data Submitted Succesfully:");
        navigate("/admin-dashboard");
      }
    } catch (err) {
      console.log(err);
    }
    // Reset the form
    setFormData({
      name: "",
      age: "",
      work: "",
      mobile: "",
      email: "",
      address: "",
      salary: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Register Employee
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder=""
              required
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-700 mb-2">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder=""
              required
            />
          </div>

          {/* Work */}
          <div>
            <label className="block text-gray-700 mb-2">Work</label>
            <select
              name="work"
              value={formData.work}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            >
              <option value="chef">Chef</option>
              <option value="waiter">Waiter</option>
              <option value="manager">Manager</option>
            </select>
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-gray-700 mb-2">Mobile</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder=""
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder=""
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder=""
              required
            />
          </div>

          {/* Salary */}
          <div>
            <label className="block text-gray-700 mb-2">Salary</label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder=""
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewEmployee;
