
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import productSlice from './productSlice';
import cartSlice from './cartSlice';

export const store = configureStore ({
    reducer:{
        auth: authReducer,
        products: productSlice,
        cart: cartSlice,
        
    }
})