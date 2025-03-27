import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const API_URL = `${import.meta.env.VITE_BACKEND_URL}`;


// fetch products in admin

export const fetchAdminProducts = createAsyncThunk("adminProducts/fetchAdminProducts", async()=>{

    const response = await axios.get(`${API_URL}/api/admin/products`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("userToken")}`
        }
    })

    return response.data
})

// create products 

export const createProducts = createAsyncThunk("adminProducts/createProducts", async(productData, {rejectWithValue})=>{
    try {

        const response = await axios.post(`${API_URL}/api/products`,productData,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("userToken")}`
            }
        })
    
        return response.data;
        
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
 
})


// update the existing product

export const updateProducts = createAsyncThunk("adminProducts/updateProducts", async({id,productData}, {rejectWithValue})=>{
    try {

        const response = await axios.put(`${API_URL}/api/products/${id}`,productData,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("userToken")}`
            }
        })
    
        return response.data;
        
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
 
})

// delete product
export const deleteProducts = createAsyncThunk("adminProducts/deleteProducts", async({id}, {rejectWithValue})=>{
    try {

         await axios.delete(`${API_URL}/api/products/${id}`,
        {
            headers:{
                Authorization: `Bearer ${localStorage.getItem("userToken")}`
            }
        })
    
        return id;
        
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
 
})


const adminProductSlice = createSlice({
    name:"adminProducts",
    initialState:{
        products:[],
        loading: false,
        error: null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAdminProducts.pending, (state)=>{
            state.loading = true
            state.error= null
        })
        .addCase(fetchAdminProducts.fulfilled, (state,action)=>{
            state.loading = false
            state.products= action.payload
        })
        .addCase(fetchAdminProducts.rejected, (state,action)=>{
            state.loading = false
            state.error= action.payload?.message || "error in fetch products"
        })

        // create products
        .addCase(createProducts.fulfilled, (state,action)=>{
           state.products.push(action.payload)
        })

        //update products
        .addCase(updateProducts.fulfilled, (state,action)=>{
            const updatedProduct = action.payload
            const index = state.products.findIndex((product)=> product._id === updatedProduct._id)

            if(index !== -1){
                state.products[index] = updatedProduct
            }
         })

         //delete product
         .addCase(deleteProducts.fulfilled, (state,action)=>{
            state.products= state.products.filter((product)=> product._id !== action.payload)
         })

    }
})

export default adminProductSlice.reducer
