import React from 'react'

const BetHistory = () => {
    return (
        <>
            <div className='text-gray-800 p-5' >

                <div className='text-white bg-[#474747] p-1 text-3xl rounded' >
                    Bet History
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5' >

                    <div className='flex-col' >
                        <div className='flex flex-col gap-3' >
                            <label htmlFor="">Market</label>
                            <select
                                className='p-2 border shadow-lg border-gray-600 rounded-lg'
                                name="" id="">
                                <option value="">Market</option>
                                <option value="">Fancy</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-3 ' >
                            <label htmlFor="">Select Sport</label>
                            <select
                                className='p-2 border shadow-lg border-gray-600 rounded-lg'
                                name="" id="">
                                <option value="">Cricket</option>
                                <option value="">Soccer</option>
                                <option value="">Tennis</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex-col gap-3' >
                        <div className='flex flex-col gap-3 ' >
                            <label htmlFor="">Select Match</label>
                            <select
                                className='p-2 border shadow-lg border-gray-600 rounded-lg'
                                name="" id="">
                                <option value="">Market</option>
                                <option value="">Fancy</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-3' >
                            <label htmlFor="">Select Match</label>
                            <select
                                className='p-2 border shadow-lg border-gray-600 rounded-lg'
                                name="" id="">
                                <option value="">Cricket</option>
                                <option value="">Soccer</option>
                                <option value="">Tennis</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <div className='flex flex-col gap-3 ' >
                            <label htmlFor=""> Search By Client Name</label>
                            <input className='rounded-lg p-2 border shadow-lg border-gray-600' type="text" />
                        </div>
                    </div>

                </div>
                <div>
                    <input type="submit" className='text-white bg-gray-800 w-full rounded text-center my-5 p-2' />
                </div>
            </div>
        </>
    )
}

export default BetHistory