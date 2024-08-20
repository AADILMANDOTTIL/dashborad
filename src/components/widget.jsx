import React, { useContext } from 'react';
import { MdDelete } from "react-icons/md";
import { StoreContext } from '../context/StoreContext';

function Widget({ categoryIndex }) {
 
    
  const { DeleteWidget, Category,filterValue } = useContext(StoreContext);
//   console.log(Category);
  // console.log(Category);
  
  

  return (
    <div>
      <div className='md:flex md:flex-wrap justify-start md:gap-5'>
        {Category[categoryIndex]?.widgets?.map((data, widgetIndex) => (
          <div key={widgetIndex} className='md:w-[430px] m-2 h-[250px] flex justify-between gap-5 p-5 bg-white rounded'>
            <div>
              <h1 className='font-semibold'>{data.name}</h1>
              <h1>{data.text}</h1>
            </div>
            <div>
              <MdDelete 
                className='w-[40px] h-[30px] cursor-pointer' 
                onClick={() => DeleteWidget(categoryIndex, widgetIndex)} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Widget;