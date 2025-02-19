import React from 'react'


//dummy data 

const selectedProduct = {
    name:"Jordan",
    price:"120",
    originalPrice:"150",
    description:"this is a stylish shoe",
    brand:"Jordan Air",
    sizes:["S","M","L","XL"],
    colors:["Red","Black"],
    images:[
        {
            url:"https://picsum.photos/200?random=1",
            altText:"Air"
        },
        {
            url:"https://picsum.photos/200?random=2",
            altText:"Air"
        },
    ]
}

export const ProductDetails = () => {

  return (

    <div className='p-10'>
        <div className='max-w-6xl mx-auto bg-gray-800 p-8 rounded-lg'>
            {/* left side */}
            <div className='flex flex-col md:flex-row'>

                {/* left thumbail */}
                <div className='hidden md:flex flex-col space-y-1 mr-4'>
                        {selectedProduct.images.map((image,index)=>{
                            return(
                                <img key={index} 
                                src={image.url} 
                                alt={image.altText || `Thumbail ${index}`}
                                className='w-20 h-20 object-cover rounded-lg' />
                            )
                        })}
                </div>

                {/* right thumbail or main image */}
                <div className='w-3/4 sm:2/4 md:w-1/4'>
                        <div>
                            <img src={selectedProduct.images[0]?.url} alt="main product" 
                            className='w-full h-auto object-cover rounded-lg'/>
                        </div>
                </div>

                {/* mobile version */}

                <div className='md:hidden flex overscroll-x-scroll space-x-2 mt-4'>
                {selectedProduct.images.map((image,index)=>{
                            return(
                                <img key={index} 
                                src={image.url} 
                                alt={image.altText || `Thumbail ${index}`}
                                className='w-10 h-10 object-cover rounded-lg' />
                            )
                        })}
                </div>

                {/* right side */}

                <div className='mt-5 md:w-1/2 md:ml-8'>
                    <h1 className='text-2xl md:text-3xl font-bold mb-1'>{selectedProduct.name}</h1>

                    <p className='text-lg text-gray-400 line-through mb-1'>{selectedProduct.originalPrice && `$ ${selectedProduct.originalPrice}`}</p>
                    <p className='text-lg text-white  mb-1'>{selectedProduct.price  && `$ ${selectedProduct.price}`}</p>

                    <p className='font-light text-md'>{selectedProduct.description}</p>

                    <p>Color:</p>
                    <div className='flex gap-1 mb-2'>
                        {selectedProduct.colors.map((color)=>{
                            return(
                                <button key={color} className='w-6 h-6 rounded-full ' style={{backgroundColor:color.toLowerCase(),
                                filter:"brightness(0.5)"
                                }}></button>
                            )
                        })}
                    </div>

                    <p>Size:</p>
                    <div className='flex gap-2 mt-0.5'>
                        {selectedProduct.sizes.map((size)=>{
                            return(

                                <button key={size} 
                                className='px-3 py-0.5 rounded border cursor-pointer hover:bg-gray-700'>{size}</button>
                            )
                        })}
                    </div>

                    <p>Quantity</p>
                    

                    
                </div>

            </div>
        </div>
    </div>
  )
}
