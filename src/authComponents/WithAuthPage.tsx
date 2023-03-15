// import { ReactNode } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../store/slice/authSlice";
import { Spin } from "antd";
import { whiteList } from "../router/routes.config";

export function WithAuthPage({ children }: any) {
  /**
   * 1.有没有token
   * 2.有 跳转 return APP
   * 3.无 跳转 login return <navagater to="login">
   * 4.
   */
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { token, role } = useSelector((state: any) => state.auth);

  if (token) {
    // 已登录状态进入登录页，不被允许
    if (pathname === "/login") {
      return <Navigate to="/"></Navigate>;
    }

    // 如果登录了，并且获取了角色信息等，直接返回
    if (role) {
      return children;
    }

    // 没有获取角色权限信息，请求并进入加载状态
    dispatch(auth() as any);
    return <Spin tip="Loading..."></Spin>;
  } else {
    // 如果没有登录,在白名单，直接返回
    if (whiteList.includes(pathname)) {
      return children;
    } else {
      return <Navigate to="/login"></Navigate>;
    }
  }
}
