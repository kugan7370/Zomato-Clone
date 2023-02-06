import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from "@env"
//get food
export const getFoods = createAsyncThunk("Foods/getFoods", async () => {
    try {
        const response = await axios({
            method: "GET",
            url: `${BASE_URL}/api/food/get-foods`,
        })

        return response?.data?.data
    } catch (error) {
        if (error?.response) {
            return Alert.alert('Error', error?.response?.data?.message)
        }
        else {
            return Alert.alert('Error', error?.message)
        }
    }

})




const initialState = {
    isLoading: false,
    Foods: [],
    error: null,

}

const FoodSlicer = createSlice({
    name: "Foods",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFoods.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getFoods.fulfilled, (state, action) => {
            state.isLoading = false
            state.Foods = action.payload
        })
        builder.addCase(getFoods.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }


});



export default FoodSlicer.reducer