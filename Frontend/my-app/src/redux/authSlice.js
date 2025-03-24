import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

// retrive user info and token from localstorage if available

const userFromStorage = localStorage.getItem("userInfo")?
JSON.parse(localStorage.getItem("userInfo")): null;

// check for an existing guest id in localstorage or generate new

const initialGuestId = localStorage.getItem("guestId") || `guest_${ new Date().getTime()}`
localStorage.setItem("guestId", initialGuestId)

// initial state for authentication

const initialState = {
    user: userFromStorage,
    guestId: initialGuestId,
    loading: false,
    error: null
}

// async thunk for user login

export const loginUser = createAsyncThunk( "auth/loginUser", async( userData, {rejectWithValue})=>{
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/login`, userData)
        localStorage.setItem("userInfo", JSON.stringify(response.data.user))
        localStorage.setItem("userToken", response.data.token) // to save the user token

        return response.data.user // return the user object from response
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

// async thunk for registration

export const registrationUser = createAsyncThunk( "auth/registrationUser", async( userData, {rejectWithValue})=>{
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/register`, userData)
        localStorage.setItem("userInfo", JSON.stringify(response.data.user))
        localStorage.setItem("userToken", response.data.token) // to save the user token

        return response.data.user // return the user object from response
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


// create slice to manage auth state.

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        logout: (state)=> {
            state.user = nulll
            state.guestId = `guest_${ new Date().getTime()}` // reset guestid on logout

            localStorage.removeItem("userInfo")
            localStorage.removeItem("userToken")

            localStorage.setItem("guestId", state.guestId) // set new guest id in local
        },

        generateNewGuestId: (state)=>{
            state.guestId = `guest_${ new Date().getTime()}`
            localStorage.setItem("guestId", state.guestId) 
        },
    },

    extraReducers: (builder)=>{
        builder.addCase( loginUser.pending, (state)=>{
            state.loading = true,
            state.error = null
        })
        builder.addCase( loginUser.fulfilled, (state,action)=>{
            state.loading = false,
            state.error = action.payload
        })
        builder.addCase( loginUser.rejected, (state,action)=>{
            state.loading = false,
            state.error = action.payload.message || "something went wrong"
        })
        builder.addCase( registrationUser.pending, (state)=>{
            state.loading = true,
            state.error = null
        })
        builder.addCase(registrationUser.fulfilled, (state,action)=>{
            state.loading = false,
            state.error = action.payload
        })
        builder.addCase(registrationUser.rejected, (state,action)=>{
            state.loading = false,
            state.error = action.payload.message || "something went wrong"
        })
    }
})


//exports action to use in components

export const {logout, generateNewGuestId} = authSlice.actions

//export reducer to add in redux store

export default authSlice.reducer