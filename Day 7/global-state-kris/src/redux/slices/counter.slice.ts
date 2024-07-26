import { createSlice } from "@reduxjs/toolkit";

interface ICounter {
  value: number;
}
interface ICounterAction {
  payload: number;
}

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state: ICounter) => {
      state.value = state.value + 1;
    },
    decrement: (state: ICounter) => {
      state.value = state.value - 1;
    },
    incrementByAmount: (state: ICounter, action: ICounterAction) => {
      state.value = state.value + action.payload;
    },
    decrementByAmount: (state: ICounter, action: ICounterAction) => {
      state.value = state.value - action.payload;
    },
    reset: (state: ICounter) => {
      state.value = 0;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} = counterSlice.actions;
const counterReducer = counterSlice.reducer;
export default counterReducer;
