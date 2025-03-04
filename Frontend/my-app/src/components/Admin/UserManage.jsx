import React, { use, useState } from 'react'

export const UserManage = () => {

    const users = [
        {
            _id: 1234,
            name:"Showrov",
            email: "show@gmail.com",
            role:"admin"
        }
    ]

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        role:"customer"
    })

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData);

        //reset form after submission
        setFormData({
            name:"",
            email:"",
            password:"",
            role:"customer"
        })
    }

    const handleRoleChage =(userId, role)=>{
        console.log({id:userId, role});
    }

    const handleDeleteUser=(userID)=>{

        if(window.confirm("Are you sure to delete this user?")){
            console.log("user delete ",userID);
        }

    }

  return (
    <div className='max-w-7xl mx-auto p-6'>
        <h2 className='text-xl md:text-3xl font-bold mb-6'>User Management</h2>
        <div className='p-6 rounded-lg mb-6'>
            <h3 className='text-sm md:text-xl font-bold mb-4'>Add New User</h3>

            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label className='block text-gray-300 text-lg font-semibold'>Name</label>
                    <input type="text" name='name' value={formData.name} required onChange={handleChange}
                    className='w-full py-1 px-2 border border-gray-500 rounded' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-300 text-lg font-semibold'>Email</label>
                    <input type="email" name='email' value={formData.email} required onChange={handleChange}
                    className='w-full py-1 px-2 border border-gray-500  rounded' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-300 text-lg font-semibold'>Password</label>
                    <input type="password" name='password' value={formData.password} required onChange={handleChange}
                    className='w-full py-1 px-2 border border-gray-500  rounded' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-300 text-lg font-semibold'>Role</label>
                    <select name="role" value={formData.role} onChange={handleChange} className='w-full py-1 px-2 border border-gray-500  rounded'>
                        <option value="customer" className='text-black'>Customer</option>
                        <option value="admin" className='text-black'>Admin</option>
                    </select>
                </div>

                <button type='submit' className='bg-green-500 text-white py-1 px-4 rounded cursor-pointer hover:bg-green-600'>Add User</button>
            </form>
        </div>

        {/* user list management */}

        <div className='overflow-x-auto shadow-md sm:rounded'>
            <table className='min-w-full text-left text-gray-200'>
                <thead className='bg-gray-600 text-xs uppercase text-gray-200'>
                    <tr>
                        <th className='py-2 px-4'>Name</th>
                        <th className='py-2 px-4'>Email</th>
                        <th className='py-2 px-4'>Role</th>
                        <th className='py-2 px-4'>Actions</th>
                    </tr>
                </thead>
                
                <tbody>
                    {users.map((user)=>{
                        return(
                            <tr key={user._id} className='border-b  border-gray-600 hover:bg-gray-500'>
                                <td className='py-2 px-4'>{user.name}</td>
                                <td className='py-2 px-4'>{user.email}</td>
                                <td className='py-2 px-4'>
                                    <select value={user.role}
                                    onChange={(e)=>handleRoleChage(user._id, e.target.value)}
                                    className='py-1 px-2 border rounded'>
                                        <option value="customer" className='text-black'>Customer</option>
                                        <option value="admin" className='text-black'>Admin</option>
                                    </select>
                                </td>
                                <td className='py-2 px-4'>
                                    <button onClick={()=> handleDeleteUser(user._id)} 
                                    className='bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 cursor-pointer'>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    </div>
  )
}
