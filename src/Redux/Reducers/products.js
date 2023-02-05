import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products : [],
    loading : "idle"
}


export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers : {
        productsLoading : (state, action) => {
            if(state.loading === 'idle') {
                state.loading = "pending"
                state.products = action.payload;
            }
        },
        productsSuccess : (state, action) => {
            if(state.loading ==="pending") {
                state.loading = "idle";
                state.products = action.payload
            }
        },
    },
})

export const {productsLoading, productsSuccess } = productsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch(productsLoading());
        const response = await fetch("https://fakestoreapi.com/products/")
        const data = await response.json()
        dispatch(productsSuccess(data))
    } catch (error) {
        console.log(error)
    }
}

export default productsSlice.reducer