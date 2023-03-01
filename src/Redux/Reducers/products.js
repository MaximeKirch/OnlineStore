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
        productsFetchLoading : (state) => {
            if(state.loading === 'idle') {
                state.loading = "pending"
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
        productAddLoading: (state) => {
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

    const dbRef = collection(db, 'products')
    return async (dispatch) => {
        dispatch(productAddLoading());

        try {
            // Ajout de l'article à Firebase
            await addDoc(dbRef, article)
                .then(docRef => { 
                    const articleId = docRef._key.path.segments[1]
                    dispatch(productAddSuccess(article, article.id=articleId))
                    alert('Produit ajouté avec succès !')
        });
        } catch (error) {
            dispatch(productAddError(error.message))
        }
    }
} 
