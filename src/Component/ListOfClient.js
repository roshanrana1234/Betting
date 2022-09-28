import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { Link, Outlet } from 'react-router-dom'
import data from '../Data/data.json'
import { MdArrowCircleDown } from "react-icons/md";
import PopupLenaDena from '../PopupPage.js/PopupLenaDena';
import PopupDeposite from '../PopupPage.js/PopupDeposite';
import PopupWithDrawal from '../PopupPage.js/PopupWithDrawal';
import PopUpChangePassword from '../PopupPage.js/PopUpChangePassword';
import PopupViewDetail from '../PopupPage.js/PopupViewDetail';
import PopUpKhataBook from '../PopupPage.js/PopUpKhataBook';
import PopupAC from '../PopupPage.js/PopupAC';


const ListOfClient = () => {
    const [open, setopen] = useState(false)
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState([])

    // Popus
    const [lenaDena, setLenaDena] = useState(false)
    const [deposite, setDeposite] = useState(false)
    const [withdrawal, setWithdrawal] = useState(false)
    const [changepassword, setChangepassword] = useState(false)
    const [viewDetail, setViewDetail] = useState(false)
    const [khataview, setKhataView] = useState(false)
    const [AC, setAC] = useState(false)

    const handleOnClose = () => setLenaDena(false)
    const handleOnCloseDeposite = () => setDeposite(false)
    const handleOnClosewithDrawal = () => setWithdrawal(false)
    const handleOnChangePassword = () => setChangepassword(false)
    const handleOnViewDetail = () => setViewDetail(false)
    const handleOnKhata = () => setKhataView(false)
    const handleOnAC = () => setAC(false)

    useEffect(() => {

    }, [search])

    const columns = [
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold' > User Name</div>,
            selector: (row) => row.userName,
        },
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold'  > Loginid</div>,
            selector: (row) => row.loginid,
        },
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold ' > Credit Reference</div>,
            selector: (row) => row.credit,
        },
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold' > Balance</div>,
            selector: (row) => row.balance,
        },
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold' >  LenaDena (P/L)</div>,
            selector: (row) => row.lenaDena,
        },
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold' > Exposure</div>,
            selector: (row) => <div className='text-white bg-gray-800 p-2 font-bold text-xl' >{row.Exposure}</div>,
        },
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold' > Avilable</div>,
            selector: (row) => row.Avilable,
        },
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold' >  Down Level Occupy Balance</div>,
            selector: (row) => row.Down,
        },
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold' > ExposerLimit</div>,
            selector: (row) => row.Exposurelimit,
        },
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold' > Sport%</div>,
            selector: (row) => row.sport,
        },
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold' >   Casino%</div>,
            selector: (row) => row.casino,
        },
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold' >   Accounttype</div>,
            selector: (row) => row.accounttype,
        },
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold' >  Account-container</div>,
            selector: (row) => row.accountcontainer
        }
    ]

    const columns1 = [
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold' > User Name</div>,
            selector: (row) => row.userName,
        },
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold'  > Loginid</div>,
            selector: (row) => row.loginid,
        },
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold ' > Credit Reference</div>,
            selector: (row) => row.credit,
        },
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold' > Balance</div>,
            selector: (row) => row.balance,
        },
        {
            name: <button className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold cursor-pointer ' >  LenaDena (P/L)</button>,
            cell: (row) => <button onClick={() => setLenaDena(true)} className='text-white bg-green-500 rounded-md p-2' >{row.lenaDena}</button>,
        },
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold' > Exposure</div>,
            selector: (row) => <div className='text-white bg-gray-800 p-2 font-bold text-xl' >{row.Exposure}</div>,
        },
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold' > Avilable</div>,
            selector: (row) => row.Avilable,
        },
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold' >  Down Level Occupy Balance</div>,
            selector: (row) => row.Down,
        },
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold' > ExposerLimit</div>,
            selector: (row) => row.Exposurelimit,
        },
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold' > Sport%</div>,
            selector: (row) => row.sport,
        },
        {
            name: <div className='text-white bg-[#474747] w-full h-full flex justify-center items-center text-bold' >   Casino%</div>,
            selector: (row) => row.casino,
        },
        {
            name: <div className='text-white bg-[#474747] w-full  h-full flex justify-center items-center text-bold' >   Accounttype</div>,
            selector: (row) => row.accounttype,
        },
        {
            name: <div className='text-white bg-[#474747]  h-full flex justify-center items-center text-bold' >  Account-container</div>,
            cell: (row) => <div className='flex flex-col gap-1 p-2' >
                <div className='flex gap-3' >
                    <button onClick={() => setDeposite(true)} className='text-white rounded-md bg-green-600 p-2 text-lg font-bold' >D</button>
                    <button onClick={() => setWithdrawal(true)} className='text-white rounded-md bg-red-600 p-2 text-lg font-bold' >W</button>
                    <button onClick={() => setChangepassword(true)} className='text-white rounded-md bg-gray-600 p-2 text-lg font-bold' >P</button>
                    <button onClick={() => setViewDetail(true)} className='text-white rounded-md bg-gray-600 p-2 text-lg font-bold' >V</button>
                </div>
                <div className='flex gap-3' >
                    <button className='text-white rounded-md bg-gray-600 p-2 text-lg font-bold w-[150px] ' >A/L</button>
                    <button onClick={() => setKhataView(true)} className='text-white rounded-md bg-gray-600 p-2 text-lg font-bold' >K</button>
                    <button className='text-white rounded-md bg-green-600 p-2 text-lg font-bold w-full' >LCB/L</button>
                    <button className='text-white rounded-md bg-green-600 p-2 text-lg font-bold w-full' >VCB/L</button>
                </div>
                <div className='flex gap-3' >
                    <button onClick={() => setAC(true)} className='text-white rounded-md bg-red-600 p-2 text-lg font-bold' >A/C</button>

                </div>
            </div>
        }
    ]

    return (
        <>

            <div>
                {/* This is Open one */}
                <div className='w-full h-14 bg-[#0088CC] flex justify-center items-center' >
                    <div
                        onClick={() => setopen(!open)}
                    >
                        <MdArrowCircleDown className={`text-white text-2xl font-bold ${open ? "rotate-[180deg]" : "null"} duration-300`} />
                    </div>
                </div>

                <div className={` h-40 bg-[#0088CC] grid lg:grid-cols-3 text-white p-3 ${!open ? "hidden" : "block"} gap-5 z-10 text-sm overflow-auto `} >

                    <div className='text-white' >
                        <div className='flex flex-col gap-3' >
                            <div className='flex justify-between' >
                                <div>Upper Level Credit Reference:</div>
                                <div>199890</div>
                            </div>
                            <div className='flex justify-between' >
                                <div>Total Master Balance:</div>
                                <div>19980.7</div>
                            </div>
                            <div className='flex justify-between' >
                                <div>Avilable Balance with Profit/Loss</div>
                                <div>9890</div>
                            </div>
                        </div>
                    </div>

                    <div className='text-white' >
                        <div className='flex flex-col gap-3' >
                            <div className='flex justify-between' >
                                <div>Upper Level Credit Reference:</div>
                                <div>199890</div>
                            </div>
                            <div className='flex justify-between' >
                                <div>Total Master Balance:</div>
                                <div>19980.7</div>
                            </div>
                            <div className='flex justify-between' >
                                <div>Avilable Balance with Profit/Loss</div>
                                <div>9890</div>
                            </div>
                        </div>
                    </div>

                    <div className='text-white' >
                        <div className='flex flex-col gap-3' >
                            <div className='flex justify-between' >
                                <div>Upper Level Credit Reference:</div>
                                <div>199890</div>
                            </div>
                            <div className='flex justify-between' >
                                <div>Total Master Balance:</div>
                                <div>19980.7</div>
                            </div>
                            <div className='flex justify-between' >
                                <div>Avilable Balance with Profit/Loss</div>
                                <div>9890</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex justify-between p-3 font-bold text-xl items-center' >
                <div className='' >
                    Master List
                </div>
                <button
                    className='text-white text-sm p-3 bg-gray-700 font-bold'
                >
                    <Link to="/dashboard/addaccount" >
                        Add Account
                    </Link>
                </button>
            </div>
            <div className='border border-gray-600 p-1 ' >
                <DataTable
                    // title=" Naster List"
                    columns={columns}
                    data={data}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight='300px'
                    highlightOnHover
                    subHeader
                    subHeaderComponent={<input value={search} onChange={(e) => setSearch(e.target.value)} className='text-black border p-2 m-2' type="text" placeholder='Search here...' />}

                />
            </div>

            <div>
                <div className='flex justify-between p-3 font-bold text-xl items-center' >
                    <div className='' >
                        Client List
                    </div>
                </div>

                <div className='border border-gray-600 p-1 ' >
                    <DataTable
                        // title=" Naster List"
                        // disabled
                        // dense={true}
                        minWidth="yes"
                        flex-grow
                        compact
                        columns={columns1}
                        data={data}
                        pagination
                        fixedHeader
                        // fixedHeaderScrollHeight='300px'
                        highlightOnHover
                        subHeader
                        subHeaderComponent={<input value={search} onChange={(e) => setSearch(e.target.value)} className='text-black border p-2 m-2' type="text" placeholder='Search here...' />}

                    />
                </div>
            </div>
            <div className='z-10 absolute' >
                <PopupLenaDena onClose={handleOnClose} visible={lenaDena} />
            </div>
            <div className='z-10 absolute' >
                <PopupDeposite onClose={handleOnCloseDeposite} visible={deposite} />
            </div>
            <div className='z-10 absolute' >
                <PopupWithDrawal onClose={handleOnClosewithDrawal} visible={withdrawal} />
            </div>
            <div className='z-10 absolute' >
                <PopUpChangePassword onClose={handleOnChangePassword} visible={changepassword} />
            </div>
            <div className='z-10 absolute' >
                <PopupViewDetail onClose={handleOnViewDetail} visible={viewDetail} />
            </div>
            <div className='z-10 absolute' >
                <PopUpKhataBook onClose={handleOnKhata} visible={khataview} />
            </div>
            <div className='z-10 absolute' >
                <PopupAC onClose={handleOnAC} visible={AC} />
            </div>

        </>
    )
}

export default ListOfClient