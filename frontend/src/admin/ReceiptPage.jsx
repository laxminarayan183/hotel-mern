// Import necessary libraries
import React from "react";
import { useSelector } from "react-redux";

const ReceiptPage = () => {
  const menuItems = useSelector((state) => state.menu);

  const calculateTotal = () => {
    return menuItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-4">Receipt</h1>

        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2 text-left">Item</th>
              <th className="border-b p-2 text-right">Price</th>
              <th className="border-b p-2 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item._id}>
                <td className="border-b p-2">{item.name}</td>
                <td className="border-b p-2 text-right">
                  ${item.price.toFixed(2)}
                </td>
                <td className="border-b p-2 text-right">
                  ${item.price.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 text-right">
          <h2 className="text-xl font-bold">
            Grand Total: ${calculateTotal()}
          </h2>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => window.print()}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Print Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPage;
