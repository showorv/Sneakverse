import React, { useState } from 'react'

export const EditProduct = () => {

    const [products, setProducts] = useState({
        name:"",
        description:"",
        price:0,
        countStock:0,
        sizes:[],
        colors:[],
        catagory:"",
        brand:"",
        images:[
            {
                url: "https://picsum.photos/150?random=1"
            },
            {
                url: "https://picsum.photos/150?random=2"
            },
        ]
    })

    const handleChange = (e)=>{
        const {name,value} = e.target;

        setProducts((prevData)=> ({...prevData, [name]:value}))
    }

    const handleImageUpload = async (e)=>{
        const file = e.target.files[0];
        console.log(file);
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(products);
    }
  return (
    <div className='w-max-7xl mx-auto p-6 shadow-md shadow-white rounded-md'>
        <h2 className='text-lg md:text-2xl font-bold mb-6'>Edit Product</h2>

        <form onSubmit={handleSubmit}>
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>Product Name</label>
                <input type="text" name='name' value={products.name} onChange={handleChange}
                className='w-full border border-gray-700 rounded-md px-3 py-1'
                required />
            </div>
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>Description</label>
                <textarea name="description"   rows="5"
                value={products.description}
                className='w-full border border-gray-700 rounded-md px-3 py-1'
                required
                onChange={handleChange}
                ></textarea>
            </div>
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>Price</label>
                <input type="number" name='price' value={products.price} onChange={handleChange}
                className='w-full border border-gray-700 rounded-md px-3 py-1'
                required />
            </div>
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>In Stock</label>
                <input type="number" name='countStock' value={products.countStock} onChange={handleChange}
                className='w-full border border-gray-700 rounded-md px-3 py-1'
                required />
            </div>
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>Sizes (comma-separated)</label>
                <input type="text" name='sizes' value={products.sizes.join(",")} onChange={(e)=>{ setProducts({...products, sizes:e.target.value.split(",").map((size)=>size.trim())})}} //trim remove the extra spaces
                className='w-full border border-gray-700 rounded-md px-3 py-1'
                required />
            </div>
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>Colors (comma-separated)</label>
                <input type="text" name='colors' value={products.colors.join(",")} onChange={(e)=>{ setProducts({...products, colors:e.target.value.split(",").map((color)=>color.trim())})}} //trim remove the extra spaces
                className='w-full border border-gray-700 rounded-md px-3 py-1'
                required />
            </div>
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>Catagory</label>
                <input type="text" name='catagory' value={products.catagory} onChange={handleChange}
                className='w-full border border-gray-700 rounded-md px-3 py-1'
                required />
            </div>
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>Brand</label>
                <input type="text" name='brand' value={products.brand} onChange={handleChange}
                className='w-full border border-gray-700 rounded-md px-3 py-1'
                required />
            </div>

            {/* image upload */}
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>Image Upload</label>
                <input type="file" name='images' onChange={handleImageUpload}
                className='w-full border border-gray-700 rounded-md px-3 py-1'
                />
                <div className='flex gap-4 mt-4'>
                    {products.images.map((img,index)=>{
                        return(
                            <div key={index}>
                                <img src={img.url} alt={img.name}
                                className='w-20 h-20 object-cover rounded-md shadow-md '
                                />
                            </div>
                        )
                    })}

                </div>
            </div>

            <button type='submit' className='w-full bg-green-600 text-white py-1 px-4 rounded-md hover:bg-green-700 font-semibold transition-colors'>Update Product</button>

        </form>
    </div>
  )
}
