import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: { value: "Type number and hit enter" },
  reducers: {
    setMessageState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setMessageState } = messageSlice.actions;
export const stateOfMessage = (state) => state.message;

export default messageSlice.reducer;
