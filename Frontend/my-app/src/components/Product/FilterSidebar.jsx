import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const FilterSidebar = () => {

    const [searchParams, setSearchParams] = useSearchParams(); //Returns a tuple of the current URL's

    //filtering

    const [filters, setFilters] = useState({
        catagory:"",
        size:[],
        colors:"",
        brand:[],
        minPrice:0,
        maxPrice:6000

    })

    const [priceRange, setPriceRange] = useState([0,6000]);

    const catagory =[ "A grade,B grade, C grade"]
    const size = ["39","40","41","42","43","44"]
    const colors= ["Red","Black","White","Blue"]
    const brand= ["Nike","Adidas","New Balance","Vans"]

  return (
    <div className='text-black'>FilterSidebar</div>
  )
}
