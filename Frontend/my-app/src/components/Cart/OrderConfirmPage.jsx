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

    //delivery date in 10days
    const calculateEstimatedDelivery = (created)=>{
        const orderDate = new Date(created);
        orderDate.setDate(orderDate.getDate()+10);
        return orderDate.toLocaleDateString();
    }
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

                    <div>
                        <p className='text-sm md:text-lg text-gray-600 font-semibold'>Delivery Date: {calculateEstimatedDelivery(checkout.createdAt)}</p>
                    </div>
                </div>

                <div className='mb-10'>
                    {checkout.checkoutItems.map((curElem)=>{
                        return(
                            <div className='flex items-center mb-4'>
                                <img src={curElem.image} alt={curElem.name} className='w-16 h-16 object-cover rounded-md mr-4'/>
                                <div>
                                    <h4 className='text-black font-bold '>{curElem.name}</h4>
                                    <p className=' text-gray-800 text-sm  '>{curElem.color} | {curElem.size}</p>
                                </div>

                                <div className='ml-auto text-right'>
                                    <p className=' text-gray-800 text-md font-semibold '>${curElem.price}</p>
                                    <p className=' text-gray-800 text-sm '>Quantity: {curElem.quantity}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div>
                    {/* payment history  */}

                    <h2 className='text-black '>Payment:</h2>
                    <p className='text-black '>Address:</p>
                </div>

            </div>
        )}

    </div>
  )
}
