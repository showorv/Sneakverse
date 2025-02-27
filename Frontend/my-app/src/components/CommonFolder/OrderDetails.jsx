import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom"
export const OrderDetails = () => {
    const {id} = useParams();

    const [orderDetails, setOrderDetails] = useState(null)

    useEffect(()=>{
        const dummyOrder = {
            _id:id,
            createdAt: new Date(),
            ispaid: true,
            isDelivered: false,
            status:true,
            paymentMethod: "Bkash",
            Address: "ZIgatola,Dhanmondi",
            orderItems:[
                {
                    productId:"1",
                    name:"Nike Air",
                    price:3400,
                    quantity:1,
                    image:  "https://picsum.photos/200?random=1"

                },
                {
                    productId:"1",
                    name:"Nike Air",
                    price:3400,
                    quantity:1,
                    image:  "https://picsum.photos/200?random=1"

                },
                {
                    productId:"1",
                    name:"Nike Air",
                    price:400,
                    quantity:1,
                    image:  "https://picsum.photos/200?random=1"

                },
                {
                    productId:"1",
                    name:"Nike Air",
                    price:3400,
                    quantity:1,
                    image:  "https://picsum.photos/200?random=1"

                },
            ]

        }
        setOrderDetails(dummyOrder)
    },[id])
  return (
    <div className='max-w-7xl mx-auto p-4 sm:6'>
        <h2 className='text-2xl md:text-3xl font-bold mb-6'>Order Details</h2>
        {!orderDetails ? (<p>No order details found</p>):
        (
            <div className='p-4 sm:p-6 rounded-lg border border-gray-600'>
                {/* order info */}
                <div className='flex flex-col sm:flex-row justify-between mb-6'>
                    <div>
                        <h3 className=' font-semibold text-lg md:text-xl '>Order Id: {orderDetails._id}</h3>
                        <h3 className='text-gray-400'>{new Date(orderDetails.createdAt).toLocaleDateString()}</h3>
                    </div>
                    <div className='flex flex-col items-start sm:items-end mt-5 sm:mt-0'>
                        <span className={`${orderDetails.ispaid?"bg-green-700":"bg-red-700"} px-4 py-1 text-sm font-medium mb-2 rounded-md`}>{orderDetails.ispaid?"Approved":"Pending"}</span>
                        <span className={`${orderDetails.isDelivered?"bg-green-700":"bg-yellow-700"} px-4 py-1 text-sm font-medium mb-2 rounded-md`}>{orderDetails.ispaid?"Delivered":"Pending"}</span>
                    </div>

                </div>

                {/* payment and address  */}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'>
                    <div>
                        <h3 className='font-semibold'>Payment Info</h3>
                        <p>Payment Method:{orderDetails.paymentMethod}</p>
                        <p>status: {orderDetails.ispaid?"Paid":"Unpaid"}</p>
                    </div>

                    <div>
                        <h4 className='font-semibold'>Address</h4>
                        <p>{orderDetails.Address}</p>
                    </div>

                </div>

                {/* product list  */}

                <div className='overflow-x-auto'>
                    <h4 className='text-lg sm:text-2xl font-bold mb-4'>Products</h4>

                    <table className='min-w-full text-gray-600 mb-4'>
                    <thead className='bg-gray-100'>
                        <tr>
                            <th className='py-2 px-4 text-black text-sm font-semibold'>Name</th>
                            <th className='py-2 px-4 text-black text-sm font-semibold'>Price</th>
                            <th className='py-2 px-4 text-black text-sm font-semibold'>Quantity</th>
                            <th className='py-2 px-4 text-black text-sm font-semibold'>Total</th>
                        </tr>

                    </thead>

                    <tbody>
                        {
                            orderDetails.orderItems.map((items)=>{
                                return(
                                    <tr key={items.productId} className='border-b'>
                                        <td className='py-2 px-4 flex items-center justify-center gap-3'>
                                            <img src={items.image} alt={items.name} className='w-14 h-14 object-cover rounded-md'/>
                                        
                                        <Link to={`/product/${items.productId}`}
                                        className="text-blue-500 hover:underline"
                                    >
                                        {items.name}
                                        </Link>
                                        </td>
                                        <td className='py-2 px-4 text-white text-center'>{items.price}</td>
                                        <td className='py-2 px-4 text-white text-center'>{items.quantity}</td>
                                        <td className='py-2 px-4 text-white text-center'>{items.price * items.quantity}</td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    </table>
                    

                </div>

                <Link to="/myorder" className='bg-red-700 py-1 px-4 rounded-full'>Back to my orders</Link>
            </div>
        )}
    </div>
  )
}
