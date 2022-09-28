import React from 'react'

const CasinoReportResult = () => {
    return (
        <>
            <div className='text-gray-800 p-5' >
                <div className='text-gray-800 text-2xl' >Account Statement</div>

                <div className='grid grid-cols-1 lg:grid-cols-2 p-5 gap-5' >
                    <div className='flex flex-col ' >
                        <label htmlFor="">Game Name</label>
                        <select
                            className='p-2 border shadow-lg border-gray-600'
                            name="" id="">
                            <option value="">VTeenPatti20</option>
                            <option value="">VDT20</option>
                            <option value="">VDT20</option>
                            <option value="">VDTL20</option>
                            <option value="">VAAA</option>
                        </select>

                    </div>

                    <div className='flex flex-col ' >
                        <label htmlFor=""> Date</label>
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

export default CasinoReportResult