import type { RouteObject } from "react-router-dom";
import { AppLayout } from "../layout/Main";
import { UserLogin } from "../views/login/UserLogin";
import { lazy } from "react";
import { load } from "./utils";

// 老是报错，无语，解决多时发现是 函数组件需要默认导出 的问题
const AuthManege = lazy(() => import("../views/AuthManege") as any);
const UserManage = lazy(() => import("../views/UserManage") as any);

// 普通路由
export const commonRoute: RouteObject[] = [
  {
    path: "/login",
    element: <UserLogin />,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
];

// 权限路由
export const authRoute: RouteObject[] = [
  {
    id: "/",
    path: "/",
    element: <AppLayout />,
    children: [
      {
        id: "/user",
        path: "/user",
        element: load(UserManage),
      },
      {
        id: "/auth",
        path: "/auth",
        element: load(AuthManege),
      },
    ],
  },
];

// 白名单
export const whiteList = commonRoute.map((el) => el.path);
