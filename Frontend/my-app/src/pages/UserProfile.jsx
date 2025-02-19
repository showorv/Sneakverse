import React from 'react'
import { MyOrder } from './MyOrder'

export const UserProfile = () => {
  return (
   <section className='min-h-screen flex flex-col'>

    <div className='flex-grow container mx-auto p-4 md:p-6'>
        <div className='flex flex-col md:flex-row md:space-x-3 space-y-6 md:space-y-0'>

            {/* left side */}

            <div className='w-full md:w-1/3 lg:w-1/4 shadow-lg border rounded-lg p-6'>
                <h1 className='text-2xl md:text-3xl font-bold text-white mb-3'>Hohn doe</h1>
                <p className='text-lg text-gray-200 mb-4 '>John@gmail.com</p>
                <button className='w-full bg-white text-black rounded py-1 px-4 cursor-pointer hover:bg-gray-400'>Logout</button>
            </div>

            {/* right side */}

            <div className='w-full md:w-2/3 lg:w-3/4 border rounded-lg '>
                    <MyOrder />
            </div>
        </div>
    </div>

   </section>
  )
}
