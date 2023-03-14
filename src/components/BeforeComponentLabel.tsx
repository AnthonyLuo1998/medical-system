import styled from "styled-components";
import { Space } from "antd";
import { ReactNode } from "react";

interface BeforeComponentLabelType {
  children: ReactNode;
  size: string;
  label: string;
}

export function BeforeComponentLabel(props: BeforeComponentLabelType) {
  return (
    <Space>
      <CustomLabel size={props.size}>{props.label}：</CustomLabel>
      {props.children}
    </Space>
  );
}

const CustomLabel = styled.div`
  font-size: ${(props: { size: string }) => props.size || "12px"};
`;
