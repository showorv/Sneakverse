import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const SortOptions = () => {

  const [searchParams, setSearchParams] = useSearchParams()

  const handleSortChange = (e)=>{

    const sortBy = e.target.value

    searchParams.set("sortBy", sortBy)
    setSearchParams(searchParams)
  }
  return (
    <div className='mb-4 flex itemc justify-end'>
      <select name="sort" id="sort"
       onChange={handleSortChange}
      value={searchParams.get("sortBy")|| ""}
     
      className='border px-2 py-1 rounded-md bg-black focus:outline-none'
      >
        <option value="">Default</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
      </select>
    </div>
  )
}
