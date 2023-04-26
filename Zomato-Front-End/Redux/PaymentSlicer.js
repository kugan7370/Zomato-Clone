import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Alert } from "react-native";
import { BASE_URL } from "@env";

//add payment
export const addPayment = async (data) => {
  try {
    const response = await axios({
      method: "post",
      url: `${BASE_URL}/api/payment/create-payment`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        amount: data.amount,
      }),
    });

    if (response.data) {
    }
    return response.data;
  } catch (error) {
    if (error?.response) {
      return Alert.alert("Error", error?.response?.data?.message);
    } else {
      return Alert.alert("Error", error?.message);
    }
  }
};
