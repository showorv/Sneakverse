import React from 'react'

export const OrderManage = () => {

    const orders = [
        {
            _id:123,
            user:{
                name:"Showrov"
            },
            totalPrice: 3000,
            status:"Processing"
        },
    ]

    const handleStatusChange = (orderId, status)=>{
        console.log(orderId,status);
    }
  return (
    <div className='max-w-7xl mx-auto p-6'>
        <h2 className='text-lg md:text-2xl font-bold mb-6'>Order Management</h2>

        <div className='overflow-x-auto shadow-md shadow-white sm:rounded-md'>

        <table className='min-w-full text-left text-gray-200'>
            <thead className='bg-gray-500 text-white text-xs uppercase'>
                <tr>
                    <th className='py-2 px-4'>Order Id</th>
                    <th className='py-2 px-4'>Customer Name</th>
                    <th className='py-2 px-4'>Total Price</th>
                    <th className='py-2 px-4'>Status</th>
                    <th className='py-2 px-4'>Action</th>
                </tr>
      
            </thead>

            <tbody>
                {orders.length > 0?(
                    orders.map((order)=>{
                        return(
                            <tr key={order._id}
                            className='border-b border-gray-200 hover:bg-gray-400 cursor-pointer'>
                                <td className='py-3 px-4 font-medium text-gray-200 whitespace-nowrap'>
                                    #{order._id}
                                </td>
                                <td className='py-3 px-4'>{order.user.name}</td>
                                <td className='py-3 px-4'>{order.totalPrice}</td>
                                <td className='py-3 px-4'>
                                    <select value={order.status}
                                    onChange={(e)=> handleStatusChange(order._id, e.target.value)}
                                    className='bg-gray-300 border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-b-sky-500 block py-1 px-3'>

                                        <option value="processing">Processing</option>
                                        <option value="delivered">Delivered</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </td>
                                <td className='py-3 px-4'>
                                    <button onClick={()=> handleStatusChange(order._id, "Delivered")}
                                    className='bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 transition-colors cursor-pointer whitespace-nowrap text-sm sm:text-sm'
                                    >Mark as Delivered</button>

                                </td>
                            </tr>
                        )
                    })
                ):(
                    <tr>
                        <td colSpan={5} className='py-3 px-4 text-white'>No orders avaiable</td>
                    </tr>
                )}
            </tbody>
        </table>
        </div>
    </div>
  )
}
