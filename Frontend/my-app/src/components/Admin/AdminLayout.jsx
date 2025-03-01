import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { AdminSidebar } from './AdminSidebar';
import { Outlet } from 'react-router-dom';



export const AdminLayout = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleOpen = ()=>{
    setSidebarOpen(!sidebarOpen)
  }


  return (
    <div className='min-h-screen flex flex-col md:flex-row relative'>

      {/* mobile view */}
      <div className='flex gap-2 justify-center items-center md:hidden p-4 bg-gray-800 z-20 '>
        <button onClick={toggleOpen}>
        <IoMdMenu size={20}/>
        </button>
        <h2 className='text-sm font-medium'>Admin Dashboard</h2>
      </div>

      {/* overlay for mobile phone */}

      {sidebarOpen && (
        <div className='fixed inset-0 z-10 bg-white opacity-50 md:hidden'
        onClick={toggleOpen} > </div>
      )}

      {/* sidebar */}
        <div className={` bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform ${sidebarOpen ? "translate-x-0":"-translate-x-full"} transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}>
        <AdminSidebar />
        </div>

        {/* main content  */}

        <div className='flex-grow p-6 overflow-auto'>
          <Outlet />
        </div>
    </div>
  )
}
