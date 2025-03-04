import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { AiOutlineProduct } from "react-icons/ai";
import { CiBoxList } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaSignOutAlt } from "react-icons/fa";






export const AdminSidebar = () => {
    const navigate = useNavigate()
    const handleLogout = ()=>{
        navigate("/")
    }
  return (
    <div className='p-6'>
        <div className='mb-6'>
            <Link to="/admin" className='text-md md:text-2xl font-medium '>SneakVerse</Link>

        </div>
        <NavLink to="/admin/adminhome">

        <h2 className='text-md md:text-lg font-medium mb-6 text-center'>Admin Dashboard</h2>
        </NavLink>

        <nav className='flex flex-col space-y-2'>
            <NavLink to="/admin/users"
            className={({isactive})=> isactive?"bg-gray-700 text-white py-2 px-3 rounded flex items-center space-x-2":" text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-3 flex items-center space-x-2 rounded"}>
                <CiUser size={20} />
                <span>Users</span>

            </NavLink>
            <NavLink to="/admin/user"
            className={({isactive})=> isactive?"bg-gray-700 text-white py-2 px-3 rounded flex items-center space-x-2":" text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-3 flex items-center space-x-2 rounded"}>
                <AiOutlineProduct size={20}/>

                <span>Products</span>

            </NavLink>
            <NavLink to="/admin/user"
            className={({isactive})=> isactive?"bg-gray-700 text-white py-2 px-3 rounded flex items-center space-x-2":" text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-3 flex items-center space-x-2 rounded"}>
                <CiBoxList size={20}/>

                <span>Orders</span>

            </NavLink>
            <NavLink to="/admin/user"
            className={({isactive})=> isactive?"bg-gray-700 text-white py-2 px-3 rounded flex items-center space-x-2":" text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-3 flex items-center space-x-2 rounded"}>
                <CiShoppingCart size={20}/>
                      <span>Shop</span>

            </NavLink>

        </nav>

        <div className='mt-6'>
            <button onClick={handleLogout}
            className='bg-red-700 py-1 px-4 rounded text-center text-sm md:text-md flex items-center justify-center space-x-2'
            >
                <FaSignOutAlt size={15}/>
                   <span>Logout</span> 
            </button>
        </div>
    </div>
  )
}
