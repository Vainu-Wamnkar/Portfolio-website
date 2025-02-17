import React from 'react'
import CoadingSkill from '../SmallComponent/CoadingSkill'
import ProfessionSkill from '../SmallComponent/ProfessionSkill'

function Skills() {
  return (
    <div className='w-full py-4'>
        <h1 className='text-2xl  font-bold text-center md:text-[30px] xl:mt-12'>My <span className='text-indigo-500'>Skills</span></h1>
        <div className='mt-3 w-full '>
          <h1 className='text-2xl font-semibold mt-3 text-indigo-500 md-text-[25px]'>Coading Skills</h1>
          <CoadingSkill/>
          <h1 className='text-2xl font-semibold mt-6 text-indigo-500 md-text-[25px]'>Proffesonal Skills</h1>
          <ProfessionSkill/>

        </div>
         
    </div>
  )
}

export default Skills