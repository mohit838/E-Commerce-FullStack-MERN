import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

// TOKEN expire verifying
function tokenVerify(tokenName) {
  const tokenStorage = localStorage.getItem(tokenName);

  if (tokenStorage) {
    const tokenDecode = jwtDecode(tokenStorage);
    const expireIn = new Date(tokenDecode.exp * 1000);
    if (new Date() > expireIn) {
      localStorage.removeItem(tokenName);
      return null;
    } else {
      return tokenStorage;
    }
  } else {
    return null;
  }
}

const authReducer = createSlice({
  name: "authReducer",
  initialState: {
    adminToken: tokenVerify("admin-token"),
    userToken: tokenVerify("user-token"),
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
