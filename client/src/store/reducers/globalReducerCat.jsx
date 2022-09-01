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

    clearMessage: (state) => {
      state.success = "";
    },
  },
});

export const { setSuccess, clearMessage } = globalReducerCat.actions;
export default globalReducerCat.reducer;
