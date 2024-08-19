import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { StoreContext } from '../context/StoreContext';

function addCategory() {
    const {addCategory,setShowLogin}=useContext(StoreContext)
    const [add, setAdd] = useState()
    const Submit = (e) => {
        e.preventDefault()
        alert("task added successfully",addCategory(add))
        setAdd('')
    }
    return (
        <>
    
            <div className='absolute z-[10] w-[100%] h-[100%] bg-[#00000090] grid'>
                <form className='login-popup-container'>
                    <div className='flex justify-between items-center text-2xl  bg-black p-3'>
                    <h1 className='font-semibold text-[white] w-[100%] bg-black'>Add Category</h1>
                    <RxCross2 onClick={() => setShowLogin(false)} className='cursor-pointer w-[20px]' />
                    </div> 
                        <div className='p-5 justify-center items-center flex flex-col'>
                            <input className='input border border-[black]' type="text" placeholder='Enter Category Name ' value={add} required onChange={(event) => setAdd(event.target.value)} />
                            <button className='btn' type="Submit" onClick={Submit}  >Confrom</button>
                        </div>
                </form>
            </div>
        </>
    )
}

export default addCategory
