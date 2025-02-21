import React, { useState } from 'react';

const products = [
  {
    id: 101,
    name: 'Nike Air Max 270',
    price: 149.99,
    image: 'https://picsum.photos/200?random=1',
    sizes: 41,
    color: 'Black',
    type: 'preorder' // Change to 'collection' for testing collection type
  },
  {
    id: 102,
    name: 'Nike Air Max 270',
    price: 149.99,
    image: 'https://picsum.photos/200?random=1',
    sizes: 41,
    color: 'Black',
    type: 'collection' // Change to 'collection' for testing collection type
  },
];

export const CheckoutPage = () => {
  const [userDetails, setUserDetails] = useState({
    firstname: '',
    lastname: '',
    contactNo: '',
    city: '',
    address: ''
  });
  
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('full');

  const handleDetails = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
    if (name === 'city') {
      setDeliveryCharge(value.toLowerCase() === 'dhaka' ? 60 : 120);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDetails(true);
  };

  // Calculate pre-order total (20% for preorder items)
  const preOrderTotal = products.reduce((total, product) => 
    product.type === 'preorder' ? total + (product.price * 0.2) : total, 0);

  // Calculate collection total (full price for collection items)
  const collectionTotal = products.reduce((total, product) => 
    product.type === 'collection' ? total + product.price : total, 0);

  // Calculate the remaining due for pre-order products (80% remaining for pre-order)
  const preOrderDue = products.reduce((total, product) => 
    product.type === 'preorder' ? total + (product.price * 0.8) : total, 0);

  // Calculate the full due for collection products (full price for collection)
  const collectionDue = products.reduce((total, product) => 
    product.type === 'collection' ? total + product.price : total, 0);

  let totalPayable = 0;
  
  if (paymentMethod === 'cod') {
    // Only include preorder total for COD (20% upfront)
    totalPayable = preOrderTotal + collectionTotal + deliveryCharge;
  } else if (paymentMethod === 'full') {
    // Include both preorder (full 100% amount) and collection totals for full payment
    totalPayable = preOrderTotal + collectionTotal + deliveryCharge;
  }

  // Calculate overall due based on the payment method
  let overallDue = 0;
  if (paymentMethod === 'cod') {
    overallDue = preOrderDue + collectionDue; // COD will include pre-order remaining 80% and collection full amount
  } else if (paymentMethod === 'full') {
    overallDue = preOrderDue + 0; // Full payment for pre-order means no due
    // No due for collection if full payment is made
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-8 px-6 tracking-tighter'>
      {/* Left side */}
      <div className='bg-gray-800 rounded-lg p-6'>
        <h2 className='text-xl md:text-2xl uppercase mb-6 font-bold'>Checkout</h2>
        
        {!showDetails ? (
          <form onSubmit={handleSubmit}>
            <h3 className='text-lg mb-2'>Contact Details</h3>
            <div className='mb-4'>
              <label className='block text-gray-300'>Email</label>
              <input type='email' value='hello@gmail.com' disabled className='w-full py-1 px-2 border rounded' />
            </div>
            
            <h3 className='text-sm md:text-lg mb-4'>Delivery Information</h3>
            <div className='mb-2 grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <div>
                <label className='block mb-1'>First name</label>
                <input type='text' name='firstname' required value={userDetails.firstname} onChange={handleDetails} className='w-full py-1 px-2 border rounded' />
              </div>
              <div>
                <label className='block mb-1'>Last name</label>
                <input type='text' name='lastname' required value={userDetails.lastname} onChange={handleDetails} className='w-full py-1 px-2 border rounded' />
              </div>
            </div>
            <div className='mb-2 grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <div>
                <label className='block mb-1'>Contact No:</label>
                <input type='text' name='contactNo' required value={userDetails.contactNo} onChange={handleDetails} className='w-full py-1 px-2 border rounded' />
              </div>
              <div>
                <label className='block mb-1'>City</label>
                <select name='city' value={userDetails.city} onChange={handleDetails} required className='border px-2 py-1 rounded-md bg-gray-800 focus:outline-none'>
                  <option value=''>Select Your City</option>
                  <option value='Dhaka'>Dhaka</option>
                  <option value='Chittagong'>Chittagong</option>
                  <option value='Cumilla'>Cumilla</option>
                  <option value='Other'>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className='block mb-1'>Address</label>
              <input type='text' name='address' required value={userDetails.address} onChange={handleDetails} className='w-full py-1 px-2 border rounded' />
            </div>
            <button type='submit' className='mt-4 bg-blue-500 text-white py-2 px-4 rounded'>Save Address</button>
          </form>
        ) : (
          <div className='p-4 bg-gray-900 text-white rounded'>
            <h3 className='text-lg font-bold mb-2'>Saved Address</h3>
            <p><strong>Name:</strong> {userDetails.firstname} {userDetails.lastname}</p>
            <p><strong>Contact:</strong> {userDetails.contactNo}</p>
            <p><strong>City:</strong> {userDetails.city}</p>
            <p><strong>Address:</strong> {userDetails.address}</p>
            <p><strong>Delivery Charge:</strong> {deliveryCharge} TK</p>
          </div>
        )}
      </div>

      {/* Right side */}
      <div className='bg-gray-900 rounded-lg p-6'>
        <h2 className='text-xl md:text-2xl uppercase mb-6 font-bold'>Order Summary</h2>
        {products.map((product) => (
          <div key={product.id} className='flex items-center mb-4'>
            <img src={product.image} alt={product.name} className='w-16 h-16 rounded mr-4' />
            <div>
              <p className='text-white'>{product.name}</p>
              <p className='text-gray-400'>Size: {product.sizes}, Color: {product.color}</p>
              <p className='text-white'>${product.price}</p>
            </div>
          </div>
        ))}
        
        <div>
          
          <p className='text-white'>Non Pre-Order: ${collectionTotal.toFixed(2)}</p>
           <p className='text-white'>Pre-Order Amount (20%): ${preOrderTotal.toFixed(2)}</p>
           <p>Delivery Charge: ${deliveryCharge}</p>
         
          <div>
            <button value="cod" onClick={(e) => setPaymentMethod(e.target.value)}
              className='bg-red-700 text-white px-3 py-1 rounded-md'>Cash On Delivery</button>

            <button value="full" onClick={(e) => setPaymentMethod(e.target.value)}
              className='bg-red-700 text-white px-3 py-1 rounded-md'>Full payment</button>
          </div>

          {paymentMethod && <p className='text-white mt-4'>Total Payable: ${totalPayable.toFixed(2)}</p>}

          {overallDue > 0 && <p className='text-white mt-4'>Overall Due: ${overallDue.toFixed(2)}</p>}

        </div>
        <button className={`mt-4 py-2 px-4 rounded w-full bg-green-500 text-white`} disabled={!showDetails}>Proceed to Payment</button>
      </div>
    </div>
  );
};
