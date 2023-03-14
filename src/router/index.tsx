import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { UserManage } from "../views/UserManage";
const commonRoute: RouteObject[] = [
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/user",
    element: <UserManage />,
  },
];

// const asyncRoute: RouteObject[] = [
//   {
//     path: "/admin",
//     element: <div>admin</div>,
//   },
//   {
//     path: "/setting",
//     element: <div>admin</div>,
//   },
// ];

const router = createBrowserRouter(commonRoute);

export { router };
