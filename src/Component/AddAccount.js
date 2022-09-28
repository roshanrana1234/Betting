import React from 'react'

const AddAccount = () => {
    return (
        <>

            <div className='border p-2 border-gray-300 m-4' >
                <div className='text-4xl font-semibold p-3' >
                    Add Account Updated
                </div>
                <div className='grid lg:grid-cols-2 gap-7' >
                    <div className='p-5' >
                        <div className='text-white font-semibold text-2xl bg-blue-500  ' >
                            <div className='p-2' >
                                Personal Detail
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 font-semibold text-gray-600 border p-2 ' >
                            <div className='flex justify-evenly ' >
                                <div>
                                    <div className='p-2' >
                                        Login Id:
                                    </div>
                                    <div>
                                        <input className=' border p-2' type="text" name="" id="" />
                                    </div>
                                </div>
                                <div>
                                    <div className='p-2' >
                                        User Password:</div>

                                    <div>
                                        <input className='border p-2' type="text" name="" id="" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-evenly ' >
                                <div>
                                    <div className='p-2' >
                                        Retype Password:
                                    </div>
                                    <div>
                                        <input className='border p-2' type="text" name="" id="" />
                                    </div>
                                </div>
                                <div>
                                    <div className='p-2' >
                                        Part Name:
                                    </div>
                                    <div>
                                        <input className='border p-2' type="text" name="" id="" />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='p-5' >
                        <div className='text-white font-semibold text-2xl bg-blue-500  ' >
                            <div className='p-2' >
                                Account Detail
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 font-semibold text-gray-600 border p-2 ' >
                            <div className='flex justify-evenly ' >
                                <div className='flex justify-center items-center gap-10' >
                                    <div>
                                        <div className='p-2' >
                                            Account Type:
                                        </div>
                                        <div>
                                            <select className='p-2 border text-sm' placeholder='Select Your Account Type' name="" id="">
                                                <option value="">- Select Your Account Type</option>
                                                <option value="">Agent</option>
                                                <option value="">Client</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='p-2' >
                                            Cradint Balance, <div className='text-green-500 text-sm' >(Avilable Balance: 7767)</div></div>

                                        <div>
                                            <input className='border p-2' type="text" name="" id="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-evenly ' >
                                <div className='w-9/12 m-auto' >
                                    <div className='p-2' >
                                        Exposer Limit:
                                    </div>
                                    <div>
                                        <input className=' w-full border-gray-600 border p-2' type="number" name="" id="" />
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Personal Settings */}

                <div className='p-5' >
                    <div className='text-white font-semibold text-2xl bg-blue-500  ' >
                        <div className='p-2' >
                            Personal Detail
                        </div>
                    </div>

                    <div>
                        <div className='text-gray-800 flex justify-evenly  ' >
                            <div>Match Commssion</div>
                            <div>Session Commssion</div>
                        </div>


                        <div>Upline</div>
                        <div className='text-gray-800 flex justify-evenly  border shadow p-2' >
                            <div>2</div>
                            <div>3</div>
                        </div>

                        <div className='mt-4' > Downline</div>
                        <div className='text-gray-800 flex justify-between gap-4  border shadow p-2 w-full ' >
                            <div className='w-full' >
                                <select
                                    className='w-full rounded boder border-2 border-gray-600 p-2'
                                    name="" id="">
                                    <option value="">0</option>
                                    <option value="">0.5</option>
                                    <option value="">1</option>
                                </select>
                            </div>

                            <div className='w-full' >
                                <select
                                    className='w-full rounded boder border-2 border-gray-600 p-2'
                                    name="" id="">
                                    <option value="">0</option>
                                    <option value="">0.5</option>
                                    <option value="">1</option>
                                </select>
                            </div>
                        </div>


                    </div>

                </div>

                <br /> <br />

                {/* Casino Partnerships */}

                <div className='p-5' >
                    <div className='text-white font-semibold text-2xl bg-blue-500  ' >
                        <div className='p-2' >
                            Casino Partnerships
                        </div>
                    </div>

                    <div>
                        <div className='flex  p-2' >
                            <div className='px-6' >Upline</div>
                            <div className='p-2' >20</div>
                        </div>
                        <div className='flex  p-2' >
                            <div className='px-8' >Our</div>
                            <div className='w-full' >
                                <select
                                    className='border w-full p-2 shadow-xl'
                                    name="" id="">
                                    <option value="">0</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select></div>
                        </div>
                        <div className='px-7' >Downline</div>
                    </div>
                </div>


                {/* Master Password */}

                <div className='flex justify-end my-7 p-5' >
                    <div></div>
                    <div className='flex flex-col gap-2 ' >
                        <div>Mater Password</div>
                        <input className='border shadow-xl p-2 ' type="password" />
                    </div>
                </div>

                <div className='flex justify-end my-10' >
                    <input className='bg-gray-700 text-white p-2 px-5 rounded active:bg-gray-400' type="submit" value="Create Account" />
                </div>

            </div>


        </>
    )
}

export default AddAccount