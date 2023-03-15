import { FC, Suspense } from "react";
import type { RouteObject } from "react-router-dom";

export function filterRoutes(authRoutes: RouteObject[], authArr: Array<any>) {
  authRoutes.forEach((el, index) => {
    if (!authArr.includes(el.id)) {
      authRoutes.splice(index, 1);
    }
    if (el.children && el.children instanceof Array) {
      filterRoutes(el.children, authArr);
    }
  });
}

export const load = (Comp: FC) => {
  return (
    // 因为路由懒加载，组件需要一段网络请求时间才能加载并渲染
    // 在组件还未渲染时，fallback就生效，来渲染一个加载进度条效果
    // 当组件渲染完成时，fallback就失效了
    <Suspense fallback={<div>加载中...</div>}>
      {/* 所有lazy的组件必须包裹Suspense组件，才能实现功能 */}
      <Comp />
    </Suspense>
  );
};
