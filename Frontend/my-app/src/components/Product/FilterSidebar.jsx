import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export const FilterSidebar = () => {

    const [searchParams, setSearchParams] = useSearchParams(); //Returns a tuple of the current URL's

    //filtering

    const [filters, setFilters] = useState({
        collections:[],
        catagory:"",
        size:[],
        colors:"",
        brand:[],
        minPrice:0,
        maxPrice:6000

    })
    const navigate = useNavigate()

    const [priceRange, setPriceRange] = useState([0,6000]);

    const catagory =[ "A grade","B grade", "C grade"]
    const size = ["39","40","41","42","43","44"]
    const colors= ["Red","Black","White","Blue"]
    const brand= ["Nike","Adidas","New Balance","Vans"]
    const collections = ["Stock","pre-order"]

    //useeffect for url

    useEffect(()=>{
        const params = Object.fromEntries([...searchParams])  // Output: { category: "sneakers", brand: "Nike" } 

        setFilters({
            catagory: params.catagory || "",
            colors: params.colors || "",
            size: params.size? params.size.split(",") : [] , // use for an array and  multiple sizes are passed in a comma-separated 
            brand: params.brand? params.brand.split(",") : [] ,
            collections: params.collections? params.collections.split(","): [],
            minPrice: params.minPrice  || 0,
            maxPrice:params.maxPrice || 6000
        })

        setPriceRange([0, params.maxPrice || 6000])
    },[searchParams])  //This effect runs whenever `searchParams` changes 
    
    // to store user filtering

    const handleFilterChange = (e)=>{

        const {name, value, checked, type} = e.target;
        // console.log(name,value,checked,type);

        let newFilters = {...filters}

        if(type==="checkbox"){
            if(checked){

                newFilters[name] = [...(newFilters[name] || []), value] //store value in array
            }else{
                newFilters[name] = newFilters[name].filter((item)=> item !== value) //remove valu from array
            }
        }else{
            newFilters[name] = value
        }

        setFilters(newFilters)
        updateUrlParams(newFilters)
        console.log(newFilters);
        
    }

    //update the url

    const updateUrlParams = (newFilters)=>{
        const params = new URLSearchParams()

        Object.keys(newFilters).forEach((key)=>{
            if(Array.isArray(newFilters[key]) && newFilters[key].length > 0){
                params.append(key, newFilters[key].join(",")) //x,s
            }else if(newFilters[key]){
                params.append(key,newFilters[key])
            }
        })

        setSearchParams(params)
        navigate(`?${params.toString()}`) //?catagory=A+grade&size=39%41
    }


    const handlePriceRange = (e)=>{

        const newPrice = e.target.value

        setPriceRange([0,newPrice])

        const newFilters = {...filters, minPrice:0, maxPrice:newPrice}
        setFilters(filters)
        updateUrlParams(newFilters)
    }

  return (
    <div className="p-4">
        <h3 className='text-xl raleway font-bold text-black mb-6'>Filter</h3>
        <div className='mb-5'>
            <label className='block mb-2 text-black text-md font-medium'>Collection:</label>
           {collections.map((col,index)=>{
            return(
                <div className='flex items-center mb-1 ml-3'>
                    
                    <input key={index} type="checkbox"
                     name="collections" 
                     value={col}
                    onChange={handleFilterChange}
                     checked={filters.collections.includes(col)}
                    className='mr-2 h-4 w-4 text-blue-300 focus:ring-blue-700 border-gray-600'
                    />
                    <span className='text-black'>{col}</span>
                </div>
            )
           })}
        </div>
        <div className='mb-5'>
            <label className='block mb-2 text-black text-md font-medium'>Catagory:</label>
           {catagory.map((cata)=>{
            return(
                <div className='flex items-center mb-1 ml-3'>
                    
                    <input key={cata} type="radio"
                     name="catagory" 
                     value={cata}
                     onChange={handleFilterChange}
                     checked={filters.catagory===cata}
                    className='mr-2 h-4 w-4 text-blue-300 focus:ring-blue-700 border-gray-600'
                    />
                    <span className='text-black'>{cata}</span>
                </div>
            )
           })}
        </div>

        <div className='mb-5'>
            <label className='block mb-2 text-black text-md font-medium'>Brand:</label>
           {brand.map((brands)=>{
            return(
                <div className='flex items-center mb-1 ml-3'>
                    
                    <input key={brands} type="checkbox"
                     name="brand" 
                     value={brands}
                    onChange={handleFilterChange}
                     checked={filters.brand.includes(brands)}
                    className='mr-2 h-4 w-4 text-blue-300 focus:ring-blue-700 border-gray-600'
                    />
                    <span className='text-black'>{brands}</span>
                </div>
            )
           })}
        </div>
        <div className='mb-5'>
            <label className='block mb-2 text-black text-md font-medium'>Size:</label>
           {size.map((sizes)=>{
            return(
                <div className='flex items-center mb-1 ml-3'>
                    
                    <input key={sizes} type="checkbox"
                     name="size" 
                     value={sizes}
                     onChange={handleFilterChange}
                     checked={filters.size.includes(sizes)}
                    className='mr-2 h-4 w-4 text-blue-300 focus:ring-blue-700 border-gray-600'
                    />
                    <span className='text-black'>{sizes}</span>
                </div>
            )
           })}
        </div>

        <div className='mb-5'>
            <label className='block mb-2 text-black text-md font-medium'>Color:</label>
            <div className='flex flex-wrap gap-2'>

            {colors.map((color)=>{
                return(
                   
                        <button key={color}
                        name='colors'
                        value={color}
                        onClick={handleFilterChange}
                         className={`w-7 h-7 rounded-full border border-gray-700 cursor-pointer transition hover:scale-105 ${filters.colors===color?"ring-2 ring-blue-800":""}`}
                        style={{backgroundColor:color.toLowerCase()}}
                        ></button>
                    
                )
            })}
            </div>
        </div>

            <div className='mb-5'>
                <label className='block mb-2 text-black text-md font-medium'>Price Range</label>
                <input type="range" name="priceRange" min={0}
                 max={6000}
                 value={priceRange[1]}
                 onChange={handlePriceRange}
                 className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
                />
                <div className='flex justify-between text-black mt-2'>
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                </div>
            </div>
    </div>
  )
}
