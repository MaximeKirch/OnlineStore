import { configureStore } from '@reduxjs/toolkit'
import  productsReducer  from "./Reducers/products"
import { cartReducer } from './Reducers/cart'
import { persistStore, persistReducer } from 'redux-persist'
import  storage  from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
    reducer : {
        products : productsReducer,
        cart : persistedCartReducer
    }
})

export const persistor = persistStore(store);