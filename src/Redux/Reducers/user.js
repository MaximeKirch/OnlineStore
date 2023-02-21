import { createSlice } from "@reduxjs/toolkit";
import { collection, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
  user: [
    {
      id: 1,
      firstName: "Terry",
      lastName: "Medhurst",
      maidenName: "Smitham",
      age: 50,
      gender: "male",
      email: "atuny0@sohu.com",
      phone: "+63 791 675 8914",
      username: "atuny0",
      password: "9uQFF1Lh",
      birthDate: "2000-12-25",
      image: "https://robohash.org/hicveldicta.png",
      bloodGroup: "A−",
      height: 189,
      weight: 75.4,
      eyeColor: "Green",
      hair: { color: "Black", type: "Strands" },
      domain: "slashdot.org",
      ip: "117.29.86.254",
      address: {
        address: "1745 T Street Southeast",
        city: "Washington",
        coordinates: { lat: 38.867033, lng: -76.979235 },
        postalCode: "20020",
        state: "DC",
      },
      macAddress: "13:69:BA:56:A3:74",
      university: "Capitol University",
      bank: {
        cardExpire: "06/22",
        cardNumber: "50380955204220685",
        cardType: "maestro",
        currency: "Peso",
        iban: "NO17 0695 2754 967",
      },
      company: {
        address: {
          address: "629 Debbie Drive",
          city: "Nashville",
          coordinates: { lat: 36.208114, lng: -86.58621199999999 },
          postalCode: "37076",
          state: "TN",
        },
        department: "Marketing",
        name: "Blanda-O'Keefe",
        title: "Help Desk Operator",
      },
      ein: "20-9487066",
      ssn: "661-64-2976",
      userAgent:
        "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24",
    },
  ],
  loading: true,
  error: null,
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
      },
      fetchUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });

export const {fetchUserStart, fetchUserSuccess, fetchUserFailure} = userSlice.actions;

export const userReducer = userSlice.reducer;

// Actions 

export const fetchUserById = userId => async dispatch => {
    try {
        dispatch(fetchUserStart());
    
        const userRef = firestore.collection('users').doc(userId);
        const userSnapshot = await userRef.get();
    
        if (!userSnapshot.exists) {
          throw new Error('User not found');
        }
    
        const userData = userSnapshot.data();
    
        dispatch(fetchUserSuccess(userData));
      } catch (error) {
        dispatch(fetchUserFailure(error.message));
      }
}