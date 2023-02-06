import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from "@env"
import { Alert } from 'react-native'
import { getToken } from './utils/getToken'



// add card items
export const addCardItemsToDb = async (data) => {
    const token = await getToken()
    try {
        const response = await axios({
            method: "post",
            url: `${BASE_URL}/api/cart/add-cart-item`,
            headers: {
                "Authorization": `Bearer ${token}`
            },
            data
        })
        return response.data
    } catch (error) {

        if (error?.response) {
            return Alert.alert('Error', error?.response?.data?.message)
        }
        else {
            return Alert.alert('Error', error?.message)
        }
    }
}

//increment cart item
export const incrementCartItemFromDb = async (foodId) => {
    const token = await getToken()
    try {
        const response = await axios({
            method: "PUT",
            url: `${BASE_URL}/api/cart/increment-cart-item-quantity/${foodId}`,
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        return response.data
    } catch (error) {
        if (error?.response) {
            return Alert.alert('Error', error?.response?.data?.message)
        }
        else {
            return Alert.alert('Error', error?.message)
        }
    }
}


//decrement cart item
export const decrementCartItemFromDb = async (foodId) => {
    const token = await getToken()
    try {
        const response = await axios({
            method: "PUT",
            url: `${BASE_URL}/api/cart/decrement-cart-item-quantity/${foodId}`,
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        return response.data
    } catch (error) {
        if (error?.response) {
            return Alert.alert('Error', error?.response?.data?.message)
        }
        else {
            return Alert.alert('Error', error?.message)
        }
    }
}


//delete cart item
export const deleteCartItemFromDb = async () => {
    const token = await getToken()
    try {
        const response = await axios({
            method: "delete",
            url: `${BASE_URL}/api/cart/delete-cart-item`,
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        return response.data
    } catch (error) {
        if (error?.response) {
            return Alert.alert('Error', error?.response?.data?.message)
        }
        else {
            return Alert.alert('Error', error?.message)
        }
    }
}










// get card items from Db
export const getCardItemsFromDb = createAsyncThunk('get/cardItems', async () => {
    const token = await getToken()
    try {
        const response = await axios({
            method: "get",
            url: `${BASE_URL}/api/cart/get-cart-items`,
            headers: {
                "Authorization": `Bearer ${token}`
            },
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
    isLoadingCard: false,
    cartItems: [],
    errorCard: null
}



const CartSlicer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCarts: (state, action) => {
            //filter
            const isAdded = state.cartItems.filter((item) => item.foodId === action.payload.foodId).length > 0
            if (isAdded) {
                //remove from cart
                state.cartItems = state.cartItems.filter((item) => item.foodId !== action.payload.foodId)
                //add to cart
                state.cartItems.push(action.payload)

            }
            else {
                state.cartItems.push(action.payload)
            }
        },

        incrementItem: (state, action) => {
            const index = state.cartItems.findIndex((item) => item.foodId === action.payload.foodId)
            if (index >= 0) {
                state.cartItems[index].quantity += 1
            }
        },
        decrementItem: (state, action) => {
            const index = state.cartItems.findIndex((item) => item.foodId === action.payload.foodId)
            if (index >= 0) {
                if (state.cartItems[index].quantity > 1) {
                    state.cartItems[index].quantity -= 1
                }
                else {
                    state.cartItems = state.cartItems.filter((item) => item.foodId !== action.payload.foodId)
                }


            }
            else {
                state.cartItems = state.cartItems.filter((item) => item.foodId !== action.payload.foodId)
            }
        },
        //clear cart
        clearCart: (state) => {
            state.cartItems = []
        }



    },
    extraReducers: (builder) => {
        builder.addCase(getCardItemsFromDb.pending, (state) => {
            state.isLoadingCard = true
        })
        builder.addCase(getCardItemsFromDb.fulfilled, (state, action) => {
            state.isLoadingCard = false
            state.cartItems = action.payload
        })
        builder.addCase(getCardItemsFromDb.rejected, (state, action) => {
            state.isLoadingCard = false
            state.errorCard = action.error.message
        })
    }

});


export const { addCarts, incrementItem, decrementItem, clearCart } = CartSlicer.actions

export default CartSlicer.reducer