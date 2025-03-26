import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


// fetch user order]

export const fetchUserOrder = createAsyncThunk("order/fetchUserOrder", async(_, {rejectWithValue})=>{ // _ because there is no parameters in req
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/order`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("userToken")}`
            }
        })

        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


// fetch orders details

export const fetchOrderDetails = createAsyncThunk("order/fetchOrderDetails", async(orderId, {rejectWithValue})=>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/order/${orderId}`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("userToken")}`
            }
        })

        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


const orderSlice = createSlice({
    name:"order",
    initialState:{
        orders:[],
        totalOrders: 0,
        orderDetails: null, //store single order details
        loading: false,
        error:null
    },
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(fetchUserOrder.pending, (state)=>{
            state.loading = true
            state.error = null
        })
        builder.addCase(fetchUserOrder.fulfilled, (state,action)=>{
            state.loading = false
            state.orders = action.payload
            // state.totalOrders = action.payload.length;
        })
        builder.addCase(fetchUserOrder.rejected, (state,action)=>{
            state.loading = false
            state.error = action.payload.message || "error in fetch user order"
        })

        // order details
        builder.addCase(fetchOrderDetails.pending, (state)=>{
            state.loading = true
            state.error = null
        })
        builder.addCase(fetchOrderDetails.fulfilled, (state,action)=>{
            state.loading = false
            state.orderDetails = action.payload
        })
        builder.addCase(fetchOrderDetails.rejected, (state,action)=>{
            state.loading = false
            state.error = action.payload.message || "error in fetch user order details"
        })

    }
})

export default orderSlice.reducer