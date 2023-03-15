import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import authSlice from "./slice/authSlice";
export default configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
  },
});
