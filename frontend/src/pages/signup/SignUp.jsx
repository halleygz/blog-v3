import React, { useState } from 'react';
import InputFields from '../../components/tools/InputFields';
import { FormBtns } from '../../components/tools/Buttons';
import { Link } from 'react-router-dom';
import useSignUp from '../../hooks/useSignUp';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    comfirmPassword: "",
  })
  const { loading, signup } = useSignUp()
  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(inputs)
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8 md:flex md:max-w-full">
        <div className="hidden md:flex md:justify-center md:items-center md:w-1/2 bg-pink-300 text-white p-10 rounded-l-lg">
          <h2 className="text-4xl font-bold">Sign Up</h2>
        </div>
        <div className="md:w-1/2 p-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">Welcome</h3>
          <p className="text-gray-500 mb-8">Let’s sign you up quickly</p>
          <form onSubmit={handleSubmit}>
            <InputFields content={"Enter Your full Name"} type={"text"} id={"fullName"} value={inputs.fullName} onChange={(e)=>setInputs({...inputs, fullName: e.target.value})}/>
            <InputFields content={"Enter Your Email"} type={"email"} id={"email"} value={inputs.email} onChange={(e)=>setInputs({...inputs, email: e.target.value})}/>
            <InputFields content={"Enter a Username"} type={"text"} id={"username"} value={inputs.username} onChange={(e)=>setInputs({...inputs, username: e.target.value})}/>
            <InputFields content={"Enter Password"} type={"password"} id={"password"} value={inputs.password} onChange={(e)=>setInputs({...inputs, password: e.target.value})}/>
            <InputFields content={"Comfirm Password"} type={"password"} id={"comfirmPassword"} value={inputs.comfirmPassword} onChange={(e)=>setInputs({...inputs, comfirmPassword: e.target.value})}/>
            <FormBtns content={"SIGNUP"} isLoading={loading}/>
            
          </form>
          <p className="text-sm text-gray-500 mt-4">
            already have an account?{' '}
            <Link to="/login" className="text-pink-300 hover:text-pink-400">log-in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
