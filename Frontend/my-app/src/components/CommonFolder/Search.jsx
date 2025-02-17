import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";



export const Search = () => {

    const [search, setSearch] = useState()
    const [ isOpen, setIsOpen] = useState(false)

    const handleSearchToggle =()=>{
        setIsOpen(!isOpen)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("search item", search);

        setIsOpen(false)
    }

  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"}`}>
        {isOpen ? 
        ( <form onSubmit={handleSubmit}
        className='relative flex items-center justify-center w-full'>
            <div className='relative w-1/2'>
                <input type="text" placeholder='Search Products' value={search}  onChange={(e)=> setSearch(e.target.value)} 
                className=' bg-gray-200 pl-3 pr-12 py-2 rounded-lg focus:outline-none text-gray-700 w-full ' />

                <button type='submit' className='absolute right-2 top-1/2 transform -translate-y-1/2 hover:text-gray-800'>
                  <IoIosSearch className='h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer'/>
            </button>
            </div>

            <button  className='absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 hover:text-gray-800 '>
            <MdOutlineCancel className='h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer'/>

            </button>
            
        </form>) : 
        ( <button onClick={ handleSearchToggle}><IoIosSearch className='h-6 w-6 cursor-pointer'/>
</button>)}
    </div>
  )
}
