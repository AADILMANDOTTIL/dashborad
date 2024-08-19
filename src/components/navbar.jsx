import React, { useContext } from 'react'
import { CiSearch } from "react-icons/ci";
import './Task.css'
import { Outlet } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

function navbar() {
    const { onchange } = useContext(StoreContext)
    return (
        <>
            <div >
                <div className='md:flex md:justify-between md:pl-5 md:pr-48 md:items-center w-[100%]'>
                    <h1 className='text-xl'>Dashboard</h1>
                    <div className='relative md:w-[500px] h-[35px] '>
                        <div className='absolute top-0 w-[60px] h-[100%]  z-10 ' >
                            <CiSearch className='absolute top-[50%] left-[50%] tr font-bold text-[26px] text-[gray]' />
                        </div>
                        <input onChange={onchange} type="search" className='placeholder:text-[gray] w-[100%] h-[100%]  rounded-sm border border-[white] absolute top-0 left-0 pl-12 bg-[#bccefbc4]' placeholder="Search anything.." />
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default navbar
