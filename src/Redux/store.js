import { configureStore } from '@reduxjs/toolkit'
import productsReducer from "./Reducers/products"
import { cartReducer } from './Reducers/cart'

export const store = configureStore({
    reducer : {
        products : productsReducer,
        cart : cartReducer
    }
})