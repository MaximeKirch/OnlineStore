import { createSlice } from "@reduxjs/toolkit"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

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

export default productsSlice.reducer

// Actions 

export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch(productsLoading());
        await getDocs(collection(db, "products"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            dispatch(productsSuccess(newData));                
        })
    } catch (error) {
        console.log(error)
    }
}
