import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: 'contact',
    initialState : {
        message : {
            firstName : null,
            lastName : null,
            email: null,
            message: null
        }
    },
    reducers : {
        addForm(state, action) {            
            state.message.firstName = action.payload.firstName.current
            state.message.lastName = action.payload.lastName.current
            state.message.email = action.payload.email.current
            state.message.message = action.payload.message.current
        }
    }
})

export const contactReducer = contactSlice.reducer

export const { addForm } = contactSlice.actions