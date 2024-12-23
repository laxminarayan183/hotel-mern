import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeDetails = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    // backend connection
    try {
      const token = localStorage.getItem("token");
      const url = `http://localhost:3000/person/${id}`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (result) {
        alert("Deleted successfull");
        navigate("/admin-dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3000/person");
      const response = await data.json();
      setData(response);
    };

    fetchData();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Work</th>
              <th className="px-4 py-2">Mobile</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Salary ($)</th>
              <th className="px-4 py-2">Manage</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item._id}
                className={`${
                  item._id % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                } hover:bg-blue-50`}
              >
                <td className="border px-4 py-2 text-center">{item.name}</td>
                <td className="border px-4 py-2 text-center">{item.age}</td>
                <td className="border px-4 py-2 text-center">{item.work}</td>
                <td className="border px-4 py-2 text-center">{item.mobile}</td>
                <td className="border px-4 py-2 text-center">{item.email}</td>
                <td className="border px-4 py-2 text-center">{item.address}</td>
                <td className="border px-4 py-2 text-center">{item.salary}</td>
                <td className="border px-4 py-2 text-center">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="mx-2 bg-red-700 p-2 rounded text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeDetails;
