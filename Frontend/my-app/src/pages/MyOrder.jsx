import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const MyOrder = () => {
    const [order, setOrder] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {

            const dummyOrders = [
                {
                    _id: "12134",
                    createdAt: new Date(),
                    Address: {
                        city: "Dhaka",
                        country: "Bangladesh"
                    },
                    orderItems: [{
                        name: "Product1",
                        image: "https://picsum.photos/200?random=2"
                    }],
                    totalPrice: "100",
                    isPaid: true
                },
                {
                    _id: "1267",
                    createdAt: new Date(),
                    Address: {
                        city: "Dhaka",
                        country: "Bangladesh"
                    },
                    orderItems: [{
                        name: "Product1",
                        image: "https://picsum.photos/200?random=3"
                    }],
                    totalPrice: "100",
                    isPaid: false
                },
            ]

            setOrder(dummyOrders)

        }, 1000);
    }, [])

    const handleRowClick =(productID)=>{
            navigate(`/order/${productID}`)
    }

    return (
        <div className='max-w-7xl mx-auto p-4 sm:p-6'>
            <h2 className='text-xl sm:text-2xl font-bold mb-6'>My Orders</h2>
            <div className='relative shadow-md rounded-lg overflow-hidden'>
                <div className='overflow-x-auto'>
                    <table className='min-w-full text-left text-gray-200'>
                        <thead className='bg-gray-400 text-xs uppercase text-black'>
                            <tr>
                                <th className='py-2 px-4 sm:py-3'>Image</th>
                                <th className='py-2 px-4 sm:py-3'>Order Id</th>
                                <th className='py-2 px-4 sm:py-3'>Created</th>
                                <th className='py-2 px-4 sm:py-3'>Address</th>
                                <th className='py-2 px-4 sm:py-3'>Items</th>
                                <th className='py-2 px-4 sm:py-3'>Price</th>
                                <th className='py-2 px-4 sm:py-3'>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {order.length > 0 ? (
                                order.map((elem) => {
                                    return (
                                        <tr key={elem._id} className='border-b border-gray-700 cursor-pointer'
                                        onClick={()=> handleRowClick(elem._id)}
                                        >
                                            <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                                <img src={elem.orderItems[0].image} alt={elem.orderItems[0].name}
                                                    className='w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg' />
                                            </td>

                                            <td className='py-2 px-2 sm:py-4 sm:px-4 font-medium text-white whitespace-nowrap'>#{elem._id}</td>

                                            <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                                {new Date(elem.createdAt).toLocaleDateString()}{""}{new Date(elem.createdAt).toLocaleTimeString()}
                                            </td>

                                            <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                                {elem.Address ? `${elem.Address.city}, ${elem.Address.country}` : "N/A"}
                                            </td>

                                            <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                                {elem.orderItems.length}
                                            </td>

                                            <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                                {elem.totalPrice}
                                            </td>

                                            <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                                <span className={` ${elem.isPaid ? "bg-green-800 px-3 py-0.5 rounded-lg " : "bg-red-800 text-white px-3 py-0.5 rounded-lg"}`}>
                                                    {elem.isPaid ? "Paid" : "Pending"}
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td colSpan={7} className='py-4 px-4 text-center text-white'>
                                        No orders yet
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
