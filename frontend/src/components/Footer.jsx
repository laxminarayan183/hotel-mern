import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-yellow-600 text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and About */}
        <div className="text-center md:text-left md:mb-0">
          <h2 className="text-lg font-bold">The Restaurant</h2>
          <p className="text-sm">
            Providing the best hospitality services to make your stay memorable.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact and Social Media */}
        <div className="text-center">
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p className="text-sm">Email: info@TheRestaurent.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-yellow-600 text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} The Restaurant. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
