import React from 'react'
const checkout={
    _id:"123",
    createdAt: new Date(),
    checkoutItems:[
        {
            productId:"1",
            name:"Nike Air",
            color:"Black",
            size:"41",
            price:149,
            quantity:1,
            image:'https://picsum.photos/200?random=1'
        },
        {
            productId:"1",
            name:"Nike Air",
            color:"Black",
            size:"41",
            price:149,
            quantity:1,
            image:'https://picsum.photos/200?random=1'
        },
    ],
    Address:{
        Name:"Showrov",
        city:"Dhaka",
        address:"dhanmondi,zigatola",

    }
}
export const OrderConfirmPage = () => {
  return (
    <div className='max-w-4xl mx-auto p-8 bg-white my-8 '>
        <h1 className='text-2xl lg:text-4xl text-emerald-700 font-bold text-center mb-8'>Thank you for your order</h1>

        {checkout && (
            <div className='p-6 rounded-lg border'>
                <div className='flex justify-between mb-20'>

                    {/* order and date */}
                    <div className=' font-semibold text-black'>
                        <h2 className='text-sm lg:text-xl'>Order Id: {checkout._id}</h2>
                        <p className='text-gray-700 text-xs lg:text-md'>Order Date: {new Date (checkout.createdAt).toLocaleDateString()}</p>
                    </div>
                </div>

            </div>
        )}

    </div>
  )
}
