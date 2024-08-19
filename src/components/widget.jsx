import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { StoreContext } from '../context/StoreContext';

function widget() {
    const{DeleteWidget,filterValue,}=useContext(StoreContext)
    console.log(filterValue);
    


    return (
        <>
            <div className=' '>
                <div className='md:flex md:flex-wrap justify-start md:gap-5'> 
                    {
                        filterValue.map((data, index) => {
                            return (
                                <div key={index} className=' md:w-[430px] m-2  h-[250px] flex justify-between   gap-5 p-5     bg-white  rounded'>
                                    <div>
                                        <h1 className='font-semibold'>{data.name}</h1>
                                        <h1 className=''>{data.text}</h1>
                                    </div>

                                    <div>
                                        <MdDelete className='w-[40px] h-[30px]  cursor-pointer' onClick={() => (DeleteWidget(index))} />
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </>
    )
}

export default widget
