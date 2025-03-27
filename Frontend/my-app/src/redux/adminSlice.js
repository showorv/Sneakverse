import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

// fetch all users

export const fetchUserDetails = createAsyncThunk("admin/fetchUserDetails", async()=>{
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/users`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("userToken")}`
        }
    })
    return response.data
})

// create user thunk

export const createUser = createAsyncThunk("admin/createUser", async(userData,{rejectWithValue})=>{
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admin/users`,userData,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("userToken")}`
            }
        })
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

// update user info

export const updateUser = createAsyncThunk("admin/updateUser", async({id,name,email,role})=>{
    const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${id}`, {name,email,role},{
        headers:{
            Authorization:  `Bearer ${localStorage.getItem("userToken")}`
        }
    })

    return response.data
})


// delete user

export const deleteUser = createAsyncThunk("admin/deleteUser", async({id})=>{
    await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${id}`,{
        headers:{
            Authorization:  `Bearer ${localStorage.getItem("userToken")}`
        }
    })

    return id;
})

const adminSlice = createSlice({
    name:"admin",
    initialState:{
        users:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(fetchUserDetails.pending, (state)=>{
            state.loading = true
            state.error= null
        })
        builder.addCase(fetchUserDetails.fulfilled, (state,action)=>{
            state.loading = false
            state.users= action.payload
        })
        builder.addCase(fetchUserDetails.rejected, (state,action)=>{
            state.loading = false
            state.error= action.payload.message || "error in fetch user details"
        })

        //updated user

        builder.addCase(updateUser.fulfilled, (state,action)=>{
            const updateduser = action.payload
            const userIndex = state.users.findIndex((user)=> user._id === updateduser._id)

            if(userIndex !== -1){
                state.users[userIndex] = updateduser
            }
        })

       builder.addCase(updateUser.rejected, (state, action) => {
            state.error = action.payload?.message || "Error updating user";
        })

        // delete user

        builder.addCase(deleteUser.fulfilled, (state,action)=>{
            state.users = state.users.filter((user)=> user._id !== action.payload)
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.error = action.payload?.message || "Error deleting user";
        })

        //create user

        builder.addCase(createUser.pending, (state)=>{
            state.loading = true
            state.error= null
        })
        builder.addCase(createUser.fulfilled, (state,action)=>{
            state.loading = false
            state.users.push(action.payload.user) //add a new user to the state.If your backend sends { success: true, user: { ... } }, then action.payload.user exists.


        })
        builder.addCase(createUser.rejected, (state,action)=>{
            state.loading = false
            state.error= action.payload?.message || "error in fetch user details"
        })
    }
})

export default adminSlice.reducer