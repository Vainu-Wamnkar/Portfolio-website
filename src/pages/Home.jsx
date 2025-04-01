import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Home() {

    const [image,setImage]=useState(null)



  return (
   <div className='py-1 '>
       <div className='flex flex-col gap-3 mt-4 md:mt-14 lg:gap-8'>
            <div className='w-[99%]  p-[2px] md:flex gap-6 items-center  lg:gap-14 lg:mt-5'>
                <div className='mb-12 mt-8 w-[310px] h-[310px]  rounded-full overflow-hidden flex justify-center items-center relative'>
                        <img src="/ritik.jpg" alt="image not found"  className='w-full'/>
                </div>
                <div className=''>
                    <h1 className='text-2xl font-bold mt-3 sm:text-[30px] md:text-[30px] lg:text-[40px]'>Hi,I'm Vainu Wamnkar</h1>
                    <h2 className='text-xl font-semibold text-blue-600 sm:text-[30px] sm:mt-2 md:text-[30px] md:mt-4 lg:text-[35px]'>Frontend Developer</h2>
                </div>
            </div>
            <div >
                <p className='text-base mt-1 sm:text-[18px]'>Front developer : Hi, I am vainu wamnkar I am developer of UI/UX and independently able to make a design.Using diffrent kind of technology like React etc..</p>
                <div className='flex gap-3 mt-4 lg:mt-8'>
                    <button className='bg-[#00BFFF] text-base border px-2 py-1  rounded-lg outline-none border-none lg:text-xl lg:px-6 '>Read more</button>
                    <button className='text-base border border-sky-500 px-2 py-1  rounded-lg lg:text-xl lg:px-6 '>Let's Talk</button>
                </div>
            </div>
            <div className='flex gap-3 mt-5'>
                <div className='w-10 h-10  flex items-center justify-center border-2  border-blue-600 rounded-full p-1'>
                    <Link to={`https://www.facebook.com/ritik.wamnkar.3`}><FaFacebookF className='text-xl text-blue-600   '/>                    </Link>
                </div>
                <div className='w-10 h-10  flex items-center justify-center border-2  border-blue-600 rounded-full p-1'>
                    <Link to={'https://www.linkedin.com/in/vainu-wamankar-7a3b39312/'}><FaLinkedinIn className='text-xl text-blue-600   '/></Link>
                </div>
                <div className='w-10 h-10  flex items-center justify-center border-2  border-blue-600 rounded-full p-1'>
                    <Link to={`https://www.instagram.com/mr_ritik_wamnkar09?igsh=MTZmdnJ0YjVobjFidQ==`}><FaInstagram className='text-xl  text-blue-600  '/></Link>
              
                </div>
            </div>
       </div>
   </div>
  )
}

export default Home