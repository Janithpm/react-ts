import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type userType = {
    id: string
    first_name: string
    last_name: string
    email: string
    role: string
    profile_picture: string
}

const initialState = {
    uid: '',
    first_name: '',
    last_name: '',
    email: '',
    role: '',
    isAuthenticated: false,
    profile_picture: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<userType>) => {
            state.uid = action.payload.id
            state.first_name = action.payload.first_name
            state.last_name = action.payload.last_name
            state.email = action.payload.email
            state.role = action.payload.role
            state.isAuthenticated = true
            state.profile_picture = action.payload.profile_picture
        },
        removeUser: (state) => {
            // remove user from state
            state.uid = ''
            state.first_name = ''
            state.last_name = ''
            state.email = ''
            state.role = ''
            state.isAuthenticated = false
            state.profile_picture = ''
        },
    },
})

export const { setUser, removeUser } = authSlice.actions
export const authReducer = authSlice.reducer
