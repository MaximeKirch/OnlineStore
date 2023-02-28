import { createSlice } from "@reduxjs/toolkit"
import { collection, getDocs, addDoc, QuerySnapshot } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase";

const initialState = {
    products : [],
    loading : "idle",
    error: null
}


export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers : {
        productsFetchLoading : (state, action) => {
            if(state.loading === 'idle') {
                state.loading = "pending"
                state.products = action.payload;
            }
        },
        productsFetchSuccess : (state, action) => {
            if(state.loading ==="pending") {
                state.loading = "idle";
                state.products = action.payload
            }
        },
        productsFetchError : (state, action) => {
            if(state.loading ==="pending") {
                state.loading = 'idle';
                state.error = action.payload
            }
        },
        productAddLoading: (state, action) => {
            if(state.loading === 'idle') {
                state.loading = 'pending'
            }
        },
        productAddSuccess: (state, action) => {
            if(state.loading === 'pending') {
                state.loading = 'idle'
                state.products = [...state.products, action.payload]
            }
        },
        productAddError: (state, action) => {
            if(state.loading === 'pending') {
                state.loading = 'idle'
                state.error = action.payload
            }
        }
    },
})

export const {productsFetchLoading, productsFetchSuccess, productsFetchError, productAddLoading, productAddSuccess, productAddError } = productsSlice.actions;

export default productsSlice.reducer

// Actions 

export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch(productsFetchLoading());
        await getDocs(collection(db, "products"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            dispatch(productsFetchSuccess(newData));                
        })
    } catch (error) {
        dispatch(productsFetchError(error.message))
    }
}

export const addArticle = (article) => {
    return async (dispatch) => {
        dispatch(productAddLoading());

        try {
            // Ajout de l'article à Firebase
            await addDoc(collection(db,'products'), article)
                .then((querySnapshot) => {
                    console.log(querySnapshot)
                    // const article = querySnapshot.docs
                    // .map((doc) => ({...doc.data(), id:doc.id }));
                    // dispatch(productAddSuccess(article))
                });
        } catch (error) {
            dispatch(productAddError(error.message))
        }
    }
} 
