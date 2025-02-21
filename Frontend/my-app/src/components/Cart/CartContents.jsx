import React from 'react'

import { RiDeleteBin5Line } from "react-icons/ri";


export const CartContents = () => {

    const cartcomponents =  [
        {
          id: 1,
          name: "Wireless Bluetooth Headphones",
          price: 59.99,
          quantity: 2,
          image: "https://picsum.photos/200?random=1",
          size: "41",
          type: 'collection'
        },
        {
          id: 2,
          name: "Smartwatch Series 5",
          price: 199.99,
          quantity: 1,
          image: "https://picsum.photos/200?random=1",
          size: "41",
          type: 'preorder'
        },
        {
          id: 3,
          name: "Laptop Backpack",
          price: 29.99,
          quantity: 1,
          image: "https://picsum.photos/200?random=1",
          size: "41",
          type: 'preorder'
        },
        {
          id: 4,
          name: "Gaming Mouse",
          price: 49.99,
          quantity: 1,
          image: "https://picsum.photos/200?random=1",
          size: "41",
          type: 'preorder'
        },
      ];

   
  return (
    <div>
        {cartcomponents.map((curElem, index)=>{
            return(
                <div key={index} 
                className='flex items-center justify-between py-4 border-b border-gray-700'
                >

                    <div className='flex justify-start'>
                        <img src={curElem.image} alt={curElem.name} 
                        className='w-20 h-24 object-cover mr-4 rounded-lg '
                        />
                    
                       <div className='flex flex-col gap-1'>
                        <h3 className='text-black font-bold text-xs md:text-lg'>{curElem.name}</h3>
                        <p className='text-gray-800 text-xs'> 
                            size: {curElem.size} 
                        </p>

                        <div className="flex items-center space-x-2">
                            <button className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-md text-lg font-bold text-gray-700 hover:bg-gray-700 hover:text-white transition">
                                -
                            </button>
                            <span className="text-md font-medium text-gray-800">{curElem.quantity}</span>
                            <button className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-md text-lg font-bold text-gray-700 hover:bg-gray-700 hover:text-white transition">
                                +
                            </button>
                            </div>

                       </div>

                    </div>

                    <div>
                    <p className='text-black text-md font-light'>Type: {curElem.type === 'preorder' ? 'Pre-Order' : 'Collection'}</p>
                        <p className='text-black font-medium'>$ {curElem.price.toLocaleString()}</p>
                        <button>
                        <RiDeleteBin5Line className='h-6 w-5 text-red-400 hover:text-gray-800 cursor-pointer'/>

                        </button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
