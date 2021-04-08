import { createSlice } from "@reduxjs/toolkit";
import { mergeSort } from "../../sortingAlgo";

export const inputArraySlice = createSlice({
  name: "inputArray",
  initialState: { value: ["344", "567", "452", "888", "999"] },
  reducers: {
    setInputArray: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteValue: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    merge: async (state, action) => {
      state.value = await mergeSort(state.value);
    },
  },
});

export const { setInputArray, deleteValue, merge } = inputArraySlice.actions;
export const inputArrayState = (state) => state.inputArray;

export default inputArraySlice.reducer;
