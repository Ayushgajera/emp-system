import React from 'react'
import Header from "./../other/Header";
import TaskListNumber from "./../other/TaskListNumber";
import TaskList from "./../TaskList/TaskList";

function EmployeeDashboard(props) {
  
  return (
    <div className=' h-screen w-screen bg-[#1c1c1c]'> 
      <Header data={props.data} changeUser={props.changeUser}/>
      <TaskListNumber data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
