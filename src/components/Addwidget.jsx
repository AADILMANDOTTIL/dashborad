import React, { useContext, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import Widget from './widget';
import { StoreContext } from '../context/StoreContext';



function Addwidget() {
    const{setShowLogin2,handleChange,submit}=useContext(StoreContext)



    return (
        <>
            <div className='absolute z-[10] w-[100%] h-[100%] bg-[#00000090] grid'>
                <form className='login-popup-container md:w-[50%] md:h-[60%]' >
                    <div className='flex justify-between items-center text-2xl bg-black p-3'>
                        <h1 className='font-semibold text-[white] md:w-[100%] bg-black'>Add Widget</h1>
                        <RxCross2 onClick={() => setShowLogin2(false)} className='cursor-pointer w-[20px] text-[white] ' />
                    </div>
                    <div className='p-5 justify-center items-center flex flex-col'>
                        <input className='input border border-[black]' type="text" placeholder='Enter Widget Name ' name='name' onChange={handleChange} />
                        <input className='input border border-[black]' type="text" placeholder='Enter widget Text ' name='text' onChange={handleChange} />
                        <button className='btn' type="Submit" onClick={submit}  >Confrom</button>
                    </div>
                </form>
            </div>

        </>

    )
}

export default Addwidget
