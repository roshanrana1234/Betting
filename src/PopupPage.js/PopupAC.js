import React from 'react'
import { BsExclamationCircle } from "react-icons/bs";
const PopupAC = ({ visible, onClose }) => {
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
                <div className='bg-[#fff] p-10 rounded text-gray-600 font-body' >
                    <div className='flex flex-col gap-3  justify-center items-center' >
                        <div className='text-8xl text-red-300' > <BsExclamationCircle /> </div>
                        <div className='text-4xl' >
                            Are You Sure ?
                        </div>
                        <div>
                            You Want To Close Account!
                        </div>
                        <button className='bg-red-500 p-2 rounded text-white font-bold w-full my-2' >
                            Yes
                        </button>
                    </div>
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

export default PopupAC