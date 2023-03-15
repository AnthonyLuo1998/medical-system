import { createElement } from "react";
import { Layout, Menu } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

import type { MenuProps } from "antd";

const { Sider } = Layout;

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: createElement(icon),
    label: `subnav ${key}`,
  };
});
export default function Sidebar() {
  return (
    <Sider width={240}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{
          height: "100%",
          borderRight: 0,
        }}
        items={items2}
      />
    </Sider>
  );
}
