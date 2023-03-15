import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const { Content } = Layout;

export function AppLayout() {
  const navigate = useNavigate();

  const userInfo = useSelector((state: any) => state.user);

  console.log(userInfo);
  return (
    <Layout style={{ width: "100vw", height: "100vh" }}>
      {/* 顶部栏 */}
      <Navbar></Navbar>
      <Layout>
        {/* 侧边栏 */}
        <Sidebar></Sidebar>
        <Layout style={{ padding: "0 24px 24px" }}>
          {/* 内容 */}
          <Content style={{ padding: "10px 0 10px 0" }}>
            {/* 子路由 */}
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
