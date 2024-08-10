import React, { useState } from 'react';
import NavBar from '../../components/tools/NavBar';
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-whitesmoke text-center p-6">
      <NavBar/>

      <main className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-[88px] font-normal text-[#2F3645]  mt-[100px] mb-0 font-dm-serif-display max-w-full">Spread your ideas</h2>
        <h2 className="text-[88px] font-normal text-[#2F3645] mt-0 mb-[30px] font-dm-serif-display max-w-full"> without limits</h2>

        <p className="text-gray-500 text-[30px] mb-[60px]">A place to read, write and deepen your thoughts</p>
        <button className="bg-[#E6B9A6] px-6 py-2 hover:bg-[#f3a786] h-[57px] w-[288px] font-Lexend Deca mb-[150px] text-[20px] text-[#2F3645] font-medium"><Link to="/signup">SignUp to read</Link></button>
      </main>

      <footer className="py-4">
        <p className="text-gray-500">&copy; BLOGGA. ALL RIGHTS RESERVED</p>
      </footer>
    </div>
  );
}

export default Home;


