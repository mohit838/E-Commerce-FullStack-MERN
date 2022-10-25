import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

// Get Admin Token From Local Storage
const adminTokenStorage = localStorage.getItem("admin-token");

// TOKEN expire verifying
function tokenVerify() {
  if (adminTokenStorage) {
    const tokenDecode = jwtDecode(adminTokenStorage);
    const expireIn = new Date(tokenDecode.exp * 1000);
    if (new Date() > expireIn) {
      localStorage.removeItem("admin-token");
      return null;
    } else {
      return adminTokenStorage;
    }
  } else {
    return null;
  }
}

const authReducer = createSlice({
  name: "authReducer",
  initialState: {
    adminToken: tokenVerify(),
    userToken: "",
  },
  reducers: {
    setAdminToken: (state, action) => {
      state.adminToken = action.payload;
    },

    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },

    logout: (state) => {
      localStorage.removeItem("admin-token");
      state.adminToken = null;
    },
  },
});

export const { setAdminToken, setUserToken, logout } = authReducer.actions;
export default authReducer.reducer;
