import React from 'react';
import InputFields from '../../components/tools/InputFields';
import { FormBtns } from '../../components/tools/Buttons';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="min-h-[100%] flex flex-col justify-center items-center bg-whitesmoke p-6">
      <div className="w-full max-w-md bg-whitesmoke rounded-lg p-8 md:flex md:max-w-full">
        <div className="min-h-[70vh] hidden md:flex md:justify-center md:items-center md:w-1/3 bg-[#E6B9A6] text-[#2F3645] p-10 rounded-l-lg">
          <h2 className="text-[64px] font-bold">Sign Up</h2>
        </div>
        <div className="md:w-1/2 p-8 pl-[70px]">
          <h3 className="text-4xl font-bold font-dm-serif-display text-gray-800 mb-2">Welcome</h3>
          <p className="text-gray-500 mb-8">Let’s sign you up quickly</p>
          <form>
            <InputFields content={"Enter Your full Name"} type={"text"} id={"fullName"}/>
            <InputFields content={"Enter Your Email"} type={"email"}/>
            <InputFields content={"Enter a Username"} type={"text"}/>
            <InputFields content={"Enter Password"} type={"password"}/>
            <InputFields content={"Comfirm Password"} type={"password"}/>
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
