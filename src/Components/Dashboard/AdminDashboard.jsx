import React from 'react'
import CreateTask from "./../other/CreateTask";
import AllTask from '../other/AllTask';
import Header from '../other/Header';

function AdminDashboard(props) {
    return (
        <div className='w-screen h-screen bg-[#161616]'>
            <Header changeUser={props.changeUser}/>
            <CreateTask/>
            <AllTask/>
        </div>
    )
}

export default AdminDashboard
