import React, { useContext, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { StoreContext } from '../context/StoreContext';

function AddWidget() {
  const { setShowLogin2,showLogin2, submit, currentCategoryIndex ,handleSetShowLogin2} = useContext(StoreContext);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
console.log("status"+setShowLogin2);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && text.trim()) {
      submit(currentCategoryIndex, name, text);
      setName('');
      setText('');
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <div className='absolute z-[10] w-[100%] h-[100%] bg-[#00000090] grid'>
      <form className='login-popup-container md:w-[50%] md:h-[60%]' onSubmit={handleSubmit} aria-labelledby='add-widget-title'>
        <div className='flex justify-between items-center text-2xl bg-black p-3'>
          <h1 id='add-widget-title' className='font-semibold text-white md:w-[100%]'>Add Widget</h1>
          <RxCross2   onClick={() => setShowLogin2(false)}  className='cursor-pointer w-[20px] text-white' aria-label="Close" />
        </div>
        <div className='p-5 justify-center items-center flex flex-col'>
          <input
            className='input border border-black'
            type="text"
            placeholder='Enter Widget Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className='input border border-black'
            type="text"
            placeholder='Enter Widget Text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <button className='btn' type="submit">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddWidget;