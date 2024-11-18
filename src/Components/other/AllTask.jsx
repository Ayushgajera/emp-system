import React from 'react'

function AllTask() {
  return (
    <div className='bg-zinc-800 h-[32%] mx-4 my-2 text-white'>
    <div className='flex justify-between px-10 '>
      <h2 className='text-center text-xl font-medium text-white'>Name</h2>
      <h2 className='text-center text-xl font-medium text-white'>Task</h2>
      <h2 className='text-center text-xl font-medium text-white'>Status</h2>
  
      </div>
      <div className='overflow-auto  admintask h-[86%] text-xl'>
      <div className='flex flex-col gap-2 m-2'>
        <div className='p-4 rounded-md bg-indigo-700 flex justify-between px-10 '>
          <h3 className=' font-medium'>ayush </h3>
          <h3 >Make Ui design</h3>
          <h5>Status</h5>
        </div>
        <div className='p-4 rounded-md bg-emerald-700 flex justify-between px-10 '>
          <h3 className=' font-medium'>vaibhav </h3>
          <h3 >Make Ui design</h3>
          <h5>Status</h5>
        </div>
        <div className='p-4 rounded-md bg-yellow-500 flex justify-between px-10'>
          <h3 className=' font-medium'>bhargav</h3>
          <h3 >Make Ui design</h3>
          <h5>Status</h5>
        </div>
        <div className='p-4 rounded-md bg-purple-700 flex justify-between px-10 '>
          <h3 className=' font-medium'>rohan</h3>
          <h3 >Make Ui design</h3>
          <h5>Status</h5>
        </div>
        
      </div>
      
        
      </div>
    </div>
  )
}

export default AllTask
