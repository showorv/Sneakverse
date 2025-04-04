import React, { useState } from 'react';
import { registrationUser } from '../redux/authSlice.js';
import {useDispatch, useSelector} from "react-redux"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { mergeItem } from '../redux/cartSlice.js';

export const Register = () => {

  const [users, setUser] = useState({
    name:"",
    email: "",
    password: ""
  });

  const dispatch = useDispatch()
  const { loading, error } = useSelector(state => state.auth);
  const {cart} = useSelector((state)=> state.cart)
  const location = useLocation()
  const {guestId,user} = useSelector((state)=> state.auth)
  const navigate = useNavigate()


  // get redirect parameter and check if its checkout or something
  const redirect = new URLSearchParams(location.search).get("redirect") || "/"
  const isCheckoutRedirect = redirect.includes("checkout")


  const handleUser = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(registrationUser(users)).unwrap(); // Wait for login to succeed
      if (result) {
        if (cart?.products.length > 0) {
          await dispatch(mergeItem({ guestId, user }));
        }
        navigate(isCheckoutRedirect ? "/checkout" : "/userlogin");
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#131313] px-4 mt-5 md:mt-0">
      <div className="w-full max-w-md bg-[#131313] border p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-medium text-center text-gray-200 mb-3">SneakVerse</h1>

        <h1 className="text-2xl font-bold text-center text-gray-200 mb-2">Hey there!</h1>

        <p className='text-xs md:text-lg font-light text-center mb-6  '>Register the form to signup</p>


        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">name:</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              required 
              placeholder="Enter your name" 
              autoComplete="off" 
              value={users.name} 
              onChange={handleUser} 
              className="w-full p-3 text-xs md:text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email:</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              required 
              placeholder="Enter your email" 
              autoComplete="off" 
              value={users.email} 
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
              value={users.password} 
              onChange={handleUser} 
              className="w-full p-3 text-xs md:text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
          >
            Signup
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <Link to={`"/userlogin?redirect=${encodeURIComponent(redirect)}`}
          className="text-blue-500 hover:underline" >Log In</Link>
        </p>
      </div>
    </section>
  );
};
