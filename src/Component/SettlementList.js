import React from 'react'

const SettlementList = () => {
    return (
        <>
            <div className='text-gray-800 p-5' >
                <div className='text-gray-800 text-2xl' >Settlement List</div>

                <div className='grid grid-cols-1 lg:grid-cols-3 p-5 gap-5' >
                    <div className='flex flex-col ' >
                        <label htmlFor="">Search By Client Name</label>
                        <input className='p-2 border shadow-lg border-gray-600' type="text" />
                    </div>
                    <div className='flex flex-col ' >
                        <label htmlFor=""> From</label>
                        <input className='p-2 border shadow-lg border-gray-600' type="date" />
                    </div>
                    <div className='flex flex-col ' >
                        <label htmlFor="">To</label>
                        <input className='p-2 border shadow-lg border-gray-600' type="date" />
                    </div>
                </div>
                <div className='text-center bg-blue-600 p-2 text-white rounded w-6/12 m-auto lg:w-3/12' >  RELOAD</div>

                <div>
                    Table
                </div>
            </div>
        </>
    )
}

export default SettlementList