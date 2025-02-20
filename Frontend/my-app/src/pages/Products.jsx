import React, { useEffect, useRef, useState } from 'react'
import { IoFilter } from "react-icons/io5";
import { FilterSidebar } from '../components/Product/FilterSidebar';
import { Productgrid } from '../components/CommonFolder/Productgrid';
import { SortOptions } from '../components/Product/SortOptions';


export const Products = () => {

  const [products, setProducts] = useState([])
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSideBarOpen] = useState(false)

  const toggleOpen =()=>{
    setIsSideBarOpen(!isSidebarOpen);
  }

  // for close by click

  const handleClickOutside=(e)=>{
      //close sidebar if clicked Outside

      if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
        setIsSideBarOpen(false)
      }
  }

  useEffect(()=>{
      //add event listener for click
      document.addEventListener("mousedown", handleClickOutside)
      //remove event listener
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
  },[])

  useEffect(()=>{
      //for dummy data

      setTimeout(() => {
        
        const fetchedProduct = [
          {
            _id:1,
            name:"Product 1",
            price:"100",
            images:[{url:'https://picsum.photos/200?random=2'}]
            },
            {
            _id:2,
            name:"Product 1",
            price:"100",
            images:[{url:'https://picsum.photos/200?random=3'}]
            },
            {
            _id:3,
            name:"Product 1",
            price:"100",
            images:[{url:'https://picsum.photos/200?random=4'}]
            },
            {
            _id:3,
            name:"Product 1",
            price:"100",
            images:[{url:'https://picsum.photos/200?random=4'}]
            },
            {
            _id:3,
            name:"Product 1",
            price:"100",
            images:[{url:'https://picsum.photos/200?random=4'}]
            },
        ]
        setProducts(fetchedProduct)
      }, 1000);
  },[])
  return (
    <div className='flex flex-col lg:flex-row '>
      {/* for mobile filtering */}

      <button onClick={toggleOpen} className='lg:hidden flex justify-center items-center border my-3 py-1'>
      <IoFilter className='mr-2'/>
      <h2 className='text-md'>Filter</h2>
      </button>

      <div ref={sidebarRef}
        className={` ${isSidebarOpen ? "translate-x-0":"-translate-x-full"} fixed inset-y-0 bg-white left-0 w-64 z-50 overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
        <FilterSidebar />
      </div>

      <div className='flex-grow p-4'>
        <h2 className='text-xl uppercase font-bold md:text-2xl'>All Collection</h2>

        {/* sort option  */}
        <SortOptions />
        {/* products */}
        <div className='mr-2 sm:mr-3 md:mr-4 lg:mr-30'>

        <Productgrid products={products} />
        </div>
      </div>
    </div>
  )
}
