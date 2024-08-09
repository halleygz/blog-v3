import React, { useState } from "react";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import useLogOut from "../../hooks/useLogOut";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {authUser} = useAuthContext()
  const {loading, logout} = useLogOut()
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="w-full flex justify-between items-center py-4 px-6">
        {authUser?<Profile letter={"S"}/> : <h1
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
        {authUser? 
        <>
        <Link className="text-gray-500 hover:text-gray-800" to="/feed">Feed</Link>
        <Link className="text-gray-500 hover:text-gray-800" to="/createblog">Add Blog</Link>
        <Link className="text-gray-500 hover:text-gray-800" to="/search">Search</Link>
        <Link
        to="/"
        onClick={logout}
        className="bg-pink-300 text-white px-4 py-2 hover:bg-pink-400"
        >
          Logout
        </Link>
        </>
        : 
        <>
        <Link className="text-gray-500 hover:text-gray-800" to="/login">Login</Link>
        
        <Link
          to="/signup"
          className="bg-pink-300 text-white px-4 py-2 hover:bg-pink-400"
        >
          SignUp
        </Link>
        </>
        }
      </nav>
    </header>
  );
};

export default NavBar;
