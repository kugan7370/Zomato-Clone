import { combineReducers, configureStore } from '@reduxjs/toolkit'
import CartReducer from './CartSlicer'
import FoodReducers from './FoodSlicer'
import PopularFoodReducers from './PopularFoodSlicer'
import UserReducers from './UserSlicer'
import OrderReducers from './OrderSlicer'
import FavoriteReducers from './FavoriteSlicer'
import CategoryReducers from './CategorySlicer'


import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CategorySlicer from './CategorySlicer'
import SwitchReducer from './SwitchSlicer'

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
}

const rootReducer = combineReducers({
    foods: FoodReducers,
    popularFoods: PopularFoodReducers,
    cart: CartReducer,
    user: UserReducers,
    order: OrderReducers,
    favorite: FavoriteReducers,
    categories: CategoryReducers,
    switches: SwitchReducer

})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)

