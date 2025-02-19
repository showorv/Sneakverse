import React from 'react'
import { Link } from 'react-router-dom'

export const Productgrid = ({products}) => {


  return (
    <div className='grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
        {products.map((curElem, index)=>{
            return(
                <Link key={index} to={`/productDetails/${curElem._id}`} className='block'>
                    <div className='bg-white p-2 rounded-lg'>
                        <div className='w-full md:h-80 mb-4'>
                            <img src={curElem.images[0].url} alt={curElem.images[0].altText} 
                            className='h-50 w-50 md:h-full md:w-full object-cover rounded-lg '/>
                        </div>

                        <h3 className='text-black font-medium text-md'>{curElem.name}</h3>
                        <h3 className='text-black font-light text-md'>{curElem.price && `$${curElem.price}`}</h3>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}
