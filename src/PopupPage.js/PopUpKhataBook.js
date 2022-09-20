import React from 'react'

const PopUpKhataBook = ({ visible, onClose }) => {
    if (!visible) return null

    const handleOnClose = (e) => {
        if (e.target.id === "contains") onClose()

    }
    return (
        <>
            <div
                id='contains'
                onClick={handleOnClose}
                className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm justify-center items-center flex' >
                <div className='bg-[#fff] p-2 rounded text-gray-600 font-body' >
                    <form action="">

                        <div className=' text-2xl font-bold p-4' >
                            WithDrawal
                        </div>

                        <div className='flex flex-col gap-5' >

                            <div className='flex  w-full' >
                                <div className='w-[162px]' >
                                    Khata
                                </div>
                                <div>
                                    <input className='border border-gray-600 ' type="number" />
                                </div>
                            </div>

                            <div className='flex  w-full' >
                                <div className='w-[162px]' >
                                    Ammount:
                                </div>
                                <div>

                                </div>
                            </div>

                            <button className='bg-blue-500 p-2 rounded text-white font-bold' >
                                Submit
                            </button>

                        </div>


                    </form>

                    <button
                        className='bg-gray-500 p-2 rounded text-white font-bold w-full my-2'
                        onClick={onClose} >
                        Back
                    </button>
                </div>
            </div>
        </>
    )
}

export default PopUpKhataBook