import { createSlice } from "@reduxjs/toolkit";

// Get Admin Token From Local Storage
const adminTokenStorage = localStorage.getItem("admin-token");

const authReducer = createSlice({
  name: "authReducer",
  initialState: {
    adminToken: adminTokenStorage ? adminTokenStorage : null,
  },
  reducers: {
    setAdminToken: (state, action) => {
      state.adminToken = action.payload;
    },
  },
});

export const { setAdminToken } = authReducer.actions;
export default authReducer.reducer;
