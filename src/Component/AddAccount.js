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
                                <div>
                                    <div className='p-2' >
                                        Exposer Limit:
                                    </div>
                                    <div>
                                        <input className='border p-2' type="text" name="" id="" />
                                    </div>
                                </div>
                                <div  >
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

                </div>
            </div>

        </>
    )
}

export default AddAccount