import React, { useEffect, useRef, useState } from 'react'
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link, Outlet } from 'react-router-dom';

function Navbar() {

    const displayON=useRef();
    const [navPoint,setNavpoint]=useState(0);
    const [width,setWidth]=useState(window.innerWidth)

    const handleBar=()=>{
      setNavpoint(1)
    } 
    const handleCross=()=>{
      setNavpoint(0);
    }

    const handleResize=()=>{
        setWidth(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener("resize",handleResize);
    },[width])
  

    return (
        <div className='p-4'>
            <header>
                <nav className='h-auto border-b-2 border-indigo-600 pb-1'>
                    <div className='flex  items-center justify-between '>
                       <h1 className='text-bold text-2xl'>Vainu</h1>
                       {  
                       
                          width<=768 ?(navPoint===1?( <RxCross1 className='text-2xl' onClick={handleCross}/>):( <FaBars className='text-2xl' onClick={handleBar}/>)):
                          <div className='z-50 flex gap-12 mt-3 duration-1000 transition-all md:text-xl lg:gap-20'>
                                <Link to={'/'}><p>Home</p></Link>
                                <Link to={'/education'}><p>Education</p></Link>
                                <Link to={'/skills'}><p>Skills</p></Link>
                                <Link to={'/contact'}><p>Contact</p></Link>
                                <Link to={'/project'}><p>Project</p></Link>
                          </div>

                       }
                      
                    </div>
                    {
                        navPoint===1?(
                        <div className='z-50 flex justify-between mt-3 duration-1000 transition-all md:text-xl'>
                            <Link to={'/'}><p>Home</p></Link>
                            <Link to={'/education'}><p>Education</p></Link>
                            <Link to={'/skills'}><p>Skills</p></Link>
                            <Link to={'/contact'}><p>Contact</p></Link>
                            <Link to={'/project'}><p>Project</p></Link>
    
                        </div>
                        ):""
                    }
                    
                </nav>
            </header>
            <Outlet/>
        </div>
    )
}

export default Navbar