import React, { useEffect, useState } from 'react'
import NewTask from "./../TaskList/NewTask";

function TaskListNumber({ data }) {
 const [NewTask, setNewTask] = useState('');
 
  useEffect(() => {
    setNewTask(data.taskCounts.newTask)
  }, []);
  return (
    <div className=' w-full h-[28%] flex gap-2 p-6'>
      <div className='bg-red-500 w-[30%]  rounded-xl p-6'>
        <h2 className='font-semibold text-3xl'>{NewTask}</h2>
        <h3 className='text-2xl'>New Task</h3>
      </div>
      <div className='bg-green-500 w-[30%]  rounded-xl p-6'>
        <h2 className='font-semibold text-3xl'>{data.taskCounts.completed}</h2>
        <h3 className='text-2xl'>Completed Task</h3>
      </div>
      <div className='bg-blue-500 w-[30%]  rounded-xl p-6'>
        <h2 className='font-semibold text-3xl'>{data.taskCounts.active}</h2>
        <h3 className='text-2xl'>Accepted Task</h3>
      </div>
      <div className='bg-pink-800 w-[30%]  rounded-xl p-6'>
        <h2 className='font-semibold text-3xl'>{data.taskCounts.failed}</h2>
        <h3 className='text-2xl'>Failed Task</h3>
      </div>

    </div>
  )
}

export default TaskListNumber
