import { createSlice } from "@reduxjs/toolkit";

const globalReducerCat = createSlice({
  name: "globalReducerCat",
  initialState: {
    success: "",
  },
  reducers: {
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
});

export const { setSuccess } = globalReducerCat.actions;
export default globalReducerCat.reducer;
