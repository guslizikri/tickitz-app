import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    totalPage: null,
    total: null,
    next: null,
    prev: null,
  },
  reducers: {
    meta(state, actions) {
      console.log(actions.payload);
      return {
        ...state,
        totalPage: actions.payload.totalPage,
        total: actions.payload.total,
        next: actions.payload.next,
        prev: actions.payload.prev,
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

export const { meta } = paginationSlice.actions;
export default paginationSlice.reducer;
