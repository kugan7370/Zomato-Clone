import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isRating: false,
    isDelivery: false,
    isMaxPrice: null,
    isMinPrice: null,


}

const SwitchSlicer = createSlice({
    name: 'switches',
    initialState,
    reducers: {
        setIsRating: (state, action) => {
            state.isRating = action.payload
        },
        setIsDelivery: (state, action) => {
            state.isDelivery = action.payload
        },
        setMaxPrice: (state, action) => {
            state.isMaxPrice = action.payload
        },
        setMinPrice: (state, action) => {
            state.isMinPrice = action.payload
        },
        resetSwitches: (state) => {
            state.isRating = false
            state.isDelivery = false
            state.isMaxPrice = null
            state.isMinPrice = null
        }


    }
});

export const { setIsRating, setIsDelivery, setMaxPrice, setMinPrice, resetSwitches } = SwitchSlicer.actions

export default SwitchSlicer.reducer