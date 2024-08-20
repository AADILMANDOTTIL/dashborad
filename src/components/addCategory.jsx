import React, { useContext, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { StoreContext } from '../context/StoreContext';

function AddCategory() { 
    const { addCategory, setShowLogin } = useContext(StoreContext);
    const [add, setAdd] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (add.trim()) {
            addCategory(add); 
            alert('Category added successfully');
            setAdd('');
            setShowLogin(false);
        } else {
            alert('Please enter a category name');
        }
    };

    return (
        <div className='absolute z-[10] w-[100%] h-[100%] bg-[#00000090] grid'>
            <form className='login-popup-container' onSubmit={handleSubmit}>
                <div className='flex justify-between items-center text-2xl bg-black p-3'>
                    <h1 className='font-semibold text-[white] w-[100%]'>Add Category</h1>
                    <RxCross2 onClick={() => setShowLogin(false)} className='cursor-pointer w-[20px]' aria-label="Close" />
                </div>
                <div className='p-5 justify-center items-center flex flex-col'>
                    <input
                        className='input border border-[black]'
                        type="text"
                        placeholder='Enter Category Name'
                        value={add}
                        onChange={(event) => setAdd(event.target.value)}
                        required
                    />
                    <button
                        className='btn'
                        type="submit"
                    >
                        Confirm
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddCategory;