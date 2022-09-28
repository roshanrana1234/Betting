import React, { useState } from 'react'
import { BiFootball } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
const MarketAnalysis = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <>
            <div className='p-10 h-screen' >
                <div className='flex  '>
                    <button
                        className={`${toggleState === 1 ? "active-tabs" : "tabs"} p-2 px-5 border border-slate-600`}
                        onClick={() => toggleTab(1)}
                    >Cricket</button>
                    <button
                        className={`${toggleState === 2 ? "active-tabs" : "tabs"} p-2 px-5 border border-slate-600`}
                        onClick={() => toggleTab(2)}
                    >Soccer</button>
                    <button
                        className={`${toggleState === 3 ? "active-tabs" : "tabs"} p-2 px-5 border border-slate-600`}
                        onClick={() => toggleTab(3)}
                    >Tennis</button>
                </div>


                <div className='border border-[#DCDCDC] h-full p-6' >

                    <div className=' border border-[#DCDCDC] bg-[#ffffff]' >

                        <div className={`${toggleState === 1 ? "active-content" : "content"}`}
                        >
                            <div className='w-full' >
                                <div className='text-white bg-[#0088CC] p-1 flex  items-center gap-1' >
                                    <BiFootball className='text-[#dcdcdc]' />
                                    Cricket
                                    <TiTick className='text-[#dcdcdc]' />
                                </div>
                                <div>
                                    <div className='font-semibold text-gray-800 bg-[#DCDCDC] p-1 flex gap-1 items-center' >West Indies Women New Zealand Women
                                        <div className='mx-4' >
                                            2022-09-22 19:00:00
                                        </div>
                                        <span><TiTick className='text-green-500 text-xl' /></span>
                                    </div>

                                    <div className='p-6' >

                                        <div className='flex items-end ' >
                                            <div>Bookmaker</div>
                                            <span>
                                                <TiTick className='text-green-500 text-xl' />
                                            </span>
                                        </div>
                                        <br /> <hr /><br />
                                        <div className='flex gap-5' >
                                            <div className='flex items-center gap-5 text-[#0088CC]' >
                                                West Indies Women
                                                <span>0</span>
                                            </div>
                                            <div className='flex items-center gap-5 text-[#0088CC]' >
                                                New Zeland Women
                                                <span>0</span>
                                            </div>
                                        </div>


                                        <br />
                                        <div className='flex items-end ' >
                                            <div>Match Odds</div>
                                            <span>
                                                <TiTick className='text-green-500 text-xl' />
                                            </span>
                                        </div>
                                        <br /> <hr /><br />
                                        <div className='flex gap-5' >
                                            <div className='flex items-center gap-5 text-[#0088CC]' >
                                                West Indies Women
                                                <span>0</span>
                                            </div>
                                            <div className='flex items-center gap-5 text-[#0088CC]' >
                                                New Zeland Women
                                                <span>0</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>




                        <div className={`${toggleState === 2 ? "active-content" : "content"}`}
                        >
                            <div className='w-full' >
                                <div className='text-white bg-[#0088CC] p-1 flex  items-center gap-1' >
                                    <BiFootball className='text-[#dcdcdc]' />
                                    Soccer
                                    <TiTick className='text-[#dcdcdc]' />
                                </div>
                                <br />
                            </div>
                        </div>
                        <div className={`${toggleState === 3 ? "active-content" : "content"}`}
                        >
                            <div className='w-full' >
                                <div className='text-white bg-[#0088CC] p-1 flex  items-center gap-1' >
                                    <BiFootball className='text-[#dcdcdc]' />
                                    Tennis
                                    <TiTick className='text-[#dcdcdc]' />
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MarketAnalysis




