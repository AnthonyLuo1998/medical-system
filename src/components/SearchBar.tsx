import styled from "styled-components";
import { BeforeComponentLabel } from "./BeforeComponentLabel";
import { Input, DatePicker, Select, Button, Space } from "antd";
import { SearchOutlined, RestFilled } from "@ant-design/icons";
const { RangePicker } = DatePicker;
// const { Option } = Select;
const { Search } = Input;

export function SearchBar() {
  return (
    <SearchBarBox>
      <Space size={40}>
        <BeforeComponentLabel size="14px" label="姓名">
          <Search placeholder="input search text" allowClear />
        </BeforeComponentLabel>

        <BeforeComponentLabel size="14px" label="加入时间">
          <RangePicker showTime />
        </BeforeComponentLabel>

        <BeforeComponentLabel size="14px" label="姓名">
          <Select />
        </BeforeComponentLabel>
      </Space>
      <Space>
        <Button icon={<RestFilled />}>Reset</Button>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
      </Space>
    </SearchBarBox>
  );
}

const SearchBarBox = styled.div`
  width: 100%;
  height: 10%;
  padding: 20px;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 0 0 #eeeeee;
  gap: 20px;
`;
