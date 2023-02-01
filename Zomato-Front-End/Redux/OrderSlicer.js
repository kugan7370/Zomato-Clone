import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Alert } from 'react-native'
import { BASE_URL } from "@env"

// get orders
export const getOrders = createAsyncThunk("Order/getOrders", async () => {
    try {
        const response = await axios({
            method: "GET",
            url: `${BASE_URL}/api/order/get-orders`,
        })

        return response?.data
    } catch (error) {
        return error
    }

})

//add orders
export const addOrder = async (data, token) => {
    try {
        const response = await axios({
            method: "POST",
            url: `${BASE_URL}/api/order/add-orders`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        })

        return response?.data
    } catch (error) {
        Alert.alert("Error", error?.response?.data?.message)
    }

}



const initialState = {
    isLoading: false,
    Orders: [],
    error: null,


}

const OrderSlicer = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOrders.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getOrders.fulfilled, (state, action) => {
            state.isLoading = false
            state.Orders = action.payload
        })
        builder.addCase(getOrders.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
});



export default OrderSlicer.reducer