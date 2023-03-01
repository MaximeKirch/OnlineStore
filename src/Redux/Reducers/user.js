import { createSlice } from "@reduxjs/toolkit";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase";

const initialState = {
  user: [
    // {
    //   id: 1,
    //   firstName: "Terry",
    //   lastName: "Medhurst",
    //   gender: "male",
    //   email: "atuny0@sohu.com",
    //   phone: "+63 791 675 8914",
    //   username: "atuny0",
    //   password: "9uQFF1Lh",
    //   birthDate: "2000-12-25",
    //   image: "https://robohash.org/hicveldicta.png",
    //   address: {
    //     address: "1745 T Street Southeast",
    //     city: "Washington",
    //     postalCode: "20020",
    //     state: "DC",
    //     country: "USA",
    //   },
    // },
  ],
  loading: false,
  error: null,
  exists: false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      fetchUserStart: state => {
        state.loading = true;
        state.error = null;
      },
      fetchUserSuccess: (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.exists = true;
      },
      fetchUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      userLogoutStart: (state,action) => {
        state.loading = true;
        state.error = null;
      },
      userLogoutSuccess: (state, action) => {
        state.loading = false;
        state.user = null;
        state.exists = false;
      },
      userLogoutError: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }
    },
  });

export const {fetchUserStart, fetchUserSuccess, fetchUserFailure, userLogoutStart, userLogoutSuccess, userLogoutError} = userSlice.actions;

export const userReducer = userSlice.reducer;


// Actions 

export const fetchUserById = userId => async dispatch => {
    try {
        dispatch(fetchUserStart());
    
        const userRef = doc(db, "users", userId)
        const userSnapshot = await getDoc(userRef);
    
        if (!userSnapshot.exists) {
          throw new Error('User not found');
        }
    
        const userData = userSnapshot.data();
    
        dispatch(fetchUserSuccess(userData));
      } catch (error) {
        dispatch(fetchUserFailure(error.message));
      }
}

export const userLogout = () => async dispatch => {

    try {
      dispatch(userLogoutStart())
      .then(dispatch(userLogoutSuccess()))      
    } catch (error) {
      dispatch(userLogoutFailure())
    }
}