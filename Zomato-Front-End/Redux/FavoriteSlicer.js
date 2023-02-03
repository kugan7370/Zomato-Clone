import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Alert } from 'react-native'
import { BASE_URL } from "@env"

export const addLikeFoods = async (foodId, token) => {
    try {
        const response = await axios({
            method: 'PUT',
            url: `${BASE_URL}/api/user/like-post/${foodId}`,
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json'
            }

        })
        return response.data

    } catch (error) {
        return Alert.alert('Error', error?.response?.data?.message)

    }
}

export const getLikeFoods = createAsyncThunk('get/LikesFoods', async (token) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `${BASE_URL}/api/user/get-user-like-foods`,
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json'
            }

        })
        console.log(response?.data?.data);
        return response?.data?.data
    }
    catch (error) {
        return Alert.alert('Error', error?.response?.data?.message)
    }
})




const initialState = {
    favorite: [],


}

const FavoriteSlicer = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        handleLike: (state, action) => {
            //check already liked
            const isLiked = state.favorite.filter((item) => item._id === action.payload._id).length > 0
            if (isLiked) {
                //remove from favorite
                state.favorite = state.favorite.filter((item) => item._id !== action.payload._id)
            }
            else {
                state.favorite.push(action.payload)
            }
        },
        clearFavourite: (state) => {
            state.favorite = []
        },

    },
    extraReducers: (builder) => {
        builder.addCase(getLikeFoods.fulfilled, (state, action) => {
            state.favorite = action.payload
        })
    }
});

export const { handleLike, clearFavourite } = FavoriteSlicer.actions

export default FavoriteSlicer.reducer