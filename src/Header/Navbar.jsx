import React, { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
    const [navPoint, setNavPoint] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const handleToggle = () => {
        setNavPoint((prev) => !prev);
    };

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className='p-4'>
            <header>
                <nav className='h-auto relative'>
                    <div className='w-full'>
                        <div className={`flex items-center justify-between ${navPoint ? "" : "border-b-2 border-indigo-600 pb-1"}`}>
                            <h1 className='text-bold text-2xl'>Vainu</h1>
                            {width <= 768 ? (
                                navPoint ? (
                                    <RxCross1 className='text-2xl cursor-pointer' onClick={handleToggle} />
                                ) : (
                                    <FaBars className='text-2xl cursor-pointer' onClick={handleToggle} />
                                )
                            ) : (
                                <div className='z-50 flex gap-12 mt-3 md:text-xl lg:gap-20'>
                                    <Link to={'/'}>Home</Link>
                                    <Link to={'/education'}>Education</Link>
                                    <Link to={'/skills'}>Skills</Link>
                                    <Link to={'/contact'}>Contact</Link>
                                    <Link to={'/project'}>Project</Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={`absolute top-0 left-0 w-full  border-b-2 border-indigo-600  py-3 transition-transform duration-500 ease-in-out ${navPoint ? 'translate-y-[50%] opacity-100' : '-translate-y-[100%] opacity-0'}`} >
                        <div className='flex flex-row items-center justify-between md:text-xl text-white'>
                            <Link to={'/'} >Home</Link>
                            <Link to={'/education'} >Education</Link>
                            <Link to={'/skills'} >Skills</Link>
                            <Link to={'/contact'} >Contact</Link>
                            <Link to={'/project'} >Project</Link>
                        </div>
                    </div>
                </nav>
            </header>
            <Outlet />
        </div>
    );
}

export default Navbar;