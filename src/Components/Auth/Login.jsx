import React, { useState } from 'react'

function Login({handlelogin}) {

    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const submithandler = (e) => {
        e.preventDefault();
        // console.log(`email is ${email}`);
        handlelogin(email, password);
        // console.log(`password is ${password}`);
        setEmail("");
        setpassword("");


    }
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className=' p-10 text-black border-emerald-500 border-2 rounded-md'>
                <form className='flex flex-col ' onSubmit={(e) => {
                    submithandler(e);
                }}>
                    <h2 className='text-center text-white text-3xl pb-6 font-bold'>Login Form</h2>
                    <input required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);


                        }}
                        type="email" placeholder='Enter Email' className=' outline-none  rounded-md border-2 py-2 px-10  my-2 border-emerald-500' />
                    <input required
                        value={password}
                        onChange={(e) => {
                            setpassword(e.target.value);
                        }}
                        type="Password" placeholder='Enter password' className=' outline-none rounded-md border-2 py-2 px-10 my-2 border-emerald-500' />
                    <button className='py-2 px-0 bg-em-300 bg-emerald-500 rounded-md mt-4 text-xl text-white font-semibold hover:bg-emerald-700'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login
