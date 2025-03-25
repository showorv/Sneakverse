import React, { useState } from 'react';
import { loginUser } from '../redux/authSlice.js';
import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch()
  const { loading, error } = useSelector(state => state.auth);


  const handleUser = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user))
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#131313] px-4 mt-5 md:mt-0">
      <div className="w-full max-w-md bg-[#131313] border p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-medium text-center text-gray-200 mb-3">SneakVerse</h1>

        <h1 className="text-2xl font-bold text-center text-gray-200 mb-2">Hey there!</h1>

        <p className='text-xs md:text-md font-light text-center mb-6  '>Enter your email and password to Login</p>


        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email:</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              required 
              placeholder="Enter your email" 
              autoComplete="off" 
              value={user.email} 
              onChange={handleUser} 
              className="w-full p-3 text-xs md:text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password:</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              required 
              placeholder="Enter your password" 
              autoComplete="off" 
              value={user.password} 
              onChange={handleUser} 
              className="w-full p-3 text-xs md:text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
            disabled={loading}
          >
            {loading ? "Login in":"Log In"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account? <a href="/userregister" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </section>
  );
};