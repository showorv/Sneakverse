import React, { useState } from 'react'
import { MdOutlineCancel } from "react-icons/md";

export const CartDrawer = ({drawerOpen, handleToggleDrawer}) => {

    // const [ drawerOpen , setDrawerOpen] = useState(false)

    // const handleToggleDrawer = ()=>{
    //     setDrawerOpen(!drawerOpen)
    // }

  return (
    <div className={` fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 
    ${drawerOpen ?" translate-x-0" :" translate-x-full" }`}>

        <div className='flex justify-end py-2 pr-4'>
        <button onClick={handleToggleDrawer}>
            <MdOutlineCancel className='h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer'/>

            </button>
        </div>
    </div>
  )
}
