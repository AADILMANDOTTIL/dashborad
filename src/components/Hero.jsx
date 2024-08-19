import React, { useContext, useState } from 'react'
import { GoPlus } from "react-icons/go";
import { SlRefresh } from "react-icons/sl";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdAccessTimeFilled } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Widget from './widget';
import { StoreContext } from '../context/StoreContext';



function Hero() {
    const { Category, DeleteCategory, setShowLogin, setShowLogin2,DeleteWidget,filterValue } = useContext(StoreContext)
    // console.log(Task)
    return (
        <>
            <div className='bg-[#bccefbc4] w-full   h-auto'>
                {/* //CNAPP Dashboard AND ADD Widget SECTION//               */}
                <div className='md:flex md:justify-between md:items-center md:pl-5 md:pr-16 md:p-5 p-2'>
                    <div>
                        <h1 className='text-2xl'>CNAPP DASHBOARD</h1>
                    </div>
                    <div className='flex justify-between items-center  md:gap-5'>
                        {
                            <div onClick={() => setShowLogin(true)} className='w-[120px] flex items-center gap-2 md:w-[120px] h-[30px] bg-white p-2 rounded cursor-pointer'>
                                <h1 className='text-[12px]'>Add Category</h1>
                                <GoPlus />
                            </div>
                        }

                        <div className='w-[30px] h-[30px] bg-white p-2  flex items-center justify-center rounded cursor-pointer'>
                            <SlRefresh className='text-[20px] ' />
                        </div>
                        <div className='w-[30px] h-[30px] bg-white p-2  flex items-center justify-center rounded cursor-pointer'>
                            <HiOutlineDotsVertical />
                        </div>
                        <div className='flex items-center gap-2 w-[120px] md:w-[120px] h-[30px] border-[#6924ff] border bg-white rounded pl-1 cursor-pointer'>
                            <div >
                                <MdAccessTimeFilled />
                            </div>
                            <h1 className='text-[12px]'>Last 2 days</h1>
                            <MdKeyboardArrowDown />
                        </div>
                    </div>
                </div>
                <div className='p-10  '>
                    <div >
                        {
                            Category.map((data, index) => (
                                <>
                                    <div className='flex justify-between items-center'>

                                        <h1 className='p-2 text-[18px] font-semibold'> {data.items}</h1>
                                        <div className='flex justify-center items-center'>
                                            <div onClick={() => setShowLogin2(true)} className='w-[120px] flex justify-between items-center gap-2 md:w-[120px] h-[30px] bg-white p-2 rounded cursor-pointer'>
                                                <h1 className='text-[12px]'>Add Widget</h1>
                                                <GoPlus />
                                            </div>
                                            <MdDelete className='w-[120px] h-[40px]  cursor-pointer' onClick={() => (DeleteCategory(index))} />
                                        </div>
                                        
                                    </div>
                                    <Widget/>
                                </>

                            ))
                        }
                       
                    </div>

                </div>
            </div>

        </>
    )
}

export default Hero