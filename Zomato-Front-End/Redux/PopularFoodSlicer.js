import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "@env";
import { Alert } from "react-native";

//get popular foods
export const getPopularProducts = createAsyncThunk(
  "Foods/getPopularProducts",
  async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `${BASE_URL}/api/food/get-popular-foods`,
      });
      return response?.data?.data;
    } catch (error) {
      if (error?.response) {
        return Alert.alert("Error", error?.response?.data?.message);
      } else {
        return Alert.alert("Error", error?.message);
      }
    }
  }
);

const initialState = {
  isLoading: false,
  popularFoods: [],
  error: null,
};

const PopularFoodSlicer = createSlice({
  name: "popularFood",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPopularProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getPopularProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.popularFoods = action.payload;
    });
    builder.addCase(getPopularProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default PopularFoodSlicer.reducer;
