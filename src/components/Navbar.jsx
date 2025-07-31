import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-500 fixed w-full top-0 left-0 z-50 shadow-md ">
      <div className="flex items-center justify-between pl-4 pr-6 md:px-24 py-4">
        
        {/* Logo & Title */}
        <div className="flex items-center font-bold text-2xl md:text-3xl">
          <img src="src/assets/fp.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10" />
          <span className="text-white">Focus</span>
          <span className="text-red-700">Plan</span>
        </div>

        {/* Navigation & Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-8 ml-auto">
          <Link to="/" className="text-white hover:text-yellow-400 transition duration-200">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-yellow-400 transition duration-200">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-yellow-400 transition duration-200">
            Contact
          </Link>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
              
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 py-4 space-y-4 border-t border-gray-700">
          <Link to="/" className="block text-white   hover:text-yellow-400">
            Home
          </Link>
          <Link to="/about" className="block text-white hover:text-yellow-400">
            About
          </Link>
          <Link to="/contact" className="block text-white hover:text-yellow-400">
            Contact
          </Link>
          <div className="pt-3 space-y-2">
            <Link
              to="/login"
              className="block text-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-500 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block text-center bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
            >
              Daftar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
