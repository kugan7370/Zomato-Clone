import { combineReducers, configureStore } from '@reduxjs/toolkit'
import FoodReducers from './FoodSlicer'
import PopularFoodReducers from './PopularFoodSlicer'


export const store = configureStore({
    reducer: {
        foods: FoodReducers,
        popularFoods: PopularFoodReducers

    },
})

