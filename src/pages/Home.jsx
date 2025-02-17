import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Home() {
  return (
   <div className='py-1 '>
       <div className='flex flex-col gap-3 mt-4 md:mt-14 lg:gap-8'>
            <div className='w-[99%]  p-[2px] md:flex gap-6 items-center lg:gap-14 lg:mt-5'>
                <img className='min-w-[330px] max-h-[330px]  rounded-lg' src="data:image/jpeg;base64,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" alt="dffgds" />
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
