import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { Productgrid } from './Productgrid'
import { fetchProductByFilter,fetchSimilarProducts } from '../../redux/productSlice'
import {useDispatch, useSelector} from "react-redux"
import { addToCart } from '../../redux/cartSlice'

//dummy data 

// const selectedProduct = {
//     name:"Jordan",
//     price:"120",
//     originalPrice:"150",
//     description:"this is a stylish shoe hediwfnbdsbcvdkbvkdvbkcbvkcbvkc cvifbnvfnvkfnviofv fvifbniov f vfibvfkv fiv bf vofi vdoifbv",
//     brand:"Jordan Air",
//     sizes:["S","M","L","XL"],
    
//     colors:["Red","Black"],
//     images:[
//         {
//             url:"https://picsum.photos/200?random=1",
//             altText:"Air"
//         },
//         {
//             url:"https://picsum.photos/200?random=2",
//             altText:"Air"
//         },
//     ]
// }


//also like dummy data

// const related = [


//     {
//     _id:1,
//     name:"Product 1",
//     price:"100",
//     images:[{url:'https://picsum.photos/200?random=2'}]
//     },
//     {
//     _id:2,
//     name:"Product 1",
//     price:"100",
//     images:[{url:'https://picsum.photos/200?random=3'}]
//     },
//     {
//     _id:3,
//     name:"Product 1",
//     price:"100",
//     images:[{url:'https://picsum.photos/200?random=4'}]
//     },
    
// ]


export const ProductDetails = () => {


    const {id} = useParams()
    const dispatch = useDispatch()
    const {selectedProduct,similarProduct, loading,error} = useSelector((state)=> state.products)

    const {guestId, user} = useSelector((state)=> state.auth)
    //image toggle

    const [mainImage, setMainImage] = useState("")
    const [selectedColor, setSelectedColor] = useState("")
    const [selectSize, setSelectSize] = useState("")

    const [ quantity, setQuantity] = useState(1)
    const [buttonDisable, setButtonDisable] = useState(false)


    useEffect(()=>{
        if(id){

            dispatch(fetchProductByFilter(id))
            dispatch(fetchSimilarProducts({id}))
        }
    },[dispatch,id])

    useEffect(()=>{
        if( selectedProduct?.images?.length>0){
            setMainImage(selectedProduct.images[0].url)
        }
    },[selectedProduct])

    const handleQuantitychange = (action)=>{
        if(action==="plus") setQuantity((prev) => prev+1)
        if(action==="minus" && quantity>1) setQuantity((prev) => prev-1)
    }

    const handleAddToCart = ()=>{

        if(!selectSize && !selectedColor){
            toast.error("Please select color and size"),{
                duration:300
            }
           return
        }
       setButtonDisable(true)

    //    setTimeout(() => {
    //     toast.success("Product added"),{
    //         duration:300
    //     }

    //     setButtonDisable(false)
    //    }, 500);

    dispatch(
        addToCart({
            productId: id,
            quantity,
            size: selectSize,
            color: selectedColor, 
            guestId,
            userId: user?._id
        })
    ).then(()=>{
        toast.success("Product added to the cart",{

            duration: 3000
        })
    }).finally(()=>{
        setButtonDisable(false)
    })
    }

    if(loading){
        return <p>loading..</p>
    }
    if(error){
        return <p>Error: {error}</p>
    }
  return (
    <section className='mx-6  md:mx-35 py-5'>

        <div className='text-3xl font-bold'>
            <NavLink to="/">Home</NavLink>
        </div>
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
                                className={`w-20 h-20 object-cover rounded-lg 
                                ${mainImage===image.url ? "border" :"border-gray-500"}`} 
                                onClick={()=>setMainImage(image.url)}/>
                            )
                        })}
                </div>

                {/* right thumbail or main image */}
                <div className='w-3/4 sm:2/4 md:w-1/4'>
                        <div>
                            <img src={mainImage} alt="main product" 
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
                                className={`w-20 h-20 object-cover rounded-lg ${mainImage===image.url ? "border" :"border-none"}`} 
                                onClick={()=>setMainImage(image.url)} />
                            )
                        })}
                </div>

                {/* right side */}

                <div className='mt-5 md:w-2/4 md:ml-8'>
                    <h1 className='text-2xl md:text-3xl font-bold mb-1'>{selectedProduct.name}</h1>

                    <p>{selectedProduct.brand}</p>

                    <p className='text-lg text-gray-400 line-through mb-1'>{selectedProduct.originalPrice && `$ ${selectedProduct.originalPrice}`}</p>
                    <p className='text-lg text-white  mb-1'>{selectedProduct.price  && `$ ${selectedProduct.price}`}</p>

                    <p className='font-light text-md '>{selectedProduct.description}</p>

                    <p>Color:</p>
                    <div className='flex gap-1 mb-2'>
                        {selectedProduct.colors.map((color)=>{
                            return(
                                <button key={color} className={`w-6 h-6 rounded-full ${selectedColor === color? "border": "border-none"} `} style={{backgroundColor:color.toLowerCase(),
                                filter:"brightness(0.5)"
                                }}
                                onClick={()=> setSelectedColor(color)}
                                ></button>
                            )
                        })}
                    </div>

                    <p>Size:</p>
                    <div className='flex gap-2 mt-0.5 mb-2'>
                        {selectedProduct.sizes.map((size)=>{
                            return(

                                <button key={size} 
                                className={`px-3 py-0.5 rounded border cursor-pointer hover:bg-gray-700 ${selectSize===size? "bg-gray-700":"bg-none"}`}
                                onClick={()=> setSelectSize(size)}
                                >{size}</button>
                            )
                        })}
                    </div>

                    <p className='my-1'>Quantity</p>
                    <div className="flex items-center space-x-2">
                        
                            <button className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-md text-lg font-bold text-white hover:bg-gray-700 hover:text-white transition"
                            onClick={()=>handleQuantitychange("minus")}
                            >
                                -
                            </button>
                            <span className="text-md font-medium text-white">{quantity}</span>
                            <button className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-md text-lg font-bold text-white hover:bg-gray-700 hover:text-white transition"
                            onClick={()=>handleQuantitychange("plus")}
                            >
                                +
                            </button>
                        

                       </div>

                       <button className={`bg-black text-white w-full rounded px-4 py-2 mt-3 cursor-pointer ${buttonDisable?"cursor-not-allowed opacity-50": "hover:bg-gray-600"}`} onClick={handleAddToCart}
                       disabled={buttonDisable}
                       > {buttonDisable?"Adding":"ADD TO CART"}</button>

                        <div className='mt-5 '>
                           <h3 className='text-xl font-bold mb-4'>Characterstics</h3>

                           <table className='w-full text-left text-sm text-gray-400'>
                            <tbody>
                                <tr>
                                    <td className='py-1'>Brand</td>
                                    <td className='py-1'>{selectedProduct.brand}</td>
                                </tr>
                                <tr>
                                    <td className='py-1'>Material</td>
                                    <td className='py-1'>{selectedProduct.brand}</td>
                                </tr>
                            </tbody>
                           </table>
                        </div>
                    
                </div>

            </div>
        </div>

        <div className='max-w-6xl mx-auto  p-8 rounded-lg'>
            <h2 className='text-xl md:text-2xl font-bold text-center mb-5'>You May Also Like</h2>

            <Productgrid products={similarProduct}/>
        </div>
    </div>

    </section>
  )
}
