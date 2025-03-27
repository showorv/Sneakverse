import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const API_URL = `${import.meta.env.VITE_BACKEND_URL}`;

// fetch all orders

export const fetchAdminOrders = createAsyncThunk("adminOrders/fetchAdminOrders", async()=>{

    const response = await axios.get(`${API_URL}/api/admin/orders`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("userToken")}`
        }
    })

    return response.data
})


//update order

export const updateAdminOrders = createAsyncThunk("adminOrders/updateAdminOrders", async({id,orderData}, {rejectWithValue})=>{
    try {

        const response = await axios.put(`${API_URL}/api/admin/orders/${id}`,orderData,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("userToken")}`
            }
        })
    
        return response.data;
        
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
 
})

// delete orders

export const deleteAdminOrders = createAsyncThunk("adminOrders/deleteAdminOrders", async({id}, {rejectWithValue})=>{
    try {

         await axios.delete(`${API_URL}/api/admin/orders/${id}`,
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


const adminOrderSlice = createSlice({
    name:"adminOrders", 
    initialState:{
        orders: [],
        totalOrders: 0,
        totalSales: 0,
        loading: false,
        error: null
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchAdminOrders.pending, (state)=>{
            state.loading = true
            state.error= null
        })
        .addCase(fetchAdminOrders.fulfilled, (state,action)=>{
            state.loading = false
            state.orders= action.payload
            state.totalOrders = action.payload.length;

            //calculate total sales
            const totalSal = action.payload.reduce((acc,order)=> {
                return acc+ order.totalPrice;
            },0)

            state.totalSales = totalSal
        })
        .addCase(fetchAdminOrders.rejected, (state,action)=>{
            state.loading = false
            state.error= action.payload?.message || "error in fetch order"
        })

        // update order status

        .addCase(updateAdminOrders.fulfilled, (state,action)=>{
            const updatedOrder = action.payload;
            const index = state.orders.findIndex((order)=> order._id === updatedOrder._id)

            if(index !== -1){
                state.orders[index] = updatedOrder;
            }
        })


        // delete order
        .addCase(deleteAdminOrders.fulfilled, (state,action)=>{
           state.orders = state.orders.filter((order)=> order._id !== action.payload)
        })

    }
})


export default adminOrderSlice.reducer