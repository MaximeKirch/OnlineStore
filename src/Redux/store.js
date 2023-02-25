import { configureStore } from '@reduxjs/toolkit'
import  productsReducer  from "./Reducers/products"
import { cartReducer } from './Reducers/cart'
import { userReducer } from "./Reducers/user"
import { persistStore, persistReducer } from 'redux-persist'
import  storage  from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer)
const persistedUserReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
    reducer : {
        products : productsReducer,
        cart : persistedCartReducer,
        user : userReducer
    }
})

export const persistor = persistStore(store);