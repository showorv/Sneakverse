import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// helper to get cart from localstorage

const getCartFromLocal = ()=>{

    const storedCart = localStorage.getItem("cart")
    return storedCart ? JSON.stringify(storedCart) : { products:[]}
}

const saveCartToLocal = (cart) =>{
    localStorage.setItem("cart", JSON.stringify(cart))
};

// fetch cart for user or guest id

export const fetchCart = createAsyncThunk("cart/fetchCart", async({guestId, userId}, {rejectWithValue})=>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/cart`, {
            params: {guestId,userId}
        })

        return response.data;
    } catch (error) {
       
        return rejectWithValue(error.response.data)
    }
})

// add an item to the cart for user or login

export const addToCart = createAsyncThunk ("cart/addToCart" , async({productId, quantity,size,color, guestId,userId},{rejectWithValue})=>{

    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/cart`, {
            productId, 
            quantity,
            size,
            color, 
            guestId,
            userId
        })

        return response.data;
    } catch (error) {
        
        return rejectWithValue(error.response.data)
    }
})

