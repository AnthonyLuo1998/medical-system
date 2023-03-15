import { useRoutes } from "react-router-dom";
import { filterRoutes } from "./utils";
import { authRoute, commonRoute } from "./routes.config";
import { useSelector } from "react-redux";

export function useAppRoutes() {
  // const cloneRoutes = JSON.parse(JSON.stringify(authRoute));
  const { routes } = useSelector((state: any) => state.auth);
  // 权限过滤
  filterRoutes(authRoute, routes);
  console.log(authRoute);
  return useRoutes([...authRoute, ...commonRoute]);
}
