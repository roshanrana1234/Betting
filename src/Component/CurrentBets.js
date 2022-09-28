import React from 'react'

const CurrentBets = () => {
    return (
        <>
            <div className='text-gray-800 p-5' >

                <div className='text-white bg-[#474747] p-1 text-3xl rounded' >
                    Bet History
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5' >

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
                </div>

                <button className='text-white bg-gray-700 p-2 px-5 rounded mt-3' >submit</button>

            </div>
        </>
    )
}

export default CurrentBets