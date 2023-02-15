import { configureStore } from '@reduxjs/toolkit'
import productsReducer from "./Reducers/products"

export const store = configureStore({
    reducer : {
        products : productsReducer,
    }
})