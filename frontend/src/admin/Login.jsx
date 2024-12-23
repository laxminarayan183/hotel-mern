import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleForm = (e) => {
    const { name, value } = e.target;
    const copyloginInfo = { ...form };
    copyloginInfo[name] = value;
    setForm(copyloginInfo);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // Handle login logic
    const { username, password } = form;
    if (!username || !password) {
      return alert("Please Enter All Fields");
    }

    // backend connection
    try {
      const url = "http://localhost:3000/admin/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      //after getting result destructured form console
      const { token, error } = result;
      // go to home page after login success
      if (token) {
        alert("Login successfull");
        navigate("/admin-dashboard");

        // storing users data
        localStorage.setItem("token", token);
        localStorage.setItem("loggedInAdmin", username);
      } else if (error) {
        alert(error.message);
      }
    } catch (err) {
      console.log(err);
    }

    // Reset form data to clear inputs
    setForm({
      username: "",
      password: "",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-yellow-600 mb-6">
          Admin Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleForm}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="current-password"
              name="password"
              value={form.password}
              onChange={handleForm}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
