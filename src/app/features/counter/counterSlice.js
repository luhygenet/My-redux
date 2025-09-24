import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { val: 0 },
  reducers: {
    increment: (currState) => {
      currState.val += 1;
    },
    decrement: (currState) => {
      currState.val -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
