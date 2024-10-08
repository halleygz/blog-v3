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
    <div className="min-h-[100%] flex flex-col justify-center items-center bg-whitesmoke p-6">
      <div className="w-full max-w-md bg-whitesmoke rounded-lg p-8 md:flex md:max-w-full">
        <div className="min-h-[70vh] hidden md:flex md:justify-center md:items-center md:w-1/3 bg-[#E6B9A6] text-[#2F3645] p-10 rounded-l-lg">
          <h2 className="text-[64px] font-bold">Sign Up</h2>
        </div>
        <div className="md:w-1/2 p-8 pl-[70px]">
          <h3 className="text-4xl font-bold font-dm-serif-display text-gray-800 mb-2">Welcome</h3>
          <p className="text-gray-500 mb-8">Let’s sign you up quickly</p>

          <form onSubmit={handleSubmit}>
            <InputFields content={"Enter Your full Name"} type={"text"} id={"fullName"} value={inputs.fullName} onChange={(e)=>setInputs({...inputs, fullName: e.target.value})}/>
            <InputFields content={"Enter Your Email"} type={"email"} id={"email"} value={inputs.email} onChange={(e)=>setInputs({...inputs, email: e.target.value})}/>
            <InputFields content={"Enter a Username"} type={"text"} id={"username"} value={inputs.username} onChange={(e)=>setInputs({...inputs, username: e.target.value})}/>
            <InputFields content={"Enter Password"} type={"password"} id={"password"} value={inputs.password} onChange={(e)=>setInputs({...inputs, password: e.target.value})}/>
            <InputFields content={"Comfirm Password"} type={"password"} id={"comfirmPassword"} value={inputs.comfirmPassword} onChange={(e)=>setInputs({...inputs, comfirmPassword: e.target.value})}/>
            <FormBtns content={"SIGNUP"} isLoading={loading}/>

          </form>
          <div className='flex flex-row justify-between'>
            <FormBtns content={"SIGNUP"}/>
            <p className="text-sm text-gray-500 mt-4">
              already have an account?{' '}
              <Link to="/login" className="text-pink-300 hover:text-pink-400">log-in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
