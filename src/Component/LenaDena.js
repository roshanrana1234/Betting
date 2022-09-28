import React from 'react'

const LenaDena = () => {
    return (
        <>
            <div className='text-gray-800 p-5' >

                <div className='text-white bg-[#474747] p-1 text-3xl rounded' >
                    Lena Dena
                </div>

                <div className='grid grid-cols-2 gap-3 mt-4' >

                    <div className='w-full rounded-lg'>
                        <div className='text-white bg-[#FF0000] p-1 text-3xl rounded' >Lena</div>
                        <div className='flex w-full' >
                            <div className=' w-full border border-gray-600 text-lg p-2 font-bold' >User Detail</div>
                            <div className=' w-full border border-gray-600 text-lg p-2 font-bold' >Amount</div>
                        </div>
                        <div className='flex ' >
                            <div className='w-full p-2 border border-gray-600' >girl100 - golu</div>
                            <div className=' p-2 border border-gray-600 w-full text-center' >
                                <button className='text-white bg-red-700 rounded-lg p-2 px-3' >-23099</button>
                            </div>
                        </div>
                    </div>


                    <div className='w-full rounded-lg'>
                        <div className='text-white bg-[#008000] p-1 text-3xl rounded' >Lena</div>
                        <div className='flex w-full' >
                            <div className=' w-full border border-gray-600 text-lg p-2 font-bold' >User Detail</div>
                            <div className=' w-full border border-gray-600 text-lg p-2 font-bold' >Amount</div>
                        </div>
                        <div className='flex ' >
                            <div className='w-full p-2 border border-gray-600' >girl100 - golu</div>
                            <div className=' p-2 border border-gray-600 w-full text-center' >
                                <button className='text-white bg-red-700 rounded-lg p-2 px-3' >-23099</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default LenaDena