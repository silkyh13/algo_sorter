import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/message";
import inputArrayReducer from "./slices/inputArray";

const store = configureStore({
  reducer: { inputArray: inputArrayReducer, message: messageReducer },
});
export default store;
