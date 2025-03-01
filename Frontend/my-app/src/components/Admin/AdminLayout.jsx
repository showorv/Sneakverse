import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";



export const AdminLayout = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleOpen = ()=>{
    setSidebarOpen(!sidebarOpen)
  }


  return (
    <div className='min-h-screen flex flex-col md:flex-row relative'>

      {/* mobile view */}
      <div className='flex gap-2 justify-center items-center md:hidden p-4 bg-gray-800 '>
        <button onClick={toggleOpen}>
        <IoMdMenu size={20}/>
        </button>
        <h2 className='text-sm font-medium'>Admin Dashboard</h2>
      


      </div>

    </div>
  )
}
