import React from 'react'

const CasinoProfitAndLoss = () => {
    return (
        <>
            <div className='text-gray-800 p-5' >
                <div className='text-gray-800 text-2xl' >Profit & Loss</div>
                <hr />

                <div className='grid grid-cols-1 lg:grid-cols-4 gap-2' >
                    <div className='flex flex-col ' >
                        <label htmlFor=""> Start Date</label>
                        <input className=' rounded p-2 border shadow-lg border-gray-600' type="date" />
                    </div>
                    <div className='flex flex-col ' >
                        <label htmlFor=""> End Date</label>
                        <input className=' rounded p-2 border shadow-lg border-gray-600' type="date" />
                    </div>
                    <div className='flex flex-col ' >
                        <label htmlFor=""> Sport</label>
                        <select className=' rounded p-2 border shadow-lg border-gray-600' name="" id="">
                            <option value="">Cricket</option>
                            <option value="">Soccer</option>
                            <option value="">Tennise</option>
                        </select>
                    </div>
                    <div className='flex flex-col ' >
                        <div className='' >
                            Search By Client Name</div>
                        <div className='flex gap-3' >
                            <input className='border p-2 shadow-xl border-gray-500' type="text" />
                            <button className='text-white bg-green-500 p-2 px-5 rounded-lg ' >Apply</button>
                            <button className='text-white bg-red-500 p-2 px-5 rounded-lg '  >Clear</button>
                        </div>
                    </div>
                </div>


                <div>Table</div>
            </div>
        </>
    )
}

export default CasinoProfitAndLoss