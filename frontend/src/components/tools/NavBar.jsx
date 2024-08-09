import React, { useState } from "react";
import Profile from "./Profile";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLogged = true
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="w-full flex justify-between items-center py-4 px-6">
        {isLogged?<Profile letter={"S"}/> : <h1
        className={` text-gray-700 ${
          menuOpen ? "hidden" : "text-lg font-bold"
        }`}
      >
        Blogga
      </h1>}
      
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-800 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>
      <nav
        className={`space-x-6 md:flex items-center ${
          menuOpen ? "block" : "hidden"
        } md:block`}
      >
        <a href="#" className="text-gray-500 hover:text-gray-800">
          feed
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-800">
          Login
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-800">
          Add Blog
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-800">
          search
        </a>
        <a
          href="#"
          className="bg-pink-300 text-white px-4 py-2 hover:bg-pink-400"
        >
          SignUp
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
