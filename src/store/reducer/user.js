import { createSlice } from '@reduxjs/toolkit'
import {jwtDecode} from 'jwt-decode';

const userSlice = createSlice({
    name: 'users',
    initialState: {
        isAuth: false,
        token: '',
        role: ''
    },
    reducers: {
        login(state, actions) {
            const decoded = jwtDecode(actions.payload)
            return {
                ...state,
                isAuth: true,
                token: actions.payload,
                role: decoded.role
            }
        },
        logout(state, actions) {
            return {
                ...state,
                isAuth: false,
                token: '',
                role: ''
            }
        },
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer