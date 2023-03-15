import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      username: "",
      nickname: "",
    },
    token: "",
  },
  reducers: {
    login(state, action) {
      state.userInfo.username = "Jum1274001055";
      state.userInfo.nickname = "Jum";
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
