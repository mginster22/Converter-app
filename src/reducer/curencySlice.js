import { createSlice } from "@reduxjs/toolkit";

const curencySlice = createSlice({
  name: "currency",
  initialState: {
    rates: [],
  },
  reducers: {
    setRates: (state, action) => {
      state.rates = action.payload;
    },
  },
});

export const { setRates } = curencySlice.actions;
export default curencySlice.reducer;
