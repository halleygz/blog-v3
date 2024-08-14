
import React, { useState } from "react";
import NavBar from "../../components/tools/NavBar";
import { useAuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";


const Home = () => {
  const { authUser } = useAuthContext();
  return (

    <div className="min-h-screen flex flex-col items-center justify-between bg-white text-center p-6">
      <NavBar />

      <main className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-dm-serif-display">
          Spread your ideas without limits
        </h2>
        <p className="text-gray-500 mb-8">
          A place to read, write and deepen your thoughts
        </p>
        {authUser ? (
          <Link to="/createblog">
            <button className="bg-pink-300 text-white px-6 py-2 hover:bg-pink-400">
              Post a blog
            </button>
          </Link>
        ) : (
          <Link to="/signup">
            <button className="bg-pink-300 text-white px-6 py-2 hover:bg-pink-400">
              SignUp today
            </button>
          </Link>
        )}
      </main>

      <footer className="py-4">
        <p className="text-gray-500">&copy; BLOGGA. ALL RIGHTS RESERVED</p>
      </footer>
    </div>
  );
};

export default Home;


