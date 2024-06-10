import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isAuth: false,
    token: "",
    role: "",
    profile: {},
  },
  reducers: {
    getprofile(state, actions) {
      return {
        ...state,
        profile: actions.payload,
      };
    },
    login(state, actions) {
      const decoded = jwtDecode(actions.payload);
      return {
        ...state,
        isAuth: true,
        token: actions.payload,
        role: decoded.role,
      };
    },
    logout(state, actions) {
      return {
        ...state,
        isAuth: false,
        token: "",
        role: "",
      };
    },
  },
});

export const { login, logout, getprofile } = userSlice.actions;
export default userSlice.reducer;
