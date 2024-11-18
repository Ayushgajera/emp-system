import React from 'react'

function Header(Props) {

    const logoutuser=()=>{
        localStorage.setItem('loggedInUser','');
        Props.changeUser('')

    }
    return (
        <div className='w-full h-[20%] flex items-center justify-between p-8 '>
            
            <div className='text-white'>
            <h2 className='text-xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username👋</span></h2> 
            </div>
            <div>
                <button onClick={logoutuser} className='py-2 px-4 bg-red-500 rounded font-semibold'>Log Out</button>
            </div>
        </div>
    )
}

export default Header
