import React, { use, useEffect } from 'react'
import { MyOrder } from './MyOrder'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../redux/authSlice'
import { clearCart } from '../redux/cartSlice'

export const UserProfile = () => {
    const {user} = useSelector((state)=> state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log("user",user);

    useEffect(()=>{
        if(!user){
            navigate("/userlogin")
        }
    },[user,dispatch])


    const handleLogout = ()=>{

        dispatch(logout()),
        dispatch(clearCart()),
        navigate("/userlogin")
    }
    
  return (
   <section className='min-h-screen flex flex-col'>

    <div className='flex-grow container mx-auto p-4 md:p-6'>
        <div className='flex flex-col md:flex-row md:space-x-3 space-y-6 md:space-y-0'>

            {/* left side */}

            <div className='w-full md:w-1/3 lg:w-1/4 shadow-lg border rounded-lg p-6'>
                <h1 className='text-2xl md:text-3xl font-bold text-white mb-3'>{user?.name}</h1>
                <p className='text-lg text-gray-200 mb-4 '>{user?.email}</p>
                <button className='w-full bg-white text-black rounded py-1 px-4 cursor-pointer hover:bg-gray-400' onClick={handleLogout}>Logout</button>
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
