import React from 'react'
import { Link } from 'react-router-dom'

export const AdminHome = () => {

    const orders = [
        {
            _id: 1234,
            user:{
                name:"Showrov",
            },
            totalPrice: 3000,
            status:"processing"
        },
        {
            _id: 1234,
            user:{
                name:"Showrov",
            },
            totalPrice: 3000,
            status:"processing"
        },
        {
            _id: 1234,
            user:{
                name:"Showrov",
            },
            totalPrice: 3000,
            status:"processing"
        },
    ]
  return (
    <div className='max-w-7xl mx-auto p-6'>
        <h1 className='text-xl font-bold md:text-3xl mb-6'>Admin Dashboard</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='p-4 shadow-md shadow-white rounded-lg'>
                <h2 className='text-xl font-semibold'>Revenue</h2>
                <p className='text-2xl'>$3000</p>
            </div>
            <div className='p-4 shadow-md shadow-white rounded-lg'>
                <h2 className='text-xl font-semibold'>Total Orders</h2>
                <p className='text-2xl'>2</p>
                <Link to="/admin/orders" className='text-blue-600 hover:underline '>Manage Orders</Link>
            </div>
            <div className='p-4 shadow-md shadow-white rounded-lg'>
                <h2 className='text-xl font-semibold'>Total Products</h2>
                <p className='text-2xl'>20</p>
                <Link to="/admin/products" className='text-blue-600 hover:underline '>Manage Products</Link>
            </div>
        </div>

        {/* table of order */}

        <div className='mt-6'>
            <h2 className='text-lg md:text-2xl font-bold mb-4'>Recent Orders</h2>
            <div className='overflow-x-auto'>
                <table className='min-w-full text-left text-gray-400'>
                    <thead className='bg-gray-200 text-xs uppercase text-gray-500 rounded-md'>
                                <tr>
                                    <th className='py-2 px-4'>Order ID</th>
                                    <th className='py-2 px-4'>User</th>
                                    <th className='py-2 px-4'>Total Price</th>
                                    <th className='py-2 px-4'>Status</th>
                                </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0?
                        (
                            orders.map((order)=>{
                                return(
                                    <tr key={order._id} className='border-b hover:bg-gray-50 cursor-pointer'>
                                        <td className='py-2 px-4'>{order._id}</td>
                                        <td className='py-2 px-4'>{order.user.name}</td>
                                        <td className='py-2 px-4'>${order.totalPrice}</td>
                                        <td className='py-2 px-4'>{order.status}</td>
                                    </tr>
                                )
                            })
                        ):
                        (
                            <tr>
                                <td colSpan={4} className='p-4 text-center text-gray-400'>No recent orders found</td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        </div>
        

    </div>
  )
}
