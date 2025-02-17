import React from 'react'

function ProfessionSkill() {
  return (
    <div>
        <div className='p-2 border-2 rounded-lg border-indigo-500 mt-1 flex flex-col gap-3 md:gap-5 md:p-8'>
                 <div>
                   <div className='flex  justify-between mb-[2px]'>
                      <p>Communication skill</p>
                      <p>60%</p>
                   </div>
                   <div className='border-2 border-indigo-500 pl-1 py-1 rounded-md'>
                       <div className='bg-indigo-500 w-[60%] h-2 rounded-md'></div>
                   </div>
                </div>
                <div>
                   <div className='flex  justify-between mb-[2px]'>
                      <p>MS Word</p>
                      <p>70%</p>
                   </div>
                   <div className='border-2 border-indigo-500 pl-1 py-1 rounded-md'>
                       <div className='bg-indigo-500 w-[70%] h-2 rounded-md'></div>
                   </div>
                </div>
                <div>
                   <div className='flex  justify-between mb-[2px]'>
                      <p>MS Excel</p>
                      <p>40%</p>
                   </div>
                   <div className='border-2 border-indigo-500 pl-1 py-1 rounded-md'>
                       <div className='bg-indigo-500 w-[40%] h-2 rounded-md'></div>
                   </div>
                </div>
                <div>
                   <div className='flex  justify-between mb-[2px]'>
                      <p>Power Point Presention</p>
                      <p>50%</p>
                   </div>
                   <div className='border-2 border-indigo-500 pl-1 py-1 rounded-md'>
                       <div className='bg-indigo-500 w-[50%] h-2 rounded-md'></div>
                   </div>
                </div>
          
        </div>
    </div>
  )
}

export default ProfessionSkill