import React from 'react'
import { Link } from 'react-router-dom'

export const ProductManege = () => {

    const products = [
        {
            _id:1243,
            name:"Nike air 43",
            price:3500,
            size:"40,41,43"
        }
    ]
    const  handleDeleteproduct=(productId)=>{
        if(window.confirm("Are you sure to delete this user?")){
            console.log("user delete ",productId);
        }

    }
  return (
    <div className='max-w-7xl mx-auto p-6'>
        <h2 className='text-lg md:text-2xl font-bold mb-6'>Product Mangement</h2>
        <div className='overflow-x-auto shadow-md shadow-white sm:rounded '>
            <table className='min-w-full text-left text-gray-200'>
                <thead className='bg-gray-600 text-xs uppercase text-gray-200'>
                    <tr>
                        <th className='py-2 px-4'>Name</th>
                        <th className='py-2 px-4'>Price</th>
                        <th className='py-2 px-4'>Size</th>
                        <th className='py-2 px-4'>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products.length>0?
                    (
                        products.map((product)=>{
                            return(
                                <tr key={product._id}
                                className='border-b hover:bg-gray-400 cursor-pointer'>
                                    <td className='py-2 px-4 font-medium text-gray-200 whitespace-nowrap'>{product.name}</td>
                                    <td className='py-2 px-4'>${product.price}</td>
                                    <td className='py-2 px-4'>{product.size}</td>
                                    <td className='py-2 px-4'>
                                        <Link to={`/admin/products/${product._id}/edit`}
                                        className="bg-yellow-500 text-white px-3  rounded hover:bg-yellow-600 mr-2"
                                        >Edit</Link>
                                        <button onClick={()=> handleDeleteproduct(product._id)} 
                                    className='bg-red-600 text-white px-3 rounded hover:bg-red-700 cursor-pointer'>Delete</button>
                                    </td>
                                    
                                </tr>
                            )
                        })
                    ):(
                        <tr>
                            <td colSpan={4} className='p-2 text-center text-gray-200'>No products avaiable</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    </div>
  )
}
