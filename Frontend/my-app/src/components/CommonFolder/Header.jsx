import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenuLeft } from "react-icons/cg";
import { Search } from './Search';
import { CartDrawer } from './CartDrawer';
import { MdOutlineCancel } from 'react-icons/md';




export const Header = () => {
  

    const [ drawerOpen , setDrawerOpen] = useState(false)
    const [hambarOpen, setHambarOpen] = useState(false)

    const handleToggleDrawer = ()=>{
        setDrawerOpen(!drawerOpen)
    }


    const handleHambarOpen = ()=>{
      setHambarOpen(!hambarOpen);
    }

    const active =({isActive})=>{
      return{
          color: isActive?"#0000ff63" : "white"
          
      }
      }

  return (
    <header className='border-b border-gray-700'>

    
   <nav className='flex justify-between items-center mx-4  md:mx-30 py-2'>
    {/* logo  */}
    <div>
        <img src="/images/logo.png" alt="logo" className='w-20 sm:w-30  '/>
    </div>

    {/* links */}

    <div className='hidden md:flex space-x-6'>
    <NavLink to="/" className="text-sm font-medium uppercase playfair text-gray-200 hover:text-black" style={active}>Home</NavLink>
    <NavLink to="/products/all" className="text-sm font-medium uppercase playfair text-gray-200 hover:text-black" style={active}>Products</NavLink>
    <NavLink to="/about" className="text-sm font-medium uppercase playfair text-gray-200 hover:text-black" style={active}>About Us</NavLink>
    <NavLink to="/contact" className="text-sm font-medium uppercase playfair  hover:text-black" style={active}>Contact us</NavLink>
    </div>

    {/* icons side */}

    <div className='flex justify-center items-center space-x-4'>
      
      <div className='hidden md:block'>

      <NavLink to="/admin/adminhome" className="block bg-white text-black font-semibold text-sm py-1 px-3 rounded-full"
        style={active}  
        >Admin</NavLink>
      </div>
      <NavLink to="/userprofile" >
      <FaRegUser className="h-5 w-5"/>
      </NavLink>

      <button onClick={handleToggleDrawer} className='relative'>
      <FiShoppingCart className="h-5 w-5 cursor-pointer"/>
      <span className='absolute -top-3 bg-red-600 text-white text-xs rounded-full px-2 py-0.5'>4</span>
      </button>

      {/* search */}
    <Search />
    

      <button onClick={handleHambarOpen}>
      <CgMenuLeft className="h-5 w-5 md:hidden" />

      </button>
    </div>
   </nav>

      <CartDrawer drawerOpen={drawerOpen} handleToggleDrawer={handleToggleDrawer}/>

      {/* hambarOpen */}

      <div className={`fixed top-0 left-0  w-[15rem] sm:w-1/2 md:w-[32rem] h-full bg-gray-800 shadow-lg transform transition-transform duration-300 flex flex-col z-50 
    ${hambarOpen ?" translate-x-0" :" -translate-x-full"}`}>

        <div className='flex justify-end py-2 pr-4'>
          <button onClick={handleHambarOpen}>
            <MdOutlineCancel className='h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer'/>

            </button>
        </div>

        {/* links */}

      <div className='flex flex-col space-y-6 justify-center items-center mt-10'>
    <NavLink to="/" className="text-sm font-medium uppercase playfair text-gray-200 hover:text-black" style={active} onClick={handleHambarOpen}>Home</NavLink>
    <NavLink to="/products" className="text-sm font-medium uppercase playfair text-gray-200 hover:text-black" style={active} onClick={handleHambarOpen}>Products</NavLink>
    <NavLink to="/about" className="text-sm font-medium uppercase playfair text-gray-200 hover:text-black" style={active} onClick={handleHambarOpen}>About Us</NavLink>
    <NavLink to="/contact" className="text-sm font-medium uppercase playfair text-gray-200 hover:text-black" style={active} onClick={handleHambarOpen}>Contact us</NavLink>
    <NavLink to="/admin" className="block bg-white text-black font-semibold text-sm py-1 px-3 rounded-full"   
    style={active}
    onClick={handleHambarOpen}
    >Admin</NavLink>
      

   
    </div>

    </div>
   </header>
  )
}
