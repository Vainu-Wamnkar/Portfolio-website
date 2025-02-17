import React from 'react'

function Education() {

  const educationDetails=[
    {
      courseName:"Mp Board",
      institueName:"Govt.High Secondary School Banspani",
      standard:"10th",
      percentage:"85.2%"
    },
    {
      courseName:"Mp Board",
      institueName:"Govt.High Secondary School Banspani",
      standard:"12th",
      percentage:"84%"
    },
    {
      courseName:"B.Tech ",
      institueName:"Radharama Institute of technology and scince bhopal",
      standard:"Degree (Computer Science Engineering)",
      percentage:"76%"
    },
  ]


  return (
    <div className='mt-5'>
        <h1 className='text-2xl  font-bold text-center sm:text-[30px] xl:mt-12'>My <span className='text-indigo-500'>Journey</span></h1>
        <h1 className='text-2xl font-semibold mt-6 text-indigo-500 sm:text-[25px] '>Education</h1>
        <div className='flex flex-col gap-3 mt-2  md:gap-6 md:mt-4'>
            {
              educationDetails.map((oneCourse,i)=>(
                <div className='p-2 border-2 rounded-lg border-indigo-500 sm:px-4'>
                    <h1 className='text-sm text-gray-200 lg:text-xl mb-1'>Course/Board : {oneCourse.courseName}</h1>
                    <h1 className='text-sm text-gray-200 sm:text-base lg:text-xl mb-1'>Institute/school : {oneCourse.institueName}</h1>
                    <h1 className='text-sm text-gray-200 sm:text-base lg:text-xl mb-1'>standard : {oneCourse.standard}</h1>
                    <h1 className='text-sm text-gray-200 sm:text-base lg:text-xl mb-1'>percentage : {oneCourse.percentage}</h1>
                </div>
              ))
            }
        </div>
        <div className='mt-3'>
          <h1 className='text-2xl font-semibold mt-6 text-indigo-500 sm:text-[25px]'>My Experience</h1>
          <div className='p-2 border-2 rounded-lg border-indigo-500 mt-1 sm:px-4 md:mt-4'>
                <h1 className='text-sm text-gray-200 sm:text-base '>Company : Bajaj Chectak Electrical</h1>
                <h1 className='text-sm text-gray-200 sm:text-base'>Potision : Sales Man</h1>
                <h1 className='text-sm text-gray-200 sm:text-base'>Worked : 1 year worked</h1>
          </div>
        </div>

    </div>
  )
}

export default Education