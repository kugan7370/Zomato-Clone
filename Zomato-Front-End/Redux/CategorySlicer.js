import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "@env";
import { Alert } from "react-native";

//get categories
export const getCategories = createAsyncThunk(
  "Categories/getCategories",
  async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `${BASE_URL}/api/categories/get-categories`,
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
  categories: [],
  isCategoryLoading: false,
  error: null,
};

const CategorySlicer = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state, action) => {
      state.isCategoryLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.isCategoryLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.isCategoryLoading = false;
      state.error = action.payload;
    });
  },
});

export default CategorySlicer.reducer;
