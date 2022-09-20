import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <>
            <div className='h-screen w-full bg-gradient-to-b from-cyan-500 to-blue-500' >
                <div className='flex justify-center items-center flex-col h-screen' >

                    <div className='lg:w-4/12 w-6/12 m-auto flex justify-center items-center flex-col gap-6 bg-white p-4 rounded shadow-2xl ' >
                        <div
                            className='text-3xl font-bold '
                        >Sign In</div>
                        <label class="block">
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                User Name
                            </span>
                            <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                        </label>

                        <label class="block">
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Password
                            </span>
                            <input type="password" name="password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 " placeholder="you@example.com" />
                        </label>

                        <button className='text-white bg-blue-500 w-full p-3 rounded-md hover:bg-blue-700' >
                            <Link to="/dashboard" >
                                Login
                            </Link>
                        </button>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Login