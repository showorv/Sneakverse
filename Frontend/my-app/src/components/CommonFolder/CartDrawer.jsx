import React, { useState } from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { CartContents } from '../Cart/CartContents';

export const CartDrawer = ({drawerOpen, handleToggleDrawer}) => {

    // const [ drawerOpen , setDrawerOpen] = useState(false)

    // const handleToggleDrawer = ()=>{
    //     setDrawerOpen(!drawerOpen)
    // }

  return (
    <div className={` fixed top-0 right-0 w-[20rem] sm:w-1/2 md:w-[32rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 
    ${drawerOpen ?" translate-x-0" :" translate-x-full" }`}>

        <div className='flex justify-end py-2 pr-4'>
        <button onClick={handleToggleDrawer}>
            <MdOutlineCancel className='h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer'/>

            </button>
        </div>

        {/* cart contents */}

        <div className='flex-grow px-4 overflow-y-auto'>
          <h2 className='text-black font-semibold text-md mb-4 md:text-2xl '>Your Cart</h2>

          {/* cart contents box  */}
          <CartContents />
        </div>


        {/* button  */}

        <div className='p-4 bg-white sticky '>
          <button className='w-full bg-black text-white rounded-lg py-1 font-bold text-sm hover:bg-gray-800 cursor-pointer md:text-lg md:py-2 '>Checkout</button>
          <p className='text-black tracking-tighter my-2 text-xs  text-center font-light md:text-[1rem]'>Shipping, Taxes , Cupon codes calculated in checkout</p>
        </div>
    </div>
  )
}
