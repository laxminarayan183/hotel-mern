import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../context/ContextProvider";
import { useDispatch } from "react-redux";
import { add } from "../redux/MenuSlice";

const AdminDashboard = () => {
  const menu = useContext(DataContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInAdmin");
    alert("Logout was successful");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    alert(`${item.name} added to cart!`);
    dispatch(add(item));
  };
  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="flex justify-between  text-black py-4 px-6 text-center font-bold text-2xl">
        <header className="">Admin Dashboard</header>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="p-6 space-y-8">
        <div className="flex flex-wrap gap-4 justify-center ">
          <Link
            to="/new-employee"
            className="bg-green-500 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-green-600 transition"
          >
            Add New Employee
          </Link>
          <Link
            to="/new-menu"
            className="bg-purple-500 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-purple-600 transition"
          >
            Add new Menu
          </Link>
          <Link
            to="/employees"
            className="bg-gray-500 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-600 transition"
          >
            List of Employees
          </Link>
          <Link
            to="/billing"
            className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Billing Counter
          </Link>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-6">
          <h1 className="text-2xl font-bold mb-4">Menu</h1>

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
              {menu.map((item) => (
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
                      onClick={() => handleAdd(item)}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                      Add
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
