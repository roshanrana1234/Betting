import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, Outlet } from 'react-router-dom';
import AddAccount from './AddAccount';
import { isAuthenticated } from './helper/auth';


const Dashboard = () => {
    const [drop, setDrop] = useState(true)
    const [profile, setProfile] = useState(true)


    const {user, token} = isAuthenticated();

    return (
        <>
            <nav>
                <div

                    className='h-24 bg-gradient-to-l from-[#0685C8] to-[#EE090D] font-body ' >
                    <div className='text-white font-semibold' >
                        <div
                            className='p-3'
                        >Welcom Bet Started</div>
                        <div className='  flex justify-between p-2' >
                            <ul className='flex gap-4  items-center' >
                                <li className='cursor-pointer hover:bg-blue-600 p-1 rounded-sm' >
                                    <Link to="listofclient" >
                                        List Of Client
                                    </Link>
                                </li>
                                <li className='cursor-pointer hover:bg-blue-600 p-1 rounded-sm' >
                                    <Link to="marketanalysis" >
                                        Market Aanysis
                                    </Link>
                                </li>
                                <li className='cursor-pointer hover:bg-blue-600 p-1 rounded-sm' >
                                    <Link to="livecasino" >
                                        LiveCasino
                                    </Link>
                                </li>
                                <li className='cursor-pointer hover:bg-blue-600 p-1 rounded-sm' >
                                    <Link to="virtualcasino" >
                                        Virtual Casino
                                    </Link>
                                </li>
                                <div>
                                    <li onClick={() => setDrop(!drop)} className={`cursor-pointer hover:bg-blue-600 p-1 rounded-sm  relative`} >
                                        <button className='flex gap-1 items-center justify-center' >
                                            Report
                                            <IoMdArrowDropdown className={`text-2xl ${!drop ? "rotate-[180deg]" : "null"} `} />
                                        </button>
                                    </li>
                                    <div className={`${drop ? "hidden" : "null"} absolute z-10 `} >
                                        <ul className='bg-[#374151] p-4 flex flex-col ' >
                                            <Link to="/" >
                                                <li className="hover:bg-[#fff] p-2 hover:text-[#374151]" >Account Statment</li>
                                            </Link>
                                            <Link to="/dashboard/settlementlist" >
                                                <li className="hover:bg-[#fff] p-2 hover:text-[#374151]" >Settlement List</li>
                                            </Link>
                                            <Link to='/dashboard/profitandloss' >
                                                <li className="hover:bg-[#fff] p-2 hover:text-[#374151]" >Profit & Loss</li>
                                            </Link>
                                            <Link to="/dashboard/casinoprofitandloss" >
                                                <li className="hover:bg-[#fff] p-2 hover:text-[#374151]" >Casino Profit & Loss</li>
                                            </Link>
                                            <Link to="/dashboard/casinodetail" >
                                                <li className="hover:bg-[#fff] p-2 hover:text-[#374151]" >Casino Detail</li>
                                            </Link>
                                            <Link to="/dashboard/bethistory" >
                                                <li className="hover:bg-[#fff] p-2 hover:text-[#374151]" >Bet History</li>
                                            </Link>
                                            <Link to="/dashboard/lenadena" >
                                                <li className="hover:bg-[#fff] p-2 hover:text-[#374151]" >Lena Dena</li>
                                            </Link>
                                            <li className="hover:bg-[#fff] p-2 hover:text-[#374151]" >Closed Account</li>

                                        </ul>
                                    </div>
                                </div>
                            </ul>
                            <div>
                                <button onClick={() => setProfile(!profile)} className='flex gap-1 items-center justify-center hover:text-blue-600 hover:bg-white p-2 relative' >
                                    {user.PersonalDetails.loginId}
                                    <IoMdArrowDropdown className='text-2xl' />
                                </button>
                                <div className={`bg-[#374151] p-2 absolute font-semibold text-sm right-0 flex flex-col gap-2 ${profile ? "hidden" : "null"}`}  >
                                    <Link to="/dashboard/changepassword" >
                                        <ul className='hover:bg-[#fff] hover:text-[#374151] p-2' >Change Password</ul>
                                    </Link>
                                    <Link to="/" >
                                        <ul className='hover:bg-[#fff] hover:text-[#374151] p-2 ' >Logout</ul>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />



        </>
    )
}

export default Dashboard