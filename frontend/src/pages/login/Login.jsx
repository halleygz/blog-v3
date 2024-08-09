import React from 'react'
import InputFields from '../../components/tools/InputFields'
import { FormBtns } from '../../components/tools/Buttons'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-whitesmoke p-6">
      <div className="w-full max-w-md bg-whitesmoke shadow-md rounded-lg p-8 md:flex md:max-w-full">
        <div className="hidden md:flex md:justify-center md:items-center md:w-1/2 bg-[#E6B9A6] text-[#2F3645] p-10 rounded-l-lg">
          <h2 className="text-4xl font-bold">Login</h2>
        </div>
        <div className="md:w-1/2 p-8">
          <h3 className="text-3xl font-bold font-dm-serif-display text-gray-800 pt-0 mb-[50px]">Welcome</h3>          
          <form>
            <InputFields content={"Enter Your Email"} type={"email"}/>
            <InputFields content={"Enter Password"} type={"password"}/>
          </form>
          <div className='flex inline-block'>
            <FormBtns content={"LOGIN"}/>
            <p className="text-sm text-gray-500 mt-4">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#E6B9A6] hover:text-[#f3a786]">SIGNUP</Link>
            </p>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Login