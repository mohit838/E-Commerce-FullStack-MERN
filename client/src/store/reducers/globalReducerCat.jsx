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

    clearMsg: (state) => {
      state.success = "";
    },
  },
});

export const { setSuccess, clearMsg } = globalReducerCat.actions;
export default globalReducerCat.reducer;
