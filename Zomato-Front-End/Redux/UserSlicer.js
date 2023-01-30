import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { BASE_URL } from "@env"
import { Alert } from 'react-native';


export const userAuth = createAsyncThunk('user/auth', async (data) => {
    try {
        const response = await axios({
            method: 'post',
            url: `${BASE_URL}/api/user/login`,
            data: {
                email: data.email,
                password: data.password
            }

        })
        return response.data

    } catch (error) {
        return Alert.alert('Error', error?.response?.data?.message)

    }
})


const initialState = {
    user: {},
    status: null,
    token: null

}

const UserSlicer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null,
                state.status = null,
                state.token = null

        }
    },
    extraReducers: (builder) => {
        builder.addCase(userAuth.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(userAuth.fulfilled, (state, action) => {
            state.status = 'success'
            state.user = action.payload.user,
                state.token = action.payload.token
        })
        builder.addCase(userAuth.rejected, (state, action) => {
            state.status = 'failed'
        })
    }
});

export const { logout } = UserSlicer.actions



export default UserSlicer.reducer