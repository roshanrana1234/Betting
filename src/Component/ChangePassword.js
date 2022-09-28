import React from 'react'

const ChangePassword = () => {
    return (
        <>
            <div className='p-4' >

                <div className='text-white bg-[#474747] p-1 text-3xl rounded' >
                    Change Password
                </div>

                <div className='w-10/12 m-auto lg:w-6/12' >
                    <div className='flex flex-col' >
                        <div className='p-2' >New Password:</div>
                        <input type="password" className='rounded border border-black p-2 w-full shadow-xl' />
                    </div>
                    <div className='flex flex-col' >
                        <div className='p-2' >Retype Password:</div>
                        <input type="password" className='rounded border border-black p-2 w-full shadow-xl' />
                    </div>
                    <div className='flex flex-col' >
                        <div className='p-2' >Current Password:</div>
                        <input type="password" className='rounded border border-black p-2 w-full shadow-xl' />
                    </div>
                    <input className='text-white flex justify-center p-2 rounded bg-blue-500 active:bg-blue-400 w-full my-4' type="submit" value="Submit" />
                </div>
            </div>
        </>
    )
}

export default ChangePassword