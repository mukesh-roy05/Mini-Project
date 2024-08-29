import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/counter/counterSlice";
import historyReducer from "../features/counter/historySlice";
const store = configureStore({
  reducer: {
    counter: countReducer,
    history: historyReducer,
  },
});

export default store;
