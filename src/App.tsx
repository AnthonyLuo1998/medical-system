import { useAppRoutes } from "./router/index";
import { ConfigProvider, theme } from "antd";
function App() {
  console.log("刷新了");
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1890ff",
        },
      }}
    >
      {useAppRoutes()}
    </ConfigProvider>
  );
}

export default App;
