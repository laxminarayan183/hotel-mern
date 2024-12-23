import React, { useState } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineProfile } from "react-icons/ai";
import {
  MdContactPhone,
  MdOutlineRestaurant,
  MdRestaurantMenu,
} from "react-icons/md";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-yellow-500">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-white font-bold text-lg flex items-center gap-4">
          <MdOutlineRestaurant />
          <Link to="/">
            <h1>The Restaurant</h1>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Items */}
        <ul
          className={` flex flex-col md:flex-row md:items-center md:gap-6 absolute z-50 md:static bg-yellow-500 md:bg-transparent w-full md:w-auto left-0 transition-transform ${
            isOpen ? "top-16" : "top-[-400px]"
          }`}
        >
          <li className="text-white p-4 md:p-0">
            <Link
              to="/menu"
              className="flex items-center gap-2 hover:underline"
            >
              <MdRestaurantMenu />
              <span>Menu</span>
            </Link>
          </li>
          <li className="text-white p-4 md:p-0">
            <Link
              to="/About"
              className="flex items-center gap-2 hover:underline"
            >
              <AiOutlineProfile />
              <span>About</span>
            </Link>
          </li>
          <li className="text-white p-4 md:p-0">
            <Link
              to="/contact"
              className="flex items-center gap-2 hover:underline"
            >
              <MdContactPhone />
              <span>Contact</span>
            </Link>
          </li>
          {/* Profile Icon */}
          <li className="text-white p-4 md:p-0">
            <Link
              to="/login"
              className="flex items-center gap-2 hover:underline"
            >
              <FaUserCircle />
              <span>Admin</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
