import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenuLeft } from "react-icons/cg";




export const Header = () => {
  const active =({isActive})=>{
    return{
        color: isActive?"#0000ff63" : "white"
        
}
}
  return (
   <nav className='flex justify-between items-center mx-4 md:mx-30'>
    {/* logo  */}
    <div>
        <img src="/images/logo.png" alt="logo" className='w-20 sm:w-30 lg:w-40'/>
    </div>

    {/* links */}

    <div className='hidden md:flex space-x-6'>
    <NavLink to="/" className="text-sm font-medium uppercase text-gray-200 hover:text-black" style={active}>Home</NavLink>
    <NavLink to="/products" className="text-sm font-medium uppercase text-gray-200 hover:text-black" style={active}>Products</NavLink>
    <NavLink to="/about" className="text-sm font-medium uppercase text-gray-200 hover:text-black" style={active}>About Us</NavLink>
    <NavLink to="/contact" className="text-sm font-medium uppercase text-gray-200 hover:text-black" style={active}>Contact us</NavLink>
    </div>

    {/* icons side */}

    <div className='flex space-x-4'>
      <NavLink to="/userprofile" >
      <FaRegUser className="h-5 w-5"/>
      </NavLink>

      <button className='relative'>
      <FiShoppingCart className="h-5 w-5"/>
      <span className='absolute -top-3 bg-red-600 text-white text-xs rounded-full px-2 py-0.5'>4</span>
      </button>

      {/* search */}


      <button>
      <CgMenuLeft className="h-5 w-5 md:hidden" />

      </button>
    </div>
    
   </nav>
  )
}
