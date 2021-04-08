import { createSlice } from "@reduxjs/toolkit";
import { mergeSort } from "../../sortingAlgo";

export const inputArraySlice = createSlice({
  name: "inputArray",
  initialState: {
    value: ["888", "567", "452", "344", "759", "659", "733"],
  },
  reducers: {
    setInputArray: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteValue: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    setNewArray: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {
  setInputArray,
  deleteValue,
  setNewArray,
} = inputArraySlice.actions;
export const inputArrayState = (state) => state.inputArray;

export default inputArraySlice.reducer;
