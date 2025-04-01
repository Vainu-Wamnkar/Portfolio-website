import React from 'react'
import {Link} from 'react-router-dom'

function Project() {

  return (
    <div>
        <div className='mt-14'>
            <h1 className='text-3xl text-center mt-4 font-bold xl:mt-12'>My <span className='text-indigo-500'>Project</span></h1>
            <h1 className='text-center text-red-500 mt-3'>Note:Project not responsive for mobile</h1>
            <div className='px-2 py-4 border-2 rounded-lg border-indigo-500 mt-6 flex flex-col gap-5 sm:px-6 '>
                  <Link to={'https://ipl-project-mu.vercel.app/'}> <p className='p-2 border-indigo-500 border line-clamp-1 rounded-md'>IPL Website using React and Crickbuz API</p> </Link>
                  <Link to={'https://employee-manage-ment-system.vercel.app/'}> <p className='p-2 border-indigo-500 border line-clamp-1 rounded-md'>Emplyee Management System</p>  </Link>
                  <Link to={'https://world-atlas-web.vercel.app/'}> <p className='p-2 border-indigo-500 border line-clamp-1 rounded-md'> World Atlas Website</p></Link>
                  <Link to={'https://paytm.com/'}> <p className='p-2 border-indigo-500 border line-clamp-1 rounded-md'> Paytm clone Website</p></Link>
            </div>
            <button className='p-2 border-2 border-indigo-500 rounded-lg mt-5 bg-blue-500 hover:bg-indigo-900 sm:px-6'>See Project</button>
        
        </div>

    </div>
  )
}

export default Project