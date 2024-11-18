import React, { useEffect, useState } from 'react';
import Header from "./Header";
import AllTask from "./AllTask";
import CompleteTask from "./../TaskList/CompleteTask";

function CreateTask() {
  const [taskTitle, settaskTitle] = useState('');
  const [taskDescription, settaskDescription] = useState('');
  const [taskdate, settaskdate] = useState('');
  const [assignTo, setassignTo] = useState('');
  const [Category, setCategory] = useState('');
 

  const submitHandler = (e) => {
    e.preventDefault();
  
    // Create the new task object right here
    const newTask = {
      taskTitle,
      taskdate,
      taskDescription,
      Category,
      active: true,
      newTask: true,
      failed: false,
      Completed: false,
    };
  
    // Retrieve the data from localStorage
    const allEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    const updatedEmployees = allEmployees.map((employee) => {
      if (employee.firstName === assignTo) {
        employee.tasks.push(newTask); // Add task to employee
        employee.taskCounts.newTask = (employee.taskCounts.newTask || 0) + 1; // Increment task count
      }
      return employee;
    });
  
    // Save updated employees to localStorage
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };
  return (
    <div className='text-white'>
      <form onSubmit={submitHandler} className='h-[45%] bg-zinc-900 flex justify-between mx-4 p-2 rounded'>
        <div className='first text-white w-[40%]'>
          <div>
            <h3>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => settaskTitle(e.target.value)}
              type="text"
              className='px-4 rounded outline-none w-full bg-transparent border border-white'
              placeholder='Make a UI design'
            />
          </div>
          <div className='my-4'>
            <h3>Date</h3>
            <input
              value={taskdate}
              onChange={(e) => settaskdate(e.target.value)}
              type="date"
              className='px-4 rounded outline-none w-full bg-transparent border border-white'
            />
          </div>
          <div className='my-4'>
            <h3>Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setassignTo(e.target.value)}
              type="text"
              className='px-4 rounded outline-none w-full bg-transparent border border-white'
              placeholder='Employee name'
            />
          </div>
          <div className='my-4'>
            <h3>Category</h3>
            <input
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              className='px-4 rounded outline-none w-full bg-transparent border border-white'
              placeholder='Design, Dev, etc..'
            />
          </div>
        </div>
        <div className='second w-[40%] text-white'>
          <h3>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => settaskDescription(e.target.value)}
            className='resize-none w-[90%] h-[60%] bg-transparent border-white border rounded outline-none'
          ></textarea>
          <div>
            <button className='py-2 w-[90%] bg-emerald-500 rounded hover:bg-emerald-600'>Create Task</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
