import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadData, loadInfo } from "../../mock/info";

export const login = createAsyncThunk("login", async (payload: any) => {
  const res = await loadData();
  return res;
});

export const auth = createAsyncThunk("auth", async () => {
  const res = await loadInfo();
  return res;
});

// const initialState: UserinfoType = {};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    token: localStorage.getItem("ms_token") || "",
    role: "",
    buttons: [] as Array<any>,
    routes: [] as Array<any>,
  },
  reducers: {},
  extraReducers(builder) {
    // 登录逻辑
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      localStorage.setItem("ms_token", payload.token);
    });

    // 获取角色权限
    builder.addCase(auth.fulfilled, (state, { payload }) => {
      state.role = payload.role;
      state.buttons = payload.buttons;
      state.routes = payload.routes;
    });
  },
});

// export const { login } = userSlice.actions;

export default userSlice.reducer;
