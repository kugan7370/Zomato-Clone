import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from "@env"


// add card items
export const addCardItems = createAsyncThunk("Cart/addCardItems", async (data) => {
    return data
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
        }

    },

});


export const { addCarts, incrementItem, decrementItem } = CartSlicer.actions

export default CartSlicer.reducer