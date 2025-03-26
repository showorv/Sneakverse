
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import productSlice from './productSlice';
import cartSlice from './cartSlice';
import checkoutSlice from './checkoutSlice';
import orderSlice from './orderSlice';
import adminSlice from './adminSlice';

export const store = configureStore ({
    reducer:{
        auth: authReducer,
        products: productSlice,
        cart: cartSlice,
        checkout: checkoutSlice,
        order: orderSlice,
        admin: adminSlice,

    }
})