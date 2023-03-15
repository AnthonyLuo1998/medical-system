import styled from "styled-components";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { login } from "../../store/slice/authSlice";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

export function UserLogin() {
  const dispatch = useDispatch();

  return (
    <Container>
      <LoginBox>
        <LoginTitle>XXX管理系统平台</LoginTitle>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={(payload: any) => dispatch(login(payload) as any)}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </LoginBox>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: skyblue;
`;

const LoginBox = styled.div`
  width: 40%;
  height: 50%;
  border-radius: 12px;
  /* background-color: white; */
  padding: 20px;
`;

const LoginTitle = styled.p`
  width: 100%;
  text-align: center;
  font-size: large;
  font-weight: bold;
`;
