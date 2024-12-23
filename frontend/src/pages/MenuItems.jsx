import React from "react";
import { Link } from "react-router-dom";

const MenuItems = () => {
  const categories = [
    { name: "Fast Food", link: "/fastfood", bgColor: "bg-yellow-500" },
    { name: "Drinks", link: "/drinks", bgColor: "bg-blue-500" },
  ];
  return (
    // <div className="flex">
    //   {/* Sidebar Toggle Button */}
    //   <button
    //     className="p-4 bg-blue-600 text-white fixed top-4 left-4  rounded-lg lg:hidden"
    //     onClick={toggleSidebar}
    //   >
    //     {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
    //   </button>

    //   {/* Sidebar */}
    //   <div
    //     className={`fixed top-0 left-0 h-full bg-yellow-500 text-white w-64 p-6 transform ${
    //       isOpen ? "translate-x-0" : "-translate-x-full"
    //     } transition-transform duration-300 lg:translate-x-0`}
    //   >
    //     <Link to="/">
    //       <h2 className="text-2xl font-bold mb-8">Menu</h2>
    //     </Link>
    //     <nav>
    //       <ul className="space-y-4">
    //         {links.map((link, index) => (
    //           <li key={index}>
    //             <Link
    //               to={link.path}
    //               className="block py-2 px-4 rounded-lg hover:bg-yellow-700 transition"
    //             >
    //               {link.name}
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>
    //     </nav>
    //   </div>

    //   {/* Main Content Placeholder */}
    //   <main className="flex-1 p-8 ml-64 lg:ml-64 bg-gray-100 min-h-screen text-center">
    //     <h1 className="text-3xl font-bold">Welcome to Our Restaurant</h1>
    //     <p className="text-gray-600 mt-4">
    //       Explore our menu categories from the sidebar!
    //     </p>
    //     <div className="flex items-center justify-center">
    //       <img
    //         src="https://img.freepik.com/free-vector/flat-style-collage-with-happy-male-female-guests-welcoming-couple-vector-illustration_1284-83958.jpg?t=st=1734681073~exp=1734684673~hmac=9b3432d8bd00dbf5efdd25d017220ba3c87e6c5630962a9b0994eef222799b93&w=740"
    //         alt=""
    //       />
    //     </div>
    //   </main>
    // </div>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-8">Select a Category</h1>

      {/* Card Grid */}
      <div className="flex gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.link}
            className={`block rounded-lg shadow-lg p-6 text-center text-white ${category.bgColor} transform hover:scale-105 transition duration-300`}
          >
            <h2 className="text-xl font-semibold">{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
