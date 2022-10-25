import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

// Customer Token
const customersToken = localStorage.getItem("user-token");

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
    user: customersToken ? jwtDecode(customersToken) : null,
  },
  reducers: {
    setAdminToken: (state, action) => {
      state.adminToken = action.payload;
    },

    setUserToken: (state, action) => {
      state.userToken = action.payload;
      state.user = jwtDecode(action.payload);
    },

    logout: (state, { payload }) => {
      localStorage.removeItem(payload);
      if (payload === "admin-token") {
        state.adminToken = null;
      } else if (payload === "user-token") {
        state.userToken = null;
        state.user = null;
      }
    },
  },
});

export const { setAdminToken, setUserToken, logout } = authReducer.actions;
export default authReducer.reducer;
