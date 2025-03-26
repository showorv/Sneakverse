import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// async thunk fetch product by collection and filters

export const fetchProductByFilter = createAsyncThunk("products/fetchByFilters", async({
    collections,
    category,
    brand,
    sizes,
    colors,
    minPrice, 
    maxPrice, 
    search, 
    sortBy,
    limit

})=>{

    const query = new URLSearchParams();

    if(collections) query.append("collections", collections)
    if(category) query.append("category", category)
    if(brand) query.append("brand", brand)
    if(sizes) query.append("sizes", sizes)
    if(colors) query.append("colors", colors)
    if(minPrice) query.append("minPrice", minPrice)
    if(maxPrice) query.append("maxPrice", maxPrice)
    if(search) query.append("search", search)
    if(sortBy) query.append("sortBy", sortBy)
    if(limit) query.append("limit", limit)

    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products?${query.toString()}`)

    return response.data;
});


// fetch a product details by id

export const fetchProductDetails = createAsyncThunk("products/fetchProductsDetails", async(id)=>{
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`)

    return response.data
})

// fetch update the products by id. Only admin can

export const updateProduct = createAsyncThunk("products/updateProduct", async({id,productData})=>{
    const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`, productData, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`
        }
    })

    return response.data
})


//fetch similar product by category and brand 

export const fetchSimilarProducts = createAsyncThunk("products/fetchSimilarProducts", async({id})=>{

    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/similar/${id}`)
    return response.data
})

//set up slice manage the product related state

const productsSlice = createSlice({
    name:"products",
    initialState: {
        products: [] ,// fetch all the products without filter
        selectedProduct: null, //store the details of single product
        similarProduct: [], //fetch all similar product

        loading: false,
        error:null,
        filters: { // to get products by filter
            category:"",
            collections:"",
            sizes:"",
            brand:"",
            colors:"",
            maxPrice:"",
            minPrice:"",
            sortBy:"",
            limit:"",
            search:""
        }
    },
    reducers: {
        setFilters: (state, action)=>{
            state.filters = {...state.filters, ...action.payload}
        },
        clearFilters: (state)=>{
            state.filters = {
                category:"",
            collections:"",
            sizes:"",
            brand:"",
            colors:"",
            maxPrice:"",
            minPrice:"",
            sortBy:"",
            limit:"",
            search:""
            }
        }
    },

    extraReducers: (builder) =>{
        //handle fetch for filter
        builder.addCase( fetchProductByFilter.pending, (state)=>{
            state.loading = true
            state.error= null
        })
        builder.addCase(fetchProductByFilter.fulfilled, (state,action)=>{
            state.loading= false
            state.products = Array.isArray(action.payload)? action.payload : []
        })

        builder.addCase(fetchProductByFilter.rejected, (state,action)=>{
            state.loading = false
            state.error = action.error.message || "something wrong"
        })

        //handle fetch for single

        builder.addCase( fetchProductDetails.pending, (state)=>{
            state.loading = true
            state.error= null
        })
        builder.addCase(fetchProductDetails.fulfilled, (state,action)=>{
            state.loading= false
            state.selectedProduct= action.payload
        })

        builder.addCase(fetchProductDetails.rejected, (state,action)=>{
            state.loading = false
            state.error = action.error.message || "something wrong"
        })

        // handle fetch for update product

        builder.addCase( updateProduct.pending, (state)=>{
            state.loading = true
            state.error= null
        })
        builder.addCase(updateProduct.fulfilled, (state,action)=>{
            state.loading= false
            const updatedProduct = action.payload
            const index = state.products.findIndex((product)=> product._id === updatedProduct._id)

            if(index !== -1){
                state.products[index] =updatedProduct;
            }
        })

        builder.addCase(updateProduct.rejected, (state,action)=>{
            state.loading = false
            state.error = action.error.message || "something wrong"
        })


        // fetch for similar products
        
        builder.addCase( fetchSimilarProducts.pending, (state)=>{
            state.loading = true
            state.error= null
        })
        builder.addCase(fetchSimilarProducts.fulfilled, (state,action)=>{
            state.loading= false
            state.products = action.payload
            
        })

        builder.addCase(fetchSimilarProducts.rejected, (state,action)=>{
            state.loading = false
            state.error = action.error.message || "something wrong"
        })
    }
})

export const {setFilters, clearFilters} = productsSlice.actions
export default productsSlice.reducer