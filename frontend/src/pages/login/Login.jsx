import React from 'react'
import InputFields from '../../components/tools/InputFields'
import { FormBtns } from '../../components/tools/Buttons'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8 md:flex md:max-w-full">
        <div className="hidden md:flex md:justify-center md:items-center md:w-1/2 bg-pink-300 text-white p-10 rounded-l-lg">
          <h2 className="text-4xl font-bold">Login</h2>
        </div>
        <div className="md:w-1/2 p-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">Welcome</h3>
          <p className="text-gray-500 mb-8">Let’s sign you up quickly</p>
          <form>
            <InputFields content={"Enter Your Email"} type={"email"}/>
            <InputFields content={"Enter Password"} type={"password"}/>
            <FormBtns content={"LOGIN"}/>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            Don't have an account?{' '}
            <Link to="/signup" className="text-pink-300 hover:text-pink-400">SIGNUP</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login