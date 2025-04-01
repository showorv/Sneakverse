import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { updateProduct } from "./productSlice";

// helper to get cart from localstorage

const getCartFromLocal = ()=>{

    const storedCart = localStorage.getItem("cart")
    return storedCart ? JSON.parse(storedCart) : { products:[]}
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


// update the quantity of an item in cart

export const updateCartItemQuantity = createAsyncThunk("cart/updateCartItemQuantity", async({productId, quantity,size,color, guestId,userId},{rejectWithValue})=>{
    try {
        const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/cart`,{
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

// remove item in the cart
export const deleteItem = createAsyncThunk(
    "cart/deleteItem",
    async (payload, { rejectWithValue }) => {
      try {
       
        
        const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/cart`, {
          headers: {
            "Content-Type": "application/json",
          },
          data: payload,  // ✅ Send payload directly
        });
  
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data || "An error occurred");
      }
    }
  );
  


// merge guest card into loggedin user card

export const mergeItem = createAsyncThunk("cart/mergeItem", async({guestId,user}, {rejectWithValue})=>{
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/cart/merge`, {guestId,user}, {
            headers:{
                Authorization: `Bearer ${localStorage.getItem("userToken")}`
            }
        })

        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart: getCartFromLocal(),
        loading: false,
        error: null
    },
    reducers:{
        clearCart: (state)=> {
            state.cart = {products:[]}
            localStorage.removeItem("cart")
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCart.pending, (state)=>{
            state.loading = true
            state.error = null
        })
        builder.addCase(fetchCart.fulfilled, (state,action)=>{
            state.loading = false
            state.cart = action.payload
            saveCartToLocal(action.payload)
        })
        builder.addCase(fetchCart.rejected, (state,action)=>{
            state.loading = false
            state.error = action.payload.message || "failed to fetch cart"
        })

        // add to cart

        builder.addCase(addToCart.pending, (state)=>{
            state.loading = true
            state.error = null
        })
        builder.addCase(addToCart.fulfilled, (state,action)=>{
            state.loading = false
            state.cart = action.payload
            saveCartToLocal(action.payload)
        })
        builder.addCase(addToCart.rejected, (state,action)=>{
            state.loading = false
            state.error = action.payload.message || "failed to add cart"
        })

        //update item quantity

        
        builder.addCase(updateCartItemQuantity.pending, (state)=>{
            state.loading = true
            state.error = null
        })
        builder.addCase(updateCartItemQuantity.fulfilled, (state,action)=>{
            state.loading = false
            state.cart = action.payload
            saveCartToLocal(action.payload)
        })
        builder.addCase(updateCartItemQuantity.rejected, (state,action)=>{
            state.loading = false
            state.error = action.payload.message || "failed to update item cart"
        })

        // delete item

        
        builder.addCase(deleteItem.pending, (state)=>{
            state.loading = true
            state.error = null
        })
        builder.addCase(deleteItem.fulfilled, (state,action)=>{
            state.loading = false
            state.cart= action.payload
            saveCartToLocal(action.payload)
        })
        builder.addCase(deleteItem.rejected, (state,action)=>{
            state.loading = false
            state.error = action.payload.message || "failed to delete item cart"
        })

        // merge 

        
        builder.addCase(mergeItem.pending, (state)=>{
            state.loading = true
            state.error = null
        })
        builder.addCase(mergeItem.fulfilled, (state,action)=>{
            state.loading = false
            state.cart = action.payload
            saveCartToLocal(action.payload)
        })
        builder.addCase(mergeItem.rejected, (state,action)=>{
            state.loading = false
            state.error = action.payload.message || "failed to merge cart"
        })
    }
})


export const {clearCart} = cartSlice.actions
export default cartSlice.reducer