import React from 'react'
import InputFields from '../../components/tools/InputFields'
import TextArea from '../../components/tools/TextArea'
import { FormBtns } from '../../components/tools/Buttons'
import { Link } from 'react-router-dom'




const AddBlog = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-whitesmoke p-6">
      <div className="w-full max-w-md bg-whitesmoke rounded-lg p-8 md:flex md:max-w-full">
        <div className="min-h-[70vh] hidden md:flex md:justify-center md:items-center md:w-1/3 bg-[#E6B9A6] text-[#2F3645] p-10 rounded-l-lg">
          <h2 className="text-[64px] font-bold">Try Buddy</h2>
        </div>
        <div className="md:w-1/2 p-8 pl-[70px]">
          <h3 className="text-4xl font-bold font-dm-serif-display text-gray-800 mb-[50px]">What’s in your mind today?</h3>          
          <form>
            <InputFields content={"Title"} type={"text"}/>
            <TextArea content="Content"/>
          </form>
          <div className='flex flex-row justify-between'>
            <div className="max-w-[163px] h-[46px] flex-1 relative box-border border-[1px] border-solid border-gray-300 bg-[#E6B9A6] text-[#2F3645] font-bold mr-4 text-center">Add Tag</div>
            <input className=" h-[46px] flex-1 relative box-border border-[1px] border-solid border-gray-300 bg-whitesmoke"/>
          </div> 
          <div className='my-[40px] mx-[70px]'><FormBtns content={"POST"}/></div>
        </div>
      </div>
    </div>
  )
}

export default AddBlog