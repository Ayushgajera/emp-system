import React from 'react'

function CompleteTask({data}) {
  return (
    <div>
       <div className='bg-blue-500 h-full w-[300px] rounded-xl flex-shrink-0'>
                <div className=' flex justify-between items-center px-4 pt-4'>
                    <h3 className=' px-2 py-1 text-black font-medium bg-green-400 rounded'>{data.category} </h3>
                    <h4>{data.taskDate}</h4>
                </div>
                <div className=' p-4'>
                    <h3 className='text-2xl font-semibold'>{data.taskTitle}</h3>
                    <p className='mt-2'>{data.taskDescription}</p>
                </div>
                <div className='flex text-white justify-between p-4 '>
                    <button className='bg-blue-700 p-2 text-sm rounded'>Completed Task</button>
                   
                </div>
            </div>
    </div>
  )
}

export default CompleteTask
