import React from 'react'

function FailedTask() {
  return (
    <div>
       <div className='bg-blue-500 h-full w-[300px] rounded-xl flex-shrink-0'>
                <div className=' flex justify-between items-center px-4 pt-4'>
                    <h3 className=' px-2 py-1 text-black font-medium bg-green-400 rounded'>High </h3>
                    <h4>26 feb 2024</h4>
                </div>
                <div className=' p-4'>
                    <h3 className='text-2xl font-semibold'>Become Video editor</h3>
                    <p className='mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae dolorem maxime.</p>
                </div>
                <div className='flex text-white justify-between p-4 '>
                    <button className='bg-red-700 p-2 text-sm rounded'>Failed Task</button>
                   
                </div>
            </div>
    </div>
  )
}

export default FailedTask
